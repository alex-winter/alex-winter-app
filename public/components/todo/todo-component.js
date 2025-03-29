import { Component } from "../../component.js";

export class TodoComponent extends Component
{
    constructor () {
        super()
    }

    styles () {
        return /*css*/`
            .row:hover {
                background-color: #ecf0f1;
            }

            .row input {
                background: none;
                border: none;
            }
        `
    }

    template () {
        const items = this.props.todoItems.map(this.templateItem).join('')

        return /*html*/`
            <div>
                <div class="listing">
                    ${items}
                </div>
                <div>
                    <input type="text">
                </div>
            </div>
        `
    }

    templateItem (data) {
        return /*html*/`
            <div class="row flex-row p-3 gap-1">
                <div>
                    <i class="fa-solid fa-clipboard-list"></i>
                </div>
                <div class="flex-2 name-container">
                    <p>${data.name}</p>
                </div>
                <div class="flex-1 flex-row justify-end">
                    <button class="button danger"><i class="fa-solid fa-trash"></i></button>
                </div>
            </div>
        `
    }
}