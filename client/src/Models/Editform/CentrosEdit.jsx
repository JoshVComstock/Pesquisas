import React from 'react'

export const CentrosEdit = ({centroactual,MosrarCentros}) => {
const [centro, setCentro] = useState(centroactual.centro);


  const Editar = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/api/centros/"+centroactual.id, {
      method: "PUT",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        centro:centro
      }),
      
    });

    if ((response.ok)) {
      setCentro(" ");
      MosrarCentros();
      
    }
  };
  return (
    <Container>
        <div>
          <form  >
            <Divinput>
              <Divinputlabel>
              <label>Nombre</label>
                <Input type="text" placeholder='Ingrese un Centro' value={nombre} onChange={(e) => setCentro(e.target.value)}/>
              </Divinputlabel>
            </Divinput>
            <Divboton>
              <Botonagregar type='submit' onClick={Editar}>Editar</Botonagregar>
            </Divboton>
          </form>
        </div>
    </Container>
  )
}
