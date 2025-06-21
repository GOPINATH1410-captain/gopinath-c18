
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const education = [
    {
      degree: "BE – Electronics and Communication Engineering",
      institution: "KSR Institute for Engineering and Technology",
      grade: "CGPA: 9.0",
      year: "2023–2027",
      status: "Current"
    },
    {
      degree: "HSC – Higher Secondary Certificate",
      institution: "Government Boys Higher Secondary School, Karimangalam",
      grade: "Percent: 75%",
      year: "2022–2023",
      status: "Completed"
    },
    {
      degree: "SSLC – Secondary School Leaving Certificate",
      institution: "Government Boys Higher Secondary School, Karimangalam",
      grade: "Percent: 85%",
      year: "2020–2021",
      status: "Completed"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Bio and goals */}
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Mission</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To build a successful career in a dynamic organization where I can contribute 
                positively to the team and organization's objectives, while continuously learning 
                and developing professionally to achieve my goal as a Web Developer and Designer.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-4">What Drives Me</h3>
              <p className="leading-relaxed">
                I'm passionate about creating digital experiences that matter. Every line of code 
                I write and every design I create is driven by the desire to solve real problems 
                and make technology more accessible and beautiful.
              </p>
            </div>
          </div>

          {/* Right side - Education timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Educational Journey</h3>
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                      edu.status === 'Current' ? 'bg-green-500' : 'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">{edu.degree}</h4>
                      <p className="text-gray-700 mb-1">{edu.institution}</p>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                        <span className="text-purple-600 font-semibold">{edu.grade}</span>
                        <span className="text-gray-500 text-sm">{edu.year}</span>
                      </div>
                      <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
                        edu.status === 'Current' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {edu.status}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
