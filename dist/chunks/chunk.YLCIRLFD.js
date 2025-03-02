import {
  SlDropdown
} from "./chunk.U2HDU6MV.js";

// src/react/dropdown/index.ts
import * as React from "react";
import { createComponent } from "@lit-labs/react";
var dropdown_default = createComponent({
  tagName: "sl-dropdown",
  elementClass: SlDropdown,
  react: React,
  events: {
    onSlShow: "sl-show",
    onSlAfterShow: "sl-after-show",
    onSlHide: "sl-hide",
    onSlAfterHide: "sl-after-hide"
  }
});

export {
  dropdown_default
};
