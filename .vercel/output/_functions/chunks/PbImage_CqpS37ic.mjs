import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate } from './astro/server_CALqXRaA.mjs';
import 'piccolore';
import 'clsx';
import { e as getImageUrl } from './backend_DD7_7EtZ.mjs';

const $$Astro = createAstro();
const $$PbImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PbImage;
  const { record, image = "images", width = 600, height = 300 } = Astro2.props;
  const imageURL = getImageUrl(record, image);
  return renderTemplate`${imageURL ? renderTemplate`${maybeRenderHead()}<img${addAttribute(imageURL, "src")}${addAttribute(`Photo de ${record.nom_maison ?? "maison"}`, "alt")}${addAttribute(width, "width")}${addAttribute(height, "height")} class="w-full h-48 object-cover rounded-t-xl">` : renderTemplate`<p style="color:#b91c1c;">Aucune image trouvée</p>`}`;
}, "C:/Users/vicai/Documents/GitHub/r213-tp-Jeremyvcr/src/components/PbImage.astro", void 0);

export { $$PbImage as $ };
