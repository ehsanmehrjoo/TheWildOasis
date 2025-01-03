import React, { useContext } from 'react'
import Button from '../../ui/Button'
import CreateCabinForm from './CreateCabinForm'
import { CabinContext } from './ContextCabin'

function AddCabin() {
     const {isFormOpen , toggleCreateForm} = useContext(CabinContext)
  return (
    <div>
     <Button variation="primary" onClick={() => toggleCreateForm()}>Add new cabin</Button>
     {isFormOpen && <CreateCabinForm />}
    </div>
  )
}

export default AddCabin