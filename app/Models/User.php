<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use Notifiable, HasApiTokens;

    protected $table = 'usu_usuario';
    protected $primaryKey = 'usu_id_usu';

    /**
     * @var array
     */
    protected $fillable = [
        'usu_nom_usuario',
        'usu_nom_login',
        'usu_num_senha',
        'usu_flg_ativo',
        'usu_dat_ultimo_acesso',
        'usu_id_gru',
        'usu_dat_ativacao_cadastro',
        'usu_dat_reset_senha',
        'usu_flg_reset_senha',
        'usu_dat_cadastro',
        'usu_id_gpe',
        'usu_cod_validacao',
        'usu_flg_excluido',
    ];

    /**
     * @var array
     */
    protected $hidden = [
        'usu_num_senha', 'usu_cod_validacao',
    ];

    public function getAuthPassword()
    {
        return Hash::make($this->usu_num_senha);
    }

}
