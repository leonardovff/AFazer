import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { MdDialog, MdDialogRef } from '@angular/material';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { FormComponent } from './form/form.component'

@Component({
  selector: 'tasks-form',
  template: ``,
  styles: [``]
})
export class TasksFormComponent implements OnInit {
  id: any = null;
  identity: string = '';
  constructor(
    private dialog: MdDialog,
    private db: AngularFireDatabase,
    private router: Router,
    private route: ActivatedRoute
  ) {

    this.router.events.subscribe(params => {
      this.identity = params['url'].substring(1).split('/')[0];
    });
  }

  ngOnInit() {

    var id = this.route.params.subscribe(params => {
      this.id = params['id'] ? params['id'] : null;
      if(this.id){
        return this.captureData(this.id);
      }
      setTimeout(()=>{
        this.openDialog();
      },200);
    });
  }
  captureData(id){
    let config = {},
    dialogRef,
    data = this.db.object('/tasks/' + id);
    config['data'] = data;
    setTimeout(()=>{
      dialogRef = this.openDialog(config);
    }, 100);
  }
  openDialog(config = {}) {
    let dialogRef = this.dialog.open(FormComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        const tasks = this.db.list('/tasks');
        result.list = "UeWBKUeWBK:" + this.identity;
        if(this.id) {
          tasks.update(this.id, result);
        } else {
          tasks.push(result);
        }
      }
      this.router.navigate([this.identity]);
    });
    return dialogRef;
  }
}
