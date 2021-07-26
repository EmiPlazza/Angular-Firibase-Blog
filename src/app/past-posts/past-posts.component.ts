import { Component, OnInit } from "@angular/core";
import { BlogPostService } from "../service/blog-post.service";
import { BlogPost } from "src/app/models/blog-post";

@Component({
  selector: "app-past-posts",
  templateUrl: "./past-posts.component.html",
  styleUrls: ["./past-posts.component.css"]
})
export class PastPostsComponent implements OnInit {
  loading: boolean = true;
  posts: BlogPost[];

  constructor(private postService: BlogPostService) {}

  ngOnInit() {
    this.getBlogs();
  }

  private getBlogs(): void {
    this.postService.getBlogs().subscribe(posts => {
      this.posts = posts;
      this.loading = false;
    });
  }
}
