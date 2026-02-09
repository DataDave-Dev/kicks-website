import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BI-M1sh_.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$SectionContainer } from '../chunks/SectionContainer_DJvvIJu8.mjs';
/* empty css                                    */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Register = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Register;
  const error = Astro2.url.searchParams.get("error");
  const success = Astro2.url.searchParams.get("success");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Registro", "data-astro-cid-qraosrxq": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-25 px-4", "data-astro-cid-qraosrxq": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="bg-white w-full max-w-md mx-auto rounded-2xl shadow-xl p-8" data-astro-cid-qraosrxq> <h1 class="text-3xl text-center font-bold mb-2 text-gray-800" data-astro-cid-qraosrxq>
Crear cuenta
</h1> <p class="text-center text-gray-500 mb-6" data-astro-cid-qraosrxq>
¿Ya tienes una cuenta?
<a href="/signin" class="text-red-500 hover:underline font-semibold" data-astro-cid-qraosrxq>Inicia sesión</a> </p> ${error && renderTemplate`<div class="mb-4 p-3 rounded bg-red-100 text-red-700 text-center font-semibold" data-astro-cid-qraosrxq> ${error} </div>`} ${success && renderTemplate`<div class="mb-4 p-3 rounded bg-green-100 text-green-700 text-center font-semibold" data-astro-cid-qraosrxq>
¡Registro exitoso!
</div>`} <form action="/api/auth/register" method="post" class="flex flex-col gap-4" data-astro-cid-qraosrxq> <div data-astro-cid-qraosrxq> <label for="name" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-qraosrxq>Nombre(s)</label> <input type="text" name="name" id="name" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition" placeholder="Tu nombre" required pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ ]+" data-astro-cid-qraosrxq> </div> <div data-astro-cid-qraosrxq> <label for="lastname" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-qraosrxq>Apellido(s)</label> <input type="text" name="lastname" id="lastname" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition" placeholder="Tu Apellido" required pattern="[A-Za-zÁÉÍÓÚáéíóúÑñ ]+" data-astro-cid-qraosrxq> </div> <div data-astro-cid-qraosrxq> <label for="email" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-qraosrxq>Correo electrónico</label> <input type="email" name="email" id="email" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition" placeholder="tucorreo@ejemplo.com" data-astro-cid-qraosrxq> </div> <div data-astro-cid-qraosrxq> <label for="password" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-qraosrxq>Contraseña</label> <input type="password" name="password" id="password" required minlength="8" class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition" placeholder="Mínimo 8 caracteres" data-astro-cid-qraosrxq> </div> <button type="submit" class="w-full bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white font-bold py-2 rounded-lg shadow transition-all text-lg mt-2" data-astro-cid-qraosrxq>
Registrarme
</button> </form> </div> ` })}  ` })}`;
}, "C:/Users/SISTEMAS/proyectos/kick's-web/src/pages/register.astro", void 0);

const $$file = "C:/Users/SISTEMAS/proyectos/kick's-web/src/pages/register.astro";
const $$url = "/register";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Register,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
