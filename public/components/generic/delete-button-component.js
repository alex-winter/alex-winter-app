import { Component } from "../../component.js";

export class DeleteButtonComponent extends Component
{
    constructor() {
        super()
    }

    template () {
        return /*html*/`
            <button class="button danger">
                <i class="fa-solid fa-trash"></i>
            </button>
        `
    }
}