import React, {useState, useContext} from 'react';
import { useHistory } from "react-router-dom";
import Button from '../../shared/components/FormElements/Button/Button';
import Input from '../../shared/components/FormElements/Input';
import Card from '../../shared/components/UIElements/Card/Card';
import {
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH, VALIDATOR_EMAIL
  } from '../../shared/util/validators';
import './Auth.css';
import { useForm } from '../../shared/hooks/form-hook';
import { AuthContext } from '../../shared/content/auth-content';

const Auth = () => {
    let history=useHistory();

    const auth = useContext(AuthContext);

    const [isLogin, setIsLogin] = useState(true);
    const [formState, inputHandler, setFormData] = useForm(
        {
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
      );
    
      const authSubmitHandler = event => {
          event.preventDefault();
          console.log(formState.inputs);
          auth.login();
          history.push("/");
      }

      const switchModeHandler = () =>{
          if(!isLogin){
            setFormData({
              ...formState.inputs,
              name: undefined
            },
            formState.inputs.email.isValid && formState.inputs.password.isValid);
          } else{
            setFormData({
              ...formState.inputs,
              name: {
                value: '',
                isValid: false
              }
            }, false);
          }
          setIsLogin(prevMode => !prevMode);
      }
      
    return (
        <Card className="authentication">
            <h2>Login Required</h2>
            <hr/>
            <form className="place-form" onSubmit={authSubmitHandler}>
                {!isLogin && <Input element="input" id="name" type="text" label="Your Name" validators={[VALIDATOR_REQUIRE()]} onInput={inputHandler}/>}
                <Input
                    id="email"
                    element="input"
                    type="text"
                    label="Email"
                    validators={[VALIDATOR_EMAIL()]}
                    errorText="Please enter a valid email."
                    onInput={inputHandler}
                />
                <Input
                    id="password"
                    element="input"
                    type="text"
                    label="Password"
                    validators={[VALIDATOR_MINLENGTH(8)]}
                    errorText="Please enter a valid password (At least 8 characters)."
                    onInput={inputHandler}
                />
                <Button type="submit" disabled={!formState.isValid}>
                    {isLogin ? 'LOGIN' : 'SIGN UP'}
                </Button>
            </form>
            <Button inverse onClick={switchModeHandler}>{isLogin ?  'SWITCH TO SIGN UP' : 'SWITCH TO LOGIN' }</Button>
        </Card>
    )
};

export default Auth;