
import { ArrowDown, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-orange-400 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-yellow-400 rounded-full opacity-30"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-pink-400 rounded-full opacity-25"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen">
          {/* Left content */}
          <div className="lg:w-1/2 text-white space-y-6 text-center lg:text-left">
            <div className="space-y-2">
              <p className="text-lg font-medium opacity-90">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Gopinath C
                <span className="block text-2xl md:text-3xl text-orange-400 mt-2">
                  An Aspiring Web Developer & Designer
                </span>
              </h1>
            </div>
            
            <p className="text-lg opacity-90 max-w-md mx-auto lg:mx-0">
              Crafting code, designing dreams. Building innovative web solutions with passion and precision.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={scrollToProjects}
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Explore My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-3 rounded-full text-lg font-medium transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>
          </div>
          
          {/* Right content - Profile Image */}
          <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
            <div className="relative">
              {/* Background circle */}
              <div className="w-80 h-80 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full opacity-20 absolute -inset-4"></div>
              
              {/* Profile image */}
              <div className="w-72 h-72 rounded-full overflow-hidden shadow-2xl relative z-10 border-4 border-white/20">
                <img 
                  src="/lovable-uploads/8c402c6f-bcf5-4854-ba0b-57d1c69a6413.png" 
                  alt="Gopinath C - Web Developer & Designer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white p-3 rounded-lg shadow-lg animate-bounce">
                <span className="text-sm font-medium">Web Dev</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-lg shadow-lg animate-pulse">
                <span className="text-sm font-medium">Designer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
