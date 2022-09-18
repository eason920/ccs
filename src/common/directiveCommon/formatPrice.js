//將金額加上千分位逗號(台幣)
import { fnFormatPrice } from "@/common/methodCommon/publicMethod";
//
export function directiveFormatPrice(app) {
  app.directive("formatPrice", (el, binding) => {
    const sNum = fnFormatPrice(binding.value);
    el.innerHTML = sNum;
  });
  return {
    app,
  };
}
