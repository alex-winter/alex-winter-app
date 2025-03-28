export class Dom {
    constructor() {
        throw new Error('Dom is a static utility class and cannot be instantiated.')
    }

    static stylesheet() {
        const element = document.createElement('link')

        element.rel = 'stylesheet'

        return element
    }

    static style() {
        return document.createElement('style')
    }
}