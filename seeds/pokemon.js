/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pokemon').del()
  await knex('pokemon').insert([
    {name: 'bulbasaur',description:'It carries a seed\non its back right\nfrom birth. As it\fgrows older, the\nseed also grows\nlarger.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg'},
  {name: 'ivysaur',description:'If the bud on its\nback starts to\nsmell sweet, it\fis evidence that\nthe large flower\nwill soon bloom.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/2.svg'},
  {name: 'venusaur',description:'It is able to con­\nvert sunlight into\nenergy. As a\fresult, it is more\npowerful in the\nsummertime.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/3.svg'},
  {name: 'charmander',description:'The flame on its\ntail indicates\nCHARMANDERs life\fforce. If it is\nhealthy, the flame\nburns brightly.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/4.svg'},
  {name: 'charmeleon',description:'It has a barbaric\nnature. In battle,\nit whips its\ffiery tail around\nand slashes away\nwith sharp claws.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/5.svg'},
  {name: 'charizard',description:'Breathing intense,\nhot flames, it can\nmelt almost any­\fthing. Its breath\ninflicts terrible\npain on enemies.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/6.svg'},
  {name: 'squirtle',description:'The shell, which\nhardens soon after\nit is born, is\fresilient. If you\npoke it, it will\nbounce back out.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/7.svg'},
  {name: 'wartortle',description:'It cleverly con­\ntrols its furry\nears and tail to\fmaintain its\nbalance while\nswimming.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/8.svg'},
  {name: 'blastoise',description:'The rocket cannons\non its shell fire\njets of water\fcapable of punch­\ning holes through\nthick steel.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/9.svg'},
  {name: 'caterpie',description:'For protection, it\nreleases a horri­\nble stench from\fthe antenna on its\nhead to drive away\nenemies.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/10.svg'},
  {name: 'metapod',description:'It prepares for\nevolution by har­\ndening its shell\fas much as possi­\nble to protect its\nsoft body.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/11.svg'},
  {name: 'butterfree',description:'Water-repellent\npowder on its\nwings enables it\fto collect honey,\neven in the heav­\niest of rains.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/12.svg'},
  {name: 'weedle',description:'It attacks using a\ntwo-inch poison\nbarb on its head.\fIt can usually be\nfound under the\nleaves it eats.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/13.svg'},
  {name: 'kakuna',description:'From this form,\nit will grow into\nan adult. As its\fbody becomes soft­\ner, the external\nshell hardens.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/14.svg'},
  {name: 'beedrill',description:'It can take down\nany opponent with\nits powerful poi­\fson stingers. It\nsometimes attacks\nin swarms.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/15.svg'},
  {name: 'pidgey',description:'Common in grassy\nareas and forests,\nit is very docile\fand will chase off\nenemies by flap­\nping up sand.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/16.svg'},
  {name: 'pidgeotto',description:'It immobilizes its\nprey using well-\ndeveloped claws,\fthen carries the\nprey more than 60\nmiles to its nest.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/17.svg'},
  {name: 'pidgeot',description:'It carries a seed\non its back right\nfrom birth. As it\fgrows older, the\nseed also grows\nlarger.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/18.svg'},
  {name: 'rattata',description:'It eats anything.\nWherever food is\navailable, it will\fsettle down and\nproduce offspring\ncontinuously.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/19.svg'},
  {name: 'raticate',description:'Gnaws on anything\nwith its tough\nfangs. It can even\ftopple concrete\nbuildings by gnaw­\ning on them.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/20.svg'},
  {name: 'spearow',description:'It flaps its short\nwings to flush out\ninsects from tall\fgrass. It then\nplucks them with\nits stubby beak.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/21.svg'},
  {name: 'fearow',description:'It cleverly uses\nits thin, long\nbeak to pluck and\feat small insects\nthat hide under\nthe ground.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/22.svg'},
  {name: 'ekans',description:'It always hides in\ngrass. When first\nborn, it has no\fpoison, so its\nbite is painful,\nbut harmless.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/23.svg'},
  {name: 'arbok',description:'With a very venge­\nful nature, it\nwont give up the\fchase, no matter\nhow far, once it\ntargets its prey.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/24.svg'},
  {name: 'pikachu',description:'It raises its tail\nto check its sur­\nroundings. The\ftail is sometimes\nstruck by light­\nning in this pose.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/25.svg'},
  {name: 'raichu',description:'When its electric­\nity builds, its\nmuscles are stimu­\flated, and it be­\ncomes more aggres­\nsive than usual.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/26.svg'},
  {name: 'sandshrew',description:'Disliking water,\nit lives in deep\nburrows in arid\fareas. It can roll\nitself instantly\ninto a ball.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/27.svg'},
  {name: 'sandslash',description:'If it digs at an\nincredible pace,\nit may snap off\fits spikes and\nclaws. They grow\nback in a day.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/28.svg'},
  {name: 'nidoran',description:'Although not very\ncombative, it will\ntorment its foes\fwith poison spikes\nif it is threat­\nened in any way.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/29.svg'},
  {name: 'nidorina',description:'It has a calm and\ncaring nature.\nBecause its horn\fgrows slowly, it\nprefers not to\nfight.', image:'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/30.svg'}
  ]);
};
