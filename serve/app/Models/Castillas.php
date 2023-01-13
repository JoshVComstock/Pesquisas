<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Castillas extends Model
{
    use HasFactory;
    protected $fillable = [
        'codigo_barras',
        'primer_apellido',
        'segundo_apellido',
        'nombre_bebe',
        'fecha_nacimiento',
        'fecha_toma_muestra',
        'nacimiento_termino',
        'edad_gestional',
        'sexo',
        'muestra',
        'peso_nacimiento',
        'transfusion',
        'antibioticos',
        'ci',
        'nombre_madre',
        'id_ciudades',
        'id_centros',
        'telefono1',
        'telefono2',
        'direccion',
        'enfermedad_madre'
    ];
}
