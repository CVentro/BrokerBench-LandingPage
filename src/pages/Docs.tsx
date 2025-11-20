import { Book, Terminal, Settings, Code, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Docs = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 sticky top-0 bg-background/95 backdrop-blur-sm z-50">
        <div className="container max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold font-mono text-gradient">
            BrokerBench
          </Link>
          <nav className="flex items-center gap-6">
            <Link to="/docs" className="text-sm font-medium text-primary">
              Docs
            </Link>
            <Button variant="outline" size="sm" asChild>
              <Link to="/">Home</Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-border/50 py-16 px-6">
        <div className="container max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Book className="w-8 h-8 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">Documentation</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Everything you need to know about installing, configuring, and using
            BrokerBench for message broker performance testing.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6">
        <div className="container max-w-7xl mx-auto">
          <Tabs defaultValue="installation" className="space-y-8">
            <TabsList className="grid w-full max-w-2xl grid-cols-3">
              <TabsTrigger value="installation">Installation</TabsTrigger>
              <TabsTrigger value="commands">Commands</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
            </TabsList>

            {/* Installation */}
            <TabsContent value="installation" className="space-y-8">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Terminal className="w-6 h-6 text-primary" />
                  Installation Guide
                </h2>

                <div className="space-y-8">
                  {/* NPM Install */}
                  <div className="bg-card rounded-lg border border-border p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Install via NPM
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      The easiest way to get started with BrokerBench is via
                      npm:
                    </p>
                    <div className="bg-terminal-bg rounded-lg border border-primary/20 p-4 font-mono text-sm">
                      <span className="text-terminal-prompt">$</span>{" "}
                      <span className="text-terminal-text">
                        npm install -g brokerbenchcli
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-4">
                      Verify installation:
                    </p>
                    <div className="bg-terminal-bg rounded-lg border border-primary/20 p-4 font-mono text-sm mt-2">
                      <span className="text-terminal-prompt">$</span>{" "}
                      <span className="text-terminal-text">
                        brokerbenchcli --version
                      </span>
                    </div>
                  </div>

                  {/* Docker Install */}
                  {/* <div className="bg-card rounded-lg border border-border p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Install via Docker
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Run BrokerBench in a containerized environment:
                    </p>
                    <div className="bg-terminal-bg rounded-lg border border-primary/20 p-4 font-mono text-sm">
                      <span className="text-terminal-prompt">$</span>{" "}
                      <span className="text-terminal-text">
                        docker pull brokerbench/cli:latest
                      </span>
                    </div>
                    <p className="text-muted-foreground mt-4">
                      Run benchmarks:
                    </p>
                    <div className="bg-terminal-bg rounded-lg border border-primary/20 p-4 font-mono text-sm mt-2">
                      <div>
                        <span className="text-terminal-prompt">$</span>{" "}
                        <span className="text-terminal-text">
                          docker run -it brokerbench/cli \
                        </span>
                      </div>
                      <div className="ml-4 text-terminal-text">
                        run --broker kafka --requests 10000
                      </div>
                    </div>
                  </div> */}

                  {/* System Requirements */}
                  <div className="bg-card rounded-lg border border-border p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      System Requirements
                    </h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>Node.js 18.x or higher</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>Docker 20.x or higher</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>Java 17+</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>
                          8GB RAM minimum (16GB recommended for high-load
                          testing)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>Network access to broker instances</span>
                      </li>

                      <li className="flex items-start gap-2">
                        <ChevronRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <span>Linux, macOS, or Windows (WSL recommended)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Commands */}
            <TabsContent value="commands" className="space-y-8">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Terminal className="w-6 h-6 text-primary" />
                  CLI Commands Reference
                </h2>

                <div className="space-y-6">
                  {/* Run Command */}
                  <div className="bg-card rounded-lg border border-border p-6">
                    <h3 className="text-xl font-semibold mb-4 font-mono text-primary">
                      brokerbench run
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Execute a benchmark test against a message broker.
                    </p>

                    <div className="bg-terminal-bg rounded-lg border border-primary/20 p-4 font-mono text-sm mb-4">
                      <span className="text-terminal-text">
                        brokerbenchcli run --broker &lt;type&gt; [options]
                      </span>
                    </div>

                    <h4 className="font-semibold mb-3">Options:</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex gap-4">
                        <code className="text-primary font-mono">
                          --broker(-b)
                        </code>
                        <span className="text-muted-foreground">
                          Broker type: KAFKA, RABBITMQ, PULSAR, REDIS (required)
                        </span>
                      </div>
                      <div className="flex gap-4">
                        <code className="text-primary font-mono">
                          --requests(-r)
                        </code>
                        <span className="text-muted-foreground">
                          Number of messages to send (default: 1000)
                        </span>
                      </div>
                      {/* <div className="flex gap-4">
                        <code className="text-primary font-mono">
                          --payload
                        </code>
                        <span className="text-muted-foreground">
                          Message payload size in bytes (default: 1024)
                        </span>
                      </div> */}
                      <div className="flex gap-4">
                        <code className="text-primary font-mono">
                          --loops(-l)
                        </code>
                        <span className="text-muted-foreground">
                          Number of loops to repeat the test (default: 1)
                        </span>
                      </div>
                      <div className="flex gap-4">
                        <code className="text-primary font-mono">
                          --rampup(-u)
                        </code>
                        <span className="text-muted-foreground">
                          Ramp-up time in milliseconds between message batches
                          (default = 5)
                        </span>
                      </div>
                      <div className="flex gap-4">
                        <code className="text-primary font-mono">
                          --version(-v)
                        </code>
                        <span className="text-muted-foreground">
                          Print information about the current version
                        </span>
                      </div>
                      <div className="flex gap-4">
                        <code className="text-primary font-mono">
                          --help(-h)
                        </code>
                        <span className="text-muted-foreground">
                          Shows help information about the command
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Command */}
                  <div className="bg-card rounded-lg border border-border p-6">
                    <h3 className="text-xl font-semibold mb-4 font-mono text-primary">
                      brokerbench dashboard
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Generate interactive dashboard from results.
                    </p>

                    <div className="bg-terminal-bg rounded-lg border border-primary/20 p-4 font-mono text-sm">
                      <span className="text-terminal-text">
                        brokerbenchcli dashboard &lt;result.json&gt; --port 3000
                      </span>
                    </div>
                  </div>

                  {/* Config Command */}
                  {/* <div className="bg-card rounded-lg border border-border p-6">
                    <h3 className="text-xl font-semibold mb-4 font-mono text-primary">
                      brokerbench config
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Manage configuration settings.
                    </p>

                    <div className="bg-terminal-bg rounded-lg border border-primary/20 p-4 font-mono text-sm space-y-2">
                      <div>
                        <span className="text-terminal-text">
                          brokerbench config set &lt;key&gt; &lt;value&gt;
                        </span>
                      </div>
                      <div>
                        <span className="text-terminal-text">
                          brokerbench config get &lt;key&gt;
                        </span>
                      </div>
                      <div>
                        <span className="text-terminal-text">
                          brokerbench config list
                        </span>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </TabsContent>
            {/* Examples */}
            <TabsContent value="examples" className="space-y-8">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
                  <Code className="w-6 h-6 text-primary" />
                  Code Examples
                </h2>

                <div className="space-y-6">
                  {/* Basic Benchmark */}
                  <div className="bg-card rounded-lg border border-border p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Basic Kafka Benchmark
                    </h3>
                    <div className="bg-terminal-bg rounded-lg border border-primary/20 p-4 font-mono text-sm">
                      <span className="text-terminal-prompt">$</span>{" "}
                      <span className="text-terminal-text">
                        brokerbenchcli --broker KAFKA --requests 10000 --loops 2
                      </span>
                    </div>
                  </div>

                  {/* High Concurrency */}
                  {/* <div className="bg-card rounded-lg border border-border p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      High Concurrency Test
                    </h3>
                    <div className="bg-terminal-bg rounded-lg border border-primary/20 p-4 font-mono text-sm">
                      <div>
                        <span className="text-terminal-prompt">$</span>{" "}
                        <span className="text-terminal-text">
                          brokerbench run \
                        </span>
                      </div>
                      <div className="ml-4 text-terminal-text">
                        --broker rabbitmq \
                      </div>
                      <div className="ml-4 text-terminal-text">
                        --requests 50000 \
                      </div>
                      <div className="ml-4 text-terminal-text">
                        --concurrency 100 \
                      </div>
                      <div className="ml-4 text-terminal-text">
                        --host rabbitmq.example.com
                      </div>
                    </div>
                  </div> */}

                  {/* Custom Payload */}
                  <div className="bg-card rounded-lg border border-border p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Custom Payload Size (Coming Soon)
                    </h3>
                    <div className="bg-terminal-bg rounded-lg border border-primary/20 p-4 font-mono text-sm">
                      <span className="text-terminal-prompt">$</span>{" "}
                      <span className="text-terminal-text">
                        brokerbenchcli --broker PULSAR --requests 5000 --payload
                        4096
                      </span>
                    </div>
                  </div>

                  {/* Multiple Brokers Comparison */}
                  {/* <div className="bg-card rounded-lg border border-border p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Compare Multiple Brokers
                    </h3>
                    <div className="bg-terminal-bg rounded-lg border border-primary/20 p-4 font-mono text-sm space-y-2">
                      <div>
                        <span className="text-terminal-prompt">$</span>{" "}
                        <span className="text-terminal-text">
                          brokerbench run --broker kafka --output
                          kafka-results.json
                        </span>
                      </div>
                      <div>
                        <span className="text-terminal-prompt">$</span>{" "}
                        <span className="text-terminal-text">
                          brokerbench run --broker rabbitmq --output
                          rabbitmq-results.json
                        </span>
                      </div>
                      <div>
                        <span className="text-terminal-prompt">$</span>{" "}
                        <span className="text-terminal-text">
                          brokerbench compare kafka-results.json
                          rabbitmq-results.json
                        </span>
                      </div>
                    </div>
                  </div> */}

                  {/* Dashboard Generation */}
                  <div className="bg-card rounded-lg border border-border p-6">
                    <h3 className="text-xl font-semibold mb-4">
                      Generate Performance Dashboard
                    </h3>
                    <div className="bg-terminal-bg rounded-lg border border-primary/20 p-4 font-mono text-sm space-y-2">
                      <div>
                        <span className="text-terminal-prompt">$</span>{" "}
                        <span className="text-terminal-text">
                          brokerbenchli dashboard --port 3000
                        </span>
                      </div>
                      <div className="text-muted-foreground">
                        <span className="text-green-500">✓</span> Dashboard
                        available at http://localhost:3000
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-border/50 py-12 px-6">
        <div className="container max-w-7xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Start Benchmarking?
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Docs;
