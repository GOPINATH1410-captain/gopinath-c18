
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold text-gray-900">
            Gopinath C
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-purple-600 transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t bg-white/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-purple-600 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
