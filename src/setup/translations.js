
class loadTranslations {
  constructor() {
    this.languages = {}
    this.modules = config('app.modules')
    this.availablesLanguages = config('app.languages.availables')
    this.availablesLanguages.forEach((lang) => {
      this.loadModulesTranslations(lang)
    })
  }

  //Load Module apiRoutes
  loadModulesTranslations(lang) {
    this.languages[lang] = {}
      this.modules.forEach(name => {
        let translations = false  
        //Search module in project
        try {            
          translations = require(`src/modules/${name}/_i18n/${lang}/index`).default
          if(translations){
            this.languages[lang][name] = translations
          }          
        } catch (e) {
          //console.log(e)
        }
    })
  }
}

//Define new class
const translations = new loadTranslations()
console.warn(translations.languages)
//response
export default translations.languages