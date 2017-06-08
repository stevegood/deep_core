const imperial_pilots = [{
 id: 10,
 name: 'Academy Pilot',
 faction: 'empire',
 unique: false,
 ship: { name: 'TIE Fighter', icon: 'tiefighter' },
 text: 'Developed by Seiner Fleet System, the Empire used the fast and agile TIE/ln as its primary starfighter throughout most of the Galactic Civil War.',
 skill: 1,
 stats: { attack: 2, agility: 3, hull: 3, shield: 0 },
 value: 12,
 actions: ['focus', 'barrelroll', 'evade'],
 slots: [],
 image: ''
}, {
 id: 11,
 name: 'Obsidian Squadron Pilot',
 faction: 'empire',
 unique: false,
 ship: { name: 'TIE Fighter', icon: 'tiefighter' },
 text: 'The TIE fighter\'s Twin Ion Engine system was designed for speed, making the TIE one of the most maneuverable starships ever produced.',
 skill: 3,
 stats: { attack: 2, agility: 3, hull: 3, shield: 0 },
 value: 13,
 actions: ['focus', 'barrelroll', 'evade'],
 slots: ['elite'],
 image: ''
}, {
 id: 12,
 name: 'Black Squadron Pilot',
 faction: 'empire',
 unique: false,
 ship: { name: 'TIE Fighter', icon: 'tiefighter' },
 text: 'The TIE fighter has no shields or life support systems, forcing TIE pilots to depend solely on their skills to survive.',
 skill: 4,
 stats: { attack: 2, agility: 3, hull: 3, shield: 0 },
 value: 14,
 actions: ['focus', 'barrelroll', 'evade'],
 slots: ['elite'],
 image: ''
}, {
 id: 13,
 name: '"Winged Gundark"',
 faction: 'empire',
 unique: true,
 ship: { name: 'TIE Fighter', icon: 'tiefighter' },
 text: 'When attacking at Range 1, you may change 1 of your __hit__ results to a __crit__ result.',
 skill: 5,
 stats: { attack: 2, agility: 3, hull: 3, shield: 0 },
 value: 15,
 actions: ['focus', 'barrelroll', 'evade'],
 slots: [],
 image: ''
}, {
 id: 14,
 name: '"Night Beast"',
 faction: 'empire',
 unique: true,
 ship: { name: 'TIE Fighter', icon: 'tiefighter' },
 text: 'After executing a green maneuver, you may perform a free focus action.',
 skill: 5,
 stats: { attack: 2, agility: 3, hull: 3, shield: 0 },
 value: 15,
 actions: ['focus', 'barrelroll', 'evade'],
 slots: [],
 image: ''
}, {
 id: 15,
 name: '"Backstabber"',
 faction: 'empire',
 unique: true,
 ship: { name: 'TIE Fighter', icon: 'tiefighter' },
 text: 'When attacking from outside the defender\'s firing arc, roll 1 additional attack die.',
 skill: 6,
 stats: { attack: 2, agility: 3, hull: 3, shield: 0 },
 value: 16,
 actions: ['focus', 'barrelroll', 'evade'],
 slots: [],
 image: ''
}, {
 id: 16,
 name: '"Dark Curse"',
 faction: 'empire',
 unique: true,
 ship: { name: 'TIE Fighter', icon: 'tiefighter' },
 text: 'When defending, ships attacking you cannot spend focus tokens or reroll attack dice.',
 skill: 6,
 stats: { attack: 2, agility: 3, hull: 3, shield: 0 },
 value: 16,
 actions: ['focus', 'barrelroll', 'evade'],
 slots: [],
 image: ''
}, {
 id: 17,
 name: '"Mauler Mithel"',
 faction: 'empire',
 unique: true,
 ship: { name: 'TIE Fighter', icon: 'tiefighter' },
 text: 'When attacking at Range 1, roll 1 additional attack die.',
 skill: 7,
 stats: { attack: 2, agility: 3, hull: 3, shield: 0 },
 value: 17,
 actions: ['focus', 'barrelroll', 'evade'],
 slots: ['elite'],
 image: ''
}, {
 id: 18,
 name: '"Howlrunner"',
 faction: 'empire',
 unique: true,
 ship: { name: 'TIE Fighter', icon: 'tiefighter' },
 text: 'When another friendly ship at Range 1 is attacking with its primary weapon, it may reroll 1 attack die.',
 skill: 8,
 stats: { attack: 2, agility: 3, hull: 3, shield: 0 },
 value: 18,
 actions: ['focus', 'barrelroll', 'evade'],
 slots: ['elite'],
 image: ''
}, {
 id: 19,
 name: 'Maarek Stele',
 faction: 'empire',
 unique: true,
 ship: { name: 'TIE Advanced', icon: 'tieadvanced' },
 text: 'When your attack deals a faceup Damage card to the defender, instead draw 3 Damage cards, choose 1 to deal, and discard the others.',
 skill: 7,
 stats: { attack: 2, agility: 3, hull: 3, shield: 2 },
 value: 27,
 actions: ['focus', 'targetlock', 'barrelroll', 'evade'],
 slots: ['elite', 'missile'],
 image: ''
}, {
 id: 20,
 name: 'Tempest Squadron Pilot',
 faction: 'empire',
 unique: false,
 ship: { name: 'TIE Advanced', icon: 'tieadvanced' },
 text: 'The TIE Advanced was produced in limited quantities, but later Seiner engineers incorporated many of its best qualities into their next TIE model: the TIE Interceptor.',
 skill: 2,
 stats: { attack: 2, agility: 3, hull: 3, shield: 2 },
 value: 21,
 actions: ['focus', 'targetlock', 'barrelroll', 'evade'],
 slots: ['missile'],
 image: ''
}, {
 id: 21,
 name: 'Storm Squadron Pilot',
 faction: 'empire',
 unique: false,
 ship: { name: 'TIE Advanced', icon: 'tieadvanced' },
 text: 'The TIE Advanced improved on the popular TIE/ln design by adding shielding, better weapons systems, curved solar panels, and a hyperdrive.',
 skill: 4,
 stats: { attack: 2, agility: 3, hull: 3, shield: 2 },
 value: 23,
 actions: ['focus', 'targetlock', 'barrelroll', 'evade'],
 slots: ['missile'],
 image: ''
}, {
 id: 22,
 name: 'Darth Vader',
 faction: 'empire',
 unique: true,
 ship: { name: 'TIE Advanced', icon: 'tieadvanced' },
 text: 'During your "Perform Action" step, you may perform 2 actions.',
 skill: 9,
 stats: { attack: 2, agility: 3, hull: 3, shield: 2 },
 value: 29,
 actions: ['focus', 'targetlock', 'barrelroll', 'evade'],
 slots: ['elite', 'missile'],
 image: ''
}, {
 id: 23,
 name: 'Alpha Squadron Pilot',
 faction: 'empire',
 unique: false,
 ship: { name: 'TIE Interceptor', icon: 'tieinterceptor' },
 text: 'Seiner Fleet Systems designed the TIE interceptor with four wing-mounted laser cannons, easily allowing it to outgun its predecessors.',
 skill: 1,
 stats: { attack: 3, agility: 3, hull: 3, shield: 0 },
 value: 18,
 actions: ['focus', 'barrelroll', 'boost', 'evade'],
 slots: [],
 image: ''
}, {
 id: 24,
 name: 'Avenger Squadron Pilot',
 faction: 'empire',
 unique: false,
 ship: { name: 'TIE Interceptor', icon: 'tieinterceptor' },
 text: 'The finest mass-produced starfighter of its time, the TIE interceptor excels at dogfighting thanks to its heightened maneuverability and speed.',
 skill: 3,
 stats: { attack: 3, agility: 3, hull: 3, shield: 0 },
 value: 20,
 actions: ['focus', 'barrelroll', 'boost', 'evade'],
 slots: [],
 image: ''
}, {
 id: 25,
 name: 'Saber Squadron Pilot',
 faction: 'empire',
 unique: false,
 ship: { name: 'TIE Interceptor', icon: 'tieinterceptor' },
 text: 'Led by Baron Soontir Fel, the pilots of Saber Squadron are among the Empire\'s best. Their TIE interceptors are marked with red stripes to designate pilots with at least ten confirmed kills.',
 skill: 4,
 stats: { attack: 3, agility: 3, hull: 3, shield: 0 },
 value: 21,
 actions: ['focus', 'barrelroll', 'boost', 'evade'],
 slots: ['elite'],
 image: ''
}, {
 id: 26,
 name: '"Fel\'s Wrath"',
 faction: 'empire',
 unique: true,
 ship: { name: 'TIE Interceptor', icon: 'tieinterceptor' },
 text: 'When the number of Damage cards assigned to you equals or exceeds your hull value, you are not destroyed until the end of the Combat phase.',
 skill: 5,
 stats: { attack: 3, agility: 3, hull: 3, shield: 0 },
 value: 23,
 actions: ['focus', 'barrelroll', 'boost', 'evade'],
 slots: [],
 image: ''
}, {
 id: 27,
 name: 'Turr Phennir',
 faction: 'empire',
 unique: true,
 ship: { name: 'TIE Interceptor', icon: 'tieinterceptor' },
 text: 'After you perform an attack, you may perform a free boost or barrel roll action.',
 skill: 7,
 stats: { attack: 3, agility: 3, hull: 3, shield: 0 },
 value: 25,
 actions: ['focus', 'barrelroll', 'boost', 'evade'],
 slots: ['elite'],
 image: ''
}, {
 id: 28,
 name: 'Soontir Fel',
 faction: 'empire',
 unique: true,
 ship: { name: 'TIE Interceptor', icon: 'tieinterceptor' },
 text: 'When you receive a stress token, you may assign 1 focus token to your ship.',
 skill: 9,
 stats: { attack: 3, agility: 3, hull: 3, shield: 0 },
 value: 27,
 actions: ['focus', 'barrelroll', 'boost', 'evade'],
 slots: ['elite'],
 image: ''
}, {
 id: 37,
 name: 'Kath Scarlet',
 faction: 'empire',
 unique: true,
 ship: { name: 'Firespray-31', icon: 'firespray31' },
 text: 'When attacking, the defender receives 1 stress token if he cancels at least one __crit__ result.',
 skill: 7,
 stats: { attack: 3, agility: 2, hull: 6, shield: 4 },
 value: 38,
 actions: ['focus', 'targetlock', 'evade'],
 slots: ['elite', 'cannon', 'bomb', 'crew', 'missile'],
 image: ''
}, {
 id: 38,
 name: 'Boba Fett',
 faction: 'empire',
 unique: true,
 ship: { name: 'Firespray-31', icon: 'firespray31' },
 text: 'When you reveal a bank maneuver (__bankleft__ or __bankright__), you may rotate your dial to the other bank maneuver of the same speed.',
 skill: 8,
 stats: { attack: 3, agility: 2, hull: 6, shield: 4 },
 value: 39,
 actions: ['focus', 'targetlock', 'evade'],
 slots: ['elite', 'cannon', 'bomb', 'crew', 'missile'],
 image: ''
}, {
 id: 39,
 name: 'Krassis Trelix',
 faction: 'empire',
 unique: true,
 ship: { name: 'Firespray-31', icon: 'firespray31' },
 text: 'When attacking with a secodary weapon, you may reroll 1 attack die.',
 skill: 5,
 stats: { attack: 3, agility: 2, hull: 6, shield: 4 },
 value: 36,
 actions: ['focus', 'targetlock', 'evade'],
 slots: ['cannon', 'bomb', 'crew', 'missile'],
 image: ''
}, {
 id: 40,
 name: 'Bounty Hunter',
 faction: 'empire',
 unique: false,
 ship: { name: 'Firespray-31', icon: 'firespray31' },
 text: 'Originally intended as a prisoner transport, the Firespray patrol craft features a versatile weapons array and heavy armor plating.',
 skill: 3,
 stats: { attack: 3, agility: 2, hull: 6, shield: 4 },
 value: 33,
 actions: ['focus', 'targetlock', 'evade'],
 slots: ['cannon', 'bomb', 'crew', 'missile'],
 image: ''
}, {
 id: 49,
 name: 'Scimitar Squadron Pilot',
 faction: 'empire',
 unique: false,
 ship: { name: 'TIE Bomber', icon: 'tiebomber' },
 text: 'The onboard targeting computer is extremely precise, allowing a TIE bomber to pinpoint its target while avoiding collateral damage to the surrounding area.',
 skill: 2,
 stats: { attack: 2, agility: 2, hull: 6, shield: 0 },
 value: 16,
 actions: ['focus', 'targetlock', 'barrelroll'],
 slots: ['torpedo','torpedo', 'missile', 'missile', 'bomb'],
 image: ''
}, {
 id: 50,
 name: 'Gamma Squadron Pilot',
 faction: 'empire',
 unique: false,
 ship: { name: 'TIE Bomber', icon: 'tiebomber' },
 text: 'While not as agile or as fast as other TIE variants, TIE bombers can carry enough firepower to destroy virtually any enemy target.',
 skill: 4,
 stats: { attack: 2, agility: 2, hull: 6, shield: 0 },
 value: 18,
 actions: ['focus', 'targetlock', 'barrelroll'],
 slots: ['torpedo','torpedo', 'missile', 'missile', 'bomb'],
 image: ''
}, {
 id: 51,
 name: 'Captain Jonus',
 faction: 'empire',
 unique: true,
 ship: { name: 'TIE Bomber', icon: 'tiebomber' },
 text: 'When another friendly ship at Range 1 attacks with a secondary weapon, it may reroll up to 2 attack dice.',
 skill: 6,
 stats: { attack: 2, agility: 2, hull: 6, shield: 0 },
 value: 22,
 actions: ['focus', 'targetlock', 'barrelroll'],
 slots: ['elite', 'torpedo','torpedo', 'missile', 'missile', 'bomb'],
 image: ''
}, {
 id: 52,
 name: 'Major Rhymer',
 faction: 'empire',
 unique: true,
 ship: { name: 'TIE Bomber', icon: 'tiebomber' },
 text: 'When attacking with a secondary weapon, you may increase or decrease the weapon range by 1 to a limit of Range 1-3.',
 skill: 7,
 stats: { attack: 2, agility: 2, hull: 6, shield: 0 },
 value: 26,
 actions: ['focus', 'targetlock', 'barrelroll'],
 slots: ['elite', 'torpedo','torpedo', 'missile', 'missile', 'bomb'],
 image: ''
}, {
 id: 53,
 name: 'Captain Kagi',
 faction: 'empire',
 unique: true,
 ship: { name: 'Lambda-Class Shuttle', icon: 'lambdaclassshuttle' },
 text: 'When an enemy ship acquires a target lock, it must lock onto your ship if possible.',
 skill: 8,
 stats: { attack: 3, agility: 1, hull: 5, shield: 5 },
 value: 27,
 actions: ['focus', 'targetlock'],
 slots: ['system', 'cannon', 'crew', 'crew'],
 image: ''
}, {
 id: 54,
 name: 'Colonel Jendon',
 faction: 'empire',
 unique: true,
 ship: { name: 'Lambda-Class Shuttle', icon: 'lambdaclassshuttle' },
 text: 'At the start of the Combat phase, you may assign 1 of your blue target lock tokens to a friendly ship at Range 1 if it does not have a blue target lock token.',
 skill: 6,
 stats: { attack: 3, agility: 1, hull: 5, shield: 5 },
 value: 26,
 actions: ['focus', 'targetlock'],
 slots: ['system', 'cannon', 'crew', 'crew'],
 image: ''
}, {
 id: 55,
 name: 'Captain Yorr',
 faction: 'empire',
 unique: true,
 ship: { name: 'Lambda-Class Shuttle', icon: 'lambdaclassshuttle' },
 text: 'When another friendly ship at Range 1-2 would receive a stress token, if you have 2 or fewer stress tokens, you may receive that token instead.',
 skill: 4,
 stats: { attack: 3, agility: 1, hull: 5, shield: 5 },
 value: 24,
 actions: ['focus', 'targetlock'],
 slots: ['system', 'cannon', 'crew', 'crew'],
 image: ''
}, {
 id: 56,
 name: 'Omicron Group Pilot',
 faction: 'empire',
 unique: false,
 ship: { name: 'Lambda-Class Shuttle', icon: 'lambdaclassshuttle' },
 text: 'Noted for its tri-wing design, the Lambda-class shuttle served a critical role as a light utility craft in the Imperial Navy.',
 skill: 2,
 stats: { attack: 3, agility: 1, hull: 5, shield: 5 },
 value: 21,
 actions: ['focus', 'targetlock'],
 slots: ['system', 'cannon', 'crew', 'crew'],
 image: ''
}, {
 id: 57,
 name: 'Lieutenant Lorrir',
 faction: 'empire',
 unique: true,
 ship: { name: 'TIE Interceptor', icon: 'tieinterceptor' },
 text: 'When performing a barrel roll action, you may receive 1 stress token to use the [__bankleft__ 1] or [__bankright__ 1] template instead of the [__straight__ 1] template.',
 skill: 5,
 stats: { attack: 3, agility: 3, hull: 3, shield: 0 },
 value: 23,
 actions: ['focus', 'barrelroll', 'boost', 'evade'],
 slots: [],
 image: ''
}, {
 id: 58,
 name: 'Royal Guard Pilot',
 faction: 'empire',
 unique: false,
 ship: { name: 'TIE Interceptor', icon: 'tieinterceptor' },
 text: 'Only members of the Emperor\'s royal guard are permitted to fly these crimson red fighters, which were often used to escort the Emperor\'s shuttle as well as its decoys.',
 skill: 6,
 stats: { attack: 3, agility: 3, hull: 3, shield: 0 },
 value: 22,
 actions: ['focus', 'barrelroll', 'boost', 'evade'],
 slots: ['elite'],
 image: ''
}, {
 id: 59,
 name: 'Tetran Cowall',
 faction: 'empire',
 unique: true,
 ship: { name: 'TIE Interceptor', icon: 'tieinterceptor' },
 text: 'When you reveal a __kturn__ maneuver, you may treat the speed of that maneuver as "1," "3," or "5."',
 skill: 7,
 stats: { attack: 3, agility: 3, hull: 3, shield: 0 },
 value: 24,
 actions: ['focus', 'barrelroll', 'boost', 'evade'],
 slots: ['elite'],
 image: ''
}, {
 id: 61,
 name: 'Kir Kanos',
 faction: 'empire',
 unique: true,
 ship: { name: 'TIE Interceptor', icon: 'tieinterceptor' },
 text: 'When attacking at Range 2-3, you may spend 1 evade token to add 1 __hit__ result to your roll.',
 skill: 6,
 stats: { attack: 3, agility: 3, hull: 3, shield: 0 },
 value: 24,
 actions: ['focus', 'barrelroll', 'boost', 'evade'],
 slots: [],
 image: ''
}, {
 id: 62,
 name: 'Carnor Jax',
 faction: 'empire',
 unique: true,
 ship: { name: 'TIE Interceptor', icon: 'tieinterceptor' },
 text: 'Enemy ships at Range 1 cannot perform focus or evade actions and cannot spend focus or evade tokens.',
 skill: 8,
 stats: { attack: 3, agility: 3, hull: 3, shield: 0 },
 value: 26,
 actions: ['focus', 'barrelroll', 'boost', 'evade'],
 slots: ['elite'],
 image: ''
}, {
 id: 68,
 name: 'Delta Squadron Pilot',
 faction: 'empire',
 unique: false,
 ship: { name: 'TIE Defender', icon: 'tiedefender' },
 text: 'In addition to its four laser cannons and warhead launchers, the TIE defender came equipped with ion cannons in its upper wing.',
 skill: 1,
 stats: { attack: 3, agility: 3, hull: 3, shield: 3 },
 value: 30,
 actions: ['focus', 'targetlock', 'barrelroll'],
 slots: ['cannon', 'missile'],
 image: ''
}, {
 id: 69,
 name: 'Onyx Squadron Pilot',
 faction: 'empire',
 unique: false,
 ship: { name: 'TIE Defender', icon: 'tiedefender' },
 text: 'The TIE defender outclassed all other starfighters of its time, though its size and array of weapons greatly increased its weight and cost credits.',
 skill: 3,
 stats: { attack: 3, agility: 3, hull: 3, shield: 3 },
 value: 32,
 actions: ['focus', 'targetlock', 'barrelroll'],
 slots: ['cannon', 'missile'],
 image: ''
}, {
 id: 70,
 name: 'Colonel Vessery',
 faction: 'empire',
 unique: true,
 ship: { name: 'TIE Defender', icon: 'tiedefender' },
 text: 'When attacking, immediately after you roll attack dice, you may acquire a target lock on the defender if it already has a red target lock token.',
 skill: 6,
 stats: { attack: 3, agility: 3, hull: 3, shield: 3 },
 value: 35,
 actions: ['focus', 'targetlock', 'barrelroll'],
 slots: ['elite', 'cannon', 'missile'],
 image: ''
}, {
 id: 71,
 name: 'Rexler Brath',
 faction: 'empire',
 unique: true,
 ship: { name: 'TIE Defender', icon: 'tiedefender' },
 text: 'After you perform an attack that deals at least 1 Damage card to the defender, you may spend a focus token to flip those cards faceup.',
 skill: 8,
 stats: { attack: 3, agility: 3, hull: 3, shield: 3 },
 value: 37,
 actions: ['focus', 'targetlock', 'barrelroll'],
 slots: ['elite', 'cannon', 'missile'],
 image: ''
}, {
 id: 76,
 name: 'Sigma Squadron Pilot',
 faction: 'empire',
 unique: false,
 ship: { name: 'TIE Phantom', icon: 'tiephantom' },
 text: 'The primary result of a hidden research facility on Imdaar Alpha, the TIE phantom added a small fighter with cloaking capabilities to the Imperial fleet.',
 skill: 3,
 stats: { attack: 4, agility: 2, hull: 2, shield: 2 },
 value: 25,
 actions: ['focus', 'barrelroll', 'evade', 'cloak'],
 slots: ['system', 'crew'],
 image: ''
}, {
 id: 77,
 name: 'Shadow Squadron Pilot',
 faction: 'empire',
 unique: false,
 ship: { name: 'TIE Phantom', icon: 'tiephantom' },
 text: 'Featuring a hyperdrive and shields, the TIE phantom also came equipped with five laser cannons, giving it unprecedented firepower for such a small Imperial fighter.',
 skill: 5,
 stats: { attack: 4, agility: 2, hull: 2, shield: 2 },
 value: 27,
 actions: ['focus', 'barrelroll', 'evade', 'cloak'],
 slots: ['system', 'crew'],
 image: ''
}, {
 id: 78,
 name: '"Echo"',
 faction: 'empire',
 unique: true,
 ship: { name: 'TIE Phantom', icon: 'tiephantom' },
 text: 'When you decloak, you must use the [__bankleft__ 2] or [__bankright__ 2] template instead of the [__straight__ 2] template.',
 skill: 6,
 stats: { attack: 4, agility: 2, hull: 2, shield: 2 },
 value: 30,
 actions: ['focus', 'barrelroll', 'evade', 'cloak'],
 slots: ['elite', 'system', 'crew'],
 image: ''
}, {
  id: 79,
  name: '"Whisper"',
  faction: 'empire',
  unique: true,
  ship: { name: 'TIE Phantom', icon: 'tiephantom' },
  text: 'After you perform an attack that hits, you may assign 1 focus token to your ship.',
  skill: 7,
  stats: { attack: 4, agility: 2, hull: 2, shield: 2 },
  value: 32,
  actions: ['focus', 'barrelroll', 'evade', 'cloak'],
  slots: ['elite', 'system', 'crew'],
  image: ''
}, {
  id: 96,
  name: 'Patrol Leader',
  faction: 'empire',
  unique: false,
  ship: { name: 'VT-49 Decimator', icon: 'vt49decimator' },
  text: '',
  skill: 3,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 40,
  actions: [],
  slots: ['torpedo', 'crew', 'crew', 'crew', 'bomb'],
  image: ''
}, {
  id: 97,
  name: 'Captain Oicunn',
  faction: 'empire',
  unique: true,
  ship: { name: 'VT-49 Decimator', icon: 'vt49decimator' },
  text: '',
  skill: 4,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 42,
  actions: [],
  slots: ['elite', 'torpedo', 'crew', 'crew', 'crew', 'bomb'],
  image: ''
}, {
  id: 98,
  name: 'Commander Kenkirk',
  faction: 'empire',
  unique: true,
  ship: { name: 'VT-49 Decimator', icon: 'vt49decimator' },
  text: '',
  skill: 6,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 44,
  actions: [],
  slots: ['elite', 'torpedo', 'crew', 'crew', 'crew', 'bomb'],
  image: ''
}, {
  id: 99,
  name: 'Rear Admiral Chiraneau',
  faction: 'empire',
  unique: true,
  ship: { name: 'VT-49 Decimator', icon: 'vt49decimator' },
  text: '',
  skill: 8,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 46,
  actions: [],
  slots: ['elite', 'torpedo', 'crew', 'crew', 'crew', 'bomb'],
  image: ''
}, {
  id: 128,
  name: 'Commander Alozen',
  faction: 'empire',
  ship: { name: 'TIE Advanced', icon: 'tieadvanced' },
  unique: true,
  text: '',
  skill: 5,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 25,
  actions: [],
  slots: [ 'elite', 'missile' ],
  image: ''
}, {
  id: 129,
  name: 'Raider-class Corvette (Fore)',
  faction: 'empire',
  ship: { name: 'Raider-class Corvette (Fore)', icon: 'raiderclasscorvette' },
  unique: true,
  epic: true,
  text: '',
  skill: 4,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 50,
  actions: [],
  slots: [ 'hardpoint', 'team', 'cargo' ],
  image: ''
}, {
  id: 130,
  name: 'Raider-class Corvette (Aft)',
  faction: 'empire',
  ship: { name: 'Raider-class Corvette (Aft)', icon: 'raiderclasscorvette' },
  unique: true,
  epic: true,
  text: '',
  skill: 4,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 50,
  actions: [],
  slots: [ 'crew', 'crew', 'hardpoint', 'hardpoint', 'team', 'team', 'cargo' ],
  image: ''
}, {
  id: 143,
  name: '"Redline"',
  faction: 'empire',
  ship: { name: 'TIE Punisher', icon: 'tiepunisher' },
  unique: true,
  text: '',
  skill: 7,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 27,
  actions: [],
  slots: [ 'system', 'torpedo', 'torpedo', 'missile', 'missile', 'bomb', 'bomb' ],
  image: ''
}, {
  id: 144,
  name: '"Deathrain"',
  faction: 'empire',
  ship: { name: 'TIE Punisher', icon: 'tiepunisher' },
  unique: true,
  text: '',
  skill: 6,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 26,
  actions: [],
  slots: [ 'system', 'torpedo', 'torpedo', 'missile', 'missile', 'bomb', 'bomb' ],
  image: ''
}, {
  id: 145,
  name: 'Black Eight Squadron Pilot',
  faction: 'empire',
  ship: { name: 'TIE Punisher', icon: 'tiepunisher' },
  unique: false,
  text: '',
  skill: 4,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 23,
  actions: [],
  slots: [ 'system', 'torpedo', 'torpedo', 'missile', 'missile', 'bomb', 'bomb' ],
  image: ''
}, {
  id: 146,
  name: 'Cutlass Squadron Pilot',
  faction: 'empire',
  ship: { name: 'TIE Punisher', icon: 'tiepunisher' },
  unique: false,
  text: '',
  skill: 2,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 21,
  actions: [],
  slots: [ 'system', 'torpedo', 'torpedo', 'missile', 'missile', 'bomb', 'bomb' ],
  image: ''
}, {
  id: 147,
  name: 'Juno Eclipse',
  faction: 'empire',
  ship: { name: 'TIE Advanced', icon: 'tieadvanced' },
  unique: true,
  text: '',
  skill: 8,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 28,
  actions: [],
  slots: [ 'elite', 'missile' ],
  image: ''
}, {
  id: 148,
  name: 'Zertik Strom',
  faction: 'empire',
  ship: { name: 'TIE Advanced', icon: 'tieadvanced' },
  unique: true,
  text: '',
  skill: 6,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 26,
  actions: [],
  slots: [ 'elite', 'missile' ],
  image: ''
}, {
  id: 149,
  name: 'Lieutenant Colzet',
  faction: 'empire',
  ship: { name: 'TIE Advanced', icon: 'tieadvanced' },
  unique: true,
  text: '',
  skill: 3,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 23,
  actions: [],
  slots: [ 'missile' ],
  image: ''
}, {
  id: 150,
  name: 'Gozanti-class Cruiser',
  faction: 'empire',
  ship: { name: 'Gozanti-class Cruiser', icon: 'gozanticlasscruiser' },
  unique: false,
  epic: true,
  text: '',
  skill: 2,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 40,
  actions: [],
  slots: [ 'crew', 'crew', 'hardpoint', 'team', 'cargo', 'cargo' ],
  image: ''
}, {
  id: 151,
  name: '"Scourge"',
  faction: 'empire',
  ship: { name: 'TIE Fighter', icon: 'tiefighter' },
  unique: true,
  text: '',
  skill: 7,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 17,
  actions: [],
  slots: [ 'elite' ],
  image: ''
}, {
  id: 152,
  name: '"Youngster"',
  faction: 'empire',
  ship: { name: 'TIE Fighter', icon: 'tiefighter' },
  unique: true,
  text: '',
  skill: 6,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 15,
  actions: [],
  slots: [ 'elite' ],
  image: ''
}, {
  id: 153,
  name: '"Wampa"',
  faction: 'empire',
  ship: { name: 'TIE Fighter', icon: 'tiefighter' },
  unique: true,
  text: '',
  skill: 4,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 14,
  actions: [],
  slots: [],
  image: ''
}, {
  id: 154,
  name: '"Chaser"',
  faction: 'empire',
  ship: { name: 'TIE Fighter', icon: 'tiefighter' },
  unique: true,
  text: '',
  skill: 3,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 14,
  actions: [],
  slots: [],
  image: ''
}, {
  id: 163,
  name: 'The Inquisitor',
  faction: 'empire',
  ship: { name: 'TIE Advanced Prototype', icon: 'tieadvancedprototype' },
  unique: true,
  text: '',
  skill: 8,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 25,
  actions: [],
  slots: ['elite', 'missile'],
  image: ''
}, {
  id: 164,
  name: 'Valen Rudor',
  faction: 'empire',
  ship: { name: 'TIE Advanced Prototype', icon: 'tieadvancedprototype' },
  unique: true,
  text: '',
  skill: 6,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 22,
  actions: [],
  slots: ['elite', 'missile'],
  image: ''
}, {
  id: 165,
  name: 'Baron of the Epire',
  faction: 'empire',
  ship: { name: 'TIE Advanced Prototype', icon: 'tieadvancedprototype' },
  unique: true,
  text: '',
  skill: 4,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 19,
  actions: [],
  slots: ['elite', 'missile'],
  image: ''
}, {
  id: 166,
  name: 'Seiner Test Pilot',
  faction: 'empire',
  ship: { name: 'TIE Advanced Prototype', icon: 'tieadvancedprototype' },
  unique: false,
  text: '',
  skill: 2,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 16,
  actions: [],
  slots: ['missile'],
  image: ''
}, {
  id: 179,
  name: '"Omega Ace"',
  faction: 'empire',
  ship: { name: 'TIE/fo Fighter', icon: 'tiefofighter' },
  unique: true,
  text: '',
  skill: 7,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 20,
  actions: [],
  slots: ['elite', 'tech'],
  image: ''
}, {
  id: 180,
  name: '"Epsilon Leader"',
  faction: 'empire',
  ship: { name: 'TIE/fo Fighter', icon: 'tiefofighter' },
  unique: true,
  text: '',
  skill: 6,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 19,
  actions: [],
  slots: ['tech'],
  image: ''
}, {
  id: 181,
  name: '"Zeta Ace"',
  faction: 'empire',
  ship: { name: 'TIE/fo Fighter', icon: 'tiefofighter' },
  unique: true,
  text: '',
  skill: 5,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 18,
  actions: [],
  slots: ['elite', 'tech'],
  image: ''
}, {
  id: 182,
  name: 'Omega Squadron Pilot',
  faction: 'empire',
  ship: { name: 'TIE/fo Fighter', icon: 'tiefofighter' },
  unique: false,
  text: '',
  skill: 4,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 17,
  actions: [],
  slots: ['elite', 'tech'],
  image: ''
}, {
  id: 183,
  name: 'Zeta Squadron Pilot',
  faction: 'empire',
  ship: { name: 'TIE/fo Fighter', icon: 'tiefofighter' },
  unique: false,
  text: '',
  skill: 3,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 16,
  actions: [],
  slots: ['tech'],
  image: ''
}, {
  id: 184,
  name: 'Epsilon Squadron Pilot',
  faction: 'empire',
  ship: { name: 'TIE/fo Fighter', icon: 'tiefofighter' },
  unique: false,
  text: '',
  skill: 1,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 15,
  actions: [],
  slots: ['tech'],
  image: ''
}, {
  id: 187,
  name: '"Omega Leader"',
  faction: 'empire',
  unique: true,
  ship: { name: 'TIE/fo Fighter', icon: 'tiefofighter' },
  text: '',
  skill: 8,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 21,
  actions: [],
  slots: [ 'elite', 'tech' ],
  image: ''
}, {
  id: 188,
  name: '"Zeta Leader"',
  faction: 'empire',
  unique: true,
  ship: { name: 'TIE/fo Fighter', icon: 'tiefofighter' },
  text: '',
  skill: 7,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 20,
  actions: [],
  slots: [ 'elite', 'tech' ],
  image: ''
}, {
  id: 189,
  name: '"Epsilon Ace"',
  faction: 'empire',
  unique: true,
  ship: { name: 'TIE/fo Fighter', icon: 'tiefofighter' },
  text: '',
  skill: 4,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 17,
  actions: [],
  slots: [ 'tech' ],
  image: ''
}, {
  id: 190,
  name: 'Tomax Bren',
  faction: 'empire',
  unique: true,
  ship: { name: 'TIE Bomber', icon: 'tiebomber' },
  text: '',
  skill: 8,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 24,
  actions: [],
  slots: [ 'elite', 'torpedo', 'torpedo', 'missile', 'missile', 'bomb' ],
  image: ''
}, {
  id: 191,
  name: 'Gamma Squadron Veteran',
  faction: 'empire',
  unique: false,
  ship: { name: 'TIE Bomber', icon: 'tiebomber' },
  text: '',
  skill: 5,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 19,
  actions: [],
  slots: [ 'elite', 'torpedo', 'torpedo', 'missile', 'missile', 'bomb' ],
  image: ''
}, {
  id: 192,
  name: '"Deathfire"',
  faction: 'empire',
  unique: true,
  ship: { name: 'TIE Bomber', icon: 'tiebomber' },
  text: '',
  skill: 3,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 17,
  actions: [],
  slots: [ 'torpedo', 'torpedo', 'missile', 'missile', 'bomb' ],
  image: ''
}, {
  id: 193,
  name: 'Maarek Stele (TIE Defender)',
  faction: 'empire',
  unique: true,
  ship: { name: 'TIE Defender', icon: 'tiedefender' },
  text: '',
  skill: 7,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 35,
  actions: [],
  slots: [ 'elite', 'cannon', 'missile' ],
  image: ''
}, {
  id: 194,
  name: 'Glaive Squadron Pilot',
  faction: 'empire',
  unique: false,
  ship: { name: 'TIE Defender', icon: 'tiedefender' },
  text: '',
  skill: 6,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 34,
  actions: [],
  slots: [ 'elite', 'cannon', 'missile' ],
  image: ''
}, {
  id: 195,
  name: 'Countess Ryad',
  faction: 'empire',
  unique: true,
  ship: { name: 'TIE Defender', icon: 'tiedefender' },
  text: '',
  skill: 5,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 34,
  actions: [],
  slots: [ 'elite', 'cannon', 'missile' ],
  image: ''
}, {
  id: 208,
  name: '"Quickdraw"',
  faction: 'empire',
  unique: true,
  ship: { name: 'TIE/sf Fighter', icon: 'tiesffighter' },
  text: '',
  skill: 9,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 29,
  actions: [],
  slots: [ 'elite', 'system', 'missile', 'tech' ],
  image: ''
}, {
  id: 209,
  name: '"Backdraft"',
  faction: 'empire',
  unique: true,
  ship: { name: 'TIE/sf Fighter', icon: 'tiesffighter' },
  text: '',
  skill: 7,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 27,
  actions: [],
  slots: [ 'elite', 'system', 'missile', 'tech' ],
  image: ''
}, {
  id: 210,
  name: 'Omega Specialist',
  faction: 'empire',
  unique: false,
  ship: { name: 'TIE/sf Fighter', icon: 'tiesffighter' },
  text: '',
  skill: 5,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 25,
  actions: [],
  slots: [ 'elite', 'system', 'missile', 'tech' ],
  image: ''
}, {
  id: 211,
  name: 'Zeta Specialist',
  faction: 'empire',
  unique: false,
  ship: { name: 'TIE/sf Fighter', icon: 'tiesffighter' },
  text: '',
  skill: 3,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 23,
  actions: [],
  slots: [ 'system', 'missile', 'tech' ],
  image: ''
}, {
  id: 226,
  name: 'Kylo Ren',
  faction: 'firstorder',
  unique: true,
  ship: { name: 'Upsilon-class Shuttle', icon: 'upsilonclassshuttle' },
  text: '',
  skill: 6,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 34,
  actions: [],
  slots: [ 'elite', 'system', 'crew', 'crew', 'tech', 'tech' ],
  image: ''
}, {
  id: 227,
  name: 'Major Stridan',
  faction: 'firstorder',
  unique: true,
  ship: { name: 'Upsilon-class Shuttle', icon: 'upsilonclassshuttle' },
  text: '',
  skill: 4,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 32,
  actions: [],
  slots: [ 'system', 'crew', 'crew', 'tech', 'tech' ],
  image: ''
}, {
  id: 228,
  name: 'Lieutenant Dormitz',
  faction: 'firstorder',
  unique: true,
  ship: { name: 'Upsilon-class Shuttle', icon: 'upsilonclassshuttle' },
  text: '',
  skill: 3,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 31,
  actions: [],
  slots: [ 'system', 'crew', 'crew', 'tech', 'tech' ],
  image: ''
}, {
  id: 229,
  name: 'Starkiller Base Pilot',
  faction: 'firstorder',
  unique: false,
  ship: { name: 'Upsilon-class Shuttle', icon: 'upsilonclassshuttle' },
  text: '',
  skill: 2,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 30,
  actions: [],
  slots: [ 'system', 'crew', 'crew', 'tech', 'tech' ],
  image: ''
}, {
  id: 238,
  name: '"Duchess"',
  faction: 'empire',
  unique: true,
  ship: { name: 'TIE Striker', icon: 'tiestriker' },
  text: '',
  skill: 8,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 23,
  actions: [],
  slots: [ 'elite' ],
  image: ''
}, {
  id: 239,
  name: '"Pure Sabacc"',
  faction: 'empire',
  unique: true,
  ship: { name: 'TIE Striker', icon: 'tiestriker' },
  text: '',
  skill: 6,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 22,
  actions: [],
  slots: [ 'elite' ],
  image: ''
}, {
  id: 240,
  name: '"Countdown"',
  faction: 'empire',
  unique: true,
  ship: { name: 'TIE Striker', icon: 'tiestriker' },
  text: '',
  skill: 5,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 20,
  actions: [],
  slots: [],
  image: ''
}, {
  id: 241,
  name: 'Black Squadron Scout',
  faction: 'empire',
  unique: false,
  ship: { name: 'TIE Striker', icon: 'tiestriker' },
  text: '',
  skill: 4,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 20,
  actions: [],
  slots: [ 'elite' ],
  image: ''
}, {
  id: 242,
  name: 'Scarif Defender',
  faction: 'empire',
  unique: false,
  ship: { name: 'TIE Striker', icon: 'tiestriker' },
  text: '',
  skill: 3,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 18,
  actions: [],
  slots: [],
  image: ''
}, {
  id: 243,
  name: 'Imperial Trainee',
  faction: 'empire',
  unique: false,
  ship: { name: 'TIE Striker', icon: 'tiestriker' },
  text: '',
  skill: 1,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 17,
  actions: [],
  slots: [],
  image: ''
}, {
  id: 258,
  name: 'Seiner Specialist',
  faction: 'empire',
  unique: false,
  ship: { name: 'TIE Aggressor', icon: 'tieaggressor' },
  text: '',
  skill: 2,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 17,
  actions: [],
  slots: ['turret', 'missile', 'missile'],
  image: ''
}, {
  id: 259,
  name: 'Onyx Squadron Escort',
  faction: 'empire',
  unique: false,
  ship: { name: 'TIE Aggressor', icon: 'tieaggressor' },
  text: '',
  skill: 5,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 19,
  actions: [],
  slots: ['turret', 'missile', 'missile'],
  image: ''
}, {
  id: 260,
  name: '"Double Edge"',
  faction: 'empire',
  unique: true,
  ship: { name: 'TIE Aggressor', icon: 'tieaggressor' },
  text: '',
  skill: 4,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 19,
  actions: [],
  slots: ['elite', 'turret', 'missile', 'missile'],
  image: ''
}, {
  id: 261,
  name: 'Lieutenant Kestal',
  faction: 'empire',
  unique: true,
  ship: { name: 'TIE Aggressor', icon: 'tieaggressor' },
  text: '',
  skill: 7,
  stats: { attack: 0, agility: 0, hull: 0, shield: 0 },
  value: 22,
  actions: [],
  slots: ['elite', 'turret', 'missile', 'missile'],
  image: ''
}]

export default imperial_pilots
