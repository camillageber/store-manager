const connection = require('../../../src/models/connection');
const productsModel = require('../../../src/models/productsModel');
const mockProduct = require('../mocks/products.mock');
const sinon = require('sinon');
const { expect } = require('chai');

describe('Testa a rota /products na camada Model', function () {
  
  it('Testando a função findProducts para encontrar todos os produtos', async function () {
    sinon.stub(connection, 'execute').resolves([mockProduct.productsResult]);

    const result = await productsModel.findProducts();

    expect(result).to.be.deep.equal(mockProduct.productsResult);
  });

  it('Testando a função findProductsById para encontrar um produto', async function () {
    sinon.stub(connection, 'execute').resolves([mockProduct.productsResult[0]]);

    const result = await productsModel.findProductsById(1);

    expect(result).to.be.deep.equal(mockProduct.productsResult[0]);
  });

  afterEach(() => sinon.restore());
});