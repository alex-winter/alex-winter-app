import { Component } from "../../component.js";
import { TodoRepository } from "../../repositories/todo-repository.js";

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
        await TodoRepository.fetch()
    }

    template () {
        const items = TodoRepository.getAll()
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
            const newItem = TodoRepository.add({name: e.target.value})

            TodoRepository.persist(newItem)

            this.appendTemplate(
                this.query('.listing'),
                this.itemToComponent(newItem)
            )

            e.target.value = ''
        })
    }
}