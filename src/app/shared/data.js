var video1 = {link : 'https://www.youtube.com/embed/Z81FMWgnHaI', "tags": ['pekka', 'dark_prince', 'prince'], rate: 0,}
var video2 = {link : "https://www.youtube.com/embed/OcsTxNrZJLc", "tags": ['skeleton'], rate: 5}
var video3 = {link : "https://www.youtube.com/embed/0yKCFZHh3f4", "tags": ['hog_rider'], rate: 3.25}
var video4 = {link : "https://www.youtube.com/embed/bOfa0cYM0tI", "tags": ['goblins'], rate: 3.25}
var video5 = {link : "https://www.youtube.com/embed/GnR9oSyU2eY", "tags": ['giant'], rate: 3.99}
var video6 = {link : "https://www.youtube.com/embed/iYKmPD2_yb0", "tags": ['golem'], rate: 3.25}
var video7 = {link : "https://www.youtube.com/embed/zTO3qC_9R1c", "tags": ['wizard', 'electric_wizard'], rate: 3.25}
var video8 = {link : "https://www.youtube.com/embed/x9u8yuoUoWw" , "tags": ['baby_dragon'], rate: 3.25}
var video9 = {link : "https://www.youtube.com/embed/RUdasc71_K4" , "tags": ['golem'], rate: 3.25};
var video10 = {link : "https://www.youtube.com/embed/9EmD2gJAvEM" , "tags": ['electric_wizard', 'pekka'], rate: 3.25}

var video11 = {link : "https://www.youtube.com/embed/F3-CG_cODpw" , "tags": ['3musketeers', 'electric_wizard', 'battle_ramp', 'hog_rider', 'hor'], rate: 3.25}
var video12 = {link : "https://www.youtube.com/embed/lYhuuGJrXZc" , "tags": ['sparky', 'minion_horde', 'giant'], rate: 3.25}
var video13 = {link : "https://www.youtube.com/embed/kI-vI-wbx7U" , "tags": ['hog_rider', 'fireball', 'canon', 'museteer'], rate: 3.25}
var video14 = {link : "https://www.youtube.com/embed/v-FNWCsOK_k" , "tags": ['golem', 'collector', 'dark_prince', 'prince', 'mininios', 'zap', 'baby_dragon', 'tornado'], rate: 3.25}
var video15 = {link : "https://www.youtube.com/embed/AhF8gS-0v-4" , "tags": ['valkiry', 'bowler', 'freeze', 'grave_yard'], rate: 3.25}
var video16 = {link : "https://www.youtube.com/embed/Z81FMWgnHaI" , "tags": ['pekka', 'prince', 'dark_prince', 'collector', 'baby_dragon', 'mininos'], rate: 3.25}
var video17 = {link : "https://www.youtube.com/embed/p3wP7zjkHlo" , "tags": ['balloon' ], rate: 3.25}
var video18 = {link : "https://www.youtube.com/embed/oywlFECfEcs" , "tags": ['mortar', 'tornado', 'rocket', 'knight', 'zap', 'bats', 'log',], rate: 3.25}
var video19 = {link : "https://www.youtube.com/embed/DSuD5ENgaOA" , "tags": ['executioner', 'grave_yard', 'mega_minion', 'zap', 'tornado'], rate: 3.25}
var video20 = {link : "https://www.youtube.com/embed/-JqYfyi9tWg" , "tags": ['grave_yard', 'executioner', 'zap', 'tombstone', 'poison', 'log', "ice_wizard"], rate: 3.25}

var videosList = [video1, video2, video3, video4, video5, video6, video7, video8, video9, video10,
    video11, video12, video13, video14, video15, video16, video17, video18, video19, video20]


var unitIdList = ["pekka", "prince", "wizard", "electro", "golem", "goblins", "goblin_gang", "hog_rider", "skeleton",
"knight", "lumberjack", "InfernoDragon", "Flying_machine", "baby_dragon", "minion Horde", "minions", "lava",
"bats", "mini_pekka", "baloon", "rage", "rocket", "log", "freeze", "tornado", "duplicate", "collector",
"zap", "x_bow", "executioner", "bomb_tower", "mortar", "tombstone", "3musketeers", "battle_ramp",
 "magic_archer", "sparky", "fire_ball", "canon", "musketeer", "grave_yard", "bowler", "valkiry", "mega_minion",
 "poison", "ice_golem", "ice_wizard", "inferno_tower", "mirror"]


 var unitsByType = {ground: ["3musketeers", "battle_ramp", "magic_archer", "sparky", "executioner", "pekka", "prince",
                            "wizard", "electro", "giant", "golem", "goblins", "goblin_gang", "musketeer", "grave_yard",
                             "valkiry", "mega_minion", "ice_golem", "ice_wizard", "bowler", "hog_rider", "skeleton",
                             "knight", "lumberjack", "mini_pekka", ],
                   air: ["InfernoDragon", "Flying_machine", "baby_dragon", "minion Horde", "minions", "lava",
                        "baloon", "bats", ],
                   towers: ["inferno_tower", "bomb_tower", "canon", "mortar", "tombstone", "x_bow", "collector",],
                   spells: ["mirror", "poison", "fire_ball", "zap", "rage","rocket", "log", "freeze", "tornado", "duplicate", ]
                   }
                                    

function createUnitObject(name, category, id) {
    var unitObj = {
        'id': id,
        'name': name,
        'image': '',
        'category': category,
        'price': 0,
        'description': ""
        
    }
}

var unit = createUnitObject("knight", "ground", 3)
console.log(unit)