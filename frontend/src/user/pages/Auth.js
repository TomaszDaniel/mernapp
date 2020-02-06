import React, { useState, useContext } from 'react';

import Input from '../../shared/components/FormElements/Input'
import Button from '../../shared/components/FormElements/Button'
import { useForm } from '../../shared/hooks/form-hook'
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_EMAIL,
    VALIDATOR_MINLENGTH
} from '../../shared/util/validators';
import Card from '../../shared/components/UIElements/Card/Card'
import './Auth.css'
import { AuthContext } from '../../shared/context/auth-context'

const Auth = props => {
    const auth = useContext(AuthContext)

    const [isLoginMode, setIsLoginMode] = useState(true)
    const [formState, inputHandler, setFormData] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    },
        false
    )

    const authSubmitHandler = event => {
        event.preventDefault()
        console.log(formState.inputs)
        auth.login()

    }

    const switchModeHandler = () => {
        if (!isLoginMode) {
            setFormData(
                {
                    ...formState.inputs,
                    name: undefined
                },
                formState.inputs.email.isValid && formState.inputs.password.isValid
            );
        } else {
            setFormData(
                {
                    ...formState.inputs,
                    name: {
                        value: '',
                        isValid: false
                    }
                },
                false
            );
        }
        setIsLoginMode(prevMode => !prevMode);
    };


    return (
        <Card className="authentication">
            <h2>Login Required</h2>
            <hr />
            <form onSubmit={authSubmitHandler}>
                {!isLoginMode && (
                    <Input
                        element="input"
                        id="name"
                        type="text"
                        label="Your Name"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorText="Please enter a name."
                        onInput={inputHandler}
                    />
                )}
                <Input
                    id="email"
                    element="input"
                    type="email"
                    label="Email"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Please enter a valid email."
                    onInput={inputHandler}
                />
                <Input
                    id="password"
                    element="input"
                    type="password"
                    label="Password"
                    validators={[VALIDATOR_MINLENGTH(5)]}
                    errorText="Please enter a valid password (at least 5 characters)."
                    onInput={inputHandler}
                />
                <Button type="submit" disabled={!formState.isValid}>{isLoginMode ? "LOGIN" : "SIGNUP"}</Button>
            </form>
            <Button onClick={switchModeHandler}>Switch to {isLoginMode ? "SIGNUP" : "LOGIN"}</Button>
        </Card>
    )
}

export default Auth