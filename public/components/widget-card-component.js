import {Component} from '../component.js'

export class WidgetCardComponent extends Component 
{
    constructor () {
        super()

        this.setStyles(/*css*/`
            :host {
                background-color: aliceblue;
                padding: 20px;
            }    
        `)
    }

    connectedCallback() {
        const container = document.createElement('div')

        this.shadow.appendChild(container)
    }
}
