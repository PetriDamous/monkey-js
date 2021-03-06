import {
  fetchGlobal,
  setGlobalValue,
} from "../../../global/globalObjFunctions";
import { getButtonsArray } from "../../uiFunctions";

/********************
  Tool Tip
*********************/

export function ccToolTip_manuel() {
  const { isCcOnEnter_manual } = fetchGlobal("ccOptions_manual");

  const $closeCaptionBtns = getButtonsArray("Closed Caption");

  if (isCcOnEnter_manual) {
    $closeCaptionBtns.forEach((ccBtn) => {
      ccBtn.setAttribute("title", "Closed Caption Close");
    });
    return;
  } else {
    $closeCaptionBtns.forEach((ccBtn) => {
      ccBtn.setAttribute("title", "Closed Caption Open");
    });
    return;
  }
}

/**********************
  Open Close CC text
***********************/

export function ccFunc_manual() {
  const { isCcDisplay_manual } = fetchGlobal("ccOptions_manual");

  const $ccTextBox = document.getElementById("ccTextBox");

  if (isCcDisplay_manual) {
    $ccTextBox.style.visibility = "visible";

    setGlobalValue("ccOptions_manual", {
      ...cpGlobalObj.ccOptions_manual,
      isCcOnEnter_manual: true,
    });

    setGlobalValue("ccOptions_manual", {
      ...cpGlobalObj.ccOptions_manual,
      isCcDisplay_manual: !true,
    });

    ccToolTip_manuel();
  } else {
    $ccTextBox.style.visibility = "hidden";

    setGlobalValue("ccOptions_manual", {
      ...cpGlobalObj.ccOptions_manual,
      isCcOnEnter_manual: !true,
    });

    setGlobalValue("ccOptions_manual", {
      ...cpGlobalObj.ccOptions_manual,
      isCcDisplay_manual: true,
    });

    ccToolTip_manuel();
  }
}
