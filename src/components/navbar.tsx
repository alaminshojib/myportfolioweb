import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/components/icons";
import { Logo } from "@/components/icons";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-slate-600",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <HeroUINavbar
  maxWidth="full"
  className="top-0 z-50 bg-gradient-to-r fixed from-indigo-900/80 via-purple-900/80 to-indigo-800/80 text-white backdrop-blur-md"
>
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-full">
          <Link
            className="flex justify-start items-center gap-2"
            color="foreground"
            href="/"
          >
            <Logo />
            <p className="font-bold text-inherit">Anisur Rahman Al Amin</p>
          </Link>
        </NavbarBrand>
       <div className="hidden lg:flex gap-4 justify-start ml-2">
  {siteConfig.navItems.map((item) =>
    item.label === "Career Goals" ? (
      <NavbarItem key={item.href} className="relative group">
  <div className="cursor-pointer rounded-md hover:text-primary transition-colors duration-200">
    {item.label}
  </div>

  {/* Hover Dropdown */}
  <div className="absolute top-full mx-auto py-2 hidden group-hover:flex flex-col  from-indigo-900 via-purple-900 to-indigo-800 text-gray-100 shadow-lg rounded-lg z-50 w-64 p-2 transition-all duration-300 ease-in-out transform scale-95 group-hover:scale-100 group-hover:opacity-100 opacity-0">
    <Link
      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md transition-colors"
      href="/careerGoals/academic"
    >
      📚 Academic Background
    </Link>
    <Link
      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md transition-colors"
      href="/careerGoals/expertize"
    >
      🏢 Industry Expertize
    </Link>
    <Link
      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md transition-colors"
      href="/careerGoals/publications"
    >
      🎓 Research Publications
    </Link>
    <Link
      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md transition-colors"
      href="/careerGoals/projects"
    >
      🚀 Ongoing Projects
    </Link>
    <Link
      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 rounded-md transition-colors"
      href="/careerGoals/experiences"
    >
      🧠 Experiences
    </Link>
  </div>
</NavbarItem>

    ) : (
      <NavbarItem key={item.href}>
        <Link
          className={clsx(
            linkStyles({ color: "foreground" }),
            "data-[active=true]:text-primary data-[active=true]:font-medium"
          )}
          color="foreground"
          href={item.href}
        >
          {item.label}
        </Link>
      </NavbarItem>
    )
  )}
</div>

      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.twitter} title="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.discord} title="Discord">
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <NavbarItem className="hidden md:flex">
          <Button
            isExternal
            as={Link}
            className="text-sm font-normal text-default-600 bg-slate-600"
            href={siteConfig.links.sponsor}
            startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            Sponsor
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
