export class ProjectGenerator {
    constructor(title, id = crypto.randomUUID(), todos = []) {
        this.id = id;
        this.title = title;
        this.todos = todos;
    }

    getTodo() {
        return this.todos;
    }

    addTodo(value) {
        this.todos.push(value);
    }

    removeTodo(removeId) {
        const index = this.todos.findIndex( todo => todo.id === removeId );
        if (index > -1) {
            this.todos.splice(index, 1);
        };
    }
};