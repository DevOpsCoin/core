"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ClaimPortalRedirect() {
  const router = useRouter();

  useEffect(() => {
    // Client-side redirect to the new investor portal
    router.replace("/investor-portal");
  }, [router]);

  return (
    <section className="container max-w-4xl mx-auto mt-12 p-8 bg-gray-900 rounded-xl shadow-lg text-center">
      <h1 className="text-2xl font-bold text-teal-400 mb-4">Moved: Investor Portal</h1>
      <p className="text-cyan-300 mb-2">This page has moved to the new Investor Portal.</p>
      <p className="text-gray-400">Redirecting you now... If you are not redirected, <a href="/investor-portal" className="underline text-cyan-300">click here</a>.</p>
    </section>
  );
}
