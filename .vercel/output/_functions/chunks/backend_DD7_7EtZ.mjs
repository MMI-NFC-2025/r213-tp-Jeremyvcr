import PocketBase from 'pocketbase';

const pb = new PocketBase("http://127.0.0.1:8090");

async function getOffres() {
  try {
    return await pb.collection("Maison").getFullList({
      sort: "-created",
    });
  } catch (error) {
    console.log("Erreur lecture maisons", error);
    return [];
  }
}

async function getOffre(id) {
  try {
    return await pb.collection("Maison").getOne(id);
  } catch (error) {
    console.log("Erreur lecture maison", error);
    return null;
  }
}

async function getAgents() {
  try {
    return await pb.collection("Agent").getFullList();
  } catch (error) {
    console.log("Erreur lecture agents", error);
    return [];
  }
}

async function getOffresByAgent(agentId) {
  try {
    return await pb.collection("Maison").getFullList({
      filter: `Agent = "${agentId}"`,
      sort: "-created",
    });
  } catch (error) {
    console.log("Erreur lecture maisons par agent", error);
    return [];
  }
}

function getImageUrl(record, field = "images") {
  if (!record) return null;

  const value = record[field];
  if (!value) return null;

  const fileName = Array.isArray(value) ? value[0] : value;
  if (!fileName) return null;

  return pb.files.getURL(record, fileName);
}

async function setFavori(house) {
  try {
    await pb.collection("Maison").update(house.id, {
      favori: !house.favori,
    });
  } catch (error) {
    console.log("Erreur mise à jour favori", error);
  }
}

async function addOffre(formData) {
  try {
    const result = await pb.collection("Maison").create(formData);
    return { success: true, message: "Offre ajoutée avec succès", data: result };
  } catch (error) {
    console.log("Erreur ajout offre", error);
    return { success: false, message: "Erreur lors de l'ajout de l'offre" };
  }
}

export { getOffresByAgent as a, addOffre as b, getOffres as c, getOffre as d, getImageUrl as e, getAgents as g, setFavori as s };
