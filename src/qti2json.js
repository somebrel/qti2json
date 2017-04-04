import { DOMParser } from "xmldom";
import { getAttributes, getChildren } from "./utils";

function qti2json(qtiString) {
  const qtiDocument = new DOMParser().parseFromString(qtiString, "text/xml");
  const assessmentItemAttr = qtiDocument.documentElement.attributes;
  const assessmentItemChildren = qtiDocument.documentElement.childNodes;

  const assessmentItem = {
    ...getAttributes(["identifier", "title", "adaptive"], assessmentItemAttr),
    children: getChildren(
      ["itemBody", "outcomeDeclaration"],
      assessmentItemChildren
    )
  };

  return assessmentItem;
}

module.exports = qti2json;
