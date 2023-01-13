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
            $table->string('ap_paterno');
            $table->string('ap_materno');
            $table->string('ci');
            $table->foreignId('id_ciudades')->constrained('ciudades')->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('direccion');
            $table->integer('telefono1');
            $table->integer('telefono2');
            $table->foreignId('id_enfermedades')->constrained('enfermedades')->cascadeOnUpdate()->cascadeOnDelete();
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
