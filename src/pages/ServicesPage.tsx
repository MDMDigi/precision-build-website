import { Helmet } from "react-helmet-async";
import { SiteLayout } from "@/components/site/SiteLayout";
import { 
  BadgeCheck, 
  Cpu, 
  Truck, 
  Hammer, 
  Zap, 
  Wrench, 
  Settings, 
  Layers, 
  Gauge, 
  ArrowRight,
  Clock,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";
import { Contact } from "@/components/site/Contact";

const CORE_SERVICES = [
  {
    title: "Dedicated Polishing Machine Service",
    icon: Wrench,
    badge: "24/7 Field Support",
    desc: "Our highly accomplished engineers assess site manufacturing parameters and handle complete setup to ensure you beat production targets ahead of time. We provide reliable polishing machine after sales service for uninterrupted operations.",
    points: [
      "All India polishing machine installation",
      "Machinery setup and polishing machine commissioning",
      "Yearly polishing machine maintenance plans",
      "On-call polishing machine technical support"
    ]
  },
  {
    title: "Abrasives & Polishing Machine Spare Parts",
    icon: Truck,
    badge: "Fast Turnaround",
    desc: "We supply a massive pipeline of abrasive consumables and genuine polishing machine spare parts across India with fast turnaround times. We stock items for high daily volume requirements to keep your supply chain strong.",
    points: [
      "Sisal, Cotton, and Flap wheels stock",
      "Ready supply of Buffing bars",
      "Liquid and solid compound variants",
      "Abrasives paper and cloth backing types"
    ]
  },
  {
    title: "Pipe ID & OD Machining",
    icon: Cpu,
    badge: "Sub-Micron Precision",
    desc: "We build machinery for OD and ID operations combined to run endlessly without heavy upkeep, including our advanced centerless tube polishing machine for steel pipes to heat exchangers, ensuring maximum flexibility.",
    points: [
      "ID Machining for inside dimensions",
      "Outer OD fast face grinding",
      "Smooth finish past line production",
      "Zero defects pass on the production"
    ]
  },
  {
    title: "Automated Fettling Solutions",
    icon: Hammer,
    badge: "Heavy-Duty Castings",
    desc: "We integrate programmable fixtures and an automated fettling machine with 6-axis movement to eliminate the toughest casting marks. This precise process utilizes robotic grinding and polishing systems for strict safety requirements.",
    points: [
      "Heavy duty metal removal on cast",
      "Zero accidents via automation set up",
      "Burr removal for iron outputs",
      "Consolidated iron handling units"
    ]
  },
  {
    title: "Custom & Complex Polishing",
    icon: Zap,
    badge: "Special Purpose Machine Manufacturer Pune",
    desc: "As a specialized special purpose machine manufacturer pune, many custom units are built for highly complex parts. When conducting custom annual repairs, you get the exact tools required for reverse machine engineering.",
    points: [
      "Reverse CNC detailed settings control",
      "Expert wire belt grip maintenance",
      "Cycle time checks and process",
      "External and internal custom detailing"
    ]
  }
];

const ABRASIVE_ITEMS = [
  { 
    name: "Hard-Stitched Sisal Polishing Buffs", 
    material: "Multi-ply natural sisal fiber", 
    size: '12" to 18" Dia (Custom bore)', 
    use: "Heavy Cut / Weld Seam Removal",
    desc: "Aggressive cutting action designed for first-stage buffing on stainless steel, carbon steel, and heavy weld beads."
  },
  { 
    name: "Laminated Spiral Cotton Buffs", 
    material: "High-thread-count pure cotton", 
    size: '8" to 16" Dia', 
    use: "Mirror Coloring (Ra ≤ 0.2 µm)",
    desc: "Soft-touch buffing wheels that generate brilliant optical reflectivity and flow micro-crevices without scorching."
  },
  { 
    name: "Non-Woven Flap & Satin Wheels", 
    material: "Silicon carbide impregnated nylon", 
    size: "100mm to 300mm Width", 
    use: "No.4 Hairline & Satin Finishes",
    desc: "Even scratch pattern distribution for architectural sheets, appliance panels, and decorative elevator skins."
  },
  { 
    name: "Chromium Oxide Green Polishing Cake", 
    material: "Heavy-cut calcined alumina & Cr2O3", 
    size: "Standard 1 kg solid bars", 
    use: "SS & Titanium Rapid Buffing",
    desc: "High-melting grease binder ensures minimal wheel drag, reduced compound fly-off, and maximum cutting velocity."
  },
  { 
    name: "White & Blue High-Gloss Polish Bars", 
    material: "Ultra-fine precipitated alumina", 
    size: "Standard 1 kg solid bars", 
    use: "Final Optical Sanitary Mirror",
    desc: "Zero-scratch micro-finishing compound for pharmaceutical process tanks, dairy silos, and surgical hollowware."
  },
  { 
    name: "Zirconia & Ceramic Grinding Belts", 
    material: "Self-sharpening microcrystalline grain", 
    size: "Custom widths & perimeter to spec", 
    use: "Centerless & Sheet Grinding",
    desc: "Extended belt life with anti-static and anti-clog coatings for continuous high-speed industrial tube and shell feeds."
  }
];

const SERVICE_STEPS = [
  {
    step: "01",
    title: "Application Assessment & Ra Feasibility",
    desc: "Submit your workpiece specifications, alloy grade, starting roughness, and target Ra finish. Our engineering team conducts trial polishing runs in our Pune lab to establish the optimum grit and compound sequence."
  },
  {
    step: "02",
    title: "On-Site Erection & Laser Alignment",
    desc: "Factory technicians supervise mechanical mounting, bed leveling, laser spindle alignment, and electrical commissioning to ensure vibration-free performance and exact rotational concentricity."
  },
  {
    step: "03",
    title: "PLC Programming & Operator Certification",
    desc: "We configure programmable recipe profiles on the HMI for each workpiece diameter and teach your plant operators how to set contact pressure, traverse speed, and perform routine maintenance safely."
  },
  {
    step: "04",
    title: "AMC Health Audits & Rapid Spare Parts",
    desc: "Scheduled health checks, spindle vibration monitoring, and prompt dispatch of wear items (contact wheels, pneumatic regulators, belts) guarantee near-zero unplanned downtime across your lines."
  }
];

const SERVICES_FAQS = [
  {
    question: "Do you provide polishing machine after sales service in India?",
    answer: "Yes, our technicians manage complete polishing machine installation, routine maintenance, and expert polishing machine technical support to keep your operations running without downtime."
  },
  {
    question: "Can we order green polishing cake for metal in bulk?",
    answer: "Yes, as a dedicated sisal polishing buffs supplier, we stock and deliver bulk quantities of green polishing cake and other abrasive materials directly to your manufacturing facility."
  },
  {
    question: "What automated solutions do you build in Pune?",
    answer: "Operating as a special purpose machine manufacturer pune, we design automated fettling machine units, robotic grinding and polishing systems, and centerless tube polishing machine setups tailored exactly to your production needs."
  },
  {
    question: "What types of preventative maintenance plans (AMC) does M.B. Finishing provide?",
    answer: "We offer tailored Annual Maintenance Contracts (AMC) for single machines or entire finishing lines. Our AMC covers scheduled quarterly visits, spindle runout checks, pneumatic pressure calibration, PLC firmware verification, and discounted priority dispatch for replacement wear parts."
  }
];

const ServicesPage = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": SERVICES_FAQS.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Industrial Polishing Machine Maintenance and Spare Parts",
    "provider": {
      "@type": "Organization",
      "name": "M.B. Finishing Technologies",
      "url": "https://www.mbfinishtech.com"
    },
    "areaServed": "India",
    "description": "Keep your production running with on-site polishing machine maintenance, precision commissioning, and genuine spare parts across industrial plants in India."
  };

  return (
    <>
      <Helmet>
        <title>Industrial Polishing Machine Maintenance and Spare Parts</title>
        <meta
          name="description"
          content="Keep your production running with on-site polishing machine maintenance, precision commissioning, and genuine spare parts across industrial plants in India."
        />
        <link rel="canonical" href="https://www.mbfinishtech.com/services" />
{/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Industrial Polishing Machine Maintenance and Spare Parts" />
        <meta property="og:description" content="Keep your production running with on-site polishing machine maintenance, precision commissioning, and genuine spare parts across industrial plants in India." />
        <meta property="og:url" content="https://www.mbfinishtech.com/services" />
        <meta property="og:image" content="https://www.mbfinishtech.com/favicon.png" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Industrial Polishing Machine Maintenance and Spare Parts" />
        <meta name="twitter:description" content="Keep your production running with on-site polishing machine maintenance, precision commissioning, and genuine spare parts across industrial plants in India." />
        <meta name="twitter:image" content="https://www.mbfinishtech.com/favicon.png" />

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <SiteLayout>
        {/* Page Hero Header */}
        <section className="section-shell bg-[#fbf7ef] pt-32 pb-16 md:pt-40 md:pb-20 border-b border-black/5">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <div className="industrial-badge mx-auto mb-4">ENGINEERING SUPPORT & SERVICES</div>
              <h1 className="font-display text-3xl sm:text-4xl tracking-tight text-stone-950 md:text-5xl font-black uppercase">
                SURFACE FINISHING & INDUSTRIAL POLISHING SERVICES
              </h1>
              <p className="mt-4 text-sm sm:text-base text-stone-600 leading-relaxed font-medium">
                M.B. Finishing Technologies serves as your dependable partner for superior surface engineering products and comprehensive industrial polishing services across India.
              </p>
              
              <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-stone-600">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="size-4 text-primary" /> ISO 9001:2015 Certified
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="size-4 text-primary" /> 24/7 Field Engineering
                </span>
                <span className="flex items-center gap-2">
                  <Truck className="size-4 text-primary" /> Rapid Spares Dispatch
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Core Services Section */}
        <section className="section-shell bg-white py-20">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="industrial-badge mx-auto mb-3">Field Engineering</div>
              <h2 className="font-display text-3xl md:text-4xl text-stone-950 uppercase font-black tracking-tight">
                Turnkey Technical Offerings
              </h2>
              <p className="mt-3 text-sm md:text-base text-muted-foreground">
                Engineered surface finishing support designed to eliminate production bottlenecks, reduce cycle time, and guarantee repeatable Ra compliance.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {CORE_SERVICES.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.title}
                    className="premium-panel bg-white p-7 shadow-sm border border-black/5 hover:border-primary/40 hover-lift transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-4 mb-5">
                        <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="size-6" />
                        </div>
                        <span className="industrial-badge px-2.5 py-0.5 text-[9px]">
                          {service.badge}
                        </span>
                      </div>

                      <h2 className="font-display text-xl text-stone-950 font-bold uppercase tracking-tight leading-snug">
                        {service.title}
                      </h2>
                      
                      <p className="mt-3 text-xs leading-relaxed text-stone-600 font-medium">
                        {service.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-black/5">
                      <h3 className="text-[11px] font-bold uppercase tracking-wider text-primary mb-2.5">
                        Service Offerings & Capabilities
                      </h3>
                      <div className="space-y-2">
                        {service.points.map((pt) => (
                          <div key={pt} className="flex items-start gap-2">
                            <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                            <span className="text-xs text-stone-800 font-medium leading-tight">
                              {pt}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4-Step Process Section */}
        <section className="section-shell bg-[#fbf7ef] py-20 border-y border-black/5">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="industrial-badge mx-auto mb-3">Service Lifecycle</div>
              <h2 className="font-display text-3xl md:text-4xl text-stone-950 uppercase font-black tracking-tight">
                Our 4-Step Engineering Protocol
              </h2>
              <p className="mt-3 text-sm md:text-base text-stone-600">
                From initial application feasibility to long-term lifecycle support, here is how we ensure seamless plant integration.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICE_STEPS.map((s) => (
                <div key={s.step} className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm relative overflow-hidden">
                  <div className="font-heading text-4xl font-black text-primary/20 mb-2">
                    {s.step}
                  </div>
                  <h4 className="font-display text-base font-bold text-stone-950 uppercase mb-2">
                    {s.title}
                  </h4>
                  <p className="text-xs text-stone-600 leading-relaxed font-medium">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consumables store catalog */}
        <section className="section-shell bg-white py-20 relative">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="industrial-badge mx-auto mb-4">Abrasives & Tooling</div>
              <h2 className="font-display text-3xl md:text-5xl tracking-tight text-stone-950 uppercase font-black">
                High-Quality Abrasives With Fast Delivery
              </h2>
              <p className="mt-4 text-sm text-muted-foreground md:text-base leading-relaxed">
                As a dedicated sisal polishing buffs supplier, we stock a comprehensive range of buffing wheels, abrasive grits, and compounds to suit all in-house commercial metal finishing operations nationwide.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {ABRASIVE_ITEMS.map((item) => (
                <div key={item.name} className="metal-card hover-lift p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <span className="rounded-full bg-primary/10 text-primary px-3 py-1 text-[9px] font-bold uppercase tracking-wider">
                        {item.use}
                      </span>
                    </div>
                    <h3 className="font-display text-lg text-stone-900 font-bold leading-snug">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-xs text-stone-600 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                    <p className="mt-3 text-xs text-muted-foreground font-semibold">
                      <strong>Material:</strong> {item.material}
                    </p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-black/5 flex justify-between items-center text-xs">
                    <span className="text-stone-500 font-medium">Standard Sizes:</span>
                    <span className="text-stone-900 font-bold">{item.size}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Consumable Order Callout */}
            <div className="rounded-[2rem] bg-stone-950 text-white p-8 md:p-12 mt-16 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <span className="text-[10px] uppercase font-bold text-primary tracking-[0.24em]">
                  Consumable Stock Inquiry
                </span>
                <h3 className="font-display text-2xl md:text-3xl mt-2 leading-tight font-black uppercase">
                  Need Custom Abrasives, Wheel Sizes, or Bulk Supply?
                </h3>
                <p className="text-white/70 text-xs sm:text-sm mt-3 max-w-xl leading-relaxed">
                  Contact our logistics team today. We maintain ready stocks to dispatch shipments within 24–48 hours across industrial hubs.
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href="#contact-form"
                  className="inline-flex rounded-full bg-primary hover:bg-white text-stone-950 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.2em] transition-all shadow-md"
                >
                  Request Fast Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="section-shell bg-[#fbf7ef] py-20 border-t border-black/5">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <div className="industrial-badge mx-auto mb-3">Service FAQs</div>
              <h2 className="font-display text-3xl md:text-4xl text-stone-950 uppercase font-black tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-3 text-sm text-stone-600">
                Answers to common inquiries regarding our installation, AMC support, and consumable replenishment.
              </p>
            </div>

            <div className="space-y-4">
              {SERVICES_FAQS.map((faq, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 border border-black/5 shadow-sm">
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
        <div id="contact-form">
          <Contact />
        </div>
      </SiteLayout>
    </>
  );
};

export default ServicesPage;