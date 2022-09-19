const productsController = require('../../../src/controllers/productsController');
const productsService = require('../../../src/services/productsService');
const mockProduct = require('../mocks/products.mock');
const sinon = require('sinon');
const { expect } = require('chai');

describe('Testa a rota /products na camada Controller', function () {

  it('Testando a função findProducts para encontrar todos os produtos', async function () {
    sinon.stub(productsService, 'findProducts').resolves(mockProduct.productsResult);
    
    const req = {};
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.findProducts(req, res);

    expect(res.status.calledWith(200)).to.be.true;
  });

  it('Testando a função findProductsById para encontrar um produto - caso de sucesso', async function () {
    sinon.stub(productsService, 'findProductsById').resolves({type: null, message: mockProduct.productsResult[0]});

    const req = { params: { id: 1 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.findProductsById(req, res);

     expect(res.status.calledWith(200)).to.be.true;
  });
  
   it('Testando a função findProductsById para encontrar um produto - caso de falha', async function () {
     sinon.stub(productsService, 'findProductsById').resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' });

    const req = { params: { id: 17 } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.findProductsById(req, res);

     expect(res.status.calledWith(404)).to.be.true;
   });

  it('Testando a função createProduct para cadastrar um novo produto - caso de sucesso', async function () { 
    sinon.stub(productsService, 'createProduct').resolves({ type: null, message: 'sucesso' });

    const req = { body: { name: 'Cinto de utilidades do Batman' } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.createProduct(req, res);

    expect(res.status.calledWith(201)).to.be.true;

  });

    it('Testando a função createProduct para cadastrar um novo produto - caso de falha', async function () { 
    sinon.stub(productsService, 'createProduct').resolves({ type: 500, message: 'error' });

    const req = { body: { name: 'Cinto de utilidades do Batman' } };
    const res = {};

    res.status = sinon.stub().returns(res);
    res.json = sinon.stub().returns();

    await productsController.createProduct(req, res);

    expect(res.status.calledWith(500)).to.be.true;
  });
  
  afterEach(() => sinon.restore());
});

