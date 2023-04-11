class ProductManager{
    constructor(){
        this.products = []
        this.index = []
    }

    generateCode = (largo) =>{
        let data = "zxcvbnmasdfghjklñqwertyuiop123456789"
        data = data.split("")
        let acumulador = []
        for (let i = 0 ; i< largo ; i++ ){
            let codigoAleatorio = Math.floor(Math.random()*(data.length))
            acumulador.push(data[codigoAleatorio])
        }
        return acumulador.join("")
    }

    getProducts = () =>{
        return this.products
    }

    addProduct = (title, description, price, thumbnail, stock) => {
        
        this.index++
        const id = this.index

        const code = this.generateCode(6)

        const product = {id, title, description, price, thumbnail, code, stock}

        if (!id || !title || !description || !price || !thumbnail || !code || !stock) {
            return console.log("\n* Faltan datos en " + product.title + " *\n")
        }

        //validar que no se repita title

        this.products.push(product)
    }
}

const manager = new ProductManager()
manager.addProduct("Alfajor", "Dulce de leche", 200, "img", 50)
manager.addProduct("Factura", "Medialuna", 100, "img", 30)
manager.addProduct("Brownie", "Chocolate con nuez", 150, "img", 40)

manager.getProducts()
console.log(manager.products)
