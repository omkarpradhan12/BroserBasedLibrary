import { ReaderComponent } from './reader/reader.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ErrorComponent } from './error/error.component';
import { ShowBookComponent } from './show-book/show-book.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { MyLibraryComponent } from './my-library/my-library.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'footer',component:FooterComponent},
  {path:'NewReleases',component:NewReleasesComponent},
  {path:'MyLibrary',component:MyLibraryComponent},
  {path:'Details',component:ShowBookComponent},
  {path:'About Us',component:AboutusComponent},
  {path:'ReaderComponent',component:ReaderComponent},
  {path:'**',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
