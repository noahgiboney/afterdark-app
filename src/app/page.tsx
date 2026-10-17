import Image from "next/image";
import AppStoreButton from "@/components/AppStoreButton";
import Footer from "@/components/Footer";
import PhoneFrame from "@/components/PhoneFrame";
import { APP_NAME, APP_TAGLINE } from "@/lib/app";

const features = [
  {
    eyebrow: "Map",
    title: "Every haunt, on one map.",
    detail: "Browse haunted places around the world, from abandoned asylums to the house down the street.",
    screenshot: "map.png",
  },
  {
    eyebrow: "Near You",
    title: "What's haunting your neighborhood?",
    detail: "See the closest haunts, what's trending tonight, and the newest places added.",
    screenshot: "near-you.png",
  },
  {
    eyebrow: "Echos",
    title: "Hear the story your way.",
    detail: "Retell any location's legend as a campfire tale, a lost journal, or a case file.",
    screenshot: "echos.png",
  },
  {
    eyebrow: "Road Trips",
    title: "Chart a course through restless places.",
    detail: "Pick your stops and get directions to every haunt along the way.",
    screenshot: "road-trips.png",
  },
  {
    eyebrow: "Community",
    title: "Go there. Leave your mark.",
    detail: "Log your visits, share what you saw, and climb the leaderboard with fellow explorers.",
    screenshot: "community.png",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <main className="flex-1">
        {/* Hero */}
        <section className="relative px-6 pt-24 pb-20 text-center">
          <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_60%)]" />
          <Image
            src="/dark.png"
            alt={`${APP_NAME} app icon`}
            width={112}
            height={112}
            priority
            className="mx-auto drop-shadow-[0_8px_30px_rgba(255,255,255,0.08)]"
          />
          <h1 className="mt-8 text-5xl font-bold tracking-tight sm:text-6xl">{APP_NAME}</h1>
          <p className="mt-2 text-lg font-medium text-secondary">Haunted Locations</p>
          <p className="mx-auto mt-6 max-w-sm text-lg text-foreground/80">{APP_TAGLINE}</p>
          <div className="mt-8">
            <AppStoreButton />
          </div>

          <div className="mx-auto mt-16 w-64 sm:w-72">
            <PhoneFrame screenshot="hero.png" label="Home" />
          </div>
        </section>

        {/* Features */}
        <div className="mx-auto max-w-5xl space-y-28 px-6 py-16 sm:space-y-36">
          {features.map((f, i) => (
            <section
              key={f.eyebrow}
              className={`flex flex-col items-center gap-12 md:gap-20 ${i % 2 ? "md:flex-row-reverse" : "md:flex-row"}`}
            >
              <div className="max-w-md text-center md:flex-1 md:text-left">
                <p className="text-sm font-semibold tracking-wide text-secondary uppercase">{f.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{f.title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-foreground/70">{f.detail}</p>
              </div>
              <div className="w-60 shrink-0 sm:w-64">
                <PhoneFrame screenshot={f.screenshot} label={f.eyebrow} />
              </div>
            </section>
          ))}
        </div>

        {/* Closing CTA */}
        <section className="px-6 py-28 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Go find your first haunt.</h2>
          <p className="mt-3 text-lg text-secondary">Free on the App Store.</p>
          <div className="mt-8">
            <AppStoreButton />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
