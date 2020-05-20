import {handleActions} from "redux-actions";
import {AttachmentActions} from "../actions/attachment";

const initialState: any = {
    attachment: []

};


export const AttachmentReducer = handleActions(
    {
        [AttachmentActions.Type.SET_IMAGE]: (state, action) => {
            const newItem = {
                user: action.payload.user,
                link: action.payload.link,
                fileId: action.payload.fileId,
            };
            return {...state, attachment: [...state.attachment, newItem]};
        },
        [AttachmentActions.Type.REMOVE_IMAGE]: (state, action) => {
            const idx = state.attachment.findIndex((el: any) => {
                return el.fileId === action.payload;
            });
            const newItem = {
                ...state,
                attachment: [...state.attachment.slice(0, idx), ...state.attachment.slice(idx + 1)]
            };
            return newItem
        },
        [AttachmentActions.Type.CLEAR_IMAGE]:(state, action)=> initialState

    },
    initialState
);
