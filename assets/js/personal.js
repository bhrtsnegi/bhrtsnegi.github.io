import { INSTAGRAM_URL, personalProfile } from './personalData.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Update Instagram CTA Links
  const instagramLinks = document.querySelectorAll('.instagram-link-target');
  instagramLinks.forEach(link => {
    link.href = INSTAGRAM_URL;
  });

  // 2. Render Hero Subtitle & Intro
  const heroSubtitle = document.getElementById('personal-hero-subtitle');
  if (heroSubtitle && personalProfile.hero) {
    heroSubtitle.textContent = personalProfile.hero.subtitle;
  }

  const introText = document.getElementById('personal-intro-text');
  if (introText && personalProfile.hero) {
    introText.textContent = personalProfile.hero.intro;
  }

  // 3. Render Fitness Story & Goals
  const fitnessGoalsList = document.getElementById('fitness-goals-list');
  if (fitnessGoalsList && personalProfile.fitness && personalProfile.fitness.currentGoals) {
    fitnessGoalsList.innerHTML = personalProfile.fitness.currentGoals
      .map(goal => `<li>${goal}</li>`)
      .join('');
  }

  // 4. Render Gallery Cards with Lightbox Support
  const fitnessGrid = document.getElementById('fitness-gallery-grid');
  let galleryItems = [];

  if (fitnessGrid && personalProfile.fitness && personalProfile.fitness.gallery) {
    galleryItems = personalProfile.fitness.gallery;
    fitnessGrid.innerHTML = galleryItems.map((item, idx) => `
      <div class="photo-card filter-item" data-category="fitness" data-index="${idx}" data-img="${item.image}" data-title="${item.title}" data-caption="${item.caption}">
        <div class="photo-img-wrapper">
          <img src="${item.image}" alt="${item.title}" class="photo-img" loading="lazy">
          <div class="photo-zoom-overlay">
            <div class="zoom-btn"><i class="ti-zoom-in"></i></div>
          </div>
        </div>
        <div class="photo-info">
          <h4 class="photo-title">${item.title}</h4>
          <p class="photo-caption">${item.caption}</p>
        </div>
      </div>
    `).join('');
  }

  // 5. Render Travel Journal & Timeline
  const travelGrid = document.getElementById('travel-grid');
  if (travelGrid && personalProfile.travel && personalProfile.travel.timeline) {
    travelGrid.innerHTML = personalProfile.travel.timeline.map(trip => `
      <div class="travel-card filter-item" data-category="travel">
        <div class="travel-img-wrapper">
          <img src="${trip.coverImage}" alt="${trip.location}" class="travel-img" loading="lazy">
        </div>
        <div class="travel-content">
          <div class="travel-year">${trip.year}</div>
          <h3 class="travel-location">${trip.location}</h3>
          <p>${trip.description}</p>
        </div>
      </div>
    `).join('');
  }

  const travelTimeline = document.getElementById('travel-timeline');
  if (travelTimeline && personalProfile.travel && personalProfile.travel.timeline) {
    travelTimeline.innerHTML = personalProfile.travel.timeline.map(trip => `
      <div class="timeline-node">
        <div class="timeline-dot"></div>
        <div class="travel-year">${trip.year}</div>
        <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--text-main);">${trip.location}</h4>
        <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 0.2rem;">${trip.description}</p>
      </div>
    `).join('');
  }

  // 6. Render Music Cards
  const musicGrid = document.getElementById('music-grid');
  if (musicGrid && personalProfile.music && personalProfile.music.items) {
    musicGrid.innerHTML = personalProfile.music.items.map(item => `
      <div class="glass-card filter-item" data-category="music">
        <div style="font-family: var(--font-heading); font-size: 0.8rem; font-weight: 700; color: var(--accent-rose); margin-bottom: 0.4rem; text-transform: uppercase;">
          ${item.type}
        </div>
        <h3 style="font-size: 1.3rem; margin-bottom: 0.5rem;">${item.title}</h3>
        <p style="font-size: 0.95rem; color: var(--text-muted);">${item.description}</p>
      </div>
    `).join('');
  }

  // 7. Render Lifestyle Interests Grid
  const lifestyleGrid = document.getElementById('lifestyle-grid');
  if (lifestyleGrid && personalProfile.interests) {
    lifestyleGrid.innerHTML = personalProfile.interests.map(interest => `
      <div class="lifestyle-card filter-item" data-category="lifestyle">
        <div class="lifestyle-category">${interest.category}</div>
        <h3 class="lifestyle-name">${interest.name}</h3>
        <p style="font-size: 0.9rem; color: var(--text-muted);">${interest.description}</p>
      </div>
    `).join('');
  }

  // 8. Category Filter Tab Logic
  const filterBtns = document.querySelectorAll('.filter-btn');
  const filterItems = document.querySelectorAll('.filter-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');

      filterItems.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filterVal === 'all' || cat === filterVal) {
          item.style.display = 'block';
          setTimeout(() => { item.style.opacity = '1'; }, 50);
        } else {
          item.style.opacity = '0';
          setTimeout(() => { item.style.display = 'none'; }, 200);
        }
      });
    });
  });

  // 9. Lightbox Modal with Next / Prev Navigation
  const lightboxModal = document.getElementById('photo-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxCloseBtn = document.getElementById('lightbox-close');
  const lightboxPrevBtn = document.getElementById('lightbox-prev');
  const lightboxNextBtn = document.getElementById('lightbox-next');

  let currentPhotoIdx = 0;

  function updateLightboxContent(idx) {
    if (!galleryItems || galleryItems.length === 0) return;
    currentPhotoIdx = (idx + galleryItems.length) % galleryItems.length;
    const item = galleryItems[currentPhotoIdx];

    if (lightboxImg) lightboxImg.src = item.image;
    if (lightboxTitle) lightboxTitle.textContent = item.title;
    if (lightboxCaption) lightboxCaption.textContent = item.caption;
  }

  document.addEventListener('click', (e) => {
    const photoCard = e.target.closest('.photo-card');
    if (photoCard && lightboxModal) {
      const idxStr = photoCard.getAttribute('data-index');
      if (idxStr !== null) {
        updateLightboxContent(parseInt(idxStr, 10));
        lightboxModal.classList.add('active');
      }
    }
  });

  if (lightboxCloseBtn && lightboxModal) {
    lightboxCloseBtn.addEventListener('click', () => {
      lightboxModal.classList.remove('active');
    });

    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
      }
    });
  }

  if (lightboxPrevBtn) {
    lightboxPrevBtn.addEventListener('click', () => {
      updateLightboxContent(currentPhotoIdx - 1);
    });
  }

  if (lightboxNextBtn) {
    lightboxNextBtn.addEventListener('click', () => {
      updateLightboxContent(currentPhotoIdx + 1);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal || !lightboxModal.classList.contains('active')) return;
    if (e.key === 'ArrowLeft') updateLightboxContent(currentPhotoIdx - 1);
    if (e.key === 'ArrowRight') updateLightboxContent(currentPhotoIdx + 1);
    if (e.key === 'Escape') lightboxModal.classList.remove('active');
  });

  // 10. Web Audio API Acoustic Sound Synthesizer
  const playPauseBtn = document.getElementById('play-pause-btn');
  let audioCtx = null;
  let isPlaying = false;

  function playAcousticChord() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const freqs = [261.63, 329.63, 392.00, 523.25]; // C major chord
    freqs.forEach((freq, index) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime + index * 0.12);

      gain.gain.setValueAtTime(0, audioCtx.currentTime + index * 0.12);
      gain.gain.linearRampToValueAtTime(0.15, audioCtx.currentTime + index * 0.12 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + index * 0.12 + 1.5);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start(audioCtx.currentTime + index * 0.12);
      osc.stop(audioCtx.currentTime + index * 0.12 + 1.6);
    });
  }

  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
      isPlaying = !isPlaying;
      const icon = playPauseBtn.querySelector('i');
      if (icon) {
        icon.className = isPlaying ? 'ti-control-pause' : 'ti-control-play';
      }

      if (isPlaying) {
        playAcousticChord();
        setTimeout(() => {
          isPlaying = false;
          if (icon) icon.className = 'ti-control-play';
        }, 1800);
      }
    });
  }
});
