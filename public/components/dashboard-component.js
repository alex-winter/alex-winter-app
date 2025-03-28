import { Component } from "../component.js";

export class DashboardComponent extends Component
{
    constructor () {
        super()

        this.setStyles(/*css*/`
            :root {

            }    
        `)
    }

    template() {
        return /*html*/`
            <p>Hello</p>
        `
    }
}