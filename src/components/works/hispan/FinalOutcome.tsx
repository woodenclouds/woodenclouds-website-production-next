import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalOutcome() {
  return (
    <section className="overflow-hidden border-b border-slate-200/80 bg-[#FAFAFC] py-24">
      <div className="mx-auto max-w-7xl px-6 text-center md:px-12">
        <div className="flex flex-col items-center justify-between gap-4 pt-8 sm:flex-row">
          <div className="text-left">
            <div className="text-sm font-semibold text-slate-800">
              HISPAN Multi-Factory Operations Platform for Lazza
            </div>
          </div>

          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 transition-colors hover:text-emerald-600"
          >
            <span>Explore another project</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
