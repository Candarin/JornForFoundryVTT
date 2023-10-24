
export const intoxStates = ["Sober", "Buzzed", "Jazzed", "Tipsy", "Drunk", "Shitfaced", "FUBAR"];
export const JornModuleName = "Jorn For Foundry VTT";

export const jornIntoxEffectData = [
    {
    label: "Buzzed",
    icon: 'icons/consumables/drinks/alcohol-beer-stein-wooden-brown.webp',
    origin: a.uuid,
    disabled: false,
    duration: { startRound: gameRound },
    flags: { dae: { macroRepeat: "none", specialDuration: [mqExpire], showIcon: true } },
    changes: [{
        key: 'flags.midi-qol.advantage.ability.check.cha',
        value: '',
        mode: 2,
        priority: 20
        }]
    },

    {
        label: "Jazzed",
        icon: 'icons/consumables/drinks/alcohol-beer-stein-wooden-brown.webp',
        origin: a.uuid,
        disabled: false,
        duration: { startRound: gameRound },
        flags: { dae: { macroRepeat: "none", specialDuration: [mqExpire], showIcon: true } },
        changes: [{
            key: 'flags.midi-qol.advantage.ability.check.cha',
            value: '',
            mode: 2,
            priority: 20
        }]
    }
];


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
