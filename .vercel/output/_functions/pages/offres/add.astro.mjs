import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CALqXRaA.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/Layout_CfYqhCmw.mjs';
import { b as addOffre } from '../../chunks/backend_DD7_7EtZ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const $$Add = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Add;
  let message = "";
  if (Astro2.request.method === "POST") {
    const formData = await Astro2.request.formData();
    const response = await addOffre(formData);
    message = response.message;
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "titre": "Ajouter une offre" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-2xl font-bold mb-6">Ajouter une offre</h1> ${message && renderTemplate`<p class="mb-4 text-green-600 font-medium">${message}</p>`}<form action="/offres/add" method="POST" enctype="multipart/form-data" class="flex flex-col gap-4 max-w-md"> <input type="text" name="nom_maison" placeholder="Nom de la maison" required class="p-2 border rounded-md"> <input type="number" name="prix" placeholder="Prix" class="p-2 border rounded-md"> <input type="number" name="nombre_salle_de_bain" placeholder="Nombre de salles de bain" class="p-2 border rounded-md"> <input type="number" name="nombre_chambre" placeholder="Nombre de chambres" class="p-2 border rounded-md"> <input type="number" name="surface" placeholder="Superficie" class="p-2 border rounded-md"> <input type="file" name="image" class="p-2 border rounded-md"> <button type="submit" class="btn-primary"> Ajouter </button> </form> ` })}`;
}, "C:/Users/vicai/Documents/GitHub/r213-tp-Jeremyvcr/src/pages/offres/add.astro", void 0);

const $$file = "C:/Users/vicai/Documents/GitHub/r213-tp-Jeremyvcr/src/pages/offres/add.astro";
const $$url = "/offres/add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Add,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
