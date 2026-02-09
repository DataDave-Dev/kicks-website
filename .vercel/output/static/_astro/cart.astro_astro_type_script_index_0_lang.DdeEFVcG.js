function i(){try{return JSON.parse(localStorage.getItem("cart")||"[]")}catch{return[]}}function r(){const a=i();let s=0,e="";if(a.length){e+=`
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                `,a.forEach((t,n)=>{const d=Number(t.Precio)*t.Cantidad;s+=d,e+=`
                    <div class="rounded-2xl shadow-xl overflow-hidden bg-white flex flex-col hover:shadow-2xl transition-shadow duration-300">
                        <div class="relative">
                            <img src="${t.Imagen}" alt="${t.Producto}" class="w-full h-40 xs:h-52 sm:h-64 object-cover transition-transform duration-300 hover:scale-105" />
                        </div>
                        <div class="p-4 flex flex-col flex-1">
                            <h2 class="text-base xs:text-lg md:text-xl font-extrabold mb-1 text-gray-900">${t.Producto}</h2>
                            <p class="text-gray-600 text-xs xs:text-sm mb-2 line-clamp-2">${t.Descripcion}</p>
                            <div class="flex flex-wrap gap-2 text-xs mb-2">
                                <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded">Marca: <span class="font-semibold">${t.Marca}</span></span>
                                <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded">Categoría: <span class="font-semibold">${t.Categoria}</span></span>
                                <span class="bg-gray-100 text-gray-700 px-2 py-1 rounded">Estilo: <span class="font-semibold">${t.Estilo}</span></span>
                            </div>
                            <div class="flex flex-col xs:flex-row items-start xs:items-center justify-between mt-2 mb-4 gap-2">
                                <div class="flex items-center">
                                    <span class="text-xs font-medium mr-2">Cantidad:</span>
                                    <div class="flex items-center border rounded overflow-hidden">
                                        <button 
                                            class="bg-gray-100 px-2 py-1 hover:bg-gray-200 transition-colors"
                                            onclick="updateCartItemQuantity(${n}, -1)"
                                        >-</button>
                                        <span class="px-3 py-1 font-medium">${t.Cantidad}</span>
                                        <button 
                                            class="bg-gray-100 px-2 py-1 hover:bg-gray-200 transition-colors"
                                            onclick="updateCartItemQuantity(${n}, 1)"
                                        >+</button>
                                    </div>
                                </div>
                                <span class="text-base xs:text-lg font-bold text-red-500">$${(Number(t.Precio)*t.Cantidad).toLocaleString("es-MX",{minimumFractionDigits:2})}</span>
                            </div>
                            <button
                                onclick="removeFromCartByIndex(${n})"
                                class="mt-auto bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full shadow transition-all w-full text-sm xs:text-base"
                            >
                                Quitar del carrito
                            </button>
                        </div>
                    </div>
                    `}),e+="</div>";const o=s*.16,l=s+o;e+=`
                <div class="bg-white rounded-2xl shadow-xl p-4 xs:p-6 mt-8">
                    <div class="flex flex-col md:flex-row justify-between items-center">
                        <div class="text-base xs:text-xl font-bold text-gray-800 mb-4 md:mb-0">
                            Total de productos: <span class="text-red-500">${a.reduce((t,n)=>t+n.Cantidad,0)}</span>
                        </div>
                        <div class="flex flex-col text-end text-lg xs:text-2xl font-bold text-gray-800">
                            <div>
                                SubTotal : <span class="text-red-500">$${s.toLocaleString("es-MX",{minimumFractionDigits:2,maximumFractionDigits:2})}</span>
                            </div>
                            <div>
                                Impuestos (IVA) : <span class="text-red-500">$${o.toLocaleString("es-MX",{minimumFractionDigits:2,maximumFractionDigits:2})}</span>
                            </div>
                            <div>
                                Total a pagar: <span class="text-red-500">$${l.toLocaleString("es-MX",{minimumFractionDigits:2,maximumFractionDigits:2})}</span>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 flex justify-end">
                        <a 
                            href="/pay"
                            class="bg-green-500 hover:bg-green-600 hover:cursor-pointer text-white font-bold py-2 xs:py-3 px-6 xs:px-8 rounded-full shadow transition-all text-sm xs:text-base"
                        >
                            Proceder al pago
                        </a>
                    </div>
                </div>
                `}else e=`
                <div class="text-center text-gray-500 py-16">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <h2 class="text-xl xs:text-2xl font-bold mb-2">Tu carrito está vacío</h2>
                    <p class="mb-8 text-sm xs:text-base">Agrega algunos productos para comenzar a comprar</p>
                    <a href="/shop" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 xs:py-3 px-6 xs:px-8 rounded-full shadow transition-all text-sm xs:text-base">
                        Ver Tienda
                    </a>
                </div>
                `;document.getElementById("cart-container").innerHTML=e}function c(a,s){let e=i();if(e[a]){const o=e[a].Cantidad+s;o>0&&(e[a].Cantidad=o,localStorage.setItem("cart",JSON.stringify(e)),r(),window.updateCartCount&&window.updateCartCount())}}function x(a){let s=i();s.splice(a,1),localStorage.setItem("cart",JSON.stringify(s)),r(),window.updateCartCount&&window.updateCartCount()}window.updateCartItemQuantity=c;window.removeFromCartByIndex=x;document.addEventListener("DOMContentLoaded",r);window.addEventListener("storage",function(a){a.key==="cart"&&r()});
