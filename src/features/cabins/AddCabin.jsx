
import { useState } from 'react';
import Button from '../../ui/Button'
import CreateCabinForm from './CreateCabinForm'
 

function AddCabin() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div>
     <Button variation="primary" onClick={() => setIsOpenModal((show) => !show)}>Add new cabin</Button>
     {isOpenModal && <CreateCabinForm />}
    </div>
  )
}

export default AddCabin