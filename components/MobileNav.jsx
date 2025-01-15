"use client";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathname = usePathname();
  console.log(pathname);
  

  return (
    <Sheet>
      <SheetTrigger>
        <CiMenuFries className="text-[32px] text-emerald-500" />
      </SheetTrigger>

      <SheetContent className="flex flex-col items-center">
        <div className="mt-32 mb-20 text-center text-2xl">
          <Link href="/">
            <h1 className="text-4xl text-white font-semibold">
              Teejay <span className="text-emerald-500">.</span>
            </h1>
          </Link>
        </div>

        <nav className="flex text-white flex-col items-center justify-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname &&
                "text-emerald-500 border-b-2  border-emerald-500"
              } text-xl capitalize hover:text-emerald-500 transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
