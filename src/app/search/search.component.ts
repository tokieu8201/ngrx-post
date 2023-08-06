import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchPost } from '../state/post.actions';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';
import { selectAllPosts } from '../state/post.selectors';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{

  searchKeyword: string = '';
  
  constructor(private store: Store) {

  }

  onSearchPost(keyword: string) {
    this.store.dispatch(searchPost({ keyword }));
  }
}
