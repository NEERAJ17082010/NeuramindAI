// ===== Scroll Reveal Animation =====
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('active');
        }
    });
}

// Add reveal class to sections
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.features-grid, .about-container, .contact-container');
    sections.forEach(section => {
        section.classList.add('reveal');
    });
    
    // Trigger initial check
    reveal();
});

window.addEventListener('scroll', reveal);

// ===== Smooth Scroll for Navigation =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== Navbar Background on Scroll =====
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.8)';
        navbar.style.boxShadow = 'none';
    }
});

// ===== Typing Effect for Hero =====
const typedText = document.querySelector('.gradient-text');
const originalText = typedText.textContent;
let charIndex = 0;

function typeEffect() {
    if (charIndex < originalText.length) {
        typedText.textContent = originalText.slice(0, charIndex + 1);
        charIndex++;
        setTimeout(typeEffect, 100);
    }
}

// Start typing after initial animation
setTimeout(() => {
    typedText.textContent = '';
    typeEffect();
}, 1200);

// ===== Mobile Menu Toggle =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        
        // Create mobile menu if not exists
        let mobileMenu = document.querySelector('.mobile-menu');
        
        if (!mobileMenu) {
            mobileMenu = document.createElement('div');
            mobileMenu.className = 'mobile-menu';
            mobileMenu.innerHTML = `
                <ul style="list-style: none; padding: 2rem; background: rgba(10, 10, 15, 0.98); 
                           position: absolute; top: 100%; left: 0; width: 100%; 
                           display: flex; flex-direction: column; gap: 1rem;">
                    <li><a href="#home" style="color: var(--text); text-decoration: none; 
                       font-size: 1.25rem;">Home</a></li>
                    <li><a href="#features" style="color: var(--text); text-decoration: none; 
                       font-size: 1.25rem;">Features</a></li>
                    <li><a href="#about" style="color: var(--text); text-decoration: none; 
                       font-size: 1.25rem;">About</a></li>
                    <li><a href="#contact" style="color: var(--primary); text-decoration: none; 
                       font-size: 1.25rem;">Get Started</a></li>
                </ul>
            `;
            document.querySelector('.navbar').appendChild(mobileMenu);
        } else {
            mobileMenu.style.display = mobileMenu.style.display === 'none' ? 'block' : 'none';
        }
    });
}

// ===== Counter Animation for Stats =====
function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.dataset.suffix || '');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.dataset.suffix || '');
        }
    }, 30);
}

// Animate stats when visible
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent.replace(/[^0-9]/g, ''));
                if (!isNaN(target)) {
                    animateCounter(stat, target);
                }
            });
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ===== Parallax Effect for Orbs =====
document.addEventListener('mousemove', (e) => {
    const orbs = document.querySelectorAll('.gradient-orb');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
    });
});

// ===== Form Submission =====
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = contactForm.querySelector('input[type="email"]').value;
        
        // Show success message
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = '<span>✓ Subscribed!</span>';
        btn.style.background = 'var(--accent)';
        btn.style.color = 'var(--dark)';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            btn.style.color = '';
            contactForm.reset();
        }, 3000);
    });
}

// ===== Feature Cards Hover Sound Effect (Optional) =====
// Uncomment if you want sound effects
/*
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Add subtle visual feedback
        card.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});
*/

// ===== Loading Animation =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// ===== AI Brain Interaction =====
const aiBrain = document.querySelector('.ai-brain');

if (aiBrain) {
    aiBrain.addEventListener('mousemove', (e) => {
        const rect = aiBrain.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        const brainCore = aiBrain.querySelector('.brain-core');
        brainCore.style.transform = `translate(calc(-50% + ${x * 20}px), calc(-50% + ${y * 20}px))`;
    });
    
    aiBrain.addEventListener('mouseleave', () => {
        const brainCore = aiBrain.querySelector('.brain-core');
        brainCore.style.transform = 'translate(-50%, -50%)';
    });
}

// ===== Intersection Observer for Staggered Animations =====
const staggerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.feature-card');
            cards.forEach((card, index) => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    card.style.transition = 'all 0.5s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, index * 100);
            });
            
            staggerObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

const featuresGrid = document.querySelector('.features-grid');
if (featuresGrid) {
    staggerObserver.observe(featuresGrid);
}

console.log('✨ NeuraMind AI - Website Loaded Successfully');

// ===== AI Chatbot Functionality =====
const chatbotToggle = document.getElementById('chatbotToggle');
const chatbot = document.getElementById('chatbot');
const chatbotClose = document.getElementById('chatbotClose');
const chatbotInput = document.getElementById('chatbotInput');
const chatbotSend = document.getElementById('chatbotSend');
const chatbotMessages = document.getElementById('chatbotMessages');

// Toggle chatbot
if (chatbotToggle) {
    chatbotToggle.addEventListener('click', () => {
        chatbot.classList.add('active');
        chatbotToggle.style.display = 'none';
        chatbotInput.focus();
    });
}

// Close chatbot
if (chatbotClose) {
    chatbotClose.addEventListener('click', () => {
        chatbot.classList.remove('active');
        setTimeout(() => {
            chatbotToggle.style.display = 'flex';
        }, 300);
    });
}

// Send message
function sendMessage() {
    const message = chatbotInput.value.trim();
    if (!message) return;
    
    // Add user message
    addMessage(message, 'user');
    chatbotInput.value = '';
    
    // Show typing indicator
    showTyping();
    
    // Simulate AI response
    setTimeout(() => {
        removeTyping();
        const response = getBotResponse(message);
        addMessage(response.text, 'bot', response.quickActions);
    }, 1500);
}

// Add message to chat
function addMessage(text, sender, quickActions = null) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${sender}`;
    
    const avatarSvg = sender === 'bot' 
        ? '<path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>'
        : '<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>';
    
    let content = `<div class="message-content"><p>${text}</p>`;
    
    if (quickActions) {
        content += `<div class="quick-actions">`;
        quickActions.forEach(action => {
            content += `<button class="quick-btn" data-action="${action.action}">${action.label}</button>`;
        });
        content += `</div>`;
    }
    
    content += `</div>`;
    
    messageDiv.innerHTML = `
        <div class="avatar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                ${avatarSvg}
            </svg>
        </div>
        ${content}
    `;
    
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    
    // Add click handlers for quick buttons
    messageDiv.querySelectorAll('.quick-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const action = e.target.dataset.action;
            handleQuickAction(action);
        });
    });
}

// Show typing indicator
function showTyping() {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'chatbot-message bot';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="avatar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
        </div>
        <div class="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;
    chatbotMessages.appendChild(typingDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// Remove typing indicator
function removeTyping() {
    const typingIndicator = document.getElementById('typingIndicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// Get bot response based on user input
function getBotResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    // Navigation responses
    if (lowerMessage.includes('feature') || lowerMessage.includes('capabilities')) {
        return {
            text: "Our AI platform offers incredible features! Would you like to explore them?",
            quickActions: [
                { action: 'features', label: 'View Features' },
                { action: 'pricing', label: 'View Pricing' }
            ]
        };
    }
    
    if (lowerMessage.includes('about') || lowerMessage.includes('who') || lowerMessage.includes('company')) {
        return {
            text: "NeuraMind AI is pioneering the future of artificial intelligence. Learn more about our mission!",
            quickActions: [
                { action: 'about', label: 'About Us' },
                { action: 'contact', label: 'Contact Us' }
            ]
        };
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('start') || lowerMessage.includes('get started')) {
        return {
            text: "Great choice! Sign up now to get started with our 14-day free trial.",
            quickActions: [
                { action: 'contact', label: 'Sign Up Free' },
                { action: 'pricing', label: 'View Plans' }
            ]
        };
    }
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing') || lowerMessage.includes('plan')) {
        return {
            text: "We offer flexible pricing plans to suit your needs. Check out our pricing options!",
            quickActions: [
                { action: 'pricing', label: 'View Pricing' },
                { action: 'contact', label: 'Talk to Sales' }
            ]
        };
    }
    
    if (lowerMessage.includes('help')) {
        return {
            text: "I'm here to help! What would you like to know?",
            quickActions: [
                { action: 'features', label: 'Features' },
                { action: 'pricing', label: 'Pricing' },
                { action: 'contact', label: 'Get Started' }
            ]
        };
    }
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        return {
            text: "Hello! 👋 I'm Neura, your AI assistant. How can I help you today?",
            quickActions: [
                { action: 'features', label: 'View Features' },
                { action: 'about', label: 'About Us' },
                { action: 'contact', label: 'Get Started' }
            ]
        };
    }
    
    // Default response
    return {
        text: "I'd be happy to help you navigate our website. What are you looking for?",
        quickActions: [
            { action: 'features', label: 'Features' },
            { action: 'pricing', label: 'Pricing' },
            { action: 'contact', label: 'Get Started' }
        ]
    };
}

// Handle quick action clicks
function handleQuickAction(action) {
    switch(action) {
        case 'features':
            addMessage('I want to see the features!', 'user');
            showTyping();
            setTimeout(() => {
                removeTyping();
                addMessage('Great! Let me take you to our Features section where you can see all our powerful AI capabilities.', 'bot');
                document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
            }, 1000);
            break;
        case 'about':
            addMessage('Tell me about your company!', 'user');
            showTyping();
            setTimeout(() => {
                removeTyping();
                addMessage('Let me show you our About section!', 'bot');
                document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
            }, 1000);
            break;
        case 'contact':
        case 'signup':
            addMessage('I want to get started!', 'user');
            showTyping();
            setTimeout(() => {
                removeTyping();
                addMessage('Excellent! Let me take you to our signup page. You can start your free trial right away!', 'bot');
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }, 1000);
            break;
        case 'pricing':
            addMessage('Show me the pricing plans.', 'user');
            showTyping();
            setTimeout(() => {
                removeTyping();
                addMessage('Our pricing is flexible and affordable. Scroll down to see our contact section for pricing details!', 'bot');
                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            }, 1000);
            break;
    }
}

// Event listeners for sending messages
if (chatbotSend) {
    chatbotSend.addEventListener('click', sendMessage);
}

if (chatbotInput) {
    chatbotInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}

// Show chatbot toggle with delay
setTimeout(() => {
    if (chatbotToggle && !chatbot.classList.contains('active')) {
        chatbotToggle.style.animation = 'chatbot-pulse 2s infinite';
    }
}, 3000);

