import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { BlogPostService } from "../service/blog-post.service";
import { BlogPost } from "../models/blog-post";

@Component({
  selector: "app-author-post",
  templateUrl: "./author-post.component.html",
  styleUrls: ["./author-post.component.css"]
})
export class AuthorPostComponent implements OnInit {
  public post: BlogPost;
  public processing: boolean = false;
  public submitted: boolean = false;
  public success: boolean = false;
  public failure: boolean = false;
  public deleted: string = null;

  constructor(private postService: BlogPostService) {}

  ngOnInit() {

    this.post = { 
        status: null ,
        id: null ,
        content: null,
        title: null,
        author: null,
        Created_date: null,
    } 
  }

  public submit(): void {
    this.processing = this.submitted = true;



    this.postService.addBlogs(this.post).then((res) =>{ 
      this.post.id = res.id
        this.processing = false;
        this.terminar()
        
    })
  }

  terminar(){
    this.postService.updateBlogs(this.post, this.post.id);
      this.success = true;
      this.deleted = null;
    
  }
}
