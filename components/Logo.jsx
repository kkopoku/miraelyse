import Link from "next/link";

export default function Logo() {
  return (
    <Link href='/'>
      <div className="flex flex-row text-2xl font-semibold">
        <p>Mira</p>
        <p className="text-yellow-500">Elyse</p>
      </div></Link>
  );
}
