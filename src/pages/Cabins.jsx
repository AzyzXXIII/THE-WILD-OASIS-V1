import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getCabins } from "../services/apiCabins";

function Cabins() {
  useEffect(() => {
    getCabins().then((data) => {
      console.log(data);
    });
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img
        src="https://dqckydbrtbzoquztptzi.supabase.co/storage/v1/object/sign/cabin-images/cabin-001.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYWJpbi1pbWFnZXMvY2FiaW4tMDAxLmpwZyIsImlhdCI6MTczODgwMDgxNywiZXhwIjoxNzQxMzkyODE3fQ.TQf5CQECoVQ7ICnlEG5Tq-w_HgjWTeLcMRtljeJ4BTA"
        alt=""
      />
    </Row>
  );
}

export default Cabins;
