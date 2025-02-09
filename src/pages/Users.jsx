import EditUserForm from "../features/authentication/Edituser";
import SignupForm from "../features/authentication/SignupForm";
import Heading from "../ui/Heading";

function NewUsers() {
  return <>
    <Heading as="h1">Create a new user</Heading>
    <SignupForm />
    <Heading as="h2">Edit user</Heading>
    <EditUserForm />
  </>
}

export default NewUsers;
