import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

type Props = {
  // File name inside public/screenshots, e.g. "map.png". Shows a placeholder until the file exists.
  screenshot: string;
  label: string;
  className?: string;
};

function hasScreenshot(file: string) {
  return fs.existsSync(path.join(process.cwd(), "public", "screenshots", file));
}

export default function PhoneFrame({ screenshot, label, className = "" }: Props) {
  return (
    <div
      className={`relative aspect-[9/19.5] w-full overflow-hidden rounded-[2.75rem] border border-white/10 bg-card shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] ring-8 ring-[#111] ${className}`}
    >
      {hasScreenshot(screenshot) ? (
        <Image src={`/screenshots/${screenshot}`} alt={label} fill sizes="300px" className="object-cover" />
      ) : (
        <div className="flex h-full flex-col items-center justify-center gap-2 bg-gradient-to-b from-[#1c1c1e] to-[#0b0b0c] p-6 text-center">
          <span className="text-sm font-medium text-foreground/70">{label}</span>
          <span className="text-xs text-secondary">Screenshot coming soon</span>
        </div>
      )}
      <div className="absolute top-3 left-1/2 h-6 w-24 -translate-x-1/2 rounded-full bg-black" />
    </div>
  );
}
