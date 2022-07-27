import { Book_detailsService } from './../services/book_details.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-my-library',
  templateUrl: './my-library.component.html',
  styleUrls: ['./my-library.component.css']
})
export class MyLibraryComponent implements OnInit {

  constructor(private serv:Book_detailsService,private router: Router, private httpClient: HttpClient) { }

  new_bd:any;
  filtered_bd:any;
  ngOnInit(): void {
    this.httpClient.get("assets/book_JSON_data.json").subscribe((data:any) =>{
      console.log(data[0].categories);
      this.new_bd = data;
      this.filtered_bd = data;
    })

  }

  genre = "All"
  set_cat(genre:string)
  {
      if(genre=='All')
    {
      this.filtered_bd = this.new_bd
      this.genre = "All"
    }
    else{
    this.filtered_bd = this.new_bd.filter(
      (book:any) => book.categories.includes(genre)
    )
    this.genre = genre;
    }
    console.log(genre)
  }
  genres=['All','Java','Open Source','Mobile','Internet','Web Development','Miscellaneous','Microsoft .NET','Microsoft','Next Generation Databases','PowerBuilder','Client-Server',
          'Computer Graphics','Object-Oriented Programming','Networking','Theory','Programming','Python','Mobile Technology','Business','Perl','XML'
    ]








  s = this.serv.wishlist
  clicked(obj:any)
  {
    this.serv.send_details(obj);
    this.router.navigate(["Details"]);

  }



}
