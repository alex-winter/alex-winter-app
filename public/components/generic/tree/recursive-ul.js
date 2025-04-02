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

    template () {
        const data = this.props.data

        return /*html*/`
            <ul>
                ${forEach(data, item => /*html*/`
                    <li>
                        ${item.name}
                        ${when(
                            item.children, 
                            /*html*/`<recursive-ul-component data-data="${this.propEncode(item.children)}"></recursive-ul-component>`
                        )}
                    </li>    
                `)}
            </ul>
        `
    }
}