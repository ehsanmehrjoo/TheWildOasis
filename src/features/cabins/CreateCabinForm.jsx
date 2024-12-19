import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
// import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
// import { HiXMark } from "react-icons/hi2";
import { CreateEditCabins } from "../../services/apiCabins";
import FormRow from "../../ui/FormRow";
 
// const DIV1 = styled.div`
// position: fixed;
//     top: 0px;
//     left: 0px;
//     width: 100%;
//     height: 100vh;
//     background-color: var(--backdrop-color);
//     backdrop-filter: blur(4px);
//     z-index: 1000;
//     transition: 0.5s;
// `
// const DIV2 = styled.div`
// position: fixed;
//     top: 50%;
//     left: 50%;
//     transform: translate(-50%, -50%);
//     background-color: var(--color-grey-0);
//     border-radius: var(--border-radius-lg);
//     box-shadow: var(--shadow-lg);
//     padding: 3.2rem 4rem;
//     transition: 0.5s;
// `

// const ButtonExit = styled.button`
// background: none;
//     border: none;
//     padding: 0.4rem;
//     border-radius: var(--border-radius-sm);
//     transform: translateX(0.8rem);
//     transition: 0.2s;
//     position: absolute;
//     font-size: 2.7rem;
//     top: 11rem;
//     right: 35rem;
//     z-index: 5;`



function CreateCabinForm({ cabinToEdit = {} }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);

const [isFormOpen, setIsFormOpen] = useState(false);
  const queryClient = useQueryClient();

  const { register, handleSubmit, getValues, formState } = useForm({
    defaultValues: isEditSession
      ? { ...editValues }
      : { discount: 0, description: "" },
  });

  const { errors } = formState;

  const { mutate: createCabin, isLoading: isCreating } = useMutation({
    mutationFn: CreateEditCabins,
    onSuccess: () => {
      toast.success("New Cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      setIsFormOpen(false);
    },
    onError: (err) => {
      console.error("Error:", err);
      toast.error(err.message || "Something went wrong!");
    },
  });

  const { mutate: editCabin, isLoading: isEditing } = useMutation({
    mutationFn: (newCabinData) => CreateEditCabins(newCabinData, editId),
    onSuccess: () => {
      toast.success("Cabin successfully edited");
      queryClient.invalidateQueries({ queryKey: ["cabins"] });
      setIsFormOpen(false);
    },
    onError: (err) => {
      console.error("Error:", err);
      toast.error(err.message || "Something went wrong!");
    },
  });

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const image =
      typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession) {
      editCabin({ ...data, image });
    } else {
      createCabin({ ...data, image });
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          disabled={isWorking}
          type="text"
          id="name"
          {...register("name", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          disabled={isWorking}
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This field is required",
            min: { value: 1, message: "Minimum capacity should be 1" },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          disabled={isWorking}
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This field is required",
            min: { value: 1, message: "Minimum price should be 1" },
          })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          disabled={isWorking}
          type="number"
          id="discount"
          {...register("discount", {
            required: "This field is required",
            validate: (value) => {
              const regularPrice = getValues().regularPrice || 0;
              return (
                value <= regularPrice || "Discount should be less than regular price"
              );
            },
          })}
        />
      </FormRow>

      <FormRow label="Description for website" error={errors?.description?.message}>
        <Textarea
          disabled={isWorking}
          id="description"
          {...register("description", { required: "This field is required" })}
        />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message}>
        <FileInput
          disabled={isWorking}
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
      </FormRow>

      <FormRow>
        <Button variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit cabin" : "Create new cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;