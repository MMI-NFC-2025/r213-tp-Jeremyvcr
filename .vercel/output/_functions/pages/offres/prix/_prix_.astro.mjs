import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../../../chunks/astro/server_CALqXRaA.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../../chunks/Layout_CfYqhCmw.mjs';
import { c as getOffres } from '../../../chunks/backend_DD7_7EtZ.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro();
const $$prix = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$prix;
  const { prix } = Astro2.params;
  const maxPrix = Number(prix);
  const offres = await getOffres();
  const offresFiltrees = offres.filter((offre) => Number(offre.prix) < maxPrix);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": `Offres \xE0 moins de ${maxPrix} \u20AC` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Maisons à moins de ${maxPrix} €</h1> ${offresFiltrees.length ? renderTemplate`<ul> ${offresFiltrees.map((offre) => renderTemplate`<li> <a${addAttribute(`/offres/${offre.id}`, "href")} class="underline"> ${offre.nom_maison} — ${offre.prix} €
</a> </li>`)} </ul>` : renderTemplate`<p>Aucune maison trouvée.</p>`}` })}`;
}, "C:/Users/vicai/Documents/GitHub/r213-tp-Jeremyvcr/src/pages/offres/prix/[prix].astro", void 0);

const $$file = "C:/Users/vicai/Documents/GitHub/r213-tp-Jeremyvcr/src/pages/offres/prix/[prix].astro";
const $$url = "/offres/prix/[prix]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$prix,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
