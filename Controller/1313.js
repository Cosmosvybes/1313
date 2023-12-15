function changeCappings(cappings) {
  let splitCappings = cappings.split("");
  const cappBucket = [];
  splitCappings.map((cap) => {
    let thirteen13 = [
      { key: "a", eqv: "n" },
      { key: "b", eqv: "o" },
      { key: "c", eqv: "p" },
      { key: "d", eqv: "q" },
      { key: "e", eqv: "r" },
      { key: "f", eqv: "s" },
      { key: "g", eqv: "t" },
      { key: "h", eqv: "u" },
      { key: "i", eqv: "v" },
      { key: "j", eqv: "w" },
      { key: "k", eqv: "x" },
      { key: "l", eqv: "y" },
      { key: "m", eqv: "z" },
      { key: "n", eqv: "a" },
      { key: "o", eqv: "b" },
      { key: "p", eqv: "c" },
      { key: "q", eqv: "d" },
      { key: "r", eqv: "e" },
      { key: "s", eqv: "f" },
      { key: "t", eqv: "g" },
      { key: "u", eqv: "h" },
      { key: "v", eqv: "i" },
      { key: "w", eqv: "j" },
      { key: "x", eqv: "k" },
      { key: "y", eqv: "l" },
      { key: "z", eqv: "m" },
      { key: "0", eqv: 0 },
      { key: "1", eqv: 1 },
      { key: "2", eqv: 2 },
      { key: "3", eqv: 3 },
      { key: "4", eqv: 4 },
      { key: "5", eqv: 5 },
      { key: "6", eqv: 6 },
      { key: "7", eqv: 7 },
      { key: "8", eqv: 8 },
      { key: "9", eqv: 9 },
    ];
    const findLetter = thirteen13.find((letter) => {
      return letter.key == cap;
    });

    if (findLetter) {
      cappBucket.push(findLetter.eqv);
    } else {
      cappBucket.push(" ");
     
    }
  });

  return cappBucket.join("");
}
module.exports = { changeCappings };
