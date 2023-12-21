import { loadData } from "./services/Menu.js"
import Router from "./services/Router.js";
import Store from "./services/Store.js";

// import components
import { MenuPage } from "./components/MenuPage.js";
import { DetailsPage } from "./components/DetailsPage.js";
import { OrderPage } from "./components/OrderPage.js";

window.app = {};
app.store = Store;

window.addEventListener('DOMContentLoaded', () => {
    app.store.menu = loadData();
    Router.init()
})