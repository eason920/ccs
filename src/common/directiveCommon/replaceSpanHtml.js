//如果字串中有span標籤將其用空白取代
import { fnReplaceSpanHtml } from "@/common/methodCommon/publicMethod";
//
export function directiveReplaceSpanHtml(app) {
  app.directive("replaceSpanHtml", (el, binding) => {
    const sName = fnReplaceSpanHtml(binding.value);
    el.innerHTML = sName;
  });
  return {
    app,
  };
}
