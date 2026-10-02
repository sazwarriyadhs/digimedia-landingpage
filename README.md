# PT Digi Media Komunika — Legalitas & HAKI

Premium Vite + React landing page for **PT Digi Media Komunika**.

## Included
- Full-cover hero with company branding
- Legalitas services: PT, CV, PT Perorangan, Yayasan, NIB/OSS, AHU, NPWP
- HAKI services: Merek, Hak Cipta, Paten, Paten Sederhana, Desain Industri, Rahasia Dagang
- Pricing/package section
- Consultation CTA / WhatsApp
- FAQ and service workflow
- **Document Studio**: Quotation, Invoice, Kwitansi, HAKI Assessment, Progress Report, Final Report
- Live document preview
- **Print / Save as PDF** using the browser's A4 print layout
- Commercial invoice/receipt clearly separated from Faktur Pajak notes

## Run
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

## GitHub
Target repository:
`https://github.com/sazwarriyadhs/digimedia-landingpage.git`

```powershell
git init
git add .
git commit -m "Launch PT Digi Media Komunika Legalitas HAKI"
git branch -M main
git remote add origin https://github.com/sazwarriyadhs/digimedia-landingpage.git
git push -u origin main
```

If `origin` already exists:
```powershell
git remote set-url origin https://github.com/sazwarriyadhs/digimedia-landingpage.git
git push -u origin main
```

## Document workflow
Quotation → Invoice → Payment → Receipt → Progress Report → Final Report.

The first version uses browser print-to-PDF so it can work without a backend. For a production back-office, the same templates can later be connected to an API/database and automatic document numbering.

**Tax note:** a commercial invoice/receipt is not automatically a Faktur Pajak. Tax invoicing follows the company's PKP status and applicable Indonesian tax rules.

## Smart Client Intake Funnel
Landing page includes a 5-step progressive intake funnel:
1. Kebutuhan
2. Profil bisnis
3. HAKI screening (conditional)
4. Kontak
5. Review & WhatsApp handoff

The form is frontend-only and opens a pre-filled WhatsApp message to PT Digi Media Komunika. No backend/database is required for the MVP.
