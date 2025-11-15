import { Zap, BarChart3, GitCompare, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Automated Load Generation",
    description:
      "Configure requests, payload size, and concurrency directly from the CLI. No complex setup required.",
  },
  {
    icon: BarChart3,
    title: "Custom Performance Dashboards",
    description:
      "Auto-generate interactive dashboards with throughput, latency, and real-time broker metrics.",
  },
  {
    icon: GitCompare,
    title: "Cross-Broker Comparison",
    description:
      "Compare performance dashboards side-by-side. Benchmark Kafka vs RabbitMQ vs Pulsar vs Redis.",
  },
  {
    icon: Wrench,
    title: "Developer-First Experience",
    description:
      "Built for backend engineers, cloud architects, and SREs. Simple CLI, powerful results.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Everything you need to
            <span className="text-gradient"> benchmark message brokers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From load testing to performance analysis, BrokerBench has you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-gradient hover:glow-primary transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 group-hover:glow-primary transition-all">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
