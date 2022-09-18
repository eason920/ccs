import { directiveFocus } from "./focus.js";
import { directiveFormatDate } from "./formatDate";
import { directiveFormatPrice } from "./formatPrice.js";
import { directiveSecretName } from "./secretName.js";
import { directiveReplaceSpanHtml } from "./replaceSpanHtml";
//
export function fnToDoDirective(app) {
  directiveFocus(app); //v-focus
  directiveFormatDate(app); //v-formatDate
  directiveFormatPrice(app); //v-formatPrice
  directiveSecretName(app); //v-secretName
  directiveReplaceSpanHtml(app); //v-replaceSpanHtml
  return {
    app,
  };
}
