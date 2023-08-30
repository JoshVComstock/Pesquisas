import React from "react";
import styled from "styled-components";

const InputValidation = ({ value, required }) => {
  const isEmpty = value.trim() === "";
  const showValidation = required && isEmpty;

  return (
    <ValidationMessage show={showValidation}>
      {isEmpty ? "*" : " "}
    </ValidationMessage>
  );
};

const ValidationMessage = styled.div`
  color: #c85555;
  width: 80%;
  font-size: 14px;
  display: ${(props) => (props.show ? "block" : "none")};
  
`;

export default InputValidation;