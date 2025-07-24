import { Mail, Phone, Globe, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeToggle } from "@/components/theme-toggle";
import darkHeroBackground from "@/assets/dark-hero-background.jpg";
import lightHeroBackground from "@/assets/hero-background.jpg";
import icon from "@/assets/icon.svg";
import { useTheme } from "@/components/theme-provider";

const Index = () => {
  const { theme } = useTheme();
  const backgroundImage = theme === "dark" ? darkHeroBackground : lightHeroBackground;
  const gradientFadeColor =
    theme === "dark" ? "#0a0a0a" : "#f9f9f9";

  return (
    <div className="w-full overflow-x-hidden">

      <div className="min-h-screen bg-gradient-subtle text-foreground">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-background/90 dark:bg-background/80 border-b border-border/50 shadow-sm">
          <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center font-display text-xl font-semibold gap-3">
              <img src={icon} alt="Sehaj E-logs logo" className="h-10 w-10" />
              <span>Sehaj E-logs</span>
            </div>
            <ThemeToggle />
          </div>
        </nav>

        {/* Hero Section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 z-20 pointer-events-none bg-gradient-to-b from-transparent to-white dark:to-zinc-900" />

        <section
          className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          role="banner"
          aria-label="Hero Section"
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-background/90 dark:bg-background/70 backdrop-blur-md transition-colors duration-500" />

          {/* Content */}
          <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-24 sm:pt-32">
            <div className="space-y-12">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-accent text-white text-sm font-medium shadow-md">
                  <Sparkles className="h-4 w-4" />
                  Modern Logistics Solutions
                </div>

                <h1 className="font-display text-5xl md:text-7xl font-extralight tracking-tight leading-tight">
                  Roadlink <br />
                  <span className="bg-gradient-accent bg-clip-text text-transparent font-semibold">
                    ELD Services
                  </span>
                </h1>

                <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full" />
              </div>

              <p className="text-lg md:text-2xl text-muted-foreground font-light max-w-3xl mx-auto leading-relaxed">
                Transforming logistics through innovative technology and seamless digital solutions.
              </p>

              {/* 🔥 Enhanced Buttons Only */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* Primary */}
                <a href="tel:+19084990721" className="inline-block">
                  <Button
                    size="lg"
                    className="bg-gradient-accent group hover:scale-[1.03] active:scale-95 transform transition-all duration-300 border-0 px-8 py-5 text-lg font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-glow-accent hover:shadow-xl"
                  >
                    Connect Now
                    <ArrowRight className="ml-2 h-5 w-5 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </a>

                {/* Ghost */}
                <a href="mailto:info@sehajelogs.com" className="inline-block">
                  <Button
                    size="lg"
                    variant="ghost"
                    className="backdrop-blur-sm bg-background/30 hover:bg-background/50 border border-border hover:border-accent/60 px-8 py-5 text-lg font-medium shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-95"
                  >
                    Learn More
                  </Button>
                </a>
              </div>
            </div>
          </div>

          {/* Floating dots */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gradient-accent rounded-full animate-pulse" />
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-gradient-accent rounded-full animate-pulse delay-300" />
            <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-gradient-accent rounded-full animate-pulse delay-700" />
          </div>
        </section>



        {/* Contact Section */}
        <section className="py-32 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/40 text-muted-foreground text-sm font-medium mb-6">
                Get In Touch
              </div>
              <h2 className="font-display text-4xl md:text-6xl font-light mb-4">Let's Connect</h2>
              <div className="w-16 h-[2px] bg-gradient-accent mx-auto rounded-full" />
            </div>

            <div className="grid md:grid-cols-3 gap-10 max-w-5xl mx-auto">
              {/* Card template */}
              {[
                {
                  icon: <Phone className="h-8 w-8 text-white" />,
                  title: "Direct Line",
                  value: "+1 908 499 0721",
                  href: "tel:+19084990721",
                },
                {
                  icon: <Mail className="h-8 w-8 text-white" />,
                  title: "Email Us",
                  value: ["info@sehajelogs.com", "roadlinkeldtruck@gmail.com"],
                  href: ["mailto:info@sehajelogs.com", "mailto:roadlinkeldtruck@gmail.com"],
                },
                {
                  icon: <Globe className="h-8 w-8 text-white" />,
                  title: "Visit Online",
                  value: "sehajelogs.com",
                  href: "https://sehajelogs.com",
                },
              ].map((item, idx) => (
                <Card
                  key={idx}
                  className="group p-10 text-center transition-all duration-300 border-border/40 bg-card/60 backdrop-blur-sm relative overflow-hidden hover:shadow-lg hover:shadow-glow-primary"
                >
                  <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 shadow-glow-accent">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-medium mb-3">{item.title}</h3>
                    {Array.isArray(item.value) ? (
                      <div className="space-y-2">
                        {item.value.map((email, i) => (
                          <a
                            key={i}
                            href={item.href[i]}
                            className="block text-muted-foreground hover:text-foreground transition-colors text-base"
                          >
                            {email}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a
                        href={item.href as string}
                        className="text-muted-foreground hover:text-foreground transition-colors text-base font-medium"
                        target={(item.href as string).startsWith("http") ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </a>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Decoration */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
            <div className="absolute top-1/3 -left-10 w-40 h-40 bg-gradient-accent rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/3 -right-10 w-32 h-32 bg-gradient-accent rounded-full blur-3xl"></div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/40 py-16 backdrop-blur-sm bg-background/80">
          <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
            <h3 className="font-display text-2xl font-light">Sehaj E-logs</h3>
            <div className="w-12 h-[1px] bg-gradient-accent mx-auto rounded-full"></div>
            <p className="text-muted-foreground text-base">© 2025 Sehaj E-logs</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;