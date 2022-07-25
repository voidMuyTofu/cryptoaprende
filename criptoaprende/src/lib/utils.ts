export function titleCaseWord(word: string) {
  if (!word) return word;
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}

export function filterUniqueValues(value: any, index: any, self: any) {
  return self.indexOf(value) === index;
}

export function fetchFromUrl(url: string, data: any, setData: any) {
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error HTTP: El status es ${response.status}`);
      }
      return response.json();
    })
    .then((actualData) => {
      setData(actualData);
    })
    .catch((err) => {
      setData([]);
      console.log(err.message);
    });
}
