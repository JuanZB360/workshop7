//declaracion de el prototipo persona
function persona (nombre, email, clave) {
    this. nombre = nombre;
    this. email = email;
    this. clave = clave
};

//declaracion del prototipo de cliente con herencia
function cliente (nombre, email, clave, direccion, telefono) {
    persona.call (this, nombre, email, clave);
    this. direccion = direccion;
    this. telefono = telefono;
};
//coneccion entre persona y clientes
cliente.prototype = Object.create(persona.prototype);
cliente.prototype.constructor = cliente;

//declaracion de los metodos para clientes
cliente.prototype.autentificacion = () => {
    console.log(`autentificacion`)
};
cliente.prototype.verHistorialPedidos = () => {
    console.log(`Historia de pedidos`);
};
let clien = new cliente("Juan David","sjzaba2023@gmail.com","********","robledo cr72 #92-02", "3046711003")
console.log(clien);

//declaracion de prototipo repartidor
function repartidor (nombre, email, clave, vehiculo, disponibilidad) {
    persona.call (this, nombre,email, clave);
    this. vehiculo = vehiculo;
    this. disponibilidad = disponibilidad;
}
//coneccion repartidor con personas
cliente.prototype = Object.create(persona.prototype);
cliente.prototype.constructor = cliente;

//declaracion de los metodos
repartidor.prototype.autentificacion = () => {
    console.log(`autentificacion del repartidor`);
};
repartidor.prototype.aceptarEnvio = () => {
    console.log(`Aceptar envio de paquete`);
};
repartidor.prototype.actualizarUbicacion = () => {
    console.log(`ubicacion actual del repartidor`);
};
repartidor.prototype.completarEntrega = () => {
    console.log(`Entrega completada`);
};
repartidor.prototype.actualizarEstado = () => {
    console.log(`Actualizar estado`);
};
let repart = new cliente("Juan David","sjzaba2023@gmail.com","********","qrt-897", "disponible");
console.log(repart);

//declaracion prototipo para restaurante
function restaurante (nombre) {
    this.nombre = nombre;
};
restaurante.prototype.agregarPlato = () => {
    console.log(`Agregar plato`);
};
restaurante.prototype.actualizarPlato = () => {
    console.log(`Actualizar plato`);
};

//declarar restaurante digital
function restauranteDigital (nombre, menuQr) {
    restaurante.call (this, nombre);
    this. menuQr = menuQr;
};
restauranteDigital.prototype = Object.create (restaurante.prototype);
restauranteDigital.prototype.constructor = restauranteDigital;

let resdig = new restauranteDigital("carne & mas carne", 92987982980983);
console.log(resdig);

//declaracion prototipo del restaurante fisico
function restauranteFisico (nombre, direccion, menuFisico) {
    restaurante.call(this, nombre);
    this.direccion = direccion;
    this.menuFisico = menuFisico;    
}
restauranteFisico.prototype = Object.create(restaurante.prototype);
restauranteFisico.prototype.constructor = restauranteFisico;

//declaracion metodos del restaurante fisico
restauranteFisico.prototype.eliminarPlato = () => {
    console.log(`Eliminar plato`);
};
let resfis = new restauranteFisico("carne & mas carne", "cr48 cl78-03", "plato1 plato2 plato3");
console.log(resfis);


//prototipo para el menu
function menu (plato) {
    this.plato = plato;    
}

//declaracion para menu digital
function menuDigital (plato, url) {
    menu.call (this, plato);
    this.url = url;    
};
menuDigital.prototype = Object.create (menu.prototype);
menuDigital.prototype.constructor = menuDigital;

//declaracion metodos menu digital
menuDigital.prototype.generadorQr = () => {
    console.log(`Menu Digital`);
};
let mendig = new menuDigital("punta de anca", "www.com")
console.log(mendig);


//declaracion para menu fisico

function menuFisico (plato) {
    menu.call ( this, plato);    
};
menuFisico.prototype = Object.create(menu.prototype);
menuFisico.prototype.constructor = menuFisico;

//metodos para menu fisico
menuFisico.prototype.impresiones = () => {
    console.log(`impresion de factura`);
};
menuFisico.prototype.visualizacion = () => {
    console.log(`Visualizacion de compra`);
};
let menfis = new menuFisico("punta de anca");
console.log(menfis);


//declaracion de prototipós de los platos
function platoresta (nombre, precio, ingredientes) {
    this.nombre = nombre;
    this.precio = precio;
    this.ingredientes = ingredientes;    
};
platoresta.prototype.obtenerInformacion = () => {
    console.log(`Informacion sobre el plato`);
};
let plat = new platoresta("punta de anca", 35000, "punta de anca - ensalada de tomate - patacones");
console.log(plat);

//declaracion prototipo para pedido
function pedido (cliente, restaurante, detallespedido, estadoPedido) {
    this.cliente = cliente;
    this.restaurante = restaurante;
    this.detallespedido = detallespedido;
    this.estadoPedido = estadoPedido;    
};
pedido.prototype.actualizacionEstado = () => {
    console.log(`estado actual del pedido`);
};
pedido.prototype.calcularTotal = () => {
    console.log(`total a pagar por el pedido`);
};

let ped = new pedido ("Juan","carne & mas carne", "punta de anca", "en espera");
console.log(ped);