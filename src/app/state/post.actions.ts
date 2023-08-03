import { createAction, props } from "@ngrx/store";
import { Post } from "../models/post.model";


export const addPost = createAction(
    '[Post] Add',
    props<{ post: Post }>()
);

export const deletePost = createAction(
    '[Post] Delete',
    props<{ id: number }>()
);

export const searchPost = createAction(
    '[Post] Search',
    props<{ keyword: string }>()
)

export const updatePost = createAction(
    '[Post] Update',
    props<{ post: Post }>()
)

export const updatePostSuccess = createAction(
    '[Post] Update post Success',
    props<{ post: Post }>()
);
