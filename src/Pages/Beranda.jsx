import Hero from "../assets/hero.jpg";

const Beranda = () => {

     const handleScroll = () => {
          const item = document.getElementById('visiMisi');
          item.scrollIntoView({ behavior: 'smooth' });
     };

     return (
          <div className="flex flex-col sm:flex-row w-full my-10">
               <div className="flex sm:w-1/2 w-full">
                    <img src={Hero} className="w-full sm:h-80 h-48 rounded" alt="Profil Desa Kadulimus" />
               </div>

               <div className="flex flex-col justify-center sm:w-1/2 w-full">
                    <h1 className="sm:text-4xl text-xl font-bold">
                         Membangun Desa Kadulimus Dengan Memanfaatkan  Sebagai Sarana Informasi
                    </h1>
                    <div className="flex justify-center my-5">
                         <button className="bg-black text-white w-40 h-12 rounded hover:font-bold transition duration-100" onClick={handleScroll}>Jelajahi Sekarang</button>
                    </div>
               </div>
          </div>
     )
}

export default Beranda;