import { Terminal } from "lucide-react";

const CLIDemoSection = () => {
  const commands = [
    { prompt: "$ brokerbenchcli --broker KAFKA --requests 10000", delay: 0 },
    { text: "✓ Connected to Kafka cluster", delay: 1 },
    { text: "▸ Publishing 10,000 messages...", delay: 2 },
    { text: "✓ Benchmark complete", delay: 3 },
  ];

  return (
    <section className="py-24 px-6">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Simple CLI,
            <span className="text-gradient"> powerful insights</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Run benchmarks with a single command
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-terminal-bg rounded-lg border border-primary/30 glow-primary overflow-hidden">
            <div className="flex items-center gap-2 px-6 py-4 border-b border-border/50 bg-card/50">
              <Terminal className="w-4 h-4 text-primary" />
              <span className="text-sm font-mono text-muted-foreground">
                brokerbenchcli
              </span>
            </div>
            <div className="p-8 font-mono text-sm space-y-3">
              {commands.map((cmd, index) => (
                <div
                  key={index}
                  className="animate-fade-in"
                  style={{ animationDelay: `${cmd.delay * 0.5}s` }}
                >
                  {cmd.prompt ? (
                    <div className="flex items-start gap-2">
                      <span className="text-terminal-prompt">$</span>
                      <span className="text-terminal-text">{cmd.prompt}</span>
                    </div>
                  ) : (
                    <div className="text-muted-foreground pl-4">
                      {cmd.text?.includes("✓") && (
                        <span className="text-green-500">{cmd.text}</span>
                      )}
                      {cmd.text?.includes("▸") && (
                        <span className="text-primary">{cmd.text}</span>
                      )}
                      {!cmd.text?.includes("✓") && !cmd.text?.includes("▸") && (
                        <span>{cmd.text}</span>
                      )}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <span className="text-terminal-prompt">$</span>
                <span className="w-2 h-4 bg-terminal-text animate-glow-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CLIDemoSection;
