<template>
    <div>
        <div class="row">
            <div class="col-12">
                <h4 class="bold text-primary"> {{ saudacoesUsuario }}</h4>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <router-link to="/auth/login" class="btn btn-primary"> <span class="ti-arrow-left"> </span> Voltar </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "loginNextStep",
    created(){
        if(!this.$route.params.user?.usu_nom_login){
            this.$router.push({ name: 'AuthLogin' })
        }
    },
    data() {
        return {
            dataParams: this.$route.params
        }
    },
    methods: {
        cutStringName(name){
            console.log(name)
            return name.split(' ')[0];
        }
    },
    computed: {
        saudacoesUsuario(){
            let dataAtual = new Date();
            let horario = dataAtual.getHours();

            if(horario < 12){ 
                return `Bom dia,  ${this.cutStringName(this.dataParams.user.usu_nom_usuario)}`;
            }

            if(horario > 12 && horario < 18 ){
                return `Boa tarde, ${this.cutStringName(this.dataParams.user.usu_nom_usuario)}`;
            }

            if(horario > 18 && horario < 23){
                return `Boa noite,  ${this.cutStringName(this.dataParams.user.usu_nom_usuario)}`
            }        
        },
    }
}

</script>
<style src="../../../css/login.css" scoped></style>
