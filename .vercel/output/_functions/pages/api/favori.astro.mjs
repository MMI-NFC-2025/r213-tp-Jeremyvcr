import { s as setFavori } from '../../chunks/backend_DD7_7EtZ.mjs';
export { renderers } from '../../renderers.mjs';

const POST = async ({ request }) => {
  const offre = await request.json();
  await setFavori(offre);
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
