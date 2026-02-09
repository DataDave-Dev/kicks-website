import { c as createComponent, d as createAstro, m as maybeRenderHead, e as addAttribute, a as renderTemplate, r as renderComponent, b as renderScript } from '../chunks/astro/server_BI-M1sh_.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$SectionContainer } from '../chunks/SectionContainer_DJvvIJu8.mjs';
import 'clsx';
import { s as supabase } from '../chunks/supabase_UwiOy4HL.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const {
    Producto_id,
    Producto,
    Descripcion,
    Precio,
    Cantidad,
    Imagen,
    Categoria,
    Marca,
    Estilo
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col w-full h-[520px] rounded-xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"> <div class="relative h-[200px] overflow-hidden"> <img${addAttribute(Imagen, "src")}${addAttribute(Producto, "alt")} class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"> ${Cantidad === 0 && renderTemplate`<span class="absolute top-3 left-3 bg-gray-900/90 text-white text-xs px-3 py-1 rounded-full uppercase tracking-wide font-semibold">
Sin stock
</span>`} </div> <div class="flex flex-col flex-1 p-4"> <h2 class="text-base font-bold text-gray-900 mb-2 truncate">${Producto}</h2> <p class="text-sm text-gray-500 mb-3 line-clamp-2">${Descripcion}</p> <div class="flex flex-wrap gap-1 mb-3"> <span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">Marca: <strong>${Marca}</strong></span> <span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">Categoría: <strong>${Categoria}</strong></span> <span class="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">Estilo: <strong>${Estilo}</strong></span> </div> <div class="mt-auto flex flex-col gap-3"> <div class="flex justify-between items-center text-sm text-gray-500"> <span>Disponibles: <strong>${Cantidad}</strong></span> <span class="text-red-500 text-lg font-extrabold"> ${Number(Precio).toLocaleString("es-MX", {
    style: "currency",
    currency: "MXN"
  })} </span> </div> <button type="button" class="w-full hover:cursor-pointer bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition disabled:opacity-50 disabled:cursor-not-allowed"${addAttribute(Cantidad === 0, "disabled")}${addAttribute(`(function(){
                    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
                    cart.push({
                        Producto_id: ${JSON.stringify(Producto_id)},
                        Producto: ${JSON.stringify(Producto)},
                        Descripcion: ${JSON.stringify(Descripcion)},
                        Precio: ${JSON.stringify(Precio)},
                        Imagen: ${JSON.stringify(Imagen)},
                        Marca: ${JSON.stringify(Marca)},
                        Categoria: ${JSON.stringify(Categoria)},
                        Estilo: ${JSON.stringify(Estilo)},
                        Cantidad: 1
                    });
                    localStorage.setItem('cart', JSON.stringify(cart));
                    if(window.updateCartCount) window.updateCartCount();
                    this.textContent = '\xA1Agregado!';
                    setTimeout(()=>{this.textContent='Agregar al carrito'}, 1000);
                }).call(this)`, "onclick")}>
Agregar al carrito
</button> </div> </div> </div>`;
}, "C:/Users/SISTEMAS/proyectos/kick's-web/src/components/ProductCard.astro", void 0);

const $$Shop = createComponent(async ($$result, $$props, $$slots) => {
  const { data: Productos, error: ProductosError } = await supabase.from("Productos").select("*");
  const marcas = [...new Set(Productos?.map((p) => p.Marca))];
  const estilos = [...new Set(Productos?.map((p) => p.Estilo))];
  const categorias = [...new Set(Productos?.map((p) => p.Categoria))];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tienda", "data-astro-cid-5w43p2qc": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-25 px-4 max-w-5xl mx-auto", "data-astro-cid-5w43p2qc": true }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="space-y-6" data-astro-cid-5w43p2qc> <div class="text-center mb-10" data-astro-cid-5w43p2qc> <h1 class="text-4xl font-bold text-gray-800 mb-2 relative inline-block" data-astro-cid-5w43p2qc> <span class="relative z-10" data-astro-cid-5w43p2qc>Nuestros Productos</span> <span class="absolute -bottom-1 left-0 w-full h-3 bg-red-100 -z-10 transform -rotate-1" data-astro-cid-5w43p2qc></span> </h1> <p class="text-gray-600 max-w-2xl mx-auto" data-astro-cid-5w43p2qc>
Descubre nuestra colección exclusiva de productos de alta calidad para todos los estilos y gustos.
</p> </div> <div class="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300" data-astro-cid-5w43p2qc> <div class="px-6 py-4 bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200" data-astro-cid-5w43p2qc> <div class="flex items-center justify-between" data-astro-cid-5w43p2qc> <h2 class="text-xl font-semibold text-gray-800 flex items-center gap-2" data-astro-cid-5w43p2qc> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-5w43p2qc> <path fill-rule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clip-rule="evenodd" data-astro-cid-5w43p2qc></path> </svg>
Filtros
</h2> <button id="toggleFiltros" class="flex hover:cursor-pointer items-center gap-1 text-gray-700 hover:text-red-500 transition-colors duration-200 focus:outline-none" data-astro-cid-5w43p2qc> <span class="text-sm font-medium" data-astro-cid-5w43p2qc>Mostrar filtros</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 transform transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-5w43p2qc> <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-5w43p2qc></path> </svg> </button> </div> </div> <div id="filtrosContainer" class="p-6 hidden bg-white" data-astro-cid-5w43p2qc> <div class="mb-6" data-astro-cid-5w43p2qc> <label for="filtroNombre" class="block text-sm font-medium text-gray-700 mb-2" data-astro-cid-5w43p2qc>Buscar producto</label> <div class="relative" data-astro-cid-5w43p2qc> <input id="filtroNombre" type="text" placeholder="¿Qué estás buscando?" class="w-full p-3 pl-12 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200" data-astro-cid-5w43p2qc> <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none" data-astro-cid-5w43p2qc> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-5w43p2qc> <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" data-astro-cid-5w43p2qc></path> </svg> </div> </div> </div> <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6" data-astro-cid-5w43p2qc> <div class="space-y-2" data-astro-cid-5w43p2qc> <label for="filtroMarca" class="block text-sm font-medium text-gray-700" data-astro-cid-5w43p2qc>Marca</label> <div class="relative" data-astro-cid-5w43p2qc> <select id="filtroMarca" class="w-full p-3 pr-10 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white appearance-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200" data-astro-cid-5w43p2qc> <option value="" data-astro-cid-5w43p2qc>Todas las Marcas</option> ${marcas.map((m) => renderTemplate`<option${addAttribute(m, "value")} data-astro-cid-5w43p2qc>${m}</option>`)} </select> </div> </div> <div class="space-y-2" data-astro-cid-5w43p2qc> <label for="filtroEstilo" class="block text-sm font-medium text-gray-700" data-astro-cid-5w43p2qc>Estilo</label> <div class="relative" data-astro-cid-5w43p2qc> <select id="filtroEstilo" class="w-full p-3 pr-10 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white appearance-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200" data-astro-cid-5w43p2qc> <option value="" data-astro-cid-5w43p2qc>Todos los Estilos</option> ${estilos.map((e) => renderTemplate`<option${addAttribute(e, "value")} data-astro-cid-5w43p2qc>${e}</option>`)} </select> </div> </div> <div class="space-y-2" data-astro-cid-5w43p2qc> <label for="filtroCategoria" class="block text-sm font-medium text-gray-700" data-astro-cid-5w43p2qc>Categoria</label> <div class="relative" data-astro-cid-5w43p2qc> <select id="filtroCategoria" class="w-full p-3 pr-10 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white appearance-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200" data-astro-cid-5w43p2qc> <option value="" data-astro-cid-5w43p2qc>Todas las Categorias</option> ${categorias.map((c) => renderTemplate`<option${addAttribute(c, "value")} data-astro-cid-5w43p2qc>${c}</option>`)} </select> </div> </div> <div class="space-y-2" data-astro-cid-5w43p2qc> <label class="block text-sm font-medium text-gray-700" data-astro-cid-5w43p2qc>Rango de precio</label> <div class="flex items-center space-x-2" data-astro-cid-5w43p2qc> <div class="relative flex-1" data-astro-cid-5w43p2qc> <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-astro-cid-5w43p2qc> <span class="text-gray-500" data-astro-cid-5w43p2qc>$</span> </div> <input id="precioMin" type="number" placeholder="Min" class="w-full p-3 pl-7 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200" data-astro-cid-5w43p2qc> </div> <span class="text-gray-400" data-astro-cid-5w43p2qc>—</span> <div class="relative flex-1" data-astro-cid-5w43p2qc> <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" data-astro-cid-5w43p2qc> <span class="text-gray-500" data-astro-cid-5w43p2qc>$</span> </div> <input id="precioMax" type="number" placeholder="Max" class="w-full p-3 pl-7 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200" data-astro-cid-5w43p2qc> </div> </div> </div> </div> <div class="mt-6 flex justify-end" data-astro-cid-5w43p2qc> <button id="limpiarFiltros" class="px-5 py-2.5 hover:cursor-pointer bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-colors duration-200 flex items-center gap-2 group" data-astro-cid-5w43p2qc> <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 group-hover:rotate-90 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-5w43p2qc> <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" data-astro-cid-5w43p2qc></path> </svg> <span data-astro-cid-5w43p2qc>Limpiar filtros</span> </button> </div> </div> </div> <div class="flex flex-col sm:flex-row justify-between items-center bg-white rounded-xl p-4 shadow-md border border-gray-100" data-astro-cid-5w43p2qc> <p id="contadorResultados" class="text-gray-700 font-medium" data-astro-cid-5w43p2qc>
Mostrando <span id="numResultados" class="font-bold text-red-500" data-astro-cid-5w43p2qc>0</span> productos
</p> <div class="flex items-center mt-3 sm:mt-0" data-astro-cid-5w43p2qc> <label for="ordenarPor" class="mr-3 text-gray-700 font-medium" data-astro-cid-5w43p2qc>Ordenar por:</label> <div class="relative" data-astro-cid-5w43p2qc> <select id="ordenarPor" class="pr-10 pl-4 py-2 border border-gray-200 rounded-lg appearance-none bg-gray-50 focus:bg-white focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200" data-astro-cid-5w43p2qc> <option value="relevancia" data-astro-cid-5w43p2qc>Relevancia</option> <option value="precioAsc" data-astro-cid-5w43p2qc>Precio: Menor a Mayor</option> <option value="precioDesc" data-astro-cid-5w43p2qc>Precio: Mayor a Menor</option> <option value="nombreAsc" data-astro-cid-5w43p2qc>Nombre: A-Z</option> <option value="nombreDesc" data-astro-cid-5w43p2qc>Nombre: Z-A</option> </select> </div> </div> </div> <div id="productosGrid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 max-w-5xl mx-auto gap-6" data-astro-cid-5w43p2qc> ${Productos && Productos.length > 0 ? Productos.map((producto) => renderTemplate`<div class="animate-fadeIn"${addAttribute(producto.Producto.toLowerCase(), "data-nombre")}${addAttribute(producto.Marca, "data-marca")}${addAttribute(producto.Estilo, "data-estilo")}${addAttribute(producto.Categoria, "data-categoria")}${addAttribute(producto.Precio, "data-precio")} data-astro-cid-5w43p2qc> ${renderComponent($$result3, "ProductCard", $$ProductCard, { ...producto, "data-astro-cid-5w43p2qc": true })} </div>`) : renderTemplate`<div class="col-span-full flex flex-col items-center justify-center py-16 text-center" data-astro-cid-5w43p2qc> <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-gray-300 mb-4" viewBox="0 0 20 20" fill="currentColor" data-astro-cid-5w43p2qc> <path fill-rule="evenodd" d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z" clip-rule="evenodd" data-astro-cid-5w43p2qc></path> <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" data-astro-cid-5w43p2qc></path> </svg> <p class="text-xl font-semibold text-gray-700" data-astro-cid-5w43p2qc>No hay productos disponibles</p> <p class="text-gray-500 mt-2" data-astro-cid-5w43p2qc>Intenta con otros filtros o regresa más tarde.</p> </div>`} </div> ${renderScript($$result3, "C:/Users/SISTEMAS/proyectos/kick's-web/src/pages/shop.astro?astro&type=script&index=0&lang.ts")} </div> ` })} ` })} `;
}, "C:/Users/SISTEMAS/proyectos/kick's-web/src/pages/shop.astro", void 0);

const $$file = "C:/Users/SISTEMAS/proyectos/kick's-web/src/pages/shop.astro";
const $$url = "/shop";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Shop,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
