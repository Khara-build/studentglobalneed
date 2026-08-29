import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CoverPagesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-blue-600">
            Academic Documents
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Create your cover page
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Create clean, professional cover pages for assignments, projects,
            reports, and other academic work.
          </p>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
            <h2 className="text-lg font-semibold">
              Cover page generator coming soon
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Choose your university, enter your academic information, and
              generate a professional PDF cover page.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
