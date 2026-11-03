"use client";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { BrandWordmark } from "@/components/layout/brand-wordmark";
import { InertLink } from "@/components/ui/inert-link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { categories } from "@/data/categories";
import { getProduct } from "@/data/products";
import { selectCartCount } from "@/stores/app-store";
import { useAppStore } from "@/providers/app-store-provider";

const featured = getProduct("echo-flask")!;

const navItemClass =
  "rounded-[4px] p-1 text-sm leading-[14px] font-medium text-white transition-colors hover:bg-white/10";

export function SiteHeader() {
  return (
    <div className="pointer-events-none sticky top-0 z-40 px-2 pt-5">
      <header className="pointer-events-auto mx-auto flex h-16 max-w-[1560px] items-center gap-4 rounded-2xl bg-ink/65 px-5 text-white backdrop-blur-[21px] lg:px-12">
        <MobileMenu />

        <Link href="/" aria-label="Addorah Wellness home" className="shrink-0">
          <BrandWordmark className="text-base text-white sm:text-lg" />
        </Link>

        <nav aria-label="Main" className="hidden flex-1 justify-center px-8 lg:flex">
          <NavigationMenu
            sideOffset={12}
            popupClassName="rounded-3xl bg-panel text-white shadow-2xl ring-white/10"
          >
            <NavigationMenuList className="gap-10">
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={`${navItemClass} h-auto bg-transparent hover:text-white focus:bg-white/10 data-popup-open:bg-white/15 data-popup-open:hover:bg-white/15 [&>svg]:hidden`}
                >
                  Shop
                </NavigationMenuTrigger>
                <NavigationMenuContent className="p-0">
                  <ShopMenu />
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <InertLink className={navItemClass}>Learn</InertLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <InertLink className={navItemClass}>Support</InertLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="ml-auto flex items-center gap-4 sm:gap-6 lg:ml-0">
          <span className="hidden items-center text-sm leading-[21px] font-semibold sm:flex">
            NGN ₦
            <Image
              src="/images/brand/icon-chevron-down.svg"
              alt=""
              width={25}
              height={24}
              className="brightness-0 invert"
            />
          </span>
          <HeaderIcon src="/images/brand/icon-search.svg" label="Search" width={17.49} height={17.49} />
          <HeaderIcon
            src="/images/brand/icon-account.svg"
            label="Account"
            width={20}
            height={20}
            className="hidden sm:flex"
          />
          <CartButton />
        </div>
      </header>
    </div>
  );
}

function ShopMenu() {
  return (
    <div className="w-[min(475px,calc(100vw-2rem))] p-10">
      <NavigationMenuLink
        render={<Link href={`/products/${featured.slug}`} />}
        className="flex items-center gap-4 rounded-xl p-0 hover:bg-white/5 focus:bg-white/5"
      >
        <Image
          src={featured.image}
          alt={featured.shortName}
          width={80}
          height={80}
          className="size-20 rounded-lg object-cover"
        />
        <span className="flex flex-col gap-1">
          <span className="text-[22px] leading-tight font-semibold">{featured.shortName}</span>
          <span className="text-base text-white/80">{featured.tagline}</span>
        </span>
      </NavigationMenuLink>

      <Separator className="my-8 bg-white/30" />

      <ul className="flex flex-col gap-1">
        {categories.map((category) => (
          <li key={category.slug}>
            <NavigationMenuLink
              render={<Link href={`/shop?category=${category.slug}`} />}
              className="-mx-2 px-2 py-2.5 text-base font-semibold hover:bg-white/5 focus:bg-white/5"
            >
              {category.name}
            </NavigationMenuLink>
          </li>
        ))}
        <li>
          <NavigationMenuLink
            render={<Link href="/shop" />}
            className="-mx-2 px-2 py-2.5 text-base font-semibold hover:bg-white/5 focus:bg-white/5"
          >
            Shop All
          </NavigationMenuLink>
        </li>
      </ul>
    </div>
  );
}

function HeaderIcon({
  src,
  label,
  width,
  height,
  className,
}: {
  src: string;
  label: string;
  width: number;
  height: number;
  className?: string;
}) {
  return (
    <span
      role="img"
      aria-label={label}
      className={`flex size-6 items-center justify-center ${className ?? ""}`}
    >
      <Image src={src} alt="" width={width} height={height} />
    </span>
  );
}

function CartButton() {
  const count = useAppStore(selectCartCount);
  const setCartOpen = useAppStore((state) => state.setCartOpen);

  return (
    <button
      type="button"
      onClick={() => setCartOpen(true)}
      aria-label={count > 0 ? `Open cart, ${count} items` : "Open cart"}
      className="relative flex size-6 items-center justify-center"
    >
      <Image src="/images/brand/icon-cart.svg" alt="" width={16} height={20} />
      {count > 0 && (
        <span className="absolute -top-1.5 -right-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-teal px-1 text-[10px] leading-none font-semibold text-white">
          {count}
        </span>
      )}
    </button>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="-ml-1 flex size-8 items-center justify-center lg:hidden"
      >
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="left" className="w-full max-w-sm gap-0 bg-panel text-white">
        <SheetHeader className="px-6 pt-6">
          <SheetTitle className="text-white">
            <BrandWordmark className="text-base" />
          </SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-8 overflow-y-auto px-6 py-8">
          <Link
            href={`/products/${featured.slug}`}
            onClick={close}
            className="flex items-center gap-4"
          >
            <Image
              src={featured.image}
              alt={featured.shortName}
              width={64}
              height={64}
              className="size-16 rounded-lg object-cover"
            />
            <span className="flex flex-col gap-1">
              <span className="text-lg font-semibold">{featured.shortName}</span>
              <span className="text-sm text-white/80">{featured.tagline}</span>
            </span>
          </Link>
          <Separator className="bg-white/30" />
          <ul className="flex flex-col gap-5 text-base font-semibold">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/shop?category=${category.slug}`} onClick={close}>
                  {category.name}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/shop" onClick={close}>
                Shop All
              </Link>
            </li>
          </ul>
          <Separator className="bg-white/30" />
          <ul className="flex flex-col gap-5 text-base font-semibold text-white/70">
            <li>
              <InertLink>Learn</InertLink>
            </li>
            <li>
              <InertLink>Support</InertLink>
            </li>
          </ul>
        </div>
      </SheetContent>
    </Sheet>
  );
}
