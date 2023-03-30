import NameLogo from "@/assets/NameLogo.png";
import GithubLogo from "@/assets/github-mark-white.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex columns-2">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={NameLogo} />
          <p className="my-5 w-5/6">
            Lorem vitae ut augue auctor faucibus eget eget ut libero. Elementum
            purus et arcu massa dictum condimentum. Augue scelerisque iaculis
            orci ut habitant laoreet. Iaculis tristique.
          </p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold text-lg">Links</h4>
          <a className="my-5 flex items-center" href="https://github.com/Zhuofan-Zhang"><img alt={`${GithubLogo}`} src={GithubLogo} style={{maxWidth: '30px',height:'auto',marginRight:'10px'}}/>Github</a>
          <h4 className="font-bold text-lg">Contacts</h4>
          <p className="my-5">zhangzhuofan2019@163.com</p>
          <p>+8613162188552</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
