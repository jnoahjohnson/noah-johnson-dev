import { useRef } from "react";
import { Link } from "@remix-run/react";
import { motion, useScroll, useTransform } from "framer-motion";
import ArticleCard from "~/components/article-card";

export default function TechieSection() {
  const techieBgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: techieBgRef,
    offset: ["start end", "end start"],
  });
  const scrollRange = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <article className="py-16 relative z-0 overflow-hidden">
      <section className="mx-auto max-w-4xl px-4 mb-8">
        <h2 className="text-5xl font-semibold mb-2">Techie</h2>
        <p className="max-w-lg text-l">
          Having always been passionate about technology, I love writing about
          new apps, devices, and workflows that I have been using.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4">
        <h3 className="text-lg font-semibold uppercase text-primary-dark mb-1">
          Articles
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ArticleCard
            title="1 Month With Sunsama"
            date="Sep 27, 2022"
            imgSrc="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2971&q=80"
            tags={["Productivity", "Technology"]}
          />
          <ArticleCard
            title="1 Month With Sunsama"
            date="Sep 27, 2022"
            imgSrc="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2971&q=80"
            tags={["Productivity", "Technology"]}
          />
        </div>

        <Link
          to="/projects"
          className="mb-6 mt-4 block mx-auto text-center text-lg text-black"
        >
          See More Articles {">"}
        </Link>
      </section>

      <section className="mx-auto max-w-4xl px-4">
        <h3 className="text-lg font-semibold uppercase text-primary-dark mb-1">
          Technical Guides
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ArticleCard
            title="Multi-Page Forms in Remix"
            date="Sep 27, 2022"
            imgSrc="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2971&q=80"
            tags={["Remix", "Redis"]}
          />
          <ArticleCard
            title="Using AI to Generate Movies"
            date="Sep 27, 2022"
            imgSrc="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2971&q=80"
            tags={["Open AI", "Full Stack"]}
          />
        </div>

        <Link
          to="/projects"
          className="mb-6 mt-4 block mx-auto text-center text-lg text-black"
        >
          See More Guides {">"}
        </Link>
      </section>

      <motion.div
        ref={techieBgRef}
        className="opacity-10 bg-techie-pattern absolute inset-0 bg-repeat-y"
        style={{ y: scrollRange, scale: "120%" }}
      />
    </article>
  );
}
