<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Seguimientos extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_cartillas',
        'nombre_paciente',
        'fecha_notificacion',
        'edad',
        'sexo',
        'prueba_alterada',
        'fecha_nacimiento',
        'fecha_toma_muestra',
        'fecha_ingreso_laboratorio',
        'fecha_proceso',
        'id_centros',
        'id_municipios',
        'nombre_madre',
        'direccion',
        'telefono',
        'fecha_atencion_caso',
        'formulario_referencia',
        'formulario_contra_referencia',
        'observaciones'
    ];
}
