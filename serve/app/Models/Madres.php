<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Madres extends Model
{
    use HasFactory;
    protected $fillable = [
        'nombre',
        'ap_paterno',
        'ap_materno',
        'ci',
        'id_ciudades',
        'direccion',
        'telefono1',
        'telefono2',
        'id_enfermedades',
        'detalle_direccion'
    ];
}
