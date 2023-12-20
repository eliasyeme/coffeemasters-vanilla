const Router = {
    init: () => {
        document.querySelectorAll("a.navlink").forEach(a => {
            a.addEventListener("click", (event) => {
                event.preventDefault();
                const href = event.target.getAttribute("href");
                Router.go(href);
            });
        });
        window.addEventListener("popstate", (event) => {
            Router.go(event.state.route, false);
        })
        Router.go(location.pathname);
    },
    go: (route, addToHistory=true) => {
        if (addToHistory) {
            history.pushState({ route }, "", route);
        }
        let pageElement = null
        switch (route) {
            case "/":
                pageElement = document.createElement("h1");
                pageElement.textContent = "Menu";
                break;
            case "/order":
                pageElement = document.createElement("h1");
                pageElement.textContent = "Your cart";
                break
            default:
                console.log(`route: ${route}`)
                if (route.startsWith("product-")) {
                    pageElement = document.createElement("h1");
                    pageElement.textContent = "Details";
                    const paramId = route.substring(route.lastIndexOf("-") + 1);
                    pageElement.dataset.id = paramId;
                }
        }

        if (pageElement) {
            document.querySelector("main").innerHTML = "";
            document.querySelector("main").appendChild(pageElement);
        }
    }
}

export default Router