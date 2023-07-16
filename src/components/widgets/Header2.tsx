import Link from "next/link";

export default function Header2 () {
  return (
    <>
      <div className="w-full h-14 bg-slate-100 flex justify-between items-center px-10">
        <div className="logo">
          <Link href={"/"} className="text-2xl font-bold">Coach</Link>
        </div>
        <Link href={"/logout"} className="hover:text-primary-600">Logout</Link>
      </div>
    </>
  )
}