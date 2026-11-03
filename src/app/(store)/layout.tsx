import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { CartDrawer } from "@/components/layout/cart-drawer";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { listProducts } from "@/lib/catalog";
import { CatalogProvider } from "@/providers/catalog-provider";

export default async function StoreLayout({ children }: LayoutProps<"/">) {
  const products = await listProducts();

  return (
    <CatalogProvider products={products}>
      <AnnouncementBar />
      <SiteHeader />
      <main className="flex flex-1 flex-col">{children}</main>
      <SiteFooter />
      <CartDrawer />
    </CatalogProvider>
  );
}
