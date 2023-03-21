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
    // Variables
    let actorCurrentIntoxLevel = 0;


    console.log('Jorn | Intox Saving Throw Data: ');
    // console.log(event);

    let actorId = event.target.dataset.actorId;
    let rollDC = event.target.dataset.savingThrowDc;    
    let a = game.actors.get(actorId);
    console.log('Jorn | Intox Saving Throw Data: Actor:' + actorId + ', ' + a.name + ', Save DC: ' + rollDC);

    // Get Actor data
    // Check for current intox level flag
    try {
        tempFlag = await a.getFlag('JornForFoundryVTT', 'currentIntoxLevel');

        // validate value
        if (typeof tempFlag === 'undefined') {
            // val is null
            actorCurrentIntoxLevel = 0
            await a.setFlag('JornForFoundryVTT', 'currentIntoxLevel', 0);
            console.log('Jorn | actorCurrentIntoxLevel (created flag): ' + actorCurrentIntoxLevel);
        } else {
            // val is ok
            actorCurrentIntoxLevel = tempFlag;
            console.log('Jorn | actorCurrentIntoxLevel (found flag): ' + actorCurrentIntoxLevel);
        }
    } catch (error) {
        // flag doesn't exist

        // Create flag if it doesn't exist
        actorCurrentIntoxLevel = 0;
        await a.setFlag('JornForFoundryVTT', 'currentIntoxLevel', 0);
        console.log('Jorn | actorCurrentIntoxLevel (error, created flag): ' + actorCurrentIntoxLevel);
    }

    // Call for saving throw
    let rollResult = await a.rollAbilitySave("con");
    //console.log(rollResult);

    // Compare Result to DC
    if (rollResult >= rollDC) {
        // Passed
        // create message content
        let messageContent = `<div class='dnd5e chat-card item-card'>`
        messageContent += `<div class='card-content'>`
        messageContent += `${a.name} passes the save!`       
        messageContent += `</div>`
        messageContent += `</div>`

        // create the message
        if (messageContent !== '') {
            let chatData = {
                //user: game.user._id,
                speaker: a,
                content: messageContent
            };
           
            ChatMessage.create(chatData, {});
        };

    } else {
        // Failed

        // How much did they fail by
        let saveDif = rollDC - rollresult;
        switch (saveDif) {
            case 1:
            case 2:
            case 3:
            case 4:
                // code block
                break;
            case 5:
            case 6:
            case 7:
            case 8:
                // code block
                break;
            default:
            // code block
        }
        

        // Update actor

        // Apply effect

        
        // create message content
        let messageContent = `<div class='dnd5e chat-card item-card'>`
        messageContent += `<div class='card-content'>`
        messageContent += `${a.name} failed the save!`
        messageContent += `</div>`
        messageContent += `</div>`

        // create the message
        if (messageContent !== '') {
            let chatData = {
                //user: game.user._id,
                speaker: a,
                content: messageContent
            };

            ChatMessage.create(chatData, {});
        };
    }

} 