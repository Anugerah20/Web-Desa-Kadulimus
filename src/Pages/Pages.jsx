import Beranda from "./Beranda"
import Berita from "./Berita";
import Lokasi from "./Lokasi";
import StrukturOrganisasi from "./StrukturOrganisasi";
import VisiAndMisi from "./VisiAndMisi";

const Pages = () => {
     return (
          <>
               <Beranda />
               <VisiAndMisi />
               <StrukturOrganisasi />
               <Berita />
               <Lokasi />
          </>
     )
}

export default Pages;