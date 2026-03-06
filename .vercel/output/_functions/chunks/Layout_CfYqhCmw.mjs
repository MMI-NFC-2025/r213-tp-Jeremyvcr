import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, l as renderHead, k as renderComponent, n as renderSlot } from './astro/server_CALqXRaA.mjs';
import 'piccolore';
import 'clsx';
/* empty css                        */

const $$Astro$2 = createAstro();
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Header;
  const pathname = Astro2.url.pathname;
  const isActive = (path) => pathname === path;
  return renderTemplate`${maybeRenderHead()}<header class="bg-white shadow"> <nav class="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center"> <a href="/" class="text-2xl font-bold text-slate-900">
CityHome
</a> <div class="flex gap-4 items-center"> <a href="/"${addAttribute(`px-4 py-2 rounded-lg font-medium ${isActive("/") ? "bg-blue-600 text-white" : "text-slate-900"}`, "class")}>
Accueil
</a> <a href="/offres"${addAttribute(`px-4 py-2 rounded-lg font-medium ${isActive("/offres") ? "bg-blue-600 text-white" : "text-slate-900"}`, "class")}>
Offres
</a> <a href="/agents"${addAttribute(`px-4 py-2 rounded-lg font-medium ${isActive("/agents") ? "bg-blue-600 text-white" : "text-slate-900"}`, "class")}>
Agents
</a> <a href="/offres/add" class="px-4 py-2 rounded-lg font-medium bg-blue-600 text-white">
Ajouter une offre
</a> </div> </nav> </header>`;
}, "C:/Users/vicai/Documents/GitHub/r213-tp-Jeremyvcr/src/components/Header.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white border-t mt-10"> <div class="max-w-7xl mx-auto px-6 py-6 text-gray-500">
© 2026 CityHome — Astro + PocketBase
</div> </footer>`;
}, "C:/Users/vicai/Documents/GitHub/r213-tp-Jeremyvcr/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { titre = "CityHome" } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${titre}</title>${renderHead()}</head> <body class="bg-slate-100 text-slate-900 min-h-screen flex flex-col"> ${renderComponent($$result, "Header", $$Header, {})} <main class="max-w-7xl mx-auto w-full px-6 py-10 flex-1"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/vicai/Documents/GitHub/r213-tp-Jeremyvcr/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
