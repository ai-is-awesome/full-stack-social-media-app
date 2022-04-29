export const getIdFromPath = (path) => {
  const arr = path.split("/");
  return arr ? arr.slice(-1)[0] : "";
};
