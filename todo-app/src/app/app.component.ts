import { Component } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  todos: Todo[] = [
    { task: 'Learn Angular', completed: true, isEditing: false },
    { task: 'Build a todo app', completed: false, isEditing: false },
    { task: 'Deploy to production', completed: false, isEditing: false }
  ];
  
  addTask(task: string) {
    const newTodo: Todo = { task, completed: false, isEditing: false };
    this.todos.push(newTodo);
  }
  
  completeTask(todo: Todo) {
    todo.completed = true;
  }
  
  removeTask(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
  
  editTask(todo: Todo) {
    todo.isEditing = true;
  }
}
