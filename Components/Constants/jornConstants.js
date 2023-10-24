
export const intoxStates = ["Sober", "Buzzed", "Jazzed", "Tipsy", "Drunk", "Shitfaced", "FUBAR"];
export const JornModuleName = "Jorn For Foundry VTT";

export const jornIntoxEffectData = [
    {
        name: 'Sober',
        img: 'icons/consumables/drinks/alcohol-beer-stein-wooden-brown.webp',
        origin: '',
        disabled: false,

        flags: { dae: { macroRepeat: 'none', showIcon: true } },
        changes: [{
            key: 'flags.midi-qol.advantage.ability.check.cha',
            value: '',
            mode: 2,
            priority: 20
        }]
    },

    {
        name: 'Buzzed',
        img: 'icons/consumables/drinks/alcohol-beer-stein-wooden-brown.webp',
        origin: '',
        disabled: false,
    
        flags: { dae: { macroRepeat: 'none', showIcon: true } },
        changes: [{
            key: 'flags.midi-qol.advantage.ability.check.cha',
            value: '',
            mode: 2,
            priority: 20
            }]
    },

    {
        name: 'Jazzed',
        img: 'icons/consumables/drinks/alcohol-beer-stein-wooden-brown.webp',
        origin: '',
        disabled: false,
       
        flags: { dae: { macroRepeat: 'none', showIcon: true } },
        changes: [{
            key: 'flags.midi-qol.advantage.ability.check.cha',
            value: '',
            mode: 2,
            priority: 20
        }]
    },

    {
        name: 'Tipsy',
        img: 'icons/consumables/drinks/alcohol-beer-stein-wooden-brown.webp',
        origin: '',
        disabled: false,

        flags: { dae: { macroRepeat: 'none', showIcon: true } },
        changes: [{
            key: 'flags.midi-qol.advantage.ability.check.cha',
            value: '',
            mode: 2,
            priority: 20
        }]
    },

    {
        name: 'Drunk',
        img: 'icons/consumables/drinks/alcohol-beer-stein-wooden-brown.webp',
        origin: '',
        disabled: false,

        flags: { dae: { macroRepeat: 'none', showIcon: true } },
        changes: [{
            key: 'flags.midi-qol.advantage.ability.check.cha',
            value: '',
            mode: 2,
            priority: 20
        }]
    },

    {
        name: 'Shitfaced',
        img: 'icons/consumables/drinks/alcohol-beer-stein-wooden-brown.webp',
        origin: '',
        disabled: false,

        flags: { dae: { macroRepeat: 'none', showIcon: true } },
        changes: [{
            key: 'flags.midi-qol.advantage.ability.check.cha',
            value: '',
            mode: 2,
            priority: 20
        }]
    },

    {
        name: 'FUBAR',
        img: 'icons/consumables/drinks/alcohol-beer-stein-wooden-brown.webp',
        origin: '',
        disabled: false,

        flags: { dae: { macroRepeat: 'none', showIcon: true } },
        changes: [{
            key: 'flags.midi-qol.advantage.ability.check.cha',
            value: '',
            mode: 2,
            priority: 20
        }]
    }

];

// duration: { startRound: gameRound },

/* Example to use for ActiveEffects
const noteControls = [
    {
        name: constants.moduleName,
        title: 'ForienQuestLog.QuestLog.Title',
        icon: 'fas fa-scroll',
        visible: true,
        onClick: () => ViewManager.questLog.render(true, { focus: true }),
        button: true
    },
    {
        name: 'forien-quest-log-floating-window',
        title: 'ForienQuestLog.QuestTracker.Title',
        icon: 'fas fa-tasks',
        visible: true,
        onClick: async () => { await game.settings.set(constants.moduleName, settings.questTrackerEnable, true); },
        button: true
    }
];
*/
