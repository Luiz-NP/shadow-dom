class ColorTitle extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        
        shadow.appendChild(this.build());
        shadow.appendChild(this.style());
    }

    build() {
        const rootElement = document.createElement("h1");
        rootElement.innerText = this.getAttribute("title");
        rootElement.setAttribute("class", "title");

        return rootElement;
    }

    style() {
        const style = document.createElement("style");
        style.innerText = `
            .title {
                color: ${this.getAttribute("color")};
                font-family: sans-serif;
            }
        `;

        return style;
    }
}

customElements.define("color-title", ColorTitle);