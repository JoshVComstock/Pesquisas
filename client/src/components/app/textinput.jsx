import React from "react";
import styled from "styled-components";

const TextInput = ({ value, onChange }) => {
  const handleInputChange = (e) => {
    const inputValue = e.target.value.replace(/[^A-Za-z\s]/g, ""); // Eliminar caracteres no alfabéticos y espacios
    onChange(inputValue);
  };

  return <Input type="text" value={value} onChange={handleInputChange} />;
};

const Input = styled.input`
   margin-top: 5px;
  margin-bottom: 5px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  outline: none;
  &:focus {
    border: 1.5px solid #034078;
  }
`;

export default TextInput;
