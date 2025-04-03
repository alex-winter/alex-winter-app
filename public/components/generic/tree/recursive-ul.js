import { Component } from "../../../component.js"

/**
 * 
 * @param {any[]} data 
 * @param {item => string} fn 
 * @returns string
 */
function forEach(data, fn) {
    return data.map(fn).join('')
}

function when(statement, template) {
    return statement ? template : ''
}

export class RecursiveUlComponent extends Component {

    styles () {
        return /*css*/`
            ul {
                background-color: black;
                color: white;
            }

            li {
                background-color: white;
                color: black;
            }

            li ul {
                background-color: grey;
            }
        `
    }

    recursiveTemplate(data) {
        return /*html*/`
            <ul>
                ${forEach(data, item => /*html*/`
                    <li>
                        ${item.name}
                        ${item.children ? this.recursiveTemplate(item.children) : ''}
                    </li>    
                `)}
            </ul>
        `
    }

    template () {
        const data = this.props.data

        return this.recursiveTemplate(data)
    }
}