import { Component } from "../component.js";

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
                <a href="" class="alert-test">test alert event</a>
            </div>
        `
    }

    events() {
        this.click('.alert-test', () => {
            alert('test alert event')
        })
    }
}