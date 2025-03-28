import { Component } from "../component.js";

export class AboutMeComponent extends Component
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

    template () {
        return /*html*/`
            <h1>About Me</h1>
        `
    }
}