import { Injectable } from "@angular/core";
import { map, catchError } from "rxjs/operators";
import {BlogPost} from '../models/blog-post';


import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: "root"
})




export class BlogPostService{
    
  private blogsCollection : AngularFirestoreCollection<BlogPost>;
  private blogs : Observable <BlogPost[]>;

  constructor (db:AngularFirestore){
   
    this.blogsCollection = db.collection<BlogPost>('blogs');
    this.blogs = this.blogsCollection.snapshotChanges().pipe(map(
      actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc;
          return {id, ...data};
        });
      }
    ));
  }
  
  getBlogs(){
    return this.blogs;
}

  getBlog(id:string){
    return this.blogsCollection.doc<BlogPost>(id).valueChanges();
  } 

  updateBlogs(blog:BlogPost, id:string){
    return this.blogsCollection.doc(id).update(blog);
  }

  addBlogs(blog:BlogPost){
    blog.Created_date = new Date().getFullYear();
    console.log(blog);
    return this.blogsCollection.add(blog);
  }

  removeBlogs(id:string){
    return this.blogsCollection.doc(id).delete();
  }

}



