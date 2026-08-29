import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Navbar />

      <section className="mx-auto max-w-4xl px-6 pb-20 pt-20">
        <div className="text-center">
          <p className="text-sm font-medium text-blue-600">Get in touch</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
            Contact us
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-600">
            Have a question, suggestion, or found something that needs to be
            corrected? We would love to hear from you.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-xl rounded-xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
          <form className="space-y-5">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="h-11 w-full rounded-lg border border-gray-200 bg-white px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className="h-11 w-full rounded-lg border border-gray-200 bg-white px-4 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium"
              >
                Message
              </label>

              <textarea
                id="message"
                rows={5}
                placeholder="How can we help?"
                className="w-full resize-none rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="h-11 w-full rounded-lg bg-blue-600 px-5 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
