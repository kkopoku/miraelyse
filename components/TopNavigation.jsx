import Logo from "./Logo";
import Link from "next/link";

export default function TopNavigation() {
  // const navItems = [
  //   {
  //     name: "About & Contact",
  //     route: "/order",
  //   },
  //   {
  //     name: "Cufflinks",
  //     route: "/order",
  //   },
  //   {
  //     name: "Pocket Squares",
  //     route: "/order",
  //   },
  //   {
  //     name: "Versatile Scarfs",
  //     route: "/order",
  //   },
  //   {
  //     name: "Earrings",
  //     route: "/order",
  //   },
  //   {
  //     name: "Bracelets",
  //     route: "/login",
  //   },
  //   {
  //     name: "Necklaces",
  //     route: "/signin",
  //   },
  // ];

  const navItems = [
    {
      name: "Contact",
      route: "/order",
    },
    {
      name: "About",
      route: "/order",
    },
    {
      name: "Products",
      route: "/products",
    },
  ];

  return (
    <div className="flex fixed w-screen py-12 px-20 bg-slate-50 bg-opacity-80 z-50 text-black font-semibold">
      <div className="flex flex-row basis-1/5"><Logo /></div>
      <div className="flex basis-4/5 flex-row-reverse gap-14 ">
        {navItems.map((navItem) => {
          return <Link href={navItem.route} key={navItem.route}><button>{navItem.name}</button></Link>;
        })}
      </div>
    </div>
  );
}
