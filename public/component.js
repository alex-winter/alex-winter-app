export class Component extends HTMLElement
{
    constructor () {
        super()
        
        this.shadow = this.attachShadow({mode: 'open'})

        const coreStyles = document.createElement('link');
        coreStyles.rel = 'stylesheet';
        coreStyles.href = '/core.css';

        this.shadow.appendChild(coreStyles)
    }

    /**
     * @param {string} css 
     */
    setStyles(css) {
        const style = document.createElement('style')
        
        style.textContent = css
        
        this.shadow.appendChild(style)
    }

    /**
     * @return void
     */
    static load()
    {
        customElements.define(
            this.name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
            this
        )
    }
}