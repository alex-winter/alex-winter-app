const dataRepository = {
    todoItems: [
        {name: 'Make Breakfast'},
        {name: 'Clean house'},
    ]
}

export class DataRepository
{
    constructor () {
        throw new Error('Do not construct')
    }

    static getTodoItems() {
        return dataRepository.todoItems
    }

    static addTodoItem(item) {
        return dataRepository.todoItems.push(item)
    }
}