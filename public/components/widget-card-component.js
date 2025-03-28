import {Component} from '../component.js'

export class WidgetCardComponent extends Component 
{
    constructor () {
        super()
    }

    styles() {
        return /*css*/`
            :host {
                background-color: aliceblue;
                padding: 20px;
            } 
        `
    }

    template() {
        return /*html*/`
            <div></div>
        `
    }
}
