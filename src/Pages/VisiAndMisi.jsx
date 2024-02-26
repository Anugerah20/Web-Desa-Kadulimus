const VisiAndMisi = () => {
     return (
          <div id="visiMisi" className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-5">
               <div className="flex bg-[#283D66] text-white p-4">
                    <div className="flex flex-col">
                         <h2 className="text-3xl font-bold border-b-2 w-14 my-2">
                              Visi
                         </h2>
                         <p className="text-md text-start">
                              Bekerja melayani warga masyarakat Desa Kadulimus dilandasi dengan niat ibadah kepada Allah SWT demi tercapainya masyarakat Desa Kadulimus yang Maju, Tumbuh, Sejahtera dan Berakhlak Mulia.
                         </p>
                    </div>
               </div>

               <div className="flex bg-[#283D66] text-white p-4">
                    <div className="flex flex-col">
                         <h2 className="text-3xl font-bold border-b-2 w-16">
                              Misi
                         </h2>
                         <div className="text-md text-start p-4">
                              <ol className="list-decimal">
                                   <li>Mewujudkan Pemerintah Desa yang transparan</li>
                                   <li>Meningkatkan sumber daya manusia</li>
                                   <li>Mendorong peran aktif organisasi Pemerintah Desa</li>
                                   <li>Pelayanan Pemerintah Desa</li>
                                   <li>Mewujudkan masyarakat hidup sehat</li>
                                   <li>Optimalisasi peran Badan Usaha Milik Desa (BUMDesa)</li>
                                   <li>Mewujudkan masyarakat yang aman, nyaman, damai, dan bermanfaat</li>
                              </ol>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default VisiAndMisi;
