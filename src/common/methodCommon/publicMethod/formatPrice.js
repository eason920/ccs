//將金額加上千分位逗號(台幣)
//
export const formatPrice = (price) => {
  if (
    typeof price === "string" ||
    (typeof price === "number" && price !== "")
  ) {
    let str = price.toString();
    let reg = new RegExp("([0]*)([1-9]+[0-9]+)", "g");
    price = str.replace(reg, "$2");
    let dot = RegExp(/./);

    console.log(price.match(dot));
    if (price.match(dot)) {
      let arr = price.split(".");
      price = arr[0];
    }

    if (String(price).slice(0, 1) === "-") {
      price = String(price).slice(1, String(price).length);
      if (/^\d+$/.test(price)) {
        return "-" + price.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      } else {
        return "";
      }
    } else if (/^\d+$/.test(price)) {
      return String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return "";
    }
  } else {
    return "";
  }
};
