import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";
import CabinTable from "../features/cabins/CabinTable";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);

  @media (max-width: 768px) {
    grid-template-columns: 90%; /* برای موبایل عرض را کمتر کنید */
    padding: 1rem; /* فاصله داخلی برای جلوگیری از چسبیدن محتوا به لبه */
  }
`;


function Login() {
  return <LoginLayout> 
  <Logo />
 
  <Heading as="h4" >Log in to your account</Heading>
  <LoginForm />
  </LoginLayout>;
}

export default Login;
