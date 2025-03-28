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
            <div>
                <h1>Dashboard</h1>
                <div class="flex gap-2 mx-1">
                    <div class="flex-1">
                        <widget-card-component></widget-card-component>
                    </div>
                    <div class="flex-1">
                        <widget-card-component></widget-card-component>
                    </div>
                    <div class="flex-1">
                        <widget-card-component></widget-card-component>
                    </div>
                </div>
            </div>
        `
    }
}