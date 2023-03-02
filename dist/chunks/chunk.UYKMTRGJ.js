import {
  progress_bar_styles_default
} from "./chunk.W537FM5F.js";
import {
  i
} from "./chunk.NKEDREQE.js";
import {
  LocalizeController
} from "./chunk.VO5MFRLD.js";
import {
  l
} from "./chunk.YRCP2SMV.js";
import {
  o
} from "./chunk.KGFCQ6E5.js";
import {
  ShoelaceElement,
  e,
  e2
} from "./chunk.2TGDKYZZ.js";
import {
  y
} from "./chunk.CBCVEM3I.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/progress-bar/progress-bar.ts
var SlProgressBar = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.localize = new LocalizeController(this);
    this.value = 0;
    this.indeterminate = false;
    this.label = "";
  }
  render() {
    return y`
      <div
        part="base"
        class=${o({
      "progress-bar": true,
      "progress-bar--indeterminate": this.indeterminate,
      "progress-bar--rtl": this.localize.dir() === "rtl"
    })}
        role="progressbar"
        title=${l(this.title)}
        aria-label=${this.label.length > 0 ? this.label : this.localize.term("progress")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate ? 0 : this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${i({ width: `${this.value}%` })}>
          ${!this.indeterminate ? y` <slot part="label" class="progress-bar__label"></slot> ` : ""}
        </div>
      </div>
    `;
  }
};
SlProgressBar.styles = progress_bar_styles_default;
__decorateClass([
  e2({ type: Number, reflect: true })
], SlProgressBar.prototype, "value", 2);
__decorateClass([
  e2({ type: Boolean, reflect: true })
], SlProgressBar.prototype, "indeterminate", 2);
__decorateClass([
  e2()
], SlProgressBar.prototype, "label", 2);
SlProgressBar = __decorateClass([
  e("sl-progress-bar")
], SlProgressBar);

export {
  SlProgressBar
};
