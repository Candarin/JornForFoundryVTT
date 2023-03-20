import { debouncedReload, rootStyle } from '../utils.js';

export default class jornIntoxication {

    static initSettings() {

        // Use Inferior Materials property
        game.settings.register('JornForFoundryVTT', 'useintoxicationflags', {
            name: 'Use Intoxication Rules',
            hint: 'Activates the Intoxication flags on actors for use with drinking rules.',
            scope: 'world',
            config: true,
            type: Boolean,
            default: true,
            onChange: debouncedReload
        });

    }

    static initHooks() {

        // Check settings flag        
        if (game.settings.get('JornForFoundryVTT', 'useintoxicationflags') === true) {

            // Add Intox Save callback
            Hooks.on('ready', () => {

                $(document).on('click', '.jorn-drinking-savingthrow', function () {
                    console.log('JORN: Intox Saving Throw button click captured');
                    /* Passed Values
                        data-actor-id=${actor.id} 
                        data-drink-strength=${selectedDrinkTypeStrength} 
                        data-saving-throw-dc=${intoxSaveDC}
                    */

                    //var x = ($(this).data('actor-id'));



                });

                


            });



        }
    }

}