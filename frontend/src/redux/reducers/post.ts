import {handleActions} from "redux-actions";
import {PostActions} from "../actions/post";

const initialState: any = [];

export const PostReducer = handleActions({
    [PostActions.Type.ADD_POST]: (state, action) => {
        const newItem = action.payload;
        return [...state, newItem]
    }
}, initialState);
