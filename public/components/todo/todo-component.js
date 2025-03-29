import { Component } from "../../component.js";

export class TodoComponent extends Component
{
    constructor () {
        super()
    }

    styles () {
        return /*css*/`
           
        `
    }

    template () {
        const items = this.props.todoItems.map(item => {
            const itemProp = this.propEncode(item)
            return /*html*/`
                <todo-row-component data-item="${itemProp}"></todo-row-component>
            `
        }).join('')

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