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
            function _intoxChatListeners(html) {
                html.on("click", '.jorn-drinking-savingthrow', onIntoxSavingThrow.bind(this))
            }

            Hooks.on("renderChatLog", (app, html, data) => _intoxChatListeners(html));                                      
        }
    }   
}

export async function onIntoxSavingThrow(event) {
    console.log('Jorn | Intox Saving Throw button click captured');
    /* Passed Values
        data-actor-id=${actor.id} 
        data-drink-strength=${selectedDrinkTypeStrength} 
        data-saving-throw-dc=${intoxSaveDC}
    */
    let actorId = ($(this).data('actor-id'));

    let a = game.actors.get(actorId);

    a.rollAbilitySave("con");

}