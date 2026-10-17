import AppStoreButton from "@/components/AppStoreButton";
import Footer from "@/components/Footer";
import GlowingGhost from "@/components/GlowingGhost";
import PhoneFrame from "@/components/PhoneFrame";
import { APP_NAME } from "@/lib/app";

const features = [
  {
    eyebrow: "Explore",
    title: "What's haunting your neighborhood?",
    detail: "See the closest haunts, what's trending, and the newest places added by the community.",
    screenshot: "explore.jpg",
  },
  {
    eyebrow: "Map",
    title: "Every haunt, on one map.",
    detail: "Browse haunted places around the world, from abandoned asylums to the house down the street.",
    screenshot: "map.jpg",
  },
  {
    eyebrow: "Stories",
    title: "Every haunt has a story.",
    detail: "Read the legend behind each location, then hear it retold with Echoes as a campfire tale, a lost journal, or a case file.",
    screenshot: "story.jpg",
  },
  {
    eyebrow: "Haunted Notifications",
    title: "Know when you're close.",
    detail: "Get a heads-up when you're near a haunted location, so you never drive past one again.",
    screenshot: "notifications.jpg",
  },
  {
    eyebrow: "Road Trips",
    title: "Chart a course through restless places.",
    detail: "Pick your stops and get directions to every haunt along the way.",
    screenshot: "road-trips.jpg",
  },
  {
    eyebrow: "Community",
    title: "Go there. Leave your mark.",
    detail: "Log your visits, add new locations, and climb the leaderboard with fellow explorers.",
    screenshot: "social.jpg",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto flex min-h-[85vh] max-w-6xl flex-col-reverse items-center justify-center gap-10 px-6 py-20 md:flex-row md:gap-16">
          <div className="max-w-xl text-center md:flex-1 md:text-left">
            <h1 className="text-7xl leading-none text-white sm:text-8xl lg:text-9xl">{APP_NAME}</h1>
            <p className="mt-6 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              Every place has a story after dark.
            </p>
            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-foreground/75 md:mx-0">
              Find haunted locations near you, hear the legends behind them, and plan a road trip
              through the restless places.
            </p>
            <div className="mt-10">
              <AppStoreButton />
            </div>
          </div>

          <GlowingGhost className="w-56 shrink-0 sm:w-72 md:w-[380px]" />
        </section>

        {/* Features */}
        <div className="mx-auto max-w-5xl space-y-28 px-6 py-16 sm:space-y-36">
          {features.map((f, i) => (
            <section
              key={f.eyebrow}
              className={`flex flex-col items-center gap-12 md:gap-20 ${i % 2 ? "md:flex-row-reverse" : "md:flex-row"}`}
            >
              <div className="max-w-md text-center md:flex-1 md:text-left">
                <p className="text-sm tracking-wide text-secondary uppercase">{f.eyebrow}</p>
                <h2 className="mt-3 text-3xl sm:text-4xl">{f.title}</h2>
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
          <h2 className="text-3xl sm:text-4xl">Go find your first haunt.</h2>
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
