import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { provincesData } from '../data';
import { ArrowLeft, Globe, Home as HomeIcon, MapPin, Share2, Utensils, Music, Gamepad2, Shirt } from 'lucide-react';

const ProvinceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const data = useMemo(() => provincesData.find((p) => p.slug === slug), [slug]);

  const [coverLoaded, setCoverLoaded] = useState(false);
  const [houseLoaded, setHouseLoaded] = useState(false);
  const [clothingLoaded, setClothingLoaded] = useState(false);
  const [shared, setShared] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!data) return <div className="container" style={{ padding: '5rem' }}>Provinsi tidak ditemukan.</div>;

  const getEmbedUrl = (url) => {
    try {
      const u = new URL(url);
      if (u.hostname.includes('youtu.be')) {
        const id = u.pathname.split('/').filter(Boolean).pop();
        return `https://www.youtube.com/embed/${id}`;
      }
      if (u.hostname.includes('youtube.com')) {
        const id = u.searchParams.get('v');
        if (id) return `https://www.youtube.com/embed/${id}`;
      }
      return url;
    } catch {
      return url;
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: `${data.name} • Nusantara`,
      text: `${data.name} — ${data.region}. Jelajahi budaya, rumah adat, kuliner dan seni.`,
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      }
    } catch (e) {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      }
    }
  };

  return (
    <div>
      <div className="detail-header">
        {!coverLoaded && <div className="skeleton skeleton-cover" />}
        <img
          src={data.coverImg}
          alt={data.name}
          className="detail-cover"
          loading="lazy"
          decoding="async"
          onLoad={() => setCoverLoaded(true)}
          style={{ opacity: coverLoaded ? 1 : 0 }}
        />
        <div className="detail-overlay"></div>
        <div className="header-content">
          <button
            onClick={() => navigate(-1)}
            className="btn"
            style={{ background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', color: 'white', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.3)' }}
          >
            <ArrowLeft size={18} /> Kembali
          </button>
          <div className="uppercase tracking-[0.2em] font-semibold mb-2 text-[#D4AF37]">{data.region}</div>
          <h1>{data.name}</h1>
          <p><MapPin size={20} color="#D4AF37" fill="#D4AF37" /> {data.capital}, Indonesia</p>
        </div>
      </div>

      <div className="container content-wrapper">
        <main>
          <div className="article-card">
            <h2 className="section-title mt-0"><Globe size={28} /> Sekilas Pandang</h2>
            <p className="article-text">{data.story}</p>
            <p className="article-text">{data.desc}</p>
          </div>

          <div className="article-card">
            <h2 className="section-title"><HomeIcon size={28} /> Rumah Adat</h2>
            <div className="house-card-visual">
              {!houseLoaded && <div className="skeleton skeleton-image" />}
              <img
                src={data.details.house.img}
                alt={data.details.house.name}
                loading="lazy"
                decoding="async"
                onLoad={() => setHouseLoaded(true)}
                className={`transition-opacity duration-300 ${houseLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
              <div className="house-info">
                <h3>{data.details.house.name}</h3>
                <p>{data.details.house.desc}</p>
              </div>
            </div>
          </div>

          <div className="article-card">
            <h2 className="section-title"><Shirt size={28} /> Pakaian Adat</h2>
            <div className="flex gap-8 items-center bg-[#FFF8F0] p-8 rounded-2xl border border-dashed" style={{ borderColor: 'var(--accent)' }}>
              {!clothingLoaded && <div className="skeleton skeleton-thumb" />}
              <img
                src={data.details.clothing.img}
                alt={data.details.clothing.name}
                loading="lazy"
                decoding="async"
                onLoad={() => setClothingLoaded(true)}
                className={`w-[150px] h-[200px] object-contain object-center bg-white rounded-lg shadow transition-opacity duration-300 ${clothingLoaded ? 'opacity-100' : 'opacity-0'}`}
              />
              <div>
                <h3 className="text-xl text-[var(--primary)] mb-2">{data.details.clothing.name}</h3>
                <p className="text-[#555] leading-relaxed">{data.details.clothing.desc}</p>
              </div>
            </div>
          </div>

          <div className="article-card">
            <h2 className="section-title"><Utensils size={28} /> Kuliner Legendaris</h2>
            <div className="food-grid">
              {data.details.food.map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 bg-white">
                  <img src={item.img} alt={item.name} loading="lazy" decoding="async" className="w-20 h-20 rounded-xl object-cover" />
                  <div>
                    <strong className="block text-lg text-[var(--primary)]">{item.name}</strong>
                    <small className="block text-[#666] leading-relaxed">{item.desc}</small>
                    <a href={item.resep} target='_blank' rel='noopener noreferrer' className="text-xs hover:opacity-70">Lihat resep</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="article-card">
            <h2 className="section-title"><Gamepad2 size={28} /> Permainan Tradisional</h2>
            <div className="games-grid">
              {data.details.games.map((game, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                  <strong className="block text-[var(--primary)] mb-2">{game.name}</strong>
                  <p className="text-[#666] mb-2">{game.desc}</p>
                  <a href={game.video} target='_blank' rel='noopener noreferrer' className="text-xs hover:opacity-70">Lihat video</a>
                  {game.video && (
                    <div className="video-embed">
                      <iframe
                        title={`video-${idx}`}
                        src={getEmbedUrl(game.video)}
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="article-card">
            <h2 className="section-title"><Music size={28} /> Seni & Tradisi</h2>
            <div className="grid gap-4">
              {data.details.arts.map((art, idx) => (
                <div key={idx} className="flex gap-4 items-center border-b border-dashed pb-4" style={{ borderColor: '#eee' }}>
                  <div className="bg-[var(--primary)] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">{idx + 1}</div>
                  <div>
                    <strong className="text-[1.1rem]">{art.name}</strong>
                    <p className="text-[#666] text-[0.95rem] m-0">{art.desc}</p>
                    <a href={art.video} target='_blank' rel='noopener noreferrer' className="text-xs hover:opacity-70">Lihat video</a>
                    {art.video && (
                      <div className="video-embed"><iframe title={`art-${idx}`} src={getEmbedUrl(art.video)} loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>

        <aside className="sidebar">
          <div className="sidebar-card">
            <h3>Info Singkat</h3>
            <div className="info-row"><div className="info-icon"><HomeIcon size={20} /></div><div><small className="text-[#999] text-xs">RUMAH ADAT</small><strong className="block">{data.details.house.name}</strong></div></div>
            <div className="info-row"><div className="info-icon"><MapPin size={20} /></div><div><small className="text-[#999] text-xs">IBUKOTA</small><strong className="block">{data.capital}</strong></div></div>
            <div className="mt-8 text-left">
              <h4 className="mb-2 text-base">Destinasi Populer</h4>
              <div className="flex flex-wrap gap-2">
                {data.details.tourism.map((t, i) => (
                  <span key={i} className="bg-[#F5F5F5] px-3 py-1.5 rounded text-sm text-[#555]">{t}</span>
                ))}
              </div>
            </div>
            <button
              className="btn btn-primary w-full justify-center mt-8"
              onClick={handleShare}
              aria-label="Bagikan halaman"
            >
              <Share2 size={18} /> {shared ? 'Tautan Disalin' : 'Bagikan'}
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ProvinceDetail;
