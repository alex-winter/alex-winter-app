import { Component } from "../component.js";
import { Dom } from "../services/dom.js";

export class NavigationMenuComponent extends Component
{
    constructor () {
        super()

        this.setStyles(/*css*/`
            :host {
                background-color: yellow;
                width: 100%;
            }

            a {
                box-sizing: border-box;
                display: block;
                padding: 4px;
                width: 100%;
            }
        `)
    }

    connectedCallback() {
        const container = Dom.div()
        const dashboardLink = Dom.a()

        dashboardLink.innerText = 'Dashboard'

        container.appendChild(dashboardLink)

        this.shadow.appendChild(container)
    }
}