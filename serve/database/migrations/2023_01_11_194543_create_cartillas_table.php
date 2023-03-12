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
            //$table->string('primer_apellido');
            //$table->string('segundo_apellido');
            //$table->string('nombre_bebe');
            //$table->dateTime('fecha_nacimiento');
            $table->dateTime('fecha_toma_muestra');
            $table->boolean('nacimiento_termino')->nullable();
            $table->integer('edad_gestional_semanas');
            $table->integer('edad_gestional_dia')->nullable();
            //$table->string('sexo',1);
            $table->integer('muestra');
            $table->double('peso_nacimiento');
            $table->boolean('transfusion')->nullable();
            $table->date('fecha')->nullable();
            $table->string('antibioticos')->nullable();
            //$table->integer('ci');
            //$table->foreignId('id_ciudades')->constrained('ciudades')->cascadeOnUpdate()->cascadeOnDelete();
            $table->foreignId('id_centros')->constrained('centros')->cascadeOnUpdate()->cascadeOnDelete();
           // $table->foreignId('id_madres')->constrained('madres')->cascadeOnDelete()->cascadeOnUpdate();
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
