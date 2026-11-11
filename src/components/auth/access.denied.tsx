"use client";

import { ArrowLeft, Home, ShieldAlert } from "lucide-react";
import Link from "next/link";

export default function AccessDenied() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      {/* Decorative Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-red-500/10 dark:bg-red-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative w-full max-w-md text-center">
        {/* Animated Icon Container */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-900/50 shadow-sm shadow-red-100 dark:shadow-none animate-pulse">
          <ShieldAlert
            size={40}
            strokeWidth={1.5}
            className="text-red-600 dark:text-red-400"
          />
        </div>

        {/* Error Code Tag */}
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase bg-red-50 dark:bg-red-950/60 border border-red-200/60 dark:border-red-900/40 text-red-600 dark:text-red-400 mb-4">
          Error 403
        </span>

        {/* Heading */}
        <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50 sm:text-4xl">
          Access Denied
        </h1>

        {/* Description */}
        <p className="mx-auto mb-8 text-base leading-relaxed text-slate-600 dark:text-slate-400 max-w-sm">
          Sorry, your current account doesn't have the necessary permissions to
          access this page.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-12">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl text-white bg-slate-900 hover:bg-slate-800 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-200 shadow-sm transition-all active:scale-[0.98]"
          >
            <Home size={16} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-xl text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/60 shadow-sm transition-all active:scale-[0.98]"
          >
            <ArrowLeft size={16} />
            Go Back
          </button>
        </div>

        {/* Footer */}
        <p className="text-xs tracking-wide text-slate-400 dark:text-slate-600 font-medium">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </div>
  );
}
