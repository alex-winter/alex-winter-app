import { Component } from "../component.js";

export class DashboardComponent extends Component
{
    styles() {
        return /*css*/`
            :root {

            }    
        `
    }

    template() {
        return /*html*/`
            <div>
                <h1 class="py-2">Dashboard</h1>
                <div class="flex-row gap-2">
                    <div class="flex-1">
                        <widget-card-component>
                            <date-time-component></date-time-component>
                        </widget-card-component>
                    </div>
                    <div class="flex-2">
                        <widget-card-component>
                            <todo-component></todo-component>
                        </widget-card-component>
                    </div>
                </div>
            </div>
        `
    }
}