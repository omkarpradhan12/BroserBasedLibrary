import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { PdfViewerModule } from 'ng2-pdf-viewer';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MyLibraryComponent } from './my-library/my-library.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { ShowBookComponent } from './show-book/show-book.component';
import { ErrorComponent } from './error/error.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ReaderComponent } from './reader/reader.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MyLibraryComponent,
    NewReleasesComponent,
    ShowBookComponent,
    ErrorComponent,
      AboutusComponent,
      ReaderComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PdfViewerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
