import { Button } from "@/components/ui/button";
import { Terminal } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10 opacity-50" />

      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/30 glow-primary">
            <Terminal className="w-4 h-4 text-primary" />
            <span className="text-sm font-mono text-muted-foreground">
              Developer-First • Cloud Native • Open Source
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Benchmark any broker
            <br />
            <span className="text-gradient">in minutes.</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            CLI-based load testing for Apache Kafka, RabbitMQ, Pulsar, and Redis
            Streams.
            <br />
            Auto-generate performance dashboards and compare brokers
            side-by-side.
          </p>

          {/* Terminal preview */}
          <div className="max-w-3xl mx-auto mt-12">
            <div className="bg-terminal-bg rounded-lg border border-primary/20 glow-primary overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-xs text-muted-foreground font-mono">
                  terminal
                </span>
              </div>
              <div className="p-6 font-mono text-sm space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-terminal-prompt">$</span>
                  <span className="text-terminal-text">
                    brokerbench run --broker kafka --requests 10000
                  </span>
                </div>
                <div className="text-muted-foreground">
                  <span className="text-green-500">✓</span> Connected to Kafka
                  cluster
                </div>
                <div className="text-muted-foreground">
                  <span className="text-primary animate-glow-pulse">▸</span>{" "}
                  Running benchmark...
                </div>
                <div className="text-muted-foreground">
                  Throughput: <span className="text-primary">12,450</span>{" "}
                  msg/sec
                </div>
                <div className="text-muted-foreground">
                  Latency (p99): <span className="text-accent">23ms</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button variant="hero" size="lg" className="text-lg px-8">
              Get Started
            </Button>
            <Button variant="outline-hero" size="lg" className="text-lg px-8">
              View on GitHub
            </Button>
          </div>

          {/* Install command */}
          <div className="pt-4">
            <p className="text-sm text-muted-foreground mb-2">Quick install:</p>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-card rounded-lg border border-border">
              <code className="font-mono text-primary">
                npm install -g brokerbench
              </code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
