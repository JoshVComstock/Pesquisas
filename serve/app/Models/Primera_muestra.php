<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Primera_muestra extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_pacientes',
        'edad_gestion',
        'fecha_muestra',
        'hora_muestra',
        'id_centros',
        'id_laboratorios'
    ];
}
