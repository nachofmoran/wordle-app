export const checkWord = (word, solution) => {
  let result = false;

  if (word === solution) {
    result = true;
  }
  return result;
};

export const updateColors = (colorObject, word, solution) => {
  const auxObject = { ...colorObject };

  for (let j = 0; j < word.length; j++) {
    if (auxObject[word[j]] === "green") {
    } else if (solution[j] === word[j]) {
      auxObject[word[j]] = "green";
    } else {
      for (let i = 0; i < word.length; i++) {
        if (word[j] === solution[i]) {
          auxObject[word[j]] = "yellow";
          break;
        } else {
          auxObject[word[j]] = "grey";
        }
      }
    }
  }
  return auxObject;
};
