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
        const tree = [
            {
                name: 'One',
                children: [
                    {
                        name: 'One - One'
                    }
                ]
            },
            {
                name: 'Two',
                children: [
                    {
                        name: 'Two - One',
                        children: [
                            {
                                name: 'Two - One - One'
                            }
                        ]
                    }
                ]
            }
        ]

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
                <div class="flex-row gap-2 mt-3">
                    <div class="flex-1">
                        <widget-card-component>
                            <recursive-ul-component data-data="${this.propEncode(tree)}"></recursive-ul-component>
                        </widget-card-component>
                    </div>
                    <div class="flex-1">
                        <widget-card-component>
                            <files-component></files-component>
                        </widget-card-component>
                    </div>
                </div>
            </div>
        `
    }
}