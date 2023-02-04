import JornWepProp from './Components/WepProp/jornwepprop.js'

class JornWorld {

}

Hooks.once('init', () => {

    /** initilize settings */
    JornWepProp.initSettings();
    /** -------- */


    /** initilize hooks */
    JornWepProp.initHooks();
    /** -------- */
})
