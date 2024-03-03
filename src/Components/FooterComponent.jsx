import { Footer } from 'flowbite-react';
import Logo from "../assets/logo.png";
import { getCurrentYear } from '../Data';

const FooterComponent = () => {
     const currectYear = getCurrentYear();

     return (
          <Footer container className="bg-[#F6F5F5]">
               <div className="w-full text-center">
                    <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
                         <Footer.Brand
                              href="/"
                              src={Logo}
                              alt="Logo Desa Kadulimus"
                         />
                         <Footer.LinkGroup>
                              <Footer.Copyright href="#" by="Desa Kadulimus" year={currectYear} />
                         </Footer.LinkGroup>
                    </div>
               </div>
          </Footer>
     );
}

export default FooterComponent;
