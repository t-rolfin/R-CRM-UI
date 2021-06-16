import { Component, OnInit } from '@angular/core';
import {  faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  constructor() { }

  modalButtonIcon = faPen;
  deleteButtonIcon = faTrashAlt;
  isLoading:boolean = false;

  ngOnInit(): void {
  }

}
