export const questions = [
    "Workday?",
    "What time is it?",
    "Where are you?",
    // "How's morale?",
    "How's the weather?",
]

export const answerSet = {
    "weekday": '👩‍💻',
    "weekend": '🥳',
    "happy": '😎',
    "sad": '😔',
    "sunny": '🌞',
    "raining": '🌧',
    "morning": '🌅',
    "night": '🌝',
    "NY": '🗽',
    "SF": '🌉'
}

const ans1 = [answerSet.weekday, answerSet.weekend];
const ans2 = [answerSet.morning, answerSet.night];
// const ans3 = [answerSet.happy, answerSet.sad];
const ans3 = [answerSet.NY, answerSet.SF];
const ans4 = [answerSet.sunny, answerSet.raining];

export const answers = [ans1, ans2, ans3, ans4];

export const outcome_list = [
    "run in the park🌳",
    "call Tanya & Brian💍",
    "get Philz☕️",
    "cuddle w Max🥰",
    "do HH w work besties🍻",
    "lift w Lord Farquaad🏋️‍♀️",
    "watch sunset w Max🌆",
    "talk w Max👩‍❤️‍💋‍👨",
    "brunch w Hailey😋",
    "vacay w Max✈️",
    "go wine tasting🍷👩‍❤️‍💋‍👨",
    "visit Parents & Cookie👨‍👩‍👧‍👧🐶",
    "clerb w Rachie🪩",
    "call da roomiez❤️",
    "get silly w Meg😈",
    "call backlot❤️",
]

export const pix = [
    require("./images/run.jpg"),
    require("./images/TanyaAndBrian.jpg"), 
    require("./images/philz.jpg"), 
    require("./images/cuddlez.jpg"),
    require("./images/workBesties.jpg"),  
    require("./images/farquaad.jpg"), 
    require("./images/sunset.jpg"),
    require("./images/first_night.jpg"), 
    require("./images/hailey.jpg"),
    require("./images/vacay.jpg"),
    require("./images/vineyard.jpg"),
    require("./images/famNcookie.jpg"), 
    require("./images/rachie.jpg"),
    require("./images/roomiez.jpg"), 
    require("./images/megParty.jpg"), 
    require("./images/backlot.jpg"),
];

export const outcomes = {
    "👩‍💻, 🌅, 🗽, 🌞":  0,
    "👩‍💻, 🌅, 🗽, 🌧":  1,
    "👩‍💻, 🌅, 🌉, 🌞":  2,
    "👩‍💻, 🌅, 🌉, 🌧":  3,
    "👩‍💻, 🌝, 🗽, 🌞":  4,
    "👩‍💻, 🌝, 🗽, 🌧":  5,
    "👩‍💻, 🌝, 🌉, 🌞":  6,
    "👩‍💻, 🌝, 🌉, 🌧":  7,
    "🥳, 🌅, 🗽, 🌞":  8,
    "🥳, 🌅, 🗽, 🌧":  9,
    "🥳, 🌅, 🌉, 🌞":  10,
    "🥳, 🌅, 🌉, 🌧":  11,
    "🥳, 🌝, 🗽, 🌞":  12,
    "🥳, 🌝, 🗽, 🌧":  13,
    "🥳, 🌝, 🌉, 🌞":  14,
    "🥳, 🌝, 🌉, 🌧":  15,
} 