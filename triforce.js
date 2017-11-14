class Triforce extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({mode:'open'})

        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="triforce.css">
        <div class="cssload-triangle"></div>
        `
    }
}

const MyTriforce = customElements.define('load-triforce', Triforce)