import React, {useMemo} from "react";
import styled from 'styled-components'
import {Button, Col, Form, Input, Row, Typography} from 'antd';
import {ILogin} from "../../../types/auth";
import {Link} from "react-router-dom";
import './style.css'

const {Text} = Typography;

interface ILoginFormProps {
    handleSubmit(values: ILogin): void
}

const LoginForm = (props: ILoginFormProps) => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        props.handleSubmit(values);
    };

    const memoEmailInput = useMemo(() => {
        return [{required: true, message: 'Please input your username!'}]
    }, []);

    const memoPasswordInput = useMemo(() => {
        return [{required: true, message: 'Please input your password!'}]
    }, []);

    return (
        <div>
            <div className='header'>
                <div>
                </div>
                <Header>
                    <p>Don't have an account?</p>
                    <Link className='header-link' type='link' to="/signup">
                        Sign Up
                    </Link>
                </Header>
            </div>
            <Row>
                <Col span={12} offset={6}>
                    <WrapForm>
                        <h1>Log in</h1>
                        <Form form={form} layout={'vertical'} onFinish={onFinish}
                        >
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={memoEmailInput}
                            >
                                <Input/>
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={memoPasswordInput}
                            >
                                <Input.Password/>
                            </Form.Item>
                            <Form.Item>
                                <WrapButton>
                                    <Button type="default"
                                            htmlType="submit"
                                            className="login-form-button">
                                        Log in Now
                                    </Button>

                                    <a className="login-form-forgot" href="/forgot">
                                        <Text> Forgot your password?</Text>
                                    </a>
                                </WrapButton>
                            </Form.Item>
                            <Row>
                                <Col span={24}>
                                    <div style={{textAlign: "center"}}>or</div>
                                </Col>
                            </Row>
                            <Form.Item>
                                <div className='social-button'>
                                    <Text>Log in with:</Text>
                                    {<Button style={{margin: '0 10px'}} shape={"circle"} size={"large"}><ImgButtonSoc
                                        src='/facebook.png'/></Button>}
                                    <Button shape={"circle"} size={"large"}><ImgButtonSoc src='/google.png'/></Button>
                                </div>
                            </Form.Item>
                        </Form>
                    </WrapForm>
                </Col>
            </Row>
        </div>
    )
};

const WrapForm = styled.div`
    width:300px;
margin: 50px  auto 0 auto;
`;

const Header = styled.div`
display: flex;
align-items: center;
margin-top: 20px;
margin-right: 30px;
`;

const WrapButton = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const ImgButtonSoc = styled.img`
display: flex;
text-align: center;
margin: 0 auto;
width: 27px;
height: 27px;
`;

export default LoginForm;
