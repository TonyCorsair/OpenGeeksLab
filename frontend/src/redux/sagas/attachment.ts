import { Action } from "redux-actions";
import { addImage, removeItem } from "./api/attachment";
import { AttachmentActions } from "../actions/attachment";
import { message } from "antd";
import { call, put, takeLatest } from "redux-saga/effects";
import { IImage } from "../../types/attachment";

function* AddImageWorker(action: Action<IImage>) {
  try {
    const { data } = yield call(addImage, action.payload);

    yield put(AttachmentActions.setImage(data));
  } catch (error) {
    message.error("Failed to add image!");
    console.error(error);
  }
}

function* RemoveImageWorker(action: Action<any>) {
  try {
    yield call(removeItem, action.payload);
  } catch (error) {
    message.error("No Delete");
    console.error(error);
  }
}

export default function* watchPost() {
  yield takeLatest(AttachmentActions.Type.ADD_IMAGE, AddImageWorker);
  yield takeLatest(AttachmentActions.Type.REMOVE_IMAGE, RemoveImageWorker);
}
