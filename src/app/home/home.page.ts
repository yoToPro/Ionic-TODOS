import { Component, ViewChild, ElementRef } from '@angular/core';
import { AlertController, IonInput } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @ViewChild('todoName', null) todoInput: IonInput;

  public todo = '';
  public todoList = [];

  constructor(
    private alertCtrl: AlertController
  ) { }

  ionViewDidEnter() {
    setTimeout(() => {
      this.todoInput.setFocus();
    }, 350);
  }

  addTodo() {
    if (this.todo.length > 0) {
      this.todoList.push(this.todo);
      this.todo = '';
      this.todoInput.setFocus();
    }
  }

  async updateTodo(index: number, task: string) {
    const updateAlert = await this.alertCtrl.create({
      header: 'Update Task',
      message: 'Type in your new task to update.',
      inputs: [{ name: 'editTodo', placeholder: 'Task' }],
      buttons: [
        { text: 'Cancel', role: 'Cancel' },
        {
          text: 'Update',
          handler: (data: any | null) => {
            if (data.editTodo.length > 0) {
              this.todoList[index] = data.editTodo;
            } else {
              this.todoList[index] = task;
            }
          }
        }
      ]
    });
    await updateAlert.present();
  }

  deleteTodo(index: number) {
    this.todoList.splice(index, 1);
  }
}
