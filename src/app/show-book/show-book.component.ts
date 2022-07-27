import { ActivatedRoute, Router } from '@angular/router';
import { Book_detailsService } from './../services/book_details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-book',
  templateUrl: './show-book.component.html',
  styleUrls: ['./show-book.component.css']
})
export class ShowBookComponent implements OnInit {

  constructor(private serv:Book_detailsService) { }

  book_details:any = {
    "name":"",
    "cover":"",
    "author":"",
    "genre":"",
    "summary":""
  }



  ngOnInit(): void {
    this.book_details = this.serv.book_details
  }

}
