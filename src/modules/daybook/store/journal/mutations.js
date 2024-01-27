// export const myMutation = (state) => {
//   return state.
// }

export const setEntries = (state, entries) => {
  state.entries = [...state.entries, ...entries];
  state.isLoading = false;
};

export const updateEntry = (state, entry) => {
  state.entries = state.entries.map((entryState) =>
    entryState.id !== entry.id
      ? entryState
      : {
          id: entry.id,
          ...entry,
        }
  );
};

export const addEntry = (state, entry) => {
  state.entries = [entry, ...state.entries];
};

export const deleteEntry = (state, id) => {
  state.entries = state.entries.filter((entryState) => entryState.id !== id);
};
