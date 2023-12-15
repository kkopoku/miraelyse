export default function TopNavigation() {
  const navItems = [
    {
      name: "About & Contact",
      route: "/order",
    },
    {
      name: "Cufflinks",
      route: "/order",
    },
    {
      name: "Pocket Squares",
      route: "/order",
    },
    {
      name: "Versatile Scarfs",
      route: "/order",
    },
    {
      name: "Earrings",
      route: "/order",
    },
    {
      name: "Bracelets",
      route: "/login",
    },
    {
      name: "Necklaces",
      route: "/signin",
    },
  ];

  return (
    <div className="flex w-screen p-10 bg-white">
      <div className="flex flex-row basis-1/5">Logo</div>
      <div className="flex basis-4/5 flex-row-reverse gap-14 ">
        {navItems.map((navItem) => {
          return <button key={navItem.route}>{navItem.name}</button>;
        })}
      </div>
    </div>
  );
}
