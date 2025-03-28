import {Component} from '../component.js'

export class WidgetCardComponent extends Component 
{
    constructor () {
        super()
    }

    styles() {
        return /*css*/`
            :host {
                display: block;
                background-color: white;
                padding: 20px;
                border-radius: 4px;
            } 
        `
    }

    template() {
        return /*html*/`
            <div>
                <slot></slot>
            </div>
        `
    }
}
