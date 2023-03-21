import jornWepProp from './Components/WepProp/jornWepProp.js'
import jornIntoxication from './Components/Intoxication/jornIntoxication.js'

class jornWorld {

}

/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */

Hooks.once('init', () => {
    console.log('Jorn | Initializing Init Hooks and Settings');

    // Weapon Properties - Init settings and hook   
    jornWepProp.initSettings();
    //JornWepProp.initHooks();
 

    // Intoxication - Init settings and hook
    jornIntoxication.initSettings();
    //jornIntoxication.initHooks();


})

Hooks.once('ready', () => {
    console.log('Jorn | Initializing Ready Hooks and Settings');

    // Weapon Properties - Init settings and hook   
    //JornWepProp.initSettings();
    jornWepProp.initHooks();


    // Intoxication - Init settings and hook
    //jornIntoxication.initSettings();
    jornIntoxication.initHooks();


})
