import React from 'react'
import styled from "styled-components";

const CentroForm = () => {
    
  return (
    <div>
      <form action="submit">
        <div>
            <label htmlFor="">Ciudad:</label>
            <input type="text" />
        </div>
        <div>
            <label htmlFor="">COntacto:</label>
            <input type="text" />
        </div>
      </form>
    </div>
  )
}

export default CentroForm

const Container=styled.h1`
    display: flex;
    background: blueviolet;
    justify-content: center;
`;