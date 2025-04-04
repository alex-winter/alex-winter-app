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
                white-space: pre-wrap;
            }

            .keyword { color: #f92672; }
            .number { color: #ae81ff; }
            .function { color: #66d9ef; }
            .tag { color: #f92672; }
            .attr-name { color: #a6e22e; }
            .attr-value { color: #e6db74; }
            .comment { color: #75715e; font-style: italic; }
        `;
    }

    async before () {
        const response = await fetch(this.props.src);
        const file = await response.text();

        this.file = file;
        this.language = this.detectLanguage(this.props.src, file);
    }

    detectLanguage(src, file) {
        if (src.endsWith(".html") || file.trim().startsWith("<!DOCTYPE html") || file.trim().startsWith("<html")) {
            return "html";
        }
        return "js"; // default to js
    }

    template() {
        const highlighted = this.language === "html"
            ? this.highlightHTML(this.file)
            : this.highlightJavaScript(this.file);

        return /*html*/`
            <h3>${this.props?.title || ''}</h3>
            <pre class="code-container mt-3">
                <code class="line-numbers">${this.getLineNumbers(this.file)}</code>
                <code class="code-content">${highlighted}</code>
            </pre>
        `;
    }

    getLineNumbers(code) {
        return code
            .split("\n")
            .map((_, i) => i + 1)
            .join("\n");
    }

    highlightJavaScript(code) {
        code = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");

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

    highlightHTML(code) {
        code = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");

        const tagPattern = /(&lt;\/?)([a-zA-Z0-9-]+)(.*?)(\/?&gt;)/g;
        const attrPattern = /([a-zA-Z\-:]+)=(".*?"|'.*?')/g;
        const commentPattern = /(&lt;!--[\s\S]*?--&gt;)/g;

        return code
            .split("\n")
            .map(line => {
                line = line.replace(commentPattern, '<span class="comment">$1</span>');
                return line.replace(tagPattern, (match, open, tagName, attrs, close) => {
                    const parsedAttrs = attrs.replace(attrPattern, '<span class="attr-name">$1</span>=<span class="attr-value">$2</span>');
                    return `${open}<span class="tag">${tagName}</span>${parsedAttrs}${close}`;
                });
            })
            .join("\n");
    }
}
