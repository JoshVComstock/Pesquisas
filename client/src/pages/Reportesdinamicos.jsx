import React from 'react'
import ReporteForm from "./ReporteForm";
import styled from 'styled-components';
const Reportesdinamicos = () => {
  return (
    <Div>
        <section>
        <ReporteForm/>
        </section>
        <section>
        <ReporteForm/>
        </section>
    </Div>
  )
}

export default Reportesdinamicos
export const Div = styled.section`
  width: 100%;
  height: 95%;
  display:flex;
  flex-wrap:wrap;
  flex-direction:row;
  gap:1em;
  & section{
height:100%;
max-height:20em;
min-height:15em;
  }
`;
