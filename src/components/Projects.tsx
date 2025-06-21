
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Doc to Deck",
      description: "A powerful web application for converting PDF files into editable PPTX and Word documents. Features drag-and-drop upload, real-time conversion, and download functionality.",
      techStack: ["HTML", "CSS", "JavaScript", "File API"],
      category: "Web Application",
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "G Airlines",
      description: "A premium flight ticket booking application with modern UI/UX design. Includes flight search, seat selection, payment integration, and booking management.",
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      category: "Booking Platform",
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Tamil Nadu Lodging Hub",
      description: "A comprehensive web platform for online room booking across Tamil Nadu. Features location-based search, real-time availability, and secure booking system.",
      techStack: ["HTML", "CSS", "JavaScript", "Local Storage"],
      category: "Hospitality Platform",
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Digital Product Showcases</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore my latest projects and see how I bring ideas to life through code and design
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg overflow-hidden"
            >
              <div className={`h-48 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-white text-sm font-medium">{project.category}</span>
                </div>
                
                {/* Project mockup placeholder */}
                <div className="absolute bottom-4 right-4 w-24 h-16 bg-white/30 rounded-lg backdrop-blur-sm flex items-center justify-center">
                  <div className="w-16 h-10 bg-white/50 rounded"></div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-purple-200 text-purple-600 hover:bg-purple-50"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-purple-600 hover:bg-purple-700"
                  >
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
