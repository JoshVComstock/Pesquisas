<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registro_hospitales extends Model
{
    use HasFactory;
    protected $fillable = [
        'hora',
        'fecha',
        'id_redes',
        'id_centros',
        'cantidad_recibida',
        'cantidad_entregada',
        'cod_tarjeta',
        'entregado_por',
        'telefono',
        'recibido_por'
    ];
}
