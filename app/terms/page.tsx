import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <article className="mx-auto max-w-4xl px-6 pb-20 pt-20">
        <div className="text-center">
          <p className="text-sm font-medium text-blue-600">Legal</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Terms of Use
          </h1>

          <p className="mt-4 text-sm text-gray-500">
            Last updated: August 28, 2026
          </p>
        </div>

        <div className="mt-14 space-y-10 leading-7 text-gray-600">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              Acceptance of terms
            </h2>

            <p className="mt-3">
              By accessing or using StudentGlobalNeed, you agree to comply with
              these Terms of Use. If you do not agree with these terms, please
              do not use the website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              Use of the website
            </h2>

            <p className="mt-3">
              StudentGlobalNeed provides university information, academic tools,
              documents, resources, and other student-focused services. You
              agree to use the website only for lawful and appropriate purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              Information and accuracy
            </h2>

            <p className="mt-3">
              We aim to provide useful and accurate information, but university
              information, requirements, policies, and other details may change.
              Users should verify important information with the relevant
              university or official source.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              Generated documents
            </h2>

            <p className="mt-3">
              Documents generated through StudentGlobalNeed are provided as
              tools for student use. Users are responsible for reviewing all
              generated information before submitting documents to a university
              or other institution.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              Intellectual property
            </h2>

            <p className="mt-3">
              Unless otherwise stated, the website design, original content,
              branding, and software used by StudentGlobalNeed are protected by
              applicable intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              Third-party services and links
            </h2>

            <p className="mt-3">
              StudentGlobalNeed may contain links to third-party websites or
              services. We are not responsible for the content, availability, or
              policies of third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              Availability of services
            </h2>

            <p className="mt-3">
              We may add, change, suspend, or remove features from the website
              as StudentGlobalNeed develops. We do not guarantee that every
              feature will always be available.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              Limitation of liability
            </h2>

            <p className="mt-3">
              StudentGlobalNeed is provided on an as-is and as-available basis.
              To the extent permitted by applicable law, we are not responsible
              for losses resulting from reliance on information, tools,
              generated documents, or third-party content available through the
              website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">
              Changes to these terms
            </h2>

            <p className="mt-3">
              These Terms of Use may be updated as the platform develops.
              Updated terms will be published on this page.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Contact</h2>

            <p className="mt-3">
              If you have questions about these Terms of Use, please contact us
              through the Contact page.
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  );
}
