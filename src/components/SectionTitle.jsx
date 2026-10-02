export default function SectionTitle({eyebrow,title,desc,light=false}) {
  return <div className={`sectionTitle ${light?'light':''}`}>
    <div className="eyebrow">{eyebrow}</div>
    <h2>{title}</h2>
    {desc && <p>{desc}</p>}
  </div>
}
