export const formatEstimate = (number: number): string => {
  let resault = "";
  const m = number / 160;
  const mr = number % 160;
  const w = mr / 40;
  const wr = mr % 40;
  const d = wr / 8;
  const dr = mr % 8;
  m > 0
    ? (resault += `${Math.floor(m) === 0 ? "" : `${Math.floor(m)} m`} `)
    : "";
  w > 0
    ? (resault += `${Math.floor(w) === 0 ? "" : `${Math.floor(w)} w`}`)
    : "";
  d > 0
    ? (resault += `${Math.floor(d) === 0 ? "" : `${Math.floor(d)}d`} `)
    : "";
  dr > 0
    ? (resault += `${Math.floor(dr) === 0 ? "" : `${Math.floor(dr)} h`} `)
    : "";
  return resault;
};
