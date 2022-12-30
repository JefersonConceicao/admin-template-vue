import 'es6-promise/auto';
import Vue from 'vue';
import Vuex from 'vuex';

import ModuleLogin from './modules/login';
import ModuleTheme from './modules/theme';

Vue.use(Vuex);

//=======vuex store start===========
const store = new Vuex.Store({
    modules:{
        login: ModuleLogin,
        theme: ModuleTheme
    }   
});

//=======vuex store end===========
export default store
