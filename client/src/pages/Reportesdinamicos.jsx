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
width:90%;
height:100%;
margin:1em auto;
display:flex;
align-items:center;
gap:1em;
flex-wrap:wrap;
  & section{
width:auto;
height:auto;
    &:nth-child(2n){
        width:35em;
}
&:nth-child(3n){

        width:35em;
}
  }

`;
