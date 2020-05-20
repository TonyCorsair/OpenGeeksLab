import React from "react";
import {connect} from "react-redux";
import Divider from "antd/lib/divider";
import {DeleteOutlined} from "@ant-design/icons";
import {IRootReducer} from "../../redux/reducers/state";
import {IPost} from "../../types/post";
import './right-sidebar.css'
import styled from "styled-components";


type IPostMessage = ReturnType<typeof mapStateToProps>
const PostMessage = (props: IPostMessage) => {
    return (
        <div>
            <h1 className='title'>Agenda</h1>
            <WrapContent>
                <h1>April 4</h1></WrapContent>
            {
                props.post.map((item: IPost) => {
                    return (<ContentItem key={item.id}>
                        <ContentItemTitle>
                            <h1>{item.title}</h1>
                            <DeleteOutlined style={{color: 'black'}}/>
                        </ContentItemTitle>

                        <div style={{color: 'black'}}>
                            {item.body}
                        </div>
                        <Divider style={{backgroundColor: 'black'}}/>
                        <ContentSocial>
                            <div>
                                <span style={{color: 'black'}}>Socials:</span>
                            </div>
                            <div style={{color: 'black'}}>Post time: {item.time}</div>
                        </ContentSocial>
                    </ContentItem>)
                })
            }
        </div>
    )
};

const mapStateToProps = (state: IRootReducer) => {
    return {
        post: state.post
    }
};

const ContentSocial = styled.div`
display: flex;
justify-content: space-between;
`;

const ContentItemTitle = styled.div`
display: flex;
justify-content: space-between;
`;

const ContentItem = styled.div`
background-color: #ffffff;
padding: 20px 40px;
margin-bottom: 30px;
`;

const WrapContent = styled.div`
background-color:#c4c4c4;
padding: 1px 10px;
margin-bottom: 20px;
font-weight: 700;
`;

export default connect(mapStateToProps)(PostMessage)
