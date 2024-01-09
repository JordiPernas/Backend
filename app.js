
class ProductManager {
    static ultId = 0;
    constructor() {
        this.products = [];

    }

    addProduct(title, description, price, img, code, stock){

        if(!title || !description || !price || !img || !code || !stock)
        {
            console.log("Todos los campos son obligatorios"); 
            return;
        }

        if(this.products.some(item => item.code === code)) 
        {
            console.log("El código debe ser único");
            return;
        }

        const newProduct = {
            id: ProductManager.ultId++,
            title, 
            description,
            price,
            img,
            code, 
            stock
        }
        this.products.push(newProduct);
    }
    getProducts() {
        return this.products; 
    }

    getProductById(id) {
        const product = this.products.find(item => item.id === id);

        if(!product){
            console.error("Not Found!"); 
        }else{
            console.log(product);
        }
    }
}
