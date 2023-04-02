import Link from "./Link";
import {SelectedPage} from "../../shared/types";

type Props = {
    className: string;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const MenuItems = ({className, selectedPage, setSelectedPage}: Props) => {
    return (
        <div className={className}>
            <Link
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Link
                page="Experiences"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            <Link
                page="Certifications"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
            {/*<Link*/}
            {/*    page="Portfolios"*/}
            {/*    selectedPage={selectedPage}*/}
            {/*    setSelectedPage={setSelectedPage}*/}
            {/*/>*/}
            {/*<Link*/}
            {/*    page="Blogs"*/}
            {/*    selectedPage={selectedPage}*/}
            {/*    setSelectedPage={setSelectedPage}*/}
            {/*/>*/}
            <Link
                page="Contacts"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
            />
        </div>
    )
}

export default MenuItems;
