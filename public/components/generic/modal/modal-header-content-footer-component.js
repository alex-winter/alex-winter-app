import { Component } from "../../../component.js";

export class ModalBasicComponent extends Component
{
    styles () {
        return /*css*/`
          
        `
    }

    template () {
        return /*html*/`
            <modal-component>
                <div class="header">
                    <slot name="header">
                </div>
                <div class="content">
                    <slot name="content">
                </div>
                <div class="footer">
                    <slot name="footer">
                </div>
            </div>
        `
    }

    events () {
      
    }
}