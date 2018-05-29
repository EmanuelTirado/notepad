import requests from "./../requests";
import types from "./types";

export default {
  initNotepad({ commit, state, dispatch }) {
    const noteId = +state.route.params.id;
    commit(types.LOADING);

    return requests.getNotePad()
      .then((response) => {
        commit(types.LOAD_NOTES, response.notes);
        commit(types.LOAD_SETTINGS, response.settings);
        commit(types.SUCCESS);
        // When the initial route is edit mode, load 
        // NoteForm values if an ID was provided.
        if (noteId) {
          dispatch('setNoteFormById', noteId);
        }        
      })
      .catch((error) => {
        commit(types.ERROR, error);
      });
  },

  setNoteFormById({ commit, state, getters }, noteId) {
    const note = getters.getNoteById(noteId);
    if (note) {
      commit(types.LOAD_NOTE_FORM, note);
      commit(types.SUCCESS);
    } else {
      commit(types.ERROR, { message: "Note was not found." });
    }
  },

  updateNoteForm({ commit }, payload) {
    commit(types.UPDATE_NOTE_FORM, payload);
  },

  saveNote({ commit, state }) {
    const noteForm = { ...state.noteForm };
    commit(types.LOADING);

    return requests.saveNote(noteForm)
      .then((response) => {
        commit(types.UPDATE_NOTE, response.note);
        commit(types.LOAD_NOTE_FORM, response.note);
        commit(types.SUCCESS);
      })
      .catch((error) => {
        commit(types.ERROR, error);
      });
  },

  removeNote({ commit }, note) {
    commit(types.LOADING);

    return requests.saveNote()
      .then(() => {
        commit(types.REMOVE_NOTE, note);
        commit(types.SUCCESS);
      })
      .catch((error) => {
        commit(types.ERROR, error);
      });
  },

  toggleDrawer({ commit }) {
    commit(types.TOGGLE_DRAWER);
  },

  updateDrawer({ commit }, value) {
    commit(types.UPDATE_DRAWER, value);
  },

};