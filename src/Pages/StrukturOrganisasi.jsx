import { Tree, TreeNode } from 'react-organizational-chart';

const StrukturOrganisasi = () => (
     <>
          <h1 className="lg:text-2xl md:text-2xl sm:text-xl my-5 font-bold text-center">Struktur Organisasi Perangkat Desa Kadulimus Kecamatan Banjar</h1>
          <div className="max-w-full overflow-x-auto mx-auto px-4 sm:px-6 lg:px-8 my-10 bg-gray-100 p-4">
               <Tree label={<div className="text-md">Kepala Desa: Sukron Jamil</div>}>
                    <TreeNode label={<div>Sekretaris Desa: Ana Fauziah</div>}>
                         <TreeNode label={<div>Kaur TU & Umum: M. Dafa Firdaus</div>} />
                         <TreeNode label={<div>Kaur Perencanaan: M. Hamdi Al-Qowi</div>} />
                         <TreeNode label={<div>Kaur Keuangan: Arisa Yulistiawati</div>} />
                         <TreeNode label={<div>Kasi Pemerintahan: -</div>} />
                         <TreeNode label={<div>Kasi Kesejahteraan: Muhamad Inung</div>} />
                         <TreeNode label={<div>Staff: Lutfiah</div>}>
                              <TreeNode label={<div>Kasi Pelayanan: M. Yakub Hidayatullah</div>} />
                         </TreeNode>
                         <TreeNode label={<div>Kadus 1: Khaerunnisa</div>} />
                         <TreeNode label={<div>Kadus 2: Mulyadi</div>} />
                    </TreeNode>
               </Tree>
          </div>
     </>
);

export default StrukturOrganisasi;
