import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import useSignup from "./useSignup";
import Spinner from "../../ui/Spinner";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
 const { register , formState , getValues , handleSubmit ,reset} =  useForm()
 const {errors} = formState;
 const { Signup  , isLoading} = useSignup()
 function onSubmit(data){
  console.log(data);
  Signup(
    {
      fullName: data?.fullName,
      email: data?.email,
      password: data?.password,
      role: "employee", // Role for employees
    }
    , {
    onSettled : () => {

      reset()
    }
  })
 }
 if(isLoading) return <Spinner />
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input type="text" id="fullName" {...register('fullName', {required : 'This field id required'})} 
          disabled={isLoading}
        />
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input type="email" id="email" {...register('email', {required : 'This field id required' ,pattern : {
          value : /\S+@\S+\.\S+/ ,
          message : 'Please provide a valid email address'
        }})}
        disabled={isLoading}
        />
      </FormRow>

      <FormRow label="Password (min 8 characters)" error={errors?.password?.message}>
        <Input type="password" id="password" {...register('password', {required : 'This field id required', minLength : {
          value : 8 ,
          message : "password needs a minimum of 8 characters"
        }})}
        disabled={isLoading}
        />
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input type="password" id="passwordConfirm" {...register('passwordConfirm', {required : 'This field id required',
        validate : (value) => value === getValues().password || 'password needs to match'
        })} 
        disabled={isLoading}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset"  disabled={isLoading} onClick={reset}>
          Cancel
        </Button>
        <Button  disabled={isLoading}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
