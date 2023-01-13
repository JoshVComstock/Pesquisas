<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Resultados extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_cartillas',
        'nombre_bebe',
        'fecha_ingreso',
        'fecha_resultado',
        'fecha_entregado',
        'resultado',
        'metodo',
        'valor_resultado',
        'valor_referencia',
        'observaciones'
    ];
}
