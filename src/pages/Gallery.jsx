import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const images = [
    { src: "/reindeer-forest.jpg", alt: "Reindeer herd in lush green forest" },
    { src: "/reindeer-antlers.jpg", alt: "Close-up of reindeer antlers" },
    { src: "/reindeer-calf.jpg", alt: "Adorable reindeer calf with mother" },
    { src: "/reindeer-tundra.jpg", alt: "Reindeer in autumn tundra" },
    { src: "/reindeer-river.jpg", alt: "Reindeer swimming across river" },
    { src: "/reindeer-hero.jpg", alt: "Majestic reindeer in snowy forest" },
  ];

  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Reindeer Gallery</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover rounded-lg"
              />
              <p className="mt-2 text-center text-sm text-muted-foreground">{image.alt}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Gallery;