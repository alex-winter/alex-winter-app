import { Dom } from "./services/dom.js";

export class Component extends HTMLElement
{
    constructor () {
        super()
        
        this.shadow = this.attachShadow({mode: 'open'})

        const coreStyles = Dom.stylesheet('/core.css')

        this.shadow.appendChild(coreStyles)

        const style = Dom.style(this.styles())
        
        this.shadow.appendChild(style)

        this.shadow.appendChild(
            document.createRange().createContextualFragment(
                this.template()
            )
        )
    }

    /**
     * @param {string} css 
     */
    styles(css) {
        return ''
    }

    template () {
        throw new Error(`${this.constructor.name} missing template`)
    }

    events() {

    }

    /**
     * @param {string} query 
     * @param {(event) => void} event 
     */
    click(query, event) {
        this.shadow.querySelectorAll(query).forEach(element => {
            element.addEventListener('click', event)
        })
    } 

    connectedCallback() {
        this.events()
    }

    /**
     * @return void
     */
    static load()
    {
        customElements.define(
            this.getCustomElementName(),
            this
        )
    }

    static getCustomElementName() {
        return this.name
            .replace(/([a-z])([A-Z])/g, '$1-$2')
            .toLowerCase()
    }
}