import Vue from 'vue';
import Vuetify ,  {
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VIcon,
//  VGrid,
  VToolbar,
  VDivider,
  VCard,
  VDataTable,
  VTextField,
  VAvatar,
  //  transitions,
  VTextarea,
//  VJumbotron,
  VAlert,
  VSelect,
  VForm,
  VDialog,
  VResponsive,
  VFlex
} from 'vuetify/lib';
import 'vuetify/src/styles/main.sass';


Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VIcon,
    // VGrid,
    VToolbar,
    VDivider,
    VCard,
    VDataTable,
    VTextField,
    VAvatar,
    // transitions,
    VTextarea,
    // VJumbotron,
    VAlert,
    VSelect,
    VForm,
    VDialog,
    VResponsive,
    VFlex
  }
});

const basecomponet =  {}

export default new Vuetify(basecomponet)
