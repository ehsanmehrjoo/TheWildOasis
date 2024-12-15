import styled from "styled-components";
import { useContext } from "react";
import { CabinContext } from "./ContextCabin";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { HiXMark } from "react-icons/hi2";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CreateCabins } from "../../services/apiCabins";
import toast from "react-hot-toast";
import FormRow from "../../ui/FormRow";
const DIV1 = styled.div`
position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100vh;
    background-color: var(--backdrop-color);
    backdrop-filter: blur(4px);
    z-index: 1000;
    transition: 0.5s;
`
const DIV2 = styled.div`
position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-lg);
    box-shadow: var(--shadow-lg);
    padding: 3.2rem 4rem;
    transition: 0.5s;
`
const FormRow2 = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;
const ButtonExit = styled.button`
background: none;
    border: none;
    padding: 0.4rem;
    border-radius: var(--border-radius-sm);
    transform: translateX(0.8rem);
    transition: 0.2s;
    position: absolute;
    font-size: 2.7rem;
    top: 11rem;
    right: 35rem;
    z-index: 5;`

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function CreateCabinForm() {

  const {setIsFormOpen, toggleCreateForm} = useContext(CabinContext)
  const queryClient = useQueryClient()
  const { register , handleSubmit , getValues  ,formState} = useForm()
  const { errors } = formState;
  console.log(errors);
const {isLoading : isCreating , mutate }  = useMutation({
mutationFn : CreateCabins,
onSuccess :  () => {
  toast.success(`New Cabin successfully created`)
  queryClient.invalidateQueries({
    queryKey :['cabins']
  })
  setIsFormOpen(false)
},
 
onError : (err)=> {
  toast.error(err.message)
},
})
function onSubmit(data) {
  mutate(data)
}
function onError (errors) {
console.log(errors);
}
  return ( 
    <DIV1>
     <ButtonExit onClick={toggleCreateForm}  ><HiXMark /></ButtonExit>
    <DIV2>
     <Form onSubmit={handleSubmit(onSubmit , onError)}>
      <FormRow2>
        <Label htmlFor="name">Cabin name</Label>
        <Input type="text" id="name" {...register("name" , {
          required : "This field is required"
        })}/>
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow2>
      <FormRow label="Cabin name" error={errors?.name?.message}>
      <Input type="text" id="name" {...register("name" , {
          required : "This field is required"
        })}/>
      </FormRow>

      <FormRow2>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input type="number" id="maxCapacity" {...register("maxCapacity" , {
          required : "This field is required" , min : {
            value : 1 ,
            message : "Minimum capacity should be 1"
          }
        } )} />
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow2>

      <FormRow2>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input type="number" id="regularPrice" {...register("regularPrice" , {
          required : "This field is required" , min : {
            value : 1 ,
            message : "Minimum Price should be 1"
          }
        })}/>
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow2>

      <FormRow2>
        <Label htmlFor="discount">Discount</Label>
        <Input type="number" id="discount" defaultValue={0} {...register("discount" , {
          required : "This field is required" , validate : (value) => value <= getValues().regularPrice || "Discount should be less than regular price"
        })} />
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow2>

      <FormRow2>
        <Label htmlFor="description">Description for website</Label>
        <Textarea type="number" id="description" defaultValue="" {...register("description" , {
          required : "This field is required"
        })}/>
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow2>

      <FormRow2>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput id="image" accept="image/*" {...register("image" , {
          required : "This field is required"
        })} />
{errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow2>

      <FormRow2>
        {/* type is an HTML attribute! */}
        <Button 
        // onClick={toggleCreateForm} 
        variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Create new cabin</Button>
      </FormRow2>
    </Form>
    </DIV2>
    </DIV1>
  );
}

export default CreateCabinForm;
