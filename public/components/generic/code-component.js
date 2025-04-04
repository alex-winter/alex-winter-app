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
                height: 100%;
                box-sizing: border-box;
            }

            h3 {
                color: white;
            }

            .code-container {
                display: flex;
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

    async before () {
        const response = await fetch(this.props.src)
        const file = await response.text()

        this.file = file
    }

    template() {
        return /*html*/`
            <h3>${this.props?.title || ''}</h3>
            <pre class="code-container mt-3">
                <code class="line-numbers">${this.getLineNumbers(this.file)}</code>
                <code class="code-content">${this.highlightCode(this.file)}</code>
            </pre>
        `;
    }

    getLineNumbers(code) {
        return code
            .split("\n")
            .map((_, i) => i + 1)
            .join("\n");
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
