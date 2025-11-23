const brokers = [
  {
    name: "Apache Kafka",
    color: "text-primary",
    image:
      "https://openwhisk.apache.org/images/icons/icon-kafka-white-trans.png",
  },
  {
    name: "RabbitMQ",
    color: "text-accent",
    image:
      "https://cdn.iconscout.com/icon/free/png-256/free-rabbitmq-icon-svg-download-png-282296.png?f=webp",
  },

  {
    name: "Redis Streams",
    color: "text-accent",
    image: "https://www.svgrepo.com/show/303460/redis-logo.svg",
  },
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

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {brokers.map((broker, index) => (
            <div
              key={index}
              className="p-8 rounded-lg bg-card border border-border hover:border-primary/50 hover:glow-primary transition-all duration-300 group"
            >
              <div className="aspect-square flex items-center justify-center mb-4">
                {broker.image ? (
                  <img
                    src={broker.image}
                    alt={broker.name}
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <div
                    className={`text-6xl font-bold ${broker.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                  >
                    {broker.name.charAt(0)}
                  </div>
                )}
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
