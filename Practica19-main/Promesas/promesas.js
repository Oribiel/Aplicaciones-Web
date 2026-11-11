function obtenerDatosDelServidor(){
    return new Promise((resolve, reject) =>{
    setTimeout(() => {
        let usuario = {
            nombre: "Josmara",
            edad: 20,
        } 

        if (usuario) {
            resolve(usuario)
        }else{
            reject("Ocurrio un error al obtener los datos")
        }
    }, 2000);
})
}

obtenerDatosDelServidor()
.then((usuario)=>{
    return usuario.nombre.toUpperCase()
})
.then((nombreMayuscula)=>{
    console.log(nombreMayuscula)
})
.catch(error=>{
    console.log(error)
})
.finally(()=>{
    console.log("Fin del programa")
})
/*
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => {
    return response.json();
})
.then(json=>{
    console.log("Lista de posts:", json)
})
.catch(error=>{
    console.log(error)
})
.finally(()=>{
    console.log("Fin del programa")
})
    */
async function obtenerPosts(){ //Para usar async await, la funcion debe ser asincrona
    try{
    let response = await fetch("https://jsonplaceholder.typicode.com/posts")
    console.log(response)
}catch(error){
    console.log(error)
}finally{

}
}
obtenerPosts();