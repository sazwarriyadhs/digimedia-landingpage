import SectionTitle from './SectionTitle'
const items = [
 ['©','Hak Cipta','Rp800 rb','Software, aplikasi, buku/modul, foto, video, konten digital dan karya tulis.',['Pemeriksaan awal','Pengajuan','Monitoring']],
 ['™','Merek','Rp2 jt','Nama brand, logo, produk, jasa, bisnis dan usaha. Paket dasar UMK 1 kelas.',['Cek awal','Klasifikasi','Pengajuan']],
 ['⚙','Paten Sederhana','Rp3,2 jt','Inovasi teknis, produk teknis dan pengembangan alat tertentu.',['Assessment','Data teknis','Pendampingan']],
 ['✦','Paten','Rp5,6 jt','Penemuan, teknologi dan inovasi yang membutuhkan proses paten.',['Assessment','Data teknis','Pengajuan']],
 ['◇','Desain Industri','Custom','Bentuk, motif, warna, tampilan dan desain produk.',['Konsultasi','Persiapan','Monitoring']],
 ['⌁','Rahasia Dagang','Custom','Informasi bisnis, formula, metode produksi dan data bernilai ekonomi.',['Identifikasi','Dokumen','Pendampingan']],
]
export default function Haki(){
 return <section id="haki" className="section haki">
  <div className="container">
   <SectionTitle eyebrow="Kekayaan Intelektual" title={<>Jangan hanya bangun <em>brand.</em> Lindungi asetnya.</>} desc="Pendampingan awal untuk membantu menyiapkan data, memilih jalur perlindungan dan memantau proses HAKI."/>
   <div className="hakiGrid">
    {items.map(x=><article className="hakiCard" key={x[1]}>
      <div className="hakiIcon">{x[0]}</div><div className="hakiHead"><h3>{x[1]}</h3><span>{x[2]} <small>mulai</small></span></div>
      <p>{x[3]}</p><div className="miniTags">{x[4].map(t=><span key={t}>✓ {t}</span>)}</div>
      <a href={`https://wa.me/6281944362102?text=Saya%20ingin%20konsultasi%20${encodeURIComponent(x[1])}.`} target="_blank">Konsultasi →</a>
    </article>)}
   </div>
   <div className="officialNote"><strong>Catatan:</strong> biaya pemerintah/PNBP dan kebutuhan teknis dapat berbeda berdasarkan jenis permohonan. Proses HAKI mengacu pada mekanisme resmi yang berlaku.</div>
  </div>
 </section>
}
