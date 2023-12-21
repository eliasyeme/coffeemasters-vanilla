export class MenuPage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'open' });

        const style = document.createElement('style');
        this.root.appendChild(style);

        async function loadCss() {
            const request = await fetch('/components/MenuPage.css')
            const css = await request.text();
            style.textContent = css;
        }
        loadCss();    
    }

    connectedCallback() {
        const template = document.getElementById('menu-page-template');
        const contnet = template.content.cloneNode(true);
        this.root.appendChild(contnet);
    }
}
customElements.define('menu-page', MenuPage);