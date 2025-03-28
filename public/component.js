import { Dom } from "./services/dom.js";

export class Component extends HTMLElement
{
    constructor () {
        super()
        
        this.shadow = this.attachShadow({mode: 'open'})

        const coreStyles = Dom.stylesheet()
        coreStyles.href = '/core.css'

        this.shadow.appendChild(coreStyles)
    }

    /**
     * @param {string} css 
     */
    setStyles(css) {
        const style = Dom.style()
        
        style.textContent = css
        
        this.shadow.appendChild(style)
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