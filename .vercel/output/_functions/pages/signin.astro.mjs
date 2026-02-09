import { c as createComponent, d as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BI-M1sh_.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$SectionContainer } from '../chunks/SectionContainer_DJvvIJu8.mjs';
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$Signin = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Signin;
  const error = Astro2.url.searchParams.get("error");
  const success = Astro2.url.searchParams.get("success");
  const { cookies, redirect } = Astro2;
  const accessToken = cookies.get("sb-access-token");
  const refreshToken = cookies.get("sb-refresh-token");
  if (accessToken && refreshToken) {
    return redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Iniciar sesi\xF3n", "data-astro-cid-cj4bt2fj": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-25 px-4", "data-astro-cid-cj4bt2fj": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<div class="bg-white w-full max-w-md mx-auto rounded-2xl shadow-xl p-8" data-astro-cid-cj4bt2fj> <h1 class="text-3xl text-center font-bold mb-2 text-gray-800" data-astro-cid-cj4bt2fj>
Iniciar sesión
</h1> <p class="text-center text-gray-500 mb-6" data-astro-cid-cj4bt2fj>
¿Nuevo aquí?
<a href="/register" class="text-red-500 hover:underline font-semibold" data-astro-cid-cj4bt2fj>Crea una cuenta</a> </p> ${error && renderTemplate`<div class="mb-4 p-3 rounded bg-red-100 text-red-700 text-center font-semibold" data-astro-cid-cj4bt2fj> ${error} </div>`} ${success && renderTemplate`<div class="mb-4 p-3 rounded bg-green-100 text-green-700 text-center font-semibold" data-astro-cid-cj4bt2fj>
¡Registro exitoso!
</div>`} <form action="/api/auth/signin" method="post" class="flex flex-col gap-4" id="signin-form" data-astro-cid-cj4bt2fj> <div data-astro-cid-cj4bt2fj> <label for="email" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-cj4bt2fj>Correo electrónico</label> <input type="email" name="email" id="email" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition" placeholder="tucorreo@ejemplo.com" data-astro-cid-cj4bt2fj> </div> <div data-astro-cid-cj4bt2fj> <label for="password" class="block text-sm font-medium text-gray-700 mb-1" data-astro-cid-cj4bt2fj>Contraseña</label> <input type="password" name="password" id="password" required class="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-400 transition" placeholder="Tu contraseña" data-astro-cid-cj4bt2fj> </div> <button type="submit" class="w-full bg-red-500 hover:bg-red-600 text-white font-bold hover:cursor-pointer py-2 rounded-lg shadow transition-all text-lg mt-2" data-astro-cid-cj4bt2fj>
Ingresar
</button> </form> </div> ` })}  ` })}`;
}, "C:/Users/SISTEMAS/proyectos/kick's-web/src/pages/signin.astro", void 0);

const $$file = "C:/Users/SISTEMAS/proyectos/kick's-web/src/pages/signin.astro";
const $$url = "/signin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Signin,
    file: $$file,
    prerender,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
