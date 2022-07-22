import React from "react";
import { Flex } from "@chakra-ui/react";
import Card from "./Card";

const ListaCasas = (props) => {
  const { data } = props;
  return (
    <Flex flexWrap={"wrap"} justifyContent ="center">
      {/* <Button colorScheme="blue" onClick={toggleShow}>
        Completado
      </Button>
      {/* Thruthy condicion && mostrarEsto 
      {show === true && (
        <Spinner color="orange.500" size="xl" speed="1s" thickness="4px" />
      )} */}
      {/* [].map((dato) => {
        return <Componente props key/>
      }) */}

      {data.map((casa, iguana) => {
        return <Card key={iguana} info={casa} />;
      })}
      </Flex>
  );
};

export default ListaCasas;
