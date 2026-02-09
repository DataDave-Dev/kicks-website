import { c as createComponent, m as maybeRenderHead, a as renderTemplate, d as createAstro, r as renderComponent, b as renderScript, e as addAttribute } from '../chunks/astro/server_BI-M1sh_.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout, a as $$SectionContainer } from '../chunks/SectionContainer_DJvvIJu8.mjs';
import { s as supabase } from '../chunks/supabase_UwiOy4HL.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const $$CardModal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div id="creditCardModal" class="fixed inset-0 bg-black/70 bg-opacity-50 z-50 flex items-center justify-center hidden"> <div class="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto mx-4 animate-fade-in"> <div class="flex justify-between items-center mb-4"> <h3 class="text-xl font-bold text-gray-900">
Agregar Método de Pago
</h3> <button id="closeModal" class="text-gray-400 hover:text-gray-500"> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <div class="mb-6"> <div class="credit-card bg-gradient-to-br from-red-600 to-red-500 rounded-xl p-5 text-white shadow-lg transition-all duration-300 mb-6"> <div class="flex justify-between items-start"> <div class="space-y-1"> <p class="text-xs font-medium opacity-80">
TARJETA DE CRÉDITO
</p> <p id="cardNumberDisplay" class="font-mono text-lg">
•••• •••• •••• ••••
</p> </div> <div> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path> </svg> </div> </div> <div class="flex justify-between items-end mt-6"> <div> <p class="text-xs opacity-80 mb-1">TITULAR</p> <p id="cardNameDisplay" class="font-medium uppercase">
NOMBRE APELLIDO
</p> </div> <div> <p class="text-xs opacity-80 mb-1">VENCE</p> <p id="cardExpiryDisplay" class="font-medium">MM/AA</p> </div> </div> </div> <form class="space-y-4"> <div> <label for="cardNumber" class="block text-sm font-medium text-gray-700 mb-1">Número de Tarjeta</label> <input type="text" id="cardNumber" maxlength="19" placeholder="0000 0000 0000 0000" class="block w-full rounded-lg border border-gray-300 focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50 py-2.5 px-3 transition"> </div> <div> <label for="cardName" class="block text-sm font-medium text-gray-700 mb-1">Nombre del Titular</label> <input type="text" id="cardName" placeholder="Nombre como aparece en la tarjeta" class="block w-full rounded-lg border border-gray-300 focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50 py-2.5 px-3 transition"> </div> <div class="grid grid-cols-2 gap-4"> <div> <label for="cardExpiry" class="block text-sm font-medium text-gray-700 mb-1">Fecha de Vencimiento</label> <input type="text" id="cardExpiry" placeholder="MM/AA" maxlength="5" class="block w-full rounded-lg border border-gray-300 focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50 py-2.5 px-3 transition"> </div> <div> <label for="cardCvv" class="block text-sm font-medium text-gray-700 mb-1">CVV</label> <input type="password" id="cardCvv" placeholder="123" maxlength="3" class="block w-full rounded-lg border border-gray-300 focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50 py-2.5 px-3 transition"> </div> </div> </form> </div> <button id="saveCard" class="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-xl shadow transition flex items-center justify-center">
Guardar Tarjeta
</button> </div> </div>`;
}, "C:/Users/SISTEMAS/proyectos/kick's-web/src/components/Modal/CardModal.astro", void 0);

const $$Astro = createAstro();
const $$Pay = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pay;
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (!accessToken && !refreshToken) {
    return redirect("/signin");
  }
  const userCookie = Astro2.cookies.get("sb-user");
  let user = null;
  if (userCookie) {
    try {
      user = JSON.parse(userCookie.value);
    } catch {
    }
  } else {
    user = "";
  }
  const { data: addressUser, error: addressUserError } = await supabase.from("Direcciones").select(
    "Direccion, Ciudad, Pais, CodigoPostal, Estado, MismaParaFacturacion"
  ).eq("id_usuario", user.id).eq("MismaParaFacturacion", true).single();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Pago", "data-astro-cid-kao5jslf": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-25 px-4", "data-astro-cid-kao5jslf": true }, { "default": async ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="max-w-5xl mx-auto" data-astro-cid-kao5jslf> <div class="mb-10" data-astro-cid-kao5jslf> <div class="flex justify-between items-center" data-astro-cid-kao5jslf> <div class="flex flex-col items-center" data-astro-cid-kao5jslf> <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold" data-astro-cid-kao5jslf>
1
</div> <span class="text-xs mt-1 font-medium" data-astro-cid-kao5jslf>Carrito</span> </div> <div class="h-1 flex-1 bg-gray-200 mx-2" data-astro-cid-kao5jslf> <div class="h-full bg-red-500 w-full" data-astro-cid-kao5jslf></div> </div> <div class="flex flex-col items-center" data-astro-cid-kao5jslf> <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold" data-astro-cid-kao5jslf>
2
</div> <span class="text-xs mt-1 font-medium" data-astro-cid-kao5jslf>Envío</span> </div> <div class="h-1 flex-1 bg-gray-200 mx-2" data-astro-cid-kao5jslf></div> <div class="flex flex-col items-center" data-astro-cid-kao5jslf> <div class="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 font-bold" data-astro-cid-kao5jslf>
3
</div> <span class="text-xs mt-1 font-medium text-gray-500" data-astro-cid-kao5jslf>Pago</span> </div> </div> </div> <div id="order-messages" data-astro-cid-kao5jslf></div> <div class="grid grid-cols-1 lg:grid-cols-5 gap-8" data-astro-cid-kao5jslf> <form class="lg:col-span-3 bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 space-y-5" method="post" id="checkoutForm" data-astro-cid-kao5jslf> <h1 class="text-2xl md:text-3xl font-bold mb-6 text-gray-900" data-astro-cid-kao5jslf>
Información de Envío
</h1> <div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-astro-cid-kao5jslf> <div data-astro-cid-kao5jslf> <label for="firstName" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-kao5jslf>Nombre(s)</label> <input id="firstName" name="firstName" type="text" required class="block w-full rounded-lg border border-gray-300 focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50 py-2.5 px-3 transition" placeholder="Tu nombre / nombres"${addAttribute(`${user?.name ? user?.name : ""}`, "value")} data-astro-cid-kao5jslf> </div> <div data-astro-cid-kao5jslf> <label for="lastName" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-kao5jslf>Apellido(s)</label> <input id="lastName" name="lastName" type="text" required class="block w-full rounded-lg border border-gray-300 focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50 py-2.5 px-3 transition" placeholder="Tu apellido / apellidos"${addAttribute(`${user?.lastname ? user?.lastname : ""}`, "value")} data-astro-cid-kao5jslf> </div> </div> <div data-astro-cid-kao5jslf> <label for="number" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-kao5jslf>Teléfono</label> <input id="number" name="number" type="text" required class="block w-full rounded-lg border border-gray-300 focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50 py-2.5 px-3 transition" placeholder="(+52) 81-2785-6589"${addAttribute(`${user?.phone ? user?.phone : ""}`, "value")} data-astro-cid-kao5jslf> </div> <div data-astro-cid-kao5jslf> <label for="country" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-kao5jslf>País</label> <select id="country" name="country" required class="block w-full rounded-lg border border-gray-300 focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50 py-2.5 px-3 appearance-none transition" data-astro-cid-kao5jslf> ${!addressUser?.Pais && renderTemplate`<option value="" data-astro-cid-kao5jslf>Selecciona un país</option>`} <option value="MX"${addAttribute(addressUser?.Pais === "MX", "selected")} data-astro-cid-kao5jslf>México</option> <option value="US"${addAttribute(addressUser?.Pais === "US", "selected")} data-astro-cid-kao5jslf>Estados Unidos</option> <option value="ES"${addAttribute(addressUser?.Pais === "ES", "selected")} data-astro-cid-kao5jslf>España</option> <option value="CO"${addAttribute(addressUser?.Pais === "CO", "selected")} data-astro-cid-kao5jslf>Colombia</option> <option value="AR"${addAttribute(addressUser?.Pais === "AR", "selected")} data-astro-cid-kao5jslf>Argentina</option> </select> </div> <div data-astro-cid-kao5jslf> <label for="state" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-kao5jslf>Estado</label> <input id="state" name="state" type="text" required class="block w-full rounded-lg border border-gray-300 focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50 py-2.5 px-3 transition" placeholder="Estado"${addAttribute(`${addressUser?.Estado ? addressUser?.Estado : ""}`, "value")} data-astro-cid-kao5jslf> </div> <div data-astro-cid-kao5jslf> <label for="address" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-kao5jslf>Dirección</label> <input id="address" name="address" required class="block w-full rounded-lg border border-gray-300 focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50 py-2.5 px-3 transition" placeholder="Calle y número"${addAttribute(`${addressUser?.Direccion ? addressUser?.Direccion : ""}`, "value")} data-astro-cid-kao5jslf> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-4" data-astro-cid-kao5jslf> <div data-astro-cid-kao5jslf> <label for="city" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-kao5jslf>Ciudad</label> <input id="city" name="city" type="text" required class="block w-full rounded-lg border border-gray-300 focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50 py-2.5 px-3 transition" placeholder="Ciudad"${addAttribute(`${addressUser?.Ciudad ? addressUser?.Ciudad : ""}`, "value")} data-astro-cid-kao5jslf> </div> <div data-astro-cid-kao5jslf> <label for="postalCode" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-kao5jslf>Código Postal</label> <input id="postalCode" name="postalCode" type="text" required class="block w-full rounded-lg border border-gray-300 focus:border-red-400 focus:ring focus:ring-red-200 focus:ring-opacity-50 py-2.5 px-3 transition" placeholder="12345"${addAttribute(`${addressUser?.CodigoPostal ? addressUser?.CodigoPostal : ""}`, "value")} data-astro-cid-kao5jslf> </div> </div> <input type="hidden" name="cartItems" id="cartItems" data-astro-cid-kao5jslf> <div class="pt-4" data-astro-cid-kao5jslf> <button type="button" id="openModal" class="w-full bg-white hover:bg-gray-50 border border-gray-300 text-gray-800 font-medium py-3 px-4 rounded-xl shadow-sm transition flex items-center justify-center gap-2" data-astro-cid-kao5jslf> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-kao5jslf> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" data-astro-cid-kao5jslf></path> </svg>
Agregar Método de Pago
</button> </div> <button type="submit" class="w-full mt-6 bg-red-500 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-xl shadow transition flex items-center justify-center gap-2" data-astro-cid-kao5jslf> <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" data-astro-cid-kao5jslf> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-kao5jslf></path> </svg>
Continuar al Pago
</button> </form> <div class="lg:col-span-2" data-astro-cid-kao5jslf> <div class="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 mb-4 sticky top-4" data-astro-cid-kao5jslf> <h2 class="text-xl font-bold mb-4 text-gray-900" data-astro-cid-kao5jslf>
Resumen de Pedido
</h2> <div id="order-summary-items" class="space-y-4 mb-6" data-astro-cid-kao5jslf></div> <div class="mt-6" data-astro-cid-kao5jslf> <div id="order-summary-totals" class="space-y-3 py-4 border-t border-dashed border-gray-200" data-astro-cid-kao5jslf></div> <div class="flex justify-between items-center mt-4 pt-4 border-t border-gray-200" data-astro-cid-kao5jslf> <span class="text-lg font-bold" data-astro-cid-kao5jslf>Total</span> <span id="order-summary-total" class="text-xl font-bold text-red-500" data-astro-cid-kao5jslf></span> </div> </div> </div> </div> </div> </div> ${renderComponent($$result3, "CardModal", $$CardModal, { "data-astro-cid-kao5jslf": true })} ` })} ` })}  ${renderScript($$result, "C:/Users/SISTEMAS/proyectos/kick's-web/src/pages/pay.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/SISTEMAS/proyectos/kick's-web/src/pages/pay.astro", void 0);

const $$file = "C:/Users/SISTEMAS/proyectos/kick's-web/src/pages/pay.astro";
const $$url = "/pay";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Pay,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
