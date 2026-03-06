import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CALqXRaA.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_CfYqhCmw.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Accueil \u2014 CityHome" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center justify-center text-center py-20"> <h1 class="text-5xl font-bold text-slate-900 mb-4">
Bienvenue sur <span class="text-blue-600">CityHome</span> </h1> <p class="text-xl text-gray-500 mb-10 max-w-xl">
Trouvez la maison de vos rêves parmi nos offres immobilières.<br>
Consultez les biens disponibles, contactez nos agents, et sauvegardez vos favoris.
</p> <div class="flex gap-4 flex-wrap justify-center"> <a href="/offres" class="bg-blue-600 text-white px-8 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-colors">
Voir les offres
</a> <a href="/agents" class="bg-white border border-slate-300 text-slate-900 px-8 py-3 rounded-xl text-lg font-semibold hover:bg-slate-50 transition-colors">
Nos agents
</a> </div> </div> <div class="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"> <div class="bg-white rounded-xl shadow p-6"> <div class="text-4xl mb-3">🏠</div> <h2 class="font-bold text-lg mb-1">Des biens sélectionnés</h2> <p class="text-gray-500 text-sm">Parcourez nos maisons avec photos, surface, chambres et prix.</p> </div> <div class="bg-white rounded-xl shadow p-6"> <div class="text-4xl mb-3">⭐</div> <h2 class="font-bold text-lg mb-1">Sauvegardez vos favoris</h2> <p class="text-gray-500 text-sm">Retrouvez en un clic les maisons qui vous correspondent.</p> </div> <div class="bg-white rounded-xl shadow p-6"> <div class="text-4xl mb-3">👤</div> <h2 class="font-bold text-lg mb-1">Des agents disponibles</h2> <p class="text-gray-500 text-sm">Chaque bien est suivi par un agent prêt à vous accompagner.</p> </div> </div> ` })} `;
}, "C:/Users/vicai/Documents/GitHub/r213-tp-Jeremyvcr/src/pages/index.astro", void 0);

const $$file = "C:/Users/vicai/Documents/GitHub/r213-tp-Jeremyvcr/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
