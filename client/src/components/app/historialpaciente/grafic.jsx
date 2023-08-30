import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { getPacientes } from '../../../services/pacientes';

const Grafic = () => {
    const data = [
        { label: "Enero", asistencia: 5 },
        { label: "Febrero", asistencia:3 },
        { label: "Marzo", asistencia:7  },
        { label: "Abril", asistencia:6 },
        { label: "Mayo", asistencia: 10 },
        { label: "junio", asistencia: 2 },
      ];
      
   

    useEffect(() => {
        const getApiData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/pacientes`);
                if (!response.ok) {
                    throw new Error("Error en la respuesta de la API");
                }
                const datos = await response.json();
                console.log("Datos obtenidos:", datos);
             
            } catch (error) {
                console.error("Error al obtener los datos de la API:", error);
            }
        };
        getApiData();
    }, []);

    if (!data) {
        return <div>Cargando datos...</div>;
    }

    return (
        <div>
            <LineChart width={1200} height={400} data={data}>
                <XAxis dataKey="label" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="asistencia" stroke="#8884d8" />
            </LineChart>
        </div>
    );
};

export default Grafic;
