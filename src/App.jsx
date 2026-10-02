import Navbar from './components/Navbar'
import Services from './components/Services'
import Packages from './components/Packages'
import Haki from './components/Haki'
import Process from './components/Process'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Documents from './components/Documents'
import LeadFunnel from './components/LeadFunnel'
import logo from './assets/pt-digi-media-komunika.png'
import headerImage from './assets/legalitas-header.jpg'

const wa='https://wa.me/6281944362102?text=Halo%20PT%20Digi%20Media%20Komunika%2C%20saya%20ingin%20konsultasi%20legalitas.'

export default function App(){
 return <>
  <div className="topbar"><div className="container"><span>PT DIGI MEDIA KOMUNIKA</span><span>Legalitas Usaha · HAKI · Pendampingan</span><span>WhatsApp 0819 4436 2102</span></div></div>
  <Navbar/>
  <main>
   <section className="hero heroFullImage">
    <img className="heroBackground" src={headerImage} alt="Konsultasi legalitas usaha dan HAKI PT Digi Media Komunika" />
    <div className="heroBackgroundOverlay"></div>
    <div className="heroGlow glow1"></div><div className="heroGlow glow2"></div>
    <div className="container heroGrid">
      <div className="heroCopy">
        <div className="heroEyebrow"><span></span> LEGALITAS USAHA & KEKAYAAN INTELEKTUAL</div>
        <h1>Legalitas jelas.<br/><strong>Bisnis lebih siap.</strong></h1>
        <p className="heroLead">Pendirian <b>PT, CV, PT Perorangan, Yayasan</b>, NIB/OSS, AHU, NPWP bisnis hingga perlindungan <b>HAKI</b> — dalam satu layanan pendampingan.</p>
        <div className="heroActions"><a className="btn gold" href={wa} target="_blank">Mulai Konsultasi <span>↗</span></a><a className="btn outline" href="#konsultasi">Mulai Form</a></div>
        <div className="heroTrust"><span>✓ Konsultasi kebutuhan</span><span>✓ Pendampingan proses</span><span>✓ Monitoring</span></div>
      </div>
      <div className="heroPhotoBadge">
        <b>360°</b><span>Legalitas &<br/>Perlindungan IP</span>
      </div>
    </div>
   </section>
   <div className="stats"><div className="container statsGrid"><div><b>PT</b><span>Pendirian Badan Usaha</span></div><div><b>OSS</b><span>Perizinan Berusaha</span></div><div><b>AHU</b><span>Administrasi Badan Hukum</span></div><div><b>HAKI</b><span>Perlindungan Aset Intelektual</span></div></div></div>
   <LeadFunnel/><Services/><Packages/><Haki/><Process/><Documents/>
   <section className="split section"><div className="container splitGrid"><div><div className="eyebrow">UNTUK BISNIS YANG SERIUS</div><h2>Legalitas bukan sekadar dokumen. <em>Ini fondasi.</em></h2><p>Mulai dari usaha baru, brand yang sedang berkembang, sampai perusahaan yang ingin merapikan struktur legalitasnya.</p><a className="textBtn" href={wa} target="_blank">Bicarakan kebutuhan Anda <span>→</span></a></div><div className="audience"><div><b>UMKM</b><span>Usaha baru & berkembang</span></div><div><b>STARTUP</b><span>Struktur & IP digital</span></div><div><b>COMPANY</b><span>Legalitas korporasi</span></div><div><b>CREATOR</b><span>Karya & brand</span></div></div></div></section>
   <FAQ/>
   <section className="finalCta"><div className="container"><div><div className="eyebrow">KONSULTASI SEKARANG</div><h2>Sudah punya ide bisnis?<br/><strong>Siapkan legalitasnya.</strong></h2><p>Kirim kebutuhan Anda. Kami bantu arahkan pilihan layanan dan dokumen yang diperlukan.</p></div><a className="btn gold" href={wa} target="_blank">WhatsApp 0819 4436 2102 <span>↗</span></a></div></section>
  </main>
  <Footer/>
  <a className="waFloat" href={wa} target="_blank" aria-label="WhatsApp"><span>◔</span></a>
 </>
}
