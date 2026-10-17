import Image from "next/image";
import { APP_STORE_URL } from "@/lib/app";

export default function AppStoreButton() {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block transition-opacity hover:opacity-80 active:opacity-60"
    >
      <Image src="/app_store.svg" alt="Download on the App Store" width={150} height={50} />
    </a>
  );
}
