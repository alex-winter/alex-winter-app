import { Component } from "../../../component.js";

export class SimpleUploadComponent extends Component
{
    styles () {
        return /*css*/`
            input {
                display: none;
            }
        `
    }

    template () {
        return /*html*/`
            <div>
                <input type="file">
                <file-upload-button-component data-text="Upload File"></file-upload-button-component>
            </div>
        `
    }

    events () {
        this.click('file-upload-button-component', () => {
            this.query('input').click()
        })
    }
}