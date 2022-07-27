import { Book_detailsService } from './../services/book_details.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private serv:Book_detailsService) { }

  ngOnInit(): void {
  }

  wish = ""
  add_to_wishlist(name:string)
  {
    this.serv.add_to_wishlist(name)
    this.wish = ''
    alert(name +" Added to wishlist")
  }

}
