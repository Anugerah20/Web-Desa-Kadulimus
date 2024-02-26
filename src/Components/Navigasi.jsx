import { Button, Navbar } from 'flowbite-react';
import LogoDesa from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navigasi = () => {
     return (
          <Navbar className="bg-[#F6F5F5]">
               <Navbar.Brand as={Link} to="/">
                    <img src={LogoDesa} className="h-12 sm:h-16" alt="Logo Desa Kadulimus" />
               </Navbar.Brand>
               <div className="flex md:order-2">
                    <Button color="dark" as={Link} to="/lokasi">Lokasi</Button>
                    <Navbar.Toggle />
               </div>
               <Navbar.Collapse>
                    <Navbar.Link as={Link} to="/berita">Berita</Navbar.Link>
                    <Navbar.Link as={Link} to="/struktur-organisasi">Struktur Organisasi</Navbar.Link>
                    <Navbar.Link as={Link} to="/visi-misi">Visi & Misi</Navbar.Link>
               </Navbar.Collapse>
          </Navbar>
     );
}

export default Navigasi;
