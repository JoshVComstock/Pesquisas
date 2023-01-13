<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRellamadosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('rellamados', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_cartillas')->constrained('cartillas')->cascadeOnUpdate()->cascadeOnDelete();
            $table->string('nombre_bebe');
            $table->date('fn');
            $table->date('ft');
            $table->date('ing');
            $table->string('proc');
            $table->double('tsh');
            $table->date('fnot');
            $table->string('cs');
            $table->string('tipo_muestra');
            $table->string('resultado');
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
        Schema::dropIfExists('rellamados');
    }
}
