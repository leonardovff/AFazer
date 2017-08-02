import { Component, OnInit } from '@angular/core';

import { MdCard } from '@angular/material'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks: FirebaseListObservable<any[]>;
  constructor(db: AngularFireDatabase) {
    this.tasks = db.list('/tasks');
  }

  ngOnInit() {
  }
  remove(key){
    this.tasks.remove(key);
  }
  statusChanged(key, checked){
    this.tasks.update(key, {checked: checked});
  }
}
