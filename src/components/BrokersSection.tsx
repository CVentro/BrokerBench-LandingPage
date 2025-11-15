const brokers = [
  { name: "Apache Kafka", color: "text-primary" },
  { name: "RabbitMQ", color: "text-accent" },
  { name: "Apache Pulsar", color: "text-primary" },
  { name: "Redis Streams", color: "text-accent" },
];

const BrokersSection = () => {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="container max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Supports all major message brokers
        </h2>
        <p className="text-muted-foreground text-lg mb-12">
          Test and compare performance across different broker technologies
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {brokers.map((broker, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-card border border-border hover:border-primary/50 hover:glow-primary transition-all duration-300 group"
            >
              <div className="aspect-square flex items-center justify-center mb-4">
                <div className={`text-6xl font-bold ${broker.color} opacity-80 group-hover:opacity-100 transition-opacity`}>
                  {broker.name.charAt(0)}
                </div>
              </div>
              <h3 className="font-semibold text-lg">{broker.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrokersSection;
