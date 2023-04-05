<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResultadosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('resultados', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_cartillas')->constrained('cartillas')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('id_laboratorio')->constrained('laboratorios')->cascadeOnUpdate()->cascadeOnDelete();
            $table->dateTime('fecha_ingreso');
            $table->dateTime('fecha_resultado');
            $table->dateTime('fecha_entregado');
            $table->string('resultado');
            $table->string('metodo');
            $table->string('valor_resultado');
            $table->string('valor_referencia');
            $table->string('observaciones');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('resultados');
    }
}
