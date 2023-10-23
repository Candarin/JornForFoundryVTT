import jornWepProp from './Components/WepProp/jornWepProp.js'
import { registerSettingsIntox, initHooksIntox, readyHooksIntox, jornIntox } from './Components/Intoxication/jornIntoxication.js'


/* ------------------------------------ */
/* Initialize module					*/
/* ------------------------------------ */
Hooks.once('init', () => {
    console.log('Jorn | Initializing Init Hooks and Settings');

    // Weapon Properties - Init settings and hook   
    jornWepProp.initSettings();
    //JornWepProp.initHooks();
 

    // Intoxication - Init settings and hook
    registerSettingsIntox();
    initHooksIntox();


})



/* ------------------------------------ */
/* Setup module							*/
/* ------------------------------------ */
Hooks.once('setup', function () {


})



/* ------------------------------------ */
/* Ready    							*/
/* ------------------------------------ */
Hooks.once('ready', async function () {
    console.log('Jorn | Initializing Ready Hooks');

    // Weapon Properties - Init settings and hook   
    jornWepProp.initHooks();


    // Intoxication - Init settings and hook
    //jornIntoxication.initSettings();
    //jornIntoxication.initHooks();
    readyHooksIntox();

    // expose Intox functions
    game.modules.get("Jorn for Foundry VTT").api = jornIntox;

})
