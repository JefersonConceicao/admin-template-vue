<template>
    <div>
        <div class="row">
            <div class="col-12">
                <h5 class="bold text-transalvador"> Entre ou cadastre-se </h5>
                <p> Preencha seu CPF </p>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <vue-form :state="formstate" @submit.prevent="onSubmit">
                    <div class="row">
                        <div class="col-sm-12 mt-3 ">
                            <div class="form-group">
                                <validate tag="div">
                                    <input 
                                        v-model="model.login"
                                        name="login" class="form-control"
                                        placeholder="preencha seu login ou CPF" 
                                        required 
                                    />

                                    <field-messages 
                                        name="login" show="$invalid && $focused || $invalid && $submitted"
                                        class="text-danger mt-2"
                                    >
                                        <div slot="required"> É obrigatório informar o login </div>
                                    </field-messages>
                                </validate>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-12">
                            <b-button variant="primary" class="btn-block btn-transalvador" type="submit"
                                :disabled="loading">
                                <span v-if="!loading"> Avançar </span>
                                <span v-else> Carregando <span class="el-icon-loading"> </span> </span>
                            </b-button>
                        </div>
                    </div>
                </vue-form>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from "vue"
import VueForm from "vue-form";
import options from "../../../validations/validations.js";
import axios from 'axios';
import toastr from "toastr/build/toastr.min.js"

Vue.use(VueForm, options);

export default {
    name: "login",
    data() {
        console.log(this.$route)
        return {
            formstate: {},
            model: {
                login: this.$route.params.usu_nom_login || "",
            },

            loading: false,
        }
    },
    methods: {
        async onSubmit() {
            if (!this.formstate.$invalid) {
                this.loading = true;

                const { data: response } = await axios.get('/laravel_vue/api/verifyUserExists', {
                    params: {
                        usu_nom_login: this.model.login.replaceAll(".")
                    }
                });

                if (!response.user) {
                    toastr.error("Não foi encntrado usuário com este login ou CPF");

                    this.loading = false;
                    return;
                }

                this.$router.push({ name: 'AuthLoginEtapa2', params: { user: response.user } });
            }
        },
    },
}
</script>

<style src="bootstrapValidator/dist/css/bootstrapValidator.min.css">

</style>
<style type="text/css" scoped>
.login {
    padding-top: 6.5%;
    padding-bottom: 2%;
    width: 100%;
    height: 100vh;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: radial-gradient(ellipse at center, #5A93AF 0%, #004E74 100%);
    overflow-y: auto;
}
</style>
