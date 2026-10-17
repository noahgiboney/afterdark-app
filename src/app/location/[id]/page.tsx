import Image from "next/image";
import { Metadata } from "next";
import { supabase } from "@/lib/supabase";
import AppStoreButton from "@/components/AppStoreButton";
import Footer from "@/components/Footer";
import { APP_FULL_NAME, APP_NAME } from "@/lib/app";

type LocationPreview = {
  id: string;
  name: string;
  detail: string;
  image_url: string;
};

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  console.log('generateMetadata: Starting metadata generation...');

  const resolvedParams = await params;
  const { id } = resolvedParams;

  console.log('generateMetadata: Resolved params - ID:', id);

  try {
    console.log('generateMetadata: Executing Supabase query...'); 
    const { data: location, error }: { data: LocationPreview | null; error: any } = await supabase
      .from("locations")
      .select("id, name, detail, image_url")
      .eq("id", id)
      .single();

    console.log('generateMetadata: Supabase response - Data:', location, 'Error:', error);

    if (error) {
      console.error('generateMetadata: Supabase Error Details:', error.message, error.code);
      if (error.code === 'PGRST116') { 
        console.log('generateMetadata: No location found for ID:', id); 
      }
      return {
        title: "Place Not Found",
      };
    }

    if (!location) {
      console.log('generateMetadata: No data returned (null) for ID:', id);
      return {
        title: "Place Not Found",
      };
    }

    console.log('generateMetadata: Location data found:', { id: location.id, name: location.name });

    const title = location.name;
    const description = location.detail.length > 100 
      ? `${location.detail.slice(0, 160)}...` 
      : location.detail;

    console.log('generateMetadata: Generated title:', title, 'Description preview:', description.slice(0, 50) + '...');

    const siteUrl = 'https://cryptid-coordinates-web.vercel.app';

    const metadata: Metadata = {
      title,
      description, 
      openGraph: {
        title,
        description,
        siteName: APP_FULL_NAME,
        url: `${siteUrl}/location/${id}`,
        type: 'website',
        images: [
          {
            url: location.image_url,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
      },
    };

    console.log('generateMetadata: Full metadata object:', metadata);
    return metadata;

  } catch (e) {
    console.error('generateMetadata: Unexpected error:', e); 
    return {
      title: "Error Loading Place",
    };
  }
}

export default async function LocationPage({ params }: Props) {
  const resolvedParams = await params;
  const { id } = resolvedParams;

  try {
    const { data: location, error }: { data: LocationPreview | null; error: any } = await supabase
      .from("locations")
      .select("id, name, detail")
      .eq("id", id)
      .single();

    if (error || !location) {
      return <Message text="Place not found" />;
    }

    const descPreview = location.detail.length > 160
      ? `${location.detail.slice(0, 160).trimEnd()}…`
      : location.detail;

    return (
      <div className="flex min-h-screen flex-col">
        <main className="mx-auto flex w-full max-w-md flex-1 flex-col items-center px-6 pt-20 pb-12 text-center">
          <Image src="/dark.png" alt={`${APP_NAME} app icon`} width={72} height={72} priority />
          <p className="mt-3 text-sm text-secondary">{APP_NAME}</p>

          <div className="mt-10 w-full rounded-2xl bg-card p-5 text-left">
            <h1 className="text-2xl">{location.name}</h1>
            <p className="mt-2 text-[15px] leading-relaxed text-foreground/80">{descPreview}</p>
          </div>

          <p className="mt-8 text-sm text-secondary">See the full story in the app</p>
          <div className="mt-4">
            <AppStoreButton />
          </div>
        </main>

        <Footer />
      </div>
    );
  } catch (e) {
    console.error('LocationPage: Unexpected error:', e);
    return <Message text="Error loading place" />;
  }
}
function Message({ text }: { text: string }) {
  return (
    <main className="flex min-h-screen items-center justify-center text-secondary">
      <p>{text}</p>
    </main>
  );
}
