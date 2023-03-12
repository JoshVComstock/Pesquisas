<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCentrosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('centros', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('direccion');
            //$table->foreignId('id_redes')->constrained('redes')->cascadeOnUpdate()->cascadeOnDelete();
            $table->integer('telefono');
            $table->foreignId('id_municipios')->constrained('municipios')->cascadeOnUpdate()->cascadeOnDelete();
            //$table->foreignId('id_ciudades')->constrained('ciudades')->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('area');
            $table->string('seguimiento_casos');
            $table->string('contacto');
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
        Schema::dropIfExists('centros');
    }
}
