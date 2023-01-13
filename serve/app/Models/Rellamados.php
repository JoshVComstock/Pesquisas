<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Rellamados extends Model
{
    use HasFactory;
    protected $fillable = [
        'id_cartillas',
        'nombre_bebe',
        'fn',
        'ft',
        'ing',
        'proc',
        'tsh',
        'fnot',
        'cs',
        'tipo_muestra',
        'resultado'
    ];
}
