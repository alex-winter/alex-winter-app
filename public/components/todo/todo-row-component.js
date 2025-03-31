import { Component } from "../../component.js";
import { DataRepository } from "../../services/data-repository.js";
import { useState } from "../../services/state.js";

export class TodoRowComponent extends Component
{
    constructor () {
        super()

        const [todoItem, setTodoItem] = useState({})

        this.todoItem = todoItem
        this.setTodoItem = setTodoItem
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
            <div class="row flex-row p-3 gap-1 animation-fade-up">
                <div class="flex-column justify-center">
                    <i class="fa-solid fa-clipboard-list"></i>
                </div>
                <div class="flex-2 flex-column justify-center name-container">
                    <p>${data.name}</p>
                </div>
                <div class="flex-1 flex-row align-center justify-end gap-2">
                    <edit-button-component></edit-button-component>
                    <delete-button-component></delete-button-component>
                </div>
            </div>
        `
    }

    events() {
        this.click('delete-button-component', () => {
            DataRepository.removeTodoItem(this.props.item.dataUuid)
           
            this.remove()
        })

        this.click('edit-button-component', () => {
            this.appendTemplate(
                document.body,
                /*html*/`
                    <modal-basic-component>   
                        <div slot="header">
                            Edit ${this.props.item.name}
                        </div>

                        <todo-item-edit-form-component slot="content"></todo-item-edit-form-component>

                        <div slot="footer">
                            <button class="primary button" slot="footer">Save</button>
                        </div>
                    </modal-basic-component>
                `
            )
        })

        console.log(this.rootQuery('todo-item-edit-form-component'))

        this.rootQuery('todo-item-edit-form-component')?.addEventListener('change', (e) => {
            console.log(e.detail.todoItem)
            this.setTodoItem(e.detail.todoItem)
        })
    }
}