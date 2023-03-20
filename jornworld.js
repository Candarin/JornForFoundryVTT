import JornWepProp from './Components/WepProp/jornwepprop.js'
import jornIntoxication from './Components/Intoxication/jornIntoxication.js'

class JornWorld {

}

/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */

Hooks.once('init', () => {
    console.log('Jorn | Initializing Jorn');

    // Weapon Properties - Init settings and hook   
    JornWepProp.initSettings();
    JornWepProp.initHooks();
 

    // Intoxication - Init settings and hook
    jornIntoxication.initSettings();
    jornIntoxication.initHooks();


})
