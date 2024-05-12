
//objeto para crear usuario y administrador aqui guardamos atributos
function Persona (nombre,email,clave) {
    this.nombre = nombre;
    this. email = email;
    this. clave = clave
};

//creacion del objeto constructor usuario..
function Usuario (nombre, email, clave, puntosAcumulados){
    Persona.call(this, nombre, email, clave);
    this. puntosAcumulados = puntosAcumulados;
};
//para unir persona con usuario
Usuario.prototype = Object.create(Persona.prototype);
Usuario.prototype.constructor = Usuario;


//creacion de los metodos de ususario
Usuario.prototype.acumularPuntos = () => {
    console.log(`los puntos acumulados son ${this.puntosAcumulados}.`);
};
Usuario.prototype.canjearPuntos = () => {
    console.log(`Intercambio de puntos por produto o servicio.`)
};

console.log(`creacion de usuario`);
let user = new Usuario ("juan zapata", "sjzaba2023@gmail.com", "***********",250);
console.log(user);

//creacion del prototipo del administrador
function administrador (nombre, email, clave){
    Persona.call(this, nombre, email,clave);
};
//unir administrador con persona
administrador.prototype = Object.create(Persona.prototype);
administrador.prototype.constructor = administrador;

//metodos propios del administrador
administrador.prototype.agregarProducto = () => {
    console.log(`Se agrego el producto`);
};
administrador.prototype.modificarProducto = () => {
    console.log(`Se modifico el producto`);
};
administrador.prototype.eliminarProducto = () => {
    console.log(`Se elimino el producto`);
};
let admin = new administrador ("samuel zapata", "samuel360@gmail.com", "***********");
console.log(admin);

//opbjeto para crear los productos aqui guardamos atributos
console.log("creacion de productos");
function Producto (nombre,punNece,cantDispo,Stock){
    this.nombre = nombre;
    this.punNece = punNece;
    this.cantDispo = cantDispo;
    this.Stock = Stock;
}
//aqui guardamos metodos
Producto.prototype.obtenerInfo = () =>{
    console.log("Informacion obtenida");
};


//creacion de producto digital
function productoDigital (nombre, punNece, cantDispo,Stock, url){
    Producto.call(this, nombre, punNece, cantDispo, Stock);
    this.url = url;
};

//unir producto digital con producto
productoDigital.prototype = Object.create(Producto.prototype);
productoDigital.prototype.constructor = productoDigital;

//metodos propios de producto digital
productoDigital.prototype.descargar = () => {
    console.log(`Descargar producto`);
};
productoDigital.prototype.obtenerProducto = () => {
    console.log(`Producto obtenido`);
};
let proddigi = new productoDigital("como tocar guitarra", 3000, 2800, 30, "www.aprendeguitarra.com");
console.log(proddigi);

//crear producto fisico
function productoFisico (nombre,punNece,cantDispo,Stock){
    Producto.call(this, nombre,punNece,cantDispo,Stock);
};
//conectar producto con producto fisico
productoFisico.prototype = Object.create(Producto.prototype);
productoFisico.prototype.constructor = productoFisico;

//metodos de producto fisico
productoFisico.prototype.actualizarStock = () => {
    console.log(`Actualizar stock`);
};
productoFisico.prototype.enviarProducto = () => {
    console.log(`Enviar producto`);
};

let prodfisi = new productoDigital("guitarra acustica c40 yamaha", 5000, 4200, 30);
console.log(prodfisi);

//prototipo de actividades
console.log("actividades");
function actividades (tipo, puntosOtorgados){
    this.tipo = tipo;
    this.puntosOtorgados = puntosOtorgados;
};
//metodos de actividades
actividades.prototype.completarActividad = () => {
    console.log(`Completa la actividad para obtener puntos.`);
};
let acti = new actividades("compartir informacion", 300);
console.log(acti);

//prototipo de canje de puntos
console.log("canje de puntos");
function ordenCanje (usuario, producto, fecha) {
        this.usuario = usuario;
        this.producto = producto;
        this.fecha = fecha
};
//metodos de orden de canje
ordenCanje.prototype.confirmarOrden = () => {
    console.log(`Confirme la orden de canje`);
};
 ordenCanje.prototype.cancelarOrdenCanje = () => {
    console.log(`Desea cancelar la orden de canje`);
};
let canje = new ordenCanje ( "juan zapata", "guitarra acustica c40 yamaha","02-06-2024")
console.log(canje);


//prototipo de categoria de productos
console.log("categoria de productos");
function categoriaProducto (nombre, descripcion){
    this.nombre = nombre;
    this.descripcion = descripcion;
};
//metodos de productos
categoriaProducto.prototype.listaProductos = () => {
    console.log(`Esta es la lista de los productos por categorias`);
};
let catego = new categoriaProducto ("bicicleta","kbshgdiqwhdowqbidbwbkdbkjdbskbkjbKDjabkbKAJBKBJDADSA");
console.log(catego);