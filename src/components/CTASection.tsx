import { Button } from "@/components/ui/button";
import { Github, BookOpen, Download } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container max-w-4xl mx-auto text-center">
        <div className="space-y-8 p-12 rounded-2xl bg-gradient-to-br from-primary/10 via-background to-accent/10 border border-primary/20 glow-primary">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to benchmark
            <span className="text-gradient"> your message brokers?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Install BrokerBench and start testing in seconds. Works with Docker or runs natively on any platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 gap-2">
              <Download className="w-5 h-5" />
              Get Started
            </Button>
            <Button variant="outline-hero" size="lg" className="text-lg px-8 gap-2">
              <Github className="w-5 h-5" />
              View on GitHub
            </Button>
            <Button variant="ghost" size="lg" className="text-lg px-8 gap-2">
              <BookOpen className="w-5 h-5" />
              Documentation
            </Button>
          </div>

          <div className="pt-8 space-y-3">
            <p className="text-sm text-muted-foreground">Install with npm:</p>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-terminal-bg rounded-lg border border-primary/20">
              <code className="font-mono text-terminal-text">npm install -g brokerbench</code>
            </div>
          </div>

          <div className="pt-4 space-y-2">
            <p className="text-sm text-muted-foreground">Or use Docker:</p>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-terminal-bg rounded-lg border border-accent/20">
              <code className="font-mono text-terminal-prompt">docker run brokerbench/cli</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
