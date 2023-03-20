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
        
    }

    static initHooks() {


        // Add Inferior Material and Broken weapon properties to weapon properties
        if (game.settings.get('JornForFoundryVTT', 'useinferiormaterials') === true) {

            
            // Hooks.on('ready', () => {

                // weapons
                CONFIG.DND5E.weaponProperties['inf'] = 'Inferior Material';
                CONFIG.DND5E.weaponProperties['bro'] = 'Broken';
                CONFIG.DND5E.weaponProperties['des'] = 'Destroyed';
                // armor
                CONFIG.DND5E.armorProperties['inf'] = 'Inferior Material';
                CONFIG.DND5E.armorProperties['bro'] = 'Broken';
                CONFIG.DND5E.armorProperties['des'] = 'Destroyed';
                

            // });                      



        }
    }

}

