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
        `
    }

    template () {
        const itemTemplate = `
        <div class="row flex-row p-3">
            <div >
                <i class="fa-solid fa-clipboard-list"></i>
            </div>
            <div class="flex-2">
                <p>Get shopping</p>
            </div>
            <div class="flex-1 flex-row justify-end">
                <button class="button danger"><i class="fa-solid fa-trash"></i></button>
            </div>
        </div>
        `

        const items = this.props.todoItems.map(item => itemTemplate)

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
}