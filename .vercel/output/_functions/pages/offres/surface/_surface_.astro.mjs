import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_CALqXRaA.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../chunks/Layout_CfYqhCmw.mjs';
import { $ as $$OffreCard } from '../../../chunks/OffreCard_CgTOo1LX.mjs';
import { c as getOffres } from '../../../chunks/backend_DD7_7EtZ.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$surface = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$surface;
  const surfaceMin = Number(Astro2.params.surface || 0);
  const offres = await getOffres();
  const offresFiltrees = offres.filter((o) => Number(o.surface) > surfaceMin);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": `Maisons avec surface > ${surfaceMin} m\xB2` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl font-bold mb-4">
Maisons avec surface &gt; ${surfaceMin} m²
</h1> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"> ${offresFiltrees.map((offre) => renderTemplate`${renderComponent($$result2, "OffreCard", $$OffreCard, { "offre": offre })}`)} </div> ` })}`;
}, "C:/Users/vicai/Documents/GitHub/r213-tp-Jeremyvcr/src/pages/offres/surface/[surface].astro", void 0);

const $$file = "C:/Users/vicai/Documents/GitHub/r213-tp-Jeremyvcr/src/pages/offres/surface/[surface].astro";
const $$url = "/offres/surface/[surface]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$surface,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
