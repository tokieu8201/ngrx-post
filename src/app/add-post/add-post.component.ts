import { Component, EventEmitter, Output } from '@angular/core';
import { POSTS, Post } from '../models/post.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { addPost } from '../state/post.actions';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  posts: Post[] = POSTS;
  @Output() cancel = new EventEmitter<void>();

  addForm!: FormGroup;
  error: string = '';

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.addForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      shortDescription: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSavePost() {
    if (this.addForm.valid) {
      const post : Post = this.addForm.value;
      post.id = this.posts.length > 0 ? this.posts[this.posts.length - 1].id + 1 : 1,
      this.store.dispatch(addPost({ post }));
      this.onCancel();
    } else {
      this.error = 'Please enter name and price';
    }
  }

  onCancel(): void {
    this.cancel.emit();
  }
}
