<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRegistroHospitalesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('registro_hospitales', function (Blueprint $table) {
            $table->id();
            $table->time('hora');
            $table->date('fecha');
            $table->foreignId('id_redes')->constrained('redes')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('id_centros')->constrained('centros')->cascadeOnUpdate()->cascadeOnDelete();
            $table->integer('cantidad_recibida');
            $table->integer('cantidad_entregada');
            $table->string('cod_tarjeta');
            $table->string('entregado_por');
            $table->integer('telefono');
            $table->string('recibido_por');
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
        Schema::dropIfExists('registro_hospitales');
    }
}
