'use client'
import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/">
      {/* <div className="flex flex-row text-2xl font-semibold">
        <p>Mira</p>
        <p className="text-yellow-500">Elyse</p>
      </div> */}
      <Image src='/images/ME-logo-white.png' alt='ME-logo' width={100} height={100} />
    </Link>
  );
}
