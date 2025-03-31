import { Component } from "../../component.js";

export class TodoItemEditFormComponent extends Component
{
    template() {
        return /*html*/`
            <div>
                <form action="">
                    <input  type="text" name="name">
                </form>
            </div>
        `
    }

    events () {
        this.keyup('[name="name"]', (e) => {
            window.dispatchEvent(new CustomEvent('change', {
                detail: {
                    todoItem: e.target.value,
                },
                bubbles: true, 
                composed: true,
            }))
        })
    }
}