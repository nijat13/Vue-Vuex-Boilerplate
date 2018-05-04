import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from '../locales/en.json'
import fr from '../locales/fr.json'

Vue.use(VueI18n)

const locale = 'en'
const messages = {
  en, fr
}
const i18n = new VueI18n({
  locale,
  messages
})

export default i18n
