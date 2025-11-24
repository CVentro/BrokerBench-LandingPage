import { useScrollAnimation } from "@/hooks/use-scroll-animation";

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
  const titleAnimation = useScrollAnimation({ threshold: 0.2 });
  const gridAnimation = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="container max-w-6xl mx-auto text-center">
        <div
          ref={titleAnimation.ref}
          className={`mb-12 animate-on-scroll ${
            titleAnimation.isVisible ? "visible" : ""
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Supports all major message brokers
          </h2>
          <p className="text-muted-foreground text-lg">
            Test and compare performance across different broker technologies
          </p>
        </div>

        <div
          ref={gridAnimation.ref}
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto animate-on-scroll-scale ${
            gridAnimation.isVisible ? "visible" : ""
          }`}
        >
          {brokers.map((broker, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:glow-primary transition-all duration-300 group"
              style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="aspect-square flex items-center justify-center mb-3 max-w-[120px] mx-auto">
                {broker.image ? (
                  <img
                    src={broker.image}
                    alt={broker.name}
                    className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <div
                    className={`text-5xl font-bold ${broker.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                  >
                    {broker.name.charAt(0)}
                  </div>
                )}
              </div>
              <h3 className="font-semibold text-base">{broker.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrokersSection;
