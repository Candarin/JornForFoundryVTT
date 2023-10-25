
export const intoxStates = ["Sober", "Buzzed", "Jazzed", "Tipsy", "Drunk", "Shitfaced", "FUBAR"];
export const JornModuleName = "Jorn For Foundry VTT";

export const jornIntoxEffectData = [
    {
        name: 'Sober',
        img: 'modules/JornForFoundryVTT/icons/drink_ale1.png',
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
        img: 'modules/JornForFoundryVTT/icons/drink_ale1.png',
        origin: '',
        disabled: false,
    
        flags: { dae: { macroRepeat: 'none', showIcon: true } },
        changes: [
            {
                key: "flags.midi-qol.advantage.ability.save.cha",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.midi-qol.advantage.ability.check.cha",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.adv-reminder.message.ability.save.cha",
                value: "Tipsy: Disadvantage on Charisma saves vs Charm",
                mode: 0,
                priority: 20
            }  
        ]
    },

    {
        name: 'Jazzed',
        img: 'modules/JornForFoundryVTT/icons/drink_ale1.png',
        origin: '',
        disabled: false,
       
        flags: { dae: { macroRepeat: 'none', showIcon: true } },
        changes: [
            {
                key: "flags.midi-qol.advantage.ability.save.cha",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.midi-qol.advantage.ability.check.cha",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.adv-reminder.message.ability.save.cha",
                value: "Tipsy: Disadvantage on Charisma saves vs Charm",
                mode: 0,
                priority: 20
            },  
            {
                key: "flags.midi-qol.disadvantage.ability.save.int",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.midi-qol.disadvantage.ability.check.int",
                mode: 5,
                value: "1",
                priority: 20
            }
        ]
    },

    {
        name: 'Tipsy',
        img: 'modules/JornForFoundryVTT/icons/drink_ale1.png',
        origin: '',
        disabled: false,

        flags: { dae: { macroRepeat: 'none', showIcon: true } },
        changes: [
            {
                key: "flags.midi-qol.advantage.ability.save.cha",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.midi-qol.advantage.ability.check.cha",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.adv-reminder.message.ability.save.wis",
                value: "Shitfaced: Advantage on saves vs fear effects",
                mode: 0,
                priority: 20
            },
            {
                key: "flags.adv-reminder.message.ability.save.cha",
                value: "Tipsy: Disadvantage on Charisma saves vs Charm",
                mode: 0,
                priority: 20
            },  
            {
                key: "flags.midi-qol.disadvantage.ability.save.dex",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.midi-qol.disadvantage.ability.check.dex",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.midi-qol.disadvantage.ability.save.int",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.midi-qol.disadvantage.ability.check.int",
                mode: 5,
                value: "1",
                priority: 20
            }
        ]
    },

    {
        name: 'Drunk',
        img: 'modules/JornForFoundryVTT/icons/drink_ale1.png',
        origin: '',
        disabled: false,

        flags: { dae: { macroRepeat: 'none', showIcon: true } },
        changes: [
            {
                key: "flags.adv-reminder.message.ability.save.wis",
                value: "Shitfaced: Advantage on saves vs fear effects",
                mode: 0,
                priority: 20
            },
            {
                key: 'flags.midi-qol.advantage.ability.check.str',
                mode: 5,
                value: '1',
                priority: 20
            },
            {
                key: "flags.adv-reminder.message.ability.save.cha",
                value: "Shitfaced: Disadvantage on Charisma saves vs Charm",
                mode: 0,
                priority: 20
            },  
            {
                key: "flags.midi-qol.disadvantage.ability.save.dex",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.midi-qol.disadvantage.ability.check.dex",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.midi-qol.disadvantage.ability.save.int",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.midi-qol.disadvantage.ability.check.int",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.midi-qol.disadvantage.ability.save.wis",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.midi-qol.disadvantage.ability.check.wis",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.midi-qol.disadvantage.attack.all",
                value: "1",
                mode: 5,
                priority: 20
            }
        ]
    },

    {
        name: 'Shitfaced',
        img: 'modules/JornForFoundryVTT/icons/drink_ale1.png',
        origin: '',
        disabled: false,

        flags: { dae: { macroRepeat: 'none', showIcon: true } },
        changes: [
            {
                key: "flags.adv-reminder.message.ability.save.wis",
                value: "Shitfaced: Advantage on saves vs fear effects",
                mode: 0,
                priority: 20
            },
            {
                key: 'flags.midi-qol.advantage.ability.check.str',
                mode: 5,
                value: '1',                
                priority: 20
            },
            {
                key: "system.traits.dr.value",
                mode: 0,
                value: "psychic",
                priority: 20
            },
            {
                "key": "flags.adv-reminder.message.ability.save.cha",
                "value": "Shitfaced: Disadvantage on Charisma saves vs Charm",
                "mode": 0,
                "priority": 20
            },                      
            {
                key: "flags.midi-qol.disadvantage.ability.save.dex",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.midi-qol.disadvantage.ability.check.dex",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.midi-qol.disadvantage.ability.save.int",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.midi-qol.disadvantage.ability.check.int",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.midi-qol.disadvantage.ability.save.wis",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.midi-qol.disadvantage.ability.check.wis",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.midi-qol.disadvantage.attack.all",
                value: "1",
                mode: 5,
                priority: 20
            },
            {
                key: "system.attributes.movement.all",
                mode: 0,
                value: "/2",
                priority: 20
            }
        ]
    },

    {
        name: 'FUBAR',
        img: 'modules/JornForFoundryVTT/icons/drink_ale1.png',
        origin: '',
        disabled: false,

        flags: { dae: { macroRepeat: 'none', showIcon: true } },
        changes: [
            {
                key: "system.traits.ci.value",
                mode: 0,
                value: "frightened",
                priority: 20
            },
            {
                key: "system.traits.dr.value",
                mode: 0,
                value: "psychic",
                priority: 20
            },
            {
                "key": "flags.adv-reminder.message.ability.save.cha",
                "value": "FUBAR: Disadvantage on Charisma saves vs Charm",
                "mode": 0,
                "priority": 20
            },
            {
                key: "flags.midi-qol.disadvantage.ability.save.dex",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.midi-qol.disadvantage.ability.check.dex",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.midi-qol.disadvantage.ability.save.int",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.midi-qol.disadvantage.ability.check.int",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.midi-qol.disadvantage.ability.save.wis",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.midi-qol.disadvantage.ability.check.wis",
                mode: 5,
                value: "1",
                priority: 20
            },
            {
                key: "flags.midi-qol.disadvantage.attack.all",
                value: "1",
                mode: 5,
                priority: 20
            },
            {
                key: "system.attributes.movement.all",
                mode: 0,
                value: "/2",
                priority: 20
            }                                                      
        ]
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
