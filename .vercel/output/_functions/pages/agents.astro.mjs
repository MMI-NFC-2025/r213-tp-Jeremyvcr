import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_CALqXRaA.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_CfYqhCmw.mjs';
import { g as getAgents } from '../chunks/backend_DD7_7EtZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const agents = await getAgents();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Agents" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-3xl font-bold mb-8">Liste des agents</h1> ${agents.length > 0 ? renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> ${agents.map((agent) => renderTemplate`<a${addAttribute(`/agents/${agent.id}`, "href")} class="block bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow"> <div class="flex items-center gap-4"> <div class="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg shrink-0"> ${agent.Email[0].toUpperCase()} </div> <div> <p class="font-semibold text-slate-900">${agent.Email}</p> </div> </div> </a>`)} </div>` : renderTemplate`<p>Aucun agent disponible.</p>`}` })}`;
}, "C:/Users/vicai/Documents/GitHub/r213-tp-Jeremyvcr/src/pages/agents/index.astro", void 0);

const $$file = "C:/Users/vicai/Documents/GitHub/r213-tp-Jeremyvcr/src/pages/agents/index.astro";
const $$url = "/agents";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
