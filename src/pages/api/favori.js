import { setFavori } from "../../backend.mjs";

export const POST = async ({ request }) => {
  const offre = await request.json();
  await setFavori(offre);
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
};
