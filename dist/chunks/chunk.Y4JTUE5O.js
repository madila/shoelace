import {
  o
} from "./chunk.KGFCQ6E5.js";
import {
  watch
} from "./chunk.VQ3XOPCT.js";
import {
  ShoelaceElement,
  e,
  e2,
  t
} from "./chunk.2TGDKYZZ.js";
import {
  avatar_styles_default
} from "./chunk.VCGP3TIU.js";
import {
  y
} from "./chunk.CBCVEM3I.js";
import {
  __decorateClass
} from "./chunk.LKA3TPUC.js";

// src/components/avatar/avatar.ts
var SlAvatar = class extends ShoelaceElement {
  constructor() {
    super(...arguments);
    this.hasError = false;
    this.image = "";
    this.label = "";
    this.initials = "";
    this.loading = "eager";
    this.shape = "circle";
  }
  handleImageChange() {
    this.hasError = false;
  }
  render() {
    return y`
      <div
        part="base"
        class=${o({
      avatar: true,
      "avatar--circle": this.shape === "circle",
      "avatar--rounded": this.shape === "rounded",
      "avatar--square": this.shape === "square"
    })}
        role="img"
        aria-label=${this.label}
      >
        ${this.initials ? y` <div part="initials" class="avatar__initials">${this.initials}</div> ` : y`
              <slot name="icon" part="icon" class="avatar__icon" aria-hidden="true">
                <sl-icon name="person-fill" library="system"></sl-icon>
              </slot>
            `}
        ${this.image && !this.hasError ? y`
              <img
                part="image"
                class="avatar__image"
                src="${this.image}"
                loading="${this.loading}"
                alt=""
                @error="${() => this.hasError = true}"
              />
            ` : ""}
      </div>
    `;
  }
};
SlAvatar.styles = avatar_styles_default;
__decorateClass([
  t()
], SlAvatar.prototype, "hasError", 2);
__decorateClass([
  e2()
], SlAvatar.prototype, "image", 2);
__decorateClass([
  e2()
], SlAvatar.prototype, "label", 2);
__decorateClass([
  e2()
], SlAvatar.prototype, "initials", 2);
__decorateClass([
  e2()
], SlAvatar.prototype, "loading", 2);
__decorateClass([
  e2({ reflect: true })
], SlAvatar.prototype, "shape", 2);
__decorateClass([
  watch("image")
], SlAvatar.prototype, "handleImageChange", 1);
SlAvatar = __decorateClass([
  e("sl-avatar")
], SlAvatar);

export {
  SlAvatar
};
