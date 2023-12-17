import Logo from "./Logo";

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
      name: "About & Contact",
      route: "/order",
    },
    {
      name: "Products",
      route: "/order",
    },
  ];

  return (
    <div className="flex fixed w-screen p-12 bg-slate-50 bg-opacity-80 z-50">
      <div className="flex flex-row basis-1/5"><Logo /></div>
      <div className="flex basis-4/5 flex-row-reverse gap-14 ">
        {navItems.map((navItem) => {
          return <button key={navItem.route}>{navItem.name}</button>;
        })}
      </div>
    </div>
  );
}
