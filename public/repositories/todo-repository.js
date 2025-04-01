import { DataRepository } from "../services/data-repository.js"

const repository = new DataRepository()

export class TodoRepository
{
    constructor () {
        throw new Error('Do not construct')
    }

    static async fetch() {
        const response = await fetch('/api/todo')
        const data = await response.json()

        repository.add(...data)
    }

    static async persist(item) {
        await fetch('/api/todo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
    }

    static getAll() {
        return repository.getAll()
    }

    static add(...items) {
        return repository.add(...items)
    }

    static remove(...items) {
        repository.remove(...items)
    }
}