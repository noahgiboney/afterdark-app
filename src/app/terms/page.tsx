import { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import { APP_FULL_NAME } from "@/lib/app";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `Terms of Use for ${APP_FULL_NAME}`,
};

const CONTACT_EMAIL = "afterdark@nmgsystems.dev";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl text-foreground">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

function Bullets({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <Link href="/" className="text-sm text-secondary transition-colors hover:text-foreground">
            &larr; Back home
          </Link>

          <h1 className="mt-6 text-3xl">Terms of Use</h1>
          <p className="mt-2 text-sm text-secondary">Last updated: October 17, 2026</p>

          <div className="mt-10 space-y-10 leading-relaxed text-foreground/80">
            <section className="space-y-3">
              <p>
                These Terms of Use (&quot;Terms&quot;) are an agreement between you and NMG Systems
                LLC (&quot;we&quot;, &quot;us&quot; or &quot;our&quot;) and govern your use of the{" "}
                {APP_FULL_NAME} app and this website (together, &quot;Afterdark&quot; or the
                &quot;Service&quot;).
              </p>
              <p>
                By creating an account, signing in, or otherwise using Afterdark, you agree to these
                Terms and to our{" "}
                <Link href="/privacy" className="underline hover:text-foreground">
                  Privacy Policy
                </Link>
                . If you do not agree, do not use the Service.
              </p>
            </section>

            <div className="rounded-2xl bg-card p-5">
              <h2 className="text-lg text-foreground">
                Zero tolerance for objectionable content and abusive users
              </h2>
              <p className="mt-2">
                Afterdark has no tolerance for objectionable content or abusive users. Content that
                violates these Terms will be removed, and the account responsible will be banned. We
                review reports of objectionable content within 24 hours and act on them by removing
                the content and ejecting the user who provided it.
              </p>
            </div>

            <Section title="1. Eligibility">
              <p>
                You must be at least 13 years old to use Afterdark. If you are under the age of
                majority where you live, you may use the Service only with the permission of a
                parent or legal guardian who agrees to these Terms.
              </p>
            </Section>

            <Section title="2. Your Account">
              <p>
                You sign in to Afterdark with Sign in with Apple. You are responsible for everything
                that happens under your account and for keeping access to your device and Apple
                Account secure. You may not create an account to get around a ban, impersonate
                anyone, or share or sell your account.
              </p>
              <p>
                You can delete your account at any time from the app&apos;s account settings.
                Deleting your account permanently removes your profile and the content tied to it,
                such as your comments and visits, as described in our Privacy Policy.
              </p>
            </Section>

            <Section title="3. Content You Share">
              <p>
                Afterdark lets you share content that other people can see, including comments on
                locations, your username, your visits and leaderboard standing, and haunted
                locations or corrections you submit (&quot;User Content&quot;).
              </p>
              <p>
                You keep ownership of your User Content. By sharing it, you give us a worldwide,
                non-exclusive, royalty-free license to host, store, display, reproduce, adapt and
                distribute it in connection with operating and promoting the Service. For location
                submissions and corrections, this includes editing them for accuracy, clarity and
                length and publishing them as part of Afterdark&apos;s location listings. This
                license ends when your content is removed from the Service, except for locations
                that have already been published, which may remain on the map.
              </p>
              <p>
                You are responsible for your User Content and promise that you have the right to
                share it and that it does not violate these Terms or anyone else&apos;s rights.
              </p>
            </Section>

            <Section title="4. Community Standards">
              <p>You agree not to post, submit or share anything that:</p>
              <Bullets
                items={[
                  "Harasses, bullies, threatens, intimidates or targets another person or group.",
                  "Is hateful or discriminatory, or attacks people based on race, ethnicity, national origin, religion, sex, gender identity, sexual orientation, disability, age or any other protected characteristic.",
                  "Is sexually explicit, pornographic or sexually exploits anyone, especially minors.",
                  "Promotes, glorifies or incites real-world violence, self-harm or suicide. Discussing the history of a location, including tragedies tied to it, is fine. Celebrating harm to real people is not.",
                  "Mocks, harasses or reveals private information about victims of real tragedies, their families or the current residents or owners of a location.",
                  "Shares someone else's personal information, such as a private home address, phone number or email, without permission.",
                  "Encourages trespassing, vandalism, break-ins or any other illegal activity.",
                  "Is spam, advertising, a scam, or knowingly false, including made-up locations or fake reports.",
                  "Impersonates any person or organization, or uses an offensive or misleading username.",
                  "Infringes anyone's copyright, trademark, privacy or other rights.",
                ]}
              />
              <p>
                You also agree not to abuse the Service itself. That includes misusing the report
                feature, scraping or copying location data in bulk, interfering with or overloading
                the Service, trying to get around the content filter, blocks or bans, or accessing
                accounts or data that are not yours.
              </p>
            </Section>

            <Section title="5. Filtering, Reporting and Blocking">
              <Bullets
                items={[
                  <>
                    <strong className="text-foreground">Filtering.</strong> Comments and usernames
                    are checked for objectionable language before they are posted, and content that
                    fails the check is not published.
                  </>,
                  <>
                    <strong className="text-foreground">Reporting.</strong> You can report any
                    comment you find objectionable directly from the app. You can also report
                    content or users by emailing{" "}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-foreground">
                      {CONTACT_EMAIL}
                    </a>
                    .
                  </>,
                  <>
                    <strong className="text-foreground">Blocking.</strong> You can block any user.
                    Once blocked, you will no longer see that user&apos;s comments or name. Blocking
                    is private, and the blocked user is not notified.
                  </>,
                  <>
                    <strong className="text-foreground">Our response.</strong> We review every
                    report within 24 hours. If content violates these Terms, we remove it and ban the
                    account that posted it.
                  </>,
                ]}
              />
              <p>
                We may also review, edit, refuse or remove any User Content, and suspend or ban any
                account, at our discretion and without notice, whether or not it has been reported.
                We are not obligated to monitor all content, and we are not responsible for content
                posted by other users.
              </p>
            </Section>

            <Section title="6. Visiting Locations Safely and Legally">
              <p>
                Afterdark is a guide to places with reported paranormal activity. Many of these
                places are private property, closed to the public, dangerous or in disrepair. A
                location appearing in Afterdark does not mean it is open to visitors, safe to visit,
                or that you have permission to be there.
              </p>
              <Bullets
                items={[
                  "Do not trespass. Get permission before entering private property and follow posted signs, hours and closures.",
                  "Obey all local laws, and respect the people who live and work at or near a location.",
                  "Be careful. Abandoned buildings, cemeteries, woods and roads at night carry real risks. Visit with others and tell someone where you are going.",
                  "Do not use the app while driving. Plan road trips and check directions before you set off, and follow the rules of the road.",
                ]}
              />
              <p>
                You visit any location at your own risk. To the fullest extent permitted by law, we
                are not responsible for any injury, loss, damage, arrest, fine or other consequence
                that results from visiting, or trying to visit, a location you found through
                Afterdark.
              </p>
            </Section>

            <Section title="7. Entertainment Purposes">
              <p>
                Location stories, legends and paranormal reports in Afterdark are shared for
                entertainment. They come from folklore, public sources and users, and we do not
                verify that they are true. Addresses, coordinates, directions, distances and other
                details may be inaccurate or out of date.
              </p>
              <p>
                Echoes are retellings of a location&apos;s story, written by Apple&apos;s on-device
                AI in styles such as a campfire tale, a lost journal or a case file. Echoes are
                fiction. They may include invented or inaccurate details and should not be taken as
                fact.
              </p>
            </Section>

            <Section title="8. Afterdark+ and Purchases">
              <p>
                Afterdark offers optional paid features through Afterdark+, available as an
                auto-renewing subscription or as a one-time purchase. Prices are shown in the app
                before you buy.
              </p>
              <Bullets
                items={[
                  "All purchases are made and billed through your Apple Account and are subject to Apple's terms.",
                  "Subscriptions renew automatically at the end of each period unless cancelled at least 24 hours before it ends. Your account is charged for renewal within 24 hours before the current period ends.",
                  "You can manage or cancel a subscription in your device's Settings under your Apple Account. Cancelling stops future renewals. Access continues until the end of the current period.",
                  "If a free trial is offered, any unused portion ends when you buy a subscription.",
                  "Refunds are handled by Apple under its policies. We cannot issue refunds ourselves.",
                ]}
              />
              <p>
                We may change which features are included in Afterdark+ or in the free version of
                the app. If your account is banned for violating these Terms, you are not entitled
                to a refund from us for any remaining time on a subscription.
              </p>
            </Section>

            <Section title="9. Our Content and License to Use the App">
              <p>
                Afterdark, including its design, location database, text, graphics, icons and
                software, is owned by us or our licensors and protected by intellectual property
                laws. Subject to these Terms, we grant you a personal, non-exclusive,
                non-transferable, revocable license to use the app on Apple devices that you own or
                control, as permitted by the App Store&apos;s Usage Rules. You may not copy, modify,
                reverse engineer, resell or create derivative works of the Service, except as the
                law allows.
              </p>
            </Section>

            <Section title="10. Third-Party Services">
              <p>
                Afterdark relies on third-party services, such as Apple Maps for maps and directions
                and Sign in with Apple for accounts. Your use of those services is governed by their
                own terms, and we are not responsible for them.
              </p>
            </Section>

            <Section title="11. Ending Your Use">
              <p>
                You can stop using Afterdark at any time and delete your account in the app. We may
                suspend or terminate your access at any time, with or without notice, if you violate
                these Terms, if required by law, or to protect other users or the Service. Sections
                that by their nature should survive termination, including Sections 3, 6, 7 and 12
                through 15, will survive.
              </p>
            </Section>

            <Section title="12. Disclaimers">
              <p>
                The Service is provided &quot;as is&quot; and &quot;as available&quot;, without
                warranties of any kind, express or implied, including warranties of merchantability,
                fitness for a particular purpose, accuracy and non-infringement. We do not guarantee
                that the Service will be uninterrupted, error-free or secure, or that any location
                information is accurate, complete or current.
              </p>
            </Section>

            <Section title="13. Limitation of Liability">
              <p>
                To the fullest extent permitted by law, NMG Systems LLC will not be liable for any
                indirect, incidental, special, consequential or punitive damages, or for any loss of
                data, profits or goodwill, arising from or related to your use of the Service,
                visits to any location, or content posted by other users. Our total liability for
                any claim related to the Service is limited to the greater of the amount you paid us
                in the 12 months before the claim or US $50. Some places do not allow these
                limitations, so they may not apply to you.
              </p>
            </Section>

            <Section title="14. Indemnity">
              <p>
                You agree to defend, indemnify and hold harmless NMG Systems LLC from any claims,
                damages, losses and expenses, including reasonable legal fees, arising from your
                User Content, your visits to any location, or your violation of these Terms or any
                law.
              </p>
            </Section>

            <Section title="15. Governing Law">
              <p>
                These Terms are governed by the laws of the State of California, United States,
                without regard to its conflict of law rules. Any dispute will be resolved in the
                state or federal courts located in California, and you consent to their
                jurisdiction.
              </p>
            </Section>

            <Section title="16. Apple App Store Terms">
              <p>If you downloaded Afterdark from the Apple App Store, you also acknowledge that:</p>
              <Bullets
                items={[
                  "These Terms are between you and NMG Systems LLC only, not Apple Inc. (\"Apple\"). We, not Apple, are solely responsible for the app and its content.",
                  "Apple has no obligation to provide any maintenance or support for the app.",
                  "If the app fails to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price, if any. To the maximum extent permitted by law, Apple has no other warranty obligation with respect to the app.",
                  "We, not Apple, are responsible for addressing any claims relating to the app, including product liability claims, claims that the app fails to meet legal or regulatory requirements, and consumer protection or privacy claims.",
                  "We, not Apple, are responsible for the investigation, defense, settlement and discharge of any claim that the app infringes a third party's intellectual property rights.",
                  "You represent that you are not located in a country subject to a U.S. Government embargo or designated as a \"terrorist supporting\" country, and that you are not on any U.S. Government list of prohibited or restricted parties.",
                  "You must comply with applicable third-party terms when using the app.",
                  "Apple and its subsidiaries are third-party beneficiaries of these Terms, and once you accept these Terms, Apple has the right to enforce them against you as a third-party beneficiary.",
                ]}
              />
            </Section>

            <Section title="17. Changes to These Terms">
              <p>
                We may update these Terms from time to time. When we do, we will update the
                &quot;Last updated&quot; date above and, for material changes, notify you in the
                app. Continuing to use Afterdark after changes take effect means you accept the
                updated Terms.
              </p>
            </Section>

            <Section title="18. Contact Us">
              <p>
                Questions about these Terms, or want to report content or a user? Email us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-foreground">
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </Section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
