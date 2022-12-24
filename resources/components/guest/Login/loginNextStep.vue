<template>
    <div>
        <div class="row">
            <div class="col-12">
                <h4 class="bold text-primary"> Olá {{ dataParams.usu_nom_login }}</h4>
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
    mounted(){
        if(!this.$route.params?.usu_nom_login){
            this.$router.push({ name: 'AuthLogin' })
        }
    },
    data() {
        return {
            dataParams: this.$route.params
        }
    }
}

</script>
<style src="../../../css/login.css" scoped></style>
