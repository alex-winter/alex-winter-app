import { Component } from "../component.js";
import { Dom } from "../services/dom.js";

export class AboutMeComponent extends Component
{
    constructor () {
        super()
    }

    connectedCallback() {
        const container = Dom.div()

        container.innerText = 'About'

        this.shadow.appendChild(container)
    }
}