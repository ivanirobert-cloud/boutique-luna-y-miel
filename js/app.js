let carrito = []
function consultarProducto(nombre, precio) {

    let mensaje = "Hola, quiero consultar por: " + nombre + ".";

    if (precio === null) {
        mensaje += " ¿Me informan precio, stock y talles?";
    } else {
        mensaje += " Precio: $" + precio.toLocaleString("es-AR") +
                   ". ¿Qué stock y talles tienen?";
    }

    const url =
        "https://wa.me/5493388535647?text=" +
        encodeURIComponent(mensaje);

    window.location.href = url;
}

const productos = {

    mujer: [
        {
            nombre: "Braga con abertura brillante y cinta lateral",
            precio: 10500,
            unidad: "",
            talle: "Consultar",
            stock: "Consultar",
            imagen: "img/mujeres/bragaconaberturabrillantecintalateral10500.jpg"
        },
        {
            nombre: "Bragas con puntillas",
            precio: 8000,
            unidad: "c/u",
            talle: "Consultar",
            stock: "Consultar",
            imagen: "img/mujeres/bragasconpuntillas8000cu.jpg"
        },
        {
            nombre: "Pijama estampado diseño corazón y encaje",
            precio: 25000,
            unidad: "",
            talle: "Consultar",
            stock: "Consultar",
            imagen: "img/mujeres/pijamaestampadodiseñocorazonyencaje25000.jpg"
        },
        {
            nombre: "Pijama de terciopelo",
            precio: 28900,
            unidad: "",
            talle: "Consultar",
            stock: "Consultar",
            imagen: "img/mujeres/pijamaterciopelo28900.jpg"
        },
        {
            nombre: "Sandalias casuales",
            precio: null,
            unidad: "",
            talle: "Consultar",
            stock: "Consultar",
            imagen: "img/mujeres/sandaliascasuales.jpg"
        },
        {
            nombre: "Sandalias",
            precio: null,
            unidad: "",
            talle: "Consultar",
            stock: "Consultar",
            imagen: "img/mujeres/sandalias.jpg"
        },
        {
            nombre: "Sandalias tigre 2",
            precio: null,
            unidad: "",
            talle: "Consultar",
            stock: "Consultar",
            imagen: "img/mujeres/sandaliastigre2.jpg"
        },
        {
            nombre: "Sandalias tigre",
            precio: null,
            unidad: "",
            talle: "Consultar",
            stock: "Consultar",
            imagen: "img/mujeres/sandaliastigre.jpg"
        },
        {
            nombre: "Set de lencería",
            precio: 12800,
            unidad: "",
            talle: "Consultar",
            stock: "Consultar",
            imagen: "img/mujeres/setdelenceria12800.jpg"
        },
        {
            nombre: "Top de encaje con diseño de corazón",
            precio: 14800,
            unidad: "",
            talle: "Consultar",
            stock: "Consultar",
            imagen: "img/mujeres/topdeencajecondiseñodecorazon14800.jpg"
        },
        {
            nombre: "Top diseño corazón",
            precio: 13000,
            unidad: "",
            talle: "Consultar",
            stock: "Consultar",
            imagen: "img/mujeres/topdiseñocorazon13000.jpg"
        },
        {
            nombre: "Top encaje sexy rosa",
            precio: 14800,
            unidad: "",
            talle: "Consultar",
            stock: "Consultar",
            imagen: "img/mujeres/topencajesexirosa14800.jpg"
        },
        {
            nombre: "Traje de baño 2",
            precio: null,
            unidad: "",
            talle: "Consultar",
            stock: "Consultar",
            imagen: "img/mujeres/trajedebaño2.jpg"
        },
        {
            nombre: "Traje de baño blanco y negro",
            precio: null,
            unidad: "",
            talle: "Consultar",
            stock: "Consultar",
            imagen: "img/mujeres/trajedebañoblancoynegro.jpg"
        },
        {
            nombre: "Traje de baño detalles únicos",
            precio: null,
            unidad: "",
            talle: "Consultar",
            stock: "Consultar",
            imagen: "img/mujeres/trajedebañodetallesunicos.jpg"
        },
        {
            nombre: "Traje de baño Hawái",
            precio: null,
            unidad: "",
            talle: "Consultar",
            stock: "Consultar",
            imagen: "img/mujeres/trajedebañohawai.jpg"
        },
        {
            nombre: "Traje de baño negro entero",
            precio: null,
            unidad: "",
            talle: "Consultar",
            stock: "Consultar",
            imagen: "img/mujeres/trajedebañonegroentero.jpg"
        },
        {
            nombre: "Zapatillas Adidas Supernova",
            precio: 52100,
            unidad: "",
            talle: "Consultar",
            stock: "Consultar",
            imagen: "img/mujeres/zapatillasadidassupernova52100.jpg"
        }
    ],

    hombre: [],

    niñas: [],

    niños: [],

    perfumes: []
};

function agregarAlCarrito(nombre, precio) {
    const productoExistente = carrito.find(function(producto) {
        return producto.nombre === nombre;
    });

    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({
            nombre: nombre,
            precio: precio,
            cantidad: 1
        });
    }

    mostrarCarrito();
}

function mostrarCarrito() {
    const listaCarrito = document.getElementById("lista-carrito");
    const totalCarrito = document.getElementById("total");

    listaCarrito.innerHTML = "";

    let total = 0;

    carrito.forEach(function(producto, indice) {
        const item = document.createElement("div");

        const subtotal = producto.precio * producto.cantidad;

        item.innerHTML =
            "<p><strong>" + producto.nombre + "</strong></p>" +
            "<p>" +
            "<button onclick='disminuirCantidad(" + indice + ")'>➖</button> " +
            producto.cantidad +
            " <button onclick='aumentarCantidad(" + indice + ")'>➕</button>" +
            "</p>" +
            "<p>Subtotal: $" + subtotal + "</p>" +
            "<button onclick='quitarDelCarrito(" + indice + ")'>❌ QUITAR</button>" +
            "<hr>";

        listaCarrito.appendChild(item);

        total = total + subtotal;
    });

    totalCarrito.textContent = "Total: $" + total;
}

function aumentarCantidad(indice) {
    carrito[indice].cantidad++;

    mostrarCarrito();
}

function disminuirCantidad(indice) {
    if (carrito[indice].cantidad > 1) {
        carrito[indice].cantidad--;
    }

    mostrarCarrito();
}

function quitarDelCarrito(indice) {
    carrito.splice(indice, 1);

    mostrarCarrito();
}

function mostrarTalle(tipo) {
    const imagen = document.getElementById("imagen-talle");

    if (tipo === "mujeres") {
        imagen.innerHTML = '<img src="img/mujeres.jpg" alt="Tabla de talles para mujeres">';
    }

    if (tipo === "niñas") {
        imagen.innerHTML = '<img src="img/niñas.jpg" alt="Tabla de talles para niñas">';
    }

    if (tipo === "hombres") {
        imagen.innerHTML = '<img src="img/hombres.jpg" alt="Tabla de talles para hombres">';
    }

    if (tipo === "niños") {
        imagen.innerHTML = '<img src="img/niños.jpg" alt="Tabla de talles para niños">';
    }
      document.getElementById("cerrar-tabla").style.display = "block";
}

function cerrarTabla() {
    const imagen = document.getElementById("imagen-talle");

    imagen.innerHTML = "";
     document.getElementById("cerrar-tabla").style.display = "none";
}
function mostrarContacto() {
    const contacto = document.getElementById("contacto");

    contacto.style.display = "block";
}

function cerrarContacto() {
    const contacto = document.getElementById("contacto");

    contacto.style.display = "none";
}
function mostrarCompartir() {

    const menu = document.getElementById("menu-compartir");

    if (!menu) {
        return;
    }

    menu.style.display =
        menu.style.display === "none" ? "block" : "none";
}

const compartirWhatsapp =
    document.getElementById("compartir-whatsapp");

const compartirEmail =
    document.getElementById("compartir-email");

const copiarEnlace =
    document.getElementById("copiar-enlace");

const cerrarCompartir =
    document.getElementById("cerrar-compartir");

if (compartirWhatsapp) {

    compartirWhatsapp.addEventListener("click", function() {

        const url = window.location.href;

        const texto =
            "Mirá Boutique Luna y Miel — Lencería fina, Perfumes y Varios";

        compartirWhatsapp.href =
            "https://wa.me/?text=" +
            encodeURIComponent(texto + " " + url);
    });
}

if (compartirEmail) {

    compartirEmail.addEventListener("click", function() {

        const url = window.location.href;

        const asunto = "Boutique Luna y Miel";

        const cuerpo =
            "Te comparto Boutique Luna y Miel — Lencería fina, Perfumes y Varios:\n\n" +
            url;

        compartirEmail.href =
            "mailto:?subject=" +
            encodeURIComponent(asunto) +
            "&body=" +
            encodeURIComponent(cuerpo);
    });
}

if (copiarEnlace) {

    copiarEnlace.addEventListener("click", async function() {

        const url = window.location.href;

        try {

            await navigator.clipboard.writeText(url);

            copiarEnlace.textContent =
                "✓ Enlace copiado";

            setTimeout(function() {

                copiarEnlace.textContent =
                    "🔗 Copiar enlace";

            }, 2000);

        } catch (error) {

            copiarEnlace.textContent =
                "[!] No se pudo copiar";

            setTimeout(function() {

                copiarEnlace.textContent =
                    "🔗 Copiar enlace";

            }, 2500);
        }
    });
}

if (cerrarCompartir) {

    cerrarCompartir.addEventListener("click", function() {

        const menu =
            document.getElementById("menu-compartir");

        if (menu) {
            menu.style.display = "none";
        }
    });
}


function mostrarCategorias() {

    const menu = document.getElementById("menu-categorias");
    const catalogo = document.getElementById("catalogo");

    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
        catalogo.innerHTML = "";
    }
}
function cerrarCategorias() {

    const menu = document.getElementById("menu-categorias");

    menu.style.display = "none";
}

function mostrarCategoria(categoria) {

    cerrarCategorias();

    const catalogo = document.getElementById("catalogo");
    const listaProductos = productos[categoria];

    if (!listaProductos || listaProductos.length === 0) {

        catalogo.innerHTML = `
            <h2>${categoria}</h2>
            <p>Próximamente nuevos productos.</p>
        `;

        return;
    }

    let contenido = `<h2>${categoria}</h2>`;

    listaProductos.forEach(function(producto) {

        const precioTexto = producto.precio === null
            ? "Consultar precio"
            : "$" + producto.precio.toLocaleString("es-AR") +
              (producto.unidad ? " " + producto.unidad : "");

        contenido += `
            <details class="producto">

                <summary>${producto.nombre}</summary>

                <img src="${producto.imagen}"
                     alt="${producto.nombre}">

                <p>📏 Talle: ${producto.talle}</p>

                <p>📦 Stock: ${producto.stock}</p>

                <p>💰 ${precioTexto}</p>

                <button onclick='consultarProducto(${JSON.stringify(producto.nombre)}, ${producto.precio === null ? "null" : producto.precio})'>
                      📞 CONSULTAR PRECIO, STOCK Y TALLE
                   </button>
                <button onclick='agregarAlCarrito(${JSON.stringify(producto.nombre)}, ${producto.precio === null ? "0" : producto.precio})'>
                   🛒 AGREGAR AL CARRITO
                      </button>  
            </details>
        `;
    });

    catalogo.innerHTML = contenido;
}
const botonConfirmarPedido =
    document.getElementById("confirmar-pedido");

if (botonConfirmarPedido) {

    botonConfirmarPedido.addEventListener("click", function() {

        if (carrito.length === 0) {

            alert("🛒 El carrito está vacío.");

            return;
        }

        let cuerpo = "Hola, quiero realizar el siguiente pedido:\n\n";

        carrito.forEach(function(producto) {

            cuerpo +=
                producto.nombre +
                " — Cantidad: " +
                producto.cantidad +
                " — Precio: $" +
                producto.precio.toLocaleString("es-AR") +
                "\n";
        });

        cuerpo +=
            "\n" +
            document.getElementById("total").textContent +
            "\n\n" +
            "Quedo a la espera de confirmación de stock, talles y disponibilidad.";

        const asunto = "Pedido - Boutique Luna y Miel";

        const mailto =
            "mailto:b.lunaymiel@gmail.com?subject=" +
            encodeURIComponent(asunto) +
            "&body=" +
            encodeURIComponent(cuerpo);

        window.location.href = mailto;
    });
}
