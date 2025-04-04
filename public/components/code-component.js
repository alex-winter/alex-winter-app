import { Component } from "../component.js";
import { escapeHTML } from "../services/escape-html.js";

export class CodeComponent extends Component
{
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
                white-space: pre-wrap;
            }

            .keyword { color: #f92672; }
            .string { color: #e6db74; }
            .comment { color: #75715e; }
            .number { color: #ae81ff; }
            .function { color: #66d9ef; }
        `;
    }

    template() {
        const file = `import { Component } from "../component.js"

class ExampleComponent extends Component {
    template () {
        return /*html*/\`
            <div>
                <h1>Hello World</h1>
            </div>
        \`
    }
}`;

        
        return /*html*/`
            <pre><code>${this.highlightCode(file)}</code></pre>
        `;
    }

    highlightCode(code) {
        // Escape HTML characters
        code = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");

        // Define syntax highlighting patterns
        const keywords = /\b(const|let|var|function|return|if|else|for|while|switch|case|break|new|class|extends|super|import|from|export|default|try|catch|finally|throw|async|await)\b/g;
        const numbers = /\b\d+(\.\d+)?\b/g;
        const functions = /\b([a-zA-Z_]\w*)\s*(?=\()/g;

        return code
            .replace(keywords, '<span class="keyword">$&</span>')  
            .replace(numbers, '<span class="number">$&</span>')  
            .replace(functions, '<span class="function">$1</span>');  
    }
}