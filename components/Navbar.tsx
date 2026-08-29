'use client';

import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="/"
          className="text-xl font-semibold tracking-tight text-gray-900"
        >
          StudentGlobalNeed
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 text-sm text-gray-600 md:flex">
          <a href="/universities" className="transition hover:text-gray-900">
            Universities
          </a>

          <a href="/cover-pages" className="transition hover:text-gray-900">
            Cover Pages
          </a>

          <a href="/student-tools" className="transition hover:text-gray-900">
            Student Tools
          </a>

          <a href="/resources" className="transition hover:text-gray-900">
            Resources
          </a>
        </nav>

        {/* Get Started */}
        <button className="hidden rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium transition hover:bg-gray-50 md:block">
          Get Started
        </button>

        {/* Mobile Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-gray-200 px-3 py-2 text-sm md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-6 py-4 text-sm">
            <a
              href="/universities"
              className="border-b border-gray-100 py-3 text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Universities
            </a>

            <a
              href="/cover-pages"
              className="border-b border-gray-100 py-3 text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Cover Pages
            </a>

            <a
              href="/student-tools"
              className="border-b border-gray-100 py-3 text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Student Tools
            </a>

            <a
              href="/resources"
              className="py-3 text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Resources
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
