class Producto {
    constructor(nombre, categoria, precio) {
      this.nombre = nombre;
      this.categoria = categoria;
      this.precio = precio;
    }
  }
  
  const catalogo = [
    new Producto("Sauron", "señor de los anillos",10000),
    new Producto("Charly garcia", "musicos", 3800),
    new Producto("Yoda", "star wars", 6000),
    new Producto("Messi", "Deportistas", 4500),
  ];
  
  function buscarPorNombre() {
    const nombre = document.getElementById("nombre").value;
    const producto = catalogo.find((producto) => producto.nombre === nombre);
    
    if (producto) {
      alert(`Producto encontrado:\nNombre: ${producto.nombre}\nCategoría: ${producto.categoria}\nPrecio: ${producto.precio}`);
    } else {
      alert("Producto no encontrado");
    }
  }
  
  function buscarPorCategoria() {
    const categoria = document.getElementById("categoria").value;
    const productos = catalogo.filter((producto) => producto.categoria === categoria);
    
    if (productos.length > 0) {
      let mensaje = "Productos encontrados:\n";
      productos.forEach((producto) => {
        mensaje += `Nombre: ${producto.nombre}\nCategoría: ${producto.categoria}\nPrecio: ${producto.precio}\n\n`;
      });
      alert(mensaje);
    } else {
      alert("No se encontraron productos en esa categoría");
    }
  }
  
  function filtrarPorPrecio() {
    const min = parseInt(document.getElementById("min").value);
    const max = parseInt(document.getElementById("max").value);
    const productos = catalogo.filter((producto) => producto.precio >= min && producto.precio <= max);
    
    if (productos.length > 0) {
      let mensaje = "Productos encontrados:\n";
      productos.forEach((producto) => {
        mensaje += `Nombre: ${producto.nombre}\nCategoría: ${producto.categoria}\nPrecio: ${producto.precio}\n\n`;
      });
      alert(mensaje);
    } else {
      alert("No se encontraron productos dentro del rango de precios especificado");
    }
  }
