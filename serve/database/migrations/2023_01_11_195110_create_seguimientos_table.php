<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSeguimientosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('seguimientos', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_cartillas')->constrained('cartillas')->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('nombre_paciente');
            $table->dateTime('fecha_notificacion');
            $table->integer('edad');
            $table->string('sexo');
            $table->string('prueba_alterada');
            $table->dateTime('fecha_nacimiento');
            $table->dateTime('fecha_toma_muestra');
            $table->dateTime('fecha_ingreso_laboratorio');
            $table->dateTime('fecha_proceso');
            $table->foreignId('id_centros')->constrained('centros')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('id_municipios')->constrained('municipios')->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('nombre_madre');
            $table->string('direccion');
            $table->integer('telefono');
            $table->dateTime('fecha_atencion_caso');
            $table->string('formulario_referencia');
            $table->string('formulario_contra_referencia');
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
        Schema::dropIfExists('seguimientos');
    }
}
