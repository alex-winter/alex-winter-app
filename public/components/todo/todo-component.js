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

    itemToComponent (item) {
        return /*html*/`
            <todo-row-component data-uuid="${item.dataUuid}" data-item="${this.propEncode(item)}"></todo-row-component>
        `
    }

    template () {
        const items = DataRepository.getTodoItems().map(this.itemToComponent.bind(this)).join('')

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
            const newItem = DataRepository.addTodoItem({name: e.target.value})

            this.query('.listing').insertAdjacentHTML(
                'beforeend',
                this.itemToComponent(newItem)
            )

            e.target.value = ''
        })
    }
}