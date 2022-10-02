import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import TechieSection from "~/content-sections/techie-section";
import DeveloperSection from "~/content-sections/developer-section.tsx";

export default function Index() {
  return (
    <main className="w-full">
      <article className="pt-44 pb-24 bg-gradient-to-b from-black to-light text-white h-[612px] relative z-0 flex items-center">
        <div className="max-w-4xl w-full mx-auto px-4 mb-12">
          <motion.h1
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
            className="text-6xl font-semibold mb-1 h-14"
          >
            I'm <span className="text-primary-light">Noah</span>.
          </motion.h1>
          <h2 className="text-4xl font-semibold mb-3">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.75 }}
            >
              Developer,
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: 1.5 }}
            >
              Techie,
            </motion.span>{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.75, delay: 2.25 }}
            >
              Father.
            </motion.span>
          </h2>
          <div className="space-x-4">
            <Link to="/projects">Explore Projects {">"}</Link>
            <Link to="/blog">Read Blog {">"}</Link>
          </div>
          <div className="max-w-4xl mx-auto absolute inset-0 hidden md:block">
            <img
              src="/images/noah.png"
              alt="Noah Johnson"
              className="absolute right-0 bottom-0 w-64"
            />
          </div>
        </div>
      </article>

      <DeveloperSection />

      <TechieSection />
    </main>
  );
}
