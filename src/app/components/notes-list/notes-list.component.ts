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
  public noteContent: string = "";

  constructor(
    public http: HttpClient,
    public service: LeadService,
    public route: ActivatedRoute
  ) {
    this.model = new NoteCollectionModel();
   }

  public model: NoteCollectionModel;

  ngOnInit(): void {
    this.route.queryParams.subscribe(params =>{
      this.service.getNotesForLead(params["leadId"])
      .subscribe(response => {
        this.model = response;
      })
    })
  }

  saveNote()
  {
      let formData = new FormData();
      formData.append('note', this.noteContent);

      var link = this.model.links.find(x => x.rel === 'create-note')?.href;

      if(link != null){
        this.http.post<NoteModel>(link, formData, { observe: 'response'  })
        .subscribe(response => {
          if(response.ok){
            if(this.model.notes === null)
            {
              this.model.notes = new Array<NoteModel>();
            }
            if(response.body != null){
              this.model.notes.push(response.body);
              this.noteContent = '';
            }
          }
        });
      }

  }

}
