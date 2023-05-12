import React from 'react'
import ReporteForm from "./Reportesdinamicos/ReporteForm";
import styled from 'styled-components';
import ReporteFormpacmad from './Reportesdinamicos/ReporteFrompacmad';
// import Reporte3Form from './Reportesdinamicos/Reportesmapaci';
import ReportemadreForm from './Reportesdinamicos/ReprotesFromMadres';
import ReporteFromCartilla from './Reportesdinamicos/ReporteFromcartilladim';
const Reportesdinamicos = () => {
  return (
 <>
    <Div>
        <section>
        <ReporteForm/>
        </section>
        <section>
        <ReportemadreForm/>
        </section>
        <section>
        <ReporteFromCartilla/>
        </section>
     
    </Div>
    {/* <Reporte3Form/> */}
    </>
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
