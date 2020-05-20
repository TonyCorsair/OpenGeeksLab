import {createAction} from "redux-actions";

enum Type{
    ADD_POST= 'ADD_POST'
}

const addPost = createAction(Type.ADD_POST)

export const PostActions={
    Type,

    addPost
};

export type PostActions  = Omit<typeof PostActions, "Type">;
