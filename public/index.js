import { Component } from "./Component.js"

class DashboardComponent extends Component
{
    constructor () {
        super()
    }

    connectedCallback() {
        const container = document.createElement('div')
        const title = document.createElement('h1')
        const slot = document.createElement('slot')

        title.innerText = 'Dashboard'

        container.appendChild(title)
        container.appendChild(slot)

        this.shadowRoot.appendChild(container)
    }
}

class WidgetCardComponent extends Component 
{
    constructor () {
        super()

        this.setStyles(`
            .widget-card {
                background-color: aliceblue;
                padding: 20px;
            }    
        `)
    }

    connectedCallback() {
        const container = document.createElement('div')
        
        container.classList.add('widget-card')

        this.shadow.appendChild(container)
    }
}





DashboardComponent.load()
WidgetCardComponent.load()

document.addEventListener('DOMContentLoaded', () => {


})