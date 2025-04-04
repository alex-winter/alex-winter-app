import { Component } from "../../component.js";

export class CodeComponent extends Component {
    styles() {
        return /*css*/`
            :host {
                display: block;
                background: #2d2d2d;
                color: #ccc;
                padding: 16px;
                border-radius: 5px;
                font-family: "Courier New", monospace;
                overflow-x: auto;
            }

            .code-container {
                display: flex;
                margin: 0;
            }

            .line-numbers {
                text-align: right;
                padding-right: 12px;
                user-select: none;
                color: #888;
            }

            .code-content {
                flex-grow: 1;
            }

            .keyword { color: #f92672; }
            .number { color: #ae81ff; }
            .function { color: #66d9ef; }
        `;
    }

    template() {
        const file1 = `import { Component } from "../component.js"

class ExampleComponent extends Component {
    styles () {
        return /*css*/\`
            h1 {
                font-family: comic-sans;
            }
        \`
    }

    template () {
        return /*html*/\`
            <div>
                <h1>Hello World</h1>
                <p>Welcome to Alex Js</p>
                <counter-component></counter-component>
                <button>Update Counter</button>
            </div>
        \`
    }

    events () {
        this.click('button', () => {
            this.query('counter-component').add(1)   
        })
    }
}`;

const file2 = `import { Component } from "../component.js"
import { useState } from 'useState.js'

class CounterComponent extends Component {
    constructor () {
        const [get, set] = useState(0)

        this.add = (value) => {
            set(get() + value)    
        }

        this.getCount = get
    }

    template () {
        return /*html*/\`
            <div>
                <p>\${this.getCount()}</p>
            </div>
        \`
    }
}`;

        return /*html*/`
            <pre class="code-container">
                <code class="line-numbers">${this.getLineNumbers(file1)}</code>
                <code class="code-content">${this.highlightCode(file1)}</code>
            </pre>
            <pre class="code-container mt-2">
                <code class="line-numbers">${this.getLineNumbers(file2)}</code>
                <code class="code-content">${this.highlightCode(file2)}</code>
            </pre>
        `;
    }

    getLineNumbers(code) {
        return code.split("\n").map((_, i) => i + 1).join("\n");
    }

    highlightCode(code) {
        // Escape HTML characters
        code = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");

        // Define syntax highlighting patterns
        const keywords = /\b(const|let|var|function|return|if|else|for|while|switch|case|break|new|class|extends|super|import|from|export|default|try|catch|finally|throw|async|await)\b/g;
        const numbers = /\b\d+(\.\d+)?\b/g;
        const functions = /\b([a-zA-Z_]\w*)\s*(?=\()/g;

        return code
            .split("\n")
            .map(line =>
                line
                    .replace(keywords, '<span class="keyword">$&</span>')  
                    .replace(numbers, '<span class="number">$&</span>')  
                    .replace(functions, '<span class="function">$1</span>')
            )
            .join("\n");
    }
}
