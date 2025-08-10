import { useState, type ElementType } from "react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Apple, CreditCard, Smartphone, QrCode, Bitcoin, Wallet, Globe } from "lucide-react";

type PaymentMethod = {
  id:
    | "apple_pay"
    | "google_pay"
    | "paypal"
    | "card"
    | "gpn"
    | "dana"
    | "ovo"
    | "gopay"
    | "qris"
    | "bitcoin"
    | "other";
  name: string;
  description: string;
  icon: ElementType;
};

const METHODS: PaymentMethod[] = [
  { id: "apple_pay", name: "Apple Pay", description: "Safari & perangkat Apple", icon: Apple },
  { id: "google_pay", name: "Google Pay", description: "Chrome & Android", icon: Smartphone },
  { id: "paypal", name: "PayPal", description: "Dompet global", icon: Wallet },
  { id: "card", name: "Kartu (Visa/Mastercard)", description: "Kartu kredit/debit", icon: CreditCard },
  { id: "gpn", name: "Kartu GPN", description: "Jaringan domestik Indonesia", icon: CreditCard },
  { id: "dana", name: "DANA", description: "Dompet digital", icon: Wallet },
  { id: "ovo", name: "OVO", description: "Dompet digital", icon: Wallet },
  { id: "gopay", name: "GoPay", description: "Dompet digital", icon: Wallet },
  { id: "qris", name: "QRIS", description: "QR Nasional", icon: QrCode },
  { id: "bitcoin", name: "Bitcoin", description: "Pembayaran crypto", icon: Bitcoin },
  { id: "other", name: "Tambah Metode Lain", description: "Fleksibel & dapat diperluas", icon: Globe },
];

export default function Checkout() {
  const [selected, setSelected] = useState<PaymentMethod | null>(METHODS[3]);
  const [amount, setAmount] = useState<string>("49900");

  const handlePay = () => {
    const cents = Math.max(0, Math.round(Number(amount)));
    if (!cents) {
      toast({ title: "Nominal tidak valid", description: "Masukkan jumlah pembayaran yang benar.", variant: "destructive" });
      return;
    }

    // Placeholder: menunggu konfigurasi backend & secret
    toast({
      title: `Siap bayar dengan ${selected?.name}`,
      description:
        "Hubungkan Supabase + API key penyedia (Stripe, PayPal, Xendit/Midtrans, Coinbase Commerce) untuk mengaktifkan pembayaran.",
    });
    console.log("Selected method:", selected?.id, "amount:", cents);
  };

  return (
    <main className="min-h-screen py-14">
      <section className="container mx-auto max-w-5xl">
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">Gateway Pembayaran React – Multi Metode</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dukung Apple Pay, Google Pay, PayPal, kartu (Visa/Mastercard/GPN), DANA, OVO, GoPay, QRIS, Bitcoin, dan tambah metode lain dengan arsitektur terukur.
          </p>
        </header>

        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-6">
          <article className="p-6 rounded-xl border bg-card/80 backdrop-blur shadow-elegant">
            <h2 className="text-xl font-semibold mb-4">Pilih Metode Pembayaran</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {METHODS.map((m) => {
                const Icon = m.icon;
                const active = selected?.id === m.id;
                return (
                  <Card
                    key={m.id}
                    role="button"
                    onClick={() => setSelected(m)}
                    className={`transition-colors hover:bg-accent/10 cursor-pointer ${
                      active ? "ring-2 ring-primary" : ""
                    }`}
                    aria-pressed={active}
                  >
                    <CardHeader className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary">
                          <Icon className="h-5 w-5" aria-hidden />
                        </span>
                        <CardTitle className="text-base">{m.name}</CardTitle>
                      </div>
                      <CardDescription>{m.description}</CardDescription>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </article>

          <aside className="p-6 rounded-xl border bg-card/80 backdrop-blur shadow-elegant">
            <h2 className="text-xl font-semibold mb-4">Ringkasan Pembayaran</h2>
            <div className="space-y-4">
              <label className="block text-sm font-medium">Nominal (IDR)</label>
              <Input
                inputMode="numeric"
                value={amount}
                onChange={(e) => setAmount(e.target.value.replace(/[^0-9]/g, ""))}
                placeholder="Contoh: 49900"
                aria-label="Nominal pembayaran dalam rupiah"
              />
              <div className="text-sm text-muted-foreground">
                Metode terpilih: <span className="font-medium text-foreground">{selected?.name}</span>
              </div>
              <Button size="lg" className="w-full" onClick={handlePay}>
                Lanjut Bayar
              </Button>
              <p className="text-xs text-muted-foreground">
                Catatan: Ini adalah demo UI. Aktivasi pembayaran memerlukan pengaturan backend & kunci rahasia penyedia.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="mt-14">
        <div className="container max-w-5xl mx-auto gradient-primary bg-[length:200%_200%] animate-gradient-pan rounded-2xl p-8 md:p-10 text-center text-primary-foreground">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">Arsitektur Fleksibel, Tambah Metode Kapan Saja</h2>
          <p className="opacity-90 max-w-3xl mx-auto">
            Integrasikan Stripe (Apple Pay, Google Pay, kartu), PayPal, Xendit/Midtrans (DANA, OVO, GoPay, QRIS), dan Coinbase Commerce (Bitcoin) dalam satu alur.
          </p>
        </div>
      </section>
    </main>
  );
}
