import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import CabinTable from "../features/cabins/CabinTable";
// import { getCabins } from "../services/apiCabins";

function Cabins() {
  // const [cabins, setCabins] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // console.log(cabins);

  // useEffect(() => {
  //   getCabins()
  //     .then(data => {
  //       setCabins(data);
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       setError(err.message);
  //       setLoading(false);
  //     });
  // }, []);

  return ( <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>Filter / Sort</p>
      {/* {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {cabins.map((cabin ) => (
            <li key={cabin.id}>{cabin.name}
            <img src={cabin.image} />
            <p>Max Capacity: {cabin.maxCapacity}</p>
            <p>Regular Price: {cabin.regularPrice}</p>

            <p>Discount: {cabin.discount}</p>

            </li>  
          
          ))}
        </ul>
      )} */}
    </Row>
    <Row>
    <CabinTable /> 
    </Row>
    </>
  );
}

export default Cabins;