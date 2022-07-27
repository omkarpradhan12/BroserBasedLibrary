import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  authors =[
    {
      name:"Omkar Pradhan",
      roll:"44"
    },
    {
      name:"Ojaswini Dixit",
      roll:"40"
    },
    {
      name:"Sayee Apte",
      roll:"30"
    },
    {
      name:"Kunal Kohinkar",
      roll:"45"
    },
  ]

  ngOnInit() {
  }

}
