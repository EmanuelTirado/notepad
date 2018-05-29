import { unionBy } from "lodash";

export default {
  setLoading(state) {
    state.status = {
      loading: true,
      error: false,
      errorMsg: "",
      success: false
    };
  },

  setError(state, error) {
    state.status = {
      loading: false,
      error: true,
      errorMsg: error.message,
      success: false
    }
  },

  setSuccess(state) {
    state.status = {
      loading: false,
      error: false,
      errorMsg: "",
      success: true
    }
  },

  loadNotes(state, notes) {
    state.notes = notes;
  },

  addNote(state, note) {
    state.notes.push(note);
  },

  updateNote(state, note) {
    state.notes = unionBy([ note ], state.notes, "id");
  },
  
  removeNote(state, noteToBeDeleted) {
    state.notes = notes.filter((note) => {
      return note.id !== noteToBeDeleted.id;
    });
  },

  loadNoteForm(state, note) {
    state.noteForm = {
      id: note.id,
      title: note.title,
      category: note.category,
      content: note.content
    };
  },

  updateNoteForm(state, payload) {
    state.noteForm = {
      ...state.noteForm,
      [payload.key]: payload.value
    };
  },

  loadSettings(state, settings) {
    state.settings = settings;
  },

  editSettings(state, settings) {
    state.settings = settings;
  },

  toggleDrawer(state) {
    state.drawer = !state.drawer;
  },

  updateDrawer(state, value) {
    state.drawer = value;
  }

};