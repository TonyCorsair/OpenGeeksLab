import React from "react";
import {Dropdown, Menu} from "antd";
import {DownOutlined} from "@ant-design/icons";
import styled from "styled-components";

const logout = () => {
    localStorage.clear();
    document.location.reload(true);
};

const menu = (
    <Menu>
        <Menu.Item key="0">
            <a href="#">Settings</a>
        </Menu.Item>
        <Menu.Item key="1">
            <a onClick={() => logout()}>Log Out</a>
        </Menu.Item>
    </Menu>
);
const DropDownButton = () => {
    return (
        <WrapDropDown>
            <Dropdown overlay={menu} trigger={["click"]}>
                <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
                    <DownOutlined/>
                </a>
            </Dropdown>
        </WrapDropDown>
    );
};

const WrapDropDown = styled.div`
margin-top: 50px;
`;

export default DropDownButton;
