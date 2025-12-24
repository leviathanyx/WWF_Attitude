// WWF Attitude Era + Early Ruthless Aggression
// Top Trumps–style deck
// Higher number = better

const deck = [

/* ===== MAIN EVENT ICONS ===== */

{
  name: "Stone Cold Steve Austin",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3a/Stone_Cold_Steve_Austin_2008.jpg",
  height: 188, weight: 114, matches: 1100, wins: 760, titles: 14,
  biceps: 20, chest: 52,
  power: 95, speed: 70, charisma: 98, skill: 85, durability: 92, ranking: 99
},
{
  name: "The Rock",
  image: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Dwayne_Johnson_2014.jpg",
  height: 196, weight: 118, matches: 1000, wins: 740, titles: 17,
  biceps: 20, chest: 54,
  power: 90, speed: 75, charisma: 100, skill: 88, durability: 90, ranking: 98
},
{
  name: "The Undertaker",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Undertaker_WrestleMania_31.jpg",
  height: 208, weight: 140, matches: 2300, wins: 1600, titles: 7,
  biceps: 21, chest: 56,
  power: 97, speed: 65, charisma: 95, skill: 85, durability: 98, ranking: 97
},
{
  name: "Triple H",
  image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Triple_H_2016.jpg",
  height: 193, weight: 116, matches: 2500, wins: 1500, titles: 25,
  biceps: 20, chest: 54,
  power: 92, speed: 68, charisma: 88, skill: 90, durability: 93, ranking: 96
},
{
  name: "Kane",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/32/Kane_2017.jpg",
  height: 213, weight: 147, matches: 2100, wins: 1200, titles: 6,
  biceps: 22, chest: 58,
  power: 98, speed: 60, charisma: 85, skill: 75, durability: 96, ranking: 94
},
{
  name: "Mick Foley",
  image: "https://upload.wikimedia.org/wikipedia/commons/6/6c/Mick_Foley_2017.jpg",
  height: 188, weight: 129, matches: 1700, wins: 950, titles: 11,
  biceps: 18, chest: 50,
  power: 85, speed: 60, charisma: 92, skill: 80, durability: 99, ranking: 93
},

/* ===== TECHNICAL & WORKRATE ===== */

{
  name: "Shawn Michaels",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Shawn_Michaels_2016.jpg",
  height: 185, weight: 102, matches: 2100, wins: 1350, titles: 12,
  biceps: 18, chest: 50,
  power: 80, speed: 90, charisma: 95, skill: 97, durability: 85, ranking: 95
},
{
  name: "Kurt Angle",
  image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Kurt_Angle_2016.jpg",
  height: 183, weight: 100, matches: 1200, wins: 780, titles: 13,
  biceps: 18, chest: 50,
  power: 88, speed: 80, charisma: 82, skill: 98, durability: 90, ranking: 95
},
{
  name: "Chris Jericho",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/36/Chris_Jericho_2019.jpg",
  height: 183, weight: 102, matches: 2600, wins: 1600, titles: 30,
  biceps: 18, chest: 50,
  power: 82, speed: 85, charisma: 90, skill: 92, durability: 88, ranking: 94
},
{
  name: "Eddie Guerrero",
  image: "https://upload.wikimedia.org/wikipedia/en/4/45/Eddie_Guerrero.jpg",
  height: 173, weight: 100, matches: 1500, wins: 950, titles: 23,
  biceps: 17, chest: 48,
  power: 80, speed: 88, charisma: 92, skill: 96, durability: 85, ranking: 94
},

/* ===== TAG / MIDCARD ===== */

{
  name: "Edge",
  image: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Edge_2020.jpg",
  height: 196, weight: 109, matches: 2400, wins: 1500, titles: 31,
  biceps: 19, chest: 52,
  power: 85, speed: 82, charisma: 88, skill: 88, durability: 90, ranking: 93
},
{
  name: "Christian",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Christian_Cage_2018.jpg",
  height: 185, weight: 102, matches: 2300, wins: 1400, titles: 25,
  biceps: 18, chest: 50,
  power: 80, speed: 80, charisma: 85, skill: 90, durability: 88, ranking: 91
},
{
  name: "Jeff Hardy",
  image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Jeff_Hardy_2018.jpg",
  height: 185, weight: 103, matches: 2300, wins: 1350, titles: 26,
  biceps: 18, chest: 50,
  power: 78, speed: 92, charisma: 90, skill: 85, durability: 82, ranking: 92
},
{
  name: "Matt Hardy",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Matt_Hardy_2018.jpg",
  height: 188, weight: 106, matches: 2300, wins: 1300, titles: 25,
  biceps: 18, chest: 50,
  power: 80, speed: 80, charisma: 82, skill: 85, durability: 85, ranking: 90
},
{
  name: "Big Show",
  image: "https://upload.wikimedia.org/wikipedia/commons/3/3c/Big_Show_2016.jpg",
  height: 213, weight: 174, matches: 2000, wins: 1100, titles: 12,
  biceps: 23, chest: 60,
  power: 99, speed: 50, charisma: 80, skill: 70, durability: 95, ranking: 92
},
{
  name: "Rikishi",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Rikishi_2016.jpg",
  height: 185, weight: 190, matches: 1200, wins: 650, titles: 2,
  biceps: 22, chest: 58,
  power: 96, speed: 55, charisma: 85, skill: 70, durability: 90, ranking: 88
},

/* ===== RUTHLESS AGGRESSION ADDITIONS ===== */

{
  name: "Brock Lesnar",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Brock_Lesnar_2015.jpg",
  height: 191, weight: 130, matches: 500, wins: 380, titles: 10,
  biceps: 22, chest: 56,
  power: 100, speed: 85, charisma: 75, skill: 88, durability: 95, ranking: 96
},
{
  name: "John Cena",
  image: "https://upload.wikimedia.org/wikipedia/commons/5/5e/John_Cena_2018.jpg",
  height: 185, weight: 114, matches: 2200, wins: 1600, titles: 25,
  biceps: 21, chest: 54,
  power: 92, speed: 75, charisma: 90, skill: 85, durability: 98, ranking: 96
},
{
  name: "Batista",
  image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Batista_2018.jpg",
  height: 198, weight: 132, matches: 900, wins: 550, titles: 9,
  biceps: 22, chest: 56,
  power: 97, speed: 65, charisma: 85, skill: 78, durability: 92, ranking: 92
},
{
  name: "Randy Orton",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Randy_Orton_2018.jpg",
  height: 196, weight: 113, matches: 2600, wins: 1700, titles: 20,
  biceps: 20, chest: 54,
  power: 88, speed: 78, charisma: 88, skill: 92, durability: 90, ranking: 94
},

/* ===== DIVAS / VALETS ===== */

{
  name: "Chyna",
  image: "https://upload.wikimedia.org/wikipedia/en/0/0c/Chyna_WWE.jpg",
  height: 178, weight: 82, matches: 450, wins: 300, titles: 6,
  biceps: 17, chest: 44,
  power: 88, speed: 70, charisma: 90, skill: 85, durability: 92, ranking: 93
},
{
  name: "Trish Stratus",
  image: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Trish_Stratus_2018.jpg",
  height: 163, weight: 57, matches: 620, wins: 420, titles: 7,
  biceps: 14, chest: 38,
  power: 75, speed: 88, charisma: 95, skill: 85, durability: 82, ranking: 92
},
{
  name: "Lita",
  image: "https://upload.wikimedia.org/wikipedia/commons/0/08/Lita_2018.jpg",
  height: 168, weight: 61, matches: 560, wins: 360, titles: 6,
  biceps: 14, chest: 38,
  power: 70, speed: 92, charisma: 88, skill: 90, durability: 80, ranking: 91
},
{
  name: "Stacy Keibler",
  image: "https://upload.wikimedia.org/wikipedia/commons/7/72/Stacy_Keibler_2018.jpg",
  height: 180, weight: 59, matches: 200, wins: 90, titles: 0,
  biceps: 13, chest: 36,
  power: 60, speed: 85, charisma: 96, skill: 65, durability: 70, ranking: 88
}

];
