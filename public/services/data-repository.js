import { generateUUID } from "./generate-uuid.js"

const dataRepository = {
    todoItems: []
}

export class DataRepository
{
    constructor () {
        throw new Error('Do not construct')
    }

    static map(items) {
        return items.map(item => ({dataUuid: generateUUID(), ...item}))
    }

    static fetchTodoItems() {
        const source = [
            {name: 'Make Breakfast'},
            {name: 'Clean house'},
        ]

        dataRepository.todoItems = DataRepository.map(source)
    }

    static getTodoItems() {
        return dataRepository.todoItems
    }

    static addTodoItem(item) {
        return dataRepository.todoItems.push({
            dataUuid: generateUUID(), 
            ...item
        })
    }

    static removeTodoItem(dataUuid) {
        dataRepository.todoItems = dataRepository.todoItems.filter(
            item => item.dataUuid !== dataUuid
        )
    }
}