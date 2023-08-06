import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Post } from '../models/post.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { updatePostSuccess } from '../state/post.actions';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit, OnChanges {
  @Input() selectedPost!: Post;

  @Output() cancel = new EventEmitter<void>();
  error: string = '';

  editForm!: FormGroup;

  constructor(private store: Store<{ posts: Post[] }>, private formBuilder: FormBuilder) {
  }
  ngOnInit(): void {
    this.editForm = this.formBuilder.group({
      id: [{ value: this.selectedPost?.id, disabled: true }],
      title: [this.selectedPost?.title, Validators.required],
      description: [this.selectedPost?.description, Validators.required],
      shortDescription: [this.selectedPost?.shortDescription, Validators.required],
      image: [this.selectedPost?.image, Validators.required],
    });
  }

  ngOnChanges(): void {
    if (this.editForm) {
      this.editForm.patchValue(this.selectedPost);
    }
  }

  onSubmit() {
    if (this.editForm.valid) {
      const updatedPost: Post = {
        ...this.selectedPost,
        title: this.editForm.get('title')?.value,
        description: this.editForm.get('description')?.value,
        shortDescription: this.editForm.get('shortDescription')?.value,
        image: this.editForm.get('image')?.value,
      };
      this.store.dispatch(updatePostSuccess({ post: updatedPost }));
      //console.log(updatedPost.title);
    }
    else {
      this.error = 'Please enter the required information';
    }
  }
  
  onCancel(): void {
    this.cancel.emit();
  }
}
