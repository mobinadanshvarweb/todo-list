export const generateHash = () => {
  const charachter =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
  let hash = "";
  for (let i = 0; i < 5; i++) {
    hash += charachter.charAt(Math.floor(Math.random() * charachter.length));
  }
  return hash;
};
