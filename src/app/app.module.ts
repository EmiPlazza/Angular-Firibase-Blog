import { BrowserModule } from "@angular/platform-browser";
import { Injectable, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { Http, HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { PastPostsComponent } from "./past-posts/past-posts.component";
import { ViewPostComponent } from "./view-post/view-post.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { MastheadComponent } from "./masthead/masthead.component";
import { PreviewPostComponent } from "./preview-post/preview-post.component";
import { AuthorPostComponent } from "./author-post/author-post.component";
import { LoadingComponent } from "./loading/loading.component";
import { AngularFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { DeletedPostComponent } from './deleted-post/deleted-post.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PastPostsComponent,
    ViewPostComponent,
    NavbarComponent,
    FooterComponent,
    MastheadComponent,
    PreviewPostComponent,
    AuthorPostComponent,
    LoadingComponent,
    DeletedPostComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.FirebaseConfig),
    AngularFireDatabaseModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule {}
