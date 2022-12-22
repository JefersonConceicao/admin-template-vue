<template>
    <div class="container-fluid login">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-10 col-sm-8 mx-auto login-form">
                    <h2 class="text-center logo_h2">
                        <img v-bind="objImage" />
                    </h2>
                    <div class="card-body">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                objImage: {
                    src:  "http://www.transalvador.salvador.ba.gov.br/templates/transalvador/img/logo_transalvador.png",
                    width: '70%',
                }
            }
        }
    }
</script>
<style src="bootstrapValidator/dist/css/bootstrapValidator.min.css">

</style>
<style src="../../css/login.css" scoped>

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
    background: radial-gradient(ellipse at center, #23527c 0%, #004E74 100%);
    overflow-y: auto;
}
</style>