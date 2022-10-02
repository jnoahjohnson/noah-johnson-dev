import { useRef } from "react";
import { Link } from "@remix-run/react";
import { motion, useScroll, useTransform } from "framer-motion";
import ProjectCard from "~/components/project-card";

export default function DeveloperSection() {
  const developBgRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: developBgRef,
    offset: ["end end", "start 25%"],
  });
  const scaleRange = useTransform(scrollYProgress, [0, 1], ["100%", "120%"]);
  const xRange = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);
  const yRange = useTransform(scrollYProgress, [0, 1], ["-20%", "0%"]);

  return (
    <article className="py-16 relative z-0 overflow-hidden">
      <section className="mx-auto max-w-4xl px-4 mb-8">
        <h2 className="text-4xl font-semibold mb-2">Developer</h2>
        <p className="max-w-lg text-l">
          I have worked in a variety of positions as a full stack developer. I
          am passionate about building new products that solve people’s needs
          and "put a dent in the universe".
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4">
        <h3 className="text-lg font-semibold uppercase text-primary-dark mb-1">
          Highlighted Projects
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard
            title="On The Water"
            description="A full stack, fully automated paddle board rental system. Users could rent, pickup, and drop off paddle boards without the need for any employees."
            imgSrc="https://images.unsplash.com/photo-1561207653-c464ceda4393?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80"
          />
          <ProjectCard
            title="On The Water"
            description="A full stack, fully automated paddle board rental system. Users could rent, pickup, and drop off paddle boards without the need for any employees."
            imgSrc="https://images.unsplash.com/photo-1561207653-c464ceda4393?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80"
          />
        </div>

        <Link
          to="/projects"
          className="mb-6 mt-4 block mx-auto text-center text-lg text-black"
        >
          See All Projects {">"}
        </Link>

        <h3 className="text-lg font-semibold uppercase text-primary-dark mb-1">
          Technologies
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="w-full h-48 bg-slate-50 rounded flex flex-col items-center justify-between p-4">
            <div></div>
            <p className="text-sm">Frontend</p>
          </div>
          <div className="w-full h-48 bg-slate-50 rounded flex flex-col items-center justify-between p-4">
            <div></div>
            <p className="text-sm">Backend</p>
          </div>
          <div className="w-full h-48 bg-slate-50 rounded flex flex-col items-center justify-between p-4">
            <div></div>
            <p className="text-sm">Other</p>
          </div>
        </div>
      </section>

      <motion.img
        src="/images/develop-bg.png"
        alt="Background with icons"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        ref={developBgRef}
        className="absolute right-0 top-0 w-1/2"
        style={{ scale: scaleRange, x: xRange, y: yRange }}
      />
      <p>{}</p>
    </article>
  );
}
