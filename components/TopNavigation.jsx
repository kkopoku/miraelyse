import Logo from "./Logo";
import Link from "next/link";

export default function TopNavigation() {
  const navItems = [
    {
      name: "About",
      route: "/about",
    },
    {
      name: "Products",
      route: "/products",
    },
  ];

  return (
    <div className="flex sticky w-screen py-10 px-20 bg-slate-50 z-10 font-semibold text-black">
      <div className="flex flex-row basis-1/5"><Logo /></div>
      <div className="flex basis-4/5 flex-row-reverse gap-14 ">
        {navItems.map((navItem) => {
          return <Link href={navItem.route} key={navItem.route}><button>{navItem.name}</button></Link>;
        })}
      </div>
    </div>
  );
}
