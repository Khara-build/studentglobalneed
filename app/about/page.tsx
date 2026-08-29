import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 pb-20 pt-20">
        <div className="text-center">
          <p className="text-sm font-medium text-blue-600">
            About StudentGlobalNeed
          </p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Built for students, everywhere.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            StudentGlobalNeed is a global platform designed to bring useful
            university information, academic tools, documents, and resources
            together in one simple place.
          </p>
        </div>

        <div className="mt-16 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold tracking-tight">
              Our mission
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              Our goal is to make everyday university tasks simpler and more
              accessible for students around the world.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight">
              What we are building
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              StudentGlobalNeed will bring universities, academic document
              generators, student productivity tools, and useful resources
              together on one platform.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold tracking-tight">
              Our vision
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              We want StudentGlobalNeed to become a trusted digital companion
              for university students, helping them find what they need
              throughout their academic journey.
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
