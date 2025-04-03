import { Component } from "../../../component.js";
import { File } from "../../../services/File.js";
import { useState } from "../../../services/state.js";
import { forEach } from "../../../services/template-functions.js";

export class FileListingComponent extends Component
{
    constructor () {
        super()

        const [set, get] = useState([])

        this.setFiles = (...files) => {
            set([...get(), ...files])
        }
        this.getFiles = get 
    }

    styles () {
        return /*css*/`
            .row {
                background-color: snow;
                border-radius: 4px;
            }
        `
    }
    
    template () {
        const files = this.getFiles()
        return /*html*/`
            <div>
                <h3>Files</h3>
                ${forEach(files, this.fileTemplate)}
                ${files.length < 1 ? 'No files' : ''}
            </div>
        `
    }

    fileTemplate (file) {
        console.log(file)
        return /*html*/`
            <div class="row p-2">
                <i class="fa-solid fa-file"></i> ${file.name}
                ${File.formatFileSize(file.size)}
            </div>
        `
    }
}