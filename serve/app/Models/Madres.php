<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Madres extends Model
{
    use HasFactory;
    protected $fillable = [

        'nombre',
        'apellidos',
        'ci',
        'id_ciudades',
        'direccion',
        'telefono1',
        'telefono2',
        'tratamiento_hipertiroidismo',
        'tratamiento_hipotiroidismo',
        'enfermedad',
        'detalle_direccion',
    ];
}
