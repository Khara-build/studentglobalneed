import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function StudentToolsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pb-20 pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-blue-600">
            Student Productivity
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Student tools
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Useful tools designed to make studying, assignments, and everyday
            university life easier.
          </p>
        </div>
      </section>

      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <ToolCard
              title="Coming soon"
              description="Useful academic and productivity tools will be available here."
            />

            <ToolCard
              title="Coming soon"
              description="We are building simple tools around everyday student needs."
            />

            <ToolCard
              title="Coming soon"
              description="More student-focused features will be added over time."
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function ToolCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h2 className="font-medium">{title}</h2>

      <p className="mt-2 text-sm leading-6 text-gray-600">{description}</p>
    </div>
  );
}
