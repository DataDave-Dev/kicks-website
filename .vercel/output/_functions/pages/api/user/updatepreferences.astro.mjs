import { s as supabase } from '../../../chunks/supabase_UwiOy4HL.mjs';
export { renderers } from '../../../renderers.mjs';

const POST = async ({ request, cookies, redirect }) => {
  const form = await request.formData();
  const emailOffers = form.get("email-offers") === "on";
  const orderUpdates = form.get("order-updates") === "on";
  const newslette = form.get("newslette") === "on";
  const cookiesUser = form.get("cookies") === "on";
  const analytics = form.get("analytics") === "on";
  const marketing = form.get("marketing") === "on";
  const userCookie = cookies.get("sb-user");
  let userId = null;
  if (userCookie) {
    try {
      const user = JSON.parse(userCookie.value);
      userId = user.id;
    } catch (err) {
      console.error("Error al parsear el usuario:", err);
    }
  }
  if (!userId) {
    return new Response("No autorizado", { status: 401 });
  }
  const { data, error } = await supabase.from("PreferenciasUsuarios").upsert(
    {
      id_usuario: userId,
      Ofertas: emailOffers,
      ActualizacionesPedidos: orderUpdates,
      Boletin: newslette,
      Cookiesfuncionales: cookiesUser,
      Cookiesanaliticas: analytics,
      Cookiesmarketing: marketing
    },
    { onConflict: "id_usuario" }
  );
  if (error) {
    console.error("Error al guardar las preferencias:", error);
    return new Response("Error al guardar las preferencias", { status: 500 });
  }
  return redirect("/settings");
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
