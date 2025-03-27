import {Component} from '../component.js'
import {Dom} from '../services/dom.js'

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
        const container = Dom.div()

        this.shadow.appendChild(container)
    }
}
