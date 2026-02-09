document.addEventListener("DOMContentLoaded",function(){h(),x(),y()});function y(){const n=document.getElementById("checkoutForm");n&&n.addEventListener("submit",async function(g){g.preventDefault(),document.getElementById("cartItems").value=localStorage.getItem("cart")||"[]";const e=n.querySelector('button[type="submit"]'),d=e.innerHTML;e.disabled=!0,e.innerHTML=`
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Procesando...
        `;const s=document.getElementById("order-messages");s&&(s.innerHTML="");try{const a=new FormData(n),o=await fetch("/api/scripts/order",{method:"POST",body:a}),l=await o.json();if(!o.ok)throw new Error(l.error||"Ha ocurrido un error al procesar tu orden.");if(localStorage.setItem("cart","[]"),window.updateCartCount&&window.updateCartCount(),l.redirect)window.location.href=l.redirect;else{const i=document.createElement("div");i.className="bg-green-50 border border-green-100 rounded-xl p-3 mb-4 flex items-center animate-fade-in",i.innerHTML=`
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-green-700 text-sm font-medium">¡Orden completada con éxito! Referencia: ${l.orderReference}</span>
                `,s&&s.appendChild(i),n.reset()}}catch(a){console.error("Error submitting order:",a);const o=document.createElement("div");o.id="order-error-message",o.className="bg-red-50 border border-red-100 rounded-xl p-3 mb-4 flex items-center animate-fade-in",o.innerHTML=`
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span class="text-red-700 text-sm font-medium">${a.message}</span>
            `,s&&s.appendChild(o)}finally{e.disabled=!1,e.innerHTML=d}})}function w(){try{return JSON.parse(localStorage.getItem("cart")||"[]")}catch{return[]}}function v(n){return new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN",minimumFractionDigits:2}).format(n)}function h(){const n=w(),g=document.getElementById("order-summary-items"),e=document.getElementById("order-summary-totals"),d=document.getElementById("order-summary-total");if(!g||!e||!d)return;let s=0,a="";n.length?n.forEach(i=>{const t=Number(i.Precio)*i.Cantidad;s+=t,a+=`
                <div class="flex items-center justify-between py-2">
                    <div class="flex items-center gap-3">
                        <div class="w-12 h-12 rounded-lg bg-gray-50 p-1 flex items-center justify-center">
                            <img src="${i.Imagen}" class="max-w-full max-h-full object-contain" alt="${i.Producto}" />
                        </div>
                        <div>
                            <p class="font-bold text-sm">${i.Producto}</p>
                            <p class="text-gray-500 text-xs">Cantidad: ${i.Cantidad}</p>
                        </div>
                    </div>
                    <span class="font-medium">${v(t)}</span>
                </div>
            `}):a='<div class="text-center py-6 text-gray-500">No hay productos en el carrito.</div>',g.innerHTML=a;const o=s*.16,l=s+o;e.innerHTML=`
        <div class="flex justify-between items-center">
            <span class="text-gray-600">Subtotal</span>
            <span class="font-medium">${v(s)}</span>
        </div>
        <div class="flex justify-between items-center">
            <span class="text-gray-600">Impuestos</span>
            <span class="font-medium">${v(o)}</span>
        </div>
    `,d.textContent=v(l)}function x(){const n=document.getElementById("openModal"),g=document.getElementById("closeModal"),e=document.getElementById("creditCardModal"),d=document.getElementById("saveCard"),s=document.getElementById("cardNumber"),a=document.getElementById("cardName"),o=document.getElementById("cardExpiry"),l=document.getElementById("cardCvv");if(!n||!g||!e||!d){console.error("Modal elements not found");return}n.addEventListener("click",()=>{e.classList.remove("hidden"),document.body.style.overflow="hidden"}),g.addEventListener("click",()=>{e.classList.add("hidden"),document.body.style.overflow="auto"}),document.addEventListener("keydown",t=>{t.key==="Escape"&&!e.classList.contains("hidden")&&(e.classList.add("hidden"),document.body.style.overflow="auto")}),e.addEventListener("click",t=>{t.target===e&&(e.classList.add("hidden"),document.body.style.overflow="auto")}),s&&s.addEventListener("input",t=>{let r=t.target.value.replace(/\s+/g,"").replace(/[^0-9]/gi,""),c=r.replace(/(\d{4})/g,"$1 ").trim();t.target.value=c.substring(0,19);const m=document.getElementById("cardNumberDisplay");if(m)if(r.length>0){let u="•••• •••• •••• ",f=r.slice(-4);f.length>0?m.textContent=u+f:m.textContent="•••• •••• •••• ••••"}else m.textContent="•••• •••• •••• ••••";const p=document.querySelector(".credit-card");p&&p.classList.add("credit-card-focused")}),a&&a.addEventListener("input",t=>{const r=document.getElementById("cardNameDisplay");r&&(r.textContent=t.target.value.toUpperCase()||"NOMBRE APELLIDO");const c=document.querySelector(".credit-card");c&&c.classList.add("credit-card-focused")}),o&&o.addEventListener("input",t=>{let r=t.target.value.replace(/[^0-9]/g,"");r.length>2&&(r=r.substring(0,2)+"/"+r.substring(2,4)),t.target.value=r.substring(0,5);const c=document.getElementById("cardExpiryDisplay");c&&(c.textContent=r||"MM/AA");const m=document.querySelector(".credit-card");m&&m.classList.add("credit-card-focused")}),["cardNumber","cardName","cardExpiry","cardCvv"].forEach(t=>{const r=document.getElementById(t);r&&r.addEventListener("blur",()=>{const c=document.querySelector(".credit-card");c&&c.classList.remove("credit-card-focused")})}),d&&d.addEventListener("click",()=>{const t=s?s.value:"",r=a?a.value:"",c=o?o.value:"",m=l?l.value:"";if(!t||!r||!c||!m){alert("Por favor, completa todos los campos de la tarjeta");return}d.innerHTML=`
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Procesando...
                `,setTimeout(()=>{d.innerHTML=`
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                        </svg>
                        ¡Tarjeta guardada!
                    `,d.classList.remove("bg-purple-600","hover:bg-purple-700"),d.classList.add("bg-green-500","hover:bg-green-600"),setTimeout(()=>{e.classList.add("hidden"),document.body.style.overflow="auto",n&&(n.innerHTML=`
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                Método de Pago Añadido
                            `,n.classList.remove("bg-white","hover:bg-gray-50","border-gray-300","text-gray-800"),n.classList.add("bg-gray-50","border-green-100","text-green-700"));const p=document.querySelector(".lg\\:col-span-3");if(p){const u=document.createElement("div");u.className="bg-green-50 border border-green-100 rounded-xl p-3 mb-4 flex items-center animate-fade-in",u.innerHTML=`
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span class="text-green-700 text-sm font-medium">Tarjeta guardada correctamente</span>
                            `,p.insertBefore(u,p.firstChild),setTimeout(()=>{u.style.opacity="0",u.style.transition="opacity 0.5s ease",setTimeout(()=>u.remove(),500)},4e3)}},1e3)},1500)})}
