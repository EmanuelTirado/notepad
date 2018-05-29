import httpClient from "axios";

function getNotePad() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        notes: [
          { id: 1, title: "Note #1", content: "This is a note.", lastMod: "2018-05-20", color: "white--text yellow", icon: "assignment" },
          { id: 2, title: "Note #2", content: "This is a note.", lastMod: "2018-05-20", color: "white--text red", icon: "assignment" },
          { id: 3, title: "Note #3", content: "This is a note.", lastMod: "2018-05-20", color: "white--text green", icon: "assignment" },
          { id: 4, title: "Note #4", content: "This is a note.", lastMod: "2018-05-20", color: "white--text purple", icon: "assignment" },
        ],
        settings: {
          fontSize: 10
        },
      });
    }, 1000);
  });
}

function saveNote(noteForm) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        note: {
          id: noteForm.id,
          title: noteForm.title,
          content: noteForm.content,
          category: noteForm.category,
          lastMod: new Date(),
          color: "white--text yellow",
          icon: "assignment"
        }
      });
    }, 1000);
  });
}

function deleteNote(noteId) {

}

export default {
  getNotePad, saveNote, deleteNote
};
