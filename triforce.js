class Triforce extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.style.height = '60px';
        this.style.width = '60px';
        this.style.display = 'block';
        this.style.marginTop = '20px';
        const shadowRoot = this.attachShadow({
            mode: 'open'
        })

        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="triforce.css">
        <div class="cssload-triangle"></div>
        `
    }
}

const MyTriforce = customElements.define('load-triforce', Triforce)