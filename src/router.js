import VueRouter from "vue-router";
import Notes from "./components/Notes";
import EditNote from "./components/EditNote";
import ViewNote from "./components/ViewNote";

export default new VueRouter({
  routes: [
    { name: "notes", path: "/", component: Notes },
    { name: "note-edit", path: "/note/:id/edit", component: EditNote },
    { name: "note-view", path: "/note/:id", component: ViewNote },
  ]
});
