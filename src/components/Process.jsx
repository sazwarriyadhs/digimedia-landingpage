import SectionTitle from './SectionTitle'
const steps=[['01','Konsultasi','Ceritakan usaha, tujuan, pemilik dan kebutuhan Anda.'],['02','Assessment','Kami bantu petakan bentuk usaha, KBLI, nama dan dokumen.'],['03','Pengajuan','Data disiapkan dan proses administrasi didampingi.'],['04','Monitoring','Progress dipantau sampai dokumen atau hasil proses tersedia.']]
export default function Process(){
 return <section id="proses" className="section processSection"><div className="container">
  <SectionTitle eyebrow="Cara Kerja" title={<>Simple. Terarah. <em>Didampingi.</em></>} desc="Anda fokus membangun bisnis. Kami bantu mengarahkan kebutuhan legalitas dan HAKI."/>
  <div className="processGrid">{steps.map(s=><div className="processItem" key={s[0]}><span>{s[0]}</span><div><h3>{s[1]}</h3><p>{s[2]}</p></div></div>)}</div>
 </div></section>
}
