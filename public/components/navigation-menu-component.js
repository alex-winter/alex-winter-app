import { Component } from "../component.js";
import { Dom } from "../services/dom.js";

export class NavigationMenuComponent extends Component
{
    constructor () {
        super()
    }

    styles() {
        return /*css*/`
            :host {
                background-color: yellow;
                width: 100%;
            }

            a {
                box-sizing: border-box;
                display: block;
                padding: 4px;
                width: 100%;
            }
        `
    }

    template() {
        return /*html*/`
            <div>
                <a href="/dashboard">Dashboard</a>
                <a href="/about">About Me</a>
            </div>
        `
    }
}