import { useState } from "react";
import { z } from "zod";
import { Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z.string().trim().min(6, "Please enter a valid phone").max(30),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(2, "Please share your requirement").max(1000),
});

export const Contact = ({ isHeroSection = false }: { isHeroSection?: boolean }) => {
  const { toast } = useToast();
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      toast({
        title: "Please check the form",
        description: result.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }

    setSubmitting(true);

    try {
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "50a7783b-3f6d-44a6-bb89-716b07cd22e4";
      const secondaryKey = import.meta.env.VITE_WEB3FORMS_SECONDARY_KEY;

      const payload: Record<string, string> = {
        access_key: accessKey,
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        subject: `New Lead Inquiry from ${form.name} | M.B. Finishing Technologies`,
        from_name: form.name,
        replyto: form.email,
        to: "sale@mbtools.in",
        ccemail: "f3clicks.seo@gmail.com; sale@mbtools.in",
        notification_email: "f3clicks.seo@gmail.com, sale@mbtools.in",
      };

      // Dual-dispatch to FormSubmit to guarantee direct delivery to both sale@mbtools.in and f3clicks.seo@gmail.com
      fetch("https://formsubmit.co/ajax/sale@mbtools.in", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: form.message,
          _subject: `New Lead Inquiry from ${form.name} | M.B. Finishing Technologies`,
          _replyto: form.email,
          _cc: "f3clicks.seo@gmail.com",
          _captcha: "false",
        }),
      }).catch((e) => console.warn("FormSubmit dual-dispatch note:", e));

      let response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      let data = await response.json();

      // If ccemail fails because the key is on a free plan, retry without pro fields so lead is never lost
      if (!data.success && (data.message?.toLowerCase().includes("pro feature") || data.message?.toLowerCase().includes("ccemail"))) {
        const cleanPayload = {
          access_key: accessKey,
          name: form.name,
          email: form.email,
          phone: form.phone,
          message: `${form.message}\n\n[Lead Routing Notice: Forward to sale@mbtools.in & f3clicks.seo@gmail.com]`,
          subject: `New Lead Inquiry from ${form.name} | M.B. Finishing Technologies`,
          from_name: form.name,
          replyto: form.email,
        };
        response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(cleanPayload),
        });
        data = await response.json();
      }

      // Also deliver to secondary key if configured
      if (secondaryKey) {
        try {
          await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              access_key: secondaryKey,
              name: form.name,
              email: form.email,
              phone: form.phone,
              message: form.message,
              subject: `New Lead Inquiry from ${form.name} | M.B. Finishing Technologies`,
              from_name: form.name,
              replyto: form.email,
            }),
          });
        } catch (secondaryErr) {
          console.warn("Secondary email notification error:", secondaryErr);
        }
      }

      if (data.success) {
        toast({
          title: "Inquiry sent",
          description: "Our team will connect with you shortly.",
        });
        setForm({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        toast({
          title: "Submission failed",
          description: data.message || "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission error",
        description: "Could not send the inquiry. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className={`bg-white pb-16 md:pb-24 ${isHeroSection ? "pt-28 md:pt-36" : "pt-16 md:pt-20"}`}>
      <div className="container max-w-6xl">
        {/* Two-column layout: Left Info, Right Compact Form */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-between">
            <div>
              <div className="industrial-badge mb-4">Contact With Us</div>
              {isHeroSection ? (
                <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-tight leading-[1.1] mb-4 text-stone-950 font-black">
                  Contact With Us
                </h1>
              ) : (
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight leading-[1.15] mb-4 text-stone-950 font-bold">
                  Professional support for your <span className="text-primary">machine requirements</span>
                </h2>
              )}
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm sm:text-base">
                Share your polishing, buffing or special-purpose machine requirement and our engineering team will guide you toward the right automated finishing solution.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-6">
                <a href="tel:+919175282992" className="flex items-center gap-3.5 p-3 rounded-xl border border-black/5 bg-[#fbf7ef]/40 hover:bg-[#fbf7ef] transition-colors group">
                  <div className="shrink-0 size-10 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Phone className="size-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="text-[10px] font-body font-bold uppercase tracking-widest text-muted-foreground">
                      Phone
                    </div>
                    <div className="font-body text-sm font-semibold group-hover:text-primary transition-colors text-stone-950">
                      +91-9175282992
                    </div>
                  </div>
                </a>

                <a href="tel:+918956648126" className="flex items-center gap-3.5 p-3 rounded-xl border border-black/5 bg-[#fbf7ef]/40 hover:bg-[#fbf7ef] transition-colors group">
                  <div className="shrink-0 size-10 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Phone className="size-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="text-[10px] font-body font-bold uppercase tracking-widest text-muted-foreground">
                      Alternate Phone
                    </div>
                    <div className="font-body text-sm font-semibold group-hover:text-primary transition-colors text-stone-950">
                      +91-8956648126
                    </div>
                  </div>
                </a>

                <a href="mailto:sale@mbtools.in" className="sm:col-span-2 flex items-center gap-3.5 p-3 rounded-xl border border-black/5 bg-[#fbf7ef]/40 hover:bg-[#fbf7ef] transition-colors group">
                  <div className="shrink-0 size-10 rounded-full border border-primary flex items-center justify-center group-hover:bg-primary transition-colors">
                    <Mail className="size-4 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <div className="text-[10px] font-body font-bold uppercase tracking-widest text-muted-foreground">
                      Email
                    </div>
                    <div className="font-body text-sm font-semibold group-hover:text-primary transition-colors text-stone-950 flex flex-wrap items-center gap-x-3">
                      <span>sale@mbtools.in</span>
                      <span className="text-xs text-stone-500 font-medium">sales.mbtools@gmail.com</span>
                    </div>
                  </div>
                </a>
              </div>

              <div className="space-y-3.5 border-t border-black/5 pt-5">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 size-9 rounded-full border border-primary/40 flex items-center justify-center mt-0.5 bg-primary/5">
                    <MapPin className="size-3.5 text-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] font-body font-bold uppercase tracking-widest text-muted-foreground">
                      Works & Manufacturing Unit 1
                    </div>
                    <div className="font-body text-xs sm:text-sm font-semibold leading-relaxed text-stone-950">
                      Gat No 669 & 670, Balghare Vasti, Chikhali, Pune - 411062.
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="shrink-0 size-9 rounded-full border border-primary/40 flex items-center justify-center mt-0.5 bg-primary/5">
                    <MapPin className="size-3.5 text-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] font-body font-bold uppercase tracking-widest text-muted-foreground">
                      M.B. Finishing Pvt. Ltd. (MIDC Unit 2)
                    </div>
                    <div className="font-body text-xs sm:text-sm font-semibold leading-relaxed text-stone-950">
                      Plot No. T-165/15, next to Trishul Service Station, T Block, MIDC, Bhosari, Pimpri-Chinchwad, Maharashtra 411026
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Compact Clean Form */}
          <div className="lg:col-span-6 xl:col-span-5 self-start w-full">
            <form
              onSubmit={onSubmit}
              className="rounded-2xl p-5 sm:p-6 md:p-7 bg-[#fbf7ef] border border-primary/20 shadow-[0_12px_45px_-25px_rgba(20,20,20,0.15)]"
            >
              <div className="mb-4">
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary block">
                  Direct Factory Inquiry
                </span>
                <h3 className="font-heading text-xl sm:text-2xl uppercase text-stone-950 font-bold tracking-tight mt-0.5">
                  Product Inquiry
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  Get exact machinery layouts and factory quotes within 24 hours.
                </p>
              </div>

              <div className="space-y-3.5">
                <div>
                  <label className="block text-[10px] font-heading uppercase tracking-widest text-muted-foreground mb-1 font-semibold">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(event) => setForm({ ...form, name: event.target.value })}
                    maxLength={100}
                    className="w-full rounded-xl px-3.5 py-2.5 bg-white border border-primary/20 focus:border-primary focus:outline-none transition-colors text-sm"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[10px] font-heading uppercase tracking-widest text-muted-foreground mb-1 font-semibold">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(event) => setForm({ ...form, phone: event.target.value })}
                      maxLength={30}
                      className="w-full rounded-xl px-3.5 py-2.5 bg-white border border-primary/20 focus:border-primary focus:outline-none transition-colors text-sm"
                      placeholder="+91 ..."
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-heading uppercase tracking-widest text-muted-foreground mb-1 font-semibold">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(event) => setForm({ ...form, email: event.target.value })}
                      maxLength={255}
                      className="w-full rounded-xl px-3.5 py-2.5 bg-white border border-primary/20 focus:border-primary focus:outline-none transition-colors text-sm"
                      placeholder="you@company.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-heading uppercase tracking-widest text-muted-foreground mb-1 font-semibold">
                    Machine / Workpiece Requirement <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(event) => setForm({ ...form, message: event.target.value })}
                    maxLength={1000}
                    className="w-full rounded-xl px-3.5 py-2.5 bg-white border border-primary/20 focus:border-primary focus:outline-none transition-colors resize-none text-sm"
                    placeholder="E.g., Dish end polisher (Ø 2000mm) or Centerless tube polisher with target Ra ≤ 0.2 µm..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full mt-2 group flex items-center justify-center gap-2 rounded-full px-6 py-3 bg-primary text-primary-foreground font-heading text-xs sm:text-sm uppercase tracking-widest hover:bg-stone-950 hover:text-white transition-colors disabled:opacity-60 shadow-md font-bold"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="size-4 animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Inquiry
                      <Send className="size-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-3 pt-1 text-[11px] text-stone-500">
                  <span>Direct Factory Support</span>
                  <span>•</span>
                  <span>ISO 9001:2015</span>
                  <span>•</span>
                  <span>Fast Response</span>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* Bottom Full-Width Map Banner */}
        <div className="mt-10 lg:mt-12 rounded-2xl border border-primary/10 overflow-hidden shadow-sm h-60 sm:h-72 w-full">
          <iframe
            title="M.B. Finishing Technologies location"
            src="https://www.google.com/maps?q=Bhosari%20MIDC%20Pune&output=embed"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};
