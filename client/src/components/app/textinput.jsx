import React from "react";
import styled from "styled-components";

const TextInput = ({ value, onChange }) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value.replace(/[^A-Za-z\s]/g, ""); // Eliminar caracteres no alfabéticos y espacios
    onChange(inputValue);
  };

  return <input type="text" value={value} onChange={handleInputChange} />;
};

export const Input = styled.input`
  /* height: 30px;
  border-radius: 5px;
  border-bottom: 1px solid #0005;
  outline: none;
  &:focus {
  border-radius: 0;
    border-bottom: 1.5px solid #0084ff;
  } */
`;

export default TextInput;
