import styled from "styled-components";
// import SignupForm from "../features/authentication/SignupForm"
const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

function Login() {
  return <LoginLayout> 
  {/* <SignupForm /> */}
  </LoginLayout>;
}

export default Login;
