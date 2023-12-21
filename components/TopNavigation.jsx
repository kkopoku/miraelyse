"use client";
import Logo from "./Logo";
import Link from "next/link";
import { useState, useEffect } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";


export default function TopNavigation() {
  const [mobile, setMobile] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    isMobile();
    window.addEventListener("resize", isMobile);
    return () => {
      window.removeEventListener("resize", isMobile);
    };
  }, []);

  const navItems = [
    {
      name: "About",
      route: "/about",
    },
    {
      name: "Products",
      route: "/products",
    },
    {
      name: "Home",
      route: "/",
    },
  ];

  function isMobile() {
    let result = window.innerWidth < 1024;
    setMobile(result);
  }

  const router = useRouter();

  // Components
  const MobileMenuComponent = () => {
    return (
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className="flex fixed inset-0 z-40 flex-col bg-white bg-opacity-95 justify-center items-center gap-6 font-medium text-xl"
      >
        {navItems.map((button) => (
          <button
            key={button.name}
            onClick={() => {
              router.push(button.route);
              setIsMobileMenuOpen(false);
            }}
            className="hover:scale-110 transition-all rounded-md p-2 w-48"
          >
            {button.name}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="flex w-screen py-5 px-10 lg:px-32 bg-transparent z-10 font-semibold text-black">
      <div className="flex flex-row basis-1/5">
        <Logo />
      </div>

      {mobile !== "" && (
        <div className="flex basis-4/5 flex-row-reverse gap-8 ">
          {!mobile ? (
            <>
              {navItems.map((navItem) => {
                return (
                  <Link href={navItem.route} key={navItem.route}>
                    <button className="hover:scale-110 transition-all font-normal rounded-md hover:font-semi-bold">
                      {navItem.name}
                    </button>
                  </Link>
                );
              })}
            </>
          ) : (
            <button onClick={() => setIsMobileMenuOpen(true)}>
              <IoMenuOutline className="text-3xl" />
            </button>
          )}
        </div>
      )}

      {isMobileMenuOpen && <MobileMenuComponent />}
    </div>
  );
}
