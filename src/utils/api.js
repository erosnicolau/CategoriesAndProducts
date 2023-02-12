export const loadJSON = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};
