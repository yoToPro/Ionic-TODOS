import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public todoItem = '';
  public todoList = [];

  constructor() { }

  addTodoItem() {
    if (this.todoItem.length > 0) {
      this.todoList.push(this.todoItem);
      this.todoItem = '';
    }
  }
}
