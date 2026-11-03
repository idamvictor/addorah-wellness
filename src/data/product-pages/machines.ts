import { echoFlowPage } from "@/data/product-pages/echo-flow";
import { echoH2Page } from "@/data/product-pages/echo-h2";
import { echoRefreshPage } from "@/data/product-pages/echo-refresh";
import { echoRevivePage } from "@/data/product-pages/echo-revive";
import { echoRoPage } from "@/data/product-pages/echo-ro";
import { echoUltimatePage } from "@/data/product-pages/echo-ultimate";
import type { MachinePageContent } from "@/data/product-pages/machine";

/** Machine product pages, keyed by product slug. */
export const machinePages: Record<string, MachinePageContent> = {
  [echoFlowPage.slug]: echoFlowPage,
  [echoH2Page.slug]: echoH2Page,
  [echoRoPage.slug]: echoRoPage,
  [echoUltimatePage.slug]: echoUltimatePage,
  [echoRevivePage.slug]: echoRevivePage,
  [echoRefreshPage.slug]: echoRefreshPage,
};
