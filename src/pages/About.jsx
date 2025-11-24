import React from 'react';
import { Globe } from 'lucide-react';

const About = () => (
  <div className="container hero">
    <div className="text-center mb-16">
      <h1 className="text-6xl mb-4">Tentang Nusantara</h1>
      <p className="text-xl text-gray-500 max-w-2xl mx-auto">
        Sebuah inisiatif digital untuk merayakan keberagaman budaya Indonesia.
      </p>
    </div>
    <div className="max-w-4xl mx-auto mb-24">
      <div className="article-card">
        <h2 className="mb-6 flex items-center gap-2.5">
          <Globe size={32} color="var(--accent)" /> Misi Kami
        </h2>
        <p className="article-text">
          Indonesia adalah zamrud khatulistiwa dengan ribuan pulau dan budaya. <strong>Nusantara</strong> yang di buat oleh Anyaman Abstrak adalah sebuah platform digital yang hadir untuk mendokumentasikan kekayaan kuliner, seni, dan tradisi dari Sabang sampai Merauke.
        </p>
      </div>
      
    </div>
  </div>
);

export default About;