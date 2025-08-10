import { Link } from "react-router-dom";

const Index = () => {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <section className="container max-w-5xl mx-auto text-center">
        <div className="gradient-primary bg-[length:200%_200%] animate-gradient-pan rounded-3xl p-10 md:p-14 shadow-elegant">
          <h1 className="text-5xl font-bold tracking-tight mb-4">Gateway Pembayaran React</h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto mb-8">
            Satu integrasi untuk banyak metode: Apple Pay, Google Pay, PayPal, kartu, QRIS, DANA/OVO/GoPay, dan Bitcoin.
          </p>
          <div className="flex items-center justify-center gap-3">
            <Link to="/checkout" className="inline-flex">
              <button className="px-6 py-3 rounded-lg bg-background text-foreground font-medium shadow-elegant transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Mulai Checkout
              </button>
            </Link>
            <a href="#fitur" className="px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium transition-colors hover:bg-secondary/80">
              Lihat Fitur
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
