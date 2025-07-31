import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "STRÄM | Fuel The Flow";
  }, []);

  const categories = [
    "Performance",
    "Recovery",
    "Hormone Health",
    "Gut Health",
    "Cognitive Support",
    "Sleep Optimization",
    "Immunity",
    "Vitality & Longevity"
  ];

  return (
    <div className="bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center text-center p-6">
        <Image
          src="/CD299CA8-A7BF-44C7-9A09-B3DD22AF3254.png"
          alt="STRÄM Hero Background"
          layout="fill"
          objectFit="cover"
          className="z-0 opacity-40"
        />
        <div className="relative z-10 max-w-4xl">
          <Image
            src="/Stram Logo.png"
            alt="STRÄM Logo"
            width={240}
            height={80}
            className="mx-auto mb-6"
          />
          <p className="text-xl mb-6 uppercase tracking-widest text-white/80">Fuel The Flow</p>
          <Link href="/shop">
            <Button className="text-lg px-6 py-3 bg-white text-black hover:bg-zinc-200 transition-all">
              Shop Wellness
            </Button>
          </Link>
        </div>
      </section>

      {/* Core Values */}
      <section className="grid md:grid-cols-3 gap-6 p-10 bg-zinc-900 text-white">
        {[
          { title: "Clinically Backed", desc: "We only stock what science supports. No fluff, no fillers." },
          { title: "Elevated Retail", desc: "Experience a premium space curated for your goals." },
          { title: "Expert-Led Guidance", desc: "In-store and virtual advisors to help guide your journey." },
        ].map((item, i) => (
          <Card key={i} className="bg-zinc-800 border-none">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Online Categories */}
      <section className="p-10 bg-black text-white">
        <h2 className="text-3xl font-bold text-center mb-8">Explore Our Wellness Stack</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <Link key={i} href={`/shop?category=${encodeURIComponent(cat)}`}>
              <Card className="bg-zinc-800 hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-medium mb-2">{cat}</h4>
                  <p className="text-sm text-gray-400">Shop top brands & STRÄM picks</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* About STRÄM */}
      <section className="bg-zinc-950 text-white p-12 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Welcome to STRÄM</h2>
          <p className="text-lg text-gray-300">
            Born in Mount Dora, Florida, STRÄM is your modern wellness hub. We bridge elite supplementation, functional diagnostics, and real human support to fuel the best version of you. Whether you're shopping online or stepping into our curated retail experience, you're joining a movement that prioritizes results, resilience, and long-term vitality.
          </p>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="p-10 text-center bg-black border-t border-zinc-800">
        <h3 className="text-2xl font-semibold mb-2">Stay in Flow</h3>
        <p className="mb-6 text-gray-400">Get expert wellness tips, product drops, and member-exclusive offers.</p>
        <form className="max-w-lg mx-auto flex flex-col sm:flex-row gap-3">
          <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 text-black rounded-md" />
          <Button className="px-6 py-3 bg-white text-black hover:bg-zinc-200">Subscribe</Button>
        </form>
      </section>
    </div>
  );
}
