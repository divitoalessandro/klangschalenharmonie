/**
 * Klangschalen Harmonie - GDPR Cookie Consent Banner
 * Self-contained implementation with Google Consent Mode V2
 */

(function() {
    'use strict';

    const CONSENT_KEY = 'klangschalenharmonie_consent';

    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }

    // Set default consent state (denied) on page load
    gtag('consent', 'default', {
        'ad_storage': 'denied',
        'ad_user_data': 'denied',
        'ad_personalization': 'denied',
        'analytics_storage': 'denied',
        'wait_for_update': 500
    });

    // Check if consent already given
    function getStoredConsent() {
        try {
            const stored = localStorage.getItem(CONSENT_KEY);
            return stored ? JSON.parse(stored) : null;
        } catch (e) {
            return null;
        }
    }

    // Update Google Consent Mode
    function updateGoogleConsent(consent) {
        gtag('consent', 'update', {
            'analytics_storage': consent.statistics ? 'granted' : 'denied',
            'ad_storage': consent.marketing ? 'granted' : 'denied',
            'ad_user_data': consent.marketing ? 'granted' : 'denied',
            'ad_personalization': consent.marketing ? 'granted' : 'denied'
        });

        // Push consent event to dataLayer
        window.dataLayer.push({
            'event': 'consent_update',
            'consent_data': {
                necessary: consent.necessary,
                statistics: consent.statistics,
                marketing: consent.marketing
            }
        });
    }

    // Save consent to localStorage
    function saveConsent(consent) {
        const consentData = {
            necessary: true,
            statistics: consent.statistics,
            marketing: consent.marketing,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem(CONSENT_KEY, JSON.stringify(consentData));
        updateGoogleConsent(consentData);
        return consentData;
    }

    // Inject CSS
    function injectStyles() {
        const styles = document.createElement('style');
        styles.textContent = `
            /* Cookie Consent Banner */
            .cc-banner {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                z-index: 9999;
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                border-top: 1px solid rgb(231 229 228 / 0.5);
                padding: 1rem 1.5rem;
                animation: cc-slideUp 0.4s ease-out;
            }

            @media (min-width: 640px) {
                .cc-banner {
                    padding: 1.25rem 1.5rem;
                }
            }

            @keyframes cc-slideUp {
                from {
                    transform: translateY(100%);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }

            .cc-banner-inner {
                max-width: 80rem;
                margin: 0 auto;
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            @media (min-width: 768px) {
                .cc-banner-inner {
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;
                    gap: 2rem;
                }
            }

            .cc-banner-content {
                flex: 1;
            }

            .cc-banner-heading {
                font-family: 'Playfair Display', serif;
                font-size: 1.125rem;
                font-weight: 500;
                color: rgb(28 25 23);
                margin: 0 0 0.5rem 0;
            }

            .cc-banner-text {
                font-family: 'Inter', sans-serif;
                font-size: 0.875rem;
                color: rgb(87 83 78);
                margin: 0;
                line-height: 1.5;
            }

            .cc-banner-buttons {
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                gap: 0.75rem;
            }

            .cc-btn {
                font-family: 'Inter', sans-serif;
                font-size: 0.875rem;
                font-weight: 500;
                padding: 0.625rem 1.25rem;
                border-radius: 9999px;
                cursor: pointer;
                transition: all 0.2s ease;
                border: none;
                white-space: nowrap;
            }

            .cc-btn-primary {
                background: rgb(234 88 12);
                color: white;
            }

            .cc-btn-primary:hover {
                background: rgb(194 65 12);
            }

            .cc-btn-secondary {
                background: rgb(245 245 244);
                color: rgb(68 64 60);
                border: 1px solid rgb(231 229 228);
            }

            .cc-btn-secondary:hover {
                background: rgb(231 229 228);
            }

            .cc-btn-link {
                background: none;
                color: rgb(87 83 78);
                padding: 0.625rem 0.75rem;
                display: inline-flex;
                align-items: center;
                gap: 0.375rem;
            }

            .cc-btn-link:hover {
                color: rgb(234 88 12);
            }

            /* Modal */
            .cc-modal-overlay {
                position: fixed;
                inset: 0;
                z-index: 10000;
                background: rgba(28, 25, 23, 0.5);
                backdrop-filter: blur(4px);
                -webkit-backdrop-filter: blur(4px);
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1rem;
                animation: cc-fadeIn 0.2s ease-out;
            }

            @keyframes cc-fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }

            .cc-modal {
                background: white;
                border-radius: 1rem;
                box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
                max-width: 32rem;
                width: 100%;
                max-height: 90vh;
                overflow-y: auto;
                animation: cc-scaleIn 0.2s ease-out;
            }

            @keyframes cc-scaleIn {
                from {
                    transform: scale(0.95);
                    opacity: 0;
                }
                to {
                    transform: scale(1);
                    opacity: 1;
                }
            }

            .cc-modal-header {
                padding: 2rem 2rem 1rem;
                border-bottom: 1px solid rgb(231 229 228 / 0.5);
            }

            .cc-modal-title {
                font-family: 'Playfair Display', serif;
                font-size: 1.5rem;
                font-weight: 500;
                color: rgb(28 25 23);
                margin: 0;
            }

            .cc-modal-body {
                padding: 1.5rem 2rem;
            }

            .cc-category {
                padding: 1rem 0;
                border-bottom: 1px solid rgb(231 229 228 / 0.5);
            }

            .cc-category:last-child {
                border-bottom: none;
            }

            .cc-category-header {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
            }

            .cc-category-info {
                display: flex;
                align-items: center;
                gap: 0.75rem;
            }

            .cc-category-icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 2rem;
                height: 2rem;
                border-radius: 9999px;
                background: rgb(245 245 244);
                color: rgb(87 83 78);
                flex-shrink: 0;
            }

            .cc-category-name {
                font-family: 'Inter', sans-serif;
                font-size: 0.9375rem;
                font-weight: 500;
                color: rgb(28 25 23);
                margin: 0;
            }

            .cc-category-description {
                font-family: 'Inter', sans-serif;
                font-size: 0.8125rem;
                color: rgb(120 113 108);
                margin: 0.5rem 0 0 2.75rem;
                line-height: 1.5;
            }

            /* Toggle Switch */
            .cc-toggle {
                position: relative;
                width: 2.75rem;
                height: 1.5rem;
                flex-shrink: 0;
            }

            .cc-toggle input {
                opacity: 0;
                width: 0;
                height: 0;
            }

            .cc-toggle-slider {
                position: absolute;
                cursor: pointer;
                inset: 0;
                background: rgb(214 211 209);
                border-radius: 9999px;
                transition: 0.2s ease;
            }

            .cc-toggle-slider::before {
                position: absolute;
                content: "";
                height: 1.125rem;
                width: 1.125rem;
                left: 0.1875rem;
                bottom: 0.1875rem;
                background: white;
                border-radius: 9999px;
                transition: 0.2s ease;
                box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
            }

            .cc-toggle input:checked + .cc-toggle-slider {
                background: rgb(234 88 12);
            }

            .cc-toggle input:checked + .cc-toggle-slider::before {
                transform: translateX(1.25rem);
            }

            .cc-toggle input:disabled + .cc-toggle-slider {
                opacity: 0.6;
                cursor: not-allowed;
            }

            .cc-modal-footer {
                padding: 1rem 2rem 2rem;
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }

            .cc-modal-footer-buttons {
                display: flex;
                gap: 0.75rem;
            }

            .cc-modal-footer .cc-btn {
                flex: 1;
            }

            .cc-privacy-link {
                font-family: 'Inter', sans-serif;
                font-size: 0.8125rem;
                color: rgb(120 113 108);
                text-align: center;
                text-decoration: none;
            }

            .cc-privacy-link:hover {
                color: rgb(234 88 12);
                text-decoration: underline;
            }

            .cc-hidden {
                display: none !important;
            }
        `;
        document.head.appendChild(styles);
    }

    // Inject HTML
    function injectHTML() {
        const container = document.createElement('div');
        container.id = 'cookie-consent-container';
        container.innerHTML = `
            <!-- Cookie Banner -->
            <div class="cc-banner" id="cc-banner">
                <div class="cc-banner-inner">
                    <div class="cc-banner-content">
                        <h3 class="cc-banner-heading">Wir respektieren deine Privatsphäre</h3>
                        <p class="cc-banner-text">Diese Website verwendet Cookies, um dein Erlebnis zu verbessern. Du kannst wählen, welche Cookies du akzeptieren möchtest.</p>
                    </div>
                    <div class="cc-banner-buttons">
                        <button class="cc-btn cc-btn-primary" id="cc-accept-all">Alle akzeptieren</button>
                        <button class="cc-btn cc-btn-secondary" id="cc-accept-necessary">Nur notwendige</button>
                        <button class="cc-btn cc-btn-link" id="cc-open-settings">
                            <i data-lucide="settings" style="width: 1rem; height: 1rem;"></i>
                            Einstellungen
                        </button>
                    </div>
                </div>
            </div>

            <!-- Settings Modal -->
            <div class="cc-modal-overlay cc-hidden" id="cc-modal-overlay">
                <div class="cc-modal" role="dialog" aria-labelledby="cc-modal-title">
                    <div class="cc-modal-header">
                        <h2 class="cc-modal-title" id="cc-modal-title">Cookie-Einstellungen</h2>
                    </div>
                    <div class="cc-modal-body">
                        <!-- Necessary -->
                        <div class="cc-category">
                            <div class="cc-category-header">
                                <div class="cc-category-info">
                                    <span class="cc-category-icon">
                                        <i data-lucide="lock" style="width: 1rem; height: 1rem;"></i>
                                    </span>
                                    <h4 class="cc-category-name">Notwendig</h4>
                                </div>
                                <label class="cc-toggle">
                                    <input type="checkbox" checked disabled>
                                    <span class="cc-toggle-slider"></span>
                                </label>
                            </div>
                            <p class="cc-category-description">Erforderlich für grundlegende Websitefunktionen</p>
                        </div>

                        <!-- Statistics -->
                        <div class="cc-category">
                            <div class="cc-category-header">
                                <div class="cc-category-info">
                                    <span class="cc-category-icon">
                                        <i data-lucide="bar-chart-2" style="width: 1rem; height: 1rem;"></i>
                                    </span>
                                    <h4 class="cc-category-name">Statistik</h4>
                                </div>
                                <label class="cc-toggle">
                                    <input type="checkbox" id="cc-statistics">
                                    <span class="cc-toggle-slider"></span>
                                </label>
                            </div>
                            <p class="cc-category-description">Hilft uns zu verstehen, wie Besucher unsere Website nutzen</p>
                        </div>

                        <!-- Marketing -->
                        <div class="cc-category">
                            <div class="cc-category-header">
                                <div class="cc-category-info">
                                    <span class="cc-category-icon">
                                        <i data-lucide="megaphone" style="width: 1rem; height: 1rem;"></i>
                                    </span>
                                    <h4 class="cc-category-name">Marketing</h4>
                                </div>
                                <label class="cc-toggle">
                                    <input type="checkbox" id="cc-marketing">
                                    <span class="cc-toggle-slider"></span>
                                </label>
                            </div>
                            <p class="cc-category-description">Wird verwendet, um relevante Werbung anzuzeigen</p>
                        </div>
                    </div>
                    <div class="cc-modal-footer">
                        <div class="cc-modal-footer-buttons">
                            <button class="cc-btn cc-btn-primary" id="cc-save-settings">Auswahl speichern</button>
                            <button class="cc-btn cc-btn-secondary" id="cc-cancel-settings">Abbrechen</button>
                        </div>
                        <a href="datenschutz.html" class="cc-privacy-link">Datenschutzerklärung</a>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(container);
    }

    // Initialize event handlers
    function initEventHandlers() {
        const banner = document.getElementById('cc-banner');
        const modal = document.getElementById('cc-modal-overlay');
        const statisticsCheckbox = document.getElementById('cc-statistics');
        const marketingCheckbox = document.getElementById('cc-marketing');

        // Accept all
        document.getElementById('cc-accept-all').addEventListener('click', () => {
            saveConsent({ statistics: true, marketing: true });
            hideBanner();
        });

        // Accept necessary only
        document.getElementById('cc-accept-necessary').addEventListener('click', () => {
            saveConsent({ statistics: false, marketing: false });
            hideBanner();
        });

        // Open settings modal
        document.getElementById('cc-open-settings').addEventListener('click', () => {
            modal.classList.remove('cc-hidden');
            document.body.style.overflow = 'hidden';
        });

        // Save settings
        document.getElementById('cc-save-settings').addEventListener('click', () => {
            saveConsent({
                statistics: statisticsCheckbox.checked,
                marketing: marketingCheckbox.checked
            });
            hideModal();
            hideBanner();
        });

        // Cancel settings
        document.getElementById('cc-cancel-settings').addEventListener('click', () => {
            hideModal();
        });

        // Close modal on overlay click
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                hideModal();
            }
        });

        // Close modal on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('cc-hidden')) {
                hideModal();
            }
        });

        function hideBanner() {
            banner.classList.add('cc-hidden');
        }

        function hideModal() {
            modal.classList.add('cc-hidden');
            document.body.style.overflow = '';
        }
    }

    // Initialize Lucide icons in consent elements
    function initIcons() {
        if (typeof lucide !== 'undefined' && lucide.createIcons) {
            lucide.createIcons({
                icons: {
                    'settings': true,
                    'lock': true,
                    'bar-chart-2': true,
                    'megaphone': true
                }
            });
        }
    }

    // Main initialization
    function init() {
        // Check for existing consent
        const existingConsent = getStoredConsent();
        
        if (existingConsent) {
            // Apply stored consent without showing banner
            updateGoogleConsent(existingConsent);
            return;
        }

        // No consent yet - show banner
        injectStyles();
        injectHTML();
        initEventHandlers();
        
        // Initialize icons after a short delay to ensure Lucide is ready
        setTimeout(initIcons, 100);
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
