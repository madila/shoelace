import {
  registerTranslation
} from "../chunks/chunk.LLXYF66Q.js";
import "../chunks/chunk.LKA3TPUC.js";

// src/translations/nl.ts
var translation = {
  $code: "nl",
  $name: "Nederlands",
  $dir: "ltr",
  clearEntry: "Invoer wissen",
  close: "Sluiten",
  copy: "Kopi\xEBren",
  numOptionsSelected: (num) => {
    if (num === 0)
      return "Geen optie geselecteerd";
    if (num === 1)
      return "1 optie geselecteerd";
    return `${num} opties geselecteerd`;
  },
  currentValue: "Huidige waarde",
  hidePassword: "Verberg wachtwoord",
  loading: "Bezig met laden",
  progress: "Voortgang",
  remove: "Verwijderen",
  resize: "Formaat wijzigen",
  scrollToEnd: "Scroll naar einde",
  scrollToStart: "Scroll naar begin",
  selectAColorFromTheScreen: "Selecteer een kleur van het scherm",
  showPassword: "Laat wachtwoord zien",
  toggleColorFormat: "Wissel kleurnotatie"
};
registerTranslation(translation);
var nl_default = translation;
export {
  nl_default as default
};
