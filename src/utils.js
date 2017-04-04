export function filterObject(fullObj, keys) {
  if (fullObj == null) return null;
  if (keys == null) return fullObj;

  const obj = {};

  keys.forEach(key => {
    obj[key] = fullObj[key];
  });

  return obj;
}

export function getAttributes(attributesName, qtiAttributeObj) {
  const attributes = {};

  for (let key in qtiAttributeObj) {
    let attribute = qtiAttributeObj[key];

    if (attributesName.indexOf(attribute.name) > -1) {
      attributes[attribute.name] = attribute.value;
    }
  }

  return attributes;
}
