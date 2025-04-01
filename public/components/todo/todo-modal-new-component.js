import { Component } from "../../component.js";
import { Console } from "../../services/console.js";

export class TodoModalNewComponent extends Component
{
    template () {
        return /*html*/`
            <modal-basic-component>   
                <div slot="header">
                    Edit ${this.props.item.name}
                </div>

                <todo-item-edit-form-component slot="content"></todo-item-edit-form-component>

                <div slot="footer">
                    <save-button-component></save-button-component>
                </div>
            </modal-basic-component>
        `
    }

    events () {
        this.click('save-button-component', () => {
            const todoItem = this.query('todo-item-edit-form-component').getTodoItem()

            this.query('modal-basic-component').close()
        })
    }
}