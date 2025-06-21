
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "nathg8471@gmail.com",
      link: "mailto:nathg8471@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "6374310737",
      link: "tel:6374310737"
    },
    {
      icon: <Github className="w-6 h-6" />,
      title: "GitHub",
      value: "GOPINATH1410-captain",
      link: "https://github.com/GOPINATH1410-captain"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-400 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-400 rounded-full opacity-15"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Contact</span>
          <h2 className="text-4xl font-bold text-white mb-4 mt-2">Got A Project? Let's Talk</h2>
          <div className="w-20 h-1 bg-orange-400 mx-auto mb-6"></div>
          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm here to help you create amazing digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-2xl border-0">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6">Get in touch</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                I'm always excited to work on new projects and collaborate with creative minds. 
                Whether you have a specific project in mind or just want to explore possibilities, 
                feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a 
                  key={index}
                  href={info.link}
                  target={info.title === "GitHub" ? "_blank" : undefined}
                  rel={info.title === "GitHub" ? "noopener noreferrer" : undefined}
                  className="block group"
                >
                  <Card className="hover:shadow-lg transition-all duration-300 transform hover:scale-105 border-0 bg-white/10 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                          {info.icon}
                        </div>
                        <div>
                          <h4 className="text-white font-semibold">{info.title}</h4>
                          <p className="text-white/80">{info.value}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

            {/* LinkedIn section */}
            <Card className="border-0 bg-white/10 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="text-white">
                  <h4 className="font-semibold mb-2">LinkedIn</h4>
                  <p className="text-white/80">GOPINATH C</p>
                  <p className="text-white/60 text-sm mt-1">Connect with me for professional opportunities</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; 2024 Gopinath C. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
