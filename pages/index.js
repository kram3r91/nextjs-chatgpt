import Head from "next/head";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { isLoading, error, user } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <>
      <Head>
        <title>NextJS & ChatGPT - Login or Signup</title>
      </Head>
      <div className="min-h-screen w-full bg-gray-800 text-center text-white">
        {!!user && <Link href="/api/auth/logout">Logout</Link>}
        {!user && <Link href="/api/auth/login">Login</Link>}
      </div>
    </>
  );
}
