import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList} from 
'angularfire2/database';




@Injectable()
export class TodoService {

  constructor(private firebase: AngularFireDatabase) { }
addButton: string = 'ADD';

  todoList : AngularFireList<any>;
   

  form: FormGroup = new FormGroup({
    key: new FormControl(''),
    nome: new FormControl(''),
    funcao: new FormControl('')
  });


  getTodoList() {
    this.todoList = this.firebase.list('todolist');
    return this.todoList.snapshotChanges();
  }


  insertTodo(todo) {
    if (todo.key == '') {
      this.todoList.push(todo);
    
   
  }
  }
  editTodoList(todo) {
    todo
    this.form.patchValue(todo);
   
      this.todoList.update(todo.key, {
        nome :todo.nome,
        funcao: todo.funcao
      });
    }

  
  deleteTodoList(todo) {
      if (todo.key == todo.key) {
      this.todoList.remove(todo);
    

  }
  }

}