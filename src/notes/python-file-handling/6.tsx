import {
  NoteLayout,
  SectionBlock,
  MentalModel,
  CodeBlock,
  CompareBlock,
  TrapsTable,
  Cheatsheet,
  QuickRecall,
  ConnectedTopics,
  InfoBox,
} from '../../components/notes'

const C = {
  blue:   '#4F8CFF',
  blueL:  '#93C5FD',
  green:  '#34D399',
  greenL: '#6EE7B7',
  orange: '#F59E0B',
  orangeL:'#FCD34D',
  purple: '#A78BFA',
  red:    '#F87171',
  muted:  '#9CA3AF',
  text:   '#E2E8F0',
  white:  '#F8FAFC',
  border: '#1E3A5F',
  dark:   '#0F172A',
}

// ─── SVG 1: CSV Structure ────────────────────────────────────────────────────
function CSVStructureSVG() {
  return (
    <svg viewBox="0 0 520 200" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes csvFade { 0%{opacity:0;transform:translateY(5px)} 100%{opacity:1;transform:translateY(0)} }
          .csv0{animation:csvFade .3s .05s ease both}
          .csv1{animation:csvFade .3s .2s ease both}
          .csv2{animation:csvFade .3s .35s ease both}
          .csv3{animation:csvFade .3s .5s ease both}
        `}</style>
        <marker id="csv-arr" markerWidth="8" markerHeight="8" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6 Z" fill={C.muted}/>
        </marker>
      </defs>
      <text x="260" y="18" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700" fontFamily="Poppins,sans-serif">CSV — Table ka Text Version</text>

      {/* Raw CSV text */}
      <g className="csv0">
        <rect x="10" y="28" width="220" height="100" rx="8" fill={C.orange} fillOpacity=".08" stroke={C.orange} strokeWidth="1.5"/>
        <text x="120" y="46" textAnchor="middle" fill={C.orange} fontSize="10" fontWeight="700" fontFamily="Poppins,sans-serif">Raw CSV Text</text>
        {['order_id,name,amount', '101,Divyesh,250', '102,Rahul,300', '103,Priya,450'].map((line, i) => (
          <text key={i} x="22" y={62 + i * 16} fill={C.text} fontSize="10" fontFamily="monospace">{line}</text>
        ))}
      </g>

      {/* Arrow: reader */}
      <g className="csv1">
        <line x1="230" y1="68" x2="270" y2="68" stroke={C.muted} strokeWidth="1.5" markerEnd="url(#csv-arr)"/>
        <text x="250" y="58" textAnchor="middle" fill={C.blue} fontSize="9" fontFamily="Open Sans,sans-serif" fontWeight="700">reader</text>
      </g>

      {/* reader output */}
      <g className="csv2">
        <rect x="270" y="28" width="240" height="100" rx="8" fill={C.blue} fillOpacity=".08" stroke={C.blue} strokeWidth="1.5"/>
        <text x="390" y="46" textAnchor="middle" fill={C.blue} fontSize="10" fontWeight="700" fontFamily="Poppins,sans-serif">csv.reader → Lists</text>
        {[
          "['order_id','name','amount']",
          "['101','Divyesh','250']",
          "['102','Rahul','300']",
        ].map((line, i) => (
          <text key={i} x="282" y={62 + i * 16} fill={C.blueL} fontSize="9" fontFamily="monospace">{line}</text>
        ))}
        <text x="390" y="118" textAnchor="middle" fill={C.red} fontSize="9" fontFamily="Open Sans,sans-serif">⚠️ row[0], row[1] — order dependent</text>
      </g>

      {/* Arrow: DictReader */}
      <g className="csv1">
        <line x1="230" y1="110" x2="270" y2="128" stroke={C.muted} strokeWidth="1.5" markerEnd="url(#csv-arr)"/>
        <text x="242" y="126" textAnchor="middle" fill={C.green} fontSize="9" fontFamily="Open Sans,sans-serif" fontWeight="700">DictReader</text>
      </g>

      {/* DictReader output */}
      <g className="csv3">
        <rect x="10" y="140" width="500" height="50" rx="8" fill={C.green} fillOpacity=".08" stroke={C.green} strokeWidth="1.5"/>
        <text x="260" y="158" textAnchor="middle" fill={C.green} fontSize="10" fontWeight="700" fontFamily="Poppins,sans-serif">csv.DictReader → Dicts (use this!)</text>
        <text x="22" y="177" fill={C.greenL} fontSize="9" fontFamily="monospace">{'{"order_id":"101","name":"Divyesh","amount":"250"}  ← row["name"] — safe, readable'}</text>
      </g>
    </svg>
  )
}

// ─── SVG 2: Quick Recall ─────────────────────────────────────────────────────
function RecallSVG() {
  return (
    <svg viewBox="0 0 520 175" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <rect x="0" y="0" width="520" height="175" rx="10" fill={C.dark} stroke={C.border} strokeWidth="1.5"/>
      <text x="260" y="22" textAnchor="middle" fill={C.white} fontSize="12" fontWeight="700" fontFamily="Poppins,sans-serif">Quick Recall — CSV</text>

      {[
        {
          x: 12, color: C.blue, title: 'Reading',
          rows: [['reader','list of lists'],['DictReader','list of dicts ✓'],['newline=""','mandatory!'],['delimiter="|"','custom sep'],['row.get(k)','safe access']],
        },
        {
          x: 182, color: C.green, title: 'Writing',
          rows: [['writer','writerow(list)'],['DictWriter','writerow(dict) ✓'],['fieldnames=[]','schema define'],['writeheader()','header row'],['newline=""','mandatory!']],
        },
        {
          x: 352, color: C.orange, title: 'Traps',
          rows: [['all string','type convert karo'],['no schema','DictReader use karo'],['no newline','blank lines'],['full read','stream instead'],['encoding','utf-8 specify']],
        },
      ].map((col) => (
        <g key={col.title}>
          <rect x={col.x} y="32" width="155" height="130" rx="6" fill={col.color} fillOpacity=".08" stroke={col.color} strokeWidth="1.2"/>
          <text x={col.x + 77} y="50" textAnchor="middle" fill={col.color} fontSize="11" fontWeight="700" fontFamily="Poppins,sans-serif">{col.title}</text>
          {col.rows.map(([code, note], i) => {
            const y = 66 + i * 19
            return (
              <g key={code}>
                {i % 2 === 0 && <rect x={col.x + 4} y={y - 12} width="147" height="16" rx="3" fill={col.color} fillOpacity=".06"/>}
                <text x={col.x + 8}  y={y} fontSize="9" fontWeight="700" fill={col.color} fontFamily="monospace">{code}</text>
                <text x={col.x + 68} y={y} fontSize="9" fill={C.muted} fontFamily="Open Sans,sans-serif">{note}</text>
              </g>
            )
          })}
        </g>
      ))}
    </svg>
  )
}

export default function PythonFileHandling6() {
  return (
    <NoteLayout
      title="CSV Handling"
      phase="0C"
      subtitle="csv module — reader, DictReader, writer, DictWriter, encoding, large file streaming"
    >
      {/* ── Section 1: Mental Model ── */}
      <SectionBlock icon="🧠" title="Mental Model — CSV kya hai?">
        <MentalModel
          analogy={
            <>
              <span className="block mb-1"><span className="text-visual-3 font-bold">CSV</span> = table ka text version — Excel ka raw, dumb sibling</span>
              <span className="block mb-1"><span className="text-visual-2 font-bold">No data types</span> = sab string milega — int, float, date — sab <code className="font-code text-xs">"string"</code></span>
              <span className="block mb-1"><span className="text-visual-1 font-bold">Use case</span> = systems ke beech data exchange — report download, bulk import</span>
              <span className="block"><span className="text-visual-4 font-bold">Rule</span> = CSV ko database mat samajh — sirf "dumb data pipe" hai</span>
            </>
          }
          diagram={<CSVStructureSVG />}
        />
      </SectionBlock>


      {/* ── Section 2: Reading ── */}
      <SectionBlock icon="📖" title="Reading CSV — reader vs DictReader">
        <div className="space-y-4">
          <CompareBlock
            badLabel="❌ csv.reader — index dependent, fragile"
            goodLabel="✅ csv.DictReader — name-based, safe"
            bad={`import csv

with open("orders.csv", newline='', encoding="utf-8") as f:
    reader = csv.reader(f)
    for row in reader:
        order_id = row[0]   # ← column order change → bug!
        name     = row[1]
        amount   = row[2]`}
            good={`import csv

with open("orders.csv", newline='', encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        order_id = row["order_id"]  # column name se — safe
        name     = row["name"]
        amount   = int(row["amount"])  # string → int convert karo!`}
          />
          <InfoBox type="warn" title='newline="" — mandatory hai'>
            Windows pe <code className="font-code text-xs">newline=""</code> bina diya → blank lines aayengi har row ke baad.
            Ye bug sirf Windows pe aata hai — developer Mac pe test karta hai, production crash hoti hai.
          </InfoBox>
        </div>
      </SectionBlock>

      {/* ── Section 3: Type Conversion ── */}
      <SectionBlock icon="🔢" title="Type Conversion — CSV ka Hidden Monster">
        <div className="space-y-4">
          <InfoBox type="err" title="CSV mein sab kuch string hota hai">
            CSV file mein <code className="font-code text-xs">250</code> likha ho — Python ko milega <code className="font-code text-xs">"250"</code> (string).
            Comparison ya math karo to silent wrong results ya crash.
          </InfoBox>
          <CodeBlock code={`import csv

with open("orders.csv", newline='', encoding="utf-8") as f:
    reader = csv.DictReader(f)
    for row in reader:
        # ❌ Galat — string compare
        if row["amount"] > 200:    # "250" > 200 → TypeError
            ...

        # ✅ Convert karo pehle
        amount = int(row["amount"])
        if amount > 200:
            print(f"{row['name']}: ₹{amount}")

        # ✅ Safe conversion with fallback
        try:
            price = float(row.get("price", 0))
        except (ValueError, TypeError):
            price = 0.0`} />
        </div>
      </SectionBlock>

      {/* ── Section 4: Writing ── */}
      <SectionBlock icon="✍️" title="Writing CSV — DictWriter">
        <div className="space-y-4">
          <CodeBlock code={`import csv

orders = [
    {"order_id": "101", "name": "Divyesh", "amount": 250},
    {"order_id": "102", "name": "Rahul",   "amount": 300},
]

with open("output.csv", "w", newline='', encoding="utf-8") as f:
    fieldnames = ["order_id", "name", "amount"]
    writer = csv.DictWriter(f, fieldnames=fieldnames)

    writer.writeheader()              # header row likhta hai
    writer.writerows(orders)          # list of dicts

# ✅ Missing field? — empty string likhega (error nahi)
writer.writerow({"order_id": "103"})  # name, amount = ""

# ✅ Extra field? — extrasaction="ignore" add karo
writer = csv.DictWriter(f, fieldnames=fieldnames, extrasaction="ignore")`} />
        </div>
      </SectionBlock>

      {/* ── Section 5: Custom Delimiter + Encoding ── */}
      <SectionBlock icon="⚙️" title="Delimiter + Encoding">
        <div className="space-y-4">
          <CodeBlock code={`# Custom delimiter (TSV, pipe-separated)
reader = csv.reader(f, delimiter='\\t')   # tab-separated
reader = csv.reader(f, delimiter='|')    # pipe-separated

# Encoding trap — Indian names, special chars
# ❌ Default encoding → crash
with open("users.csv") as f: ...

# ✅ Always specify encoding
with open("users.csv", encoding="utf-8", newline='') as f:
    reader = csv.DictReader(f)

# Fallback for old Windows-generated files
with open("old.csv", encoding="latin-1", newline='') as f:
    reader = csv.DictReader(f)

# Quote handling — default quotechar is "
# "Sharma, Divyesh" → single value (comma inside quotes)
reader = csv.reader(f, quotechar='"')   # default`} />
        </div>
      </SectionBlock>

      {/* ── Section 6: Large File + Safe Write ── */}
      <SectionBlock icon="🌊" title="Large File + Safe Write — Production Patterns">
        <div className="space-y-4">
          <CompareBlock
            badLabel="❌ Full load — memory crash"
            goodLabel="✅ Stream row by row — scalable"
            bad={`# 2GB CSV
rows = list(reader)         # RAM mein pura load
filtered = [r for r in rows
            if int(r["amount"]) > 200]`}
            good={`# Stream — process row by row
for row in reader:          # ek baar mein ek row
    if int(row["amount"]) > 200:
        writer.writerow(row)
# Memory = constant regardless of file size`}
          />
          <CodeBlock code={`import csv, os

# ✅ Safe write — atomic pattern
def safe_write_csv(path: str, rows: list, fields: list) -> None:
    tmp = path + ".tmp"
    with open(tmp, "w", newline='', encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fields)
        writer.writeheader()
        writer.writerows(rows)
    os.replace(tmp, path)   # atomic swap — crash safe`} />
        </div>
      </SectionBlock>

      {/* ── Section 7: Traps ── */}
      <SectionBlock icon="💣" title="Common Traps">
        <TrapsTable rows={[
          { level: 'S', mistake: 'Type compare bina conversion',       kyun: '"250" > 200 → TypeError ya wrong result',           fix: 'int(row["amount"]) convert karo pehle' },
          { level: 'M', mistake: 'newline="" bhoolna',                 kyun: 'Windows pe har row ke baad blank line',              fix: 'open(f, newline="") always' },
          { level: 'M', mistake: 'row[0] index use karna',             kyun: 'Column order change → silent bug',                  fix: 'DictReader + row["name"]' },
          { level: 'M', mistake: 'encoding specify na karna',          kyun: 'Hindi/special chars → UnicodeDecodeError',           fix: 'encoding="utf-8" always' },
          { level: 'M', mistake: 'list(reader) on 2GB file',           kyun: 'RAM crash',                                         fix: 'for row in reader: — stream karo' },
          { level: 'B', mistake: 'writeheader() bhoolna',              kyun: 'First row data ban jaega, header nahi',              fix: 'writer.writeheader() before writerows' },
        ]} />
      </SectionBlock>

      {/* ── Section 8: Cheatsheet ── */}
      <SectionBlock icon="📋" title="Cheatsheet">
        <Cheatsheet items={[
          { label: 'open(f, newline="", encoding="utf-8")', value: 'CSV ke liye standard open pattern' },
          { label: 'csv.DictReader(f)', value: 'Read — column name se access, safe' },
          { label: 'csv.DictWriter(f, fieldnames=[...])', value: 'Write — schema-driven' },
          { label: 'int(row["amount"])', value: 'Type convert karo — CSV sab string deta hai' },
          { label: 'row.get("key", default)', value: 'Missing column safe access' },
          { label: 'for row in reader:', value: 'Stream — large files ke liye' },
          { label: 'delimiter="|"', value: 'Custom separator' },
          { label: 'os.replace(tmp, path)', value: 'Atomic safe write' },
        ]} />
      </SectionBlock>

      {/* ── Section 9: Quick Recall ── */}
      <SectionBlock icon="⚡" title="Quick Recall">
        <QuickRecall>
          <RecallSVG />
        </QuickRecall>
      </SectionBlock>

      {/* ── Section 10: Connected Topics ── */}
      <SectionBlock icon="🔗" title="Connected Topics">
        <ConnectedTopics
          from={{ title: 'pathlib', description: 'Path object CSV open() ke saath use karo', href: '/roadmap/topic/python-file-handling/4' }}
          to={{ title: 'JSON Handling', description: 'Structured data ke liye CSV se zyada powerful', href: '/roadmap/topic/python-file-handling/7' }}
        />
      </SectionBlock>
    </NoteLayout>
  )
}
