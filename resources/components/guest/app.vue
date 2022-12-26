<template>
    <div>
        <div class="container-header-image-guest">
            <img v-bind="propImageHeader" />
        </div>

        <div class="login"> </div>
        
        <div class="container-fluid">
            <div class="container">
                <div class="row mt-5">
                    <div class="col-lg-8 col-12 col-sm-8 mt-5 login-form px-3">
                        <div class="card-body">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            propImageHeader: {
                src: "https://transonline2.salvador.ba.gov.br/zona-verde/web/images/topos/zona-verde-logo.png",
                style: {
                    width: '100%',
                },
                alt: "header-image"
            }
        }
    }
}
</script>


<style src="toastr/build/toastr.min.css"></style>
<style src="bootstrapValidator/dist/css/bootstrapValidator.min.css"></style>


<style src="../../css/login.css" scoped> </style>
<style  lang="scss" src="../../sass/utils/app.scss" > </style>

<style scoped>
.login {
    padding-top: 6.5%;
    padding-bottom: 2%;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    background: url('https://transonline2.salvador.ba.gov.br/zona-verde/web/images/zona-verde/ssa-zona-verde.png');
    overflow-y: auto;
    opacity: 0.6;
    filter: blur(10px);
    z-index: -1;
    background-size: 2024px;
}
</style>