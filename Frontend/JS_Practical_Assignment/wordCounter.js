function runWordCounter() {
  let sentence = prompt("Enter a sentence:");

  let trimmedSentence = sentence.trim();

  let lowerCaseSentence = trimmedSentence.toLowerCase();

  let words = lowerCaseSentence.split(" ");

  let wordCount = words.length;

  alert(
    "Processed Sentence: " + lowerCaseSentence + "\nTotal Words: " + wordCount,
  );

  console.log("Sentence:", lowerCaseSentence);
  console.log("Words:", words);
  console.log("Word Count:", wordCount);
}
