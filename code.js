// It still needs alot of work :
// - write the word,explanation and example in multiple languages, because it make more sense.
// - work on the style.

let nouns = [
  {word: '"Computer"', explanation: "ein elektronisches Gerät, das zur Verarbeitung von Informationen verwendet wird.", example: "- Ein elektronisches Gerät, das zur Verarbeitung von Informationen verwendet wird."},
  {word: '"Hund"', explanation: "ein domestiziertes Säugetier, das oft als Haustier gehalten oder zur Jagd verwendet wird.", example: "- Mein Hund liebt es, im Park Apportieren zu spielen."},
  {word: '"Buch"', explanation: "eine schriftliche oder gedruckte Arbeit, die aus Seiten besteht, die entlang einer Seite geleimt oder genäht und in Deckel gebunden sind.", example: "- Ich lese gerne ein gutes Buch vor dem Schlafengehen."},
  {word: '"Auto"', explanation: "ein Straßenfahrzeug mit einem Motor und vier Rädern.", example: "- Ich fahre jeden Tag mit meinem Auto zur Arbeit."},
  {word: '"Telefon"', explanation: "ein elektronisches Gerät zur Herstellung und Entgegennahme von Telefonanrufen.", example: "- Ich trage mein Telefon immer bei mir für den Fall von Notfällen."},
  {word: '"Kaffee"', explanation: "ein Getränk aus gerösteten Kaffeebohnen.", example: "- Ich mag es, meinen Tag mit einer Tasse Kaffee zu beginnen."},
];

let verbs = [
  {word: '"Laufen"', explanation: "sich mit schnellen Schritten fortbewegen, indem man beide Füße gleichzeitig vom Boden abhebt.", example: "- Ich laufe gerne im Park zur Übung."},
  {word:'"Lesen"', explanation: "den Sinn von geschriebenen oder gedruckten Texten verstehen, indem man die Zeichen oder Symbole interpretiert, aus denen sie bestehen.", example: "- Ich lese gerne Bücher in meiner Freizeit."},
  {word: '"Kochen"', explanation: "Essen durch Mischen, Kombinieren und Erhitzen von Zutaten zubereiten.", example: "- Ich habe das Kochen von meiner Großmutter gelernt."},
  {word: '"Fahren"', explanation: "ein Motorfahrzeug bedienen und dessen Richtung und Geschwindigkeit kontrollieren.", example: "- Ich fahre jeden Tag mit meinem Auto zur Arbeit."},
  {word: '"Schwimmen"', explanation: "sich durch Wasser bewegen, indem man sich mit den Gliedmaßen vorwärts treibt.", example: "- Ich schwimme im Sommer gerne im Meer."},
  {word: '"Singen"', explanation: "Musikalische Klänge mit der Stimme produzieren.", example: "- Ich singe gerne unter der Dusche."},
];

let adjectives = [
  {word: '"Glücklich"', explanation: "Freude oder Zufriedenheit empfindend oder zeigend.", example: "- Ich fühle mich glücklich, wenn ich Zeit mit meiner Familie verbringe."},
  {word: '"Rot"', explanation: "einer Farbe am Ende des Spektrums neben Orange und gegenüber Violett.", example: "- Ich trage gerne ein rotes Kleid zu besonderen Anlässen."},
  {word: '"Groß"', explanation: "von großer oder überdurchschnittlicher Höhe, insbesondere (auf ein Objekt bezogen) im Verhältnis zur Breite.", example: "- Der hohe Baum bot an einem heißen Tag Schatten."},
  {word: '"Hell"', explanation: "viel Licht ausstrahlend oder reflektierend; strahlend.", example: "- Die helle Sonne machte es schwer zu sehen."},
  {word: '"Kalt"', explanation: "von oder bei einer niedrigen oder relativ niedrigen Temperatur, insbesondere im Vergleich zum menschlichen Körper.", example: "- Ich trinke an einem heißen Tag gerne kaltes Wasser."},
  {word: '"Schön"', explanation: "von angenehmem Aussehen; attraktiv.", example: "- Der schöne Garten war voller Blumen."},
];

let adverbs = [
  {word: '"Schnell"', explanation: "mit Geschwindigkeit; schnell.", example: "- Ich habe schnell meine Hausaufgaben erledigt, um fernsehen zu können."},
  {word: '"Leise"', explanation: "mit niedriger Lautstärke; leise.", example: "- Das Baby schlief leise in seinem Bett."},
  {word: '"Vorsichtig"', explanation: " mit Aufmerksamkeit; vorsichtig.", example: "- Ich habe die Anweisungen sorgfältig gelesen, bevor ich das Möbelstück zusammengebaut habe."},
  {word: '"Glücklicherweise"', explanation: "Freude oder Zufriedenheit empfindend oder zeigend.", example: "- Die Kinder spielten glücklich im Park."},
  {word: '"Langsam"', explanation: "in langsamer Geschwindigkeit oder Tempo; nicht schnell.", example: "- Ich bin langsam gelaufen, um nicht auf dem unebenen Bürgersteig zu stolpern."},
  {word: '"Laut"', explanation: "mit hoher Lautstärke; laut.", example: "- Die Musik wurde laut auf der Party gespielt."},
];

let pronouns = [
  {word: '"Ich"', explanation: "von einem Sprecher verwendet, um sich selbst zu bezeichnen.", example: "- Ich lese gerne Bücher in meiner Freizeit."},
  {word: '"Du"', explanation: "verwendet, um auf die Person oder Personen zu verweisen, an die man sich wendet.", example: "- Kannst du mir bitte das Salz reichen?"},
  {word: '"Er"', explanation: "verwendet, um auf einen Mann oder Jungen zu verweisen.", example: "- Er ging zum Laden, um Brot zu kaufen."},
  {word: '"Sie"', explanation: "verwendet, um auf eine Frau oder ein Mädchen zu verweisen.", example: "- Sie ist eine talentierte Musikerin."},
  {word: '"Es"', explanation: "verwendet, um auf etwas zu verweisen, das zuvor erwähnt wurde oder leicht identifiziert werden kann.", example: "- Es war ein schöner Tag am Strand."},
  {word: '"Wir"', explanation: "verwendet, um auf eine Gruppe von Personen zu verweisen, zu der der Sprecher gehört.", example: "- Wir gehen heute Abend ins Kino."},
];

let prespositions = [
  {word: '"In"', explanation: "den Zustand von etwas ausdrücken, das von etwas anderem umschlossen oder umgeben zu sein scheint.", example: "- Das Buch ist in der Box auf dem Regal."},
  {word: '"Auf"', explanation: "den Zustand ausdrücken, in dem man mit etwas in Kontakt steht und von ihm unterstützt wird.", example: "- Der Teller steht auf dem Tisch."},
  {word: '"An"', explanation: "die Lage oder Ankunft von etwas oder jemandem ausdrücken.", example: "- Ich treffe mich um 15 Uhr mit dir im Park."},
  {word: '"Zu"', explanation: "die Bewegung in Richtung (eines bestimmten Ortes) ausdrücken.", example: "- Ich gehe zum Laden, um Lebensmittel zu kaufen."},
  {word: '"Mit"', explanation: "das Mittel oder Instrument angeben, mit dem etwas getan wird.", example: "- Ich habe den Brief mit einem Stift geschrieben."},
  {word: '"Durch"', explanation: "den Mittelweg oder den ausführenden Akteur angeben.", example: "- Ich bin mit dem Flugzeug nach Europa gereist."},
];

let conjunctions = [
  {word: '"Und"', explanation: "verwendet, um Wörter, Phrasen oder Sätze miteinander zu verbinden.", example: "- Ich lese gerne Bücher und schaue Filme."},
  {word: '"Aber"', explanation: "verwendet, um etwas einzuführen, das im Gegensatz zu dem steht, was bereits erwähnt wurde.", example: "- Ich möchte zur Party gehen, aber ich muss zuerst meine Arbeit erledigen."},
  {word: '"Oder"', explanation: "verwendet, um eine Alternative anzugeben.", example: "- Möchtest du Tee oder Kaffee?"},
  {word: '"Also"', explanation: "verwendet, um eine Konsequenz oder Schlussfolgerung anzuzeigen.", example: "- Ich habe hart gelernt, also habe ich die Prüfung bestanden."},
  {word: '"Wenn"', explanation: " verwendet, um eine Bedingung oder hypothetische Situation einzuführen.", example: "- Wenn es regnet, werden wir drinnen bleiben."},
  {word: '"Weil"', explanation: "verwendet, um einen Grund oder eine Erklärung einzuführen.", example: "- Ich bin früh ins Bett gegangen, weil ich müde war."},
];

function generateWordBar() {
  nouns.addEventListener("click", generateNouns())
  verbs.addEventListener("click", generateVerbs())
  adjectives.addEventListener("click", generateAdjectives())
  adverbs.addEventListener("click", generateAdverbs())
  pronouns.addEventListener("click", generatePronouns())
  prespositions.addEventListener("click", generatePrespositions())
  conjunctions.addEventListener("click", generateConjunctions())
}

function generateNouns() {
  let randomNounsIndex = Math.floor(Math.random() * nouns.length);
  let randomNounsWord = nouns[randomNounsIndex].word;
  let randomNounsexplanation = nouns[randomNounsIndex].explanation;
  let randomNounsExample = nouns[randomNounsIndex].example;
  document.querySelector('.word-bar').textContent = randomNounsWord;
  document.querySelector('.explanation-bar').textContent = randomNounsexplanation;
  document.querySelector('.example-bar').textContent = randomNounsExample;
}

function generateVerbs() {
  let randomVerbsIndex = Math.floor(Math.random() * verbs.length);
  let randomVerbsWord = verbs[randomVerbsIndex].word;
  let randomVerbsexplanation = verbs[randomVerbsIndex].explanation;
  let randomVerbsExample = verbs[randomVerbsIndex].example;
  document.querySelector('.word-bar').textContent = randomVerbsWord;
  document.querySelector('.explanation-bar').textContent = randomVerbsexplanation;
  document.querySelector('.example-bar').textContent = randomVerbsExample;
}


function generateAdjectives() {
  let randomAdjectivesIndex = Math.floor(Math.random()* adjectives.length);
  let randomAdjectivesWord = adjectives[randomAdjectivesIndex].word;
  let randomAdjectivesexplanation = adjectives[randomAdjectivesIndex].explanation;
  let randomAdjectivesExample = adjectives[randomAdjectivesIndex].example;
  document.querySelector('.word-bar').textContent = randomAdjectivesWord;
  document.querySelector('.explanation-bar').textContent = randomAdjectivesexplanation;
  document.querySelector('.example-bar').textContent = randomAdjectivesExample;
}


function generateAdverbs() {
  let randomAdverbsIndex = Math.floor(Math.random()* adverbs.length);
  let randomAdverbsWord = adverbs[randomAdverbsIndex].word;
  let randomAdverbsexplanation = adverbs[randomAdverbsIndex].explanation;
  let randomAdverbsExample = adverbs[randomAdverbsIndex].example;
  document.querySelector('.word-bar').textContent = randomAdverbsWord;
  document.querySelector('.explanation-bar').textContent = randomAdverbsexplanation;
  document.querySelector('.example-bar').textContent = randomAdverbsExample;
}


function generatepronouns() {
  let randompronounsIndex = Math.floor(Math.random()* pronouns.length);
  let randompronounsWord = pronouns[randompronounsIndex].word;
  let randompronounsexplanation = pronouns[randompronounsIndex].explanation;
  let randompronounsExample = pronouns[randompronounsIndex].example;
  document.querySelector('.word-bar').textContent = randompronounsWord;
  document.querySelector('.explanation-bar').textContent = randompronounsexplanation;
  document.querySelector('.example-bar').textContent = randompronounsExample;
}

function generatePrespositions() {
  let randomprespositionsIndex = Math.floor(Math.random()* prespositions.length);
  let randomprespositionsWord = prespositions[randomprespositionsIndex].word;
  let randomprespositionsexplanation = prespositions[randomprespositionsIndex].explanation;
  let randomprespositionsExample = prespositions[randomprespositionsIndex].example;
  document.querySelector('.word-bar').textContent = randomprespositionsWord;
  document.querySelector('.explanation-bar').textContent = randomprespositionsexplanation;
  document.querySelector('.example-bar').textContent = randomprespositionsExample;
}


function generateConjunctions() {
  let randomConjunctionsIndex = Math.floor(Math.random()* conjunctions.length);
  let randomConjunctionsWord = conjunctions[randomConjunctionsIndex].word;
  let randomConjunctionsexplanation = conjunctions[randomConjunctionsIndex].explanation;
  let randomConjunctionsExample = conjunctions[randomConjunctionsIndex].example;
  document.querySelector('.word-bar').textContent = randomConjunctionsWord;
  document.querySelector('.explanation-bar').textContent = randomConjunctionsexplanation;
  document.querySelector('.example-bar').textContent = randomConjunctionsExample;
}

