import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Logo } from "@/components/icons/logo";
import { redirect } from "next/navigation";
import { getAuth } from "firebase/auth";
import { app } from "@/firebase/config";

export default function Home() {
  try {
    const auth = getAuth(app);
    if (auth.currentUser) {
      redirect("/dashboard");
    }
  } catch (e) {}

  const heroImage = PlaceHolderImages.find(p => p.id === "hero-1");

  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <Logo className="h-7 w-7 text-primary" />
          <span className="font-headline">ProfitPilot</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="/dashboard">Get Started <ArrowRight className="ml-2" /></Link>
          </Button>
        </nav>
      </header>
      <main className="flex-1">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge/>
              <h1 className="text-4xl md:text-6xl font-headline font-bold text-foreground leading-tight">
                Your Copilot for <span className="text-primary">Financial Success</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                ProfitPilot provides a powerful suite of tools to optimize your pricing, track profitability in real-time, and discover new revenue opportunities with AI-powered insights.
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/dashboard">
                    Go to Dashboard
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-80 md:h-full w-full rounded-lg overflow-hidden shadow-2xl shadow-primary/20">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transform hover:scale-105 transition-transform duration-500 ease-in-out"
                  data-ai-hint={heroImage.imageHint}
                />
              )}
            </div>
          </div>
        </section>
      </main>
      <footer className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} ProfitPilot. All rights reserved.</p>
      </footer>
    </div>
  );
}

const Badge = () => (
  <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-secondary text-secondary-foreground">
    <span className="mr-2">🚀</span> Now with GenAI-powered suggestions!
  </div>
);