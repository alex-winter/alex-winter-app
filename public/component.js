import { Dom } from "./services/dom.js";

export class Component extends HTMLElement
{
    props = {}
    rootElementTagName = null

    constructor () {
        super()
        
        this.shadow = this.attachShadow({mode: 'open'})

        const coreStyles = Dom.stylesheet('/core.css')

        this.shadow.appendChild(coreStyles)

        Object.keys(this.dataset).forEach(key => {
            this.props[key] = JSON.parse(
                decodeURIComponent(
                    this.dataset[key] ?? ''
                )
            )
        })
    }

    propEncode(data) {
        return encodeURIComponent(
            JSON.stringify(
                data
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
        this.attachEvents('click', query, event)
    } 

    /**
     * @param {string} query 
     * @param {(event) => void} event 
     */
    keyup(query, event) {
        this.attachEvents('keyup', query, event)
    } 

    attachEvents (eventKey, query, event) {
        this.shadow.querySelectorAll(query).forEach(element => {
            element.addEventListener(eventKey, event)
        })
    }

    connectedCallback() {
        const style = Dom.style(this.styles())
        
        this.shadow.appendChild(style)

        const fragment = this.createFragment()

        this.rootElementTagName = fragment.firstElementChild.tagName.toLowerCase()

        this.shadow.appendChild(
            fragment
        )
        
        this.events()
    }

    createFragment() {
        return document.createRange().createContextualFragment(
            this.template()
        )
    }

    refresh() {
        this.shadow.replaceChild(
            this.createFragment(),
            this.shadow.querySelector(this.rootElementTagName)
        )
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