import { Dom } from "./services/dom.js";
import { escapeHTML, escapeHTMLInObject } from "./services/escape-html.js";
import { isJSON } from "./services/isJson.js";
import { isURLEncoded } from "./services/isURLEncoded.js";

export class Component extends HTMLElement
{
    private readonly shadow: ShadowRoot

    private props: {[key: string]: any} = {}
    
    private rootElementTagName!: string

    protected constructor () {
        super()
        
        this.shadow = this.attachShadow({mode: 'open'})

        this.shadow.appendChild(Dom.stylesheet('/core.css'))

        Object.keys(this.dataset).forEach(key => {
            let value = this.dataset[key] ?? ''

            if (isURLEncoded(value)) {
                value = decodeURIComponent(value)
            }

            if (isJSON(value)) {
                value = escapeHTMLInObject(JSON.parse(value))
            } else if (typeof value === 'string' && key !== 'src') {
                value = escapeHTML(value)
            }
        
            this.props[key] = value
        })
    }

    private propEncode(data: any) {
        return encodeURIComponent(
            JSON.stringify(
                data
            )
        )
    }

    protected styles(): string {
        return ''
    }

    protected template (): string {
        throw new Error(`${this.constructor.name} missing template`)
    }

    protected events() {}

    protected query(query: string): null | HTMLElement {
        return this.shadow.querySelector(query)
    }

    protected scrollToBottom(element: HTMLElement): void 
    {
        requestAnimationFrame(() => {
            element.scrollTo({ 
                top: element.scrollHeight, 
                behavior: 'smooth'
            })
        })
    }

    protected async before (): Promise<void> 
    {
    }

    protected emit(
        key: string, detail = undefined,
    ): void {
        this.dispatchEvent(
            new CustomEvent(
                key,
                {
                    bubbles: true,
                    cancelable: true,
                    detail
                }
            )
        )
    }

    protected connectedCallback(): void
    {
        this.before().then(() => {
            const style = Dom.style(this.styles())
            
            this.shadow.appendChild(style)

            const fragment = this.createFragment()

            this.rootElementTagName = (fragment.firstElementChild as HTMLElement).tagName.toLowerCase()

            this.shadow.appendChild(
                fragment
            )
            
            this.events()
        })
    }

    private renderTemplate(template: string): string 
    {
        return template.replace(
            /{{\s*([^}]+)\s*}}/g, 
            (match, logic) => {
                const run = new Function(
                    logic.trim()
                )

                return run.bind(this)()
            }
        )
    }

    private createFragment() 
    {
        return document
            .createRange()
            .createContextualFragment(
                this.renderTemplate(
                    this.template()
                )
            )
    }

    protected refresh(): void
    {
        this.shadow.replaceChild(
            this.createFragment(),
            this.shadow.querySelector(this.rootElementTagName) as HTMLElement
        )
    }

    protected appendTemplate(
        element: HTMLElement, 
        template: string,
    ): void {
        element.insertAdjacentHTML('beforeend', template)
    }

    public static load(): void
    {        
        customElements.define(
            this.getCustomElementName(),
            this
        )
    }

    public static getCustomElementName(): string
    {
        return this.name
            .replace(/([a-z])([A-Z])/g, '$1-$2')
            .toLowerCase()
    }
}