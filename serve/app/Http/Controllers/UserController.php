<?php

namespace App\Http\Controllers;

use App\Models\User;
use Dotenv\Repository\RepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{


    public function register(Request $request)
    {
        $request->validate([
            'nombre' => 'required',
            'email' => 'required|email|unique:users',
            'telefono' => 'required',
            'rol' => 'required',
            'password' => 'required|confirmed'
        ]);

        $User = new user();
        $User->nombre = $request->nombre;
        $User->email = $request->email;
        $User->telefono = $request->telefono;
        $User->rol = $request->rol;
        $User->password = Hash::make($request->password);
        $User->save();
        return response()->json([
            "status" => 1,
            "msg" => "Registro exitoso",
        ]);
    }
    public function login(Request $request)
    {
        $request->validate([
            "email" => "required|email",
            "password" => "required"

        ]);

        $user = User::where("email", "=", $request->email)->first();
        if (isset($user->id)) {
            if (Hash::check($request->password, $user->password)) {
                //get user
                $userData = DB::select("select id, nombre, email, telefono, rol from users where email = '$request->email'");
                //crear tokem
                $token = $user->createToken("auth_token")->plainTextToken;
                return response()->json([
                    "status" => 1,
                    "msg" => "Usuario logeado",
                    "access_token" => $token,
                    "user" => $userData,
                ]);
            } else {
                return response()->json([
                    "status" => 0,
                    "msg" => "Password es incorrecto",
                ], 404);
            }
        } else {
            return response()->json([
                "status" => 0,
                "msg" => "Usuario no registrado",
            ], 404);
        };
    }
    public function userProfile()
    {
        return response()->json([
            "status" => 0,
            "msg" => "Acerca del perfil del usuario",
            "data" => auth()->user()
        ]);
    }

    public function Logout()
    {
        auth()->user()->tokens()->delete();
        return response()->json([
            "status" => 0,
            "msg" => "Cierre de seccion",
        ]);
    }
}
