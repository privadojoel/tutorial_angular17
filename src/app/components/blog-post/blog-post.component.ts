import { Component } from '@angular/core';
import { CommentsComponent } from '../comments/comments.component';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommentsComponent, NgOptimizedImage],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {

}
