class Card extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML = "<h1>Hello World</h1>";
    }
}

customElements.define("hello-card", Card);