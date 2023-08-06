import { createReducer, on } from '@ngrx/store';
import { POSTS, Post } from '../models/post.model';
import { addPost, deletePost, searchPost, updatePost, updatePostSuccess } from './post.actions';

export interface PostState {
    posts: Post[];
    selectedPost: Post | null;
    searchKeyword: string;
    previousPosts: Post[] | null;
}
export const initialState: PostState = {
    posts: [] = POSTS,
    selectedPost: null,
    searchKeyword: '',
    previousPosts: null
}

export const postReducer = createReducer(
    initialState,
    on(addPost, (state, { post }) => ({
        ...state,
        posts: [...state.posts, post]
    })),
    on(deletePost, (state, { id }) => ({
        ...state,
        posts: state.posts.filter(post => post.id !== id)
    })),
    
    on(searchPost, (state, { keyword }) => {
        if (keyword.trim() === '') {
            return { ...state, posts: state.previousPosts || []};
        } else {
            return {
                ...state,
                previousPosts: state.posts,
                posts: state.posts.filter((post) =>
                    post.title.toLowerCase().includes(keyword.toLowerCase())
                ),
            };
        }
    }),
    
    on(updatePost, (state, { post }) => ({
        ...state,
        selectedPost: post
    })),
    on(updatePostSuccess, (state, { post }) => ({
        ...state,
        posts: state.posts.map((p) => (p.id === post.id ? { ...post } : p)),
        selectedPost: null,
    }))
);
