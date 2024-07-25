import CardProject from "@/components/CardProject";
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";
import ProfileText from "@/components/ProfileText";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Dashboard />
      <main className="container mx-auto">
        <section className="flex flex-col gap-5 md:flex-row sm:justify-between md:mt-8 items-center">
          <ProfileText />

          <div className="flex flex-row justify-center">
            <Image
              src="/assets/pp.jpeg"
              alt="photo de profile"
              className="rounded-sm"
              width={200}
              height={200}
            />
          </div>
        </section>

        <section className="flex flex-col gap-5 md:flex-row sm:justify-between md:mt-8 items-center">
          <CardProject />
        </section>
      </main>

      <Footer />
    </>
  );
}
