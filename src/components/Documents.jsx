import { useMemo, useState } from 'react'
import logo from '../assets/pt-digi-media-komunika.png'

const WA = 'https://wa.me/6281944362102'

const docTypes = [
  { id: 'quotation', label: 'Penawaran', code: 'QTN', desc: 'Quotation / proposal layanan' },
  { id: 'invoice', label: 'Invoice', code: 'INV', desc: 'Tagihan layanan' },
  { id: 'receipt', label: 'Kwitansi', code: 'RCP', desc: 'Bukti penerimaan pembayaran' },
  { id: 'haki', label: 'HAKI Assessment', code: 'HAK', desc: 'Analisis awal aset kekayaan intelektual' },
  { id: 'progress', label: 'Progress Report', code: 'PRG', desc: 'Laporan perkembangan pekerjaan' },
  { id: 'final', label: 'Final Report', code: 'FIN', desc: 'Ringkasan penyelesaian layanan' },
]

const defaultData = {
  client: 'Nama Klien / Perusahaan',
  clientAddress: 'Alamat klien',
  clientPhone: '08xxxxxxxxxx',
  subject: 'Layanan Legalitas & HAKI',
  service: 'Pendirian badan usaha dan pendampingan legalitas',
  qty: 1,
  price: 2500000,
  discount: 0,
  tax: 0,
  due: '7 hari setelah invoice diterbitkan',
  paymentStatus: 'UNPAID',
  paymentMethod: 'Transfer bank / sesuai invoice',
  reference: 'Konsultasi awal',
  projectStatus: 'Dalam proses',
  progress: 40,
  period: 'Oktober 2026',
  ipType: 'Merek',
  brand: 'Nama / Brand Klien',
  className: 'Kelas akan ditentukan setelah assessment',
  recommendation: 'Lakukan pengecekan dan penelusuran sebelum pengajuan.',
  notes: 'Dokumen ini merupakan dokumen komersial / laporan pendampingan dan bukan Faktur Pajak.',
}

function money(n){
  return new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(Number(n)||0)
}
function today(){ return new Intl.DateTimeFormat('id-ID',{day:'2-digit',month:'long',year:'numeric'}).format(new Date()) }
function numberFor(type){
  const d = new Date()
  const code = docTypes.find(x=>x.id===type)?.code || 'DOC'
  return `${code}-${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-0001`
}

function Field({label, children}){
  return <label className="docField"><span>{label}</span>{children}</label>
}

function DocumentPreview({type, data}){
  const subtotal = (Number(data.qty)||0) * (Number(data.price)||0)
  const total = Math.max(0, subtotal - (Number(data.discount)||0) + (Number(data.tax)||0))
  const doc = docTypes.find(x=>x.id===type) || docTypes[0]
  const no = numberFor(type)

  return <div className="documentPaper">
    <div className="paperHeader">
      <div className="paperBrand"><img src={logo} alt="PT Digi Media Komunika"/><div><b>PT DIGI MEDIA KOMUNIKA</b><small>LET'S DIGITIZED YOURS</small></div></div>
      <div className="paperMeta"><b>{doc.label.toUpperCase()}</b><span>{no}</span><span>{today()}</span></div>
    </div>

    <div className="paperRule" />

    <div className="paperGrid2">
      <div><small>DITERBITKAN UNTUK</small><h3>{data.client}</h3><p>{data.clientAddress}<br/>{data.clientPhone}</p></div>
      <div><small>REFERENSI</small><h3>{data.reference}</h3><p>{data.period}<br/>{data.subject}</p></div>
    </div>

    {type === 'haki' ? <>
      <div className="paperSectionTitle">HAKI / IP ASSESSMENT</div>
      <div className="assessmentGrid">
        <div><small>JENIS IP</small><b>{data.ipType}</b></div>
        <div><small>BRAND / KARYA</small><b>{data.brand}</b></div>
        <div><small>KELAS / KATEGORI</small><b>{data.className}</b></div>
      </div>
      <div className="paperBox"><small>REKOMENDASI AWAL</small><p>{data.recommendation}</p></div>
      <div className="paperBox"><small>CATATAN</small><p>{data.notes}</p></div>
    </> : type === 'progress' ? <>
      <div className="paperSectionTitle">PROJECT PROGRESS</div>
      <div className="progressBig"><b>{data.progress}%</b><span>STATUS: {data.projectStatus}</span></div>
      <div className="progressTrack"><i style={{width:`${Math.min(100,Math.max(0,Number(data.progress)||0))}%`}} /></div>
      <div className="paperBox"><small>RUANG LINGKUP PEKERJAAN</small><p>{data.service}</p></div>
      <div className="paperBox"><small>CATATAN</small><p>{data.notes}</p></div>
    </> : type === 'final' ? <>
      <div className="paperSectionTitle">FINAL SERVICE SUMMARY</div>
      <div className="finalChecklist"><span>✓ Data klien & kebutuhan diterima</span><span>✓ Dokumen layanan diproses</span><span>✓ Pendampingan / monitoring diselesaikan</span><span>✓ Dokumen hasil diserahkan sesuai scope</span></div>
      <div className="paperBox"><small>LAYANAN</small><p>{data.service}</p></div>
      <div className="paperBox"><small>CATATAN PENYELESAIAN</small><p>{data.notes}</p></div>
    </> : <>
      <div className="paperSectionTitle">DETAIL LAYANAN</div>
      <table className="paperTable"><thead><tr><th>Deskripsi</th><th>Qty</th><th>Harga</th><th>Jumlah</th></tr></thead><tbody><tr><td><b>{data.service}</b><small>{data.subject}</small></td><td>{data.qty}</td><td>{money(data.price)}</td><td>{money(subtotal)}</td></tr></tbody></table>
      <div className="paperTotals"><span>Subtotal <b>{money(subtotal)}</b></span><span>Diskon <b>{money(data.discount)}</b></span><span>Pajak / penyesuaian <b>{money(data.tax)}</b></span><strong>TOTAL <em>{money(total)}</em></strong></div>
      {type === 'receipt' && <div className="paidStamp">PAID</div>}
      <div className="paperBox"><small>{type === 'invoice' ? 'JATUH TEMPO' : type === 'quotation' ? 'MASA BERLAKU PENAWARAN' : 'METODE PEMBAYARAN'}</small><p>{type === 'invoice' ? data.due : data.paymentMethod}</p></div>
    </>}

    <div className="paperFooter"><div><b>PT DIGI MEDIA KOMUNIKA</b><span>Rukan CitraIndah Stonayard Bogor Blok E No 1, Cimahpar, Bogor Utara 16155</span><span>WhatsApp 0819 4436 2102</span></div><div className="signature"><span>Hormat kami,</span><b>PT Digi Media Komunika</b></div></div>
  </div>
}

export default function Documents(){
  const [type,setType] = useState('quotation')
  const [data,setData] = useState(defaultData)
  const current = useMemo(()=>docTypes.find(x=>x.id===type),[type])
  const set = (key,val)=>setData(d=>({...d,[key]:val}))

  const printDoc = ()=>window.print()
  const waText = encodeURIComponent(`Halo PT Digi Media Komunika, saya ingin konsultasi ${current.label}.`)

  return <section id="dokumen" className="documentsSection section">
    <div className="container">
      <div className="docIntro"><div><div className="eyebrow">DOCUMENT CENTER</div><h2>Dari konsultasi sampai <em>dokumen siap kirim.</em></h2><p>Satu workspace untuk membuat penawaran, invoice, kwitansi, assessment HAKI, progress report, dan final report dengan identitas PT Digi Media Komunika.</p></div><a className="btn purpleBtn" href={`${WA}?text=${waText}`} target="_blank" rel="noreferrer">Konsultasi Dokumen ↗</a></div>

      <div className="docStudio">
        <aside className="docSidebar">
          <div className="docSideHead"><b>DOCUMENT STUDIO</b><span>READY</span></div>
          {docTypes.map(d=><button key={d.id} className={type===d.id?'active':''} onClick={()=>setType(d.id)}><strong>{d.code}</strong><span><b>{d.label}</b><small>{d.desc}</small></span></button>)}
          <div className="docSideNote"><b>PDF workflow</b><span>Isi data → preview → Print / Save as PDF</span></div>
        </aside>

        <div className="docWorkspace">
          <div className="docForm">
            <div className="docFormHead"><div><small>ACTIVE TEMPLATE</small><h3>{current.label}</h3></div><button className="printBtn" onClick={printDoc}>Print / Save PDF</button></div>
            <div className="docFormGrid">
              <Field label="Nama klien / perusahaan"><input value={data.client} onChange={e=>set('client',e.target.value)}/></Field>
              <Field label="No. WhatsApp"><input value={data.clientPhone} onChange={e=>set('clientPhone',e.target.value)}/></Field>
              <Field label="Alamat klien"><input value={data.clientAddress} onChange={e=>set('clientAddress',e.target.value)}/></Field>
              <Field label="Referensi"><input value={data.reference} onChange={e=>set('reference',e.target.value)}/></Field>
              <Field label="Subjek"><input value={data.subject} onChange={e=>set('subject',e.target.value)}/></Field>
              <Field label="Periode"><input value={data.period} onChange={e=>set('period',e.target.value)}/></Field>
            </div>

            {type==='haki' ? <div className="docFormGrid"><Field label="Jenis IP"><select value={data.ipType} onChange={e=>set('ipType',e.target.value)}><option>Merek</option><option>Hak Cipta</option><option>Paten Sederhana</option><option>Paten</option><option>Desain Industri</option><option>Rahasia Dagang</option></select></Field><Field label="Brand / karya"><input value={data.brand} onChange={e=>set('brand',e.target.value)}/></Field><Field label="Kelas / kategori"><input value={data.className} onChange={e=>set('className',e.target.value)}/></Field><Field label="Rekomendasi"><textarea value={data.recommendation} onChange={e=>set('recommendation',e.target.value)}/></Field></div> : type==='progress' ? <div className="docFormGrid"><Field label="Status proyek"><select value={data.projectStatus} onChange={e=>set('projectStatus',e.target.value)}><option>Dalam proses</option><option>Menunggu dokumen</option><option>Menunggu verifikasi</option><option>Selesai</option></select></Field><Field label="Progress %"><input type="number" min="0" max="100" value={data.progress} onChange={e=>set('progress',e.target.value)}/></Field><Field label="Layanan"><input value={data.service} onChange={e=>set('service',e.target.value)}/></Field><Field label="Catatan"><textarea value={data.notes} onChange={e=>set('notes',e.target.value)}/></Field></div> : type==='final' ? <div className="docFormGrid"><Field label="Layanan"><input value={data.service} onChange={e=>set('service',e.target.value)}/></Field><Field label="Status akhir"><select value={data.projectStatus} onChange={e=>set('projectStatus',e.target.value)}><option>Selesai</option><option>Selesai sebagian</option></select></Field><Field label="Catatan penyelesaian"><textarea value={data.notes} onChange={e=>set('notes',e.target.value)}/></Field></div> : <div className="docFormGrid"><Field label="Layanan"><input value={data.service} onChange={e=>set('service',e.target.value)}/></Field><Field label="Qty"><input type="number" min="1" value={data.qty} onChange={e=>set('qty',e.target.value)}/></Field><Field label="Harga"><input type="number" min="0" value={data.price} onChange={e=>set('price',e.target.value)}/></Field><Field label="Diskon"><input type="number" min="0" value={data.discount} onChange={e=>set('discount',e.target.value)}/></Field><Field label="Pajak / penyesuaian"><input type="number" min="0" value={data.tax} onChange={e=>set('tax',e.target.value)}/></Field><Field label={type==='invoice'?'Jatuh tempo':'Metode pembayaran'}><input value={type==='invoice'?data.due:data.paymentMethod} onChange={e=>set(type==='invoice'?'due':'paymentMethod',e.target.value)}/></Field></div>}
          </div>
          <div className="docPreviewWrap"><div className="previewLabel">LIVE PREVIEW</div><DocumentPreview type={type} data={data}/></div>
        </div>
      </div>

      <div className="documentWorkflow"><div><b>01</b><span>Quotation</span><small>Penawaran</small></div><i>→</i><div><b>02</b><span>Invoice</span><small>Tagihan</small></div><i>→</i><div><b>03</b><span>Payment</span><small>Pembayaran</small></div><i>→</i><div><b>04</b><span>Receipt</span><small>Kwitansi</small></div><i>→</i><div><b>05</b><span>Progress</span><small>Monitoring</small></div><i>→</i><div><b>06</b><span>Final</span><small>Serah terima</small></div></div>
      <div className="taxNote"><b>Catatan pajak:</b> Invoice/kwitansi komersial berbeda dengan Faktur Pajak. Jika transaksi memerlukan Faktur Pajak, penerbitannya mengikuti status PKP dan ketentuan perpajakan yang berlaku.</div>
    </div>
  </section>
}
