<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use Auth;

class LoginController extends Controller
{
    /**
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    protected function getCredentials(Request $request)
    {
        return $request->only($this->usu_nom_login, 'usu_num_senha');
    }

    public function username()
    {
        return 'usu_nom_login';
    }

    public function login(Request $request)
    {
        try{
            $response = ['error' =>  false, 'msg' => 'Credenciais incorretas', 'authenticated' => false];

            $authenticated = Auth::attempt([ 
                'usu_nom_login' => $request->usu_nom_login,
                'password' => md5($request->usu_num_senha),
            ]);

            if(!$authenticated){
                return response()->json($response);
            }

            $userAuthenticated = User::where(['usu_nom_login' => $request->usu_nom_login])->first();

            if(!$userAuthenticated->usu_flg_ativo){

                $response['msg'] = "Usuário inativo";
                return response()->json($response);
            }

            $response['authenticated'] = true;
            $response['msg'] = 'Usuário authenticado';
            $response['token'] = $userAuthenticated->createToken('AUTH_TOKEN')->plainTextToken;
            $response['dadosUser'] = $userAuthenticated;

            return response()->json($response);

        }catch(\Exception $error){
            return response()->json([
                'error' => true,
                'authenticated' => false,
                'msg' => 'Ocorreu um erro interno, tente novamente mais tarde',
                'error_message' => $error->getMessage()
            ]); 
        }
    }
}
