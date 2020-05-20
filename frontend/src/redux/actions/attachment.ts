import {createAction} from "redux-actions";
import {IImage, IRemoveImage} from "../../types/attachment";

enum Type {
    ADD_IMAGE = "ADD_IMAGE",
    SET_IMAGE = "SET_IMAGE",
    REMOVE_IMAGE = "REMOVE_IMAGE",
    CLEAR_IMAGE = "CLEAR_IMAGE"
}

const addImage = createAction<IImage>(Type.ADD_IMAGE);
const setImage = createAction<IImage>(Type.SET_IMAGE);
const removeImage = createAction<IRemoveImage>(Type.REMOVE_IMAGE);
const clearImage = createAction(Type.CLEAR_IMAGE);


export const AttachmentActions = {
    Type,

    addImage,
    setImage,
    removeImage,
    clearImage
};

export type AttachmentActions = Omit<typeof AttachmentActions, "Type">;
