import {ClassType, SelectedPage} from "@/shared/types";
import tableau from "@/assets/certificationImages/TableauCertifications.jpg";
import awsDeveloper from "@/assets/certificationImages/AWS Certified Developer - Associate certificate.jpg";
import awsSap from "@/assets/certificationImages/AWS_SAP_certificate.jpg";
import {motion} from "framer-motion";
import HText from "@/shared/HText";
import Class from "./Certification";

const classes: Array<ClassType> = [
    {
        name: "AWS Certified Solutions Architect - Professional",
        image: awsSap,
    },
    {
        name: "AWS Certified Developer - Associate",
        image: awsDeveloper,
    },
    {
        name: "Tableau Desktop Certified Associate",
        image: tableau,
    }
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Certifications = ({setSelectedPage}: Props) => {
    return (
        <section id="certifications" className="w-full bg-primary-100 py-60">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Certifications)}
            >
                <motion.div
                    className="mx-auto w-5/6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true, amount: 0.5}}
                    transition={{duration: 0.5}}
                    variants={{
                        hidden: {opacity: 0, x: -50},
                        visible: {opacity: 1, x: 0},
                    }}
                >
                    <div className="md:w-3/5">
                        <HText>Certifications</HText>
                    </div>
                </motion.div>
                <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                    <ul className="w-[2800px] whitespace-nowrap">
                        {classes.map((item: ClassType, index) => (
                            <Class
                                key={`${item.name}-${index}`}
                                name={item.name}
                                description={item.description}
                                image={item.image}
                            />
                        ))}
                    </ul>
                </div>
            </motion.div>
        </section>
    );
};

export default Certifications;
