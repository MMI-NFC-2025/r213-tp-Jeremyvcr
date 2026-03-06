import { e as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_CALqXRaA.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_CfYqhCmw.mjs';
import { c as getOffres } from '../chunks/backend_DD7_7EtZ.mjs';
import { $ as $$OffreCard } from '../chunks/OffreCard_CgTOo1LX.mjs';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const offres = await getOffres();
  return renderTemplate(_a || (_a = __template(["", ' <script>\n  document.addEventListener("DOMContentLoaded", function () {\n    var favoris = JSON.parse(localStorage.getItem("favoris") || "[]");\n    var items = document.querySelectorAll(".favori-item");\n    var shown = 0;\n\n    items.forEach(function (item) {\n      if (favoris.includes(item.dataset.id)) {\n        item.classList.remove("hidden");\n        shown++;\n      }\n    });\n\n    if (shown === 0) {\n      document.getElementById("no-favoris").classList.remove("hidden");\n    }\n  });\n<\/script>'])), renderComponent($$result, "Layout", $$Layout, { "titre": "Offres" }, { "default": async ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="mb-12"> <h2 class="text-2xl font-bold mb-4">⭐ Mes favoris</h2> <div class="flex gap-6 overflow-x-auto pb-4" id="favoris-container"> ${offres.map((offre) => renderTemplate`<div class="min-w-87.5 shrink-0 favori-item hidden"${addAttribute(offre.id, "data-id")}> ${renderComponent($$result2, "OffreCard", $$OffreCard, { "offre": offre })} </div>`)} </div> <p id="no-favoris" class="hidden text-gray-500">Aucun favori pour le moment.</p> </section> <hr class="border-slate-200 mb-10">  <section> <h1 class="text-3xl font-bold mb-6">Toutes les maisons</h1> ${offres.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${offres.map((offre) => renderTemplate`${renderComponent($$result2, "OffreCard", $$OffreCard, { "offre": offre })}`)} </div>` : renderTemplate`<p class="text-gray-500">Aucune maison disponible.</p>`} </section> ` }));
}, "C:/Users/vicai/Documents/GitHub/r213-tp-Jeremyvcr/src/pages/offres/index.astro", void 0);

const $$file = "C:/Users/vicai/Documents/GitHub/r213-tp-Jeremyvcr/src/pages/offres/index.astro";
const $$url = "/offres";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
