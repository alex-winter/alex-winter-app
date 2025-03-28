import { Component } from "../component.js";

export class DashboardComponent extends Component
{
    constructor () {
        super()
    }

    styles() {
        return /*css*/`
            :root {

            }    
        `
    }

    template() {
        return /*html*/`
            <p>Hello</p>
            <widget-card-component>
                <navigation-menu-component></navigation-menu-component>
            </widget-card-component>
        `
    }
}