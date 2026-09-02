// ============================================
//  WOODEN CLOUDS — Work Page Script
//  Premium interactions & animations
// ============================================

(function() {
    'use strict';
    // ─── Custom Cursor ───────────────────────────
    const cursor   = document.getElementById('cursor');
    const follower = document.getElementById('cursorFollower');
    if (cursor && follower) {
        let mx = 0, my = 0, fx = 0, fy = 0;
        document.addEventListener('mousemove', e => {
            mx = e.clientX; my = e.clientY;
            cursor.style.left   = mx + 'px';
            cursor.style.top    = my + 'px';
        });
        const animateFollower = () => {
            fx += (mx - fx) * 0.1;
            fy += (my - fy) * 0.1;
            follower.style.left = fx + 'px';
            follower.style.top  = fy + 'px';
            requestAnimationFrame(animateFollower);
        };
        animateFollower();
    }

    // ─── Magnetic Buttons ────────────────────────
    document.querySelectorAll('.magnetic').forEach(el => {
        el.addEventListener('mousemove', e => {
            const r = el.getBoundingClientRect();
            const x = (e.clientX - r.left - r.width  / 2) * 0.35;
            const y = (e.clientY - r.top  - r.height / 2) * 0.35;
            el.style.transform = `translate(${x}px,${y}px)`;
        });
        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
        });
    });

    // ─── Navbar ──────────────────────────────────
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 60);
        }, { passive: true });
    }

    // ─── Hamburger ───────────────────────────────
    const ham   = document.getElementById('hamburger');
    const mNav  = document.getElementById('mobileNav');
    if (ham && mNav) {
        ham.addEventListener('click', () => {
            mNav.classList.toggle('open');
        });
        mNav.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => mNav.classList.remove('open'));
        });
    }

    // ─── Scroll Progress ─────────────────────────
    const bar = document.getElementById('scrollProgress');
    if (bar) {
        window.addEventListener('scroll', () => {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            bar.style.width = (window.scrollY / max * 100) + '%';
        }, { passive: true });
    }

    // ─── Intersection Observer for reveal ────────
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal-up').forEach(el => revealObserver.observe(el));

    // ─── Animated Counters ───────────────────────
    let counted = false;
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !counted) {
                counted = true;
                document.querySelectorAll('.counter').forEach(el => {
                    const target = +el.dataset.target;
                    const duration = 2000;
                    const step = target / (duration / 16);
                    let current = 0;
                    const update = () => {
                        current = Math.min(current + step, target);
                        el.textContent = Math.floor(current);
                        if (current < target) requestAnimationFrame(update);
                    };
                    update();
                });
            }
        });
    }, { threshold: 0.5 });
    const statsSection = document.querySelector('.stats-section');
    if (statsSection) counterObserver.observe(statsSection);

    // ─── Project Filtering ───────────────────────
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card[data-cat]');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const filter = btn.dataset.filter;
            projectCards.forEach(card => {
                const cats = card.dataset.cat || '';
                if (filter === 'all' || cats.includes(filter)) {
                    card.classList.remove('filtered-out');
                } else {
                    card.classList.add('filtered-out');
                }
            });
        });
    });

    // ─── Hero Parallax ───────────────────────────
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        const scrolled = window.scrollY;
        const orbs = hero.querySelectorAll('.orb');
        orbs.forEach((orb, i) => {
            const speed = (i + 1) * 0.15;
            orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
        const heroContent = hero.querySelector('.hero-content');
        if (heroContent) heroContent.style.transform = `translateY(${scrolled * 0.1}px)`;
    }, { passive: true });



    // ─── Smooth Anchor Scroll ────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            const target = document.querySelector(a.getAttribute('href'));
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // ─── Editorial Case Study GSAP Animations ────────────────────────
    if (typeof gsap !== 'undefined' && document.querySelector('.ed-hero')) {
        gsap.registerPlugin(ScrollTrigger);

        // ─── Utility: Line/Word Splitter (respects <br> tags) ───────────
        const splitText = (selector) => {
            document.querySelectorAll(selector).forEach(el => {
                // Don't re-process elements already split
                if (el.querySelector('.split-word')) return;
                
                // Grab inner HTML to preserve <br> tags
                const raw = el.innerHTML;
                // Split by <br> tags to get visual lines
                const lines = raw.split(/<br\s*\/?>/gi);
                el.innerHTML = '';
                
                lines.forEach((line, lineIdx) => {
                    // Wrap each line in overflow:hidden container
                    const lineWrap = document.createElement('span');
                    lineWrap.style.display = 'block';
                    lineWrap.style.overflow = 'hidden';
                    
                    // Split words within the line
                    const words = line.trim().split(/\s+/);
                    words.forEach((word, wi) => {
                        const wordWrap = document.createElement('span');
                        wordWrap.style.display = 'inline-block';
                        wordWrap.className = 'split-word';
                        wordWrap.innerText = word;
                        if (wi < words.length - 1) wordWrap.style.marginRight = '0.25em';
                        lineWrap.appendChild(wordWrap);
                    });
                    
                    el.appendChild(lineWrap);
                });
            });
        };
        splitText('.gs-text-reveal');


        // 3. Info Strip Stagger
        gsap.fromTo('.gs-ed-info',
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, scrollTrigger: { trigger: '.ed-info-strip', start: 'top 85%' } }
        );

        // 4. Premium Staggered Fade Ups
        ScrollTrigger.batch('.gs-ed-fade, .gs-koko-slide-left, .gs-koko-slide-right', {
            interval: 0.1,
            batchMax: 4,
            onEnter: batch => gsap.fromTo(batch, 
                { y: 40, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power3.out', overwrite: true }
            ),
            start: 'top 85%',
            once: true
        });

        // 5. Premium Image Reveal & Parallax
        gsap.utils.toArray('.gs-ed-img').forEach(img => {
            // Mask reveal from bottom up
            gsap.fromTo(img,
                { clipPath: 'inset(100% 0% 0% 0%)' },
                { clipPath: 'inset(0% 0% 0% 0%)', duration: 1.5, ease: 'power3.inOut', 
                  scrollTrigger: { trigger: img, start: 'top 85%', once: true } 
                }
            );
            
            // Inner image slight scale down
            const innerImg = img.querySelector('img');
            if (innerImg) {
                gsap.fromTo(innerImg,
                    { scale: 1.15 },
                    { scale: 1, duration: 1.5, ease: 'power3.inOut', 
                      scrollTrigger: { trigger: img, start: 'top 85%', once: true } 
                    }
                );
                // Parallax
                gsap.to(innerImg, {
                    yPercent: 10, ease: 'none',
                    scrollTrigger: { trigger: img, start: 'top bottom', end: 'bottom top', scrub: true }
                });
            }
        });

        // Generalized Text Reveal for other sections
        gsap.utils.toArray('.gs-text-reveal:not(.ed-hero-title)').forEach(el => {
            gsap.fromTo(el.querySelectorAll('.split-word'),
                { y: '100%' },
                { y: '0%', duration: 1.2, stagger: 0.04, ease: 'power4.out',
                  scrollTrigger: { trigger: el, start: 'top 85%', once: true }
                }
            );
        });

        // 6. Koko Glance Cards — Smooth Staggered Scroll Reveal
        const glanceCards = gsap.utils.toArray('.koko-glance-card');
        if (glanceCards.length > 0) {
            ScrollTrigger.batch(glanceCards, {
                start: 'top 85%',
                once: true,
                onEnter: (batch) => {
                    gsap.fromTo(batch,
                        { opacity: 0, y: 35, scale: 0.98 },
                        { 
                            opacity: 1, 
                            y: 0, 
                            scale: 1, 
                            duration: 0.8, 
                            stagger: 0.1, 
                            ease: 'power3.out',
                            overwrite: true
                        }
                    );
                }
            });
        }

        // 7. Screens Reveal
        gsap.utils.toArray('.gs-ed-screen').forEach((screen, i) => {
            gsap.fromTo(screen,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.2, delay: i * 0.1, ease: 'power3.out', scrollTrigger: { trigger: '.ed-screens', start: 'top 70%' } }
            );
        });

        // 7. Timeline Drawing
        const tlTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '.ed-approach',
                start: 'top 60%',
                end: 'center center',
            }
        });
        tlTimeline.to('.ed-timeline-progress', { width: '100%', duration: 1.5, ease: 'power2.inOut' });
        tlTimeline.fromTo('.gs-ed-t-item', 
            { y: 15, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.5, stagger: 0.1 },
            "-=1"
        );

        // 8. KOKO Timeline — Single-path overlay animation
        (function () {
            const grid = document.querySelector('.koko-timeline-desktop .koko-timeline-grid');
            const svg  = document.getElementById('koko-path-svg');
            const mainPath = document.getElementById('koko-main-path');

            let kokoTl = null;

            function initTimeline() {
                if (window.innerWidth <= 900) {
                    // Mobile layout: animate mobile cards sequentially
                    const mobileCards = gsap.utils.toArray('.koko-mobile-card');
                    if (mobileCards.length > 0) {
                        ScrollTrigger.batch(mobileCards, {
                            start: 'top 88%',
                            once: true,
                            onEnter: batch => gsap.fromTo(batch,
                                { opacity: 0, y: 25 },
                                { opacity: 1, y: 0, duration: 0.65, stagger: 0.12, ease: 'power2.out' }
                            )
                        });
                    }
                    return;
                }

                if (!grid || !svg || !mainPath) return;

                const gridRect = grid.getBoundingClientRect();
                const centerCol = grid.querySelector('.koko-grid-col-center');
                if (!centerCol) return;
                const centerRect = centerCol.getBoundingClientRect();
                const cx = centerRect.left - gridRect.left + centerRect.width / 2;

                const headerBlock = grid.querySelector('.koko-header-block');
                if (!headerBlock) return;
                const headerRect  = headerBlock.getBoundingClientRect();
                const startX = headerRect.right - gridRect.left;
                const startY = headerRect.top - gridRect.top + headerRect.height / 2;

                const dots = Array.from(grid.querySelectorAll('.koko-dot:not(#koko-dot-start)'));
                const startDot = grid.querySelector('#koko-dot-start');

                if (startDot) {
                    startDot.style.left = `${startX}px`;
                    startDot.style.top = `${startY}px`;
                    startDot.style.transform = 'translate(-50%, -50%)';
                }

                dots.forEach(dot => {
                    const side = dot.dataset.side;
                    if (side === 'right') {
                        dot.style.left   = '100%';
                        dot.style.top    = '50%';
                        dot.style.transform = 'translate(-50%, -50%)';
                    } else {
                        dot.style.left   = '0%';
                        dot.style.top    = '50%';
                        dot.style.transform = 'translate(-50%, -50%)';
                    }
                });

                grid.offsetHeight;

                const dotData = dots.map(dot => {
                    const dotRect = dot.getBoundingClientRect();
                    return {
                        x: dotRect.left - gridRect.left + dotRect.width  / 2,
                        y: dotRect.top  - gridRect.top  + dotRect.height / 2,
                        el: dot
                    };
                });

                if (dotData.length < 2) return;

                let d = `M ${startX} ${startY}`;
                const p0 = dotData[0];
                const cp1x = startX + (p0.x - startX) * 0.6;
                const cp1y = startY;
                const cp2x = p0.x;
                const cp2y = p0.y - (p0.y - startY) * 0.4;
                d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p0.x} ${p0.y}`;

                for (let i = 0; i < dotData.length - 1; i++) {
                    const curr = dotData[i];
                    const next = dotData[i + 1];
                    const dy = (next.y - curr.y) * 0.5;
                    const cpActive1x = curr.x;
                    const cpActive1y = curr.y + dy;
                    const cpActive2x = next.x;
                    const cpActive2y = next.y - dy;
                    d += ` C ${cpActive1x} ${cpActive1y}, ${cpActive2x} ${cpActive2y}, ${next.x} ${next.y}`;
                }

                mainPath.setAttribute('d', d);
                const pathLen = mainPath.getTotalLength();
                mainPath.style.strokeDasharray  = pathLen;
                mainPath.style.strokeDashoffset = pathLen;

                if (kokoTl) kokoTl.kill();

                kokoTl = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.koko-timeline-section',
                        start: 'top 30%',
                        end: 'bottom 70%',
                        scrub: 1.5,
                    }
                });

                const hdr = grid.querySelector('.koko-header-block');
                kokoTl.fromTo(hdr, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 });

                if (startDot) {
                    kokoTl.fromTo(startDot,
                        { scale: 0, opacity: 0 },
                        { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' },
                        0
                    );
                }

                const getDotT = (dot) => {
                    const steps = 200;
                    let best = 0, bestDist = Infinity;
                    for (let s = 0; s <= steps; s++) {
                        const t = (s / steps) * pathLen;
                        const pt = mainPath.getPointAtLength(t);
                        const dist = Math.hypot(pt.x - dot.x, pt.y - dot.y);
                        if (dist < bestDist) { bestDist = dist; best = t; }
                    }
                    return best / pathLen;
                };

                const dotFractions = dotData.map(dot => getDotT(dot));
                const textBlocks = Array.from(grid.querySelectorAll('.koko-text-block'));
                const totalDur = 10;

                kokoTl.to(mainPath, {
                    strokeDashoffset: 0,
                    duration: totalDur,
                    ease: 'none'
                }, 0);

                dotData.forEach((dot, i) => {
                    const frac = dotFractions[i];
                    const t = frac * totalDur;

                    kokoTl.fromTo(dot.el,
                        { scale: 0, opacity: 0 },
                        { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2)' },
                        Math.max(0, t - 0.2)
                    );

                    if (textBlocks[i]) {
                        kokoTl.fromTo(textBlocks[i],
                            { y: 18, opacity: 0 },
                            { y: 0, opacity: 1, duration: 0.6 },
                            t
                        );
                    }
                });
            }

            requestAnimationFrame(initTimeline);
            let resizeTimer;
            window.addEventListener('resize', () => {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(initTimeline, 200);
            }, { passive: true });
        })();
    }

    // ─── Mobile Companion App Scroll Logic ────────
    const mobileBlocks = document.querySelectorAll('.mobile-feature-block');
    const iphoneScreens = document.querySelectorAll('.mobile-mockup-wrapper img');
    if (mobileBlocks.length > 0 && iphoneScreens.length > 0) {
        const updateActiveBlock = () => {
            const viewportCenter = window.innerHeight / 2;
            let closestIndex = 0;
            let minDistance = Infinity;

            mobileBlocks.forEach((block, index) => {
                const rect = block.getBoundingClientRect();
                const blockCenter = rect.top + rect.height / 2;
                const distance = Math.abs(blockCenter - viewportCenter);

                if (distance < minDistance) {
                    minDistance = distance;
                    closestIndex = index;
                }
            });

            mobileBlocks.forEach((b, i) => {
                if (i === closestIndex) {
                    b.classList.add('active');
                } else {
                    b.classList.remove('active');
                }
            });

            iphoneScreens.forEach((img, i) => {
                if (i === closestIndex) {
                    img.classList.add('active');
                } else {
                    img.classList.remove('active');
                }
            });
        };

        window.addEventListener('scroll', updateActiveBlock, { passive: true });
        window.addEventListener('resize', updateActiveBlock, { passive: true });
        updateActiveBlock();
    }

    // ─── Hero Cinematic Cardamom Explosion ────────────────────
    (function () {
        const heroSection = document.getElementById('koko-hero-section');
        if (!heroSection || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReducedMotion) return;

        let scrollProgress = 0;
        const isMobile = window.innerWidth < 768;
        const dist = isMobile ? 0.45 : 1.0;

        // ── GSAP Pod Explosion ──────────────────────────
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: heroSection,
                start: 'top top',
                end: '+=160%',
                pin: true,
                scrub: 1.2,
                onUpdate: (self) => {
                    scrollProgress = self.progress;
                }
            }
        });

        // 1. Base image
        const baseImg = heroSection.querySelector('.hero-base-img');
        if (baseImg) {
            tl.to(baseImg, {
                scale: 1.15,
                y: 60,
                ease: 'power1.inOut',
                duration: 2
            }, 0);
        }

        // 2. Animate each soft-masked pod outward
        const pods = heroSection.querySelectorAll('.hero-pod');
        pods.forEach((pod, i) => {
            const tx = parseFloat(pod.dataset.tx || 0) * dist;
            const ty = parseFloat(pod.dataset.ty || 0) * dist;
            const r  = parseFloat(pod.dataset.r  || 0);
            const s  = parseFloat(pod.dataset.s  || 1);

            const staggerStart = i % 3 === 0 ? 0 : (i % 3 === 1 ? 0.08 : 0.15);

            tl.to(pod, {
                x: tx,
                y: ty,
                rotation: r,
                scale: s,
                ease: 'power2.inOut',
                duration: 2
            }, staggerStart);
        });

        // 3. Text parallax
        const titleCol = heroSection.querySelector('.ed-hero-title-col');
        if (titleCol) {
            tl.to(titleCol, { y: -120, ease: 'none', duration: 2 }, 0);
            tl.to(titleCol, { opacity: 0, ease: 'power1.in', duration: 0.8 }, 0.6);
        }
        const descCol = heroSection.querySelector('.ed-hero-desc-col');
        if (descCol) {
            tl.to(descCol, { y: -180, ease: 'none', duration: 2 }, 0);
            tl.to(descCol, { opacity: 0, ease: 'power1.in', duration: 0.8 }, 0.7);
        }
    })();


    // ─── Koko CS Section — Slide-In Animation ─────────────
    (function () {
        const csSection = document.getElementById('koko-cs-section');
        if (!csSection || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

        const cards = gsap.utils.toArray('.koko-cs-anim-card');
        if (cards.length < 2) return;

        const header = csSection.querySelector('.koko-cs-header');

        // ── Initial hidden states ─────────────────────────────
        if (header) gsap.set(header, { opacity: 0, y: -24 });
        gsap.set(cards[0], { opacity: 0, x: -80 }); // Challenge: enter from left
        gsap.set(cards[1], { opacity: 0, x:  80 }); // Solution:  enter from right

        // ── Header slides down first ──────────────────────────
        if (header) {
            gsap.to(header, {
                opacity: 1,
                y: 0,
                duration: 0.7,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: csSection,
                    start: 'top 82%',
                    once: true,
                }
            });
        }

        // ── Cards slide in simultaneously, offset stagger ─────
        ScrollTrigger.create({
            trigger: csSection,
            start: 'top 75%',
            once: true,
            onEnter() {
                gsap.to(cards[0], {
                    opacity: 1,
                    x: 0,
                    duration: 0.75,
                    ease: 'power3.out',
                });
                gsap.to(cards[1], {
                    opacity: 1,
                    x: 0,
                    duration: 0.75,
                    ease: 'power3.out',
                    delay: 0.12,   // Slight stagger so left leads right
                });
            }
        });
    })();

    // ─── Koko Phones — Flip-Zone-style Chapter Scroll ────────
    (function () {
        const phonesSection = document.getElementById('koko-phones-section');
        if (!phonesSection || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

        const phoneCards = gsap.utils.toArray('.koko-phone-card');
        const labels = gsap.utils.toArray('.koko-mobile-label');
        if (phoneCards.length !== 4) return;

        const isMobile = () => window.innerWidth <= 768;

        // ── Initial state ─────────────────────────────────────────
        // On mobile: hide all but the first card initially
        // ── Initial state ─────────────────────────────────────────
        function initStates() {
            if (isMobile()) {
                phoneCards.forEach((card, i) => {
                    gsap.set(card, { 
                        opacity: i === 0 ? 1 : 0, 
                        scale: i === 0 ? 1 : 0.96, 
                        y: 0, 
                        pointerEvents: i === 0 ? 'auto' : 'none',
                        visibility: 'visible'
                    });
                });
            } else {
                phoneCards.forEach((card, i) => {
                    if (i === 0) {
                        gsap.set(card, { scale: 1.04, opacity: 1, y: -8, pointerEvents: 'auto', visibility: 'visible' });
                    } else {
                        gsap.set(card, { scale: 0.96, opacity: 0.65, y: 0, pointerEvents: 'auto', visibility: 'visible' });
                    }
                });
            }
            labels.forEach((label, i) => {
                label.classList.toggle('is-active', i === 0);
                gsap.set(label, { opacity: i === 0 ? 1 : 0.45 });
            });
        }

        initStates();

        // ── Master ScrollTrigger timeline — one pin, one scrub ────
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: phonesSection,
                start: 'top top',
                end: '+=150%',
                pin: true,
                pinSpacing: true,
                scrub: 0.2,
                anticipatePin: 1,
                onUpdate(self) {
                    const active = Math.min(3, Math.floor(self.progress * 4));
                    labels.forEach((label, i) => label.classList.toggle('is-active', i === active));
                }
            }
        });

        // ── Chapter transitions ───────────────────────────────────
        const ACTIVE_DESK   = { scale: 1.04, opacity: 1,    y: -8 };
        const INACTIVE_DESK = { scale: 0.96, opacity: 0.65, y: 0  };
        const ACTIVE_MOB    = { scale: 1,    opacity: 1,    y: 0, pointerEvents: 'auto' };
        const INACTIVE_MOB  = { scale: 0.96, opacity: 0,    y: 0, pointerEvents: 'none' };
        const LABEL_ACTIVE   = { opacity: 1 };
        const LABEL_INACTIVE = { opacity: 0.45 };

        const transitions = [
            { from: 0, to: 1 },
            { from: 1, to: 2 },
            { from: 2, to: 3 },
        ];

        transitions.forEach(({ from, to }) => {
            const seg = gsap.timeline();

            if (isMobile()) {
                seg.to(phoneCards[from], { ...INACTIVE_MOB, duration: 1, ease: 'power2.inOut' }, 0);
                seg.to(phoneCards[to],   { ...ACTIVE_MOB,   duration: 1, ease: 'power2.inOut' }, 0);
            } else {
                seg.to(phoneCards[from], { ...INACTIVE_DESK, duration: 1, ease: 'power1.inOut' }, 0);
                seg.to(phoneCards[to],   { ...ACTIVE_DESK,   duration: 1, ease: 'power1.inOut' }, 0);
            }

            // Labels
            seg.to(labels[from], { ...LABEL_INACTIVE, duration: 1, ease: 'power1.inOut' }, 0);
            seg.to(labels[to],   { ...LABEL_ACTIVE,   duration: 1, ease: 'power1.inOut' }, 0);

            tl.add(seg);
        });

        tl.to({}, { duration: 0.05 });

    })();

    // ─── Koko Insights — Premium Scroll Reveal + Hover Grid ───
    (function () {
        const insightsSection = document.getElementById('koko-insights-section');
        if (!insightsSection || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

        const grid = insightsSection.querySelector('.koko-insights-grid');
        const cards = gsap.utils.toArray('.koko-insight-item');
        if (!cards.length) return;

        // ── 1. Staggered Scroll Reveal ─────────────────────────
        // Row 1: cards 0,1,2 — then Row 2: cards 3,4,5
        // Triggered once when the grid enters the viewport.
        // Use a short, subtle ease-out — no drama.
        gsap.set(cards, { opacity: 0, y: 24 });

        // Row 1
        ScrollTrigger.create({
            trigger: grid,
            start: 'top 82%',
            once: true,
            onEnter() {
                gsap.to(cards.slice(0, 3), {
                    opacity: 1, y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    stagger: 0.1,
                });
                // Row 2 follows shortly after
                gsap.to(cards.slice(3, 6), {
                    opacity: 1, y: 0,
                    duration: 0.6,
                    ease: 'power2.out',
                    stagger: 0.1,
                    delay: 0.2,
                });
            }
        });

        // ── 2. Desktop Hover: Neighbour de-emphasis ────────────
        // Adds .has-hover on the grid when any card is entered,
        // which dims all siblings via CSS. No JS opacity loops.
        if (window.innerWidth > 900) {
            cards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    grid.classList.add('has-hover');
                }, { passive: true });
                card.addEventListener('mouseleave', () => {
                    grid.classList.remove('has-hover');
                }, { passive: true });
            });
        }

        // ── 3. Mobile: Scroll-based Focus ─────────────────────
        // No hover on mobile. Instead, as each card scrolls into
        // ~60% of the viewport, subtly lift it into prominence.
        if (window.innerWidth <= 600) {
            cards.forEach(card => {
                const icon = card.querySelector('.koko-insight-icon');
                ScrollTrigger.create({
                    trigger: card,
                    start: 'top 65%',
                    end: 'bottom 35%',
                    onEnter() {
                        gsap.to(card, { scale: 1.015, opacity: 1, duration: 0.35, ease: 'power2.out' });
                        if (icon) gsap.to(icon, { y: -2, scale: 1.05, duration: 0.35, ease: 'power2.out' });
                    },
                    onLeave() {
                        gsap.to(card, { scale: 1, opacity: 0.85, duration: 0.3, ease: 'power2.inOut' });
                        if (icon) gsap.to(icon, { y: 0, scale: 1, duration: 0.3, ease: 'power2.inOut' });
                    },
                    onEnterBack() {
                        gsap.to(card, { scale: 1.015, opacity: 1, duration: 0.35, ease: 'power2.out' });
                        if (icon) gsap.to(icon, { y: -2, scale: 1.05, duration: 0.35, ease: 'power2.out' });
                    },
                    onLeaveBack() {
                        gsap.to(card, { scale: 1, opacity: 0.85, duration: 0.3, ease: 'power2.inOut' });
                        if (icon) gsap.to(icon, { y: 0, scale: 1, duration: 0.3, ease: 'power2.inOut' });
                    },
                });
            });
        }

    })();

    // ─── Key Capabilities Section Animation ───────
    (function () {
        const capsSection = document.getElementById('koko-capabilities');
        if (!capsSection || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

        // Animate the title in first
        const title = capsSection.querySelector('.koko-caps-title');
        if (title) {
            gsap.fromTo(title,
                { opacity: 0, y: 24 },
                {
                    opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
                    scrollTrigger: { trigger: title, start: 'top 90%' }
                }
            );
        }

        // Each row: left name slides from the left, right desc slides from the right
        const rows = gsap.utils.toArray(capsSection.querySelectorAll('.koko-cap-row'));
        if (!rows.length) return;

        // Set initial state
        rows.forEach(row => {
            gsap.set(row.querySelector('.koko-cap-name'), { opacity: 0, x: -30 });
            gsap.set(row.querySelector('.koko-cap-desc'), { opacity: 0, x: 30 });
        });

        // Reveal each row as it enters viewport using batch for smooth sequential flow
        ScrollTrigger.batch(rows, {
            start: 'top 92%',
            batchSize: 3,        // Animate 3 rows at a time for a wave-like effect
            onEnter: (batch) => {
                batch.forEach((row, i) => {
                    const name = row.querySelector('.koko-cap-name');
                    const desc = row.querySelector('.koko-cap-desc');
                    const delay = i * 0.06;

                    gsap.to(name, { opacity: 1, x: 0, duration: 0.55, delay, ease: 'power2.out' });
                    gsap.to(desc, { opacity: 1, x: 0, duration: 0.55, delay: delay + 0.05, ease: 'power2.out' });
                });
            },
            onLeaveBack: (batch) => {
                batch.forEach(row => {
                    gsap.to(row.querySelector('.koko-cap-name'), { opacity: 0, x: -30, duration: 0.3, ease: 'power2.in' });
                    gsap.to(row.querySelector('.koko-cap-desc'), { opacity: 0, x: 30, duration: 0.3, ease: 'power2.in' });
                });
            }
        });
    })();

})();
