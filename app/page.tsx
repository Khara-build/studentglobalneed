import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      {/* Hero */}
      <section className="border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 text-sm font-medium text-blue-600">
              Built for students worldwide
            </p>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
              Everything students need,
              <span className="block text-gray-500">in one simple place.</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Find your university, create academic documents, and access useful
              student tools — all from one platform.
            </p>

            {/* University Search */}
            <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-3 sm:flex-row">
              <input
                type="text"
                placeholder="Search your university..."
                className="h-12 flex-1 rounded-lg border border-gray-200 bg-white px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500"
              />

              <button className="h-12 rounded-lg bg-blue-600 px-7 text-sm font-medium text-white transition hover:bg-blue-700">
                Search
              </button>
            </div>

            <p className="mt-4 text-xs text-gray-400">
              Universities from around the world
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="text-sm font-medium text-blue-600">Explore</p>

            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              What can you do?
            </h2>

            <p className="mt-3 text-gray-600">
              Simple tools designed around everyday student needs.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <FeatureCard
              title="Universities"
              description="Find universities and access resources made for their students."
            />

            <FeatureCard
              title="Cover Pages"
              description="Create clean academic cover pages for assignments and projects."
            />

            <FeatureCard
              title="Student Tools"
              description="Useful tools that make everyday academic tasks easier."
            />

            <FeatureCard
              title="Resources"
              description="Discover helpful resources for university life and study."
            />
          </div>
        </div>
      </section>

      {/* Why StudentGlobalNeed */}
      <section className="border-t border-gray-100 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <p className="text-sm font-medium text-blue-600">Our vision</p>

          <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            One platform for student life.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
            StudentGlobalNeed is being built to bring useful university
            information, academic tools, documents, and resources together in
            one simple platform for students around the world.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 transition hover:-translate-y-0.5 hover:border-gray-300 hover:shadow-sm">
      <h3 className="font-medium">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
    </div>
  );
}
