import React from 'react';

export default function Assistant() {
  return (
    <div className="w-full max-w-2xl mx-auto xl:mx-0">
      <div className="glass-card rounded-xl p-4 hover-effect">
        <h2 className="text-xl font-semibold text-violet-400 mb-4 px-2">AI Assistant</h2>
        <div className="relative w-full aspect-[3/4] overflow-hidden rounded-lg">
          <iframe 
            id="audio_iframe" 
            src="https://widget.synthflow.ai/widget/v2/1732364416887x144335158203253700/1732364416778x671640777609186200" 
            allow="microphone" 
            className="absolute inset-0 w-full h-full"
            style={{
              border: 'none',
              background: 'transparent',
              boxShadow: '0 0 30px rgba(124, 58, 237, 0.1)'
            }}
          />
        </div>
        <p className="text-gray-400 text-sm mt-4 px-2">
          Speak with our AI assistant for support and guidance. Your conversations are private and secure.
        </p>
      </div>
    </div>
  );
}