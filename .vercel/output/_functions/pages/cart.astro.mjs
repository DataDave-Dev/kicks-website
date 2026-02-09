import { c as createComponent, r as renderComponent, a as renderTemplate, b as renderScript, m as maybeRenderHead } from '../chunks/astro/server_BI-M1sh_.mjs';
import 'kleur/colors';
import { $ as $$Layout, a as $$SectionContainer } from '../chunks/SectionContainer_DJvvIJu8.mjs';
/* empty css                                */
export { renderers } from '../renderers.mjs';

const $$Cart = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Carrito", "data-astro-cid-h3zw4u6d": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "class": "py-12 px-4 md:py-25", "data-astro-cid-h3zw4u6d": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl font-bold mb-8 text-center text-gray-800" data-astro-cid-h3zw4u6d>
Carrito de compras
</h1> <div id="cart-container" class="max-w-6xl mx-auto" data-astro-cid-h3zw4u6d></div> ` })} ${renderScript($$result2, "C:/Users/SISTEMAS/proyectos/kick's-web/src/pages/cart.astro?astro&type=script&index=0&lang.ts")}  ` })}`;
}, "C:/Users/SISTEMAS/proyectos/kick's-web/src/pages/cart.astro", void 0);

const $$file = "C:/Users/SISTEMAS/proyectos/kick's-web/src/pages/cart.astro";
const $$url = "/cart";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Cart,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
