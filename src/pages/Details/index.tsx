import React from "react";
import { useParams } from "react-router-dom";

// import { Container } from './styles';

const Details: React.FC = () => {
  let { name }: { name: string } = useParams();
  return <div>{name}</div>;
};

export default Details;
