export class ProjectGenerator {
    constructor(title) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.todos = [];
    };

    getTodo() {
        return this.todos;
    };

    addTodo(value) {
        this.todos.push(value);
    };

    removeTodo(removeId) {
        const index = this.todos.findIndex( todo => todo.id === removeId );
        if (index > -1) {
            this.todos.splice(index, 1);
        };
    };
};