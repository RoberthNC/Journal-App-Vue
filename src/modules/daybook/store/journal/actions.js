import journalApi from "@/api/journalApi";
// export const myAction = async({ commit }) => {

// }

export const loadEntries = async ({ commit }) => {
  const { data } = await journalApi.get("/entries.json");
  const entries = [];
  for (let id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    });
  }
  commit("setEntries", entries);
};

export const updateEntry = async ({ commit }, entry) => {
  const { id, ...dataSave } = entry;
  await journalApi.put(`/entries/${id}.json`, dataSave);
  commit("updateEntry", { ...entry });
};

export const createEntry = async ({ commit }, entry) => {
  const dataToSave = { ...entry };
  const { data } = await journalApi.post("/entries.json", dataToSave);
  dataToSave.id = data.name;
  commit("addEntry", dataToSave);
  return data.name;
};

export const deleteEntry = async ({ commit }, id) => {
  await journalApi.delete(`/entries/${id}.json`);
  commit("deleteEntry", id);
};
