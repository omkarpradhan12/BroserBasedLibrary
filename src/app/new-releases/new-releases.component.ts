import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.css']
})
export class NewReleasesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  pics=['./../assets/images/gravity.jpg','./../assets/images/encebook.jpg','./../assets/images/space.jpg','./../assets/images/space.jpg'];
}

