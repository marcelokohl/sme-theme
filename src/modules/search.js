import React from "react";
import { Input, Button, Icon } from "../index.js"

const Search = props => {
  const { children, className } = props;
  let c = "Search" + (className?' '+className:'');
  return (
    <div className={c}>
      <Input after={<Button className="sm ml-md">Buscar</Button>} append={<Icon className="mt-md" name="arrow-down"/>}>Busque por email ou cep</Input>
    </div>
  );
};

export default Search;
