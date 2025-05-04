import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-api-posts',
  imports: [CommonModule],
  templateUrl: './api-posts.component.html',
  styleUrl: './api-posts.component.css'
})
export class ApiPostsComponent {
    posts: any[] =[];
    constructor(private postservice: PostService){
        postservice.getPosts().subscribe(data => this.posts = data);
    }
}
