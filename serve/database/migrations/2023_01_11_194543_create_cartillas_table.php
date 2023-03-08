<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use League\CommonMark\Extension\Table\Table;

class CreateCartillasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cartillas', function (Blueprint $table) {
            $table->id();
            $table->integer('codigo_barras');
            $table->string('primer_apellido');
            $table->string('segundo_apellido');
            $table->string('nombre_bebe');
            $table->dateTime('fecha_nacimiento');
            $table->dateTime('fecha_toma_muestra');
            $table->string('nacimiento_termino');
            $table->string('edad_gestional');
            $table->string('sexo');
            $table->string('muestra');
            $table->double('peso_nacimiento');
            $table->string('transfusion');
            $table->string('antibioticos');
            $table->integer('ci');
            $table->foreignId('id_ciudades')->constrained('ciudades')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('id_centros')->constrained('centros')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('id_madres')->constrained('madres')->cascadeOnDelete()->cascadeOnUpdate();
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
        Schema::dropIfExists('cartillas');
    }
}
