import { useContext } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
import { CabinContext } from "../features/cabins/ContextCabin";
import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from "../ui/Button";

function Cabins() {
 const {isFormOpen , toggleCreateForm} = useContext(CabinContext)
 console.log(isFormOpen);

  return ( <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>Filter / Sort</p>
     
    </Row>
    <Row>
    <CabinTable /> 
    </Row>
    <Row>
      <Button variation="primary" onClick={() => toggleCreateForm()}>Add new cabin</Button>
      {isFormOpen && <CreateCabinForm />}
    </Row>
    </>
  );
}

export default Cabins;