import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getdata } from "../Redux/action";
import { Container } from "@chakra-ui/react";
import { Option } from "../Components/Option";

const Featured = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  console.log(data?.data?.data);

  useEffect(() => {
    dispatch(getdata("featured"));
  }, []);
  // console.log(data);

  return (
    <div>
      <Container maxW={"80%"} h="85vh">
        <Option data={data} />
      </Container>
    </div>
  );
};

export default Featured;
