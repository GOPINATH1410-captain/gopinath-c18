
import { Code, Settings, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: ["C", "Python", "Java", "HTML", "CSS", "JavaScript"],
      color: "from-blue-500 to-purple-600"
    },
    {
      title: "Tools & IDEs",
      icon: <Settings className="w-8 h-8" />,
      skills: ["Visual Studio Code", "Arduino IDE"],
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Core Areas",
      icon: <Star className="w-8 h-8" />,
      skills: ["Front-End Development", "UI/UX Design"],
      color: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Expertise & Skills</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Let's check it out: Here's what I bring to development and digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardContent className="p-8 text-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{category.title}</h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skillIndex}
                      className="bg-gray-50 rounded-lg px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-200"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Skills Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Technical Proficiencies</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { skill: "HTML/CSS", level: 90 },
              { skill: "JavaScript", level: 85 },
              { skill: "Python", level: 80 },
              { skill: "UI/UX Design", level: 75 }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-lg font-semibold mb-2">{item.skill}</div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-orange-400 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
                <div className="text-sm mt-1 opacity-90">{item.level}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
