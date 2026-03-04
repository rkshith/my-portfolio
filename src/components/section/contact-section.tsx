import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

export default function ContactSection() {
  return (
    <div className="pt-4">
      <div className="relative w-full">
        {/* Section Label */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 border bg-primary z-20 rounded-full px-4 py-1 shadow-sm">
          <span className="text-background text-sm font-medium">Contact</span>
        </div>

        <div className="border rounded-xl p-6 md:p-10 relative overflow-hidden">
          {/* Background Effect */}
          <div className="absolute inset-0 h-1/2 pointer-events-none">
            <FlickeringGrid
              className="h-full w-full"
              squareSize={2}
              gridGap={2}
              style={{
                maskImage: "linear-gradient(to bottom, black, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative flex flex-col items-center gap-6 text-center pt-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Get in Touch
            </h2>

            <p className="mx-auto max-w-lg text-muted-foreground text-balance">
              Interested in discussing AI systems, projects, or interesting ideas?
              Feel free to reach out. You can send me a message on{" "}
              <Link
                href={DATA.contact.social.X.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline underline-offset-4"
              >
                X
              </Link>{" "}
              or schedule a quick call if that&apos;s easier.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href={DATA.contact.social.X.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg border hover:bg-muted transition"
              >
                Message on X
              </Link>

              <Link
                href="https://cal.com/rakshithml"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}