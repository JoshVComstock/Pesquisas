<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cartillas extends Model
{
    use HasFactory;
    protected $fillable = [
        'codigo_barras',
        'fecha_toma_muestra',
        'nacimiento_termino',
        'edad_gestional_semanas',
        'edad_gestional_dia',
        'muestra',
        'peso_nacimiento',
        'transfusion',
        'fecha',
        'antibioticos',
        'id_centros'
    ];
}
