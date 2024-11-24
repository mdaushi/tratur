import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href={"/handler/sign-in"}>Login</Link>
      <Link href={"/handler/sign-up"}>Register</Link>
    </>
  );
}
