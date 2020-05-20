import React, {useMemo} from "react";
import {Link} from "react-router-dom";
import {Button, Col, Form, Input, Row} from "antd";
import styled from "styled-components";
import {ISignUp} from "../../../types/auth";
import './style.css'

interface ISignUpFormProps {
    handleSubmit(values: ISignUp): void
}

const RegisterForm = (props: ISignUpFormProps) => {

    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        delete values['confirm'];
        props.handleSubmit(values)
    };

    const memoNameInput = useMemo(() => {
        return [{required: true, message: 'Please input your username!'}]
    }, []);

    const memoEmailInput = useMemo(() => {
        return [{required: true, message: 'Please input your email!'}]
    }, []);
    const memoPasswordInput = useMemo(() => {
        return [{required: true, message: 'Please input your password!'}]
    }, []);

    return (
        <div>
            <div>
                <div className='header'>
                    <div>
                    </div>
                    <Header>
                        <p>Already have an account?</p>
                        <Link className='header-link' type='link' to="/">
                            Log In
                        </Link>
                    </Header>
                </div>
                <Row>
                    <Col span={12} offset={6}>
                        <WrapForm>
                            <h1>Sing Up</h1>
                            <Form form={form} layout={'vertical'} onFinish={onFinish}
                            >
                                <Form.Item
                                    label="Name"
                                    name="firstName"
                                    rules={memoNameInput}
                                >
                                    <Input/>
                                </Form.Item>
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
                                <Form.Item
                                    name="confirm"
                                    label="Confirm Password"
                                    dependencies={['password']}
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please confirm your password!',
                                        },
                                        ({getFieldValue}) => ({
                                            validator(rule, value) {
                                                if (!value || getFieldValue('password') === value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject('The two passwords that you entered do not match!');
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password/>
                                </Form.Item>
                                <Form.Item>
                                    <WrapButton>
                                        <Button type="default"
                                                htmlType="submit"
                                                className="login-form-button">
                                            Sign Up Now
                                        </Button>
                                        <Form.Item>
                                            <div className='wrap-social'>
                                                <div style={{textAlign: "center"}}>or</div>
                                                <Button style={{margin: '0 10px'}} shape={"circle"}
                                                        size={"large"}><ImgButtonSoc
                                                    src='/facebook.png'/></Button>
                                                <Button shape={"circle"} size={"large"}><ImgButtonSoc
                                                    src='/google.png'/></Button>
                                            </div>
                                        </Form.Item>

                                    </WrapButton>
                                </Form.Item>


                            </Form>
                        </WrapForm>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

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
export default RegisterForm;
