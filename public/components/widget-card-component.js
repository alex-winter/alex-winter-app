import {Component} from '../component.js'

export class WidgetCardComponent extends Component 
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
