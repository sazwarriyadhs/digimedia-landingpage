import SectionTitle from './SectionTitle'

const services = [
  ['01','PT & PT Perorangan','Pendirian badan usaha, pemilihan nama, KBLI dan pendampingan dokumen.','Akta','AHU','NIB','OSS'],
  ['02','CV & Badan Usaha','Solusi legalitas untuk usaha yang membutuhkan struktur badan usaha yang jelas.','Nama','Akta','AHU','NIB'],
  ['03','Yayasan','Pendampingan pendirian yayasan dan kebutuhan administrasi sesuai aktivitas organisasi.','Yayasan','AHU','NIB','OSS'],
  ['04','NIB · OSS · NPWP','Bantu arahkan kebutuhan administrasi dan dokumen pendukung legalitas bisnis.','NIB','OSS','NPWP','KBLI'],
  ['05','Merek & Hak Cipta','Lindungi nama brand, logo, software, buku, foto, video dan karya digital.','Merek','© Hak Cipta','Cek Awal','Monitoring'],
  ['06','Paten & Desain','Pendampingan awal untuk inovasi teknis, paten, desain industri dan rahasia dagang.','Paten','Desain','Assessment','Pengajuan'],
]
const icons = ['▣','◆','⌂','◫','™','✦']

export default function Services(){
 return <section id="layanan" className="section">
  <div className="container">
   <SectionTitle eyebrow="Layanan PT Digi Media Komunika" title={<>Legalitas dari <em>fondasi</em> sampai perlindungan aset.</>} desc="Satu pintu untuk membantu bisnis, organisasi, brand dan inovasi Anda menjadi lebih siap secara legal."/>
   <div className="serviceGrid">
    {services.map((s,i)=><article className="serviceCard" key={s[1]}>
      <div className="serviceTop"><span className="serviceNo">{s[0]}</span><span className="serviceIcon">{icons[i]}</span></div>
      <h3>{s[1]}</h3><p>{s[2]}</p>
      <div className="tags">{s.slice(3).map(x=><span key={x}>{x}</span>)}</div>
    </article>)}
   </div>
  </div>
 </section>
}
