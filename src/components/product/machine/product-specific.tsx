import type { ComponentType } from "react";

import { ReviveSeenIn, ReviveWhyBathe } from "@/components/product/machine/revive-sections";
import { UltimateInstall } from "@/components/product/machine/ultimate-install";
import { UltimateFourMachines, UltimateWaters } from "@/components/product/machine/ultimate-sections";
import type { CustomSectionId } from "@/data/product-pages/machine";

/** Sections that appear on a single product page only. */
export const productSpecificSections: Record<CustomSectionId, ComponentType> = {
  "ultimate-four-machines": UltimateFourMachines,
  "ultimate-waters": UltimateWaters,
  "ultimate-install": UltimateInstall,
  "revive-seen-in": ReviveSeenIn,
  "revive-why-bathe": ReviveWhyBathe,
};
