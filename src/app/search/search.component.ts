import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchPost } from '../state/post.actions';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchKeyword: string = '';

  constructor(private store: Store) {
  }

  onSearchPost(keyword: string) {
    this.store.dispatch(searchPost({ keyword }));
    //console.log(this.searchKeyword);
  }
}
