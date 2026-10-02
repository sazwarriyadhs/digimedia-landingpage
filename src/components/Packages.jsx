import SectionTitle from './SectionTitle'

const packages = [
 {name:'BASIC', price:'Rp1,6 jt', sub:'mulai', desc:'Untuk usaha yang baru mulai.', items:['Konsultasi legalitas usaha','NIB melalui OSS','Penentuan / pemeriksaan KBLI','Profil usaha','Pendampingan proses']},
 {name:'PT PERORANGAN', price:'Rp2,4 jt', sub:'mulai', desc:'Untuk pemilik usaha yang ingin memiliki badan usaha.', items:['Konsultasi pendirian','Pemilihan KBLI','NIB & dokumen pendirian','Pendampingan proses','Sampai dokumen tersedia']},
 {name:'CV', price:'Rp4 jt', sub:'mulai', desc:'Untuk usaha yang membutuhkan bentuk badan CV.', items:['Konsultasi pendirian CV','Cek & pemilihan nama','Akta & AHU','NIB · KBLI · OSS','Pendampingan proses']},
 {name:'PT', price:'Rp7,2 jt', sub:'mulai', desc:'Untuk bisnis yang ingin berkembang lebih profesional.', featured:true, items:['Konsultasi pendirian PT','Cek & pemilihan nama','Akta & AHU','NIB · KBLI · OSS','NPWP Badan','Pendampingan proses']},
]
export default function Packages(){
 return <section id="paket" className="section dark">
  <div className="container">
   <SectionTitle light eyebrow="Paket Legalitas" title={<>Pilih struktur yang <em>sesuai</em> dengan bisnis Anda.</>} desc="Harga paket mulai. Detail biaya disesuaikan dengan jenis usaha, dokumen, KBLI dan kebutuhan proses."/>
   <div className="packageGrid">
    {packages.map(p=><article className={`packageCard ${p.featured?'featured':''}`} key={p.name}>
      {p.featured && <div className="popular">PALING DICARI</div>}
      <div className="packageLabel">{p.name}</div>
      <div className="price">{p.price}<small> {p.sub}</small></div>
      <p>{p.desc}</p>
      <ul>{p.items.map(x=><li key={x}>{x}</li>)}</ul>
      <a href={`https://wa.me/6281944362102?text=Saya%20tertarik%20Paket%20${encodeURIComponent(p.name)}%20PT%20Digi%20Media%20Komunika.`} target="_blank" className="packageBtn">Konsultasikan <span>→</span></a>
    </article>)}
   </div>
   <div className="priceNote">Harga dapat berbeda berdasarkan kota/domisili, jumlah KBLI, struktur pemilik/pengurus, perizinan tambahan, pekerjaan teknis dan kebutuhan dokumen pendukung.</div>
  </div>
 </section>
}
