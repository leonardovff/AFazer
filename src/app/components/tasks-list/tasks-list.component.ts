import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { MdCard } from '@angular/material'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks: FirebaseListObservable<any[]>;
  identity: null;
  sizeSubject: Subject<any>;
  constructor(db: AngularFireDatabase,  private route: ActivatedRoute) {
    this.tasks = db.list('/tasks', {
        // equalTo: this.sizeSubject
    });
    this.route.params.subscribe(params => {
      this.identity = params['identity'] ? params['identity'] : null;
      // if(this.identity)
    });


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
