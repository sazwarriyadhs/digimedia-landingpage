import { useState } from 'react'
import logo from '../assets/pt-digi-media-komunika.png'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [['Layanan','#layanan'],['Paket','#paket'],['HAKI','#haki'],['Proses','#proses'],['Dokumen','#dokumen'],['Konsultasi','#konsultasi'],['FAQ','#faq']]
  return <header className="navWrap">
    <div className="container nav">
      <a className="brand" href="#">
        <img src={logo} alt="PT Digi Media Komunika" />
      </a>
      <nav className={open ? 'navLinks open' : 'navLinks'}>
        {links.map(([label, href]) => <a key={label} href={href} onClick={()=>setOpen(false)}>{label}</a>)}
        <a className="mobileCta" href="https://wa.me/6281944362102?text=Halo%20PT%20Digi%20Media%20Komunika%2C%20saya%20ingin%20konsultasi%20legalitas." target="_blank">Mulai Konsultasi</a>
      </nav>
      <a className="navCta" href="https://wa.me/6281944362102?text=Halo%20PT%20Digi%20Media%20Komunika%2C%20saya%20ingin%20konsultasi%20legalitas." target="_blank">Mulai Konsultasi <span>↗</span></a>
      <button className="hamburger" onClick={()=>setOpen(!open)} aria-label="Menu"><i></i><i></i><i></i></button>
    </div>
  </header>
}
