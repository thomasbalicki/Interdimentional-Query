const rickAndMortyQuotes = [
  "Wubba lubba dub dub! - Rick",
  "Existence is pain, Jerry! - Mr. Meeseeks",
  "Nobody exists on purpose. Nobody belongs anywhere. We're all going to die. Come watch TV. - Morty",
  "Get your shit together, Summer! - Rick",
  "I'm not looking for judgment, just a yes or no. Can you assimilate a giraffe? - Rick",
  "I'm not a hero. I'm a high-functioning sociopath. Do your research. - Rick",
  "What is my purpose? You pass butter. - Butter Robot",
  "I'm tiny Rick! - Rick",
  "I'm Pickle Rick! - Rick",
  "It's like the N word and the C word had a baby, and it was raised by all the bad words for Jews. - Rick",
  "I don't give a fuuuuuck! - Rick",
  "Rikki-tikki-tavi, biatch! - Birdperson",
  "You're a monster! A literal monster! - Summer",
  "Aww, bitch! - Rick",
  "This isn't Game of Thrones, Morty! - Rick",
  "Lick, lick, lick my balls! - Mr. Meeseeks",
  "Peace among worlds. - Rick",
  "To live is to risk it all. Otherwise, you're just an inert chunk of randomly assembled molecules drifting wherever the universe blows you. - Rick",
  "It's a figure of speech, Morty. They're bureaucrats. I don't respect them. - Rick",
  "You're not gonna believe this, because it usually never happens, but I made a mistake. - Rick",
  "You're young. You have your whole life ahead of you, and your anal cavity is still taut yet malleable. - Rick",
  "Just don't think about it. - Rick",
  "Sometimes science is more art than science, Morty. A lot of people don't get that. - Rick",
  "You gotta do it for Grandpa, Morty. You've gotta put these seeds inside your butt. - Rick",
  "Sometimes your genius is also your curse. - Beth",
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * rickAndMortyQuotes.length);
  return rickAndMortyQuotes[randomIndex];
}

export const randomQuote = getRandomQuote();
console.log(randomQuote);
