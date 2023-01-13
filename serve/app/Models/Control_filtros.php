<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Control_filtros extends Model
{
    use HasFactory;
    protected $fillable = [
        'fecha',
        'numero_correlativo',
        'cod_tarjeta_inicial',
        'cod_tarjeta_final',
        'cantidad',
        'id_centros',
        'entregado_por',
        'recibido_por'
    ];
}
