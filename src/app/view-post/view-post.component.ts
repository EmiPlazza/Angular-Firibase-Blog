import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { BlogPostService } from "src/app/service/blog-post.service";
import { BlogPost } from "src/app/models/blog-post";

@Component({
  selector: "app-view-post",
  templateUrl: "./view-post.component.html",
  styleUrls: ["./view-post.component.css"]
})
export class ViewPostComponent implements OnInit {
  loading: boolean = true;
  post: BlogPost;
  public processing: boolean = false;
  public success: boolean = false;
  public failure: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: BlogPostService
  ) {}

  ngOnInit() {
    this.getBlog();
  }

  public removeBlogs() {
    this.processing = true;
       const id = this.route.snapshot.paramMap.get("id");
    this.postService.removeBlogs(id).then(res => {
      this.router.navigate(["/deleted"]);
    });
  }

  private getBlog(): void {
    const id = this.route.snapshot.paramMap.get("id");

    this.postService.getBlog(id).subscribe(post => {
      this.post = post;
      this.loading = false;
    });
  }
}
