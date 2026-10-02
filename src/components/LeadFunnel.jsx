import { useMemo, useState } from 'react'

const WA = '6281944362102'

const initial = {
  goal: '',
  entity: '',
  service: '',
  stage: '',
  businessName: '',
  domicile: '',
  owners: '',
  kbli: '',
  hakiType: '',
  brandName: '',
  classInfo: '',
  hasDesign: '',
  need: '',
  budget: '',
  name: '',
  whatsapp: '',
  email: '',
  preferred: 'WhatsApp',
}

const steps = ['Kebutuhan', 'Bisnis', 'HAKI', 'Kontak', 'Review']

function Field({ label, children, hint }) {
  return <label className="funnelField"><span>{label}</span>{children}{hint && <small>{hint}</small>}</label>
}

function OptionCard({ selected, onClick, title, text, icon }) {
  return <button type="button" className={`funnelOption ${selected ? 'selected' : ''}`} onClick={onClick}>
    <strong>{icon}</strong><span><b>{title}</b><small>{text}</small></span><i>✓</i>
  </button>
}

export default function LeadFunnel() {
  const [data, setData] = useState(initial)
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const set = (key, value) => setData(prev => ({ ...prev, [key]: value }))
  const isHaki = data.goal === 'HAKI' || data.goal === 'Legalitas + HAKI'

  const progress = ((step + 1) / steps.length) * 100

  const summary = useMemo(() => [
    ['Tujuan', data.goal],
    ['Badan usaha', data.entity || 'Belum ditentukan'],
    ['Layanan', data.service || 'Konsultasi kebutuhan'],
    ['Tahap', data.stage || 'Belum ditentukan'],
    ['Nama usaha', data.businessName || 'Belum diisi'],
    ['Domisili', data.domicile || 'Belum diisi'],
    ...(isHaki ? [['HAKI', data.hakiType || 'Belum ditentukan'], ['Nama brand/karya', data.brandName || 'Belum diisi']] : []),
    ['Kontak', data.name || 'Belum diisi'],
    ['WhatsApp', data.whatsapp || 'Belum diisi'],
  ], [data, isHaki])

  function validate() {
    if (step === 0 && (!data.goal || !data.service || !data.stage)) return 'Pilih tujuan, layanan utama, dan tahap bisnis Anda.'
    if (step === 1 && (!data.businessName || !data.domicile)) return 'Isi minimal nama usaha dan domisili.'
    if (step === 2 && isHaki && (!data.hakiType || !data.brandName)) return 'Isi jenis HAKI dan nama brand/karya yang ingin dilindungi.'
    if (step === 3 && (!data.name || !data.whatsapp)) return 'Nama dan WhatsApp wajib diisi agar tim dapat menghubungi Anda.'
    return ''
  }

  function next() {
    const message = validate()
    if (message) { setError(message); return }
    setError('')
    if (step === 1 && !isHaki) { setStep(3); return }
    setStep(s => Math.min(4, s + 1))
  }

  function back() {
    setError('')
    setStep(s => Math.max(0, s - 1))
  }

  function submit() {
    const message = validate()
    if (message) { setError(message); return }
    const lines = [
      'Halo PT Digi Media Komunika, saya ingin konsultasi legalitas/HAKI.',
      '',
      `Nama: ${data.name}`,
      `WhatsApp: ${data.whatsapp}`,
      `Email: ${data.email || '-'}`,
      `Tujuan: ${data.goal}`,
      `Badan usaha: ${data.entity || '-'}`,
      `Layanan: ${data.service || '-'}`,
      `Tahap bisnis: ${data.stage || '-'}`,
      `Nama usaha: ${data.businessName}`,
      `Domisili: ${data.domicile}`,
      `Pemilik/shareholder: ${data.owners || '-'}`,
      `KBLI: ${data.kbli || '-'}`,
      ...(isHaki ? [
        `Jenis HAKI: ${data.hakiType}`,
        `Nama brand/karya: ${data.brandName}`,
        `Kelas/kategori: ${data.classInfo || '-'}`,
        `Desain tersedia: ${data.hasDesign || '-'}`,
      ] : []),
      `Kebutuhan: ${data.need || '-'}`,
      `Budget indikatif: ${data.budget || '-'}`,
      `Preferensi kontak: ${data.preferred}`,
      '',
      'Mohon bantu review kebutuhan dan rekomendasi paket yang sesuai.'
    ]
    const url = `https://wa.me/${WA}?text=${encodeURIComponent(lines.join('\n'))}`
    setSubmitted(true)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  function reset() {
    setData(initial)
    setStep(0)
    setSubmitted(false)
    setError('')
  }

  return <section className="funnelSection section" id="konsultasi">
    <div className="container">
      <div className="funnelHead">
        <div>
          <div className="eyebrow">SMART CLIENT INTAKE · 2–3 MENIT</div>
          <h2>Mulai dari kebutuhan Anda.<br/><em>Kami arahkan langkahnya.</em></h2>
          <p>Isi form singkat ini. Hasilnya langsung dirangkum untuk tim PT Digi Media Komunika agar konsultasi pertama lebih fokus.</p>
        </div>
        <div className="funnelPromise"><b>01</b><span>Tanpa formulir panjang</span><b>02</b><span>Data langsung terstruktur</span><b>03</b><span>Terhubung ke WhatsApp</span></div>
      </div>

      <div className="funnelShell">
        <div className="funnelTop">
          <div className="funnelSteps">{steps.map((label, i) => <div key={label} className={`funnelStep ${i === step ? 'active' : ''} ${i < step ? 'done' : ''}`}><b>{i < step ? '✓' : String(i + 1).padStart(2, '0')}</b><span>{label}</span></div>)}</div>
          <div className="funnelProgress"><i style={{width:`${progress}%`}}></i></div>
        </div>

        <div className="funnelBody">
          {!submitted ? <>
            {step === 0 && <div className="funnelPage">
              <div className="funnelKicker">STEP 01 / KEBUTUHAN</div>
              <h3>Apa yang ingin Anda siapkan?</h3><p className="funnelSub">Pilih yang paling mendekati. Nanti tim kami validasi detailnya.</p>
              <div className="funnelOptions three">
                {['Legalitas Usaha','HAKI','Legalitas + HAKI'].map((x, i) => <OptionCard key={x} selected={data.goal===x} onClick={()=>set('goal',x)} icon={['01','02','03'][i]} title={x} text={['PT, CV, PT Perorangan, NIB, OSS, AHU, NPWP','Merek, Hak Cipta, Paten, Desain Industri','Rapikan badan usaha sekaligus lindungi aset IP'][i]} />)}
              </div>
              <div className="funnelFormGrid">
                <Field label="Layanan utama"><select value={data.service} onChange={e=>set('service',e.target.value)}><option value="">Pilih layanan</option><option>Pendirian PT</option><option>PT Perorangan</option><option>CV</option><option>Yayasan</option><option>NIB / OSS</option><option>AHU / NPWP Bisnis</option><option>HAKI / Merek</option><option>HAKI / Hak Cipta</option><option>HAKI / Paten</option><option>HAKI / Desain Industri</option><option>Konsultasi & Review</option></select></Field>
                <Field label="Tahap bisnis"><select value={data.stage} onChange={e=>set('stage',e.target.value)}><option value="">Pilih tahap</option><option>Baru akan mulai</option><option>Sudah berjalan belum legal</option><option>Sudah punya legalitas, ingin dirapikan</option><option>Sudah punya brand/karya, ingin dilindungi</option><option>Perlu pendampingan lanjutan</option></select></Field>
              </div>
            </div>}

            {step === 1 && <div className="funnelPage">
              <div className="funnelKicker">STEP 02 / PROFIL BISNIS</div>
              <h3>Ceritakan sedikit tentang bisnisnya.</h3><p className="funnelSub">Tidak perlu dokumen dulu. Informasi dasar cukup untuk screening awal.</p>
              <div className="funnelFormGrid">
                <Field label="Nama usaha / perusahaan"><input value={data.businessName} onChange={e=>set('businessName',e.target.value)} placeholder="Contoh: Fajar Florist" /></Field>
                <Field label="Domisili usaha"><input value={data.domicile} onChange={e=>set('domicile',e.target.value)} placeholder="Contoh: Bogor, Jawa Barat" /></Field>
                <Field label="Jumlah pemilik / shareholder"><select value={data.owners} onChange={e=>set('owners',e.target.value)}><option value="">Pilih</option><option>1 orang</option><option>2 orang</option><option>3–5 orang</option><option>Lebih dari 5</option><option>Belum tahu</option></select></Field>
                <Field label="KBLI (jika sudah tahu)" hint="Opsional — boleh dikosongkan."><input value={data.kbli} onChange={e=>set('kbli',e.target.value)} placeholder="Contoh: 47711 / belum tahu" /></Field>
                <Field label="Kebutuhan / kendala utama"><textarea value={data.need} onChange={e=>set('need',e.target.value)} placeholder="Contoh: ingin mendirikan PT dan mengurus NIB untuk bisnis florist..." /></Field>
                <Field label="Budget indikatif"><select value={data.budget} onChange={e=>set('budget',e.target.value)}><option value="">Pilih kisaran</option><option>Belum menentukan</option><option>&lt; Rp1 juta</option><option>Rp1–3 juta</option><option>Rp3–5 juta</option><option>Rp5–10 juta</option><option>&gt; Rp10 juta</option></select></Field>
              </div>
            </div>}

            {step === 2 && <div className="funnelPage">
              <div className="funnelKicker">STEP 03 / HAKI SCREENING</div>
              {!isHaki ? <div className="funnelSkip"><strong>HAKI tidak dipilih.</strong><span>Lewati tahap ini dan lanjut ke data kontak.</span><button type="button" className="btn purpleBtn" onClick={()=>setStep(3)}>Lanjut ke Kontak →</button></div> : <>
                <h3>Siapa aset intelektual yang ingin dilindungi?</h3><p className="funnelSub">Screening awal saja. Pemeriksaan ketersediaan dan strategi pendaftaran dilakukan setelah konsultasi.</p>
                <div className="funnelFormGrid">
                  <Field label="Jenis HAKI"><select value={data.hakiType} onChange={e=>set('hakiType',e.target.value)}><option value="">Pilih jenis</option><option>Merek</option><option>Hak Cipta</option><option>Paten Sederhana</option><option>Paten</option><option>Desain Industri</option><option>Rahasia Dagang</option><option>Belum tahu, perlu diarahkan</option></select></Field>
                  <Field label="Nama brand / karya"><input value={data.brandName} onChange={e=>set('brandName',e.target.value)} placeholder="Contoh: Fajar Florist" /></Field>
                  <Field label="Kelas / kategori (jika tahu)"><input value={data.classInfo} onChange={e=>set('classInfo',e.target.value)} placeholder="Contoh: kelas 31 / belum tahu" /></Field>
                  <Field label="Desain/logo sudah tersedia?"><select value={data.hasDesign} onChange={e=>set('hasDesign',e.target.value)}><option value="">Pilih</option><option>Sudah ada</option><option>Masih dalam proses</option><option>Belum ada</option></select></Field>
                </div>
                <div className="funnelInfo"><b>Catatan:</b> pengisian form ini bukan pemeriksaan merek/HAKI resmi dan belum menjamin ketersediaan atau pendaftaran dapat disetujui.</div>
              </>}
            </div>}

            {step === 3 && <div className="funnelPage">
              <div className="funnelKicker">STEP 04 / DATA KONTAK</div>
              <h3>Ke mana hasil konsultasinya dikirim?</h3><p className="funnelSub">Gunakan nomor WhatsApp aktif. Setelah submit, ringkasan kebutuhan otomatis dibuka di WhatsApp.</p>
              <div className="funnelFormGrid">
                <Field label="Nama lengkap"><input value={data.name} onChange={e=>set('name',e.target.value)} placeholder="Nama Anda" /></Field>
                <Field label="WhatsApp"><input value={data.whatsapp} onChange={e=>set('whatsapp',e.target.value)} placeholder="0812xxxxxxx" inputMode="tel" /></Field>
                <Field label="Email" hint="Opsional"><input value={data.email} onChange={e=>set('email',e.target.value)} placeholder="nama@email.com" type="email" /></Field>
                <Field label="Preferensi komunikasi"><select value={data.preferred} onChange={e=>set('preferred',e.target.value)}><option>WhatsApp</option><option>WhatsApp + Email</option><option>Telepon</option></select></Field>
              </div>
              <div className="privacyLine"><span>🔒</span><p>Data digunakan untuk kebutuhan konsultasi dan penyusunan layanan. Jangan masukkan password, OTP, nomor kartu, atau data sensitif lainnya.</p></div>
            </div>}

            {step === 4 && <div className="funnelPage reviewPage">
              <div className="funnelKicker">STEP 05 / REVIEW</div>
              <h3>Review sebelum dikirim.</h3><p className="funnelSub">Pastikan nomor WhatsApp benar. Setelah klik tombol, ringkasan akan dibuka di WhatsApp PT Digi Media Komunika.</p>
              <div className="reviewGrid">{summary.map(([label,value])=><div key={label}><small>{label}</small><b>{value}</b></div>)}</div>
              <div className="reviewNote"><b>Next:</b> tim melakukan screening awal, lalu mengarahkan paket, dokumen yang diperlukan, estimasi biaya, dan langkah berikutnya.</div>
            </div>}

            {error && <div className="funnelError">{error}</div>}
            <div className="funnelActions">
              <button type="button" className="backBtn" onClick={back} disabled={step===0}>← Kembali</button>
              {step < 4 ? <button type="button" className="btn purpleBtn" onClick={next}>Lanjut <span>→</span></button> : <button type="button" className="btn funnelSubmit" onClick={submit}>Kirim ke WhatsApp <span>↗</span></button>}
            </div>
          </> : <div className="funnelSuccess">
            <div className="successMark">✓</div><div className="funnelKicker">INTAKE READY</div><h3>Ringkasan konsultasi sudah siap.</h3><p>WhatsApp dibuka dengan data yang Anda isi. Tinggal kirim pesan tersebut ke tim PT Digi Media Komunika.</p>
            <div className="successActions"><button type="button" className="btn funnelSubmit" onClick={submit}>Buka WhatsApp Lagi ↗</button><button type="button" className="backBtn" onClick={reset}>Isi Form Baru</button></div>
          </div>}
        </div>
      </div>
    </div>
  </section>
}
