import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Book_detailsService {

constructor() { }

book_details = {

}

wishlist:any = []


send_details(obj:any)
{
  this.book_details=obj
}

add_to_wishlist(name:string)
{
  if(!this.wishlist.includes(name))
  {
    this.wishlist.push(name)
  }
}

}
