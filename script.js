document.addEventListener('DOMContentLoaded', function() {
    let clickCount = 0;
    const audio = new Audio("./assets/audio/freaky.ogg");
    
    document.getElementById('logoEasterEgg').addEventListener('click', function(e) {
        e.preventDefault();
        clickCount++;    
        if (clickCount === 5) {
            audio.play();
            document.getElementById('equicordLogo').classList.add('spinning');
            setTimeout(() => {
                document.getElementById('equicordLogo').classList.remove('spinning');
                clickCount = 0;
                window.open('https://equicord.org', '_blank');
            }, 800);
        }
    });

    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (link.getAttribute('href').startsWith('http') || 
                link.id === 'support-link' || 
                link.classList.contains('github-link')) {
                return;
            }
            
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                history.pushState(null, null, targetId);
                updateActiveLink(targetId);
            }
        });
    });

    function updateActiveLink(targetId) {
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
        });
        
        const currentLink = document.querySelector(`.nav-links a[href="${targetId}"]`);
        if (currentLink) {
            currentLink.classList.add('active');
        }
    }

    let lastSelectedSection = null;
    let scrollTimeout = null;

    window.addEventListener('scroll', function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(function() {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;
            
            const sections = document.querySelectorAll('h1[id], h2[id], h3[id], .platform-section[id]');
            
            const visibleSections = [];
            
            sections.forEach(section => {
                const rect = section.getBoundingClientRect();
                
                if (rect.bottom < 0 || rect.top > viewportHeight) {
                    return;
                }
                
                const visibleTop = Math.max(0, rect.top);
                const visibleBottom = Math.min(viewportHeight, rect.bottom);
                const visibleHeight = Math.max(0, visibleBottom - visibleTop);
                
                visibleSections.push({
                    section: section,
                    visibleHeight: visibleHeight,
                    distanceFromTop: Math.abs(rect.top),
                    isAtTop: rect.top <= 150 && rect.top >= -150
                });
            });
            
            visibleSections.sort((a, b) => {
                if (a.isAtTop && !b.isAtTop) return -1;
                if (!a.isAtTop && b.isAtTop) return 1;
                
                return b.visibleHeight - a.visibleHeight;
            });
            
            let currentSection = null;
            
            if (visibleSections.length > 0) {
                currentSection = visibleSections[0].section;
                
                if (lastSelectedSection) {
                    const lastSectionInfo = visibleSections.find(s => s.section.id === lastSelectedSection.id);
                    if (lastSectionInfo && 
                        lastSectionInfo.visibleHeight > visibleSections[0].visibleHeight * 0.7) {
                        currentSection = lastSelectedSection;
                    }
                }
            }
            
            if (currentSection) {
                lastSelectedSection = currentSection;
                updateActiveLink('#' + currentSection.id);
            }
        }, 100); 
    });
    
    if (window.location.hash) {
        updateActiveLink(window.location.hash);
        const targetElement = document.querySelector(window.location.hash);
        if (targetElement) {
            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('open');
        });
    }
    
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) {
            const isClickOutside = !sidebar.contains(e.target) && !menuToggle.contains(e.target);
            const isClickOnInteractive = sidebar.contains(e.target) && 
                (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || 
                 e.target.closest('a') || e.target.closest('button'));
                
            if ((isClickOutside || isClickOnInteractive) && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        }
    });
});
