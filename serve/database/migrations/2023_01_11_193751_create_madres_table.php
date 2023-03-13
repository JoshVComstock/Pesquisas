<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMadresTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('madres', function (Blueprint $table) {
            $table->id();
            $table->string('nombre');
            $table->string('apellidos');
           // $table->string('ap_materno');
            $table->integer('ci');
            $table->foreignId('id_ciudades')->constrained('ciudades')->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('direccion');
            $table->integer('telefono1');
            $table->integer('telefono2');
            $table->string('tratamiento_hipertiroidismo')->nullable();
            $table->string('tratamiento_hipotiroidismo');
            $table->string('enfermedad');
           // $table->foreignId('');
            $table->string('detalle_direccion');
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
        Schema::dropIfExists('madres');
    }
}
