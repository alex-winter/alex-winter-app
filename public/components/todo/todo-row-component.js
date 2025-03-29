import { Component } from "../../component.js";

export class TodoRowComponent extends Component
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
        const data = this.props.item

        return /*html*/`
            <div class="row flex-row p-3 gap-1">
                <div>
                    <i class="fa-solid fa-clipboard-list"></i>
                </div>
                <div class="flex-2 name-container">
                    <p>${data.name}</p>
                </div>
                <div class="flex-1 flex-row justify-end">
                    <delete-button-component></delete-button-component>
                </div>
            </div>
        `
    }

    events() {
        this.click('delete-button-component', () => {
            alert('click delete')
        })
    }
}