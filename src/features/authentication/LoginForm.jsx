import { useState } from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";
import useLogin from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
 

function LoginForm() {
  const [email, setEmail] = useState("ehsan585147z@gmail.com");
  const [password, setPassword] = useState("pass0987");
  const { Login , isLoadingLogin} = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if(!email || !password) return 
    Login({email, password})
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormRowVertical label="Email address">
        <Input
          type="email"
          id="email"
          // This makes this form better for password managers
          autoComplete="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isLoadingLogin}
        />
      </FormRowVertical>
      <FormRowVertical label="Password">
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={isLoadingLogin}
        />
      </FormRowVertical>
      <FormRowVertical>
        <Button size="large"  disabled={isLoadingLogin}>
    
        {!isLoadingLogin ? "Log in" : <SpinnerMini/>}
        </Button>
        
      </FormRowVertical>
    </Form>
  );
}

export default LoginForm;
