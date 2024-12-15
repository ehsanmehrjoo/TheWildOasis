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



function CreateCabinForm() {

  const {setIsFormOpen, toggleCreateForm} = useContext(CabinContext)
  const queryClient = useQueryClient()
  const { register , handleSubmit , getValues  , formState} = useForm()
  const { errors } = formState;

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
  mutate({...data , image : data.image[0]})
  // console.log(data);
}
function onError (errors) {
// console.log(errors);
}
  return ( 
    <DIV1>
     <ButtonExit onClick={toggleCreateForm}  ><HiXMark /></ButtonExit>
    <DIV2>
     <Form onSubmit={handleSubmit(onSubmit , onError)}>
   
      <FormRow label="Cabin name" error={errors?.name?.message}>
      <Input disabled={isCreating} type="text" id="name" {...register("name" , {
          required : "This field is required"
        })}/>
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        
        <Input disabled={isCreating} type="number" id="maxCapacity" {...register("maxCapacity" , {
          required : "This field is required" , min : {
            value : 1 ,
            message : "Minimum capacity should be 1"
          }
        } )} />
     
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
  
        <Input disabled={isCreating} type="number" id="regularPrice" {...register("regularPrice" , {
          required : "This field is required" , min : {
            value : 1 ,
            message : "Minimum Price should be 1"
          }
        })}/>
         
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input disabled={isCreating} type="number" id="discount" defaultValue={0} {...register("discount" , {
          required : "This field is required" , validate : (value) => value <= getValues().regularPrice || "Discount should be less than regular price"
        })} />
      </FormRow>

      <FormRow label="Description for website" error={errors?.description?.message}>
        <Textarea disabled={isCreating} type="number" id="description" defaultValue="" {...register("description" , {
          required : "This field is required"
        })}/>
       </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message}>
 
        <FileInput   disabled={isCreating} id="image" accept="image/*" {...register("image" , {
          required : "This field is required"
        })} />
 
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button 
        // onClick={toggleCreateForm} 
        variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isCreating}>Create new cabin</Button>
      </FormRow>
    </Form>
    </DIV2>
    </DIV1>
  );
}

export default CreateCabinForm;
