export const processData = (data) => {
  const odd_numbers = [];
  const even_numbers = [];
  const alphabets = [];
  const special_characters = [];

  let totalSum = 0;
  let allAlphas = "";

  data.forEach(item => {
    if (/^\d+$/.test(item)) {
      const num = parseInt(item);
      if (num % 2 === 0) even_numbers.push(item);
      else odd_numbers.push(item);
      totalSum += num;
    } else if (/^[a-zA-Z]+$/.test(item)) {
      alphabets.push(item.toUpperCase());
      allAlphas += item;
    } else {
      special_characters.push(item);
    }
  });

  const reversed = allAlphas.split("").reverse();
  let concat_string = "";
  for (let i = 0; i < reversed.length; i++) {
    concat_string += i % 2 === 0
      ? reversed[i].toUpperCase()
      : reversed[i].toLowerCase();
  }

  return {
    odd_numbers,
    even_numbers,
    alphabets,
    special_characters,
    sum: totalSum,
    concat_string
  };
};
