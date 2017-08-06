import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MD_DIALOG_DATA, MdDialog, MdDialogRef } from '@angular/material'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    @Inject(MD_DIALOG_DATA) public data: any,
    public dialogRef: MdDialogRef<FormComponent>
  ) {
    this.form = fb.group({
      checked: false,
      title: ['', [Validators.required]],
      description: ''
    });
    if(data){
      data.subscribe(snapshot => {
        if(!snapshot.$exists()){
          return dialogRef.close();
        }
        this.form.setValue(snapshot);
      });
    }
  }

  ngOnInit() {

  }

}
