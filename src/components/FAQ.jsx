import SectionTitle from './SectionTitle'
const faq=[
 ['Belum tahu harus pilih PT, CV atau PT Perorangan?','Tidak perlu menentukan sendiri. Konsultasikan kegiatan usaha, struktur pemilik dan tujuan bisnis Anda terlebih dahulu.'],
 ['Apakah PT Digi Media Komunika menangani Yayasan?','Ya. Kami menyediakan pendampingan untuk kebutuhan pendirian dan administrasi yayasan sesuai tujuan dan aktivitasnya.'],
 ['Apakah HAKI bisa diurus bersamaan dengan legalitas perusahaan?','Bisa. Legalitas badan usaha dan perlindungan kekayaan intelektual adalah proses berbeda, namun kebutuhan keduanya dapat direncanakan bersama.'],
 ['Apakah harga sudah termasuk semuanya?','Harga pada halaman adalah harga layanan mulai. Biaya pemerintah/PNBP, pekerjaan teknis tertentu dan kebutuhan khusus dapat berbeda setelah assessment.'],
]
export default function FAQ(){
 return <section id="faq" className="section faqSection"><div className="container">
  <SectionTitle eyebrow="FAQ" title={<>Pertanyaan sebelum <em>mulai.</em></>} />
  <div className="faqList">{faq.map(([q,a])=><details key={q}><summary>{q}<b>+</b></summary><p>{a}</p></details>)}</div>
 </div></section>
}
