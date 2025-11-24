import { Card } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const DashboardSection = () => {
  const titleAnimation = useScrollAnimation({ threshold: 0.2 });
  const kafkaAnimation = useScrollAnimation({ threshold: 0.1 });
  const rabbitAnimation = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="container max-w-6xl mx-auto">
        <div
          ref={titleAnimation.ref}
          className={`text-center mb-16 animate-on-scroll ${
            titleAnimation.isVisible ? "visible" : ""
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Compare performance
            <span className="text-gradient"> at a glance</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Auto-generated dashboards with broker comparisons
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Kafka Dashboard Mock */}
          <div
            ref={kafkaAnimation.ref}
            className={`animate-on-scroll-left ${
              kafkaAnimation.isVisible ? "visible" : ""
            }`}
          >
            <Card className="p-6 bg-card border-gradient hover:glow-primary transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-primary">
                    Apache Kafka
                  </h3>
                  <span className="text-sm text-muted-foreground font-mono">
                    10,000 messages
                  </span>
                </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Throughput</span>
                    <span className="text-primary font-mono">
                      12,450 msg/sec
                    </span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-accent w-[95%]" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Latency (p99)</span>
                    <span className="text-primary font-mono">23ms</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-accent to-primary w-[75%]" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">CPU Usage</span>
                    <span className="text-accent font-mono">45%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-accent w-[45%]" />
                  </div>
                </div>
              </div>
            </div>
            </Card>
          </div>

          {/* RabbitMQ Dashboard Mock */}
          <div
            ref={rabbitAnimation.ref}
            className={`animate-on-scroll-right ${
              rabbitAnimation.isVisible ? "visible" : ""
            }`}
          >
            <Card className="p-6 bg-card border-gradient hover:glow-accent transition-all">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-accent">RabbitMQ</h3>
                  <span className="text-sm text-muted-foreground font-mono">
                    10,000 messages
                  </span>
                </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Throughput</span>
                    <span className="text-accent font-mono">8,920 msg/sec</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-accent to-primary w-[68%]" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Latency (p99)</span>
                    <span className="text-accent font-mono">18ms</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary to-accent w-[82%]" />
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">CPU Usage</span>
                    <span className="text-primary font-mono">62%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[62%]" />
                  </div>
                </div>
              </div>
            </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
