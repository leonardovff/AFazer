import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { MdCard } from '@angular/material'
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks: FirebaseListObservable<any[]>;
  identity: null;
  constructor(db: AngularFireDatabase,  private route: ActivatedRoute, router: Router) {

    this.route.params.subscribe(params => {
      let identity = params['identity'] ? params['identity'] : null;
      if(!identity) {
        return router.navigate(['/' + this.makeid()])
      }
      this.identity = identity;
      this.tasks = db.list('/tasks', {
        query:{
          orderByChild: 'list',
          equalTo: "UeWBKUeWBK:"+ identity
        }
      });
    });
  }
  makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
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
