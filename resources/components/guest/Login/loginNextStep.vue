<template>
    <div>
        <div class="row mb-3">
            <div class="col-12">
                <a 
                    href="javascript:void(0)" 
                    @click="backFirstStep"
                    class="text-transalvador"
                > 
                    <span class="ti-arrow-left"></span> 
                </a>
                
                <h5 class="text-transalvador mt-3"> {{ saudacoesUsuario }} </h5>
                <p> Preencha sua senha </p> 
            </div>
        </div>

        <vue-form :state="formstate" @submit.prevent="onSubmit">
            <div class="row mt-3">
                <div class="col-md-12">
                    <div class="form-group">
                        <validate tag="div">
                            <input 
                                type="password"
                                class="form-control"
                                v-model="model.password"
                                required
                                name="senhaUser"
                                minlength="3"
                            />

                            
                            <field-messages 
                                name="senhaUser" 
                                show="$invalid && $focused || $invalid && $submitted"
                                class="text-danger mt-2"
                            >
                                <div slot="required"> É obrigatório informar a senha </div>
                                <div slot="minlength"> A senha deve possúir mais de 3 caracteres </div>
                            </field-messages>
                        </validate>

                        <p class="pull-right mt-1 mb-3"> Não lembro minha senha </p>    
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-12">
                    <button type="submit" class="btn btn-transalvador btn-block">
                        Entrar  <i class="fa fa-fw fa-sign-in"></i>
                    </button>
                </div>
            </div>
        </vue-form>
    </div>
</template>
<script>

export default {
    name: "loginNextStep",
    created() {
        if (!this.$route.params.user?.usu_nom_login) {
            this.$router.push({ name: 'AuthLogin' });
        }
    },
    data() {
        return {
            dataParams: this.$route.params,
            formstate: {},
            model: {
                password: ""
            }
        }
    },
    methods: {
        async onSubmit(){
            
        },
        cutStringName(name) {
            return !!name ? name.split(' ')[0] : "";
        },
        backFirstStep() {
            this.$router.push({
                name: 'AuthLogin',
                params: {
                    usu_nom_login: this.dataParams.user.usu_nom_login
                }
            })
        }
    },
    computed: {
        saudacoesUsuario() {
            let dataAtual = new Date();
            let horario = dataAtual.getHours();

            if (horario < 12) {
                return `Bom dia, ${this.cutStringName(this.dataParams.user?.usu_nom_usuario)}`;
            }

            if (horario > 12 && horario < 18) {
                return `Boa tarde, ${this.cutStringName(this.dataParams.user?.usu_nom_usuario)}`;
            }

            if (horario > 18 && horario < 23) {
                return `Boa noite, ${this.cutStringName(this.dataParams.user?.usu_nom_usuario)}`
            }

            return `Olá, ${this.cutStringName(this.dataParams.user?.usu_nom_usuario)}`
        },
    }
}

</script>
<style src="../../../css/login.css" scoped>

</style>
