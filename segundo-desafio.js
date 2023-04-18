class ProductManager {
    constructor() {
      this.products = [];
    }
  
    getProducts() {
      return this.products;
    }
  
    addProduct(product) {
      const id = Math.floor(Math.random() * 1000000) + 1; 
      const newProduct = { ...product, id }; 
      this.products.push(newProduct); 
      return newProduct; 
    }
  
    getProductById(id) {
      const product = this.products.find((p) => p.id === id); 
      if (!product) {
        throw new Error("No se encontró el producto");
      }
      return product;
    }
  
    updateProduct(id, update) {
      const productIndex = this.products.findIndex((p) => p.id === id); 
      if (productIndex === -1) {
        throw new Error("No se encontró el producto");
      }
      const updatedProduct = { ...this.products[productIndex], ...update }; 
      this.products[productIndex] = updatedProduct; 
      return updatedProduct; 
    }
  
    deleteProduct(id) {
      const productIndex = this.products.findIndex((p) => p.id === id); 
      if (productIndex === -1) {
        throw new Error("No se encontró el producto");
      }
      const deletedProduct = this.products[productIndex]; 
      this.products.splice(productIndex, 1); 
      return deletedProduct; 
    }
  }
  
  const productManager = new ProductManager();
  
  console.log(productManager.getProducts()); // []

  const newProduct = productManager.addProduct({
    title: "Alfajor de Dulce de Leche",
    description: "Bañado en chocolate con dulce de leche",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25,
  });
  
  
  console.log(newProduct); 
  
  console.log(productManager.getProducts()); 
  
  console.log(productManager.getProductById(newProduct.id)); 
  