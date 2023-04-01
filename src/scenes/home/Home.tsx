import useMediaQuery, { downloadPDF } from "@/shared/helpers";
import { SelectedPage } from "@/shared/types";
import Selfie from "@/assets/Selfie.png";
import Resume from "@/assets/Zhuofan_Zhang_Resume.pdf"
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  return (
    <section id="home" className=" md:h-full">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-full"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true ,amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] text-3xl">
              <p>Hi, I'm <span className="text-primary-500">Zhuofan Zhang</span>.</p>
              <p>A full stack Software Developer.</p>
              </div>
            </div>

            <p className="mt-8 text-sm">
              Hello, my name is [your name] and I am a software developer with [number of years] years of experience. I have a strong background in [programming languages, frameworks, and tools that you specialize in] and I am excited to be here today to discuss my qualifications for this position.
              Throughout my career, I have worked on a variety of projects ranging from [type of project] to [type of project]. I have a passion for building elegant and efficient solutions to complex problems, and I take pride in writing code that is both clean and maintainable.
              In addition to my technical skills, I also value collaboration and teamwork. I enjoy working in a dynamic and fast-paced environment where I can learn from others and contribute to the success of the team.
              Thank you for the opportunity to introduce myself, and I look forward to discussing my experience and qualifications further with you.
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once:true ,amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white" onClick={downloadPDF}><a href={Resume} download={Resume}>Download CV</a></button>
            <AnchorLink
              className="text-sm font-bold underline hover:text-primary-500"
              onClick={() => setSelectedPage(SelectedPage.Contacts)}
              href={`#${SelectedPage.Contacts}`}
            >
              <p>Contact Me</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="selfie" src={Selfie} />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
