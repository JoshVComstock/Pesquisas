<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateControlFiltrosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('control_filtros', function (Blueprint $table) {
            $table->id();
            $table->date('fecha');
            $table->integer('numero_correlativo');
            $table->string('cod_tarjeta_inicial');
            $table->string('cod_tarjeta_final');
            $table->string('cantidad');
            $table->foreignId('id_centros')->constrained('centros')->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('entregado_por');
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
        Schema::dropIfExists('control_filtros');
    }
}
