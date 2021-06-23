import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  faPen, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { NoteCollectionModel } from 'src/app/models/noteCollectionModel';
import { NoteModel } from 'src/app/models/noteModel';
import { LeadService } from 'src/app/services/lead-service.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {

  modalButtonIcon = faPen;
  deleteButtonIcon = faTrashAlt;
  isLoading:boolean = false;
  noteContent: string = "";

  constructor(
    public http: HttpClient,
    public service: LeadService,
    public route: ActivatedRoute
  ) {
    this.model = new NoteCollectionModel();
   }

  public model: NoteCollectionModel;

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      this.service.getNotesForLead(params["id"])
      .subscribe(response => {
        this.model = response;
      })
    })
  }
}
