
import { Card, CardContent } from "@/components/ui/card";

const Process = () => {
  const processSteps = [
    {
      step: "01",
      title: "Business Planning",
      description: "Understanding client requirements, analyzing project scope, and defining clear objectives and deliverables.",
      color: "from-blue-500 to-purple-600"
    },
    {
      step: "02", 
      title: "Design Strategy",
      description: "Creating wireframes, developing user experience flows, and designing intuitive interfaces that engage users.",
      color: "from-purple-500 to-pink-600"
    },
    {
      step: "03",
      title: "Grow Your Business",
      description: "Implementing robust solutions, thorough testing, and deploying scalable applications that drive business growth.",
      color: "from-green-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">Process</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 mt-2">My Working Process</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {processSteps.map((process, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gray-200 z-0"></div>
              )}
              
              <Card className="relative z-10 group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  {/* Step number with gradient background */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${process.color} rounded-full flex items-center justify-center mx-auto mb-6 text-white text-xl font-bold group-hover:scale-110 transition-transform duration-300`}>
                    {process.step}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors">
                    {process.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {process.description}
                  </p>
                  
                  {/* Decorative element */}
                  <div className="mt-6 w-12 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with innovative design and development solutions.
            </p>
            <button 
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Let's Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
