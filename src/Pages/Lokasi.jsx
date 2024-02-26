import { RiArrowDropRightFill } from "react-icons/ri";
import FooterComponent from "../Components/FooterComponent";

const Lokasi = () => {
     return (
          <>
               <h1 className="my-5 mx-10 text-2xl flex justify-center">
                    Lokasi&nbsp;
                    <span className="font-bold">Desa</span>
                    <RiArrowDropRightFill className="h-10 w-10" />
               </h1>
               <hr />
               <div className="flex lg:flex-row flex-col flex-nowrap justify-center items-center my-10 mx-10 gap-5">
                    <div>
                         <iframe
                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31721.690523895315!2d106.04166542143068!3d-6.366692986502401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e423c62ffc8a421%3A0xe5236135b2f03d05!2sKadulimus%2C%20Kec.%20Banjar%2C%20Kabupaten%20Pandeglang%2C%20Banten!5e0!3m2!1sid!2sid!4v1708904207996!5m2!1sid!2sid"
                              width="600"
                              height="300"
                              style={{ border: 0 }}
                              allowfullscreen="off"
                              loading="lazy"
                              referrerpolicy="no-referrer-when-downgrade"
                              frameborder="0"
                              aria-hidden="false"
                              tabindex="0"
                         ></iframe>
                    </div>
                    <div className="text-left">
                         <h1 className="my-5 text-xl font-bold text-gray-600">Desa Kadulimus, Kecamatan Banjar KAB. Pandeglang, Banten</h1>
                         <p className="my-5 text-gray-600">Kode Desa/Kelurahan : 3601202004</p>
                         <p className="my-5 text-gray-600">Luas Wilayah : 253 Hektar</p>
                         <p className="my-5 text-gray-600">Koordinat Bujur : 106.06965</p>
                         <p className="my-5 text-gray-600">Koordinat Lintang : -6.396993</p>
                         <p className="my-5 text-gray-600">Ketinggian Diatas Permukaan Laut : 118 Meter</p>
                    </div>
               </div>
          </>
     );
};

export default Lokasi;
