import { Component } from "../../component.js";
import { DataRepository } from "../../services/data-repository.js";

export class TodoComponent extends Component
{
    constructor () {
        super()

        DataRepository.fetchTodoItems()
    }

    styles () {
        return /*css*/`
           
        `
    }

    template () {
        const items = DataRepository.getTodoItems().map(item => /*html*/`
            <todo-row-component data-uuid="${item.dataUuid}" data-item="${this.propEncode(item)}"></todo-row-component>
        `).join('')

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

    events () {
        this.keyUpEnter('input', (e) => {
            if (e.key === 'Enter') {
                DataRepository.addTodoItem({name: e.target.value})
                this.refresh()
            }
        })
    }
}