class DomController {

    projectCard(title) {

        const projectCard = document.createElement('div');
        projectCard.className = 'project'
        projectCard.textContent = title;

        return projectCard;
    }

    todoCard(title, description, date, priority) {
        const todo = document.createElement('div');
        todo.className = 'todo';

        const todoTitle = document.createElement('h3');
        todoTitle.textContent = title;

        const todoDescription = document.createElement('p');
        todoDescription.textContent = description;

        const todoDate = document.createElement('p');
        todoDate.textContent = date;

        const todoPriority = document.createElement('p');
        todoPriority.textContent = priority;

        todo.appendChild(todoTitle);
        todo.appendChild(todoDescription);
        todo.appendChild(todoDate);
        todo.appendChild(todoPriority);

        return todo;
    }

}