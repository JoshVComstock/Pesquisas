<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Centros extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre',
        'direccion',
        'id_redes',
        'telefono',
        'id_ciudades',
        'area',
        'seguimiento_casos',
        'contacto'
    ];
}
