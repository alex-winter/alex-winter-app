import { Component } from "../../component.js";
import { DataRepository } from "../../services/data-repository.js";

export class TodoComponent extends Component
{
    styles () {
        return /*css*/`
           
        `
    }

    itemToComponent (item) {
        return /*html*/`
            <todo-row-component 
                data-uuid="${item.dataUuid}" 
                data-item="${this.propEncode(item)}"
            ></todo-row-component>
        `
    }

    async before() {
        await DataRepository.fetchTodoItems()
    }

    template () {
        const items = DataRepository.getTodoItems()
            .map(this.itemToComponent.bind(this))
            .join('')

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

            DataRepository.persistTodoItem()

            this.appendTemplate(
                this.query('.listing'),
                this.itemToComponent(newItem)
            )

            e.target.value = ''
        })
    }
}