import React from 'react';
import Navbar from './components/Navbar';
import Assistant from './components/Assistant';
import Notes from './components/Notes';
import Resources from './components/Resources';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-violet-900/20 to-gray-900">
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6')] opacity-5 mix-blend-overlay pointer-events-none bg-cover bg-center" />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-violet-600 mb-4">
            Your AI Companion for Mental Wellness
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience supportive conversations and organize your thoughts with our AI assistant.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col xl:flex-row gap-8 items-start justify-center">
          <Assistant />
          <Notes />
        </div>
      </section>

      {/* Resources Section */}
      <section id="resources" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-violet-400 mb-8 text-center">Mental Health Resources</h2>
        <Resources />
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-16">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>Made with Love💟 by RihanAkhtar</p>
            <p className="mt-2">
              Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;