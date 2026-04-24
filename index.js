const args = process.argv.slice(2);
const BASE_URL = 'https://fakestoreapi.com'

//------------- FUNCIONES FETCH --------------------

//OBTENER PRODUCTOS
async function getProducts () {
    try{
        const response = await fetch(`${BASE_URL}/products`);
        const data = await response.json();
        console.log(data);
    } catch(error) {
        console.error('Error al obtener productos:', error);
    }
}

//OBTENER POR ID
async function getProductsById (id) {
    try{
        const response = await fetch(`${BASE_URL}/products/${id}`);
        const data = await response.json();
        console.log(data);
    } catch(error){
        console.error(`Error al obtener producto con Id ${id}:`, error);
    }
}

//NUEVO PRODUCTO
async function createProduct (title, price, category) {
    const product = { title, price, category };

    try{
        const res = await fetch(`${BASE_URL}/products`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product)
        });

        const data = await res.json();
        console.log(data);
    } catch (error) {
        console.error("Error al cargar producto:", error);
    }
}

//ELIMINAR PRODUCTO
async function deleteProduct (id) {
    try{
        const response = await fetch(`${BASE_URL}/products/${id}`,{
            method: "DELETE"
        })

        if(!response.ok){
            console.log("Error al eliminar, Status:", response.status);
            return;
        }

        const data = await response.json();
        console.log("Producto Eliminado (simulado): ", data);
    } catch (error) {
        console.error("No se pudo  eliminar el producto:", error)
    }
}


//--------------------- Method Handler --------------------------
async function main() {

    if(args[0] === 'GET'){
        if(args[1]){
            const [resource, id] = args[1].split("/");
            
            if(resource !== "products"){
                console.log("Recurso no válido.");
                return;
            }

            if(id){
                const parsedId = Number(id);
                
                if(isNaN(parsedId)){
                    console.log("Código inválido");
                    return;
                }

                await getProductsById(parsedId);
            } else {
                await getProducts();
            }
        } else {
            await getProducts();
        } 
    } else if(args[0] === 'POST') {
        const resource = args[1];
    
        if(resource !== "products"){
            console.log("Recurso no válido.");
            return;
        }
    
        const title = args[2];
        const price = Number(args[3]);
        const category = args[4];
        
        if(!title || isNaN(price) || !category){
            console.log("Datos inválidos. Uso: POST products <title> <price> <category>");
            return;
        }
    
        await createProduct(title, price, category);
    
    } else if (args[0] === 'DELETE'){
        const [resource, idParam] = args[1].split("/");
        const id = Number(idParam);
    
        if(resource !== "products"){
            console.log("Recurso no válido");
            return;
        }
    
        if(isNaN(id)){
            console.log("Id no válido.");
            return;
        }
    
        await deleteProduct(id);
    }
}

main();
//npm run start GET products
//npm run start GET products/15
//npm run start POST products T-Shirt-Rex 300 remeras
//npm run start DELETE products/7