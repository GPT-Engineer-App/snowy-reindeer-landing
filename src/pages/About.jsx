import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">About Reindeer</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Habitat</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              Reindeer are found in the Arctic tundra and adjacent boreal forests of 
              Greenland, Scandinavia, Russia, Alaska, and Canada. They are well adapted 
              to survive in harsh, cold climates.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Characteristics</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5">
              <li>Both males and females grow antlers</li>
              <li>Excellent swimmers</li>
              <li>Can run at speeds of up to 50 mph</li>
              <li>Have a thick, warm coat that provides excellent insulation</li>
            </ul>
          </CardContent>
        </Card>
      </div>
      
      <img 
        src="/placeholder.svg" 
        alt="Reindeer in their natural habitat" 
        className="w-full max-w-4xl h-[400px] object-cover rounded-lg shadow-lg my-16 mx-auto"
      />
      
      <p className="text-lg max-w-3xl mx-auto">
        Reindeer have played a crucial role in the cultures of Arctic indigenous peoples 
        for thousands of years. They are used for transportation, food, and materials 
        for clothing and shelter. In modern times, reindeer herding remains an important 
        economic and cultural activity in many Arctic regions.
      </p>
    </div>
  );
};

export default About;