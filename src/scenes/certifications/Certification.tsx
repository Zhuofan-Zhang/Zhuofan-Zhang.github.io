import useMediaQuery from "../../shared/helpers";

type Props = {
    name: string;
    description?: string;
    image: string;
};

const Certification = ({name, image}: Props) => {

    return (
        <li className="relative mx-5 flex-col items-center justify-center inline-block h-[380px] w-[450px]">
            <div className="text-base pb-3">{name}</div>
            <img alt={`${image}`} src={image}/>
        </li>
    );
};

export default Certification;
