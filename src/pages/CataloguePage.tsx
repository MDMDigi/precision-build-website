import { Helmet } from "react-helmet-async";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageBanner } from "@/components/site/PageBanner";
import { 
  Download, 
  FileText, 
  CheckCircle2, 
  ShieldCheck, 
  Settings, 
  Layers, 
  Gauge, 
  Cpu, 
  ArrowRight,
  Sparkles,
  BookOpen
} from "lucide-react";
import { Contact } from "@/components/site/Contact";

const CATALOGUE_MACHINERY = [
  {
    category: "Tank & Dishend Polishing Machinery Specs",
    models: "TPM4500-SDX, TPM3000-SD, TPM2500-SDX, TPM1500-SD",
    description: "Access layout drawings for Column and Boom systems alongside the dedicated tank polishing machine catalogue. This section includes the detailed TPM4500-SDX polishing machine catalogue for heavy industrial vessels and internal duct operations.",
    specs: [
      "Diameter Capacity: Up to Ø 4,500 mm",
      "Shell Length: Up to 10,000 mm",
      "Achievable Finish: Ra ≤ 0.2 µm (Sanitary Mirror)",
      "Tracking: Dual-axis pneumatic floating head"
    ]
  },
  {
    category: "Sheet & Plate Buffing Systems PDF",
    models: "SP1200-3H (3 Heads), SP1500B, SP600B, VB150 Vacuum Bed",
    description: "Review dimensional standards and feed speeds for conveyor-fed wet and dry setups. Grab the complete sheet polishing machine catalogue and our broad automatic buffing systems technical catalogue for flat surface processing.",
    specs: [
      "Sheet Width: Up to 1,200 mm / 1,500 mm",
      "Plate Thickness: 1 mm – 100 mm",
      "Feed Speed: 0.5 – 6.0 m/min",
      "Textures: No.3, No.4 Hairline, Satin, No.8 Mirror"
    ]
  },
  {
    category: "Pipe Polishing Machine Catalogue",
    models: "CG-150B-L1 (Single Head), CG-150W-2H (Double Head)",
    description: "Analyze through-feed centerless round grinders and multi-head configurations. Use this automatic tube polishing machine brochure to verify metrics before confirming your overall industrial polishing machine catalogue requirements.",
    specs: [
      "Working Capacity: Ø 10 mm – Ø 150 mm OD",
      "Through-feed Speed: 0.5 – 6.0 m/min (VFD controlled)",
      "Abrasives: 150 mm width belts & flap wheels",
      "Output: Consistent Hairline, Satin & Mirror Finish"
    ]
  },
  {
    category: "Utensil Polishing Machine Catalogue",
    models: "RTP-7S-6H (7-Station 6-Head), CUP-150DH, TUP-1H",
    description: "Check semi-automatic and fully automatic hollowware lines for rapid mirror finishing. This standard buffing machine catalogue covers regular cookware, or you can request a custom SPM machine catalogue download for highly specialized production lines.",
    specs: [
      "Component Diameter: Ø 60 mm – Ø 300 mm OD",
      "Cycle Time: Rapid 25 to 80 seconds per piece",
      "Configuration: Multi-head automated indexing",
      "Turnkey: Mirror and satin buffing integration"
    ]
  },
  {
    category: "Internal Pipe ID & Duct Polishers",
    models: "PIP-1000, PIP-3000, PIP-6000, PIOP2000",
    description: "Multi-station internal tube and duct polishing machines designed for food, dairy, and pharmaceutical sanitary process piping.",
    specs: [
      "Pipe ID Range: Ø 22 mm – Ø 100 mm (Up to 1000mm on PIOP)",
      "Pipe Length: 0.5 m – 6.0 m continuous",
      "Stations: 3 to 6 finishing stations inline",
      "Feed Rate: 0 – 5 m/min automated traverse"
    ]
  },
  {
    category: "Super Finishing Machines",
    models: "SFM-50 (Heavy Rod & Shaft Superfinisher)",
    description: "Ultra-precision micro-abrasive film finishing machines for hydraulic cylinder rods, rotor shafts, shock absorbers, and transmission pins.",
    specs: [
      "Workpiece OD: Ø 20 mm – Ø 100 mm",
      "Abrasive Media: 50 mm micro-abrasive film",
      "Surface Ra: Ultra-precise Ra ≤ 0.100 µm",
      "Application: Automotive, hydraulics & defense"
    ]
  }
];

const CATALOGUE_FAQS = [
  {
    question: "Do these brochures contain data for customized machinery?",
    answer: "Yes, you can initiate a custom SPM machine catalogue download to check our specialized automation capabilities and custom engineering metrics tailored for manufacturing facilities across India."
  },
  {
    question: "Are the specifications suitable for Indian manufacturing standards?",
    answer: "Absolutely. Every industrial surface finishing catalogue PDF we provide aligns with strict quality control and safety protocols, as detailed in our ISO 9001:2015 certified solutions brochure."
  },
  {
    question: "What details are included in the metal polishing machine specifications pdf?",
    answer: "This document covers precise technical data, machine dimensions, power requirements, and performance outputs. It acts as a complete polishing machine manufacturer catalogue to help plant engineers make informed procurement decisions."
  },
  {
    question: "Can I get technical charts for heavy vessel and flat surface equipment?",
    answer: "Yes, we provide a dedicated tank polishing machine catalogue along with tank & dishend polishing machinery specs. For flat surface processing, you can access the sheet & plate buffing systems pdf directly from this page."
  },
  {
    question: "Do you offer documents specifically for round pipe grinders?",
    answer: "We certainly do. You can get the automatic tube polishing machine brochure or the broader pipe polishing machine catalogue to review feed speeds and multi-head configurations for continuous production lines."
  }
];

const SPEC_HIGHLIGHTS = [
  { label: "Total Catalogue Pages", value: "18 Technical Pages" },
  { label: "Machinery Product Families", value: "7 Major Lines" },
  { label: "Engineering Quality Standard", value: "ISO 9001:2015" },
  { label: "Electrical Control Architecture", value: "Siemens / Schneider PLC" },
  { label: "Safety & Compliance", value: "CE-Ready Guarding" },
  { label: "File Download Format", value: "High-Res PDF (5.4 MB)" }
];

const CataloguePage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": CATALOGUE_FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const catalogueSchema = {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    "name": "M.B. Finishing Technologies Corporate Machinery Catalogue",
    "description": "Download our technical metal polishing machine catalogue PDF. Review engineering specs for automatic tube, sheet, and dishend buffing systems built in India.",
    "url": "https://www.mbfinishtech.com/catalogue",
    "encodingFormat": "application/pdf",
    "contentUrl": "https://www.mbfinishtech.com/mb-catalogue.pdf",
    "author": {
      "@type": "Organization",
      "name": "M.B. Finishing Technologies",
      "url": "https://www.mbfinishtech.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "M.B. Finishing Technologies",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.mbfinishtech.com/favicon.png"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Industrial Polishing Machine Catalogue PDF | MB Finish Tech</title>
        <meta
          name="description"
          content="Download our technical metal polishing machine catalogue PDF. Review engineering specs for automatic tube, sheet, and dishend buffing systems built in India."
        />
        <link rel="canonical" href="https://www.mbfinishtech.com/catalogue" />
        <meta name="keywords" content="Polishing Machine Catalogue, polishing machine catalogue, polishing machine manufacturer catalogue, industrial polishing machine catalogue, buffing machine catalogue, tank polishing machine catalogue, sheet polishing machine catalogue, pipe polishing machine catalogue, utensil polishing machine catalogue, polishing machine brochure" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Industrial Polishing Machine Catalogue PDF | MB Finish Tech" />
        <meta property="og:description" content="Download our technical metal polishing machine catalogue PDF. Review engineering specs for automatic tube, sheet, and dishend buffing systems built in India." />
        <meta property="og:url" content="https://www.mbfinishtech.com/catalogue" />
        <meta property="og:image" content="https://www.mbfinishtech.com/favicon.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industrial Polishing Machine Catalogue PDF | MB Finish Tech" />
        <meta name="twitter:description" content="Download our technical metal polishing machine catalogue PDF. Review engineering specs for automatic tube, sheet, and dishend buffing systems built in India." />
        <meta name="twitter:image" content="https://www.mbfinishtech.com/favicon.png" />

        <script type="application/ld+json">
          {JSON.stringify(catalogueSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <SiteLayout>
        <PageBanner
          eyebrow="BROCHURE DOWNLOAD"
          title="Complete Polishing Machine Catalogue & Technical Specifications"
          description="Access our comprehensive industrial surface finishing catalogue PDF to review detailed machinery specifications. As a leading equipment builder in India, we provide reliable technical documents to help you select the exact machinery for your manufacturing facility. Secure your direct polishing machine brochure download below to analyze machine capabilities, dimensions, and output metrics."
        />

        {/* Hero Brochure Download Section */}
        <section className="section-shell bg-[#fbf7ef] py-16 md:py-20 border-b border-black/5">
          <div className="container">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Side: Mock brochure cover */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative group max-w-sm w-full bg-white rounded-[2.5rem] border border-black/10 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.15)] p-8 transition-transform duration-300 hover:scale-[1.02]">
                  <div className="aspect-[3/4] rounded-2xl bg-stone-950 p-6 flex flex-col justify-between text-white relative overflow-hidden border border-white/10 shadow-inner">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
                    
                    <div>
                      <div className="w-10 h-1 bg-primary mb-4" />
                      <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-primary">
                        Corporate Product Catalogue
                      </span>
                      <h3 className="font-display text-2xl font-black uppercase mt-3 leading-tight tracking-tight">
                        M.B. Finishing<br />Technologies
                      </h3>
                      <p className="text-[11px] text-stone-400 font-medium mt-1.5">
                        A Subsidiary of M.B. Tools
                      </p>
                      <div className="mt-4 inline-block rounded-full bg-white/10 px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-white/90">
                        ISO 9001:2015 Certified
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-4">
                      <p className="text-[11px] font-bold tracking-widest text-primary uppercase">
                        Redefining Finishing Excellence
                      </p>
                      <p className="text-[9px] text-stone-400 mt-1">
                        Tank • Sheet • Pipe • Cookware • Superfinishing
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-5 text-center">
                    <span className="text-stone-500 text-xs font-semibold">Format: PDF | Size: ~5.4 MB | 18 Pages</span>
                  </div>
                </div>
              </div>

              {/* Right Side: What's inside & Download button */}
              <div className="lg:col-span-7">
                <div className="industrial-badge mb-4">Official Publication</div>
                <h2 className="font-display text-3xl sm:text-4xl text-stone-950 uppercase font-black mb-6 tracking-tight">
                  Complete Polishing Machine Catalogue
                </h2>
                <p className="text-stone-600 text-sm md:text-base leading-relaxed mb-6 font-medium">
                  Our official industrial surface finishing catalogue PDF consolidates design blueprints and configuration charts for all standard and customizable setups. Designed for technical buyers across India, this ISO 9001:2015 certified solutions brochure serves as a trusted polishing machine manufacturer catalogue to review metal polishing machine specifications pdf data instantly.
                </p>

                {/* Key Highlights Quick Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
                  {SPEC_HIGHLIGHTS.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-xl p-3 border border-black/5 shadow-sm">
                      <span className="block text-[10px] uppercase font-bold tracking-wider text-muted-foreground">
                        {item.label}
                      </span>
                      <span className="block text-xs font-bold text-stone-900 mt-1">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/mb-catalogue.pdf"
                    download="MB_Finishing_Technologies_Catalogue.pdf"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full bg-primary hover:bg-stone-950 hover:text-white text-stone-950 px-8 py-4 font-heading text-xs font-bold uppercase tracking-widest transition-all shadow-md group"
                  >
                    <Download className="size-4 shrink-0 group-hover:-translate-y-0.5 transition-transform" /> 
                    Polishing Machine Brochure Download
                  </a>
                  <a
                    href="/mb-catalogue.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2.5 rounded-full border border-black/10 bg-white hover:bg-stone-50 text-stone-900 px-8 py-4 font-heading text-xs font-bold uppercase tracking-widest transition-all shadow-sm"
                  >
                    <FileText className="size-4 shrink-0" /> 
                    View Polishing Machine Brochure In Browser
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Breakdown of Catalogue Sections */}
        <section className="section-shell bg-white py-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="industrial-badge mx-auto mb-3">Contents Overview</div>
              <h2 className="font-display text-3xl md:text-4xl text-stone-950 uppercase font-black tracking-tight">
                Machinery Lines Featured Inside
              </h2>
              <p className="mt-3 text-sm md:text-base text-muted-foreground leading-relaxed">
                Review engineering specs for automatic tube, sheet, and dishend buffing systems built in India, along with turnkey special purpose finishing machines.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {CATALOGUE_MACHINERY.map((cat, i) => (
                <div
                  key={i}
                  className="bg-[#fbf7ef]/60 rounded-2xl p-6 md:p-7 border border-black/5 hover:border-primary/40 hover-lift transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-2 block">
                      Category 0{i + 1}
                    </span>
                    <h3 className="font-display text-xl font-bold uppercase text-stone-950 mb-2 leading-snug">
                      {cat.category}
                    </h3>
                    <div className="text-[11px] font-semibold text-stone-700 bg-white px-3 py-1.5 rounded-lg border border-black/5 mb-3">
                      Models: {cat.models}
                    </div>
                    <p className="text-xs text-stone-600 leading-relaxed font-medium mb-5">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/10 space-y-2">
                    {cat.specs.map((sp, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="size-3.5 text-primary shrink-0 mt-0.5" />
                        <span className="text-xs text-stone-800 font-medium">
                          {sp}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Surface Finishes Section as presented on Page 16 of Catalogue */}
        <section className="section-shell bg-[#fbf7ef] py-16 border-t border-black/5">
          <div className="container max-w-4xl text-center">
            <div className="industrial-badge mx-auto mb-3">Surface Standards</div>
            <h3 className="font-display text-2xl md:text-3xl text-stone-950 uppercase font-black tracking-tight mb-4">
              Standard Finishes Documented in Brochure
            </h3>
            <p className="text-xs md:text-sm text-stone-600 max-w-2xl mx-auto mb-8 font-medium">
              Page 16 of our catalogue outlines abrasive grit sequences and compound stages to achieve every global finish grade:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 text-left">
              {[
                { name: "No. 1 & 2D Finish", desc: "Hot-rolled descaled base" },
                { name: "No. 2 & 2B Finish", desc: "Cold-rolled smooth mill" },
                { name: "No. 3 Finish", desc: "Coarse unidirectional grain" },
                { name: "No. 4 Finish", desc: "Standard sanitary satin" },
                { name: "No. 6 & 7 Finish", desc: "Refined reflective satin" },
                { name: "Hair Line Finish", desc: "Continuous linear grain" },
                { name: "Satin Finish", desc: "Uniform non-directional" },
                { name: "No. 8 Mirror Finish", desc: "Optical mirror Ra ≤ 0.2 µm" }
              ].map((finish, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-xl border border-black/5 shadow-sm">
                  <span className="block font-display text-xs font-bold text-stone-900 uppercase">
                    {finish.name}
                  </span>
                  <span className="block text-[11px] text-stone-500 font-medium mt-1">
                    {finish.desc}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Frequently Asked Questions */}
        <section className="section-shell bg-white py-20 border-t border-black/5">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <div className="industrial-badge mx-auto mb-3">Catalogue FAQs</div>
              <h2 className="font-display text-3xl md:text-4xl text-stone-950 uppercase font-black tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-sm text-stone-600">
                Key questions about technical specifications, machine layouts, and downloading customized SPM catalogues.
              </p>
            </div>

            <div className="space-y-4">
              {CATALOGUE_FAQS.map((faq, index) => (
                <div key={index} className="bg-[#fbf7ef]/60 rounded-2xl p-6 border border-black/5 shadow-sm">
                  <h3 className="font-display text-base md:text-lg font-bold text-stone-950 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-medium">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Global Compact Inquiry Form */}
        <div className="bg-white border-t border-black/5">
          <div className="container pt-16 -mb-8 text-center max-w-3xl mx-auto">
            <div className="industrial-badge mx-auto mb-3">Custom Proposal</div>
            <h2 className="font-display text-3xl md:text-4xl text-stone-950 uppercase font-black tracking-tight">
              Request Specific Machine Drawings & Quotation
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-stone-500 font-medium">
              Submit your production dimensions, vessel diameter, or pipe sizing below. Our design engineering division will send complete GA drawings and layout recommendations.
            </p>
          </div>
          <Contact />
        </div>
      </SiteLayout>
    </>
  );
};

export default CataloguePage;