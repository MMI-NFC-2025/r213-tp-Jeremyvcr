import { e as createComponent, f as createAstro, r as renderTemplate, h as addAttribute, k as renderComponent, m as maybeRenderHead } from './astro/server_CALqXRaA.mjs';
import 'piccolore';
import { $ as $$PbImage } from './PbImage_CqpS37ic.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$OffreCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$OffreCard;
  const { offre } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", '<div class="bg-white rounded-xl shadow overflow-hidden flex flex-col"> <a', "> ", ' </a> <div class="p-4 flex flex-col flex-1"> <h2 class="text-xl font-bold mb-2">', '</h2> <p class="text-gray-600 text-sm mb-1"> ', " m\xB2 &middot; ", " ch. &middot; ", ' sdb\n</p> <p class="text-lg font-semibold mt-1 mb-4"> ', ' </p> <div class="flex justify-between items-center mt-auto"> <a', ' class="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">\nVoir plus\n</a> <button class="favori-btn p-1"', `> <img src="/favorite.png" alt="Favori" width="28" height="28"> </button> </div> </div> </div> <script>
  (function () {
    function getFavoris() {
      return JSON.parse(localStorage.getItem("favoris") || "[]");
    }
    function saveFavoris(ids) {
      localStorage.setItem("favoris", JSON.stringify(ids));
    }

    // Initialise l'ic\xF4ne de chaque bouton selon localStorage
    document.querySelectorAll(".favori-btn").forEach(function (btn) {
      var id = btn.dataset.id;
      if (getFavoris().includes(id)) {
        btn.querySelector("img").src = "/favorite_filled.png";
      }
    });

    if (!window.__favoriListenerAdded) {
      window.__favoriListenerAdded = true;
      document.addEventListener("click", function (e) {
        var btn = e.target.closest(".favori-btn");
        if (!btn) return;

        var id = btn.dataset.id;
        var favoris = getFavoris();
        var idx = favoris.indexOf(id);
        var isFavori;

        if (idx === -1) {
          favoris.push(id);
          isFavori = true;
        } else {
          favoris.splice(idx, 1);
          isFavori = false;
        }
        saveFavoris(favoris);

        var img = btn.querySelector("img");
        if (img) img.src = isFavori ? "/favorite_filled.png" : "/favorite.png";
      });
    }
  })();
<\/script>`])), maybeRenderHead(), addAttribute(`/offres/${offre.id}`, "href"), renderComponent($$result, "PbImage", $$PbImage, { "record": offre, "image": "images" }), offre.nom_maison, offre.surface, offre.nombre_chambre, offre.nombre_sdb, offre.Prix ? `${offre.Prix.toLocaleString("fr-FR")} \u20AC` : "Prix non renseign\xE9", addAttribute(`/offres/${offre.id}`, "href"), addAttribute(offre.id, "data-id"));
}, "C:/Users/vicai/Documents/GitHub/r213-tp-Jeremyvcr/src/components/OffreCard.astro", void 0);

export { $$OffreCard as $ };
