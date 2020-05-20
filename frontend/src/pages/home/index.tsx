import React from "react";
import {Layout, Menu} from "antd";
import "./style.scss";
import PostFrom from "../../containers/post/form-post";
import AvatarLogin from "../../components/common/avatar-login";
import DropDownButton from "../../components/common/drop-down";
import PostMessage from "../../containers/post/right-sidebar";

const {Header, Sider, Content} = Layout;

export default function Home() {
    return (
        <Layout>
            <Sider
                className="left-sidebar"
            >
                <div className="left-sidebar">
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        theme="light"
                        style={{backgroundColor:'#e3e3e3'}}
                    >
                        <Menu.Item key="1">
                            Posts
                        </Menu.Item>
                        <Menu.Item key="2">
                            Calendar
                        </Menu.Item>
                        <Menu.Item key="3">
                            Statistics
                        </Menu.Item>
                        <Menu.Item key="4">
                            Archive
                        </Menu.Item>
                    </Menu>
                </div>
            </Sider>
            <Layout>
                <Header>Header</Header>
                <Content>
                    <PostFrom/>
                </Content>
            </Layout>
            <Sider
                width={470}
                className="right-sidebar"
            >
                <div className="right-sidebar avatar">
                    <div></div>
                    <div style={{display: "flex"}}>
                        <AvatarLogin/>
                        <DropDownButton/>
                    </div>
                </div>
                <PostMessage/>
            </Sider>
        </Layout>
    );
}
