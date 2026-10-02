import { writeFileSync, mkdirSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../src/data");
mkdirSync(outDir, { recursive: true });

function pack(idPrefix, items) {
  return items.map((item, i) => {
    const [question, A, B, C, D, correct] = item;
    return {
      id: `${idPrefix}-${String(i + 1).padStart(2, "0")}`,
      question,
      choices: { A, B, C, D },
      correct,
    };
  });
}

const early = pack("early", [
  ["Who is considered the father of modern rocketry?", "Werner Von Braun", "Robert Goddard", "Konstantin Tsiolkovsky", "Sergei Korolev", "B"],
  ["Which nation launched the first human into space?", "United States", "Soviet Union", "China", "France", "B"],
  ["Who was the first human in space?", "Neil Armstrong", "Alan Shepard", "Yuri Gagarin", "John Glenn", "C"],
  ["What was the name of Yuri Gagarin's spacecraft?", "Vostok 1", "Soyuz 1", "Sputnik 2", "Mir 1", "A"],
  ["Who was the first American in space?", "John Glenn", "Gus Grissom", "Alan Shepard", "Scott Carpenter", "C"],
  ["Which U.S. program sent the first Americans into space?", "Apollo", "Gemini", "Mercury", "Skylab", "C"],
  ["Who was the first American to orbit Earth?", "Alan Shepard", "John Glenn", "Wally Schirra", "Gordon Cooper", "B"],
  ["What was John Glenn's Mercury capsule called?", "Freedom 7", "Friendship 7", "Liberty Bell 7", "Sigma 7", "B"],
  ["Who was the first woman in space?", "Sally Ride", "Valentina Tereshkova", "Svetlana Savitskaya", "Eileen Collins", "B"],
  ["Which spacecraft carried Valentina Tereshkova?", "Vostok 6", "Soyuz 1", "Salyut 1", "Voskhod 1", "A"],
  ["What year did Yuri Gagarin fly?", "1957", "1961", "1965", "1969", "B"],
  ["Which Soviet designer led the early space program?", "Sergei Korolev", "Andrei Tupolev", "Mikhail Kalashnikov", "Igor Sikorsky", "A"],
  ["What was the first animal to orbit Earth?", "Ham the chimp", "Laika the dog", "Miss Baker", "Enos", "B"],
  ["Which rocket launched Sputnik 1?", "R-7", "Saturn V", "V-2", "Atlas", "A"],
  ["Who was the second human in space?", "Alan Shepard", "Gherman Titov", "John Glenn", "Alexei Leonov", "B"],
  ["Which Mercury astronaut flew Liberty Bell 7?", "Gus Grissom", "Alan Shepard", "Deke Slayton", "Scott Carpenter", "A"],
  ["What does NASA stand for?", "National Aerospace Science Agency", "National Aeronautics and Space Administration", "North American Space Alliance", "Naval Air and Space Association", "B"],
  ["Who was NASA's first administrator?", "James Webb", "T. Keith Glennan", "Wernher von Braun", "Hugh Dryden", "B"],
  ["Which program followed Project Mercury?", "Apollo", "Gemini", "Shuttle", "Constellation", "B"],
  ["Who performed the first spacewalk?", "Neil Armstrong", "Ed White", "Alexei Leonov", "Buzz Aldrin", "C"],
  ["Which American performed the first U.S. spacewalk?", "Ed White", "Neil Armstrong", "Michael Collins", "Gene Cernan", "A"],
  ["What was the Gemini program's main goal?", "Land on the Moon", "Practice rendezvous and EVA", "Build a space station", "Visit Mars", "B"],
  ["Who commanded Gemini 8?", "Neil Armstrong", "Jim Lovell", "John Young", "Tom Stafford", "A"],
  ["What emergency ended Gemini 8 early?", "Fire", "Thruster stuck on", "Window crack", "Fuel leak only", "B"],
  ["Which Gemini flight featured the first U.S. docking?", "Gemini 6", "Gemini 7", "Gemini 8", "Gemini 4", "C"],
  ["How many astronauts flew on Gemini missions?", "One", "Two", "Three", "Four", "B"],
  ["Who was the first person to sleep in space?", "Yuri Gagarin", "Gherman Titov", "John Glenn", "Alan Shepard", "B"],
  ["Which rocket launched Mercury orbital flights?", "Redstone", "Atlas", "Titan II", "Saturn I", "B"],
  ["Which rocket launched Gemini?", "Atlas", "Titan II", "Saturn V", "Delta", "B"],
  ["Who flew the longest Mercury mission?", "John Glenn", "Gordon Cooper", "Wally Schirra", "Scott Carpenter", "B"],
  ["What was Gordon Cooper's Mercury capsule?", "Faith 7", "Freedom 7", "Sigma 7", "Aurora 7", "A"],
  ["Which Soviet craft carried three cosmonauts without spacesuits?", "Vostok 3", "Voskhod 1", "Soyuz 1", "Salyut 1", "B"],
  ["Who was the first African American selected as an astronaut (though not flying in that era's crew rotations as planned)?", "Guion Bluford", "Ed Dwight", "Charles Bolden", "Ron McNair", "B"],
  ["What year was Sputnik 1 launched?", "1955", "1957", "1959", "1961", "B"],
  ["Which U.S. satellite was the first successful orbiter?", "Explorer 1", "Vanguard 1", "Telstar", "Tiros 1", "A"],
  ["Who discovered the Van Allen radiation belts using Explorer 1 data?", "Carl Sagan", "James Van Allen", "Edwin Hubble", "Fred Whipple", "B"],
  ["Which Mercury astronaut did not fly in Mercury due to a heart condition?", "Deke Slayton", "Gus Grissom", "Wally Schirra", "Scott Carpenter", "A"],
  ["What was the nickname of the original Mercury astronauts?", "The Mercury Seven", "The Right Stuff Nine", "The Eagle Squadron", "The Astro Corps", "A"],
  ["Who wrote the book The Right Stuff about early astronauts?", "Tom Wolfe", "Norman Mailer", "Michael Collins", "Walter Cronkite", "A"],
  ["Which Gemini mission spent nearly 14 days in orbit?", "Gemini 4", "Gemini 5", "Gemini 7", "Gemini 12", "C"],
  ["Who was the first person to fly in space twice?", "John Glenn", "Gus Grissom", "Gherman Titov", "Yuri Gagarin", "B"],
  ["What caused the Apollo 1 tragedy during a ground test?", "Cabin fire", "Explosion on pad", "Oxygen leak in space", "Parachute failure", "A"],
  ["Which three astronauts died in the Apollo 1 fire?", "Armstrong, Aldrin, Collins", "Grissom, White, Chaffee", "Grissom, Shepard, Glenn", "White, Young, Conrad", "B"],
  ["Who was the first human to exceed Mach 1?", "Chuck Yeager", "Neil Armstrong", "Alan Shepard", "John Glenn", "A"],
  ["X-15 pilots earned astronaut wings above what altitude roughly?", "50 miles", "100 miles", "25 miles", "10 miles", "A"],
  ["Which nation recovered a capsule from space first with animals and returned them alive (Belka and Strelka)?", "United States", "Soviet Union", "China", "United Kingdom", "B"],
  ["What was Alan Shepard's Mercury capsule name?", "Freedom 7", "Friendship 7", "Liberty Bell 7", "Faith 7", "A"],
  ["How long was Gagarin's orbital flight approximately?", "12 minutes", "108 minutes", "5 hours", "1 day", "B"],
  ["Which Gemini astronaut later commanded Apollo 13?", "Neil Armstrong", "Jim Lovell", "Frank Borman", "John Young", "B"],
  ["What docking target did Gemini spacecraft practice with?", "Agena", "Salyut", "Skylab", "Progress", "A"],
]);

const modern = pack("modern", [
  ["What was the first spacecraft to orbit a planet other than Earth?", "Mariner 9", "Viking 1", "Mir", "Sputnik", "A"],
  ["Which reusable spacecraft first flew in 1981?", "Burán", "Space Shuttle", "Dream Chaser", "X-37", "B"],
  ["What was the first Space Shuttle orbiter to fly in space?", "Columbia", "Challenger", "Discovery", "Atlantis", "A"],
  ["Which space station was assembled starting in 1998?", "Mir", "Skylab", "International Space Station", "Tiangong", "C"],
  ["Who was the first American woman in space?", "Sally Ride", "Judy Resnik", "Shannon Lucid", "Mae Jemison", "A"],
  ["Which Shuttle was lost in 1986 after launch?", "Columbia", "Challenger", "Endeavour", "Atlantis", "B"],
  ["Which Shuttle was lost during reentry in 2003?", "Columbia", "Challenger", "Discovery", "Atlantis", "A"],
  ["What private company first sent astronauts to the ISS in 2020?", "Blue Origin", "SpaceX", "Boeing", "Virgin Galactic", "B"],
  ["What is SpaceX's crew spacecraft called?", "Starliner", "Crew Dragon", "Orion", "Dream Chaser", "B"],
  ["Which NASA program aims to return humans to the Moon?", "Constellation", "Artemis", "Gemini II", "Orion Only", "B"],
  ["What is the name of NASA's deep-space crew capsule?", "Orion", "Dragon", "Starliner", "New Shepard", "A"],
  ["Which rocket is NASA's heavy-lift Artemis launcher?", "Falcon Heavy", "SLS", "Delta IV Heavy", "Vulcan", "B"],
  ["What Chinese space station is currently operational?", "Mir", "Tiangong", "Shenzhou", "Skyward", "B"],
  ["Which company flies the New Shepard suborbital vehicle?", "SpaceX", "Blue Origin", "Rocket Lab", "Relativity", "B"],
  ["What is the ISS orbital altitude roughly?", "100 km", "400 km", "1000 km", "36,000 km", "B"],
  ["How long does one ISS orbit take approximately?", "45 minutes", "90 minutes", "3 hours", "24 hours", "B"],
  ["Which telescope succeeded Hubble as NASA's flagship IR observatory?", "Spitzer", "James Webb Space Telescope", "Chandra", "Kepler", "B"],
  ["Where is JWST primarily stationed?", "Low Earth orbit", "Sun-Earth L2", "Lunar orbit", "Mars orbit", "B"],
  ["What was Skylab?", "A Soviet probe", "America's first space station", "A Moon lander", "A Mars rover", "B"],
  ["Which nation operates the Soyuz crew vehicle today?", "United States", "Russia", "China", "Japan", "B"],
  ["What is Canadarm2?", "A Japanese telescope", "The ISS robotic arm", "A European lander", "A Russian airlock", "B"],
  ["Which ESA module is a major ISS laboratory?", "Destiny", "Columbus", "Kibo", "Zarya", "B"],
  ["What is Japan's ISS lab module called?", "Kibo", "Harmony", "Tranquility", "Unity", "A"],
  ["Who was the first African American woman in space?", "Mae Jemison", "Stephanie Wilson", "Joan Higginbotham", "Jessica Watkins", "A"],
  ["Which commercial capsule is Boeing developing for NASA?", "Crew Dragon", "Starliner", "Orion", "Dream Chaser", "B"],
  ["What is Starlink?", "A Mars colony", "A satellite internet constellation", "A lunar rover", "A space hotel", "B"],
  ["Which company builds Electron rockets?", "SpaceX", "Rocket Lab", "ULA", "Arianespace", "B"],
  ["What was Mir?", "A U.S. shuttle", "A Soviet/Russian space station", "A Moon base", "A Mars probe", "B"],
  ["Which Shuttle repaired the Hubble Space Telescope?", "Several, including Endeavour and Discovery", "Only Atlantis", "Only Columbia", "None", "A"],
  ["What does EVA stand for?", "Extra-Vehicular Activity", "External Vacuum Array", "Earth View Antenna", "Emergency Valve Access", "A"],
  ["Which nation launched the Shenzhou crew program?", "Japan", "China", "India", "South Korea", "B"],
  ["What is India's crew program currently developing?", "Gaganyaan", "Chandrayaan", "Mangalyaan", "NISAR", "A"],
  ["Which probe entered Jupiter orbit in 2016?", "Cassini", "Juno", "Galileo", "New Horizons", "B"],
  ["What spacecraft flew by Pluto in 2015?", "Voyager 1", "New Horizons", "Pioneer 10", "Dawn", "B"],
  ["Which rover landed on Mars in 2021 with Ingenuity?", "Curiosity", "Perseverance", "Opportunity", "Spirit", "B"],
  ["What is Ingenuity?", "A Mars helicopter", "A lunar rover", "A space telescope", "A crew capsule", "A"],
  ["Which company proposed Starship for deep-space transport?", "Blue Origin", "SpaceX", "Boeing", "Lockheed Martin", "B"],
  ["What is the Gateway?", "A Mars sample return", "A planned lunar-orbit outpost", "An ISS module", "A Sun probe", "B"],
  ["Which Shuttle orbiter is displayed at the Udvar-Hazy Center?", "Discovery", "Enterprise", "Atlantis", "Endeavour", "A"],
  ["What fuel mix powers Falcon 9's first stage?", "LH2/LOX", "RP-1/LOX", "Hypergolics", "Methane/LOX", "B"],
  ["What propellant is Starship designed to use?", "RP-1/LOX", "Methane/LOX", "LH2/LOX", "Solid fuel", "B"],
  ["Which agency leads Europe's space program?", "NASA", "ESA", "CNSA", "JAXA", "B"],
  ["What was the first privately funded human spaceflight?", "SpaceShipOne", "Crew Dragon Demo-2", "New Shepard NS-16", "Inspiration4", "A"],
  ["Which mission was the first all-civilian orbital flight?", "Polaris Dawn", "Inspiration4", "Axiom-1", "Fram2", "B"],
  ["What does LEO stand for?", "Lunar Earth Orbit", "Low Earth Orbit", "Long Endurance Orbit", "Lateral Escape Orbit", "B"],
  ["Which U.S. company builds Vulcan Centaur with Lockheed heritage partners?", "SpaceX", "ULA", "Rocket Lab", "Firefly", "B"],
  ["What is a soft capture docking system on ISS often associated with?", "IDA / NASA Docking System", "Only hooks", "Magnetic shoes", "Solar sails", "A"],
  ["Which telescope found thousands of exoplanets via transit method?", "Hubble", "Kepler", "Chandra", "Spitzer", "B"],
  ["What is the name of NASA's Artemis lunar lander partner for early missions?", "Starship HLS (SpaceX)", "Blue Moon only", "Apollo LM", "Dream Chaser", "A"],
  ["Which ISS partner provides the Cupola observation module?", "NASA", "ESA", "Roscosmos", "CSA", "B"],
]);

const moon = pack("moon", [
  ["What was the first man-made object to reach the Moon?", "Eagle", "Luna 2", "Apollo 8", "Ranger 1", "B"],
  ["Who was the first human to walk on the Moon?", "Buzz Aldrin", "Neil Armstrong", "Michael Collins", "Pete Conrad", "B"],
  ["Which mission first landed humans on the Moon?", "Apollo 10", "Apollo 11", "Apollo 12", "Apollo 8", "B"],
  ["What was the lunar module name for Apollo 11?", "Columbia", "Eagle", "Intrepid", "Aquarius", "B"],
  ["What was Apollo 11's command module called?", "Eagle", "Columbia", "Yankee Clipper", "Odyssey", "B"],
  ["In what year did Apollo 11 land?", "1967", "1968", "1969", "1970", "C"],
  ["Which Apollo mission first orbited the Moon with crew?", "Apollo 7", "Apollo 8", "Apollo 9", "Apollo 10", "B"],
  ["Who said \"Houston, we've had a problem\" on Apollo 13?", "Jim Lovell", "Jack Swigert", "Fred Haise", "Ken Mattingly", "B"],
  ["Which rocket launched Apollo Moon missions?", "Titan II", "Saturn V", "Atlas", "Delta", "B"],
  ["How many astronauts walked on the Moon?", "6", "9", "12", "15", "C"],
  ["Which Apollo mission was the first to use a lunar rover?", "Apollo 11", "Apollo 14", "Apollo 15", "Apollo 17", "C"],
  ["Who was the last person to walk on the Moon (to date)?", "Gene Cernan", "Harrison Schmitt", "John Young", "Dave Scott", "A"],
  ["Which Apollo mission landed near Surveyor's site?", "Apollo 11", "Apollo 12", "Apollo 14", "Apollo 16", "B"],
  ["What sea did Apollo 11 land in?", "Sea of Clouds", "Sea of Tranquility", "Sea of Serenity", "Ocean of Storms", "B"],
  ["Who stayed in lunar orbit during Apollo 11's landing?", "Buzz Aldrin", "Michael Collins", "Jim Lovell", "Bill Anders", "B"],
  ["Which Apollo mission had a geologist on the surface?", "Apollo 15", "Apollo 16", "Apollo 17", "Apollo 14", "C"],
  ["What was the name of Apollo 13's lunar module?", "Eagle", "Aquarius", "Antares", "Challenger", "B"],
  ["Which mission was a dress rehearsal for landing, descending close but not touching?", "Apollo 9", "Apollo 10", "Apollo 8", "Apollo 7", "B"],
  ["Who photographed Earthrise on Apollo 8?", "Frank Borman", "Jim Lovell", "Bill Anders", "Neil Armstrong", "C"],
  ["What is the Moon's average distance from Earth?", "238,855 miles", "93 million miles", "1 light-year", "10,000 miles", "A"],
  ["Does the Moon have a substantial atmosphere?", "Yes, like Earth", "No, only an exosphere", "Yes, mostly oxygen", "Yes, mostly CO2", "B"],
  ["What causes lunar maria (dark plains)?", "Ancient oceans of water", "Basaltic lava flows", "Impact glass only", "Vegetation", "B"],
  ["Which U.S. robotic program hard-landed photos before Apollo?", "Surveyor", "Ranger", "Lunar Orbiter", "Pioneer", "B"],
  ["Which program achieved soft landings before Apollo?", "Ranger", "Surveyor", "Mariner", "Viking", "B"],
  ["What is a mascon on the Moon?", "A mountain range", "A mass concentration affecting orbits", "A type of crater", "A dust storm", "B"],
  ["Which Apollo mission was struck by lightning after launch but continued?", "Apollo 11", "Apollo 12", "Apollo 13", "Apollo 14", "B"],
  ["Who golfed on the Moon?", "Neil Armstrong", "Alan Shepard", "Pete Conrad", "John Young", "B"],
  ["Which mission carried the first lunar rover?", "Apollo 14", "Apollo 15", "Apollo 16", "Apollo 17", "B"],
  ["What color is lunar dust typically described as up close?", "Bright white", "Charcoal gray/brown", "Blue", "Green", "B"],
  ["How long is one lunar day (sunrise to sunrise) roughly?", "24 hours", "7 days", "29.5 days", "365 days", "C"],
  ["What is the Moon's gravity compared to Earth's?", "About 1/6", "About 1/2", "Equal", "Twice", "A"],
  ["Which Soviet probe returned lunar samples robotically?", "Luna 16", "Luna 2", "Luna 9", "Lunokhod 1", "A"],
  ["What was Lunokhod?", "A crewed lander", "A Soviet lunar rover", "A U.S. satellite", "A rocket stage", "B"],
  ["Which Apollo call sign was \"Houston\" referring to?", "Kennedy Space Center", "Mission Control in Houston", "A ship at sea", "A tracking plane", "B"],
  ["What material did astronauts leave as a science experiment reflecting lasers?", "Flags only", "Retroreflectors", "Solar panels", "Fuel tanks", "B"],
  ["Which mountain did Apollo 15 explore near?", "Mount Everest", "Hadley Rille / Apennines", "Tycho Peak", "Olympus Mons", "B"],
  ["What was the Saturn V's third stage used for after TLI?", "Discarded immediately always", "S-IVB could help send craft toward Moon", "Lunar landing", "Earth reentry", "B"],
  ["Who was Apollo 11's backup commander?", "Jim Lovell", "John Young", "Pete Conrad", "Tom Stafford", "A"],
  ["What does LM stand for?", "Lunar Module", "Launch Motor", "Long Mission", "Lateral Maneuver", "A"],
  ["Which Apollo mission canceled its landing after a lightning-related guidance issue was fixed earlier—wait, which aborted landing due to abort guidance?", "Apollo 13 did not land", "Apollo 11", "Apollo 12", "Apollo 14 landed", "A"],
  ["Where did China land Chang'e-4?", "Near side", "Far side", "Polar ice only", "Earth orbit", "B"],
  ["What is Artemis II planned to do?", "Land first", "Crewed lunar flyby/orbit", "Mars landing", "ISS only", "B"],
  ["Which rock type is common in highland regions?", "Basalt", "Anorthosite", "Obsidian", "Sandstone", "B"],
  ["What protects lunar samples from contamination on return?", "Vacuum bags only", "Special quarantine and sealed containers", "Nothing", "Water immersion", "B"],
  ["Who was the second person on the Moon?", "Michael Collins", "Buzz Aldrin", "Pete Conrad", "Alan Bean", "B"],
  ["What phrase did Armstrong say about a small step?", "One small step for a man...", "The Eagle has melted", "Tranquility base online", "We came in peace only", "A"],
  ["Which mission deployed a central station ALSEP package early on?", "Apollo 11 (ESEPs) / later ALSEP missions", "Only Apollo 17", "None", "Gemini 12", "A"],
  ["What is the South Pole–Aitken basin?", "An Earth crater", "A huge lunar impact basin", "A Mars valley", "A Saturn ring gap", "B"],
  ["Why are lunar poles of interest for Artemis?", "Warmer temperatures", "Possible water ice in permanently shadowed regions", "Thicker air", "Active volcanoes", "B"],
  ["Which country launched Chandrayaan lunar missions?", "Japan", "India", "Australia", "Brazil", "B"],
]);

const solar = pack("solar", [
  ["After the Sun, what is the nearest star to Earth?", "Sirius", "Ursa Major", "Vega", "Proxima Centauri", "D"],
  ["Which planet is closest to the Sun?", "Venus", "Mercury", "Earth", "Mars", "B"],
  ["Which planet is known as the Red Planet?", "Jupiter", "Mars", "Venus", "Mercury", "B"],
  ["Which is the largest planet in our solar system?", "Saturn", "Jupiter", "Neptune", "Uranus", "B"],
  ["Which planet has the most prominent ring system?", "Jupiter", "Saturn", "Uranus", "Neptune", "B"],
  ["What is the hottest planet in our solar system?", "Mercury", "Venus", "Mars", "Jupiter", "B"],
  ["Which planet rotates on its side?", "Neptune", "Uranus", "Saturn", "Venus", "B"],
  ["What is the Sun primarily made of?", "Oxygen and nitrogen", "Hydrogen and helium", "Iron and nickel", "Carbon and silicon", "B"],
  ["Which dwarf planet was reclassified from planet status in 2006?", "Ceres", "Pluto", "Eris", "Haumea", "B"],
  ["What is the asteroid belt located between?", "Earth and Mars", "Mars and Jupiter", "Jupiter and Saturn", "Saturn and Uranus", "B"],
  ["Which spacecraft has left the heliosphere into interstellar space first?", "Voyager 2", "Voyager 1", "Pioneer 11", "New Horizons", "B"],
  ["What galaxy do we live in?", "Andromeda", "Milky Way", "Triangulum", "Whirlpool", "B"],
  ["What is a light-year a measure of?", "Time", "Distance", "Brightness", "Mass", "B"],
  ["Which planet has a day longer than its year?", "Mercury", "Venus", "Mars", "Jupiter", "B"],
  ["What are Saturn's rings mostly made of?", "Gas clouds", "Ice and rock particles", "Liquid water", "Metal sheets", "B"],
  ["Which moon is the largest in the solar system?", "Titan", "Ganymede", "Callisto", "Io", "B"],
  ["Which moon has a thick atmosphere and lakes of hydrocarbons?", "Europa", "Titan", "Enceladus", "Triton", "B"],
  ["Which Jovian moon is famous for active volcanoes?", "Europa", "Io", "Ganymede", "Callisto", "B"],
  ["Which moon has a subsurface ocean and icy crust of high interest for life?", "Phobos", "Europa", "Deimos", "Miranda", "B"],
  ["What is the Kuiper Belt?", "A belt of gas near Mercury", "A region of icy bodies beyond Neptune", "Saturn's rings", "An asteroid mining zone near Earth", "B"],
  ["What is the Oort Cloud?", "A Martian cloud layer", "A distant spherical reservoir of comets", "Jupiter's storm", "Earth's exosphere", "B"],
  ["Which planet has the Great Red Spot?", "Saturn", "Jupiter", "Neptune", "Mars", "B"],
  ["What is the Great Red Spot?", "A mountain", "A giant storm", "A crater", "A moon", "B"],
  ["Which planet is densest?", "Saturn", "Jupiter", "Earth", "Neptune", "C"],
  ["What causes the seasons on Earth?", "Distance to Sun only", "Axial tilt", "Moon phases", "Solar flares", "B"],
  ["Which planet has the fastest winds in the solar system (often cited)?", "Jupiter", "Neptune", "Saturn", "Mars", "B"],
  ["What is a comet's glowing envelope called?", "Core", "Coma", "Belt", "Mantle", "B"],
  ["What remains of a comet's path that can cause meteor showers?", "Dust trail", "Solid ring", "Magnetic field", "Atmosphere", "A"],
  ["Which meteor shower is linked to Comet Swift–Tuttle?", "Perseids", "Leonids", "Orionids", "Geminids", "A"],
  ["What is an exoplanet?", "A planet inside the Sun", "A planet orbiting another star", "A moon of Jupiter", "A dwarf planet", "B"],
  ["Which method detects exoplanets by dimming of starlight?", "Radial velocity", "Transit", "Direct imaging only", "Parallax", "B"],
  ["What is the heliosphere?", "Earth's ozone", "The Sun's solar-wind bubble", "A black hole jet", "Mars' atmosphere", "B"],
  ["Which planet has Olympus Mons?", "Earth", "Mars", "Venus", "Mercury", "B"],
  ["What is Olympus Mons?", "A canyon", "A giant volcano", "A lake", "A moon", "B"],
  ["Which canyon system is on Mars?", "Grand Canyon", "Valles Marineris", "Hell's Gate", "Tycho Rille", "B"],
  ["What is the largest known star by radius (commonly cited examples vary)?", "The Sun", "UY Scuti (often cited)", "Proxima Centauri", "Sirius B", "B"],
  ["What will the Sun become after its red-giant phase?", "Black hole", "White dwarf", "Neutron star", "Pulsar", "B"],
  ["Which planet was visited by Cassini for many years?", "Jupiter", "Saturn", "Uranus", "Neptune", "B"],
  ["What did the Huygens probe land on?", "Europa", "Titan", "Enceladus", "Triton", "B"],
  ["Which spacecraft studied Jupiter before Juno and dropped a probe?", "Cassini", "Galileo", "Voyager 2", "Pioneer 10", "B"],
  ["What is a nebula?", "A black hole", "A cloud of gas and dust", "A type of asteroid", "A comet nucleus only", "B"],
  ["Which force keeps planets in orbit?", "Magnetism alone", "Gravity", "Dark energy only", "Solar wind pressure alone", "B"],
  ["What is the asteroid that threatened Earth awareness famously in films, but scientifically a near-Earth example class?", "Main-belt only", "Near-Earth asteroids", "Only Kuiper objects", "Only comets", "B"],
  ["Which planet has a hexagon-shaped polar storm?", "Jupiter", "Saturn", "Uranus", "Neptune", "B"],
  ["What is Ceres?", "A moon of Mars", "A dwarf planet in the asteroid belt", "A comet", "A star", "B"],
  ["Which planet has moons named Phobos and Deimos?", "Venus", "Mars", "Mercury", "Jupiter", "B"],
  ["What is a supernova?", "A quiet star", "An exploding star", "A planet collision", "A solar eclipse", "B"],
  ["Which galaxy is on a collision course with the Milky Way in billions of years?", "Triangulum only", "Andromeda", "Large Magellanic Cloud only", "Whirlpool", "B"],
  ["What protects Earth from much solar/cosmic radiation?", "Only clouds", "Magnetic field and atmosphere", "The Moon alone", "Saturn's rings", "B"],
  ["Which unit is often used for distances within the solar system?", "Light-year only", "Astronomical Unit (AU)", "Parsec only", "Fathom", "B"],
]);

const datasets = {
  "early-manned": early,
  "modern-spaceflight": modern,
  "to-the-moon": moon,
  "solar-system": solar,
};

for (const [key, questions] of Object.entries(datasets)) {
  if (questions.length !== 50) {
    throw new Error(`${key} has ${questions.length} questions, expected 50`);
  }
  const path = join(outDir, `${key}.json`);
  writeFileSync(path, JSON.stringify(questions, null, 2) + "\n");
  console.log(`Wrote ${questions.length} -> ${path}`);
}

writeFileSync(
  join(outDir, "index.ts"),
  `import type { CategoryId, TriviaQuestion } from "@/lib/types";
import early from "./early-manned.json";
import modern from "./modern-spaceflight.json";
import moon from "./to-the-moon.json";
import solar from "./solar-system.json";

export const QUESTIONS: Record<CategoryId, TriviaQuestion[]> = {
  "early-manned": early as TriviaQuestion[],
  "modern-spaceflight": modern as TriviaQuestion[],
  "to-the-moon": moon as TriviaQuestion[],
  "solar-system": solar as TriviaQuestion[],
};

export function getQuestions(id: CategoryId): TriviaQuestion[] {
  return QUESTIONS[id];
}
`
);

console.log("Done.");
