export const Events = {
    /**
     * @param {string} query 
     * @param {(event) => void} event 
     */
    click(query, event) {
        this.attachEvents('click', query, event)
    },

    /**
     * @param {string} query 
     * @param {(event) => void} event 
     */
    keyup(query, event) {
        this.attachEvents('keyup', query, event)
    }, 

    keyUpEnter(query, event) {
        this.attachEvents('keyup:Enter', query, event)
    },

    attachEvents (eventKey, query, event) {
        this.shadow.querySelectorAll(query).forEach(element => {
            if (eventKey.includes(':')) {
                const [baseEvent, specificEvent] = eventKey.split(':');
    
                element.addEventListener(baseEvent, e => {
                    if (e.key === specificEvent) {
                        event(e)
                    }
                })
            } else {
                element.addEventListener(eventKey, event)
            }
        })
    },
}