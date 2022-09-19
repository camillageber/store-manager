const productsService = require('../../../src/services/productsService');
const productsModel = require('../../../src/models/productsModel');
const mockProduct = require('../mocks/products.mock');
const sinon = require('sinon');
const { expect } = require('chai');

describe('Testa a rota /products na camada Service', function () {

  it('Testando a função findProducts para encontrar todos os produtos', async function () {
    sinon.stub(productsModel, 'findProducts').resolves([mockProduct.productsResult]);

    const result = await productsService.findProducts();

    expect(result).to.be.deep.equal({ type: null, message: [mockProduct.productsResult]});
  });

  it('Testando a função findProductsById para encontrar um produto', async function () {
    sinon.stub(productsModel, 'findProductsById').resolves([mockProduct.productsResult[0]]);

    const result = await productsService.findProductsById(1);

    expect(result).to.be.deep.equal({ type: null, message: [mockProduct.productsResult[0]] });
  });

  it('Testando a função createProduct para cadastrar um novo produto', async function () {
    sinon.stub(productsModel, 'createProduct').resolves([{ insertId: 17 }]);

    const product = {
      id: 17,
      name: 'Cinto de utilidades do Batman',
    };

    const result = await productsService.createProduct(product);

    expect(result).to.be.deep.equal(
      { type: null, message: { id: 17, name: 'Cinto de utilidades do Batman' } });
  });

    afterEach(() => sinon.restore());
});