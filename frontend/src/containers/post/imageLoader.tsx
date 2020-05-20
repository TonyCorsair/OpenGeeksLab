import React from "react";
import "./style.css";
import {CloseCircleFilled} from "@ant-design/icons";
import styled from "styled-components";
import Input from "antd/lib/input";
import {Typography} from 'antd';
import {IImage} from "../../types/attachment";

const { Text } = Typography;

interface IPostForm {
    handleSubmit(values: any): void;

    removeItem(values: any): void;

    images: any;
}

const ImageLoader = (props:IPostForm) => {

    const getImage = (e: any) => {
        const fileId = e.target.files[0];
        const data = new FormData();
        data.append("file", fileId);
        props.handleSubmit(data);
    };

    const removeItem = (id: string) => {
        props.removeItem(id);
    };

    return (
        <div>
            <div className="wrap-image">
                {props.images.attachment.map((item: IImage) => {
                    const id = item.fileId;
                    return (
                        <WrapPost
                            key={item.fileId}
                        >
                            <a className="close" onClick={() => removeItem(id)}>
                                <CloseCircleFilled className='close'
                                />
                            </a>
                            <img src={item.link} alt="image" className="image-preview"/>
                        </WrapPost>
                    );
                })}
            </div>
            <Input
                className="inputfile"
                name="file"
                id="file"
                type="file"
                onChange={getImage}
            />
            <label className='label' htmlFor="file"><Text className='label-text'>Choose a file</Text></label>
        </div>
    );
};


const WrapPost = styled.div`
  display: block;
  position: relative;
  background-color: #ced9e9;
  margin: 10px;
  padding: 3px 13px;
`;

export default ImageLoader;
