import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  const [cabins, setCabins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(cabins);

  useEffect(() => {
    getCabins()
      .then(data => {
        setCabins(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {cabins.map((cabin, index) => (
            <li key={index}>{cabin.name}</li> // فرض می‌کنیم که هر کابین دارای فیلد `name` است
          ))}
        </ul>
      )}
    </Row>
  );
}

export default Cabins;
