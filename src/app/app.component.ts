import { Component,OnInit } from '@angular/core';
import { TodoService } from './todo.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  todoList;
  constructor(public service:TodoService) { }

  ngOnInit() {
    this.service.getTodoList().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    ).subscribe(customers => {
      this.todoList = customers;
    });
  }
  onSubmit() {
    if (this.service.form.valid) {
      this.service.insertTodo(this.service.form.value);
    }
  }

}
