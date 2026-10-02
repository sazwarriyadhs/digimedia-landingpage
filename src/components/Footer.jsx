import logo from '../assets/pt-digi-media-komunika.png'
export default function Footer(){
 return <footer><div className="container">
  <div className="footerTop">
   <div><img className="footerLogo" src={logo} alt="PT Digi Media Komunika"/><p>Legalitas usaha, pendirian badan usaha dan perlindungan kekayaan intelektual untuk bisnis Indonesia.</p></div>
   <div><h4>Layanan</h4><a href="#layanan">PT · CV · PT Perorangan</a><a href="#layanan">Yayasan · NIB · OSS</a><a href="#haki">Merek · Hak Cipta · Paten</a></div>
   <div><h4>Kontak</h4><a href="https://wa.me/6281944362102" target="_blank">0819 4436 2102</a><span>Azwar Riyadh</span><span>Rukan CitraIndah Stonayard<br/>Bogor, Jawa Barat</span></div>
  </div>
  <div className="footerBottom"><span>© 2026 PT Digi Media Komunika</span><span>LET'S DIGITIZED YOURS</span></div>
 </div></footer>
}
