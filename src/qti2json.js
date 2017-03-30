 aimport { DOMParser } from "xmldom";

function qti2json(xmlString) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");
  return xmlDoc;
}

module.exports = qti2json;
