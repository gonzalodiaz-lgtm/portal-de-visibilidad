
import { redirect } from "next/navigation";
import Navbar from "@/src/shared/layouts/Navbar";
import { auth } from "@/src/features/auth/viewmodels/nextauth.config";

export default async function PortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <Navbar/>
      <main className="min-h-[calc(100vh-56px)] bg-slate-50">
        {children}
      </main>
    </>
  );
}
