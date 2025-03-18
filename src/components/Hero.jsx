import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80"
        >
          <source
            src="https://player.vimeo.com/external/449759244.sd.mp4?s=d5f3da46ddc17aa69a7de84f1e420610ebd2a391&profile_id=164&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-4">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Transform Your Business
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Empower your team with cutting-edge solutions that drive growth and innovation
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center gap-2 mx-auto hover:bg-gray-100 transition-colors">
            Get Started <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}