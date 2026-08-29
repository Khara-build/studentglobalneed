export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a
              href="/"
              className="text-lg font-semibold tracking-tight text-gray-900"
            >
              StudentGlobalNeed
            </a>

            <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">
              Everything students need, in one simple place. A global platform
              built around university life.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Platform</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
              <a
                href="/universities"
                className="transition hover:text-gray-900"
              >
                Universities
              </a>

              <a href="/cover-pages" className="transition hover:text-gray-900">
                Cover Pages
              </a>

              <a
                href="/student-tools"
                className="transition hover:text-gray-900"
              >
                Student Tools
              </a>

              <a href="/resources" className="transition hover:text-gray-900">
                Resources
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900">Company</h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
              <a href="/about" className="transition hover:text-gray-900">
                About
              </a>

              <a href="/contact" className="transition hover:text-gray-900">
                Contact
              </a>

              <a href="/privacy" className="transition hover:text-gray-900">
                Privacy Policy
              </a>

              <a href="/terms" className="transition hover:text-gray-900">
                Terms of Use
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-100 pt-6">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} StudentGlobalNeed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
