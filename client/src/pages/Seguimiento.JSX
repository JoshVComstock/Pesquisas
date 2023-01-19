import React from 'react'
import { useState, useEffect } from 'react';
import styled from 'styled-components';

export const Seguimiento = () => {
    const [seguimientos, setSeguimientos] = useState([]);

  async function MostrarSeguimientos() {
    const response = await fetch('http://127.0.0.1:8000/api/seguimientos', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
    })
    const respuesta = await response?.json();
    setSeguimientos(respuesta);
  }
  async function EliminarSeguimientos(id) {
    const response = await fetch('http://127.0.0.1:8000/api/seguimientos/' + id, {
      method: 'DELETE',
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
      },
    })
    if (response.ok) {
        MostrarSeguimientos();
    }
  }
  useEffect(() => {
    MostrarSeguimientos();
  }, [])
  return (
    <div>Seguimiento</div>
  )
}
