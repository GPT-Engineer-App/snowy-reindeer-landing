import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col items-center">
      <section className="w-full bg-gradient-to-r from-green-400 to-blue-500 py-20 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Reindeer World</h1>
          <p className="text-xl mb-8">Discover the majestic world of reindeer</p>
          <Button size="lg" variant="secondary">Learn More</Button>
        </div>
      </section>
      
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Reindeer</h2>
        <p className="text-lg text-center max-w-2xl mx-auto">
          Reindeer, also known as caribou in North America, are magnificent creatures 
          adapted to cold environments. They are known for their impressive antlers 
          and their association with Santa Claus in popular culture.
        </p>
      </section>
      
      <img 
        src="/reindeer-hero.jpg" 
        alt="Majestic reindeer in snowy forest" 
        className="w-full max-w-4xl h-[400px] object-cover rounded-lg shadow-lg mb-16"
      />
    </div>
  );
};

export default Index;