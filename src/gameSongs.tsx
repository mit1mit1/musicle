import { GameSong, TimeSignature } from "src/types";

const testSong: GameSong = {
  bpm: 113,
  timeSignature: TimeSignature.FOURFOUR,
  readyForProduction: true,
  notes: [
    { pitch: "C5", durationObject: { "8n": 1 } },
    { pitch: "A4", durationObject: { "8n": 1 } },
    { pitch: "C5", durationObject: { "8n": 1 } },
    { pitch: "D5", durationObject: { "16n": 1 } },
    { pitch: "C5", durationObject: { "16n": 1 } },
    { rest: true, pitch: "C5", durationObject: { "8t": 1 } },
    { pitch: "E4", durationObject: { "4t": 1 } },
    { pitch: "F4", durationObject: { "8n": 1 } },
    { pitch: "F#4", durationObject: { "8n": 1 } },
    { pitch: "G4", durationObject: { "4n": 1 } },
  ],
  name: "Bob-omb Battlefield Theme"
};

export const gameSongs: Array<GameSong> = [
  testSong,
];


export const gameSongsString = `[
  simpsonsTheme,
  imperialMarch,
  hedwigsTheme,
  thomasTheTankEngine,
  theMandalorian,
  marioBrosMainTheme,
  concerningHobbits,
  aGrandDayOut,
  missionImpossible,
  sunflower,
  theRaidersMarch,
  theChain,
  leFestin,
  standByMe,
  spiritedAwayReprise,
  tetris,
  marriedLife,
  tinyDancer,
  smokeOnTheWater,
  gourmetRace,
  zeldaMainTheme,
  chameleon,
  sevenNationArmy,
  carryOnMyWaywardSon,
  tossACoinToYourWitcher,
  heyJude,
  theLonelyShepherd,
  flyMeToTheMoon,
  oneSummersDay,
  stayinAliveIntro,
  schindlersList,
  furElise,
  avatarLegendOfAang,
  cityOfStars,
  strangerThings,
  dancingInTheMoonlight,
  battleOfTheHeroes,
  theTimeIsNow,
  september,
  cantinaBand,
  theGloryDays,
  underTheMilkyWay,
  pokemonGottaCatchEmAll,
  goodMornin,
  miiChannel,
  vertigo,
  spidermanSpiderman,
  monstersInc,
  letEmIn,
  stayinAliveChorus,
  lifesIncredibleAgain,
];


`