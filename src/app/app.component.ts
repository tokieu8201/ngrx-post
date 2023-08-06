import { Component, OnChanges, OnInit } from '@angular/core';
import { Post } from './models/post.model';
import { Store } from '@ngrx/store';
import { selectSelectedPost } from './state/post.selectors';
import { updatePost } from './state/post.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx-post';
  showAddForm = false;
  selectedPost: Post | null | undefined;
  constructor(private store: Store<{ posts: Post[] }>) {
    this.store.select(selectSelectedPost).subscribe((post) => {
      this.selectedPost = post;
      this.showAddForm = false;
    });
  }
  
  addNewPost() {
    this.showAddForm = true;
    this.selectedPost = null;
  }

  onCancel() {
    this.showAddForm = false;
    this.selectedPost = null;
  }
}
