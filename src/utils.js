export function filterObject(fullObj, keys) {
  if (fullObj == null) return null;
  if (keys == null) return fullObj;

  const obj = {};

  keys.forEach(key => {
    obj[key] = fullObj[key];
  });

  return obj;
}
