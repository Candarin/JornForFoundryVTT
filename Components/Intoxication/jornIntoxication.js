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
            console.log('Jorn | Initialising Intoxication Hooks - Commenced');

            // Add Intox Save function
            function _intoxChatListeners(html) {                
                html.on("click", '.jorn-drinking-savingthrow', onIntoxSavingThrow.bind(this))
            }

            // Add Hook to capture when a ChatLog is created
            Hooks.on("renderChatLog", (app, html, data) => _intoxChatListeners(html));

            console.log('Jorn | Initialising Intoxication Hooks - Complete');

        } else {
            console.log('Jorn | Initialising Intoxication Hooks - Skipped');
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
    console.log('Jorn | Intox Saving Throw Data: ' + this);
    console.log('Jorn | Intox Saving Throw Data: ');
    console.log(event);

    let actorId = ($(this).data('actor-id'));
    let a = game.actors.get(actorId);
    
    console.log('Jorn | actor: ' + actorId + ' ' + a.name);

    a.rollAbilitySave("con");

} 