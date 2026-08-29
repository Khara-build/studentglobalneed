import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <article className="mx-auto max-w-4xl px-6 pb-20 pt-20">
        <div className="text-center">
          <p className="text-sm font-medium text-blue-600">Legal</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: August 28, 2026
          </p>
        </div>

        <div className="mt-14 space-y-10 leading-7 text-gray-600">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              Introduction
            </h2>

            <p className="mt-3">
              StudentGlobalNeed respects your privacy and is committed to
              protecting the information you provide while using our website.
              This Privacy Policy explains how information may be collected,
              used, and protected.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              Information we may collect
            </h2>

            <p className="mt-3">
              Depending on the features you use, we may collect information such
              as your name, email address, university-related information, and
              information you voluntarily provide through forms or other website
              features.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              How we use information
            </h2>

            <p className="mt-3">
              Information may be used to provide and improve our services,
              respond to questions, maintain website functionality, prevent
              abuse, and understand how students use the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              Cookies and similar technologies
            </h2>

            <p className="mt-3">
              StudentGlobalNeed may use cookies and similar technologies for
              essential website functionality, preferences, analytics, and
              advertising. Specific cookie usage may change as new features are
              introduced.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Advertising</h2>

            <p className="mt-3">
              We may use third-party advertising services in the future,
              including Google AdSense. These services may use cookies or
              similar technologies to provide and measure advertisements in
              accordance with their own policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              Third-party services
            </h2>

            <p className="mt-3">
              Our website may use third-party services for analytics,
              infrastructure, authentication, payments, advertising, or other
              functionality. These services may process information according to
              their respective privacy policies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              Data security
            </h2>

            <p className="mt-3">
              We take reasonable measures to protect information handled by the
              platform. However, no method of transmitting or storing
              information online can be guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              Changes to this policy
            </h2>

            <p className="mt-3">
              We may update this Privacy Policy as StudentGlobalNeed grows and
              new features are introduced. Any updated version will be published
              on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Contact</h2>

            <p className="mt-3">
              If you have questions about this Privacy Policy, please contact us
              through the Contact page.
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}
