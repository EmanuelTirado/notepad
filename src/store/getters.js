import { find, sortBy } from "lodash";

export default {
  notesSortedByTitle: (state) => sortBy(state.notes, ["title"]),
  notesSortedBy: (state) => (key) => sortBy(state.notes, [key]),

  noteCount: (state) => state.notes.length,
  noteForm: (state) => state.noteForm,
  getNoteById: (state) => (noteId) => find(state.notes, ["id", noteId]),

  selectedNoteId: (state) => +state.route.params.id,
  selectedNote: (state) => find(state.notes, ["id", +state.route.params.id]),

  loading: (state) => state.status.loading,
  
  editMode: (state) => state.route.name === "note-edit",
  viewMode: (state) => state.route.name === "note-view",
};