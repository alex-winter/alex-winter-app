import { Component } from "../component.js";
import { Dom } from "../services/dom.js";

export class AboutMeComponent extends Component
{
    constructor () {
        super()
    }

    template () {
        return /*html*/`
            <h1>About Me</h1>
        `
    }
}