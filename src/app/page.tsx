
"use client";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { Search, Globe, ShieldCheck, TrendingUp, Database, BarChart3, Mail, Building2 } from "lucide-react";
import Link from "next/link";

const trendData = [
  { month: "Jan", value: 420 },
  { month: "Feb", value: 560 },
  { month: "Mar", value: 610 },
  { month: "Apr", value: 740 },
  { month: "May", value: 690 },
  { month: "Jun", value: 830 },
];

const topCountries = [
  { country: "India", value: 35 },
  { country: "USA", value: 27 },
  { country: "UAE", value: 14 },
  { country: "China", value: 12 },
  { country: "Vietnam", value: 7 },
  { country: "Indonesia", value: 5 },
];

const hsBreakup = [
  { name: "HS 0901 Coffee", value: 24 },
  { name: "HS 2710 Oils", value: 18 },
  { name: "HS 7208 Steel", value: 15 },
  { name: "HS 0306 Shrimps", value: 11 },
  { name: "Others", value: 32 },
];

const sampleRows = [
  { date: "2025-07-15", hs: "090121", product: "Coffee, roasted", importer: "Acme Importers LLC", exporter: "Bean Bros Pvt Ltd", origin: "India", destination: "UAE", qty: "24,000 kg", value: "$92,400" },
  { date: "2025-07-09", hs: "271019", product: "Petroleum oils", importer: "Desert Energy FZC", exporter: "Mak Oil DMCC", origin: "UAE", destination: "Vietnam", qty: "1,200,000 L", value: "$870,000" },
  { date: "2025-06-28", hs: "720836", product: "Flat-rolled steel", importer: "Bay State Steel", exporter: "Shandong Metals Co", origin: "China", destination: "USA", qty: "740 MT", value: "$612,000" },
];

export default function Page() {
  const [query, setQuery] = useState("");
  const filteredRows = useMemo(() => {
    if (!query) return sampleRows;
    const q = query.toLowerCase();
    return sampleRows.filter(r => [r.hs, r.product, r.importer, r.exporter, r.origin, r.destination].join(" ").toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="sticky top-0 z-50 backdrop-blur bg-background/60 border-b border-white/10">
        <div className="container h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
  <img
    src="/GLOBADE%20SOLUTION%20logo.png"
    alt="Globade Solution Logo"
    className="h-10 w-auto"
  />
  <div className="flex flex-col leading-tight">
    <span className="font-extrabold text-lg text-white">
      Globade <span className="text-primary">Solution</span>
    </span>
    <span className="text-xs text-white/60">Trade Intelligence</span>
  </div>
</div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#features" className="hover:text-primary">Features</a>
            <a href="#dashboard" className="hover:text-primary">Dashboard</a>
            <a href="#pricing" className="hover:text-primary">Pricing</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="btn btn-ghost">Log in</button>
            <button className="btn btn-primary">Request Demo</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Global Export–Import <span className="text-primary">Data & Insights</span>
            </h1>
            <p className="text-lg text-white/70 mt-4 max-w-xl">
              Discover markets, track competitors, and analyze HS-code trade with interactive dashboards across 100+ countries.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button className="btn btn-primary">Start Free Trial</button>
              <button className="btn btn-outline">View Sample Report</button>
            </div>
            <div className="mt-4 flex items-center gap-3 text-sm text-white/60">
              <ShieldCheck className="h-4 w-4" />
              <span>GDPR-ready • Role-based access • 99.9% uptime</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="card p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-lg font-semibold"><BarChart3 className="h-5 w-5" /> Live Trade Snapshot</div>
                <div className="text-xs text-white/60">Mock data</div>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="p-4 rounded-2xl bg-white/5">
                  <div className="text-sm text-white/70">Monthly Shipments</div>
                  <div className="text-2xl font-bold">830</div>
                  <div className="text-xs text-green-400 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" /> +7.5% MoM
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-white/5">
                  <div className="text-sm text-white/70">Active HS Codes</div>
                  <div className="text-2xl font-bold">1,942</div>
                  <div className="text-xs text-green-400 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" /> +3.1% MoM
                  </div>
                </div>
              </div>

              <div className="h-44 mt-6">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="value" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="container py-12">
        <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }}>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Everything you need to rival the leaders</h2>
          <p className="text-white/70 mt-2 max-w-2xl">Search, filter, visualize, and share export–import intelligence across markets.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            { icon: <Search className="h-5 w-5" />, title: "Powerful Search", desc: "Query by HS code, product, company, port, country, or date with millisecond responses." },
            { icon: <Database className="h-5 w-5" />, title: "Clean, Unified Data", desc: "Normalized fields, deduped entities, and smart HS mappings across 100+ countries." },
            { icon: <BarChart3 className="h-5 w-5" />, title: "Interactive Dashboards", desc: "Trends, top partners, price benchmarking, and market share out-of-the-box." },
          ].map((f, i) => (
            <div key={i} className="card p-6">
              <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">{f.icon}</div>
              <div className="mt-3 text-xl font-semibold">{f.title}</div>
              <div className="text-white/70">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Dashboard */}
      <section id="dashboard" className="container py-12">
        <h3 className="text-2xl font-bold">Sample Dashboard</h3>
        <p className="text-white/70">Swap in your database/API later. This is a live, filterable demo with mock data.</p>

        <div className="mt-4 flex gap-2 items-center">
          <div className="relative w-full md:w-96">
            <div className="absolute left-3 top-1/2 -translate-y-1/2"><Search className="h-4 w-4 text-white/60" /></div>
            <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search HS / product / company / country" className="input pl-9" />
          </div>
          <button className="btn btn-outline">Export CSV</button>
        </div>

        <div className="card mt-4 overflow-hidden">
          <table className="table">
            <thead>
              <tr>
                <th>Date</th>
                <th>HS Code</th>
                <th>Product</th>
                <th>Importer</th>
                <th>Exporter</th>
                <th>Origin</th>
                <th>Destination</th>
                <th>Qty</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              {filteredRows.map((r, idx) => (
                <tr key={idx}>
                  <td>{r.date}</td>
                  <td className="font-mono">{r.hs}</td>
                  <td>{r.product}</td>
                  <td>{r.importer}</td>
                  <td>{r.exporter}</td>
                  <td>{r.origin}</td>
                  <td>{r.destination}</td>
                  <td>{r.qty}</td>
                  <td>{r.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="card p-4">
            <div className="text-lg font-semibold">Top Destination Countries</div>
            <div className="text-sm text-white/70">Share of shipments (mock)</div>
            <div className="h-80 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topCountries}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="country" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="card p-4">
            <div className="text-lg font-semibold">HS Breakdown</div>
            <div className="text-sm text-white/70">Category distribution (mock)</div>
            <div className="h-80 mt-4">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={hsBreakup} dataKey="value" nameKey="name" outerRadius={120} label />
                  {hsBreakup.map((_, i) => <Cell key={i} />)}
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="container py-12">
        <h3 className="text-2xl font-bold">Simple, transparent pricing</h3>
        <p className="text-white/70">Start free. Upgrade when you need more countries, users, or API calls.</p>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {[
            { name: "Starter", price: "$99/mo", blurb: "1 user • 3 countries • standard dashboards", cta: "Start Free Trial" },
            { name: "Pro", price: "$299/mo", blurb: "5 users • 20 countries • API access • exports", cta: "Request Demo" },
            { name: "Enterprise", price: "Custom", blurb: "Unlimited users • all countries • SSO • SLA", cta: "Talk to Sales" },
          ].map((p, i) => (
            <div key={i} className="card p-6 flex flex-col">
              <div className="text-xl font-semibold">{p.name}</div>
              <div className="text-3xl font-bold mt-2">{p.price}</div>
              <div className="text-white/70 mt-2">{p.blurb}</div>
              <button className="btn btn-primary mt-4">{p.cta}</button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="container py-12">
        <div className="space-y-4">
  <h4 className="text-lg font-semibold">Contact Information</h4>

  <ul className="space-y-2 text-white/90">
    <li>📧 Email: <a className="underline hover:text-primary" href="mailto:info@globadesolution.com">info@globadesolution.com</a></li>
    <li>📍 Address: Sharjah, Media City, SHAMS, UAE 515000</li>
  </ul>

  <div className="grid grid-cols-2 gap-2 pt-2">
    <a className="btn btn-primary text-center" href="mailto:info@globadesolution.com">Email Us</a>
    <a className="btn btn-outline text-center" href="https://maps.google.com/?q=Sharjah, Media City, SHAMS, UAE 515000" target="_blank">View Map</a>
  </div>
</div>

        <div className="card p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input className="input" placeholder="Full name" />
                <input className="input" placeholder="Work email" />
              </div>
              <input className="input" placeholder="Company" />
              <input className="input" placeholder="What countries/products do you need?" />
              <button className="btn btn-primary w-full"><Mail className="h-4 w-4 mr-2 inline" /> Send</button>
            </div>
            <div className="rounded-2xl bg-white/5 p-6">
              <h4 className="text-lg font-semibold">Implementation Roadmap</h4>
              <ol className="mt-3 space-y-2 list-decimal list-inside text-sm text-white/70">
                <li>Connect domain on GoDaddy → hosting (Vercel).</li>
                <li>Spin up database (Postgres on Supabase/Neon).</li>
                <li>Ingest & normalize customs feeds (ETL jobs).</li>
                <li>Expose GraphQL/REST API with auth & rate limits.</li>
                <li>Plug API into this UI (search, charts, exports).</li>
              </ol>
              <div className="mt-4 flex gap-2 text-xs">
                <span className="badge">Role-based access</span>
                <span className="badge">Audit trails</span>
                <span className="badge">SSO/SCIM</span>
              </div>
            </div>
          </div>
        </div>

        <footer className="py-10 mt-12 border-t border-white/10">
          <div className="container text-sm text-white/60 flex flex-col md:flex-row items-center justify-between gap-3">
            <div>© {new Date().getFullYear()} Globade Solution LLC • Sharjah, Media City, SHAMS, UAE 515000</div>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-primary">Privacy</Link>
              <Link href="#" className="hover:text-primary">Terms</Link>
              <Link href="#" className="hover:text-primary">Security</Link>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
}
