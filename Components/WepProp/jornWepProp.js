import { debouncedReload, rootStyle } from '../utils.js';

export default class JornWepProp {

    static initSettings() {

        // Use Inferior Materials property
        game.settings.register('JornForFoundryVTT', 'useinferiormaterials', {
            name: 'Use Inferior Material property',
            hint: 'Activates the Inferior Material property on weapons and armor',
            scope: 'world',
            config: true,
            type: Boolean,                       
            default: true,
            onChange: debouncedReload
        });

        // weapons
        CONFIG.DND5E.weaponProperties['inf'] = 'Inferior Material';
        CONFIG.DND5E.weaponProperties['bro'] = 'Broken';
        CONFIG.DND5E.weaponProperties['des'] = 'Destroyed';
        // armor
        // TODO need to find
        
    }

    static initHooks() {


        // Add Inferior Material and Broken weapon properties to weapon properties
        if (game.settings.get('JornForFoundryVTT', 'useinferiormaterials') === true) {
            console.log('Jorn | Initialising Weapon Property Hooks');
            
            //Hooks.on('ready', () => {

              

            //});                      

        }
    }

}

