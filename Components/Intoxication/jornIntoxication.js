import { debouncedReload, rootStyle } from '../utils.js';



export const registerSettingsIntox = function () {

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

export function initHooksIntox() {

    // Check settings flag        
    if (game.settings.get('JornForFoundryVTT', 'useintoxicationflags') === true) {
        console.log('Jorn | Initialising Intoxication Hooks - Commenced');

        // Add Intox Save function
        function _intoxChatListeners(html) {                
            html.on("click", '.jorn-drinking-savingthrow', onIntoxSavingThrow.bind(this))
        }


        // ------------ Add Hook to capture when a ChatLog is created
        Hooks.on("renderChatLog", (app, html, data) => _intoxChatListeners(html));



        // ------------ Add hook to restore Intox points / levels when Rest occurs
        /*Hooks.on("dnd5e.preRestCompleted", (actor, data) => {                
            console.log('Jorn | Resting Actor: ');
            console.log(actor);
            console.log('Jorn | Resting data: ');
            console.log(data);

            // Constants
            const intoxStates = [];
            intoxStates.push("Sober", "Buzzed", "Jazzed", "Tipsy", "Drunk", "Shitfaced", "FUBAR");

            // Vars
            let needChatMessage = false;
            let needToUpdateActor = false;
            let intoxPointsNewTotal = 0;
            let intoxPointsToRestore = 0;
            let intoxLevelNew = 0;

            // Get actor Intox data
            //let actorIntoxData = getActorIntoxValues(actor.id);
            actorIntoxData = await getActorIntoxValues(actor.id);
                

            if (actorIntoxData === false) { return }
            console.log(actorIntoxData);
            console.log('Jorn | Retrieved Intox values - Level: ' + actorIntoxData.currentIntoxLevel + ', Points: ' + actorIntoxData.currentIntoxPoints + 'Max: ' + actorIntoxData.currentIntoxPointsMax)


            // Determine if it was a Long or Short rest
            if (data.longRest === true) {
                // Long Rest

                // Restore 50% of IntoxPoints
                // Determine if actor is using tertiary resource for 'Intoxication Points'
                if (actor.system.resources.tertiary.label === 'Intoxication Points') {
                    intoxPointsToRestore = parseInt(actorIntoxData.currentIntoxPointsMax / 2);
                    console.log('Jorn | Intox Points to restore: ' + intoxPointsToRestore);


                    if (actorIntoxData.currentIntoxPoints < actorIntoxData.currentIntoxPointsMax) {
                        intoxPointsNewTotal = actorIntoxData.currentIntoxPoints + intoxPointsToRestore;
                        if (intoxPointsNewTotal > actorIntoxData.currentIntoxPointsMax) { intoxPointsNewTotal = actorIntoxData.currentIntoxPointsMax }
                        console.log('Jorn | Intox Points new total: ' + intoxPointsNewTotal);
                           
                        needToUpdateActor = true;
                        needChatMessage = true;
                    }                        
                }

                if (actorIntoxData.currentIntoxLevel > 0) {
                    // actor is not sober
                    intoxLevelNew = actorIntoxData.actorCurrentIntoxLevel - 4;
                    if (intoxLevelNew < 0) { intoxLevelNew=0 }

                    needToUpdateActor = true;
                    needChatMessage = true;
                }
                    
            } else {
                // Short Rest

                // TODO determine what we want to change
            }

            // Update Actor
            if (needToUpdateActor) { setActorIntoxValues(intoxLevelNew, intoxPointsNewTotal) }

            // Create Chat Message
            if (needChatMessage) {
                let messageContent = `<div class='dnd5e chat-card item-card'>`
                messageContent += `<div class='card-content'>`
                messageContent += `${a.name} is feeling less intoxicated after having a nice rest.`
                messageContent += `<hr>`
                messageContent += `Current Intoxication Points: ${intoxPointsNewTotal} of ${actorIntoxData.currentIntoxPointsMax}<br>`                   
                messageContent += `<p>Intoxication Status:`
                messageContent += `<p style="text-align: center; font-size: larger"><strong> ${intoxStates[actorIntoxData.actorCurrentIntoxLevel]} > ${intoxStates[intoxLevelNew]} </strong></p>`
                messageContent += `</div>`
                messageContent += `</div>`

                // create the message
                if (messageContent !== '') {
                    let chatData = {
                        user: game.user?.id,
                        speaker: ChatMessage.getSpeaker(a),
                        content: messageContent
                    };

                    ChatMessage.create(chatData, {});
                };
            }
              
        });*/

        console.log('Jorn | Initialising Intoxication Hooks - Complete');

        } else {
        console.log('Jorn | Initialising Intoxication Hooks - Skipped');
    }
}   

export let readyHooksIntox = async () => {

    // Check settings flag        
    if (game.settings.get('JornForFoundryVTT', 'useintoxicationflags') === true) {
        // ------------ Add hook to restore Intox points / levels when Rest occurs
        Hooks.on("dnd5e.preRestCompleted", async (actor, data) => {
            console.log('Jorn | Resting Actor: ');
            console.log(actor);
            console.log('Jorn | Resting data: ');
            console.log(data);

            // Constants
            const intoxStates = [];
            intoxStates.push("Sober", "Buzzed", "Jazzed", "Tipsy", "Drunk", "Shitfaced", "FUBAR");

            // Vars
            let needChatMessage = false;
            let needToUpdateActor = false;
            let intoxPointsNewTotal = 0;
            let intoxPointsToRestore = 0;
            let intoxLevelNew = 0;

            // Get actor Intox data
            //let actorIntoxData = getActorIntoxValues(actor.id);
            actorIntoxData = await getActorIntoxValues(actor.id);


            if (actorIntoxData === false) { return }
            console.log(actorIntoxData);
            console.log('Jorn | Retrieved Intox values - Level: ' + actorIntoxData.currentIntoxLevel + ', Points: ' + actorIntoxData.currentIntoxPoints + 'Max: ' + actorIntoxData.currentIntoxPointsMax)


            // Determine if it was a Long or Short rest
            if (data.longRest === true) {
                // Long Rest

                // Restore 50% of IntoxPoints
                // Determine if actor is using tertiary resource for 'Intoxication Points'
                if (actor.system.resources.tertiary.label === 'Intoxication Points') {
                    intoxPointsToRestore = parseInt(actorIntoxData.currentIntoxPointsMax / 2);
                    console.log('Jorn | Intox Points to restore: ' + intoxPointsToRestore);


                    if (actorIntoxData.currentIntoxPoints < actorIntoxData.currentIntoxPointsMax) {
                        intoxPointsNewTotal = actorIntoxData.currentIntoxPoints + intoxPointsToRestore;
                        if (intoxPointsNewTotal > actorIntoxData.currentIntoxPointsMax) { intoxPointsNewTotal = actorIntoxData.currentIntoxPointsMax }
                        console.log('Jorn | Intox Points new total: ' + intoxPointsNewTotal);

                        needToUpdateActor = true;
                        needChatMessage = true;
                    }
                }

                if (actorIntoxData.currentIntoxLevel > 0) {
                    // actor is not sober
                    intoxLevelNew = actorIntoxData.actorCurrentIntoxLevel - 4;
                    if (intoxLevelNew < 0) { intoxLevelNew = 0 }

                    needToUpdateActor = true;
                    needChatMessage = true;
                }

            } else {
                // Short Rest

                // TODO determine what we want to change
            }

            // Update Actor
            if (needToUpdateActor) { setActorIntoxValues(intoxLevelNew, intoxPointsNewTotal) }

            // Create Chat Message
            if (needChatMessage) {
                let messageContent = `<div class='dnd5e chat-card item-card'>`
                messageContent += `<div class='card-content'>`
                messageContent += `${a.name} is feeling less intoxicated after having a nice rest.`
                messageContent += `<hr>`
                messageContent += `Current Intoxication Points: ${intoxPointsNewTotal} of ${actorIntoxData.currentIntoxPointsMax}<br>`
                messageContent += `<p>Intoxication Status:`
                messageContent += `<p style="text-align: center; font-size: larger"><strong> ${intoxStates[actorIntoxData.actorCurrentIntoxLevel]} > ${intoxStates[intoxLevelNew]} </strong></p>`
                messageContent += `</div>`
                messageContent += `</div>`

                // create the message
                if (messageContent !== '') {
                    let chatData = {
                        user: game.user?.id,
                        speaker: ChatMessage.getSpeaker(a),
                        content: messageContent
                    };

                    ChatMessage.create(chatData, {});
                };
            }

        });

    }
}

export async function getActorIntoxValues(actorId) {
    // Vars
    let actorCurrentIntoxLevel = 0;
    let actorCurrentIntoxPoints = 0;
    let actorCurrentIntoxPointsMax = 0;

    // Get actor
    let a = game.actors.get(actorId);
    console.log('Jorn | Found Actor by id:')
    console.log(a);
    // Check that actor exists
    if (typeof a === 'undefined') {
        return false;
    } else {    // Actor fouond

        // Get Intox Level
        try {
            tempFlag = await a.getFlag('JornForFoundryVTT', 'currentIntoxLevel');

            // validate value
            if (typeof tempFlag === 'undefined') {
                // val is undefined, i.e. 0
                actorCurrentIntoxLevel = 0;
                await a.setFlag('JornForFoundryVTT', 'currentIntoxLevel', 0);
            } else {
                // val is ok
                actorCurrentIntoxLevel = tempFlag;
            }
        } catch (error) {
            // flag doesn't exist

            // Create flag if it doesn't exist
            actorCurrentIntoxLevel = 0;
            await a.setFlag('JornForFoundryVTT', 'currentIntoxLevel', 0);
        }

        // Get Intox Points & Max            
        actorCurrentIntoxPoints = a.system.resources.tertiary.value;
        // check if it's undefined (happens when val is 0)
        if (typeof actorCurrentIntoxPoints === 'undefined') { actorCurrentIntoxPoints = 0 }

        actorCurrentIntoxPointsMax = a.system.resources.tertiary.max;
        if (typeof actorCurrentIntoxPointsMax === 'undefined') { actorCurrentIntoxPointsMax = 0 }

        // Populate structure
        const actorIntoxData = {
            currentIntoxLevel: actorCurrentIntoxLevel,
            currentIntoxPoints: actorCurrentIntoxPoints,
            currentIntoxPointsMax: actorCurrentIntoxPointsMax
        };

        console.log('Jorn | Values found for actor: ' + actorCurrentIntoxLevel + ', ' + actorCurrentIntoxPoints + ', ' + actorCurrentIntoxPointsMax);

        // Return data
        return actorIntoxData;
    }
    return false;
}

export async function setActorIntoxValues(currentIntoxLevel, currentIntoxPoints) {    
    await a.setFlag('JornForFoundryVTT', 'currentIntoxLevel', currentIntoxLevel);
    await a.update({ 'system.resources.tertiary.value': currentIntoxPoints, });
}

export async function onIntoxSavingThrow(event) {
    console.log('Jorn | Intox Saving Throw button click captured');
    /* Passed Values
        data-actor-id=${actor.id} 
        data-drink-strength=${selectedDrinkTypeStrength} 
        data-saving-throw-dc=${intoxSaveDC}
    */
    // Constants
    const intoxStates = [];
    intoxStates.push("Sober", "Buzzed", "Jazzed", "Tipsy", "Drunk", "Shitfaced", "FUBAR");

    // Variables
    let actorCurrentIntoxLevel = 0;
    let actorNewIntoxLevel = 0;
    let actorIntoxLevelsToAdd = 0;


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
    console.log('Jorn | Saving Throw result: ' + rollResult.total);

    // Compare Result to DC
    if (rollResult.total >= rollDC) {
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
                user: game.user?.id,
                speaker: ChatMessage.getSpeaker(a),
                content: messageContent
            };
           
            ChatMessage.create(chatData, {});
        };

    } else {
        // Failed

        // How much did they fail by
        let saveDif = rollDC - rollResult.total;
        switch (true) {                        
            case saveDif >= 1 && saveDif <=5:            
                actorIntoxLevelsToAdd = 1;
                break;
            case saveDif >= 6 && saveDif <= 10:          
                actorIntoxLevelsToAdd = 2;
                break;
            case saveDif >= 11 && saveDif <= 12:          
                actorIntoxLevelsToAdd = 3;
                break;
            case saveDif >= 13:
                actorIntoxLevelsToAdd = 4;
            default:
            // code block
        }

        // Get new intox level
        actorNewIntoxLevel = actorCurrentIntoxLevel + actorIntoxLevelsToAdd;

        //Check Intox Level hasn't shifted past the max
        if (actorNewIntoxLevel > 6) { actorNewIntoxLevel = 6 }

        // Update actor
        await a.setFlag('JornForFoundryVTT', 'currentIntoxLevel', actorNewIntoxLevel);

        // Apply effect
            // Remove old effect
            // Add new effect
            // TODO
        
        // create message content
        let messageContent = `<div class='dnd5e chat-card item-card'>`
        messageContent += `<div class='card-content'>`
        messageContent += `${a.name} failed the save by ${saveDif}!` 
        messageContent += `<hr>`
        messageContent += `<p>Intoxication Status:`
        messageContent += `<p style="text-align: center; font-size: larger"><strong> ${intoxStates[actorCurrentIntoxLevel]} > ${intoxStates[actorNewIntoxLevel] } </strong></p>`
        messageContent += `</div>`
        messageContent += `</div>`

        // create the message
        if (messageContent !== '') {
            let chatData = {
                user: game.user?.id,
                speaker: ChatMessage.getSpeaker(a),
                content: messageContent
            };

            ChatMessage.create(chatData, {});
        };
    }

    // Blue Effect
    // document.getElementById("board").style.filter = "blur(10px)"


    /*
    Hooks.on("dnd5e.preRestCompleted", (actor) => {
        
    });
    */

} 



