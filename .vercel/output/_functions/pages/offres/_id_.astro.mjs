import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CALqXRaA.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_CfYqhCmw.mjs';
import { $ as $$PbImage } from '../../chunks/PbImage_CqpS37ic.mjs';
import { d as getOffre } from '../../chunks/backend_DD7_7EtZ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const offre = await getOffre(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": offre ? offre.nom_maison : "Offre" }, { "default": async ($$result2) => renderTemplate`${offre ? renderTemplate`${maybeRenderHead()}<div class="bg-white rounded-xl shadow overflow-hidden max-w-4xl mx-auto"> ${renderComponent($$result2, "PbImage", $$PbImage, { "record": offre, "image": "images", "width": 1200, "height": 500 })} <div class="p-6"> <h1 class="text-3xl font-bold mb-4">${offre.nom_maison}</h1> <p class="text-gray-600 mb-2">Adresse : ${offre.adresse}</p> <p class="text-gray-600 mb-2">Surface : ${offre.surface} m²</p> <p class="text-gray-600 mb-2">Chambres : ${offre.nombre_chambre}</p> <p class="text-gray-600 mb-2">SDB : ${offre.nombre_sdb}</p> <p class="text-2xl font-bold mt-4"> ${offre.Prix ? `${offre.Prix} \u20AC` : "Prix non renseign\xE9"} </p> <a href="/offres" class="inline-block mt-6 bg-blue-600 text-white px-4 py-2 rounded-lg">
Retour aux offres
</a> </div> </div>` : renderTemplate`<div class="bg-white rounded-xl shadow p-6"> <p>Offre introuvable.</p> <a href="/offres" class="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
Retour aux offres
</a> </div>`}` })}`;
}, "C:/Users/vicai/Documents/GitHub/r213-tp-Jeremyvcr/src/pages/offres/[id].astro", void 0);

const $$file = "C:/Users/vicai/Documents/GitHub/r213-tp-Jeremyvcr/src/pages/offres/[id].astro";
const $$url = "/offres/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
