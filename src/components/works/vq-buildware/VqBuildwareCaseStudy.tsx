
// @ts-nocheck
"use client";
import React, { useEffect, useRef } from 'react';
import './vq-styles.css';

export function VqBuildwareCaseStudy() {
  const containerRef = useRef(null);

  useEffect(() => {
    // We execute the script in the context of the component
    try {

      'use strict';

      // NAV
      const nav = document.getElementById('main-nav');
      const collageSectionForNav = document.getElementById('interface-collage');
      const challengesSectionForNav = document.getElementById('challenges-wrapper');

      window.addEventListener('scroll', () => {
        if (!nav) return;
        nav.classList.toggle('scrolled', window.scrollY > 40);

        // Hide nav when in the interface collage section
        if (collageSectionForNav) {
          const rect = collageSectionForNav.getBoundingClientRect();
          // Trigger slightly before reaching the absolute top (80px) to smooth the transition
          const shouldHide = rect.top <= 80 && rect.bottom >= 80;
          nav.classList.toggle('hidden', shouldHide);
        }

        // Dark mode nav for challenges section
        if (challengesSectionForNav) {
          const rect = challengesSectionForNav.getBoundingClientRect();
          // Trigger slightly before reaching the absolute top (80px)
          const shouldBeDark = rect.top <= 80 && rect.bottom >= 80;
          nav.classList.toggle('dark-section', shouldBeDark);
        }
      }, { passive: true });

      // HERO PARALLAX
      const heroBg = document.getElementById('hero-parallax');
      window.addEventListener('scroll', () => {
        const sy = window.scrollY;
        if (sy < window.innerHeight * 1.5) {
          if (heroBg) heroBg.style.transform = 'translateY(' + (sy * 0.35) + 'px)';
        }
      }, { passive: true });

      // REVEAL ON SCROLL
      const reveals = document.querySelectorAll('.reveal');
      const revObs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
      }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
      reveals.forEach(el => revObs.observe(el));

      // CHALLENGES STICKY
      const challengesTrack = document.getElementById('challenges-scroll-track');
      const cSlides = document.querySelectorAll('.challenges-slide');
      const cDots = document.querySelectorAll('.challenges-dot');
      let cCurrent = 0;

      function setChallenge(idx) {
        cSlides[cCurrent].classList.remove('active');
        cDots[cCurrent].classList.remove('active');
        cCurrent = Math.max(0, Math.min(idx, cSlides.length - 1));
        cSlides[cCurrent].classList.add('active');
        cDots[cCurrent].classList.add('active');
      }

      window.addEventListener('scroll', () => {
        if (!challengesTrack) return;
        const rect = challengesTrack.getBoundingClientRect();
        const wrapTop = -rect.top;
        const wrapH = rect.height;
        const vh = window.innerHeight;
        const progress = wrapTop / (wrapH - vh);
        const clamped = Math.max(0, Math.min(progress, 0.999));
        setChallenge(Math.floor(clamped * cSlides.length));
      }, { passive: true });

      // ECOSYSTEM STICKY
      const ecoTrack = document.getElementById('ecosystem');
      const ecoLine = document.getElementById('eco-line');
      const ecoCards = document.querySelectorAll('.eco-card');
      const ecoDots = document.querySelectorAll('[id^="eco-dot-"]');

      window.addEventListener('scroll', () => {
        if (!ecoTrack) return;
        const ecoInner = document.getElementById('eco-inner');
        if (!ecoInner) return;

        const innerRect = ecoInner.getBoundingClientRect();
        const progress = (window.innerHeight / 2 - innerRect.top) / innerRect.height;
        const clampedProgress = Math.max(0, Math.min(progress, 1));

        if (ecoLine) ecoLine.style.height = (clampedProgress * 100) + '%';

        ecoDots.forEach((dot, i) => {
          const dotRect = dot.getBoundingClientRect();
          const isActive = (dotRect.top + dotRect.height / 2) <= (window.innerHeight / 2);
          dot.classList.toggle('active', isActive);
          if (ecoCards[i]) ecoCards[i].classList.toggle('visible', isActive);
        });
      }, { passive: true });

      // KEY CAPABILITIES — IntersectionObserver driven
      const capItems = document.querySelectorAll('.cap-item');
      const capScreens = document.querySelectorAll('.cap-screen');
      let activeCap = 0;

      function switchCap(idx) {
        if (idx === activeCap) return;
        capScreens[activeCap] && capScreens[activeCap].classList.remove('active');
        capItems[activeCap] && capItems[activeCap].classList.remove('active');
        activeCap = Math.max(0, Math.min(idx, capItems.length - 1));
        capScreens[activeCap] && capScreens[activeCap].classList.add('active');
        capItems[activeCap] && capItems[activeCap].classList.add('active');
        // sync slot height
        const slot = document.getElementById('cap-screen-slot');
        const active = document.querySelector('.cap-screen.active');
        if (slot && active) slot.style.minHeight = active.offsetHeight + 'px';
      }
      const capWrapper = document.getElementById('capabilities-wrapper');
      const capList = document.getElementById('capabilities-list');

      window.addEventListener('scroll', () => {
        if (!capWrapper) return;
        const rect = capWrapper.getBoundingClientRect();
        const wrapTop = -rect.top;
        const wrapH = rect.height;
        const vh = window.innerHeight;

        if (wrapTop < 0) {
          capList.style.transform = `translateY(0px)`;
          return;
        }
        if (wrapTop > wrapH - vh) {
          return;
        }

        const progress = Math.max(0, Math.min(wrapTop / (wrapH - vh), 0.999));
        const totalItems = capItems.length;
        const newIdx = Math.floor(progress * totalItems);

        if (newIdx !== activeCap) {
          switchCap(newIdx);
        }

        if (window.innerWidth > 1024) {
          const listHeight = capList.scrollHeight;
          const maxScroll = Math.max(0, listHeight - (vh * 0.6));
          capList.style.transform = `translateY(${-progress * maxScroll}px)`;
        } else {
          const listHeight = capList.scrollHeight;
          const maxScroll = Math.max(0, listHeight - (vh * 0.4));
          capList.style.transform = `translateY(${-progress * maxScroll}px)`;
        }
      }, { passive: true });

      capItems.forEach((item, idx) => {
        item.addEventListener('click', () => {
          switchCap(idx);
        });
      });

      // ═══════════════════════════════════════════════════════
      // BENTO GRID (Static, no JS needed)
      // ═══════════════════════════════════════════════════════



      // Skiper30 Parallax Gallery Logic
      (function () {
        const container = document.getElementById('gallery-container');
        const cols = document.querySelectorAll('.gallery-col');
        if (!container || cols.length !== 4) return;

        let isActive = false;
        let rafId = null;
        let windowHeight = window.innerHeight;
        let currentProgress = 0;
        let targetProgress = 0;

        function lerp(a, b, t) { return a + (b - a) * t; }

        // Listen for resize
        window.addEventListener('resize', () => {
          windowHeight = window.innerHeight;
        }, { passive: true });

        function update() {
          if (!isActive) {
            rafId = null;
            return;
          }

          const rect = container.getBoundingClientRect();
          const totalScroll = rect.height + windowHeight;
          const currentScroll = windowHeight - rect.top;
          targetProgress = currentScroll / totalScroll;
          targetProgress = Math.max(0, Math.min(1, targetProgress));

          currentProgress = lerp(currentProgress, targetProgress, 0.08);

          const multipliers = [2, 3.3, 1.25, 3];

          cols.forEach((col, index) => {
            const distance = windowHeight * multipliers[index];
            const translation = currentProgress * distance;
            col.style.transform = `translateY(${translation}px)`;
          });

          rafId = requestAnimationFrame(update);
        }

        function onScroll() {
          if (!isActive) return;
          if (!rafId) rafId = requestAnimationFrame(update);
        }

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(e => {
            isActive = e.isIntersecting;
            if (isActive && !rafId) {
              rafId = requestAnimationFrame(update);
            }
          });
        }, { threshold: 0, rootMargin: '100px 0px' });

        observer.observe(container);
        window.addEventListener('scroll', onScroll, { passive: true });

        // Initialize
        update();
      })();

    } catch (e) {
      console.error("Error executing VQ Buildware script", e);
    }
  }, []);

  return (
    <div id="vq-buildware-root" ref={containerRef} dangerouslySetInnerHTML={{
      __html: `



  <!-- SECTION 01 — HERO -->
  <section id="hero" aria-label="Hero">
    <div class="hero-bg" id="hero-parallax">
      <img src="/works/vq-buildware/hero_banner.png" alt="VQ Buildware — Construction Commerce building exterior" loading="eager" />
    </div>
    <div class="hero-overlay"></div>
    <div class="hero-content">
      <h1 class="hero-heading">Building the Future of <em>Construction Commerce</em></h1>
      <p class="hero-sub">A comprehensive digital platform transforming how the construction industry discovers,
        connects, and transacts.</p>
      
      <div class="hero-meta reveal reveal-delay-2">
        <div class="hero-meta-item">
          <div class="hero-meta-label">Client</div>
          <div class="hero-meta-value">VQ Buildware</div>
        </div>
        <div class="hero-meta-item">
          <div class="hero-meta-label">Industry</div>
          <div class="hero-meta-value">Construction</div>
        </div>
        <div class="hero-meta-item">
          <div class="hero-meta-label">Location</div>
          <div class="hero-meta-value">Global</div>
        </div>
        <div class="hero-meta-item">
          <div class="hero-meta-label">Platform</div>
          <div class="hero-meta-value">Enterprise web app</div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 02 — INTRODUCTION -->
  <section id="introduction" aria-label="Introduction">
    <div class="container">
      <div class="intro-grid">
        <div class="intro-left">
          <h2 class="reveal">Transforming the Construction Industry Through Digital Innovation</h2>
          <p class="reveal reveal-delay-1">VQ Buildware brings the fragmented construction supply chain into one
            accessible digital platform, helping contractors, retailers, and consumers discover, compare, and procure
            materials with greater clarity and efficiency.</p>
          <p class="reveal reveal-delay-2">By replacing manual processes, disconnected supply chains, and limited
            product visibility, VQ Buildware creates a connected ecosystem where every stakeholder can find exactly what
            they need.</p>
        </div>
        <div class="intro-right reveal reveal-delay-2">
          <div class="intro-image-wrap" id="intro-tablet-wrap">
            <img src="/works/vq-buildware/Tablet mockup.png" id="intro-tablet-img" alt="VQ Buildware platform on tablet" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SECTION 03 — PRODUCT VISION -->
  <section id="product-vision" aria-label="Product Vision">
    <div class="container">
      <div class="vision-inner">
        <div class="vision-phone reveal" id="vision-phone-trigger">
          <img class="vision-phone-img" src="/works/vq-buildware/iphone_mockup.png" alt="VQ Buildware mobile app" loading="lazy"
            id="vision-phone-img" style="border-radius: 0;" />
        </div>
        <div class="vision-content">
          <h2 class="reveal">One Platform. Every Construction Need.</h2>
          <p class="reveal reveal-delay-1">Rather than maintaining separate solutions for contractors, distributors, and
            end customers, VQ Buildware aggregates the entire construction commerce journey through one cohesive
            experience — from product discovery to final purchase.</p>
          <p class="reveal reveal-delay-2">The platform bridges the gap between B2B wholesale operations and retail
            consumer journeys, enabling construction businesses to access exclusive pricing while individuals can shop
            with confidence.</p>
        </div>
      </div>
    </div>
  </section>


  <!-- SECTION 04 — OBJECTIVES -->
  <section id="objectives" aria-label="Objectives">
    <div class="container">
      <div class="objectives-header">
        <h2 class="reveal" style="color: var(--vq-blue);">Objectives</h2>
      </div>
      <div class="objectives-grid">
        <article class="obj-card reveal" tabindex="0">
          <span class="obj-card-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg></span>
          <h3>Create a Connected Marketplace</h3>
          <p>Build a unified digital marketplace that connects contractors, suppliers, retailers, and end customers
            within a single, intuitive platform — eliminating the inefficiencies of fragmented supply chains.</p>
        </article>
        <article class="obj-card reveal reveal-delay-1" tabindex="0">
          <span class="obj-card-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="9" cy="21" r="1"></circle>
              <circle cx="20" cy="21" r="1"></circle>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
            </svg></span>
          <h3>Simplify Construction Commerce</h3>
          <p>Streamline the entire buying journey from material discovery to checkout, making it as straightforward as
            modern e-commerce while meeting the specialized demands of the construction industry.</p>
        </article>
        <article class="obj-card reveal reveal-delay-2" tabindex="0">
          <span class="obj-card-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 3h18v4l-1.5 9h-15L3 7V3z"></path>
              <path d="M3 16h18v5H3z"></path>
              <path d="M12 16v5"></path>
              <path d="M8 16v5"></path>
              <path d="M16 16v5"></path>
            </svg></span>
          <h3>Empower Local Businesses</h3>
          <p>Provide local construction retailers and suppliers with digital tools to expand their reach, manage
            inventory, and compete in an increasingly digital marketplace — without requiring technical expertise.</p>
        </article>
        <article class="obj-card reveal reveal-delay-3" tabindex="0">
          <span class="obj-card-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg></span>
          <h3>Built for Continuous Growth</h3>
          <p>Design a scalable platform architecture capable of expanding categories, geographies, and user types —
            ensuring VQ Buildware remains relevant as the construction industry evolves digitally.</p>
        </article>
      </div>
    </div>
  </section>

  <!-- SECTION 05 — THE CHALLENGES (Sticky Desktop + Mobile Fallback) -->
  <div id="challenges-wrapper" aria-label="The Challenges">
    <!-- Desktop sticky scroll track -->
    <div id="challenges-scroll-track">
      <div id="challenges-sticky">
        <div class="challenges-bg">
          <img src="/works/vq-buildware/Insideshop.png" alt="" aria-hidden="true" loading="lazy" />
        </div>
        <div class="challenges-overlay"></div>

        <!-- Persistent section label -->
        <div class="challenges-section-label">The Challenges</div>

        <div class="challenges-slide active" id="cslide-0">
          <div class="challenges-slide-inner">
            <div>
              <div class="challenge-img-wrap">
                <img src="/works/vq-buildware/Book01.png" alt="Manual inventory ledger" loading="lazy" />
              </div>
            </div>
            <div class="challenge-content-col">
              <h2 class="challenge-heading">Fragmented Buying Experience</h2>
              <p class="challenge-desc">Construction buyers were forced to navigate multiple disconnected vendors,
                catalogues, and pricing structures to procure a single project's materials. There was no central
                reference point — every purchase required manual research, phone calls, and individual negotiations,
                consuming time that should have been spent on actual construction work.</p>
            </div>
          </div>
        </div>

        <div class="challenges-slide" id="cslide-1">
          <div class="challenges-slide-inner">
            <div>
              <div class="challenge-img-wrap">
                <img src="/works/vq-buildware/Insideshop.png" alt="Construction business owner" loading="lazy" />
              </div>
            </div>
            <div class="challenge-content-col">
              <h2 class="challenge-heading">Limited Product Visibility</h2>
              <p class="challenge-desc">Local construction suppliers had limited means to showcase their complete
                product range beyond physical store visits or outdated printed catalogues. Potential customers couldn't
                discover or compare products digitally, resulting in lost sales for businesses and missed opportunities
                for buyers seeking specific materials or brands.</p>
            </div>
          </div>
        </div>

        <div class="challenges-slide" id="cslide-2">
          <div class="challenges-slide-inner">
            <div>
              <div class="challenge-img-wrap">
                <img src="/works/vq-buildware/Books12.png" alt="Digital product information"
                  style="filter: brightness(1.05) contrast(1.02);" loading="lazy" />
              </div>
            </div>
            <div class="challenge-content-col">
              <h2 class="challenge-heading">Information Accessibility</h2>
              <p class="challenge-desc">Critical product specifications, pricing, availability, and supplier details
                were inaccessible or inconsistently presented across the construction market. Contractors and
                individuals alike struggled to make informed purchasing decisions without reliable, up-to-date product
                information readily available at the point of decision.</p>
            </div>
          </div>
        </div>

        <div class="challenges-slide" id="cslide-3">
          <div class="challenges-slide-inner">
            <div>
              <div class="challenge-img-wrap">
                <img src="/works/vq-buildware/Sheets1.png" alt="Manual business operations" loading="lazy" />
              </div>
            </div>
            <div class="challenge-content-col">
              <h2 class="challenge-heading">Manual Business Operations</h2>
              <p class="challenge-desc">Construction retailers and suppliers relied entirely on manual order management,
                paper-based inventory tracking, and offline record-keeping. This operational inefficiency created
                errors, delayed fulfillment, and made it virtually impossible to scale operations or gain meaningful
                business insights from sales data.</p>
            </div>
          </div>
        </div>

        <div class="challenges-progress" id="challenges-dots">
          <button class="challenges-dot active" aria-label="Challenge 1" data-slide="0"></button>
          <button class="challenges-dot" aria-label="Challenge 2" data-slide="1"></button>
          <button class="challenges-dot" aria-label="Challenge 3" data-slide="2"></button>
          <button class="challenges-dot" aria-label="Challenge 4" data-slide="3"></button>
        </div>
      </div>
    </div>

    <!-- Mobile fallback -->
    <div id="challenges-mobile">
      <div class="challenges-mobile-header">
        <h2>The Challenges</h2>
      </div>
      <div class="challenges-mobile-grid">
        <div class="challenge-mobile-card">
          <img src="/works/vq-buildware/Book01.png" alt="Manual ledger" loading="lazy" />
          <div class="challenge-mobile-content">
            <h3>Fragmented Buying Experience</h3>
            <p>Construction buyers were forced to navigate multiple disconnected vendors, catalogues, and pricing
              structures to procure a single project's materials.</p>
          </div>
        </div>
        <div class="challenge-mobile-card">
          <img src="/works/vq-buildware/Insideshop.png" alt="Manual operations" loading="lazy" />
          <div class="challenge-mobile-content">
            <h3>Limited Product Visibility</h3>
            <p>Local construction suppliers had limited means to showcase their complete product range beyond physical
              store visits or outdated printed catalogues.</p>
          </div>
        </div>
        <div class="challenge-mobile-card">
          <img src="/works/vq-buildware/Books12.png" alt="Information access" style="filter: brightness(1.35) contrast(1.1);"
            loading="lazy" />
          <div class="challenge-mobile-content">
            <h3>Information Accessibility</h3>
            <p>Critical product specifications, pricing, availability, and supplier details were inaccessible or
              inconsistently presented across the construction market.</p>
          </div>
        </div>
        <div class="challenge-mobile-card">
          <img src="/works/vq-buildware/Sheets1.png" alt="Manual operations" loading="lazy" />
          <div class="challenge-mobile-content">
            <h3>Manual Business Operations</h3>
            <p>Construction retailers and suppliers relied entirely on manual order management, paper-based inventory
              tracking, and offline record-keeping.</p>
          </div>
        </div>
      </div>
    </div>
  </div>



  <!-- SECTION 08 — DIGITAL ECOSYSTEM -->
  <section id="ecosystem" aria-label="Digital Ecosystem">
    <div class="ecosystem-header">
      <h2 class="reveal">A Digital Ecosystem Designed Around Every Stakeholder</h2>
      <p class="reveal reveal-delay-1">The VQ Buildware platform was architected to serve every participant in the
        construction commerce value chain.</p>
    </div>
    <div class="ecosystem-timeline">
      <div class="eco-inner" id="eco-inner">
        <div class="eco-line-wrap">
          <div class="eco-line-progress" id="eco-line"></div>
        </div>
        <!-- Card 1 -->
        <div class="eco-row">
          <div class="eco-card left" id="eco-card-0">
            <div class="eco-card-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg></div>
            <h3>Customers</h3>
            <p>Individual buyers and contractors access a curated marketplace of construction materials with transparent
              pricing, real-time inventory, and a streamlined checkout experience tailored for both retail and bulk
              needs.</p>
          </div>
          <div class="eco-dot-container">
            <div class="eco-dot" id="eco-dot-0"></div>
          </div>
          <div class="empty-col"></div>
        </div>
        <!-- Card 2 -->
        <div class="eco-row">
          <div class="empty-col"></div>
          <div class="eco-dot-container">
            <div class="eco-dot" id="eco-dot-1"></div>
          </div>
          <div class="eco-card right" id="eco-card-1">
            <div class="eco-card-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line>
                <path
                  d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z">
                </path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg></div>
            <h3>Products</h3>
            <p>A comprehensive product catalogue spanning plumbing, electrical, and construction categories — each with
              detailed specifications, brand information, pricing tiers, and availability status to support confident
              purchasing decisions.</p>
          </div>
        </div>
        <!-- Card 3 -->
        <div class="eco-row">
          <div class="eco-card left" id="eco-card-2">
            <div class="eco-card-icon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 3h18v4l-1.5 9h-15L3 7V3z"></path>
                <path d="M3 16h18v5H3z"></path>
                <path d="M12 16v5"></path>
                <path d="M8 16v5"></path>
                <path d="M16 16v5"></path>
              </svg></div>
            <h3>Retail Shops</h3>
            <p>Local construction retailers gain a digital storefront and operational management tools — enabling them
              to list products, manage orders, track inventory, and reach new customers beyond their physical location.
            </p>
          </div>
          <div class="eco-dot-container">
            <div class="eco-dot" id="eco-dot-2"></div>
          </div>
          <div class="empty-col"></div>
        </div>
      </div>
  </section>

  <!-- SECTION 10 — INTERFACE COLLAGE -->
  <section id="interface-collage" aria-label="Platform Interface Gallery">
    <div class="collage-header-container">
      <h2>Platform Workflows & Interface</h2>
      <p>A seamless experience across all touchpoints.</p>
    </div>
    <div class="bento-container">
      <div class="bento-item">
        <img src="/works/vq-buildware/collage-images/Worker Detail Page.png" alt="Worker Detail Page" loading="lazy">
      </div>
      <div class="bento-item">
        <img src="/works/vq-buildware/collage-images/Tablet mockup.png" alt="Tablet mockup" loading="lazy">
      </div>
      <div class="bento-item bento-contain">
        <img src="/works/vq-buildware/collage-images/screen 1.png" alt="Screen 1" loading="lazy">
      </div>
      <div class="bento-item">
        <img src="/works/vq-buildware/collage-images/Login & Security.png" alt="Login & Security" loading="lazy">
      </div>
      <div class="bento-item">
        <img src="/works/vq-buildware/collage-images/Ongoing Work.png" alt="Ongoing Work" loading="lazy">
      </div>
      <div class="bento-item">
        <img src="/works/vq-buildware/collage-images/Out for Delivery.png" alt="Out for Delivery" loading="lazy">
      </div>
      <div class="bento-item">
        <img src="/works/vq-buildware/collage-images/Wishlist.png" alt="Wishlist" loading="lazy">
      </div>
      <div class="bento-item">
        <img src="/works/vq-buildware/collage-images/Login & Security 2.png" alt="Login & Security 2" loading="lazy">
      </div>
      <div class="bento-item">
        <img src="/works/vq-buildware/collage-images/3.png" alt="Screen 3" loading="lazy">
      </div>
    </div>
  </section>

  <!-- SKIPER30 PARALLAX GALLERY -->
  <section id="skiper-gallery" aria-label="App Interfaces Gallery">

    <!-- Gallery Container -->
    <div class="gallery-container" id="gallery-container">
      <!-- Column 1 -->
      <div class="gallery-col col-1">
        <div class="gallery-item"><img src="/works/vq-buildware/Scroll/Franchise.png" alt="Gallery image"></div>
        <div class="gallery-item"><img src="/works/vq-buildware/Scroll/Login 1.png" alt="Gallery image"></div>
        <div class="gallery-item"><img src="/works/vq-buildware/Scroll/Splash Screen.png" alt="Gallery image"></div>
      </div>
      <!-- Column 2 -->
      <div class="gallery-col col-2">
        <div class="gallery-item"><img src="/works/vq-buildware/Scroll/Subscription Screen.png" alt="Gallery image"></div>
        <div class="gallery-item"><img src="/works/vq-buildware/Scroll/View as Guest.png" alt="Gallery image"></div>
        <div class="gallery-item"><img src="/works/vq-buildware/Scroll/Wallet.png" alt="Gallery image"></div>
      </div>
      <!-- Column 3 -->
      <div class="gallery-col col-3">
        <div class="gallery-item"><img src="/works/vq-buildware/Scroll/Worker Page.png" alt="Gallery image"></div>
        <div class="gallery-item"><img src="/works/vq-buildware/Scroll/Worker.png" alt="Gallery image"></div>
        <div class="gallery-item"><img src="/works/vq-buildware/Scroll/Franchise.png" alt="Gallery image"></div>
      </div>
      <!-- Column 4 -->
      <div class="gallery-col col-4">
        <div class="gallery-item"><img src="/works/vq-buildware/Scroll/Login 1.png" alt="Gallery image"></div>
        <div class="gallery-item"><img src="/works/vq-buildware/Scroll/Subscription Screen.png" alt="Gallery image"></div>
        <div class="gallery-item"><img src="/works/vq-buildware/Scroll/Worker.png" alt="Gallery image"></div>
      </div>
    </div>

  </section>

  <!-- SECTION 09 — KEY CAPABILITIES -->
  <div id="capabilities-wrapper">
    <section id="capabilities" aria-label="Key Capabilities">
      <div class="container">
        <div class="capabilities-header">
          <h2>Key Capabilities</h2>
          <p>A purpose-built platform delivering everything the construction industry needs in one place.</p>
        </div>
        <div class="capabilities-layout">
          <div class="capabilities-list-wrapper">
            <div class="capabilities-list-col" id="capabilities-list">
              <button class="cap-item active" data-cap="0" style="text-align: left; background: none;">
                <div class="cap-item-header">
                  <span class="cap-item-num">01</span>
                  <span class="cap-item-name">Smart Material Discovery</span>
                </div>
                <div class="cap-item-desc-wrapper">
                  <div class="cap-item-desc-inner">
                    <p class="cap-item-desc">An intelligent product discovery system allows users to search, filter, and
                      compare
                      construction materials across categories including plumbing, electrical, and sanitary ware — with
                      brand
                      filtering, price range controls, and location-aware supplier recommendations.</p>
                  </div>
                </div>
              </button>
              <button class="cap-item" data-cap="1" style="text-align: left; background: none;">
                <div class="cap-item-header">
                  <span class="cap-item-num">02</span>
                  <span class="cap-item-name">Intelligent Service Booking</span>
                </div>
                <div class="cap-item-desc-wrapper">
                  <div class="cap-item-desc-inner">
                    <p class="cap-item-desc">Beyond product procurement, VQ Buildware enables customers to discover and
                      book
                      construction services directly through the platform — connecting skilled contractors and service
                      providers
                      with project owners in a streamlined, verified marketplace experience.</p>
                  </div>
                </div>
              </button>
              <button class="cap-item" data-cap="2" style="text-align: left; background: none;">
                <div class="cap-item-header">
                  <span class="cap-item-num">03</span>
                  <span class="cap-item-name">Digital Business Identity</span>
                </div>
                <div class="cap-item-desc-wrapper">
                  <div class="cap-item-desc-inner">
                    <p class="cap-item-desc">Local construction retailers and suppliers receive a complete digital
                      business
                      presence — including branded storefronts, product listings, and customer communication tools —
                      enabling
                      them to establish a credible online identity without requiring dedicated development resources.
                    </p>
                  </div>
                </div>
              </button>
              <button class="cap-item" data-cap="3" style="text-align: left; background: none;">
                <div class="cap-item-header">
                  <span class="cap-item-num">04</span>
                  <span class="cap-item-name">Research & Customer Engagement</span>
                </div>
                <div class="cap-item-desc-wrapper">
                  <div class="cap-item-desc-inner">
                    <p class="cap-item-desc">The platform incorporates rich product research capabilities — detailed
                      specifications, comparison tools, user reviews, and curated buying guides — ensuring customers
                      arrive at
                      purchase decisions with complete confidence and accurate product knowledge.</p>
                  </div>
                </div>
              </button>
              <button class="cap-item" data-cap="4" style="text-align: left; background: none;">
                <div class="cap-item-header">
                  <span class="cap-item-num">05</span>
                  <span class="cap-item-name">Marketplace</span>
                </div>
                <div class="cap-item-desc-wrapper">
                  <div class="cap-item-desc-inner">
                    <p class="cap-item-desc">A dual-mode marketplace simultaneously serves B2B wholesale buyers
                      requiring bulk
                      pricing, GST invoicing, and business checkout alongside retail customers seeking individual
                      products —
                      with seamless switching between purchasing modes within a single platform session.</p>
                  </div>
                </div>
              </button>
              <button class="cap-item" data-cap="5" style="text-align: left; background: none;">
                <div class="cap-item-header">
                  <span class="cap-item-num">06</span>
                  <span class="cap-item-name">Scalable Platform Roadmap</span>
                </div>
                <div class="cap-item-desc-wrapper">
                  <div class="cap-item-desc-inner">
                    <p class="cap-item-desc">VQ Buildware was engineered with a modular architecture supporting
                      continuous
                      expansion — new product categories, additional geographic markets, enhanced supplier tools, and
                      emerging
                      commerce capabilities can be integrated without disrupting the existing platform experience.</p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>




  <!-- SECTION 11 — CONCLUSION -->
  <section id="conclusion" aria-label="Conclusion" style="padding-bottom: calc(var(--section-padding) + 120px);">
    <div class="container">
      <div class="conclusion-header">
        <h2 style="color: black;">Final Perspective</h2>
        <h3>A Unified Future for <span style="color: var(--vq-blue);">Construction Commerce</span></h3>
      </div>
      <div class="conclusion-content">
        <p>VQ Buildware unifies the entire construction journey into a connected, intelligent ecosystem—bringing
          customers, retailers, and professionals onto a single seamless platform. By eliminating fragmentation and
          enabling smarter workflows, it transforms how construction commerce operates at every level. Built for scale
          and continuous innovation, it sets the foundation for a more efficient, transparent, and future-ready
          industry.</p>
      </div>
    </div>
  </section>


  <script>
    'use strict';

    // NAV
    const nav = document.getElementById('main-nav');
    const collageSectionForNav = document.getElementById('interface-collage');
    const challengesSectionForNav = document.getElementById('challenges-wrapper');

    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 40);

      // Hide nav when in the interface collage section
      if (collageSectionForNav) {
        const rect = collageSectionForNav.getBoundingClientRect();
        // Trigger slightly before reaching the absolute top (80px) to smooth the transition
        const shouldHide = rect.top <= 80 && rect.bottom >= 80;
        nav.classList.toggle('hidden', shouldHide);
      }

      // Dark mode nav for challenges section
      if (challengesSectionForNav) {
        const rect = challengesSectionForNav.getBoundingClientRect();
        // Trigger slightly before reaching the absolute top (80px)
        const shouldBeDark = rect.top <= 80 && rect.bottom >= 80;
        nav.classList.toggle('dark-section', shouldBeDark);
      }
    }, { passive: true });

    // HERO PARALLAX
    const heroBg = document.getElementById('hero-parallax');
    window.addEventListener('scroll', () => {
      const sy = window.scrollY;
      if (sy < window.innerHeight * 1.5) {
        heroBg.style.transform = 'translateY(' + (sy * 0.35) + 'px)';
      }
    }, { passive: true });

    // REVEAL ON SCROLL
    const reveals = document.querySelectorAll('.reveal');
    const revObs = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => revObs.observe(el));

    // CHALLENGES STICKY
    const challengesTrack = document.getElementById('challenges-scroll-track');
    const cSlides = document.querySelectorAll('.challenges-slide');
    const cDots = document.querySelectorAll('.challenges-dot');
    let cCurrent = 0;

    function setChallenge(idx) {
      cSlides[cCurrent].classList.remove('active');
      cDots[cCurrent].classList.remove('active');
      cCurrent = Math.max(0, Math.min(idx, cSlides.length - 1));
      cSlides[cCurrent].classList.add('active');
      cDots[cCurrent].classList.add('active');
    }

    window.addEventListener('scroll', () => {
      if (!challengesTrack) return;
      const rect = challengesTrack.getBoundingClientRect();
      const wrapTop = -rect.top;
      const wrapH = rect.height;
      const vh = window.innerHeight;
      const progress = wrapTop / (wrapH - vh);
      const clamped = Math.max(0, Math.min(progress, 0.999));
      setChallenge(Math.floor(clamped * cSlides.length));
    }, { passive: true });

    // ECOSYSTEM STICKY
    const ecoTrack = document.getElementById('ecosystem');
    const ecoLine = document.getElementById('eco-line');
    const ecoCards = document.querySelectorAll('.eco-card');
    const ecoDots = document.querySelectorAll('[id^="eco-dot-"]');

    window.addEventListener('scroll', () => {
      if (!ecoTrack) return;
      const ecoInner = document.getElementById('eco-inner');
      if (!ecoInner) return;

      const innerRect = ecoInner.getBoundingClientRect();
      const progress = (window.innerHeight / 2 - innerRect.top) / innerRect.height;
      const clampedProgress = Math.max(0, Math.min(progress, 1));

      if (ecoLine) ecoLine.style.height = (clampedProgress * 100) + '%';

      ecoDots.forEach((dot, i) => {
        const dotRect = dot.getBoundingClientRect();
        const isActive = (dotRect.top + dotRect.height / 2) <= (window.innerHeight / 2);
        dot.classList.toggle('active', isActive);
        if (ecoCards[i]) ecoCards[i].classList.toggle('visible', isActive);
      });
    }, { passive: true });

    // KEY CAPABILITIES — IntersectionObserver driven
    const capItems = document.querySelectorAll('.cap-item');
    const capScreens = document.querySelectorAll('.cap-screen');
    let activeCap = 0;

    function switchCap(idx) {
      if (idx === activeCap) return;
      capScreens[activeCap] && capScreens[activeCap].classList.remove('active');
      capItems[activeCap] && capItems[activeCap].classList.remove('active');
      activeCap = Math.max(0, Math.min(idx, capItems.length - 1));
      capScreens[activeCap] && capScreens[activeCap].classList.add('active');
      capItems[activeCap] && capItems[activeCap].classList.add('active');
      // sync slot height
      const slot = document.getElementById('cap-screen-slot');
      const active = document.querySelector('.cap-screen.active');
      if (slot && active) slot.style.minHeight = active.offsetHeight + 'px';
    }
    const capWrapper = document.getElementById('capabilities-wrapper');
    const capList = document.getElementById('capabilities-list');

    window.addEventListener('scroll', () => {
      if (!capWrapper) return;
      const rect = capWrapper.getBoundingClientRect();
      const wrapTop = -rect.top;
      const wrapH = rect.height;
      const vh = window.innerHeight;

      if (wrapTop < 0) {
        capList.style.transform = \`translateY(0px)\`;
        return;
      }
      if (wrapTop > wrapH - vh) {
        return;
      }

      const progress = Math.max(0, Math.min(wrapTop / (wrapH - vh), 0.999));
      const totalItems = capItems.length;
      const newIdx = Math.floor(progress * totalItems);

      if (newIdx !== activeCap) {
        switchCap(newIdx);
      }

      if (window.innerWidth > 1024) {
        const listHeight = capList.scrollHeight;
        const maxScroll = Math.max(0, listHeight - (vh * 0.6));
        capList.style.transform = \`translateY(\${-progress * maxScroll}px)\`;
      } else {
        const listHeight = capList.scrollHeight;
        const maxScroll = Math.max(0, listHeight - (vh * 0.4));
        capList.style.transform = \`translateY(\${-progress * maxScroll}px)\`;
      }
    }, { passive: true });

    capItems.forEach((item, idx) => {
      item.addEventListener('click', () => {
        switchCap(idx);
      });
    });

    // ═══════════════════════════════════════════════════════
    // BENTO GRID (Static, no JS needed)
    // ═══════════════════════════════════════════════════════



    // Skiper30 Parallax Gallery Logic
    (function () {
      const container = document.getElementById('gallery-container');
      const cols = document.querySelectorAll('.gallery-col');
      if (!container || cols.length !== 4) return;

      let isActive = false;
      let rafId = null;
      let windowHeight = window.innerHeight;
      let currentProgress = 0;
      let targetProgress = 0;

      function lerp(a, b, t) { return a + (b - a) * t; }

      // Listen for resize
      window.addEventListener('resize', () => {
        windowHeight = window.innerHeight;
      }, { passive: true });

      function update() {
        if (!isActive) {
          rafId = null;
          return;
        }

        const rect = container.getBoundingClientRect();
        const totalScroll = rect.height + windowHeight;
        const currentScroll = windowHeight - rect.top;
        targetProgress = currentScroll / totalScroll;
        targetProgress = Math.max(0, Math.min(1, targetProgress));

        currentProgress = lerp(currentProgress, targetProgress, 0.08);

        const multipliers = [2, 3.3, 1.25, 3];

        cols.forEach((col, index) => {
          const distance = windowHeight * multipliers[index];
          const translation = currentProgress * distance;
          col.style.transform = \`translateY(\${translation}px)\`;
        });

        rafId = requestAnimationFrame(update);
      }

      function onScroll() {
        if (!isActive) return;
        if (!rafId) rafId = requestAnimationFrame(update);
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          isActive = e.isIntersecting;
          if (isActive && !rafId) {
            rafId = requestAnimationFrame(update);
          }
        });
      }, { threshold: 0, rootMargin: '100px 0px' });

      observer.observe(container);
      window.addEventListener('scroll', onScroll, { passive: true });

      // Initialize
      update();
    })();
  </script>
` }} />
  );
}
