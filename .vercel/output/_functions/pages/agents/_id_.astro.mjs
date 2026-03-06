import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CALqXRaA.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_CfYqhCmw.mjs';
import { $ as $$OffreCard } from '../../chunks/OffreCard_CgTOo1LX.mjs';
import { g as getAgents, a as getOffresByAgent } from '../../chunks/backend_DD7_7EtZ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  const agents = await getAgents();
  const agent = agents.find((a) => a.id === id);
  const offres = await getOffresByAgent(id);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": agent ? `Agent \u2014 ${agent.Email}` : "Agent" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="/agents" class="text-blue-600 hover:underline text-sm">← Retour aux agents</a> ${agent ? renderTemplate`<div class="flex items-center gap-4 mt-4 mb-8"> <div class="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-2xl shrink-0"> ${agent.Email[0].toUpperCase()} </div> <div> <h1 class="text-3xl font-bold">${agent.Email}</h1> <p class="text-gray-500 mt-1"> ${offres.length} offre${offres.length !== 1 ? "s" : ""} </p> </div> </div>` : renderTemplate`<h1 class="text-3xl font-bold mt-4 mb-8">Agent introuvable</h1>`}${offres.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${offres.map((offre) => renderTemplate`${renderComponent($$result2, "OffreCard", $$OffreCard, { "offre": offre })}`)} </div>` : renderTemplate`<p class="text-gray-500">Aucune offre pour cet agent.</p>`}` })}`;
}, "C:/Users/vicai/Documents/GitHub/r213-tp-Jeremyvcr/src/pages/agents/[id].astro", void 0);

const $$file = "C:/Users/vicai/Documents/GitHub/r213-tp-Jeremyvcr/src/pages/agents/[id].astro";
const $$url = "/agents/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
