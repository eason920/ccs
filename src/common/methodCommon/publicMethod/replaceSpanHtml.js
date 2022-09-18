//如果字串中有span標籤將其用空白取代//
export const replaceSpanHtml = (name = "") => {
  if (name.includes("<span>")) {
    let sName = "";
    sName = name.replace(/<span>|<\/span>/g, "");
    return sName;
  } else {
    return name;
  }
};
