import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function UniversitiesPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-blue-600">
            University Directory
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Find your university
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Explore universities from around the world and discover resources
            designed for their students.
          </p>

          <div className="mx-auto mt-8 flex max-w-2xl flex-col gap-3 sm:flex-row">
            <input
              type="text"
              placeholder="Search university..."
              className="h-12 flex-1 rounded-lg border border-gray-200 px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500"
            />

            <button className="h-12 rounded-lg bg-blue-600 px-7 text-sm font-medium text-white transition hover:bg-blue-700">
              Search
            </button>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-xl border border-gray-200 bg-white p-8 text-center">
            <h2 className="text-lg font-semibold">
              University directory coming soon
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              We are building a global university directory with information,
              student resources, and academic tools.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
