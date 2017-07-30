import { Component, OnInit } from '@angular/core';

import { MdCard } from '@angular/material'

@Component({
  selector: 'tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks = [
    {title: 'Card 1', body: ''},
    {title: 'Card 2', body: ''},
    {title: 'Card 3', body: ''},
    {title: 'Card 4', body: ''}
  ]
  constructor() { }

  ngOnInit() {
  }

}
