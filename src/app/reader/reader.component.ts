import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reader',
  templateUrl: './reader.component.html',
  styleUrls: ['./reader.component.css']
})
export class ReaderComponent implements OnInit {

  constructor() { }
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
  sfile = ""
  bname = ""
  ngOnInit(): void {
  }

  supported_books = [
    {
      name:"Angular 5 Projects",
      img:"../../assets/images/angularprjs.jpg",
      src:"../../assets/books/Angular 5 Projects Learn to Build Single Page Web Applications Using 70+ Projects by Mark Clow (z-lib.org).pdf"
    },
    {
      name:"Angular Up and Running",
      img:"../../assets/images/angularup.jpg",
      src:"../../assets/books/Angular Up and Running Learning Angular, Step by Step by Shyam Seshadri (z-lib.org).pdf"
    },
    {
      name:"Anaconda Cheatsheet",
      img:"../../assets/images/conda.png",
      src:"../../assets/books/conda-cheatsheet.pdf"
    },
    {
      name:"Ng-Book",
      img:"../../assets/images/ngbook.jpg",
      src:"../../assets/books/Ng-Book The Complete Guide to Angular 9 by Nathan Murray Felipe Coury Ari Lerner Carlos Taborda (z-lib.org).pdf"
    },
    {
      name:"Angular 5 Projects",
      img:"../../assets/images/angularprjs.jpg",
      src:"../../assets/books/Angular 5 Projects Learn to Build Single Page Web Applications Using 70+ Projects by Mark Clow (z-lib.org).pdf"
    },
    {
      name:"Angular Up and Running",
      img:"../../assets/images/angularup.jpg",
      src:"../../assets/books/Angular Up and Running Learning Angular, Step by Step by Shyam Seshadri (z-lib.org).pdf"
    },
    {
      name:"Anaconda Cheatsheet",
      img:"../../assets/images/conda.png",
      src:"../../assets/books/conda-cheatsheet.pdf"
    },
    {
      name:"Ng-Book",
      img:"../../assets/images/ngbook.jpg",
      src:"../../assets/books/Ng-Book The Complete Guide to Angular 9 by Nathan Murray Felipe Coury Ari Lerner Carlos Taborda (z-lib.org).pdf"
    }
  ]
  selected(name:string,path:string)
  {
    this.bname = name;
    this.sfile = path;
  }

}
