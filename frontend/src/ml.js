import Vue from 'vue'
import { MLInstaller, MLCreate, MLanguage } from 'vue-multilanguage'
// import { MLBuilder } from 'vue-multilanguage - this should be put in a file where multilanguage is needed '

Vue.use(MLInstaller)

export default new MLCreate({
  initial: 'english',
  save: process.env.NODE_ENV === 'production',
  languages: [
    new MLanguage('english').create({
      login: {
        welcome:'Welcome back, please login to your account.',

      },
    }),
   /* new MLanguage('portuguese').create({
      title: 'Oi {0}!',
      msg: 'Você tem {f} amigos e {l} curtidas'
    })*/
  ],
  middleware: (component, path) => {
    // you can mutate path here
    // you should return path updated
    return path
  }
})