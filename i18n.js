/* ==============================================================================
   MuStreamer - Multilingua i18n (IT / EN / FR / DE / ES / PT / NL / JA)
   Preserva automaticamente i testi originali italiani presenti nell'HTML.
   ============================================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "mustreamer_lang";

  const LANG_META = {
    it: { flag: "🇮🇹", code: "IT", name: "Italiano", aria: "Cambia lingua", menuAria: "Seleziona lingua", pagesAria: "Pagine del sito", pagerAria: "Navigazione pagine", dock: { home: "Home", features: "Funzioni", tools: "Strumenti", community: "Forum", support: "Supporto" } },
    en: { flag: "🇬🇧", code: "EN", name: "English", aria: "Change language", menuAria: "Select language", pagesAria: "Site pages", pagerAria: "Page navigation", dock: { home: "Home", features: "Features", tools: "Tools", community: "Forum", support: "Support" } },
    fr: { flag: "🇫🇷", code: "FR", name: "Français", aria: "Changer de langue", menuAria: "Choisir la langue", pagesAria: "Pages du site", pagerAria: "Navigation des pages", dock: { home: "Accueil", features: "Fonctions", tools: "Outils", community: "Forum", support: "Support" } },
    de: { flag: "🇩🇪", code: "DE", name: "Deutsch", aria: "Sprache ändern", menuAria: "Sprache auswählen", pagesAria: "Seitenmenü", pagerAria: "Seitennavigation", dock: { home: "Start", features: "Features", tools: "Tools", community: "Forum", support: "Support" } },
    es: { flag: "🇪🇸", code: "ES", name: "Español", aria: "Cambiar idioma", menuAria: "Seleccionar idioma", pagesAria: "Páginas del sitio", pagerAria: "Navegación de páginas", dock: { home: "Inicio", features: "Funciones", tools: "Audio", community: "Foro", support: "Soporte" } },
    pt: { flag: "🇵🇹", code: "PT", name: "Português", aria: "Mudar idioma", menuAria: "Selecionar idioma", pagesAria: "Páginas do site", pagerAria: "Navegação de páginas", dock: { home: "Início", features: "Funções", tools: "Áudio", community: "Fórum", support: "Suporte" } },
    nl: { flag: "🇳🇱", code: "NL", name: "Nederlands", aria: "Taal wijzigen", menuAria: "Taal selecteren", pagesAria: "Sitepagina's", pagerAria: "Paginanavigatie", dock: { home: "Home", features: "Functies", tools: "Tools", community: "Forum", support: "Support" } },
    ja: { flag: "🇯🇵", code: "JA", name: "日本語", aria: "言語を変更", menuAria: "言語を選択", pagesAria: "サイトページ", pagerAria: "ページ移動", dock: { home: "ホーム", features: "機能", tools: "計測", community: "掲示板", support: "サポート" } }
  };

  const TRANSLATIONS = {
    "en": {
      "meta.index.title": "MuStreamer 1.2 - Bit-Perfect Audiophile Streaming for Mac, iPhone, Windows & Android",
      "meta.index.desc": "MuStreamer is now available for Mac, iPhone, iPad, Windows 10/11 and Android: 24-bit/192 kHz Bit-Perfect streaming, 3 modes (Pure FLAC, Cloud Direct, Local WAV), Qobuz, TIDAL, 50,000+ Live Radio FLAC, Podcasts and Hi-Fi tools.",
      "meta.privacy.title": "Privacy Policy — MuStreamer",
      "meta.privacy.desc": "MuStreamer Privacy Policy: total respect for your data, zero profiling, credentials safely stored locally on Mac and iPhone.",
      "meta.support.title": "Support & FAQ — MuStreamer",
      "meta.support.desc": "MuStreamer Support Center: frequently asked questions, UPnP connection guide, feedback and contact details.",
      "meta.community.title": "Reviews & Suggestions Forum — MuStreamer",
      "meta.community.desc": "Official MuStreamer Reviews & Suggestions Forum: leave a star review, suggest new Hi-Fi features, and read direct replies from the developer.",
      "nav.features": "Features",
      "nav.tools": "Hi-Fi Tools",
      "nav.story": "Our Story",
      "nav.specs": "Specs",
      "nav.support": "Support",
      "nav.community": "Reviews & Forum",
      "nav.privacy": "Privacy Policy",
      "nav.cta": "Download App",
      "nav.backToApp": "Back to App",
      "hero.badge": "New v1.2 • Now also on Windows &amp; Android!",
      "hero.title": "New life for your Hi-Fi system.<br><span class=\"text-gradient\">Zero sonic compromises.</span>",
      "hero.lead": "MuStreamer is the ultimate audiophile player now available on <strong>Mac, iPhone, iPad, Windows 10/11 and Android</strong>. It combines <strong>Bit-Perfect 24-bit/192 kHz</strong> purity from <strong>Qobuz</strong>, <strong>TIDAL</strong> and <strong>Local Files</strong> with <strong>50,000+ FLAC Live Radios</strong> and <strong>Podcasts</strong>, featuring 3 streaming modes (<em>Pure FLAC</em>, <em>Cloud Direct</em>, <em>Local WAV</em>) for your UPnP streamer.",
      "hero.macCaption": "Download free for Mac",
      "hero.macStore": "Download (.dmg)",
      "hero.iosCaption": "Download on the",
      "hero.discoverBtn": "Explore Features",
      "hero.subtitle": "Available for <strong>macOS 14+</strong>, <strong>iOS &amp; iPadOS 17+</strong>, <strong>Windows 10/11 (64-bit)</strong> and <strong>Android 8.0+</strong> &bull; UPnP / DLNA Bit-Perfect.",
      "hero.macTip": "<strong>Direct install:</strong> <strong>Mac</strong> open the <code>.dmg</code> and drag to Applications (if prompted: <em>System Settings &rarr; Privacy &amp; Security &rarr; Open Anyway</em>) &bull; <strong>Windows</strong> extract the <code>.zip</code> and run <code>mustreamer.exe</code> (SmartScreen: <em>More info &rarr; Run anyway</em>) &bull; <strong>Android</strong> open the <code>.apk</code> file and allow browser installation.",
      "hero.comingSoon": "Available now on <strong>Mac, iPhone, iPad, Windows &amp; Android</strong>!",
      "mockup.title": "MuStreamer — Bit-Perfect Hi-Res Playback (FLAC 24-bit / 192 kHz)",
      "mockup.nowPlaying": "Now Playing • Qobuz Studio Master",
      "mockup.decodeLine": "⚡ Decoding: Local (Mac/iOS Offload) &bull; Output: Bit-Perfect WAV Lossless",
      "mockup.vumeterTitle": "Stereo Analog VU Meter",
      "mockup.newLabel": "New in v1.2",
      "mockup.newRadio": "50,000+ Live Radio &amp; FLAC",
      "mockup.newPodcast": "Podcasts &amp; Daily Episodes",
      "mockup.newLocal": "📁 Local Hi-Res Files",
      "mockup.newEngine": "⚙️ 3 Modes: Pure FLAC • Cloud • WAV",
      "features.badge": "Acoustic Engineering • Apple v1.1 &amp; Win/Android v1.2",
      "features.title": "Built by Audiophiles, for Audiophiles",
      "features.subtitle": "Every source and technology you need to overcome legacy protocol limits and enjoy every musical nuance.",
      "features.newTag": "New in 1.0.1",
      "features.c7Title": "Worldwide Live Radio (50,000+)",
      "features.c7Desc": "Stations from 224 countries and audiophile lossless FLAC streams with live now-playing titles. Save Favorites, set quick P1–P6 Presets, add custom URLs, and export/import .M3U backups.",
      "features.c8Title": "Podcasts &amp; Daily Episodes",
      "features.c8Desc": "Italy and Global charts, instant search, and full-episode streaming on iPhone, Mac, AirPlay, and UPnP streamers with quick -15s / +30s skips and favorite shows.",
      "features.c9Title": "Local Hi-Res Files &amp; Studio Engine",
      "features.c9Desc": "Play FLAC, WAV, AIFF, ALAC, and MP3 files from your device or USB drive/DAC. The new studio panel lets you switch WAV Bit-Perfect, Native FLAC, max sample rate (44.1–192 kHz), and RAM Pre-buffering in one tap.",
      "features.c1Title": "100% Bit-Perfect & Hi-Res",
      "features.c1Desc": "Audio data reaches your stereo without unwanted resampling, bit truncation, or dynamic compression. Sample rates up to 192 kHz and 24-bit depth reproduced true to the master.",
      "features.c2Title": "Smart Local Decoding",
      "features.c2Desc": "If your streamer has an older CPU that struggles with heavy Hi-Res files (such as the 1st-gen Naim Mu-so), you can offload decoding to your Mac or iPhone, sending a lightweight, ultra-stable stream without dropouts.",
      "features.c3Title": "Integrated Qobuz & TIDAL",
      "features.c3Desc": "Complete listening freedom. Browse vast catalogs, Studio Master releases, and your favorite albums and tracks directly without ever leaving the app.",
      "features.c4Title": "Extended UPnP / DLNA Protocol",
      "features.c4Desc": "Instant discovery of network streamers, all-in-ones, and Wi-Fi DACs. Predictive anti-jitter buffering ensures rock-solid continuity even on busy wireless networks.",
      "features.c5Title": "Equalizer & Room Correction",
      "features.c5Desc": "10-band parametric equalizer with audiophile presets or fine-grained customization tailored to your room acoustics.",
      "features.c6Title": "Dark Hi-Fi Interface",
      "features.c6Desc": "Pure elegance in Hi-Fi orange and titanium black. Crisp typography, ultra-high-resolution artwork, and controls designed to feel intuitive and effortless.",
      "signal.badge": "BIT-PERFECT SIGNAL PATH",
      "signal.title": "How MuStreamer eliminates dropouts on Hi-Fi streamers",
      "signal.subtitle": "Compare both audio engine modes in real time: choose between local decoding on your Mac/iPhone or native FLAC pass-through to your streamer's DAC.",
      "signal.modeWav": "⚡ Local WAV (64-Bit DSP)",
      "signal.modeFlac": "📡 Pure FLAC (Pass-Through)",
      "signal.s1Kicker": "Lossless Source",
      "signal.s1Title": "Qobuz • TIDAL • Radio • Files",
      "signal.s1Meta": "Master FLAC up to 24-bit / 192 kHz",
      "signal.s2Kicker": "MuStreamer Engine",
      "signal.s2TitleWav": "Local Decoding + 64-Bit DSP",
      "signal.s2TitleFlac": "FLAC HTTP Pass-Through Bridge",
      "signal.s2MetaWav": "FLAC → PCM/WAV + EQ, Phase &amp; Range Seek",
      "signal.s2MetaFlac": "Byte-for-byte relay with zero RAM recoding",
      "signal.s3Kicker": "LAN / Wi-Fi Transport",
      "signal.s3TitleWav": "Uncompressed Linear WAV",
      "signal.s3TitleFlac": "Compressed Lossless FLAC",
      "signal.s3MetaWav": "~0.2s start • 0% Streamer CPU load",
      "signal.s3MetaFlac": "Lower Wi-Fi bandwidth • DAC decoding",
      "signal.s4Kicker": "Your Hi-Fi System",
      "signal.s4Title": "Naim • UPnP • AirPlay • USB DAC",
      "signal.s4Meta": "100% Bit-Perfect • Zero Resampling",
      "signal.noteBadgeWav": "IDEAL FOR NAIM MU-SO 1ST GEN &amp; 64-BIT DSP",
      "signal.noteBadgeFlac": "IDEAL FOR HI-FI STREAMERS &amp; ETHERNET/WI-FI",
      "signal.noteTextWav": "Offloading FLAC decoding to Mac, iPhone, Windows, or Android sends DAC-ready PCM/WAV with 64-bit parametric EQ and Instant HTTP Range Seek.",
      "signal.noteTextFlac": "Forwards the original FLAC stream byte-for-byte over the local HTTP bridge without RAM buffering: also supports legacy streamers (incl. audio/x-flac for Mu-so 1st Gen).",
      "tools.badge": "Measurement Lab",
      "tools.title": "A Suite of Precision Tools",
      "tools.subtitle": "MuStreamer is more than a player: it integrates genuine acoustic analysis and calibration instruments praised by enthusiasts.",
      "tools.c1Title": "Analog VU Meter",
      "tools.c1Desc": "Response ballistics calibrated to international standards. Monitor real-time RMS levels and dynamic peaks for each stereo channel.",
      "tools.c2Title": "Spectrum Analyzer (RTA)",
      "tools.c2Desc": "Visualize acoustic energy from 20 Hz to over 20,000 Hz. Spot room resonances, bass boom, and high-frequency sparkle.",
      "tools.c3Title": "Listening-Spot SPL Meter",
      "tools.c3Desc": "Measure sound pressure levels in dB(A) and dB(C) directly via your Mac or iPhone microphone to protect your hearing and dial in the ideal volume.",
      "tools.c4Title": "Pink Noise & Tone Generator",
      "tools.c4Desc": "Output pink noise, white noise, or continuous frequency-sweep sine tones (20 Hz to 20 kHz) to calibrate speakers, subwoofers, and channel balance.",
      "story.badge": "Behind the Scenes",
      "story.title": "Why MuStreamer Was Born",
      "story.p1": "As the owner of an All-in-One system with quite a few years behind it (the legendary first-generation <strong>Naim Mu-so</strong>), I have always found its sound quality astonishing for its class. Over time, however, three major limitations stood out:",
      "story.li1": "<strong>No native Qobuz integration</strong>",
      "story.li2": "<strong>Unreliable Wi-Fi stability</strong> for anyone who cannot run an Ethernet cable and has to rely on first-generation Wi-Fi",
      "story.li3": "<strong>An aging internal processor</strong> no longer powerful enough to handle demanding Hi-Res streams smoothly without frustrating dropouts",
      "story.p2": "The only way to stream high-resolution lossless music was through the UPnP protocol. Unfortunately, existing apps on the store proved slow, unstable, visually dated, and stripped down to bare-bones features.",
      "story.p3": "That is why <strong>MuStreamer</strong> was created: a modern, fast application built by someone who genuinely listens to music, designed to meet real audiophile expectations. Inside you will find precision tools such as an <em>analog VU Meter</em>, a <em>real-time spectrum analyzer</em>, an <em>acoustic SPL meter</em> for your listening position, and an <em>audio signal generator</em> (variable test tones plus pink and white noise for calibration). We didn't stop at Qobuz—we also integrated TIDAL so everyone enjoys full freedom of choice.",
      "story.p4": "Moreover, for anyone with streamers or speakers powered by older CPUs, MuStreamer introduces a crucial capability: choosing whether to offload decoding to your Mac or iPhone—completely relieving your stereo of heavy processing—or let the internal DAC decode it. Either way, the stream stays strictly <strong>Bit-Perfect</strong>, guaranteeing the purest sound possible.",
      "story.p5": "I hope MuStreamer gives your systems a second life and solves the very frustrations I experienced firsthand. The app is constantly evolving: for any suggestions, ideas, or bug reports, feel free to use the dedicated feedback section in Settings (all feedback is warmly welcomed! 😊).",
      "story.role": "Creator and Developer of MuStreamer",
      "specs.badge": "Tech Sheet",
      "specs.title": "Compatibility & Specifications",
      "specs.subtitle": "Every architectural detail of the MuStreamer ecosystem.",
      "specs.thParam": "Parameter",
      "specs.thSpec": "Supported Specification",
      "specs.r1Label": "Maximum Resolution",
      "specs.r1Val": "<strong>24-bit / 192 kHz</strong> (Hi-Res Studio Master Bit-Perfect)",
      "specs.r2Label": "Audio Formats",
      "specs.r3Label": "Services &amp; Sources",
      "specs.r3Val": "<strong>Qobuz</strong> (Hi-Res FLAC) &bull; <strong>TIDAL</strong> (Max Hi-Res FLAC) &bull; <strong>50,000+ Live Radio</strong> (incl. FLAC) &bull; <strong>RSS Podcasts</strong> &bull; <strong>Local Files</strong>",
      "specs.r4Label": "Output Protocol",
      "specs.r4Val": "UPnP AV / DLNA MediaRenderer 1.0/2.0, AirPlay &amp; USB/Local DAC (WAV Bit-Perfect / Native FLAC)",
      "specs.r5Label": "Platforms",
      "specs.r5Soon": "🪟 <strong>Windows 10/11 (64-bit)</strong> &bull; 🤖 <strong>Android 8.0+</strong> — Available Now (v1.2)!",
      "specs.r6Label": "Languages &amp; Version",
      "specs.r6Val": "<strong>8 languages</strong> (IT, EN, FR, DE, ES, PT, NL, JA) &bull; <strong>Apple v1.1.0</strong> &bull; <strong>Windows &amp; Android v1.2.0</strong>",
      "footer.home": "Home",
      "footer.privacy": "Privacy Policy",
      "footer.support": "Support & Contact",
      "footer.copy": "&copy; 2026 MuStreamer. All rights reserved.",
      "footer.disclaimer": "<em>Legal & Trademarks Notice:</em> Naim, Mu-so, Qobuz, and TIDAL are registered trademarks of their respective owners and are mentioned here solely for descriptive and hardware/software compatibility purposes. MuStreamer is an independent application crafted by enthusiasts for the Hi-Fi community.",
      "privacy.badge": "Official Document",
      "privacy.title": "Privacy Policy",
      "privacy.updated": "Last updated: November 25, 2026",
      "privacy.s1Title": "1. Our Privacy Philosophy",
      "privacy.s1Text": "MuStreamer was built for lovers of music and high-fidelity sound. We firmly believe your listening habits and personal data belong exclusively to you. For this reason, <strong>MuStreamer DOES NOT collect, store on remote servers, or sell any of your personal data or listening statistics to third parties</strong>.",
      "privacy.s2Title": "2. Streaming Service Credentials (Qobuz & TIDAL)",
      "privacy.s2Intro": "When you sign in to your Qobuz or TIDAL account inside the app:",
      "privacy.s2Li1": "Authentication tokens are exchanged <strong>directly and encrypted (HTTPS / TLS 1.3)</strong> between your device and the official Qobuz or TIDAL servers.",
      "privacy.s2Li2": "Credentials and session tokens are stored securely <strong>exclusively on your device</strong> using the system vault (Apple Keychain on macOS/iOS, Credential Manager on Windows, and Android Keystore with AES-GCM encryption).",
      "privacy.s2Li3": "No login credentials ever pass through proprietary or intermediary servers.",
      "privacy.s3Title": "3. Local Streaming & Home Network (UPnP / DLNA)",
      "privacy.s3Text": "MuStreamer discovers compatible speakers and streamers on your local Wi-Fi or Ethernet network using the standard SSDP / UPnP protocol. This process takes place <strong>entirely within your local network (LAN)</strong> and never sends data or IP addresses externally.",
      "privacy.s4Title": "4. Microphone & SPL Meter Permissions",
      "privacy.s4Text": "The Acoustic SPL Meter requires access to your built-in microphone to measure real-time sound pressure levels (dBA/dBC) at your listening spot. <strong>No audio samples are recorded, saved, or transmitted over the network</strong>: microphone audio is analyzed instantaneously in volatile memory and discarded immediately after measuring decibels.",
      "privacy.s4bTitle": "5. Live Radio, Podcasts & Local Audio Files",
      "privacy.s4bText": "Favorite Radio stations, P1–P6 Presets, custom URLs, and saved Podcasts stay stored exclusively on your device. Audio streams connect directly from your device to the selected broadcaster or RSS feed with no intermediary servers. When opening <strong>Local Audio Files</strong> (FLAC, WAV, AIFF, ALAC, MP3), MuStreamer reads tracks strictly via Apple Sandbox / Files app permissions: no local file is ever uploaded or shared externally.",
      "privacy.s5Title": "6. Zero Tracking & No Third-Party Cookies",
      "privacy.s5Text": "The application contains no advertising trackers, profiling libraries, Google Analytics, or third-party frameworks that collect behavioral metrics.",
      "privacy.s6Title": "7. Privacy Contact",
      "privacy.s6Text": "For any questions, clarifications, or requests regarding this policy, you can contact the development team directly at: <a href=\"mailto:mustreamer@outlook.it\" style=\"color: var(--accent-light); font-weight: 600;\">mustreamer@outlook.it</a> or visit our <a href=\"support.html\" style=\"color: var(--accent-light); text-decoration: underline;\">support page</a>.",
      "support.badge": "Help & Community",
      "support.title": "Support & Frequently Asked Questions",
      "support.subtitle": "Need help with setup or want to share a suggestion? Find answers to common questions and our contact channels below.",
      "support.q1Title": "1. How do I connect my network streamer or Naim Mu-so to MuStreamer?",
      "support.q1Text": "Simply make sure your Mac, iPhone, iPad, Windows PC, or Android device is on the <strong>same Wi-Fi or Ethernet network</strong> as your streamer. MuStreamer scans automatically via multi-NIC SSDP/UPnP (including Naim Mu-so 1st/2nd gen, NDX 2, Linn, Cambridge, WiiM, and DLNA DACs) and shows in Diagnostics whether the streamer uses Ethernet or Wi-Fi.",
      "support.q2Title": "2. How do the 3 modes work: Pure FLAC, Cloud Direct, and Local WAV?",
      "support.q2Text": "From the studio <em>Diagnostics &amp; Audio Engine</em> panel (also reachable from the player on Apple, Windows, and Android), choose among <strong>3 audiophile modes</strong>:<br>&bull; <strong>Local WAV (LPCM Decoding + 64-Bit DSP)</strong>: Decodes FLAC/Hi-Res in RAM, applies 64-bit parametric EQ, Crossfeed and Phase, and streams uncompressed PCM/WAV with Instant HTTP Range Seek.<br>&bull; <strong>Pure FLAC (Streamer Pass-Through)</strong>: Byte-for-byte local HTTP bridge preserving original 24-bit/192 kHz FLAC straight to your streamer.<br>&bull; <strong>Cloud Direct (Zero-Proxy CDN)</strong>: Hands the certified CDN URL straight to compatible streamers with near-zero CPU load.",
      "support.q3Title": "3. Is Bit-Perfect mode always guaranteed?",
      "support.q3Text": "Yes. MuStreamer never applies unrequested software resampling. If a track is mastered at 24-bit / 96 kHz or 24-bit / 192 kHz, the digital audio data is preserved bit for bit all the way to your audio system.",
      "support.q4Title": "4. Which subscriptions are required for Qobuz or TIDAL?",
      "support.q4Text": "You can sign in with your regular Qobuz (Studio/Sublime) or TIDAL (HiFi/Max) subscription. Meanwhile, <strong>50,000+ Live Radio</strong>, <strong>Podcasts</strong>, <strong>Local Audio Files</strong> playback, and the <em>Offline Demo Catalog</em> all work <strong>free with no subscription required</strong>.",
      "support.q5NewTitle": "5. What is new in Apple v1.1 and Windows / Android v1.2?",
      "support.q5NewText": "With <strong>MuStreamer v1.1 (macOS / iOS / iPadOS)</strong> and <strong>v1.2 (Windows 10/11 &amp; Android)</strong> you get:<br>&bull; <strong>Full Windows 10/11 &amp; Android support</strong>: dark Liquid Glass interface, multi-NIC UPnP/DLNA discovery, 3 streaming modes, VU Meters, FFT, 64-bit DSP, and precision <code>&plusmn;5%</code> volume steps.<br>&bull; <strong>Live Radio &amp; Podcasts</strong>: 50,000+ stations from 224 countries (incl. FLAC lossless), 6 Quick Presets P1–P6, <code>.M3U</code> backup/import, and RSS Podcasts with <code>-15s / +30s</code> skips.<br>&bull; <strong>Local Files &amp; Instant Seek</strong>: instant playback of <code>FLAC, WAV, AIFF, ALAC, MP3</code> with HTTP Range Seeking and Ethernet/Wi-Fi telemetry.",
      "support.q5Title": "6. How can I send a suggestion or report an issue?",
      "support.q5Text": "Every piece of feedback from the audiophile community matters! You can send suggestions or bug reports anytime:<br>&bull; Through the <strong>Send Feedback</strong> section in the app's Settings panel.<br>&bull; By emailing us at: <a href=\"mailto:mustreamer@outlook.it\" style=\"color: var(--accent-light); font-weight: 600;\">mustreamer@outlook.it</a>.",
      "support.bannerTitle": "Have more questions or want to talk to us?",
      "support.bannerText": "We promptly reply to every high-fidelity enthusiast.",
      "support.bannerBtn": "Contact Us via Email",
      "community.badge": "Audiophile Community • Forum & Reviews",
      "community.title": "Reviews, Suggestions & Forum",
      "community.subtitle": "A dedicated space for everyday MuStreamer listeners: leave a review for your Hi-Fi setup, propose new features, or start a thread. Every submission triggers an instant email alert to the developer, who replies directly below.",
      "community.ratingMeta": "Hi-Fi Community Rating &bull; Direct Developer Replies",
      "community.appStoreBtn": "★ Also Review on the App Store",
      "community.formTitle": "Write a Review or Suggestion",
      "community.formSubtitle": "Your message is sent in real time via email to Gianluca (MuStreamer's developer) to be published with an official reply.",
      "community.emailAlertTag": "🔔 Email Notification Active",
      "community.lblName": "Your Name or Nickname *",
      "community.lblEmail": "Your Email (to be notified when replied) *",
      "community.lblSetup": "Your Hi-Fi Setup / Streamer (optional)",
      "community.lblCategory": "Post Type",
      "community.catReview": "⭐ Listening Experience Review",
      "community.catSuggestion": "💡 New Feature Suggestion",
      "community.catQuestion": "🎧 Technical Question / UPnP Setup",
      "community.catBug": "🐛 Bug Report",
      "community.lblRating": "Overall Rating",
      "community.lblTitle": "Review or Thread Title *",
      "community.lblMessage": "Your Message *",
      "community.submitBtn": "Post & Notify Developer",
      "community.formPrivacyNote": "Your email is never shown publicly; it is only used to notify you when Gianluca replies.",
      "community.threadsTitle": "Community Discussions & Reviews",
      "community.threadsBadge": "Official Replies Active",
      "community.devBadge": "👨‍💻 Gianluca • Creator & Developer of MuStreamer",
      "community.badgeReview": "⭐ Review",
      "community.badgeSuggestion": "💡 Suggestion",
      "community.t1Date": "Version 1.0.1 &bull; Verified Review",
      "community.t1Title": "Literally saved my 1st-generation Naim Mu-so!",
      "community.t1Body": "With 24-bit/192 kHz Qobuz streams over Wi-Fi, my 1st-gen Mu-so constantly buffered with older UPnP apps. Enabling Bit-Perfect Local WAV Decoding in MuStreamer made playback instant with zero dropouts across 3 hours of listening. The new FLAC Live Radio in 1.0.1 is awesome too!",
      "community.t1Reply": "Thank you so much Marco! That is the exact reason I created MuStreamer: offloading FLAC decoding to your iPhone/Mac CPU and sending pure linear PCM/WAV takes all the load off the 1st-gen Mu-so while keeping the signal 100% Bit-Perfect. Happy listening!",
      "community.t2Date": "Version 1.0.1 &bull; Suggestion &amp; Feedback",
      "community.t2Title": "The analog VU Meters and 50,000+ Live Radio with .M3U backup are fantastic",
      "community.t2Body": "Congrats on the 1.0.1 update: saving 6 quick P1–P6 presets for FLAC radio stations and exporting an .M3U backup between Mac and iPhone is super handy. As a suggestion, it would be great to have every screen fully translated when using my Mac in English.",
      "community.t2Reply": "Thanks a lot Alessandro! Great feedback: we just completed 100% full localization of every single screen, Hi-Fi tool, and technical sheet across all 8 languages (IT, EN, FR, DE, ES, PT, NL, JA) with instant real-time switching.",
      "community.t3Date": "Version 1.0.1 &bull; Verified Review",
      "community.t3Title": "Built-in SPL Meter and Tone Generator: a true Hi-Fi Swiss Army knife",
      "community.t3Body": "Beyond TIDAL Max streaming and local FLAC files from USB, the acoustic tool suite (RTA, SPL Meter, and 20Hz–20kHz sweep) helped me pinpoint a 63 Hz room resonance and tame it with the new Auto-EQ. Truly one of a kind.",
      "community.t3Reply": "So rewarding to read this Davide! Room acoustics account for over 50% of a Hi-Fi system's sound: having an SPL meter, sweep generator, and parametric correction right inside the player is made specifically to tame room modes.",
      "nav.platforms": "Windows &amp; Android",
      "hero.winCaption": "Free for PC",
      "hero.winStore": "Windows (.zip)",
      "hero.andCaption": "Free APK Download",
      "hero.andStore": "Android (.apk)",
      "mockup.newWinAnd": "🪟 Windows 10/11 &amp; 🤖 Android",
      "plat.badge": "Major Release • Complete Ecosystem",
      "plat.title": "Now Available also on <span class=\"text-gradient\">Windows &amp; Android</span>",
      "plat.subtitle": "Bringing the full 24-bit/192 kHz Bit-Perfect engine, 3 audiophile modes, and studio measurement suite to Windows PCs and Android phones &amp; tablets alongside Mac, iPhone, and iPad.",
      "plat.chipWin": "🪟 Windows 10/11 (New v1.2)",
      "plat.chipAnd": "🤖 Android 8.0+ (New v1.2)",
      "plat.winTag": "WINDOWS DESKTOP • 64-BIT",
      "plat.winTitle": "MuStreamer for Windows Desktop",
      "plat.winDesc": "Control your Hi-Fi system directly from a Windows PC with the same dark Liquid Glass interface, multi-NIC SSDP discovery (Ethernet + Wi-Fi), and built-in lossless HTTP audio proxy.",
      "plat.winB1": "3 Modes: <strong>Pure FLAC</strong> (Pass-Through), <strong>Cloud Direct</strong>, and <strong>Local WAV + 64-bit DSP</strong>",
      "plat.winB2": "Automatic multi-adapter LAN/VPN discovery with Ethernet diagnostics &amp; live ping",
      "plat.winB3": "Vintage VU Meters, FFT Spectrum, Dynamic Range (DR), 10-band EQ &amp; desktop Mini-Player",
      "plat.winBtn": "Download Windows v1.2 (.zip)",
      "plat.winReq": "x64 Native • UPnP / DLNA",
      "plat.andTag": "HI-RES ANDROID APP",
      "plat.andTitle": "MuStreamer for Android Phones &amp; Tablets",
      "plat.andDesc": "Carry Qobuz Studio Master, TIDAL Max, 50,000+ FLAC Radio stations, Podcasts, and local files in your pocket with 24-bit/192 kHz Bit-Perfect streaming to Naim Mu-so and any UPnP renderer.",
      "plat.andB1": "Ultra-precise hardware volume steps in <strong>&plusmn;5%</strong> increments &amp; Instant HTTP Range Seek",
      "plat.andB2": "Continuous gapless queue, hi-res artwork, and 6 Quick Radio Presets P1–P6",
      "plat.andB3": "Real-time Wi-Fi jitter monitoring and Ethernet/Wi-Fi streamer link diagnostics",
      "plat.andBtn": "Download Android v1.2 (.apk)",
      "plat.andReq": "Phones &amp; Tablets",
      "signal.modeCloud": "☁️ Cloud Direct CDN",
      "signal.s2TitleCloud": "Direct CDN → Streamer Handover",
      "signal.s2MetaCloud": "Zero local proxy &bull; Certified CDN URL",
      "signal.s3TitleCloud": "Direct HTTPS Stream → DAC",
      "signal.s3MetaCloud": "Minimal app load &bull; Maximum battery life",
      "signal.noteBadgeCloud": "IDEAL FOR MODERN STREAMERS &amp; CONTINUOUS PLAYBACK",
      "signal.noteTextCloud": "Connects your compatible streamer directly to lossless CDN servers, minimizing CPU, battery, and LAN traffic on your phone or PC.",
      "modal.contactBtn": "Request Link / Support",
      "modal.guideBtn": "Guide &amp; FAQ",
      "modal.winTitle": "MuStreamer v1.2 for Windows Desktop",
      "modal.winBody": "The Windows 10/11 (64-bit) v1.2 package downloads directly as a .zip archive: extract all files into a folder and launch mustreamer.exe (if Windows SmartScreen prompts, click More info -> Run anyway). Includes multi-NIC UPnP, 3 Bit-Perfect modes, and Hi-Fi studio tools.",
      "modal.winReqs": "<strong>Requirements:</strong> Windows 10 / 11 (x64) &bull; Local Wi-Fi or Ethernet connection to your UPnP/DLNA streamer",
      "modal.andTitle": "MuStreamer v1.2 for Android",
      "modal.andBody": "Android v1.2 is available as a direct signed .apk download from this website: 24-bit/192 kHz Bit-Perfect streaming to Naim Mu-so &amp; UPnP/DLNA renderers, ±5% volume steps, Instant HTTP Range Seek, 50,000+ FLAC Radios, and live Wi-Fi diagnostics.",
      "modal.andReqs": "<strong>Requirements:</strong> Android 8.0+ (ARM64) &bull; Phone or Tablet on your local Wi-Fi network"
    },
    "fr": {
      "meta.index.title": "MuStreamer 1.2 - Streaming Audiophile Bit-Perfect pour Mac, iPhone, Windows & Android",
      "meta.index.desc": "MuStreamer est désormais disponible sur Mac, iPhone, iPad, Windows 10/11 et Android : streaming Bit-Perfect 24-bit/192 kHz, 3 modes (FLAC Pur, Cloud Direct, WAV Local), Qobuz, TIDAL, 50 000+ Radios FLAC, Podcasts et outils Hi-Fi.",
      "meta.privacy.title": "Politique de Confidentialité — MuStreamer",
      "meta.privacy.desc": "Politique de confidentialité de MuStreamer : respect total des données, aucun pistage, identifiants stockés localement sur Mac et iPhone.",
      "meta.support.title": "Support & FAQ — MuStreamer",
      "meta.support.desc": "Centre d'aide MuStreamer : questions fréquentes, guide de connexion UPnP, commentaires et contacts.",
      "meta.community.title": "Avis & Forum Suggestions — MuStreamer",
      "meta.community.desc": "Forum officiel Avis et Suggestions de MuStreamer : laissez un avis étoilé, proposez des fonctions Hi-Fi et lisez les réponses directes du développeur.",
      "nav.features": "Fonctionnalités",
      "nav.tools": "Outils Hi-Fi",
      "nav.story": "Notre Histoire",
      "nav.specs": "Spécifications",
      "nav.support": "Support",
      "nav.community": "Avis & Forum",
      "nav.privacy": "Confidentialité",
      "nav.cta": "Télécharger l'App",
      "nav.backToApp": "Retour à l'App",
      "hero.badge": "Nouveau v1.2 • Aussi sur Windows &amp; Android !",
      "hero.title": "Une nouvelle vie pour votre Hi-Fi.<br><span class=\"text-gradient\">Zéro compromis sonore.</span>",
      "hero.lead": "MuStreamer est le lecteur audiophile ultime désormais disponible sur <strong>Mac, iPhone, iPad, Windows 10/11 et Android</strong>. Il associe la pureté <strong>Bit-Perfect 24-bit/192 kHz</strong> de <strong>Qobuz</strong>, <strong>TIDAL</strong> et <strong>Fichiers Locaux</strong> à <strong>50 000+ Radios FLAC</strong> et <strong>Podcasts</strong>, avec 3 modes (<em>FLAC Pur</em>, <em>Cloud Direct</em>, <em>WAV Local</em>).",
      "hero.macCaption": "Gratuit pour Mac",
      "hero.macStore": "Télécharger (.dmg)",
      "hero.iosCaption": "Télécharger dans",
      "hero.discoverBtn": "Découvrir les Fonctions",
      "hero.subtitle": "Disponible sur <strong>macOS 14+</strong>, <strong>iOS &amp; iPadOS 17+</strong>, <strong>Windows 10/11 (64-bit)</strong> et <strong>Android 8.0+</strong> &bull; UPnP / DLNA Bit-Perfect.",
      "hero.macTip": "<strong>Installation directe :</strong> <strong>Mac</strong> ouvrez le <code>.dmg</code> et glissez dans Applications (si demandé : <em>Réglages Système &rarr; Confidentialité &rarr; Ouvrir quand même</em>) &bull; <strong>Windows</strong> extrayez le <code>.zip</code> et lancez <code>mustreamer.exe</code> (SmartScreen : <em>Informations complémentaires &rarr; Exécuter quand même</em>) &bull; <strong>Android</strong> ouvrez le fichier <code>.apk</code> et autorisez l'installation.",
      "hero.comingSoon": "Disponible dès maintenant sur <strong>Mac, iPhone, iPad, Windows &amp; Android</strong> !",
      "mockup.title": "MuStreamer — Lecture Hi-Res Bit-Perfect (FLAC 24-bit / 192 kHz)",
      "mockup.nowPlaying": "En cours • Qobuz Studio Master",
      "mockup.decodeLine": "⚡ Décodage : Local (Mac/iOS Offload) &bull; Sortie : Bit-Perfect WAV Lossless",
      "mockup.vumeterTitle": "VU-Mètre Analogique Stéréo",
      "mockup.newLabel": "Nouveau v1.2",
      "mockup.newRadio": "50 000+ Radios Live &amp; FLAC",
      "mockup.newPodcast": "Podcasts &amp; Épisodes du Jour",
      "mockup.newLocal": "📁 Fichiers Locaux Hi-Res",
      "mockup.newEngine": "⚙️ 3 Modes : FLAC Pur • Cloud • WAV",
      "features.badge": "Ingénierie Acoustique • Apple v1.1 &amp; Win/Android v1.2",
      "features.title": "Conçu par et pour des Audiophiles",
      "features.subtitle": "Toutes les sources et technologies pour dépasser les limites des anciens protocoles et savourer chaque nuance musicale.",
      "features.newTag": "Nouveau 1.0.1",
      "features.c7Title": "Radios Live du Monde (50 000+)",
      "features.c7Desc": "Stations de 224 pays et flux audiophiles FLAC lossless avec titres en direct. Enregistrez vos Favoris, réglez 6 Préréglages P1–P6, ajoutez des URL personnalisées et exportez/importez vos sauvegardes .M3U.",
      "features.c8Title": "Podcasts &amp; Épisodes du Jour",
      "features.c8Desc": "Classements Italie et Monde, recherche instantanée et lecture intégrale des épisodes sur iPhone, Mac, AirPlay et streamers UPnP avec sauts rapides -15s / +30s et émissions favorites.",
      "features.c9Title": "Fichiers Locaux Hi-Res &amp; Moteur Studio",
      "features.c9Desc": "Lisez vos fichiers FLAC, WAV, AIFF, ALAC et MP3 depuis votre appareil ou clé/DAC USB. Le nouveau panneau studio règle en un geste WAV Bit-Perfect, FLAC Natif, fréquence max (44,1–192 kHz) et Pré-buffering RAM.",
      "features.c1Title": "100% Bit-Perfect & Hi-Res",
      "features.c1Desc": "Les données audio arrivent à votre chaîne sans rééchantillonnage, troncature de bits ni compression dynamique. Jusqu'à 192 kHz / 24 bits fidèles à l'original.",
      "features.c2Title": "Décodage Local Intelligent",
      "features.c2Desc": "Si votre lecteur possède un processeur plus lent face aux gros fichiers (comme le Naim Mu-so 1re gén.), confiez le décodage au Mac ou à l'iPhone et diffusez un flux fluide et ultra-stable sans coupures.",
      "features.c3Title": "Qobuz & TIDAL Intégrés",
      "features.c3Desc": "Liberté d'écoute totale. Accédez directement à d'immenses catalogues, nouveautés Studio Master et favoris sans quitter l'application.",
      "features.c4Title": "Protocole UPnP / DLNA Étendu",
      "features.c4Desc": "Détection instantanée des lecteurs réseau, tout-en-un et DAC Wi-Fi. Tampon prédictif anti-jitter pour garantir la continuité même en Wi-Fi.",
      "features.c5Title": "Égaliseur & Correction audio",
      "features.c5Desc": "Égaliseur paramétrique 10 bandes avec préréglages audiophiles ou réglage millimétré adapté à l'acoustique de votre pièce.",
      "features.c6Title": "Interface Hi-Fi Dark",
      "features.c6Desc": "Élégance pure en orange Hi-Fi et noir titane. Typographie soignée, pochettes haute résolution et commandes fluides et intuitives.",
      "signal.badge": "SIGNAL PATH BIT-PERFECT",
      "signal.title": "Comment MuStreamer supprime les coupures sur les streamers Hi-Fi",
      "signal.subtitle": "Comparez les deux modes du moteur audio en temps réel : choisissez entre le décodage local sur Mac/iPhone ou le FLAC natif vers le DAC du streamer.",
      "signal.modeWav": "⚡ WAV Local (DSP 64-Bit)",
      "signal.modeFlac": "📡 FLAC Pur (Pass-Through)",
      "signal.s1Kicker": "Source Lossless",
      "signal.s1Title": "Qobuz • TIDAL • Radio • Fichiers",
      "signal.s1Meta": "Master FLAC jusqu'à 24-bit / 192 kHz",
      "signal.s2Kicker": "Moteur MuStreamer",
      "signal.s2TitleWav": "Décodage Local + DSP 64-Bit",
      "signal.s2TitleFlac": "Pont HTTP FLAC Pass-Through",
      "signal.s2MetaWav": "FLAC → PCM/WAV + EQ, Phase &amp; Range Seek",
      "signal.s2MetaFlac": "Pont bit-à-bit sans réencodage RAM",
      "signal.s3Kicker": "Transport Réseau LAN / Wi-Fi",
      "signal.s3TitleWav": "WAV Linéaire Bit-Perfect",
      "signal.s3TitleFlac": "FLAC Lossless Compressé",
      "signal.s3MetaWav": "Démarrage ~0,2s • CPU Streamer 0 %",
      "signal.s3MetaFlac": "Bande Wi-Fi réduite • Décodage DAC",
      "signal.s4Kicker": "Votre Système Hi-Fi",
      "signal.s4Title": "Naim • UPnP • AirPlay • DAC USB",
      "signal.s4Meta": "100 % Bit-Perfect • Zéro Rééchantillonnage",
      "signal.noteBadgeWav": "IDÉAL POUR NAIM MU-SO 1RE GÉN. &amp; DSP 64-BIT",
      "signal.noteBadgeFlac": "IDÉAL POUR STREAMERS HI-FI &amp; ETHERNET/WI-FI",
      "signal.noteTextWav": "Décode le FLAC sur Mac, iPhone, Windows ou Android pour envoyer du PCM/WAV prêt pour le DAC avec EQ paramétrique 64-bit et Seek Instantané HTTP Range.",
      "signal.noteTextFlac": "Transmet le flux FLAC original bit-à-bit via le pont HTTP local sans tampon RAM (y compris audio/x-flac pour Naim Mu-so 1re gén.).",
      "tools.badge": "Laboratoire de Mesure",
      "tools.title": "Une Suite d'Outils de Précision",
      "tools.subtitle": "MuStreamer est plus qu'un lecteur : il intègre de véritables instruments d'analyse et de calibration acoustique.",
      "tools.c1Title": "VU-Mètre Analogique",
      "tools.c1Desc": "Balistique calibrée selon les standards internationaux. Surveillez en temps réel le niveau RMS et les crêtes dynamiques de chaque canal.",
      "tools.c2Title": "Analyseur de Spectre (RTA)",
      "tools.c2Desc": "Visualisez l'énergie sonore de 20 Hz à plus de 20 000 Hz. Identifiez les résonances de pièce, traînées de graves et brillance des aigus.",
      "tools.c3Title": "Sonomètre SPL au Point d'Écoute",
      "tools.c3Desc": "Mesurez la pression acoustique en dB(A) et dB(C) via le microphone du Mac ou de l'iPhone pour préserver votre audition et trouver le volume idéal.",
      "tools.c4Title": "Générateur Bruit Rose & Tonalités",
      "tools.c4Desc": "Émettez du bruit rose, bruit blanc ou des sinusoïdes à fréquence variable (20 Hz à 20 kHz) pour calibrer enceintes, caisson et balance.",
      "story.badge": "Dans les coulisses",
      "story.title": "Pourquoi MuStreamer est né",
      "story.p1": "Utilisateur d'un système Tout-en-Un ayant déjà quelques années (le mythique <strong>Naim Mu-so</strong> de première génération), j'ai toujours trouvé sa restitution sonore bluffante pour sa catégorie. Avec le temps, trois limites majeures sont toutefois apparues :",
      "story.li1": "<strong>L'absence d'intégration native avec Qobuz</strong>",
      "story.li2": "<strong>Une stabilité réseau capricieuse</strong> pour ceux qui, sans câble Ethernet, dépendent du Wi-Fi de première génération",
      "story.li3": "<strong>Un processeur interne devenu trop juste</strong> pour gérer de manière fluide les flux Hi-Res lourds sans coupures gênantes",
      "story.p2": "Le seul moyen de lire de la musique haute résolution était le protocole UPnP. Malheureusement, les applications disponibles se révélaient lentes, instables, datées graphiquement et très limitées.",
      "story.p3": "C'est ainsi qu'est née <strong>MuStreamer</strong> : une application moderne, rapide et pensée par un passionné pour répondre aux vraies exigences audiophiles. Elle intègre des outils de précision tels qu'un <em>VU-Mètre analogique</em>, un <em>analyseur de spectre en temps réel</em>, un <em>sonomètre acoustique</em> et un <em>générateur de signaux audio</em> (tonalités variables, bruit rose et blanc). Nous avons également intégré TIDAL en plus de Qobuz pour une totale liberté de choix.",
      "story.p4": "De plus, pour les appareils dotés d'un CPU plus ancien, MuStreamer permet de déléguer le décodage au Mac ou à l'iPhone — soulageant entièrement la chaîne stéréo — ou de le laisser au DAC interne. Dans les deux cas, le flux reste rigoureusement <strong>Bit-Perfect</strong>.",
      "story.p5": "J'espère que MuStreamer redonnera une nouvelle jeunesse à vos systèmes. L'app évolue sans cesse : pour toute idée ou remarque, utilisez la section dédiée dans les Réglages (chaque retour est bienvenu ! 😊).",
      "story.role": "Créateur et Développeur de MuStreamer",
      "specs.badge": "Fiche Technique",
      "specs.title": "Compatibilité & Spécifications",
      "specs.subtitle": "Tous les détails techniques de l'écosystème MuStreamer.",
      "specs.thParam": "Paramètre",
      "specs.thSpec": "Spécification Supportée",
      "specs.r1Label": "Résolution Maximale",
      "specs.r1Val": "<strong>24-bit / 192 kHz</strong> (Hi-Res Studio Master Bit-Perfect)",
      "specs.r2Label": "Formats Audio",
      "specs.r3Label": "Services &amp; Sources",
      "specs.r3Val": "<strong>Qobuz</strong> (Hi-Res FLAC) &bull; <strong>TIDAL</strong> (Max Hi-Res FLAC) &bull; <strong>50 000+ Radios Live</strong> (dont FLAC) &bull; <strong>Podcasts RSS</strong> &bull; <strong>Fichiers Locaux</strong>",
      "specs.r4Label": "Protocole de Sortie",
      "specs.r4Val": "UPnP AV / DLNA MediaRenderer 1.0/2.0, AirPlay et DAC USB/Local (WAV Bit-Perfect / FLAC Natif)",
      "specs.r5Label": "Plateformes",
      "specs.r5Soon": "🪟 <strong>Windows 10/11 (64-bit)</strong> &bull; 🤖 <strong>Android 8.0+</strong> — Disponibles dès maintenant (v1.2) !",
      "specs.r6Label": "Langues &amp; Version",
      "specs.r6Val": "<strong>8 langues</strong> (IT, EN, FR, DE, ES, PT, NL, JA) &bull; <strong>Apple v1.1.0</strong> &bull; <strong>Windows &amp; Android v1.2.0</strong>",
      "footer.home": "Accueil",
      "footer.privacy": "Confidentialité",
      "footer.support": "Support & Contacts",
      "footer.copy": "&copy; 2026 MuStreamer. Tous droits réservés.",
      "footer.disclaimer": "<em>Mentions Légales & Marques :</em> Naim, Mu-so, Qobuz et TIDAL sont des marques déposées de leurs propriétaires respectifs, citées uniquement à titre descriptif et de compatibilité. MuStreamer est une application indépendante créée par des passionnés pour la communauté Hi-Fi.",
      "privacy.badge": "Document Officiel",
      "privacy.title": "Politique de Confidentialité",
      "privacy.updated": "Dernière mise à jour : 25 Novembre 2026",
      "privacy.s1Title": "1. Notre philosophie sur la vie privée",
      "privacy.s1Text": "MuStreamer est conçue pour les amoureux de musique et de haute fidélité. Vos habitudes d'écoute et données personnelles vous appartiennent exclusivement. Ainsi, <strong>MuStreamer NE collecte, NE stocke sur aucun serveur distant et NE vend aucune donnée personnelle ou statistique d'écoute à des tiers</strong>.",
      "privacy.s2Title": "2. Identifiants des Services de Streaming (Qobuz & TIDAL)",
      "privacy.s2Intro": "Lorsque vous vous connectez à votre compte Qobuz ou TIDAL :",
      "privacy.s2Li1": "Les jetons d'authentification sont échangés <strong>directement et de façon chiffrée (HTTPS / TLS 1.3)</strong> avec les serveurs officiels de Qobuz ou TIDAL.",
      "privacy.s2Li2": "Vos identifiants restent <strong>exclusivement sur votre appareil</strong> via le coffre-fort système (Trousseau Apple sur macOS/iOS, Credential Manager sur Windows et Android Keystore chiffré AES-GCM).",
      "privacy.s2Li3": "Aucune donnée de connexion ne transite par des serveurs intermédiaires.",
      "privacy.s3Title": "3. Streaming Local et Réseau Domestique (UPnP / DLNA)",
      "privacy.s3Text": "MuStreamer détecte vos enceintes sur votre réseau Wi-Fi ou Ethernet local via SSDP / UPnP. Ce processus s'effectue <strong>uniquement sur votre réseau local (LAN)</strong> sans aucun envoi vers l'extérieur.",
      "privacy.s4Title": "4. Microphone et Sonomètre (SPL Meter)",
      "privacy.s4Text": "Le Sonomètre utilise le microphone intégré pour calculer en temps réel la pression acoustique (dBA/dBC). <strong>Aucun son n'est enregistré, sauvegardé ou transmis</strong> : l'analyse s'effectue en mémoire vive et est effacée immédiatement.",
      "privacy.s4bTitle": "5. Radios Live, Podcasts et Fichiers Audio Locaux",
      "privacy.s4bText": "Vos radios favorites, préréglages P1–P6, URL personnalisées et podcasts enregistrés restent stockés exclusivement sur votre appareil. Les flux audio sont lus directement depuis la station ou le flux RSS choisi, sans serveur intermédiaire. Lorsque vous ouvrez des <strong>Fichiers Audio Locaux</strong> (FLAC, WAV, AIFF, ALAC, MP3), MuStreamer les lit uniquement via les autorisations sécurisées Sandbox Apple / app Fichiers : aucun fichier local n'est jamais envoyé à l'extérieur.",
      "privacy.s5Title": "6. Aucun Pistage ni Cookie Tiers",
      "privacy.s5Text": "L'application ne contient aucun traceur publicitaire, outil de profilage ni bibliothèque tierce d'analyse comportementale.",
      "privacy.s6Title": "7. Contact Confidentialité",
      "privacy.s6Text": "Pour toute question concernant cette politique, écrivez-nous à : <a href=\"mailto:mustreamer@outlook.it\" style=\"color: var(--accent-light); font-weight: 600;\">mustreamer@outlook.it</a> ou consultez notre <a href=\"support.html\" style=\"color: var(--accent-light); text-decoration: underline;\">page d'assistance</a>.",
      "support.badge": "Assistance & Communauté",
      "support.title": "Support & Foire Aux Questions",
      "support.subtitle": "Besoin d'aide pour configurer l'application ou une suggestion à partager ? Retrouvez ici les réponses aux questions courantes.",
      "support.q1Title": "1. Comment connecter mon lecteur réseau ou Naim Mu-so à MuStreamer ?",
      "support.q1Text": "Assurez-vous que votre Mac, iPhone, iPad, PC Windows ou appareil Android est sur le <strong>même réseau Wi-Fi ou Ethernet</strong> que le streamer. MuStreamer analyse automatiquement le réseau via SSDP/UPnP multi-cartes et indique dans le diagnostic si le streamer est relié en Ethernet ou Wi-Fi.",
      "support.q2Title": "2. Comment fonctionnent les 3 modes : FLAC Pur, Cloud Direct et WAV Local ?",
      "support.q2Text": "Dans le panneau <em>Diagnostic &amp; Moteur Audio</em> (sur Apple, Windows et Android), choisissez parmi <strong>3 modes audiophiles</strong> :<br>&bull; <strong>WAV Local (PCM + DSP 64-Bit)</strong> : Décode en RAM, applique l'EQ 64-bit, Crossfeed et Phase, et diffuse du WAV non compressé avec Seek Instantané HTTP Range.<br>&bull; <strong>FLAC Pur (Pass-Through)</strong> : Pont HTTP local bit-à-bit préservant le flux FLAC 24-bit/192 kHz jusqu'au streamer.<br>&bull; <strong>Cloud Direct (Zéro-Proxy)</strong> : Envoie l'URL CDN directement aux streamers compatibles.",
      "support.q3Title": "3. Le mode Bit-Perfect est-il toujours garanti ?",
      "support.q3Text": "Oui. MuStreamer n'applique aucun rééchantillonnage logiciel non sollicité. Les morceaux 24-bit / 96 kHz ou 192 kHz restent intacts bit pour bit.",
      "support.q4Title": "4. Quels abonnements faut-il pour Qobuz ou TIDAL ?",
      "support.q4Text": "Vous pouvez vous connecter avec votre abonnement Qobuz (Studio/Sublime) ou TIDAL (HiFi/Max). Les <strong>50 000+ Radios Live</strong>, les <strong>Podcasts</strong>, la lecture de <strong>Fichiers Audio Locaux</strong> et le <em>Catalogue Démo Hors-Ligne</em> fonctionnent quant à eux <strong>gratuitement et sans abonnement</strong>.",
      "support.q5NewTitle": "5. Quelles sont les nouveautés Apple v1.1 et Windows / Android v1.2 ?",
      "support.q5NewText": "Avec <strong>MuStreamer v1.1 (macOS / iOS / iPadOS)</strong> et <strong>v1.2 (Windows 10/11 &amp; Android)</strong> :<br>&bull; <strong>Support complet Windows 10/11 &amp; Android</strong> : interface Liquid Glass sombre, UPnP/DLNA multi-interfaces, 3 modes audio, Vumètres, FFT, DSP 64-bit et paliers de volume <code>&plusmn;5%</code>.<br>&bull; <strong>Radios Live &amp; Podcasts</strong> : 50 000+ stations (dont FLAC lossless), 6 présélections P1–P6, import/export <code>.M3U</code> et Podcasts RSS.<br>&bull; <strong>Fichiers Locaux &amp; Seek Instantané</strong> : lecture directe <code>FLAC, WAV, AIFF, ALAC, MP3</code> avec Seek HTTP Range et télémétrie Ethernet/Wi-Fi.",
      "support.q5Title": "6. Comment envoyer une suggestion ou signaler un problème ?",
      "support.q5Text": "Vos retours sont précieux !<br>&bull; Via la section <strong>Envoyer un avis</strong> dans les Réglages de l'application.<br>&bull; Par email à : <a href=\"mailto:mustreamer@outlook.it\" style=\"color: var(--accent-light); font-weight: 600;\">mustreamer@outlook.it</a>.",
      "support.bannerTitle": "D'autres questions ou envie d'échanger ?",
      "support.bannerText": "Nous répondons rapidement à chaque passionné de haute fidélité.",
      "support.bannerBtn": "Nous contacter par Email",
      "community.badge": "Communauté Audiophile • Forum & Avis",
      "community.title": "Avis, Suggestions & Forum",
      "community.subtitle": "Un espace dédié aux utilisateurs quotidiens de MuStreamer : partagez votre avis sur votre système Hi-Fi, proposez des idées ou ouvrez une discussion. Chaque message envoie une alerte e-mail immédiate au développeur qui vous répond ici.",
      "community.ratingMeta": "Note Communauté Hi-Fi &bull; Réponses directes du développeur",
      "community.appStoreBtn": "★ Noter aussi sur l'App Store",
      "community.formTitle": "Écrire un Avis ou une Suggestion",
      "community.formSubtitle": "Votre message est envoyé en temps réel par e-mail à Gianluca (développeur de MuStreamer) pour publication avec réponse officielle.",
      "community.emailAlertTag": "🔔 Alerte E-mail Active",
      "community.lblName": "Votre Nom ou Pseudo *",
      "community.lblEmail": "Votre E-mail (pour être prévenu de la réponse) *",
      "community.lblSetup": "Votre Système Hi-Fi / Streamer (optionnel)",
      "community.lblCategory": "Type de Contribution",
      "community.catReview": "⭐ Avis d'Écoute",
      "community.catSuggestion": "💡 Suggestion de Fonctionnalité",
      "community.catQuestion": "🎧 Question Technique / Setup UPnP",
      "community.catBug": "🐛 Signalement d'Anomalie",
      "community.lblRating": "Note Globale",
      "community.lblTitle": "Titre de l'Avis ou du Sujet *",
      "community.lblMessage": "Votre Message *",
      "community.submitBtn": "Publier & Prévenir le Développeur",
      "community.formPrivacyNote": "Votre e-mail n'est jamais affiché publiquement ; il sert uniquement à vous prévenir lorsque Gianluca répond.",
      "community.threadsTitle": "Discussions & Avis de la Communauté",
      "community.threadsBadge": "Réponses Officielles Actives",
      "community.devBadge": "👨‍💻 Gianluca • Créateur & Développeur de MuStreamer",
      "community.badgeReview": "⭐ Avis",
      "community.badgeSuggestion": "💡 Suggestion",
      "community.t1Date": "Version 1.0.1 &bull; Avis Vérifié",
      "community.t1Title": "A littéralement sauvé mon Naim Mu-so de première génération !",
      "community.t1Body": "Avec les flux Qobuz 24-bit/192 kHz en Wi-Fi, mon Mu-so 1re génération coupait sans cesse avec les anciennes applis UPnP. Le Décodage Local WAV Bit-Perfect de MuStreamer rend le démarrage instantané et zéro coupure en 3 heures d'écoute. Super aussi les Radios Live FLAC de la 1.0.1 !",
      "community.t1Reply": "Un grand merci Marco ! C'est exactement pourquoi j'ai créé MuStreamer : déporter le décodage FLAC sur l'iPhone/Mac et envoyer du PCM/WAV linéaire soulage totalement le processeur du Mu-so 1re génération tout en restant 100 % Bit-Perfect. Bonne écoute !",
      "community.t2Date": "Version 1.0.1 &bull; Suggestion &amp; Retour",
      "community.t2Title": "Les VU-mètres analogiques et les 50 000+ Radios Live avec sauvegarde .M3U sont géniaux",
      "community.t2Body": "Bravo pour la 1.0.1 : enregistrer 6 préréglages P1–P6 pour les radios FLAC et exporter la sauvegarde .M3U entre Mac et iPhone est super pratique. Comme suggestion, ce serait top que tous les écrans soient traduits dans ma langue.",
      "community.t2Reply": "Merci beaucoup Alessandro ! Excellente remarque : nous venons de finaliser la traduction intégrale à 100 % de tous les écrans, outils Hi-Fi et panneaux techniques dans les 8 langues (IT, EN, FR, DE, ES, PT, NL, JA) avec changement instantané.",
      "community.t3Date": "Version 1.0.1 &bull; Avis Vérifié",
      "community.t3Title": "Sonomètre SPL et Générateur de Tons intégrés : un vrai couteau suisse Hi-Fi",
      "community.t3Body": "En plus de TIDAL Max et des fichiers FLAC locaux sur clé USB, les outils acoustiques (RTA, Sonomètre SPL et balayage 20Hz–20kHz) m'ont permis d'identifier une résonance à 63 Hz dans ma pièce et de la corriger avec l'Auto-EQ. Unique en son genre.",
      "community.t3Reply": "Quel plaisir de lire cela Davide ! L'acoustique de la pièce représente plus de 50 % du rendu Hi-Fi : intégrer sonomètre SPL, générateur de sweep et correction paramétrique sert justement à maîtriser les résonances de la pièce.",
      "nav.platforms": "Windows &amp; Android",
      "hero.winCaption": "Gratuit pour PC",
      "hero.winStore": "Windows (.zip)",
      "hero.andCaption": "Téléchargement APK gratuit",
      "hero.andStore": "Android (.apk)",
      "mockup.newWinAnd": "🪟 Windows 10/11 &amp; 🤖 Android",
      "plat.badge": "Grande Nouveauté • Écosystème Complet",
      "plat.title": "Désormais disponible sur <span class=\"text-gradient\">Windows &amp; Android</span>",
      "plat.subtitle": "Le moteur Bit-Perfect 24-bit/192 kHz, les 3 modes audiophiles et la suite studio débarquent sur PC Windows et smartphones/tablettes Android, en plus de Mac, iPhone et iPad.",
      "plat.chipWin": "🪟 Windows 10/11 (Nouveau v1.2)",
      "plat.chipAnd": "🤖 Android 8.0+ (Nouveau v1.2)",
      "plat.winTag": "WINDOWS DESKTOP • 64-BIT",
      "plat.winTitle": "MuStreamer pour Windows Desktop",
      "plat.winDesc": "Pilotez votre chaîne Hi-Fi depuis un PC Windows avec la même interface Liquid Glass sombre, découverte SSDP multi-cartes (Ethernet + Wi-Fi) et proxy audio lossless local.",
      "plat.winB1": "3 Modes : <strong>FLAC Pur</strong> (Pass-Through), <strong>Cloud Direct</strong> et <strong>WAV Local + DSP 64-bit</strong>",
      "plat.winB2": "Scan automatique multi-interfaces LAN/VPN avec diagnostic Ethernet et ping en direct",
      "plat.winB3": "Vumètres vintage, Spectre FFT, Dynamic Range (DR), EQ 10 bandes et Mini-Lecteur bureau",
      "plat.winBtn": "Télécharger Windows v1.2 (.zip)",
      "plat.winReq": "x64 Natif • UPnP / DLNA",
      "plat.andTag": "APP ANDROID HI-RES",
      "plat.andTitle": "MuStreamer pour Smartphones &amp; Tablettes Android",
      "plat.andDesc": "Emportez Qobuz Studio Master, TIDAL Max, 50 000+ Radios FLAC, Podcasts et vos fichiers locaux avec un streaming Bit-Perfect 24-bit/192 kHz vers Naim Mu-so et tout streamer UPnP.",
      "plat.andB1": "Contrôle précis du volume par paliers <strong>&plusmn;5%</strong> et Seek Instantané HTTP Range",
      "plat.andB2": "File d'attente gapless continue, pochettes haute résolution et 6 Présélections P1–P6",
      "plat.andB3": "Suivi en temps réel du jitter Wi-Fi et état du lien Ethernet/Wi-Fi du streamer",
      "plat.andBtn": "Télécharger APK Android v1.2 (.apk)",
      "plat.andReq": "Smartphones &amp; Tablettes",
      "signal.modeCloud": "☁️ Cloud Direct CDN",
      "signal.s2TitleCloud": "Relais Direct CDN → Streamer",
      "signal.s2MetaCloud": "Zéro proxy local &bull; URL CDN certifiée",
      "signal.s3TitleCloud": "Flux HTTPS Direct → DAC",
      "signal.s3MetaCloud": "Charge app minimale &bull; Autonomie optimale",
      "signal.noteBadgeCloud": "IDÉAL POUR STREAMERS RÉCENTS &amp; ÉCOUTE CONTINUE",
      "signal.noteTextCloud": "Relie directement votre streamer aux serveurs CDN lossless en réduisant au minimum la charge réseau et batterie.",
      "modal.contactBtn": "Demander le Lien / Support",
      "modal.guideBtn": "Guide &amp; FAQ",
      "modal.winTitle": "MuStreamer v1.2 pour Windows Desktop",
      "modal.winBody": "La version Windows 10/11 (64-bit) v1.2 se télécharge en archive .zip : extrayez tout le dossier puis lancez mustreamer.exe (SmartScreen : Informations complémentaires -> Exécuter quand même). Inclut UPnP multi-cartes, 3 modes Bit-Perfect et outils studio.",
      "modal.winReqs": "<strong>Prérequis :</strong> Windows 10 / 11 (x64) &bull; Réseau local Wi-Fi ou Ethernet vers votre streamer UPnP/DLNA",
      "modal.andTitle": "MuStreamer v1.2 pour Android",
      "modal.andBody": "L'app Android v1.2 est disponible en téléchargement direct .apk signé sur ce site : streaming Bit-Perfect 24-bit/192 kHz vers Naim Mu-so &amp; UPnP/DLNA, volume ±5%, Seek Instantané, 50 000+ Radios FLAC et diagnostic Wi-Fi.",
      "modal.andReqs": "<strong>Prérequis :</strong> Android 8.0+ (ARM64) &bull; Smartphone ou tablette sur réseau Wi-Fi local"
    },
    "de": {
      "meta.index.title": "MuStreamer 1.2 - Bit-Perfect Audiophile Streaming für Mac, iPhone, Windows & Android",
      "meta.index.desc": "MuStreamer ist jetzt für Mac, iPhone, iPad, Windows 10/11 und Android verfügbar: 24-Bit/192 kHz Bit-Perfect, 3 Modi (Reines FLAC, Cloud Direkt, Lokales WAV), Qobuz, TIDAL, 50.000+ FLAC-Radios, Podcasts & Hi-Fi-Tools.",
      "meta.privacy.title": "Datenschutzerklärung — MuStreamer",
      "meta.privacy.desc": "Datenschutz bei MuStreamer: Voller Schutz Ihrer Daten, kein Tracking, Anmeldedaten lokal auf Mac & iPhone gespeichert.",
      "meta.support.title": "Support & FAQ — MuStreamer",
      "meta.support.desc": "MuStreamer Hilfe-Center: Häufige Fragen, UPnP-Einrichtung, Feedback und Kontakt.",
      "meta.community.title": "Bewertungen & Vorschlagsforum — MuStreamer",
      "meta.community.desc": "Offizielles MuStreamer Bewertungs- & Vorschlagsforum: Bewertung abgeben, neue Hi-Fi-Funktionen vorschlagen und direkte Antworten vom Entwickler lesen.",
      "nav.features": "Funktionen",
      "nav.tools": "Hi-Fi-Tools",
      "nav.story": "Unsere Story",
      "nav.specs": "Spezifikationen",
      "nav.support": "Support",
      "nav.community": "Bewertungen & Forum",
      "nav.privacy": "Datenschutz",
      "nav.cta": "App laden",
      "nav.backToApp": "Zurück zur App",
      "hero.badge": "Neu v1.2 • Jetzt auch für Windows &amp; Android!",
      "hero.title": "Neues Leben für Ihre Hi-Fi-Anlage.<br><span class=\"text-gradient\">Null klangliche Kompromisse.</span>",
      "hero.lead": "MuStreamer ist der ultimative audiophile Player – jetzt für <strong>Mac, iPhone, iPad, Windows 10/11 und Android</strong>. Verbindet <strong>Bit-Perfect 24-Bit/192 kHz</strong> von <strong>Qobuz</strong>, <strong>TIDAL</strong> und <strong>lokalen Dateien</strong> mit <strong>50.000+ FLAC-Radios</strong> und <strong>Podcasts</strong> inklusive 3 Streaming-Modi (<em>Reines FLAC</em>, <em>Cloud Direkt</em>, <em>Lokales WAV</em>).",
      "hero.macCaption": "Kostenlos für Mac",
      "hero.macStore": "Download (.dmg)",
      "hero.iosCaption": "Laden im",
      "hero.discoverBtn": "Funktionen entdecken",
      "hero.subtitle": "Verfügbar für <strong>macOS 14+</strong>, <strong>iOS &amp; iPadOS 17+</strong>, <strong>Windows 10/11 (64-Bit)</strong> und <strong>Android 8.0+</strong> &bull; UPnP / DLNA Bit-Perfect.",
      "hero.macTip": "<strong>Direktinstallation:</strong> <strong>Mac</strong> öffnen Sie die <code>.dmg</code> und ziehen Sie sie in Programme (falls nötig: <em>Systemeinstellungen &rarr; Datenschutz &rarr; Dennoch öffnen</em>) &bull; <strong>Windows</strong> entpacken Sie die <code>.zip</code> und starten <code>mustreamer.exe</code> (SmartScreen: <em>Weitere Informationen &rarr; Trotzdem ausführen</em>) &bull; <strong>Android</strong> öffnen Sie die <code>.apk</code> und erlauben Sie die Installation.",
      "hero.comingSoon": "Jetzt verfügbar für <strong>Mac, iPhone, iPad, Windows &amp; Android</strong>!",
      "mockup.title": "MuStreamer — Hi-Res Bit-Perfect Wiedergabe (FLAC 24-Bit / 192 kHz)",
      "mockup.nowPlaying": "Aktuelle Wiedergabe • Qobuz Studio Master",
      "mockup.decodeLine": "⚡ Dekodierung: Lokal (Mac/iOS Offload) &bull; Ausgang: Bit-Perfect WAV Lossless",
      "mockup.vumeterTitle": "Analoges Stereo-VU-Meter",
      "mockup.newLabel": "Neu in v1.2",
      "mockup.newRadio": "50.000+ Live-Radios &amp; FLAC",
      "mockup.newPodcast": "Podcasts &amp; Tagesepisoden",
      "mockup.newLocal": "📁 Lokale Hi-Res-Dateien",
      "mockup.newEngine": "⚙️ 3 Modi: Reines FLAC • Cloud • WAV",
      "features.badge": "Akustik-Engineering • Apple v1.1 &amp; Win/Android v1.2",
      "features.title": "Von Audiophilen für Audiophile entwickelt",
      "features.subtitle": "Alle Quellen und Technologien, um die Grenzen alter Protokolle zu überwinden und jede musikalische Nuance zu genießen.",
      "features.newTag": "Neu in 1.0.1",
      "features.c7Title": "Weltweites Live-Radio (50.000+)",
      "features.c7Desc": "Sender aus 224 Ländern sowie audiophile Lossless-FLAC-Streams mit Live-Titelanzeige. Favoriten speichern, 6 Schnell-Presets P1–P6 belegen, eigene URLs hinzufügen und .M3U-Backups exportieren/importieren.",
      "features.c8Title": "Podcasts &amp; Tagesepisoden",
      "features.c8Desc": "Charts für Italien und weltweit, Sofortsuche und vollständiges Episoden-Streaming auf iPhone, Mac, AirPlay und UPnP-Streamern mit -15s / +30s Sprüngen und Lieblingsshows.",
      "features.c9Title": "Lokale Hi-Res-Dateien &amp; Studio-Engine",
      "features.c9Desc": "Spielen Sie FLAC-, WAV-, AIFF-, ALAC- und MP3-Dateien direkt vom Gerät oder USB-Speicher/DAC ab. Das neue Studio-Panel steuert per Tipp WAV Bit-Perfect, Natives FLAC, Max-Abtastrate (44,1–192 kHz) und RAM-Vorabpufferung.",
      "features.c1Title": "100% Bit-Perfect & Hi-Res",
      "features.c1Desc": "Audiodaten erreichen Ihre Anlage ohne Resampling, Bit-Reduktion oder Dynamikkompression. Bis zu 192 kHz / 24 Bit originalgetreu.",
      "features.c2Title": "Intelligente lokale Dekodierung",
      "features.c2Desc": "Bei Streamern mit schwächerer CPU (wie dem Naim Mu-so 1. Gen.) übernimmt Ihr Mac oder iPhone die Dekodierung und sendet einen stabilen, unterbrechungsfreien Stream.",
      "features.c3Title": "Qobuz & TIDAL integriert",
      "features.c3Desc": "Volle Hörfreiheit. Durchsuchen Sie riesige Kataloge, Studio-Master-Neuheiten und Favoriten direkt in der App.",
      "features.c4Title": "Erweitertes UPnP / DLNA",
      "features.c4Desc": "Sofortige Erkennung von Netzwerk-Streamern, All-in-One-Geräten und Wi-Fi-DACs. Prädiktiver Anti-Jitter-Puffer für WLAN-Netze.",
      "features.c5Title": "Equalizer & Klangkorrektur",
      "features.c5Desc": "Parametrischer 10-Band-Equalizer mit audiophilen Presets oder präziser Anpassung an Ihre Raumakustik.",
      "features.c6Title": "Hi-Fi Dark Interface",
      "features.c6Desc": "Klare Eleganz in Hi-Fi-Orange und Titanschwarz. Hochauflösende Cover und flüssige Bedienung.",
      "signal.badge": "BIT-PERFECT SIGNALWEG",
      "signal.title": "Wie MuStreamer Aussetzer auf Hi-Fi-Streamern beseitigt",
      "signal.subtitle": "Vergleichen Sie beide Audio-Engine-Modi in Echtzeit: lokales Decoding auf Mac/iPhone oder natives FLAC Pass-Through zum DAC Ihres Streamers.",
      "signal.modeWav": "⚡ Lokales WAV (64-Bit-DSP)",
      "signal.modeFlac": "📡 Reines FLAC (Pass-Through)",
      "signal.s1Kicker": "Lossless-Quelle",
      "signal.s1Title": "Qobuz • TIDAL • Radio • Dateien",
      "signal.s1Meta": "Master FLAC bis 24-Bit / 192 kHz",
      "signal.s2Kicker": "MuStreamer Engine",
      "signal.s2TitleWav": "Lokale Decodierung + 64-Bit-DSP",
      "signal.s2TitleFlac": "HTTP-FLAC-Pass-Through-Brücke",
      "signal.s2MetaWav": "FLAC → PCM/WAV + EQ, Phase &amp; Range Seek",
      "signal.s2MetaFlac": "Byte-für-Byte ohne RAM-Neucodierung",
      "signal.s3Kicker": "LAN / WLAN-Transport",
      "signal.s3TitleWav": "Lineares Bit-Perfect WAV",
      "signal.s3TitleFlac": "Komprimiertes Lossless FLAC",
      "signal.s3MetaWav": "Start ~0,2s • 0 % Streamer-CPU-Last",
      "signal.s3MetaFlac": "Geringere WLAN-Last • DAC-Decoding",
      "signal.s4Kicker": "Ihr Hi-Fi-System",
      "signal.s4Title": "Naim • UPnP • AirPlay • USB-DAC",
      "signal.s4Meta": "100 % Bit-Perfect • Kein Resampling",
      "signal.noteBadgeWav": "IDEAL FÜR NAIM MU-SO 1. GEN. &amp; 64-BIT-DSP",
      "signal.noteBadgeFlac": "IDEAL FÜR HI-FI-STREAMER &amp; ETHERNET/WLAN",
      "signal.noteTextWav": "Lagert die FLAC-Decodierung auf Mac, iPhone, Windows oder Android aus und sendet DAC-fertiges PCM/WAV samt 64-Bit-EQ und HTTP-Range-Seek.",
      "signal.noteTextFlac": "Leitet den originalen FLAC-Stream Byte-für-Byte über die lokale HTTP-Brücke ohne RAM-Puffer weiter (inkl. audio/x-flac für Mu-so 1. Gen.).",
      "tools.badge": "Messlabor",
      "tools.title": "Präzisions-Tools inklusive",
      "tools.subtitle": "MuStreamer ist mehr als ein Player: Es bietet echte Akustik- und Kalibrierungswerkzeuge.",
      "tools.c1Title": "Analoges VU-Meter",
      "tools.c1Desc": "Nach internationalen Standards kalibrierte Ballistik. Überwachen Sie RMS-Pegel und Dynamikspitzen pro Kanal.",
      "tools.c2Title": "Spektrumanalysator (RTA)",
      "tools.c2Desc": "Visualisieren Sie Schallenergie von 20 Hz bis über 20.000 Hz und erkennen Sie Raummoden.",
      "tools.c3Title": "SPL-Schallpegelmesser",
      "tools.c3Desc": "Messen Sie den Schalldruck in dB(A) und dB(C) am Hörplatz über das Mikrofon Ihres Mac oder iPhone.",
      "tools.c4Title": "Rosa Rauschen & Tongenerator",
      "tools.c4Desc": "Erzeugen Sie rosa/weißes Rauschen oder Sinustöne (20 Hz – 20 kHz) zur Lautsprecher- und Subwoofer-Kalibrierung.",
      "story.badge": "Hinter den Kulissen",
      "story.title": "Warum MuStreamer entstand",
      "story.p1": "Als Besitzer eines bewährten All-in-One-Systems (des legendären <strong>Naim Mu-so</strong> der ersten Generation) begeisterte mich stets dessen Klang. Mit der Zeit zeigten sich jedoch drei Einschränkungen:",
      "story.li1": "<strong>Keine native Qobuz-Integration</strong>",
      "story.li2": "<strong>Instabile WLAN-Verbindung</strong> ohne Ethernet-Kabel beim WLAN der ersten Generation",
      "story.li3": "<strong>Ein älterer Prozessor</strong>, der bei schweren Hi-Res-Streams ins Stocken geriet",
      "story.p2": "Hochauflösendes Streaming funktionierte nur über UPnP – doch bestehende Apps waren oft langsam, instabil und veraltet.",
      "story.p3": "So entstand <strong>MuStreamer</strong>: modern, schnell und direkt aus Leidenschaft für guten Klang entwickelt – inklusive <em>analogem VU-Meter</em>, <em>Echtzeit-RTA</em>, <em>SPL-Pegelmesser</em> und <em>Signalgenerator</em> sowie Unterstützung für Qobuz und TIDAL.",
      "story.p4": "Zudem lässt sich wählen, ob Ihr Mac oder iPhone die Dekodierung übernimmt – um ältere Streamer komplett zu entlasten – oder der interne DAC. In beiden Fällen bleibt alles strikt <strong>Bit-Perfect</strong>.",
      "story.p5": "Ich hoffe, MuStreamer schenkt Ihrer Anlage neues Leben. Über Feedback im Einstellungsmenü freue ich mich jederzeit! 😊",
      "story.role": "Erfinder und Entwickler von MuStreamer",
      "specs.badge": "Datenblatt",
      "specs.title": "Kompatibilität & Spezifikationen",
      "specs.subtitle": "Alle technischen Details des MuStreamer-Ökosystems.",
      "specs.thParam": "Parameter",
      "specs.thSpec": "Unterstützte Spezifikation",
      "specs.r1Label": "Maximale Auflösung",
      "specs.r1Val": "<strong>24-Bit / 192 kHz</strong> (Hi-Res Studio Master Bit-Perfect)",
      "specs.r2Label": "Audioformate",
      "specs.r3Label": "Dienste &amp; Quellen",
      "specs.r3Val": "<strong>Qobuz</strong> (Hi-Res FLAC) &bull; <strong>TIDAL</strong> (Max Hi-Res FLAC) &bull; <strong>50.000+ Live-Radios</strong> (inkl. FLAC) &bull; <strong>RSS-Podcasts</strong> &bull; <strong>Lokale Dateien</strong>",
      "specs.r4Label": "Ausgabeprotokoll",
      "specs.r4Val": "UPnP AV / DLNA MediaRenderer 1.0/2.0, AirPlay &amp; USB/Lokaler DAC (WAV Bit-Perfect / Natives FLAC)",
      "specs.r5Label": "Plattformen",
      "specs.r5Soon": "🪟 <strong>Windows 10/11 (64-Bit)</strong> &bull; 🤖 <strong>Android 8.0+</strong> — Jetzt verfügbar (v1.2)!",
      "specs.r6Label": "Sprachen &amp; Version",
      "specs.r6Val": "<strong>8 Sprachen</strong> (IT, EN, FR, DE, ES, PT, NL, JA) &bull; <strong>Apple v1.1.0</strong> &bull; <strong>Windows &amp; Android v1.2.0</strong>",
      "footer.home": "Startseite",
      "footer.privacy": "Datenschutz",
      "footer.support": "Support & Kontakt",
      "footer.copy": "&copy; 2026 MuStreamer. Alle Rechte vorbehalten.",
      "footer.disclaimer": "<em>Rechtlicher Hinweis & Marken:</em> Naim, Mu-so, Qobuz und TIDAL sind eingetragene Marken ihrer jeweiligen Eigentümer und dienen ausschließlich der Beschreibung der Kompatibilität. MuStreamer ist eine unabhängige App von Enthusiasten für die Hi-Fi-Community.",
      "privacy.badge": "Offizielles Dokument",
      "privacy.title": "Datenschutzerklärung",
      "privacy.updated": "Letzte Aktualisierung: 25. November 2026",
      "privacy.s1Title": "1. Unsere Datenschutz-Philosophie",
      "privacy.s1Text": "Ihre Hörgewohnheiten und Daten gehören nur Ihnen. <strong>MuStreamer sammelt, speichert auf externen Servern und verkauft KEINERLEI persönliche Daten oder Hörstatistiken an Dritte</strong>.",
      "privacy.s2Title": "2. Zugangsdaten (Qobuz & TIDAL)",
      "privacy.s2Intro": "Bei der Anmeldung in der App:",
      "privacy.s2Li1": "Authentifizierungs-Tokens werden <strong>direkt und verschlüsselt (HTTPS / TLS 1.3)</strong> mit den offiziellen Servern ausgetauscht.",
      "privacy.s2Li2": "Anmeldedaten verbleiben <strong>ausschließlich auf Ihrem Gerät</strong> im sicheren Systemspeicher (Apple Keychain auf macOS/iOS, Credential Manager unter Windows und Android Keystore mit AES-GCM).",
      "privacy.s2Li3": "Es fließen niemals Zugangsdaten über Drittserver.",
      "privacy.s3Title": "3. Lokales Netzwerk-Streaming (UPnP / DLNA)",
      "privacy.s3Text": "Die Gerätesuche via SSDP / UPnP erfolgt <strong>vollständig in Ihrem lokalen Netzwerk (LAN)</strong> ohne externe Datenübertragung.",
      "privacy.s4Title": "4. Mikrofon & SPL-Pegelmesser",
      "privacy.s4Text": "Das Mikrofon wird nur zur Echtzeit-Pegelmessung genutzt. <strong>Es werden keine Audiodaten gespeichert oder übertragen</strong>.",
      "privacy.s4bTitle": "5. Live-Radio, Podcasts & lokale Audiodateien",
      "privacy.s4bText": "Favorisierte Radiosender, P1–P6 Presets, eigene URLs und gespeicherte Podcasts verbleiben ausschließlich auf Ihrem Gerät. Audiostreams werden direkt zwischen Ihrem Gerät und dem jeweiligen Sender oder RSS-Feed ohne Zwischenserver aufgebaut. Beim Öffnen <strong>lokaler Audiodateien</strong> (FLAC, WAV, AIFF, ALAC, MP3) greift MuStreamer nur über die sicheren Berechtigungen der Apple Sandbox / Dateien-App zu: Keine lokale Datei wird jemals hochgeladen oder nach außen geteilt.",
      "privacy.s5Title": "6. Kein Tracking und keine Drittanbieter-Cookies",
      "privacy.s5Text": "Die App enthält weder Werbe-Tracker noch Google Analytics oder Analyse-Bibliotheken Dritter.",
      "privacy.s6Title": "7. Kontakt zum Datenschutz",
      "privacy.s6Text": "Bei Fragen erreichen Sie uns unter: <a href=\"mailto:mustreamer@outlook.it\" style=\"color: var(--accent-light); font-weight: 600;\">mustreamer@outlook.it</a> oder über unsere <a href=\"support.html\" style=\"color: var(--accent-light); text-decoration: underline;\">Support-Seite</a>.",
      "support.badge": "Hilfe & Community",
      "support.title": "Support & Häufige Fragen",
      "support.subtitle": "Benötigen Sie Hilfe bei der Einrichtung? Hier finden Sie Antworten und Kontaktmöglichkeiten.",
      "support.q1Title": "1. Wie verbinde ich meinen Streamer oder Naim Mu-so mit MuStreamer?",
      "support.q1Text": "Stellen Sie sicher, dass Mac, iPhone, iPad, Windows-PC oder Android-Gerät mit <strong>demselben WLAN oder Ethernet</strong> verbunden sind wie der Streamer. MuStreamer erkennt Geräte per Multi-NIC SSDP/UPnP automatisch und zeigt in der Diagnose Ethernet vs. WLAN an.",
      "support.q2Title": "2. Wie funktionieren die 3 Modi: Reines FLAC, Cloud Direkt und Lokales WAV?",
      "support.q2Text": "Im Panel <em>Diagnose &amp; Audio-Engine</em> (auf Apple, Windows und Android) wählen Sie aus <strong>3 audiophilen Modi</strong>:<br>&bull; <strong>Lokales WAV (LPCM + 64-Bit-DSP)</strong>: Decodiert im RAM, wendet 64-Bit-EQ, Crossfeed &amp; Phase an und liefert unkomprimiertes WAV mit HTTP-Range-Seek.<br>&bull; <strong>Reines FLAC (Pass-Through)</strong>: Byte-für-Byte HTTP-Brücke bis 24-Bit/192 kHz ohne Neucodierung.<br>&bull; <strong>Cloud Direkt (Zero-Proxy)</strong>: Übergibt die verifizierte CDN-URL direkt an den Streamer.",
      "support.q3Title": "3. Ist Bit-Perfect immer garantiert?",
      "support.q3Text": "Ja. MuStreamer führt kein unerwünschtes Resampling durch; 24-Bit / 96–192 kHz bleiben bitgenau erhalten.",
      "support.q4Title": "4. Welche Abos werden für Qobuz oder TIDAL benötigt?",
      "support.q4Text": "Sie können sich mit Ihrem normalen Qobuz- (Studio/Sublime) oder TIDAL-Abo (HiFi/Max) anmelden. <strong>50.000+ Live-Radios</strong>, <strong>Podcasts</strong>, die Wiedergabe <strong>lokaler Audiodateien</strong> sowie der <em>Offline-Demo-Katalog</em> funktionieren dagegen <strong>kostenlos und ganz ohne Abo</strong>.",
      "support.q5NewTitle": "5. Was ist neu in Apple v1.1 und Windows / Android v1.2?",
      "support.q5NewText": "Mit <strong>MuStreamer v1.1 (macOS / iOS / iPadOS)</strong> und <strong>v1.2 (Windows 10/11 &amp; Android)</strong>:<br>&bull; <strong>Volle Unterstützung für Windows 10/11 &amp; Android</strong>: dunkle Liquid-Glass-UI, Multi-NIC UPnP/DLNA, 3 Streaming-Modi, VU-Meter, FFT, 64-Bit-DSP und feine <code>&plusmn;5%</code> Lautstärkeschritte.<br>&bull; <strong>Live-Radio &amp; Podcasts</strong>: 50.000+ Sender (inkl. FLAC Lossless), 6 Presets P1–P6, <code>.M3U</code>-Export/Import und RSS-Podcasts.<br>&bull; <strong>Lokale Dateien &amp; Sofort-Seek</strong>: direkte Wiedergabe von <code>FLAC, WAV, AIFF, ALAC, MP3</code> mit HTTP Range Seek &amp; Ethernet/WLAN-Telemetrie.",
      "support.q5Title": "6. Wie kann ich einen Vorschlag senden oder ein Problem melden?",
      "support.q5Text": "Über <strong>Feedback senden</strong> in den App-Einstellungen oder per E-Mail an <a href=\"mailto:mustreamer@outlook.it\" style=\"color: var(--accent-light); font-weight: 600;\">mustreamer@outlook.it</a>.",
      "support.bannerTitle": "Noch Fragen?",
      "support.bannerText": "Wir antworten jedem Hi-Fi-Enthusiasten schnell und persönlich.",
      "support.bannerBtn": "Per E-Mail kontaktieren",
      "community.badge": "Audiophile Community • Forum & Bewertungen",
      "community.title": "Bewertungen, Vorschläge & Forum",
      "community.subtitle": "Dieser Bereich gehört allen MuStreamer-Nutzern: Teile deine Erfahrung auf deiner Hi-Fi-Anlage, schlage neue Funktionen vor oder starte ein Thema. Jeder Beitrag sendet sofort eine E-Mail an den Entwickler, der direkt hier antwortet.",
      "community.ratingMeta": "Hi-Fi-Community-Wertung &bull; Direkte Entwickler-Antworten",
      "community.appStoreBtn": "★ Auch im App Store bewerten",
      "community.formTitle": "Bewertung oder Vorschlag schreiben",
      "community.formSubtitle": "Deine Nachricht wird sofort per E-Mail an Gianluca (Entwickler von MuStreamer) gesendet und mit offizieller Antwort veröffentlicht.",
      "community.emailAlertTag": "🔔 E-Mail-Benachrichtigung Aktiv",
      "community.lblName": "Dein Name oder Nickname *",
      "community.lblEmail": "Deine E-Mail (für Antwort-Benachrichtigung) *",
      "community.lblSetup": "Deine Hi-Fi-Anlage / dein Streamer (optional)",
      "community.lblCategory": "Beitragstyp",
      "community.catReview": "⭐ Hörerlebnis-Bewertung",
      "community.catSuggestion": "💡 Funktionsvorschlag",
      "community.catQuestion": "🎧 Technische Frage / UPnP-Setup",
      "community.catBug": "🐛 Fehler melden",
      "community.lblRating": "Gesamtbewertung",
      "community.lblTitle": "Titel der Bewertung oder des Threads *",
      "community.lblMessage": "Deine Nachricht *",
      "community.submitBtn": "Veröffentlichen & Entwickler benachrichtigen",
      "community.formPrivacyNote": "Deine E-Mail wird niemals öffentlich angezeigt; sie dient nur zur Benachrichtigung bei Antworten von Gianluca.",
      "community.threadsTitle": "Community-Diskussionen & Bewertungen",
      "community.threadsBadge": "Offizielle Antworten Aktiv",
      "community.devBadge": "👨‍💻 Gianluca • Gründer & Entwickler von MuStreamer",
      "community.badgeReview": "⭐ Bewertung",
      "community.badgeSuggestion": "💡 Vorschlag",
      "community.t1Date": "Version 1.0.1 &bull; Verifizierte Bewertung",
      "community.t1Title": "Hat mein Naim Mu-so der 1. Generation buchstäblich gerettet!",
      "community.t1Body": "Bei 24-Bit/192 kHz Qobuz-Streams über WLAN brach mein Mu-so der 1. Gen mit alten UPnP-Apps ständig ab. Mit dem lokalen WAV Bit-Perfect-Decoding von MuStreamer startet alles sofort ohne einen einzigen Aussetzer in 3 Stunden. Auch das neue FLAC-Live-Radio in 1.0.1 ist klasse!",
      "community.t1Reply": "Herzlichen Dank Marco! Genau dafür habe ich MuStreamer entwickelt: Das Auslagern des FLAC-Decodings auf iPhone/Mac entlastet die CPU des Mu-so 1. Gen komplett bei 100 % Bit-Perfect-Signal. Viel Freude beim Hören!",
      "community.t2Date": "Version 1.0.1 &bull; Vorschlag &amp; Feedback",
      "community.t2Title": "Die analogen VU-Meter und 50.000+ Live-Radios mit .M3U-Backup sind genial",
      "community.t2Body": "Glückwunsch zum Update 1.0.1: 6 Schnell-Presets P1–P6 für FLAC-Radios und der .M3U-Export zwischen Mac und iPhone sind super praktisch. Als Wunsch wäre es toll, wenn alle Ansichten komplett übersetzt sind.",
      "community.t2Reply": "Vielen Dank Alessandro! Super Hinweis: Wir haben soeben die vollständige 100%-Lokalisierung aller Bildschirme, Hi-Fi-Tools und Technikpanels in allen 8 Sprachen (IT, EN, FR, DE, ES, PT, NL, JA) mit Echtzeit-Umschaltung abgeschlossen.",
      "community.t3Date": "Version 1.0.1 &bull; Verifizierte Bewertung",
      "community.t3Title": "Integrierter SPL-Messer & Tongenerator: ein echtes Hi-Fi-Schweizer-Taschenmesser",
      "community.t3Body": "Neben TIDAL Max und lokalen FLAC-Dateien per USB half mir die Akustik-Suite (RTA, SPL-Messer und 20Hz–20kHz Sweep), eine 63-Hz-Raumresonanz zu finden und per Auto-EQ zu korrigieren. Einzigartig.",
      "community.t3Reply": "Das freut mich riesig, Davide! Die Raumakustik macht über 50 % des Klangs aus – SPL-Messer, Sweep-Generator und parametrischer EQ direkt im Player helfen genau dabei, Raummoden in den Griff zu bekommen.",
      "nav.platforms": "Windows &amp; Android",
      "hero.winCaption": "Kostenlos für PC",
      "hero.winStore": "Windows (.zip)",
      "hero.andCaption": "Kostenloser APK-Download",
      "hero.andStore": "Android (.apk)",
      "mockup.newWinAnd": "🪟 Windows 10/11 &amp; 🤖 Android",
      "plat.badge": "Großes Release • Komplettes Ökosystem",
      "plat.title": "Jetzt auch für <span class=\"text-gradient\">Windows &amp; Android</span> verfügbar",
      "plat.subtitle": "Die komplette 24-Bit/192-kHz-Bit-Perfect-Engine, die 3 audiophilen Modi und alle Studio-Messinstrumente kommen neben Mac, iPhone und iPad jetzt auch auf Windows-PCs sowie Android-Smartphones und -Tablets.",
      "plat.chipWin": "🪟 Windows 10/11 (Neu v1.2)",
      "plat.chipAnd": "🤖 Android 8.0+ (Neu v1.2)",
      "plat.winTag": "WINDOWS DESKTOP • 64-BIT",
      "plat.winTitle": "MuStreamer für Windows Desktop",
      "plat.winDesc": "Steuern Sie Ihre Hi-Fi-Anlage direkt vom Windows-PC – im dunklen Liquid-Glass-Design mit Multi-NIC SSDP-Erkennung (Ethernet + Wi-Fi) und lokalem Lossless-HTTP-Proxy.",
      "plat.winB1": "3 Modi: <strong>Reines FLAC</strong> (Pass-Through), <strong>Cloud Direkt</strong> und <strong>Lokales WAV + 64-Bit-DSP</strong>",
      "plat.winB2": "Automatische Multi-Adapter-LAN/VPN-Erkennung mit Ethernet-Diagnose &amp; Live-Ping",
      "plat.winB3": "Vintage-VU-Meter, FFT-Spektrum, Dynamic Range (DR), 10-Band-EQ &amp; Desktop-Mini-Player",
      "plat.winBtn": "Windows v1.2 laden (.zip)",
      "plat.winReq": "x64 Nativ • UPnP / DLNA",
      "plat.andTag": "HI-RES ANDROID APP",
      "plat.andTitle": "MuStreamer für Android-Smartphones &amp; -Tablets",
      "plat.andDesc": "Qobuz Studio Master, TIDAL Max, 50.000+ FLAC-Radiosender, Podcasts und lokale Dateien immer dabei – mit 24-Bit/192 kHz Bit-Perfect-Streaming an Naim Mu-so und jeden UPnP-Streamer.",
      "plat.andB1": "Präzise Hardware-Lautstärkeschritte in <strong>&plusmn;5%</strong> &amp; Sofortiges HTTP-Range-Seeking",
      "plat.andB2": "Lückenlose Gapless-Queue, Hi-Res-Cover und 6 Radio-Direktspeicher P1–P6",
      "plat.andB3": "Echtzeit-WLAN-Jitter-Überwachung &amp; Ethernet/Wi-Fi-Link-Diagnose des Streamers",
      "plat.andBtn": "Android-APK v1.2 laden (.apk)",
      "plat.andReq": "Smartphones &amp; Tablets",
      "signal.modeCloud": "☁️ Cloud Direkt CDN",
      "signal.s2TitleCloud": "Direkte CDN → Streamer-Übergabe",
      "signal.s2MetaCloud": "Ohne lokalen Proxy &bull; Zertifizierte CDN-URL",
      "signal.s3TitleCloud": "Direkter HTTPS-Stream → DAC",
      "signal.s3MetaCloud": "Minimale App-Last &bull; Maximale Akkulaufzeit",
      "signal.noteBadgeCloud": "IDEAL FÜR MODERNE STREAMER &amp; DAUERBETRIEB",
      "signal.noteTextCloud": "Verbindet kompatible Streamer direkt mit den Lossless-CDN-Servern und schont CPU sowie Akku.",
      "modal.contactBtn": "Link / Support anfordern",
      "modal.guideBtn": "Anleitung &amp; FAQ",
      "modal.winTitle": "MuStreamer v1.2 für Windows Desktop",
      "modal.winBody": "Das Windows 10/11 (64-Bit) Release v1.2 wird als .zip-Archiv heruntergeladen: Ordner entpacken und mustreamer.exe starten (bei SmartScreen: Weitere Informationen -> Trotzdem ausführen). Enthält Multi-NIC UPnP, 3 Bit-Perfect-Modi und Studio-Tools.",
      "modal.winReqs": "<strong>Systemanforderungen:</strong> Windows 10 / 11 (x64) &bull; Lokales WLAN oder Ethernet zum UPnP/DLNA-Streamer",
      "modal.andTitle": "MuStreamer v1.2 für Android",
      "modal.andBody": "Android v1.2 steht direkt als signierte .apk-Datei auf dieser Website zum Download bereit: 24-Bit/192 kHz Bit-Perfect für Naim Mu-so &amp; UPnP/DLNA, ±5%-Lautstärke, HTTP-Range-Seek, 50.000+ FLAC-Radios und WLAN-Diagnose.",
      "modal.andReqs": "<strong>Systemanforderungen:</strong> Android 8.0+ (ARM64) &bull; Smartphone oder Tablet im lokalen WLAN"
    },
    "es": {
      "meta.index.title": "MuStreamer 1.2 - Streaming Audiófilo Bit-Perfect para Mac, iPhone, Windows y Android",
      "meta.index.desc": "MuStreamer ya disponible en Mac, iPhone, iPad, Windows 10/11 y Android: streaming Bit-Perfect 24-bit/192 kHz, 3 modos (FLAC Puro, Cloud Directo, WAV Local), Qobuz, TIDAL, 50.000+ Radios FLAC, Podcasts y herramientas Hi-Fi.",
      "meta.privacy.title": "Política de Privacidad — MuStreamer",
      "meta.privacy.desc": "Política de privacidad de MuStreamer: respeto total por tus datos, sin rastreo, credenciales guardadas localmente.",
      "meta.support.title": "Soporte & FAQ — MuStreamer",
      "meta.support.desc": "Centro de ayuda de MuStreamer: preguntas frecuentes, conexión UPnP y contacto.",
      "meta.community.title": "Reseñas y Foro de Sugerencias — MuStreamer",
      "meta.community.desc": "Foro oficial de Reseñas y Sugerencias de MuStreamer: deja una valoración con estrellas, propón funciones Hi-Fi y lee las respuestas directas del desarrollador.",
      "nav.features": "Características",
      "nav.tools": "Herramientas Hi-Fi",
      "nav.story": "Nuestra Historia",
      "nav.specs": "Especificaciones",
      "nav.support": "Soporte",
      "nav.community": "Reseñas y Foro",
      "nav.privacy": "Privacidad",
      "nav.cta": "Descargar App",
      "nav.backToApp": "Volver a la App",
      "hero.badge": "Novedad v1.2 • ¡Ahora también en Windows y Android!",
      "hero.title": "Nueva vida para tu equipo Hi-Fi.<br><span class=\"text-gradient\">Cero compromisos sonoros.</span>",
      "hero.lead": "MuStreamer es el reproductor audiófilo definitivo, ya disponible en <strong>Mac, iPhone, iPad, Windows 10/11 y Android</strong>. Une la pureza <strong>Bit-Perfect 24-bit/192 kHz</strong> de <strong>Qobuz</strong>, <strong>TIDAL</strong> y <strong>Archivos Locales</strong> con <strong>50.000+ Radios FLAC</strong> y <strong>Podcasts</strong>, con 3 modos (<em>FLAC Puro</em>, <em>Cloud Directo</em>, <em>WAV Local</em>).",
      "hero.macCaption": "Gratis para Mac",
      "hero.macStore": "Descargar (.dmg)",
      "hero.iosCaption": "Descárgalo en",
      "hero.discoverBtn": "Descubrir Funciones",
      "hero.subtitle": "Disponible para <strong>macOS 14+</strong>, <strong>iOS y iPadOS 17+</strong>, <strong>Windows 10/11 (64-bit)</strong> y <strong>Android 8.0+</strong> &bull; UPnP / DLNA Bit-Perfect.",
      "hero.macTip": "<strong>Instalación directa:</strong> <strong>Mac</strong> abre el <code>.dmg</code> y arrastra a Aplicaciones (si se solicita: <em>Ajustes &rarr; Privacidad &rarr; Abrir igualmente</em>) &bull; <strong>Windows</strong> extrae el <code>.zip</code> y ejecuta <code>mustreamer.exe</code> (SmartScreen: <em>Más información &rarr; Ejecutar de todas formas</em>) &bull; <strong>Android</strong> abre el <code>.apk</code> y permite la instalación.",
      "hero.comingSoon": "¡Ya disponible en <strong>Mac, iPhone, iPad, Windows y Android</strong>!",
      "mockup.title": "MuStreamer — Reproducción Hi-Res Bit-Perfect (FLAC 24-bit / 192 kHz)",
      "mockup.nowPlaying": "Reproduciendo • Qobuz Studio Master",
      "mockup.decodeLine": "⚡ Decodificación: Local (Mac/iOS Offload) &bull; Salida: Bit-Perfect WAV Lossless",
      "mockup.vumeterTitle": "Vúmetro Analógico Estéreo",
      "mockup.newLabel": "Novedad v1.2",
      "mockup.newRadio": "50.000+ Radios en Vivo y FLAC",
      "mockup.newPodcast": "Podcasts y Episodios del Día",
      "mockup.newLocal": "📁 Archivos Locales Hi-Res",
      "mockup.newEngine": "⚙️ 3 Modos: FLAC Puro • Cloud • WAV",
      "features.badge": "Ingeniería Acústica • Apple v1.1 &amp; Win/Android v1.2",
      "features.title": "Diseñado por y para Audiófilos",
      "features.subtitle": "Todas las fuentes y tecnologías necesarias para superar los límites de los protocolos antiguos y disfrutar cada matiz musical.",
      "features.newTag": "Nuevo 1.0.1",
      "features.c7Title": "Radio en Vivo Mundial (50.000+)",
      "features.c7Desc": "Emisoras de 224 países y flujos audiófilos FLAC lossless con títulos en directo. Guarda Favoritas, configura 6 Presets rápidos P1–P6, añade URL personalizadas y exporta/importa copias .M3U.",
      "features.c8Title": "Podcasts y Episodios del Día",
      "features.c8Desc": "Listas de Italia y del Mundo, búsqueda instantánea y streaming íntegro de episodios en iPhone, Mac, AirPlay y streamers UPnP con saltos rápidos de -15s / +30s y programas favoritos.",
      "features.c9Title": "Archivos Locales Hi-Res y Motor Estudio",
      "features.c9Desc": "Reproduce archivos FLAC, WAV, AIFF, ALAC y MP3 desde tu dispositivo o unidad/DAC USB. El nuevo panel de estudio ajusta con un toque WAV Bit-Perfect, FLAC Nativo, frecuencia máx. (44.1–192 kHz) y Pre-buffering RAM.",
      "features.c1Title": "100% Bit-Perfect & Hi-Res",
      "features.c1Desc": "Los datos de audio llegan al equipo sin remuestreo ni compresión. Frecuencias hasta 192 kHz y 24 bits fieles al máster.",
      "features.c2Title": "Decodificación Local Inteligente",
      "features.c2Desc": "Si tu streamer tiene un procesador antiguo (como el Naim Mu-so 1ª gen.), delega la decodificación al Mac o iPhone para un streaming fluido y sin cortes.",
      "features.c3Title": "Qobuz & TIDAL Integrados",
      "features.c3Desc": "Libertad total. Accede a catálogos inmensos, novedades Studio Master y tus favoritos sin salir de la app.",
      "features.c4Title": "Protocolo UPnP / DLNA Extendido",
      "features.c4Desc": "Detección instantánea de streamers en red y DAC Wi-Fi con búfer predictivo anti-jitter.",
      "features.c5Title": "Ecualizador y Corrección de audio",
      "features.c5Desc": "Ecualizador paramétrico de 10 bandas con ajustes preestablecidos o calibración milimétrica para tu sala.",
      "features.c6Title": "Interfaz Hi-Fi Dark",
      "features.c6Desc": "Elegancia en naranja Hi-Fi y negro titanio, portadas en alta resolución y controles fluidos.",
      "signal.badge": "RUTA DE SEÑAL BIT-PERFECT",
      "signal.title": "Cómo MuStreamer elimina los cortes en streamers Hi-Fi",
      "signal.subtitle": "Compara en tiempo real los dos modos del motor de audio: elige entre decodificación local en tu Mac/iPhone o envío FLAC nativo al DAC del streamer.",
      "signal.modeWav": "⚡ WAV Local (DSP 64-Bit)",
      "signal.modeFlac": "📡 FLAC Puro (Pass-Through)",
      "signal.s1Kicker": "Fuente Lossless",
      "signal.s1Title": "Qobuz • TIDAL • Radio • Archivos",
      "signal.s1Meta": "Master FLAC hasta 24-bit / 192 kHz",
      "signal.s2Kicker": "Motor MuStreamer",
      "signal.s2TitleWav": "Decodificación Local + DSP 64-Bit",
      "signal.s2TitleFlac": "Puente HTTP FLAC Pass-Through",
      "signal.s2MetaWav": "FLAC → PCM/WAV + EQ, Fase y Range Seek",
      "signal.s2MetaFlac": "Puente bit a bit sin recodificación RAM",
      "signal.s3Kicker": "Transporte Red LAN / Wi-Fi",
      "signal.s3TitleWav": "WAV Lineal Bit-Perfect",
      "signal.s3TitleFlac": "FLAC Lossless Comprimido",
      "signal.s3MetaWav": "Inicio ~0,2s • Carga CPU Streamer 0%",
      "signal.s3MetaFlac": "Menor ancho Wi-Fi • Decodifica el DAC",
      "signal.s4Kicker": "Tu Equipo Hi-Fi",
      "signal.s4Title": "Naim • UPnP • AirPlay • DAC USB",
      "signal.s4Meta": "100% Bit-Perfect • Cero Remuestreo",
      "signal.noteBadgeWav": "IDEAL PARA NAIM MU-SO 1.ª GEN. Y DSP 64-BIT",
      "signal.noteBadgeFlac": "IDEAL PARA STREAMERS HI-FI Y ETHERNET/WI-FI",
      "signal.noteTextWav": "Traslada la decodificación FLAC a Mac, iPhone, Windows o Android enviando PCM/WAV listo para el DAC con EQ 64-bit y Seek Instantáneo HTTP Range.",
      "signal.noteTextFlac": "Reenvía el flujo FLAC original byte a byte por el puente HTTP local sin búfer RAM (compatible con audio/x-flac para Mu-so 1.ª gen.).",
      "tools.badge": "Laboratorio de Medición",
      "tools.title": "Suite de Herramientas de Precisión",
      "tools.subtitle": "MuStreamer integra verdaderos instrumentos de análisis y calibración acústica.",
      "tools.c1Title": "Vúmetro Analógico",
      "tools.c1Desc": "Balística calibrada según estándares internacionales para controlar RMS y picos dinámicos.",
      "tools.c2Title": "Analizador de Espectro (RTA)",
      "tools.c2Desc": "Visualiza la energía sonora de 20 Hz a más de 20.000 Hz y detecta resonancias de sala.",
      "tools.c3Title": "Sonómetro SPL en Punto de Escucha",
      "tools.c3Desc": "Mide la presión sonora en dB(A) y dB(C) con el micrófono de tu Mac o iPhone.",
      "tools.c4Title": "Generador de Ruido Rosa y Tonos",
      "tools.c4Desc": "Emite ruido rosa, blanco o tonos senoidales (20 Hz - 20 kHz) para ajustar altavoces y subwoofer.",
      "story.badge": "Entre bastidores",
      "story.title": "Por qué nació MuStreamer",
      "story.p1": "Como usuario de un sistema Todo-en-Uno ya veterano (el mítico <strong>Naim Mu-so</strong> de primera generación), siempre admiré su sonido, aunque con el tiempo surgieron tres grandes límites:",
      "story.li1": "<strong>Falta de integración nativa con Qobuz</strong>",
      "story.li2": "<strong>Estabilidad Wi-Fi irregular</strong> al depender del Wi-Fi de primera generación",
      "story.li3": "<strong>Un procesador interno ya justo</strong> para mover archivos Hi-Res pesados sin cortes",
      "story.p2": "La única vía era UPnP, pero las apps existentes resultaban lentas, inestables y anticuadas.",
      "story.p3": "Así nació <strong>MuStreamer</strong>: moderna, rápida e ideada para audiófilos, con <em>Vúmetro analógico</em>, <em>RTA en tiempo real</em>, <em>sonómetro SPL</em> y <em>generador de señales</em>, integrando tanto Qobuz como TIDAL.",
      "story.p4": "Además permite elegir entre decodificación en Mac/iPhone —liberando al equipo— o en el DAC interno, siempre en modo <strong>Bit-Perfect</strong>.",
      "story.p5": "Espero que MuStreamer dé nueva vida a vuestros equipos. Podéis enviar vuestras ideas desde Ajustes (¡todo feedback es bienvenido! 😊).",
      "story.role": "Creador y Desarrollador de MuStreamer",
      "specs.badge": "Ficha Técnica",
      "specs.title": "Compatibilidad y Especificaciones",
      "specs.subtitle": "Detalles técnicos del ecosistema MuStreamer.",
      "specs.thParam": "Parámetro",
      "specs.thSpec": "Especificación Soportada",
      "specs.r1Label": "Resolución Máxima",
      "specs.r1Val": "<strong>24-bit / 192 kHz</strong> (Hi-Res Studio Master Bit-Perfect)",
      "specs.r2Label": "Formatos de Audio",
      "specs.r3Label": "Servicios y Fuentes",
      "specs.r3Val": "<strong>Qobuz</strong> (Hi-Res FLAC) &bull; <strong>TIDAL</strong> (Max Hi-Res FLAC) &bull; <strong>50.000+ Radios en Vivo</strong> (incl. FLAC) &bull; <strong>Podcasts RSS</strong> &bull; <strong>Archivos Locales</strong>",
      "specs.r4Label": "Protocolo de Salida",
      "specs.r4Val": "UPnP AV / DLNA MediaRenderer 1.0/2.0, AirPlay y DAC USB/Local (WAV Bit-Perfect / FLAC Nativo)",
      "specs.r5Label": "Plataformas",
      "specs.r5Soon": "🪟 <strong>Windows 10/11 (64-bit)</strong> &bull; 🤖 <strong>Android 8.0+</strong> — ¡Ya disponibles (v1.2)!",
      "specs.r6Label": "Idiomas y Versión",
      "specs.r6Val": "<strong>8 idiomas</strong> (IT, EN, FR, DE, ES, PT, NL, JA) &bull; <strong>Apple v1.1.0</strong> &bull; <strong>Windows y Android v1.2.0</strong>",
      "footer.home": "Inicio",
      "footer.privacy": "Política de Privacidad",
      "footer.support": "Soporte y Contacto",
      "footer.copy": "&copy; 2026 MuStreamer. Todos los derechos reservados.",
      "footer.disclaimer": "<em>Nota Legal y Marcas:</em> Naim, Mu-so, Qobuz y TIDAL son marcas registradas de sus respectivos propietarios, citadas únicamente con fines descriptivos y de compatibilidad.",
      "privacy.badge": "Documento Oficial",
      "privacy.title": "Política de Privacidad",
      "privacy.updated": "Última actualización: 25 de Noviembre de 2026",
      "privacy.s1Title": "1. Nuestra filosofía de Privacidad",
      "privacy.s1Text": "<strong>MuStreamer NO recopila, NO almacena en servidores remotos y NO vende ningún dato personal o estadística de escucha a terceros</strong>.",
      "privacy.s2Title": "2. Credenciales (Qobuz y TIDAL)",
      "privacy.s2Intro": "Al iniciar sesión en Qobuz o TIDAL:",
      "privacy.s2Li1": "Los tokens se intercambian <strong>directamente y cifrados (HTTPS / TLS 1.3)</strong> con los servidores oficiales.",
      "privacy.s2Li2": "Tus credenciales se guardan <strong>exclusivamente en tu dispositivo</strong> mediante el almacén seguro del sistema (Llavero de Apple, Credential Manager en Windows y Android Keystore con AES-GCM).",
      "privacy.s2Li3": "Ningún dato pasa por servidores propios o intermediarios.",
      "privacy.s3Title": "3. Streaming en Red Local (UPnP / DLNA)",
      "privacy.s3Text": "La búsqueda de dispositivos ocurre <strong>íntegramente en tu red local (LAN)</strong> sin enviar información al exterior.",
      "privacy.s4Title": "4. Micrófono y Sonómetro (SPL)",
      "privacy.s4Text": "<strong>No se graba, guarda ni transmite ningún audio</strong>: se calcula al instante en memoria y se descarta de inmediato.",
      "privacy.s4bTitle": "5. Radio en Vivo, Podcasts y Archivos de Audio Locales",
      "privacy.s4bText": "Tus emisoras favoritas, Presets P1–P6, URL personalizadas y Podcasts guardados se almacenan exclusivamente en tu dispositivo. Los flujos de audio se conectan directamente desde tu dispositivo a la emisora o feed RSS elegido, sin servidores intermediarios. Al abrir <strong>Archivos de Audio Locales</strong> (FLAC, WAV, AIFF, ALAC, MP3), MuStreamer solo accede a ellos mediante los permisos seguros del Sandbox de Apple / app Archivos: ningún archivo local se sube ni comparte jamás al exterior.",
      "privacy.s5Title": "6. Sin Rastreo ni Cookies de Terceros",
      "privacy.s5Text": "La app no incluye rastreadores publicitarios ni bibliotecas de análisis de terceros.",
      "privacy.s6Title": "7. Contacto sobre Privacidad",
      "privacy.s6Text": "Escríbenos a <a href=\"mailto:mustreamer@outlook.it\" style=\"color: var(--accent-light); font-weight: 600;\">mustreamer@outlook.it</a> o visita nuestra <a href=\"support.html\" style=\"color: var(--accent-light); text-decoration: underline;\">página de soporte</a>.",
      "support.badge": "Asistencia y Comunidad",
      "support.title": "Soporte y Preguntas Frecuentes",
      "support.subtitle": "¿Necesitas ayuda o tienes alguna sugerencia? Aquí tienes respuestas rápidas y contacto directo.",
      "support.q1Title": "1. ¿Cómo conecto mi streamer o Naim Mu-so?",
      "support.q1Text": "Asegúrate de que tu Mac, iPhone, iPad, PC Windows o móvil Android esté en la <strong>misma red Wi-Fi o Ethernet</strong> que el streamer. MuStreamer descubre automáticamente los equipos vía SSDP/UPnP multi-tarjeta y muestra si usan Ethernet o Wi-Fi.",
      "support.q2Title": "2. ¿Cómo funcionan los 3 modos: FLAC Puro, Cloud Directo y WAV Local?",
      "support.q2Text": "En el panel <em>Diagnóstico y Motor de Audio</em> (Apple, Windows y Android) eliges entre <strong>3 modos audiófilos</strong>:<br>&bull; <strong>WAV Local (PCM + DSP 64-Bit)</strong>: Decodifica en RAM, aplica EQ 64-bit, Crossfeed y Fase, y envía WAV sin comprimir con Seek Instantáneo HTTP Range.<br>&bull; <strong>FLAC Puro (Pass-Through)</strong>: Puente HTTP local bit a bit preservando el flujo FLAC 24-bit/192 kHz.<br>&bull; <strong>Cloud Directo (Cero-Proxy)</strong>: Envía la URL CDN directa a streamers compatibles.",
      "support.q3Title": "3. ¿El modo Bit-Perfect está garantizado?",
      "support.q3Text": "Sí, sin remuestreos innecesarios hasta 24-bit / 192 kHz.",
      "support.q4Title": "4. ¿Qué suscripciones necesito?",
      "support.q4Text": "Puedes iniciar sesión con tu suscripción habitual de Qobuz (Studio/Sublime) o TIDAL (HiFi/Max). En cambio, las <strong>50.000+ Radios en Vivo</strong>, los <strong>Podcasts</strong>, la reproducción de <strong>Archivos de Audio Locales</strong> y el <em>Catálogo Demo sin Conexión</em> funcionan <strong>gratis y sin necesidad de suscripción</strong>.",
      "support.q5NewTitle": "5. ¿Qué novedades traen Apple v1.1 y Windows / Android v1.2?",
      "support.q5NewText": "Con <strong>MuStreamer v1.1 (macOS / iOS / iPadOS)</strong> y <strong>v1.2 (Windows 10/11 y Android)</strong> obtienes:<br>&bull; <strong>Soporte completo Windows 10/11 y Android</strong>: interfaz Liquid Glass oscura, UPnP/DLNA multi-tarjeta, 3 modos de streaming, vúmetros, FFT, DSP 64-bit y volumen <code>&plusmn;5%</code>.<br>&bull; <strong>Radios en Vivo y Podcasts</strong>: 50.000+ emisoras (incl. FLAC), presets P1–P6, copia <code>.M3U</code> y Podcasts RSS.<br>&bull; <strong>Archivos Locales y Seek Instantáneo</strong>: reproducción directa de <code>FLAC, WAV, AIFF, ALAC, MP3</code> con Seek HTTP Range y telemetría Ethernet/Wi-Fi.",
      "support.q5Title": "6. ¿Cómo puedo enviar una sugerencia o informar de un problema?",
      "support.q5Text": "Desde Ajustes (<strong>Enviar Feedback</strong>) o por email a <a href=\"mailto:mustreamer@outlook.it\" style=\"color: var(--accent-light); font-weight: 600;\">mustreamer@outlook.it</a>.",
      "support.bannerTitle": "¿Más preguntas?",
      "support.bannerText": "Respondemos rápidamente a cada amante de la alta fidelidad.",
      "support.bannerBtn": "Contáctanos por Email",
      "community.badge": "Comunidad Audiófila • Foro y Reseñas",
      "community.title": "Reseñas, Sugerencias y Foro",
      "community.subtitle": "Un espacio dedicado a quienes usan MuStreamer cada día: deja una reseña sobre tu equipo Hi-Fi, propón mejoras o abre un hilo. Cada mensaje envía una notificación por correo al desarrollador, que responde aquí mismo.",
      "community.ratingMeta": "Valoración Comunidad Hi-Fi &bull; Respuesta directa del desarrollador",
      "community.appStoreBtn": "★ Valorar también en App Store",
      "community.formTitle": "Escribe una Reseña o Sugerencia",
      "community.formSubtitle": "Tu mensaje llega al instante por correo a Gianluca (desarrollador de MuStreamer) para publicarse con respuesta oficial.",
      "community.emailAlertTag": "🔔 Aviso por Email Activo",
      "community.lblName": "Tu Nombre o Apodo *",
      "community.lblEmail": "Tu Email (para avisarte de la respuesta) *",
      "community.lblSetup": "Tu Equipo Hi-Fi / Streamer (opcional)",
      "community.lblCategory": "Tipo de Aporte",
      "community.catReview": "⭐ Reseña de Experiencia",
      "community.catSuggestion": "💡 Sugerencia de Función",
      "community.catQuestion": "🎧 Pregunta Técnica / Setup UPnP",
      "community.catBug": "🐛 Reportar Problema",
      "community.lblRating": "Valoración General",
      "community.lblTitle": "Título de la Reseña o Hilo *",
      "community.lblMessage": "Tu Mensaje *",
      "community.submitBtn": "Publicar y Notificar al Desarrollador",
      "community.formPrivacyNote": "Tu email nunca se muestra públicamente; solo se usa para avisarte cuando Gianluca responda.",
      "community.threadsTitle": "Discusiones y Reseñas de la Comunidad",
      "community.threadsBadge": "Respuestas Oficiales Activas",
      "community.devBadge": "👨‍💻 Gianluca • Creador y Desarrollador de MuStreamer",
      "community.badgeReview": "⭐ Reseña",
      "community.badgeSuggestion": "💡 Sugerencia",
      "community.t1Date": "Versión 1.0.1 &bull; Reseña Verificada",
      "community.t1Title": "¡Literalmente salvó mi Naim Mu-so de primera generación!",
      "community.t1Body": "Con flujos Qobuz 24-bit/192 kHz por Wi-Fi, mi Mu-so de 1.ª generación se cortaba todo el rato con viejas apps UPnP. Con la Decodificación Local WAV Bit-Perfect de MuStreamer el inicio es instantáneo y cero cortes en 3 horas. ¡Genial también la Radio FLAC en la 1.0.1!",
      "community.t1Reply": "¡Muchísimas gracias Marco! Es exactamente por eso que creé MuStreamer: trasladar la decodificación FLAC al iPhone/Mac libera completamente la CPU del Mu-so de 1.ª generación manteniendo una señal 100% Bit-Perfect. ¡Buena escucha!",
      "community.t2Date": "Versión 1.0.1 &bull; Sugerencia y Feedback",
      "community.t2Title": "Los VU Meter analógicos y las 50.000+ Radios en Vivo con copia .M3U son fantásticos",
      "community.t2Body": "Enhorabuena por la 1.0.1: guardar 6 presets rápidos P1–P6 para radios FLAC y exportar el respaldo .M3U entre Mac y iPhone es comodísimo. Como sugerencia, estaría genial tener absolutamente todas las pantallas traducidas.",
      "community.t2Reply": "¡Muchas gracias Alessandro! Excelente aporte: acabamos de completar la localización al 100% de todas las pantallas, herramientas Hi-Fi y fichas técnicas en los 8 idiomas (IT, EN, FR, DE, ES, PT, NL, JA) con cambio en tiempo real.",
      "community.t3Date": "Versión 1.0.1 &bull; Reseña Verificada",
      "community.t3Title": "Sonómetro SPL y Generador de Tonos integrados: una navaja suiza Hi-Fi",
      "community.t3Body": "Además de TIDAL Max y archivos FLAC locales desde USB, las herramientas acústicas (RTA, Sonómetro SPL y barrido 20Hz–20kHz) me ayudaron a detectar una resonancia a 63 Hz en mi sala y corregirla con el Auto-EQ. Única.",
      "community.t3Reply": "¡Qué alegría leer esto, Davide! La acústica de la sala supone más del 50% del sonido Hi-Fi: tener sonómetro SPL, generador de barrido y corrección paramétrica dentro del reproductor sirve justo para domar las resonancias.",
      "nav.platforms": "Windows &amp; Android",
      "hero.winCaption": "Gratis para PC",
      "hero.winStore": "Windows (.zip)",
      "hero.andCaption": "Descarga APK gratis",
      "hero.andStore": "Android (.apk)",
      "mockup.newWinAnd": "🪟 Windows 10/11 y 🤖 Android",
      "plat.badge": "Gran Lanzamiento • Ecosistema Completo",
      "plat.title": "Ahora Disponible también en <span class=\"text-gradient\">Windows y Android</span>",
      "plat.subtitle": "Todo el motor Bit-Perfect 24-bit/192 kHz, los 3 modos audiófilos y la suite de medición llegan a PCs Windows y móviles o tablets Android, además de Mac, iPhone y iPad.",
      "plat.chipWin": "🪟 Windows 10/11 (Nuevo v1.2)",
      "plat.chipAnd": "🤖 Android 8.0+ (Nuevo v1.2)",
      "plat.winTag": "ESCRITORIO WINDOWS • 64-BIT",
      "plat.winTitle": "MuStreamer para Windows Desktop",
      "plat.winDesc": "Controla tu equipo Hi-Fi desde PC Windows con la misma interfaz Liquid Glass oscura, descubrimiento SSDP multi-tarjeta (Ethernet + Wi-Fi) y proxy HTTP lossless local.",
      "plat.winB1": "3 Modos: <strong>FLAC Puro</strong> (Pass-Through), <strong>Cloud Directo</strong> y <strong>WAV Local + DSP 64-bit</strong>",
      "plat.winB2": "Detección automática multi-adaptador LAN/VPN con diagnóstico Ethernet y ping en vivo",
      "plat.winB3": "Vúmetros vintage, Espectro FFT, Rango Dinámico (DR), EQ 10 bandas y Mini-Player",
      "plat.winBtn": "Descargar Windows v1.2 (.zip)",
      "plat.winReq": "x64 Nativo • UPnP / DLNA",
      "plat.andTag": "APP ANDROID HI-RES",
      "plat.andTitle": "MuStreamer para Smartphones y Tablets Android",
      "plat.andDesc": "Lleva Qobuz Studio Master, TIDAL Max, 50.000+ Radios FLAC, Podcasts y archivos locales en tu bolsillo con streaming Bit-Perfect 24-bit/192 kHz hacia Naim Mu-so y cualquier streamer UPnP.",
      "plat.andB1": "Control de volumen de precisión en pasos <strong>&plusmn;5%</strong> y Seek Instantáneo HTTP Range",
      "plat.andB2": "Cola continua gapless, carátulas Hi-Res y 6 Presets rápidos P1–P6",
      "plat.andB3": "Monitor de jitter Wi-Fi en tiempo real y enlace Ethernet/Wi-Fi del streamer",
      "plat.andBtn": "Descargar APK Android v1.2 (.apk)",
      "plat.andReq": "Móviles y Tablets",
      "signal.modeCloud": "☁️ Cloud Directo CDN",
      "signal.s2TitleCloud": "Entrega Directa CDN → Streamer",
      "signal.s2MetaCloud": "Cero proxy local &bull; URL CDN certificada",
      "signal.s3TitleCloud": "Flujo HTTPS Directo → DAC",
      "signal.s3MetaCloud": "Carga mínima de app &bull; Batería óptima",
      "signal.noteBadgeCloud": "IDEAL PARA STREAMERS MODERNOS Y USO CONTINUO",
      "signal.noteTextCloud": "Conecta directamente el streamer compatible a servidores CDN lossless minimizando el gasto de CPU y batería.",
      "modal.contactBtn": "Solicitar Enlace / Soporte",
      "modal.guideBtn": "Guía y FAQ",
      "modal.winTitle": "MuStreamer v1.2 para Windows Desktop",
      "modal.winBody": "La compilación Windows 10/11 (64-bit) v1.2 se descarga como archivo .zip: descomprime toda la carpeta y ejecuta mustreamer.exe (en SmartScreen pulsa Más información -> Ejecutar de todas formas). Incluye UPnP multi-tarjeta, 3 modos Bit-Perfect y herramientas Hi-Fi.",
      "modal.winReqs": "<strong>Requisitos:</strong> Windows 10 / 11 (x64) &bull; Red local Wi-Fi o Ethernet hacia tu streamer UPnP/DLNA",
      "modal.andTitle": "MuStreamer v1.2 para Android",
      "modal.andBody": "La app Android v1.2 está disponible en descarga directa .apk firmada desde esta web: streaming Bit-Perfect 24-bit/192 kHz, pasos ±5%, Seek Instantáneo HTTP Range, 50.000+ Radios FLAC y diagnóstico Wi-Fi.",
      "modal.andReqs": "<strong>Requisitos:</strong> Android 8.0+ (ARM64) &bull; Smartphone o Tablet en red Wi-Fi local"
    },
    "pt": {
      "meta.index.title": "MuStreamer 1.2 - Streaming Audiófilo Bit-Perfect para Mac, iPhone, Windows e Android",
      "meta.index.desc": "O MuStreamer chegou também ao Windows 10/11 e Android, além de Mac, iPhone e iPad: streaming Bit-Perfect 24-bit/192 kHz, 3 modos (FLAC Puro, Cloud Direto, WAV Local), Qobuz, TIDAL, 50.000+ Rádios FLAC e ferramentas Hi-Fi.",
      "meta.privacy.title": "Política de Privacidade — MuStreamer",
      "meta.privacy.desc": "Política de privacidade do MuStreamer: respeito total pelos seus dados e credenciais protegidas localmente.",
      "meta.support.title": "Suporte & FAQ — MuStreamer",
      "meta.support.desc": "Centro de ajuda do MuStreamer: perguntas frequentes, ligação UPnP e contactos.",
      "meta.community.title": "Avaliações e Fórum de Sugestões — MuStreamer",
      "meta.community.desc": "Fórum oficial de Avaliações e Sugestões do MuStreamer: deixe a sua avaliação com estrelas, sugira funções Hi-Fi e leia as respostas diretas do programador.",
      "nav.features": "Funcionalidades",
      "nav.tools": "Ferramentas Hi-Fi",
      "nav.story": "A Nossa História",
      "nav.specs": "Especificações",
      "nav.support": "Suporte",
      "nav.community": "Avaliações & Fórum",
      "nav.privacy": "Privacidade",
      "nav.cta": "Descarregar App",
      "nav.backToApp": "Voltar à App",
      "hero.badge": "Novo v1.2 • Agora também no Windows &amp; Android!",
      "hero.title": "Nova vida para o seu sistema Hi-Fi.<br><span class=\"text-gradient\">Zero compromissos sonoros.</span>",
      "hero.lead": "O MuStreamer é o leitor audiófilo definitivo agora disponível no <strong>Mac, iPhone, iPad, Windows 10/11 e Android</strong>. Une a pureza <strong>Bit-Perfect 24-bit/192 kHz</strong> do <strong>Qobuz</strong>, <strong>TIDAL</strong> e <strong>Ficheiros Locais</strong> a <strong>50.000+ Rádios FLAC</strong> e <strong>Podcasts</strong>, com 3 modos (<em>FLAC Puro</em>, <em>Cloud Direto</em>, <em>WAV Local</em>).",
      "hero.macCaption": "Grátis para Mac",
      "hero.macStore": "Descarregar (.dmg)",
      "hero.iosCaption": "Descarregar na",
      "hero.discoverBtn": "Explorar Funções",
      "hero.subtitle": "Disponível para <strong>macOS 14+</strong>, <strong>iOS e iPadOS 17+</strong>, <strong>Windows 10/11 (64-bit)</strong> e <strong>Android 8.0+</strong> &bull; UPnP / DLNA Bit-Perfect.",
      "hero.macTip": "<strong>Instalação direta:</strong> <strong>Mac</strong> abra o <code>.dmg</code> e arraste para Aplicações (se pedido: <em>Definições &rarr; Privacidade &rarr; Abrir mesmo assim</em>) &bull; <strong>Windows</strong> extraia o <code>.zip</code> e abra <code>mustreamer.exe</code> (SmartScreen: <em>Mais informações &rarr; Executar mesmo assim</em>) &bull; <strong>Android</strong> abra o <code>.apk</code> e permita a instalação.",
      "hero.comingSoon": "Já disponível no <strong>Mac, iPhone, iPad, Windows e Android</strong>!",
      "mockup.title": "MuStreamer — Reprodução Hi-Res Bit-Perfect (FLAC 24-bit / 192 kHz)",
      "mockup.nowPlaying": "A reproduzir • Qobuz Studio Master",
      "mockup.decodeLine": "⚡ Descodificação: Local (Mac/iOS Offload) &bull; Saída: Bit-Perfect WAV Lossless",
      "mockup.vumeterTitle": "VU Meter Analógico Estéreo",
      "mockup.newLabel": "Novidade v1.2",
      "mockup.newRadio": "50.000+ Rádios ao Vivo &amp; FLAC",
      "mockup.newPodcast": "Podcasts &amp; Episódios do Dia",
      "mockup.newLocal": "📁 Ficheiros Locais Hi-Res",
      "mockup.newEngine": "⚙️ 3 Modos: FLAC Puro • Cloud • WAV",
      "features.badge": "Engenharia Acústica • Apple v1.1 &amp; Win/Android v1.2",
      "features.title": "Criado por e para Audiófilos",
      "features.subtitle": "Todas as fontes e tecnologias para superar os limites dos protocolos antigos e desfrutar de cada nuance sonora.",
      "features.newTag": "Novidade 1.0.1",
      "features.c7Title": "Rádio ao Vivo do Mundo (50.000+)",
      "features.c7Desc": "Estações de 224 países e streams audiófilos FLAC lossless com títulos em direto. Guarde Favoritas, defina 6 Presets rápidos P1–P6, adicione URLs personalizados e exporte/importe cópias .M3U.",
      "features.c8Title": "Podcasts &amp; Episódios do Dia",
      "features.c8Desc": "Tops de Itália e do Mundo, pesquisa instantânea e streaming integral de episódios no iPhone, Mac, AirPlay e streamers UPnP com saltos rápidos de -15s / +30s e programas favoritos.",
      "features.c9Title": "Ficheiros Locais Hi-Res &amp; Motor Estúdio",
      "features.c9Desc": "Reproduza ficheiros FLAC, WAV, AIFF, ALAC e MP3 do seu dispositivo ou unidade/DAC USB. O novo painel estúdio ajusta num toque WAV Bit-Perfect, FLAC Nativo, frequência máx. (44.1–192 kHz) e Pré-buffering RAM.",
      "features.c1Title": "100% Bit-Perfect & Hi-Res",
      "features.c1Desc": "Sem reamostragem nem compressão: até 192 kHz / 24 bits fiéis ao master original.",
      "features.c2Title": "Descodificação Local Inteligente",
      "features.c2Desc": "Em streamers com CPU antigo (como o Naim Mu-so 1ª ger.), o Mac ou iPhone descodifica e envia um fluxo estável sem quebras.",
      "features.c3Title": "Qobuz & TIDAL Integrados",
      "features.c3Desc": "Acesso direto a catálogos imensos, Studio Masters e favoritos sem sair da aplicação.",
      "features.c4Title": "Protocolo UPnP / DLNA Estendido",
      "features.c4Desc": "Deteção instantânea de leitores de rede e DACs Wi-Fi com buffer anti-jitter.",
      "features.c5Title": "Equalizador & Correção de áudio",
      "features.c5Desc": "Equalizador paramétrico de 10 bandas para adaptar o som à acústica da sua sala.",
      "features.c6Title": "Interface Hi-Fi Dark",
      "features.c6Desc": "Estética em laranja Hi-Fi e preto titânio com capas em alta resolução.",
      "signal.badge": "CAMINHO DE SINAL BIT-PERFECT",
      "signal.title": "Como o MuStreamer elimina bloqueios em streamers Hi-Fi",
      "signal.subtitle": "Compare em tempo real os dois modos do motor de áudio: escolha entre descodificação local no Mac/iPhone ou FLAC nativo para o DAC do streamer.",
      "signal.modeWav": "⚡ WAV Local (DSP 64-Bit)",
      "signal.modeFlac": "📡 FLAC Puro (Pass-Through)",
      "signal.s1Kicker": "Fonte Lossless",
      "signal.s1Title": "Qobuz • TIDAL • Rádio • Ficheiros",
      "signal.s1Meta": "Master FLAC até 24-bit / 192 kHz",
      "signal.s2Kicker": "Motor MuStreamer",
      "signal.s2TitleWav": "Descodificação Local + DSP 64-Bit",
      "signal.s2TitleFlac": "Ponte HTTP FLAC Pass-Through",
      "signal.s2MetaWav": "FLAC → PCM/WAV + EQ, Fase e Range Seek",
      "signal.s2MetaFlac": "Ponte bit-a-bit sem recodificação RAM",
      "signal.s3Kicker": "Transporte Rede LAN / Wi-Fi",
      "signal.s3TitleWav": "WAV Linear Bit-Perfect",
      "signal.s3TitleFlac": "FLAC Lossless Comprimido",
      "signal.s3MetaWav": "Arranque ~0,2s • Carga CPU Streamer 0%",
      "signal.s3MetaFlac": "Menor banda Wi-Fi • Descodificação DAC",
      "signal.s4Kicker": "O Seu Sistema Hi-Fi",
      "signal.s4Title": "Naim • UPnP • AirPlay • DAC USB",
      "signal.s4Meta": "100% Bit-Perfect • Zero Resampling",
      "signal.noteBadgeWav": "IDEAL PARA NAIM MU-SO 1.ª GER. E DSP 64-BIT",
      "signal.noteBadgeFlac": "IDEAL PARA STREAMERS HI-FI E ETHERNET/WI-FI",
      "signal.noteTextWav": "Descodifica o FLAC no Mac, iPhone, Windows ou Android enviando PCM/WAV pronto para o DAC com EQ 64-bit e Seek Instantâneo HTTP Range.",
      "signal.noteTextFlac": "Reencaminha o fluxo FLAC original bit-a-bit pela ponte HTTP local sem buffer RAM (incl. audio/x-flac para Mu-so 1.ª ger.).",
      "tools.badge": "Laboratório de Medição",
      "tools.title": "Suite de Ferramentas de Precisão",
      "tools.subtitle": "Instrumentos reais de análise e calibração acústica integrados.",
      "tools.c1Title": "VU Meter Analógico",
      "tools.c1Desc": "Monitorize em tempo real os níveis RMS e picos dinâmicos estéreo.",
      "tools.c2Title": "Analisador de Espetro (RTA)",
      "tools.c2Desc": "Visualize frequências de 20 Hz a mais de 20 kHz para detetar ressonâncias da sala.",
      "tools.c3Title": "Medidor SPL no Ponto de Audição",
      "tools.c3Desc": "Meça a pressão sonora em dB(A) e dB(C) através do microfone do Mac ou iPhone.",
      "tools.c4Title": "Gerador de Ruído Rosa & Tons",
      "tools.c4Desc": "Emita ruído rosa, branco ou tons sinusoidais (20 Hz – 20 kHz) para calibrar colunas.",
      "story.badge": "Nos bastidores",
      "story.title": "Porque nasceu o MuStreamer",
      "story.p1": "Como utilizador de um sistema Tudo-em-Um veterano (o mítico <strong>Naim Mu-so</strong> de primeira geração), sempre apreciei a sua qualidade sonora, mas surgiram três limitações:",
      "story.li1": "<strong>Ausência de integração nativa com Qobuz</strong>",
      "story.li2": "<strong>Estabilidade Wi-Fi irregular</strong> sem cabo Ethernet",
      "story.li3": "<strong>Processador interno limitado</strong> para ficheiros Hi-Res mais exigentes",
      "story.p2": "A alternativa UPnP sofria com aplicações lentas, instáveis e desatualizadas.",
      "story.p3": "Por isso nasceu o <strong>MuStreamer</strong>: rápido, moderno e equipado com <em>VU Meter analógico</em>, <em>RTA</em>, <em>sonómetro SPL</em> e <em>gerador de sinais</em>, unindo Qobuz e TIDAL.",
      "story.p4": "Permite delegar a descodificação ao Mac/iPhone ou ao DAC interno — sempre com transmissão <strong>Bit-Perfect</strong>.",
      "story.p5": "Espero que dê nova vida aos vossos sistemas. Qualquer sugestão nas Definições será muito bem-vinda! 😊",
      "story.role": "Criador e Programador do MuStreamer",
      "specs.badge": "Ficha Técnica",
      "specs.title": "Compatibilidade & Especificações",
      "specs.subtitle": "Detalhes técnicos do ecossistema MuStreamer.",
      "specs.thParam": "Parâmetro",
      "specs.thSpec": "Especificação Suportada",
      "specs.r1Label": "Resolução Máxima",
      "specs.r1Val": "<strong>24-bit / 192 kHz</strong> (Hi-Res Studio Master Bit-Perfect)",
      "specs.r2Label": "Formatos de Áudio",
      "specs.r3Label": "Serviços &amp; Fontes",
      "specs.r3Val": "<strong>Qobuz</strong> (Hi-Res FLAC) &bull; <strong>TIDAL</strong> (Max Hi-Res FLAC) &bull; <strong>50.000+ Rádios ao Vivo</strong> (incl. FLAC) &bull; <strong>Podcasts RSS</strong> &bull; <strong>Ficheiros Locais</strong>",
      "specs.r4Label": "Protocolo de Saída",
      "specs.r4Val": "UPnP AV / DLNA MediaRenderer 1.0/2.0, AirPlay e DAC USB/Local (WAV Bit-Perfect / FLAC Nativo)",
      "specs.r5Label": "Plataformas",
      "specs.r5Soon": "🪟 <strong>Windows 10/11 (64-bit)</strong> &bull; 🤖 <strong>Android 8.0+</strong> — Já disponíveis (v1.2)!",
      "specs.r6Label": "Idiomas &amp; Versão",
      "specs.r6Val": "<strong>8 idiomas</strong> (IT, EN, FR, DE, ES, PT, NL, JA) &bull; <strong>Apple v1.1.0</strong> &bull; <strong>Windows e Android v1.2.0</strong>",
      "footer.home": "Início",
      "footer.privacy": "Política de Privacidade",
      "footer.support": "Suporte & Contactos",
      "footer.copy": "&copy; 2026 MuStreamer. Todos os direitos reservados.",
      "footer.disclaimer": "<em>Nota Legal & Marcas:</em> Naim, Mu-so, Qobuz e TIDAL são marcas registadas dos respetivos proprietários, citadas apenas para fins descritivos e de compatibilidade.",
      "privacy.badge": "Documento Oficial",
      "privacy.title": "Política de Privacidade",
      "privacy.updated": "Última atualização: 25 de Novembro de 2026",
      "privacy.s1Title": "1. A nossa filosofia de Privacidade",
      "privacy.s1Text": "<strong>O MuStreamer NÃO recolhe, NÃO guarda em servidores remotos e NÃO vende quaisquer dados pessoais ou estatísticas de audição a terceiros</strong>.",
      "privacy.s2Title": "2. Credenciais (Qobuz & TIDAL)",
      "privacy.s2Intro": "Ao iniciar sessão na app:",
      "privacy.s2Li1": "Tokens trocados <strong>diretamente por ligação cifrada (HTTPS / TLS 1.3)</strong> com os servidores oficiais.",
      "privacy.s2Li2": "Credenciais armazenadas <strong>apenas no seu dispositivo</strong> através do cofre seguro do sistema (Porta-chaves Apple, Credential Manager no Windows e Android Keystore AES-GCM).",
      "privacy.s2Li3": "Nenhum dado passa por servidores intermédios.",
      "privacy.s3Title": "3. Streaming Local (UPnP / DLNA)",
      "privacy.s3Text": "A descoberta de dispositivos ocorre <strong>inteiramente na sua rede local (LAN)</strong>.",
      "privacy.s4Title": "4. Microfone & Medidor SPL",
      "privacy.s4Text": "<strong>Nenhum áudio é gravado ou enviado</strong>: o cálculo é instantâneo em memória.",
      "privacy.s4bTitle": "5. Rádio ao Vivo, Podcasts e Ficheiros de Áudio Locais",
      "privacy.s4bText": "As estações de Rádio favoritas, Presets P1–P6, URLs personalizados e Podcasts guardados ficam armazenados exclusivamente no seu dispositivo. Os fluxos de áudio ligam-se diretamente do seu dispositivo à estação ou feed RSS escolhido, sem servidores intermediários. Ao abrir <strong>Ficheiros de Áudio Locais</strong> (FLAC, WAV, AIFF, ALAC, MP3), o MuStreamer lê as faixas apenas através das permissões seguras da Sandbox Apple / app Ficheiros: nenhum ficheiro local é carregado ou partilhado externamente.",
      "privacy.s5Title": "6. Sem Rastreamento nem Cookies de Terceiros",
      "privacy.s5Text": "Sem rastreadores publicitários ou analytics de terceiros.",
      "privacy.s6Title": "7. Contacto de Privacidade",
      "privacy.s6Text": "Escreva para <a href=\"mailto:mustreamer@outlook.it\" style=\"color: var(--accent-light); font-weight: 600;\">mustreamer@outlook.it</a> ou veja a <a href=\"support.html\" style=\"color: var(--accent-light); text-decoration: underline;\">página de suporte</a>.",
      "support.badge": "Assistência & Comunidade",
      "support.title": "Suporte & Perguntas Frequentes",
      "support.subtitle": "Precisa de ajuda na configuração? Encontre aqui as respostas principais.",
      "support.q1Title": "1. Como ligo o meu streamer ou Naim Mu-so?",
      "support.q1Text": "Certifique-se de que o Mac, iPhone, iPad, PC Windows ou Android está na <strong>mesma rede Wi-Fi ou Ethernet</strong> do streamer. O MuStreamer deteta automaticamente via SSDP/UPnP multi-placa e mostra o tipo de ligação (Ethernet/Wi-Fi).",
      "support.q2Title": "2. Como funcionam os 3 modos: FLAC Puro, Cloud Direto e WAV Local?",
      "support.q2Text": "No painel <em>Diagnóstico e Motor de Áudio</em> (Apple, Windows e Android) escolhe entre <strong>3 modos audiófilos</strong>:<br>&bull; <strong>WAV Local (PCM + DSP 64-Bit)</strong>: Descodifica em RAM, aplica EQ 64-bit, Crossfeed e Fase, enviando WAV sem compressão com Seek HTTP Range.<br>&bull; <strong>FLAC Puro (Pass-Through)</strong>: Ponte HTTP local bit-a-bit até 24-bit/192 kHz.<br>&bull; <strong>Cloud Direto (Zero-Proxy)</strong>: Envia o URL CDN diretamente ao streamer.",
      "support.q3Title": "3. O modo Bit-Perfect é sempre garantido?",
      "support.q3Text": "Sim, sem reamostragens indesejadas até 24-bit / 192 kHz.",
      "support.q4Title": "4. Que subscrições são necessárias?",
      "support.q4Text": "Pode iniciar sessão com a sua subscrição habitual do Qobuz (Studio/Sublime) ou TIDAL (HiFi/Max). Já as <strong>50.000+ Rádios ao Vivo</strong>, os <strong>Podcasts</strong>, a reprodução de <strong>Ficheiros de Áudio Locais</strong> e o <em>Catálogo Demo Offline</em> funcionam <strong>gratuitamente e sem qualquer subscrição</strong>.",
      "support.q5NewTitle": "5. Quais são as novidades da versão Apple v1.1 e Windows / Android v1.2?",
      "support.q5NewText": "Com o <strong>MuStreamer v1.1 (macOS / iOS / iPadOS)</strong> e <strong>v1.2 (Windows 10/11 e Android)</strong>:<br>&bull; <strong>Suporte total Windows 10/11 e Android</strong>: interface Liquid Glass escura, UPnP/DLNA multi-placa, 3 modos, VU Meters, FFT, DSP 64-bit e volume <code>&plusmn;5%</code>.<br>&bull; <strong>Rádio ao Vivo &amp; Podcasts</strong>: 50.000+ estações (incl. FLAC), 6 presets P1–P6, backup <code>.M3U</code> e Podcasts RSS.<br>&bull; <strong>Ficheiros Locais &amp; Seek Instantâneo</strong>: reprodução direta de <code>FLAC, WAV, AIFF, ALAC, MP3</code> com Seek HTTP Range e diagnóstico Ethernet/Wi-Fi.",
      "support.q5Title": "6. Como posso enviar uma sugestão ou reportar um problema?",
      "support.q5Text": "Através da opção <strong>Enviar Feedback</strong> nas Definições ou por email: <a href=\"mailto:mustreamer@outlook.it\" style=\"color: var(--accent-light); font-weight: 600;\">mustreamer@outlook.it</a>.",
      "support.bannerTitle": "Ainda tem dúvidas?",
      "support.bannerText": "Respondemos rapidamente a todos os entusiastas de alta-fidelidade.",
      "support.bannerBtn": "Contactar por Email",
      "community.badge": "Comunidade Audiófila • Fórum & Avaliações",
      "community.title": "Avaliações, Sugestões & Fórum",
      "community.subtitle": "Um espaço dedicado a quem usa o MuStreamer todos os dias: deixe uma avaliação sobre o seu sistema Hi-Fi, sugira melhorias ou inicie uma discussão. Cada mensagem envia um alerta imediato por email ao programador, que responde aqui.",
      "community.ratingMeta": "Avaliação Comunidade Hi-Fi &bull; Resposta direta do programador",
      "community.appStoreBtn": "★ Avaliar também na App Store",
      "community.formTitle": "Escrever Avaliação ou Sugestão",
      "community.formSubtitle": "A sua mensagem é enviada em tempo real por email para o Gianluca (programador do MuStreamer) para publicação com resposta oficial.",
      "community.emailAlertTag": "🔔 Notificação por Email Ativa",
      "community.lblName": "O seu Nome ou Nickname *",
      "community.lblEmail": "O seu Email (para receber aviso de resposta) *",
      "community.lblSetup": "O seu Sistema Hi-Fi / Streamer (opcional)",
      "community.lblCategory": "Tipo de Contributo",
      "community.catReview": "⭐ Avaliação da Experiência",
      "community.catSuggestion": "💡 Sugestão de Nova Função",
      "community.catQuestion": "🎧 Questão Técnica / Setup UPnP",
      "community.catBug": "🐛 Reportar Problema",
      "community.lblRating": "Avaliação Global",
      "community.lblTitle": "Título da Avaliação ou Tópico *",
      "community.lblMessage": "A sua Mensagem *",
      "community.submitBtn": "Publicar & Notificar o Programador",
      "community.formPrivacyNote": "O seu email nunca é mostrado publicamente; serve apenas para o avisar quando o Gianluca responder.",
      "community.threadsTitle": "Discussões & Avaliações da Comunidade",
      "community.threadsBadge": "Respostas Oficiais Ativas",
      "community.devBadge": "👨‍💻 Gianluca • Criador & Programador do MuStreamer",
      "community.badgeReview": "⭐ Avaliação",
      "community.badgeSuggestion": "💡 Sugestão",
      "community.t1Date": "Versão 1.0.1 &bull; Avaliação Verificada",
      "community.t1Title": "Salvou literalmente o meu Naim Mu-so de primeira geração!",
      "community.t1Body": "Com streams Qobuz 24-bit/192 kHz por Wi-Fi, o meu Mu-so 1.ª geração falhava sempre com as apps UPnP antigas. Com a Descodificação Local WAV Bit-Perfect do MuStreamer o arranque é imediato e sem cortes em 3 horas. Excelente também a Rádio FLAC na 1.0.1!",
      "community.t1Reply": "Muito obrigado Marco! Foi exatamente por isso que criei o MuStreamer: passar a descodificação FLAC para o iPhone/Mac liberta a CPU do Mu-so 1.ª geração mantendo o sinal 100% Bit-Perfect. Boas audições!",
      "community.t2Date": "Versão 1.0.1 &bull; Sugestão &amp; Feedback",
      "community.t2Title": "Os VU Meter analógicos e as 50.000+ Rádios ao Vivo com cópia .M3U são fantásticos",
      "community.t2Body": "Parabéns pela atualização 1.0.1: guardar 6 presets rápidos P1–P6 para rádios FLAC e exportar o backup .M3U entre Mac e iPhone é super prático. Como sugestão, seria ótimo ter todos os ecrãs totalmente traduzidos.",
      "community.t2Reply": "Muito obrigado Alessandro! Excelente sugestão: acabámos de concluir a localização a 100% de todos os ecrãs, ferramentas Hi-Fi e fichas técnicas nos 8 idiomas (IT, EN, FR, DE, ES, PT, NL, JA) com troca instantânea.",
      "community.t3Date": "Versão 1.0.1 &bull; Avaliação Verificada",
      "community.t3Title": "Medidor SPL e Gerador de Tons integrados: um verdadeiro canivete suíço Hi-Fi",
      "community.t3Body": "Além de TIDAL Max e ficheiros FLAC locais por USB, a suite acústica (RTA, Medidor SPL e sweep 20Hz–20kHz) ajudou-me a detetar uma ressonância nos 63 Hz na minha sala e corrigi-la com o Auto-EQ. Única.",
      "community.t3Reply": "Que alegria ler isto, Davide! A acústica da sala faz mais de 50% do som de um sistema Hi-Fi: ter medidor SPL, gerador de sweep e correção paramétrica no leitor serve exatamente para domar as ressonâncias.",
      "nav.platforms": "Windows &amp; Android",
      "hero.winCaption": "Grátis para PC",
      "hero.winStore": "Windows (.zip)",
      "hero.andCaption": "Transferir APK grátis",
      "hero.andStore": "Android (.apk)",
      "mockup.newWinAnd": "🪟 Windows 10/11 &amp; 🤖 Android",
      "plat.badge": "Grande Lançamento • Ecossistema Completo",
      "plat.title": "Agora também disponível para <span class=\"text-gradient\">Windows &amp; Android</span>",
      "plat.subtitle": "Levamos todo o motor Bit-Perfect 24-bit/192 kHz, os 3 modos audiófilos e o laboratório acústico para PCs Windows e smartphones/tablets Android, além de Mac, iPhone e iPad.",
      "plat.chipWin": "🪟 Windows 10/11 (Novo v1.2)",
      "plat.chipAnd": "🤖 Android 8.0+ (Novo v1.2)",
      "plat.winTag": "WINDOWS DESKTOP • 64-BIT",
      "plat.winTitle": "MuStreamer para Windows Desktop",
      "plat.winDesc": "Controle o seu sistema Hi-Fi diretamente a partir do PC Windows com a mesma interface Liquid Glass escura, descoberta SSDP multi-placa (Ethernet + Wi-Fi) e proxy lossless local.",
      "plat.winB1": "3 Modos: <strong>FLAC Puro</strong> (Pass-Through), <strong>Cloud Direto</strong> e <strong>WAV Local + DSP 64-bit</strong>",
      "plat.winB2": "Deteção automática multi-adaptador LAN/VPN com diagnóstico Ethernet e ping ao vivo",
      "plat.winB3": "VU Meters vintage, Espetro FFT, Dynamic Range (DR), EQ 10 bandas e Mini-Player",
      "plat.winBtn": "Transferir Windows v1.2 (.zip)",
      "plat.winReq": "x64 Nativo • UPnP / DLNA",
      "plat.andTag": "APP ANDROID HI-RES",
      "plat.andTitle": "MuStreamer para Smartphones e Tablets Android",
      "plat.andDesc": "Tenha Qobuz Studio Master, TIDAL Max, 50.000+ Rádios FLAC, Podcasts e ficheiros locais sempre consigo com streaming Bit-Perfect 24-bit/192 kHz para Naim Mu-so e qualquer streamer UPnP.",
      "plat.andB1": "Controlo preciso de volume em passos <strong>&plusmn;5%</strong> e Seek Instantâneo HTTP Range",
      "plat.andB2": "Fila contínua gapless, capas Hi-Res e 6 Memórias de Rádio P1–P6",
      "plat.andB3": "Monitorização de jitter Wi-Fi em tempo real e ligação Ethernet/Wi-Fi do streamer",
      "plat.andBtn": "Transferir APK Android v1.2 (.apk)",
      "plat.andReq": "Smartphones e Tablets",
      "signal.modeCloud": "☁️ Cloud Direto CDN",
      "signal.s2TitleCloud": "Entrega Direta CDN → Streamer",
      "signal.s2MetaCloud": "Zero proxy local &bull; URL CDN certificado",
      "signal.s3TitleCloud": "Stream HTTPS Direto → DAC",
      "signal.s3MetaCloud": "Carga mínima da app &bull; Máxima bateria",
      "signal.noteBadgeCloud": "IDEAL PARA STREAMERS MODERNOS E ESCUTA CONTÍNUA",
      "signal.noteTextCloud": "Liga diretamente o streamer compatível aos servidores CDN lossless com consumo mínimo de CPU e bateria.",
      "modal.contactBtn": "Pedir Link / Suporte",
      "modal.guideBtn": "Guia e FAQ",
      "modal.winTitle": "MuStreamer v1.2 para Windows Desktop",
      "modal.winBody": "A versão Windows 10/11 (64-bit) v1.2 é transferida diretamente em formato .zip: extraia toda a pasta e execute mustreamer.exe (no SmartScreen: Mais informações -> Executar mesmo assim). Inclui UPnP multi-placa, 3 modos Bit-Perfect e ferramentas de estúdio.",
      "modal.winReqs": "<strong>Requisitos:</strong> Windows 10 / 11 (x64) &bull; Rede local Wi-Fi ou Ethernet para o streamer UPnP/DLNA",
      "modal.andTitle": "MuStreamer v1.2 para Android",
      "modal.andBody": "A app Android v1.2 está disponível por transferência direta .apk assinada neste site: Bit-Perfect 24-bit/192 kHz para Naim Mu-so e UPnP/DLNA, volume ±5%, Seek Instantâneo, 50.000+ Rádios FLAC e diagnóstico Wi-Fi.",
      "modal.andReqs": "<strong>Requisitos:</strong> Android 8.0+ (ARM64) &bull; Smartphone ou Tablet na rede Wi-Fi local"
    },
    "nl": {
      "meta.index.title": "MuStreamer 1.2 - Bit-Perfect Audiofiele Streaming voor Mac, iPhone, Windows & Android",
      "meta.index.desc": "MuStreamer is nu ook beschikbaar voor Windows 10/11 en Android naast Mac, iPhone en iPad: 24-bit/192 kHz Bit-Perfect, 3 modi (Pure FLAC, Cloud Direct, Lokale WAV), Qobuz, TIDAL, 50.000+ FLAC-radio's & Hi-Fi tools.",
      "meta.privacy.title": "Privacybeleid — MuStreamer",
      "meta.privacy.desc": "Privacybeleid van MuStreamer: volledige gegevensbescherming, geen tracking, inloggegevens lokaal bewaard.",
      "meta.support.title": "Support & FAQ — MuStreamer",
      "meta.support.desc": "MuStreamer Ondersteuning: veelgestelde vragen, UPnP-gids en contact.",
      "meta.community.title": "Beoordelingen & Suggesties Forum — MuStreamer",
      "meta.community.desc": "Officieel MuStreamer Beoordelingen- & Suggestiesforum: plaats een sterrenbeoordeling, stel nieuwe Hi-Fi-functies voor en lees directe antwoorden van de ontwikkelaar.",
      "nav.features": "Kenmerken",
      "nav.tools": "Hi-Fi Tools",
      "nav.story": "Ons Verhaal",
      "nav.specs": "Specificaties",
      "nav.support": "Support",
      "nav.community": "Reviews & Forum",
      "nav.privacy": "Privacybeleid",
      "nav.cta": "Download App",
      "nav.backToApp": "Terug naar App",
      "hero.badge": "Nieuw v1.2 • Nu ook op Windows &amp; Android!",
      "hero.title": "Nieuw leven voor uw Hi-Fi-systeem.<br><span class=\"text-gradient\">Geen enkel geluidscompromis.</span>",
      "hero.lead": "MuStreamer is dé audiofiele speler, nu beschikbaar voor <strong>Mac, iPhone, iPad, Windows 10/11 en Android</strong>. Combineert <strong>Bit-Perfect 24-bit/192 kHz</strong> van <strong>Qobuz</strong>, <strong>TIDAL</strong> en <strong>Lokale Bestanden</strong> met <strong>50.000+ FLAC Radio's</strong> en <strong>Podcasts</strong>, inclusief 3 streaming-modi (<em>Pure FLAC</em>, <em>Cloud Direct</em>, <em>Lokale WAV</em>).",
      "hero.macCaption": "Gratis voor Mac",
      "hero.macStore": "Download (.dmg)",
      "hero.iosCaption": "Download in de",
      "hero.discoverBtn": "Ontdek Functies",
      "hero.subtitle": "Beschikbaar voor <strong>macOS 14+</strong>, <strong>iOS &amp; iPadOS 17+</strong>, <strong>Windows 10/11 (64-bit)</strong> en <strong>Android 8.0+</strong> &bull; UPnP / DLNA Bit-Perfect.",
      "hero.macTip": "<strong>Direct installeren:</strong> <strong>Mac</strong> open <code>.dmg</code> en sleep naar Programma's (indien nodig: <em>Systeeminstellingen &rarr; Privacy &rarr; Open toch</em>) &bull; <strong>Windows</strong> pak de <code>.zip</code> uit en start <code>mustreamer.exe</code> (SmartScreen: <em>Meer informatie &rarr; Toch uitvoeren</em>) &bull; <strong>Android</strong> open het <code>.apk</code>-bestand en sta installatie toe.",
      "hero.comingSoon": "Nu beschikbaar voor <strong>Mac, iPhone, iPad, Windows &amp; Android</strong>!",
      "mockup.title": "MuStreamer — Hi-Res Bit-Perfect Weergave (FLAC 24-bit / 192 kHz)",
      "mockup.nowPlaying": "Speelt nu • Qobuz Studio Master",
      "mockup.decodeLine": "⚡ Decodering: Lokaal (Mac/iOS Offload) &bull; Uitgang: Bit-Perfect WAV Lossless",
      "mockup.vumeterTitle": "Analoge Stereo VU-Meter",
      "mockup.newLabel": "Nieuw v1.2",
      "mockup.newRadio": "50.000+ Live Radio &amp; FLAC",
      "mockup.newPodcast": "Podcasts &amp; Afleveringen",
      "mockup.newLocal": "📁 Lokale Hi-Res Bestanden",
      "mockup.newEngine": "⚙️ 3 Modi: Pure FLAC • Cloud • WAV",
      "features.badge": "Akoestische Engineering • Apple v1.1 &amp; Win/Android v1.2",
      "features.title": "Ontworpen door en voor Audiofielen",
      "features.subtitle": "Alle bronnen en technologieën om de grenzen van oude protocollen te overwinnen en van elke muzikale nuance te genieten.",
      "features.newTag": "Nieuw in 1.0.1",
      "features.c7Title": "Wereldwijde Live Radio (50.000+)",
      "features.c7Desc": "Zenders uit 224 landen en audiofiele lossless FLAC-streams met live titelweergave. Bewaar Favorieten, stel 6 snelle P1–P6 Presets in, voeg eigen URL's toe en exporteer/importeer .M3U-back-ups.",
      "features.c8Title": "Podcasts &amp; Afleveringen van de Dag",
      "features.c8Desc": "Hitlijsten voor Italië en Wereldwijd, directe zoekfunctie en volledige afleveringen streamen op iPhone, Mac, AirPlay en UPnP-streamers met -15s / +30s sprongen en favoriete shows.",
      "features.c9Title": "Lokale Hi-Res Bestanden &amp; Studio-Engine",
      "features.c9Desc": "Speel FLAC-, WAV-, AIFF-, ALAC- en MP3-bestanden af vanaf je apparaat of USB-drive/DAC. Het nieuwe studiopaneel schakelt met één tik tussen WAV Bit-Perfect, Native FLAC, max. sample rate (44.1–192 kHz) en RAM Pre-buffering.",
      "features.c1Title": "100% Bit-Perfect & Hi-Res",
      "features.c1Desc": "Audiogegevens bereiken uw installatie zonder resampling of compressie, tot 192 kHz / 24-bit.",
      "features.c2Title": "Slimme Lokale Decodering",
      "features.c2Desc": "Laat uw Mac of iPhone zware bestanden decoderen bij streamers met een oudere CPU (zoals de 1e gen. Naim Mu-so) voor een vloeiende weergave zonder haperingen.",
      "features.c3Title": "Qobuz & TIDAL Geïntegreerd",
      "features.c3Desc": "Direct toegang tot volledige catalogi, Studio Masters en favorieten in één app.",
      "features.c4Title": "Uitgebreid UPnP / DLNA Protocol",
      "features.c4Desc": "Directe detectie van netwerkstreamers met voorspellende anti-jitter buffering.",
      "features.c5Title": "Equalizer & Akoestische Correctie",
      "features.c5Desc": "10-bands parametrische equalizer voor perfecte afstemming op uw luisterruimte.",
      "features.c6Title": "Hi-Fi Dark Interface",
      "features.c6Desc": "Stijlvol ontwerp in titaniumzwart en Hi-Fi-oranje met haarscherpe albumhoezen.",
      "signal.badge": "BIT-PERFECT SIGNAALPAD",
      "signal.title": "Hoe MuStreamer haperingen op Hi-Fi-streamers verhelpt",
      "signal.subtitle": "Vergelijk beide modi van de audio-engine live: kies tussen lokale decodering op je Mac/iPhone of native FLAC pass-through naar de DAC van je streamer.",
      "signal.modeWav": "⚡ Lokale WAV (64-Bit DSP)",
      "signal.modeFlac": "📡 Pure FLAC (Pass-Through)",
      "signal.s1Kicker": "Lossless Bron",
      "signal.s1Title": "Qobuz • TIDAL • Radio • Bestanden",
      "signal.s1Meta": "Master FLAC tot 24-bit / 192 kHz",
      "signal.s2Kicker": "MuStreamer Engine",
      "signal.s2TitleWav": "Lokale Decodering + 64-Bit DSP",
      "signal.s2TitleFlac": "HTTP FLAC Pass-Through Bridge",
      "signal.s2MetaWav": "FLAC → PCM/WAV + EQ, Fase &amp; Range Seek",
      "signal.s2MetaFlac": "Bit-voor-bit brug zonder RAM-hercodering",
      "signal.s3Kicker": "LAN / Wi-Fi Transport",
      "signal.s3TitleWav": "Lineaire Bit-Perfect WAV",
      "signal.s3TitleFlac": "Gecomprimeerde Lossless FLAC",
      "signal.s3MetaWav": "Start ~0,2s • 0% Streamer CPU-belasting",
      "signal.s3MetaFlac": "Minder Wi-Fi-bandbreedte • DAC-decodering",
      "signal.s4Kicker": "Jouw Hi-Fi-systeem",
      "signal.s4Title": "Naim • UPnP • AirPlay • USB-DAC",
      "signal.s4Meta": "100% Bit-Perfect • Geen Resampling",
      "signal.noteBadgeWav": "IDEAAL VOOR NAIM MU-SO 1E GEN. &amp; 64-BIT DSP",
      "signal.noteBadgeFlac": "IDEAAL VOOR HI-FI STREAMERS &amp; ETHERNET/WI-FI",
      "signal.noteTextWav": "Verplaatst FLAC-decodering naar Mac, iPhone, Windows of Android en levert DAC-klare PCM/WAV met 64-bit EQ en HTTP Range Seek.",
      "signal.noteTextFlac": "Stuurt de originele FLAC-stream bit-voor-bit door via de lokale HTTP-brug zonder RAM-buffer (incl. audio/x-flac voor Mu-so 1e gen.).",
      "tools.badge": "Meetlaboratorium",
      "tools.title": "Een Suite Precisie-instrumenten",
      "tools.subtitle": "Geïntegreerde akoestische analyse- en kalibratietools.",
      "tools.c1Title": "Analoge VU-Meter",
      "tools.c1Desc": "Volg in realtime het RMS-niveau en de dynamische pieken per stereokanaal.",
      "tools.c2Title": "Spectrumanalysator (RTA)",
      "tools.c2Desc": "Bekijk geluidsenergie van 20 Hz tot ruim 20 kHz en ontdek kamerresonanties.",
      "tools.c3Title": "SPL-Geluidsmeter op Luisterpositie",
      "tools.c3Desc": "Meet de geluidsdruk in dB(A) en dB(C) via de microfoon van uw Mac of iPhone.",
      "tools.c4Title": "Roze Ruis & Toongenerator",
      "tools.c4Desc": "Genereer roze ruis, witte ruis of sinustonen (20 Hz – 20 kHz) voor luidsprekerkalibratie.",
      "story.badge": "Achter de schermen",
      "story.title": "Waarom MuStreamer werd gecreëerd",
      "story.p1": "Als gebruiker van een ouder All-in-One systeem (de iconische eerste generatie <strong>Naim Mu-so</strong>) heb ik het geluid altijd fantastisch gevonden, maar drie beperkingen vielen op:",
      "story.li1": "<strong>Geen native Qobuz-integratie</strong>",
      "story.li2": "<strong>Wisselvallige wifi-stabiliteit</strong> zonder ethernetkabel",
      "story.li3": "<strong>Een verouderde processor</strong> die moeite had met zware Hi-Res streams",
      "story.p2": "Bestaande UPnP-apps waren vaak traag, instabiel en gedateerd.",
      "story.p3": "Daarom ontstond <strong>MuStreamer</strong>: snel, modern en voorzien van een <em>analoge VU-meter</em>, <em>RTA-spectrumanalysator</em>, <em>SPL-meter</em> en <em>signaalgenerator</em>, met zowel Qobuz als TIDAL.",
      "story.p4": "Kies flexibel voor decodering op Mac/iPhone of via de interne DAC — altijd strikt <strong>Bit-Perfect</strong>.",
      "story.p5": "Ik hoop dat MuStreamer uw installatie nieuw leven inblaast. Uw feedback via Instellingen is altijd welkom! 😊",
      "story.role": "Bedenker en Ontwikkelaar van MuStreamer",
      "specs.badge": "Technische Gegevens",
      "specs.title": "Compatibiliteit & Specificaties",
      "specs.subtitle": "Technische details van het MuStreamer-ecosysteem.",
      "specs.thParam": "Parameter",
      "specs.thSpec": "Ondersteunde Specificatie",
      "specs.r1Label": "Maximale Resolutie",
      "specs.r1Val": "<strong>24-bit / 192 kHz</strong> (Hi-Res Studio Master Bit-Perfect)",
      "specs.r2Label": "Audioformaten",
      "specs.r3Label": "Diensten &amp; Bronnen",
      "specs.r3Val": "<strong>Qobuz</strong> (Hi-Res FLAC) &bull; <strong>TIDAL</strong> (Max Hi-Res FLAC) &bull; <strong>50.000+ Live Radio</strong> (incl. FLAC) &bull; <strong>RSS Podcasts</strong> &bull; <strong>Lokale Bestanden</strong>",
      "specs.r4Label": "Uitvoerprotocol",
      "specs.r4Val": "UPnP AV / DLNA MediaRenderer 1.0/2.0, AirPlay &amp; USB/Lokale DAC (WAV Bit-Perfect / Native FLAC)",
      "specs.r5Label": "Platformen",
      "specs.r5Soon": "🪟 <strong>Windows 10/11 (64-bit)</strong> &bull; 🤖 <strong>Android 8.0+</strong> — Nu beschikbaar (v1.2)!",
      "specs.r6Label": "Talen &amp; Versie",
      "specs.r6Val": "<strong>8 talen</strong> (IT, EN, FR, DE, ES, PT, NL, JA) &bull; <strong>Apple v1.1.0</strong> &bull; <strong>Windows &amp; Android v1.2.0</strong>",
      "footer.home": "Home",
      "footer.privacy": "Privacybeleid",
      "footer.support": "Support & Contact",
      "footer.copy": "&copy; 2026 MuStreamer. Alle rechten voorbehouden.",
      "footer.disclaimer": "<em>Juridische kennisgeving & Handelsmerken:</em> Naim, Mu-so, Qobuz en TIDAL zijn gedeponeerde handelsmerken van hun respectievelijke eigenaars en worden uitsluitend genoemd ter beschrijving en compatibiliteit.",
      "privacy.badge": "Officieel Document",
      "privacy.title": "Privacybeleid",
      "privacy.updated": "Laatst bijgewerkt: 25 november 2026",
      "privacy.s1Title": "1. Onze Privacyfilosofie",
      "privacy.s1Text": "<strong>MuStreamer verzamelt GEEN persoonlijke gegevens, slaat NIETS op externe servers op en verkoopt NIETS aan derden</strong>.",
      "privacy.s2Title": "2. Inloggegevens (Qobuz & TIDAL)",
      "privacy.s2Intro": "Wanneer u inlogt:",
      "privacy.s2Li1": "Tokens worden <strong>rechtstreeks en versleuteld (HTTPS / TLS 1.3)</strong> uitgewisseld met officiële servers.",
      "privacy.s2Li2": "Gegevens blijven <strong>uitsluitend lokaal op je apparaat</strong> bewaard in de systeemkluis (Apple Keychain, Windows Credential Manager en Android Keystore met AES-GCM).",
      "privacy.s2Li3": "Er gaan nooit gegevens via tussenliggende servers.",
      "privacy.s3Title": "3. Lokaal Netwerk (UPnP / DLNA)",
      "privacy.s3Text": "Apparaatdetectie vindt <strong>volledig plaats binnen uw eigen netwerk (LAN)</strong>.",
      "privacy.s4Title": "4. Microfoon & SPL-Meter",
      "privacy.s4Text": "<strong>Er wordt geen audio opgenomen of verzonden</strong>; alle verwerking gebeurt direct in het werkgeheugen.",
      "privacy.s4bTitle": "5. Live Radio, Podcasts en Lokale Audiobestanden",
      "privacy.s4bText": "Favoriete radiozenders, P1–P6 Presets, aangepaste URL's en opgeslagen Podcasts blijven uitsluitend op je apparaat opgeslagen. Audiostreams maken rechtstreeks verbinding tussen je apparaat en de gekozen zender of RSS-feed zonder tussenliggende servers. Wanneer je <strong>Lokale Audiobestanden</strong> (FLAC, WAV, AIFF, ALAC, MP3) opent, leest MuStreamer ze uitsluitend via de veilige machtigingen van Apple Sandbox / Bestanden-app: geen enkel lokaal bestand wordt ooit geüpload of gedeeld.",
      "privacy.s5Title": "6. Geen Tracking of Cookies van Derden",
      "privacy.s5Text": "Geen advertentietrackers of analytics van derden.",
      "privacy.s6Title": "7. Privacycontact",
      "privacy.s6Text": "Mail naar <a href=\"mailto:mustreamer@outlook.it\" style=\"color: var(--accent-light); font-weight: 600;\">mustreamer@outlook.it</a> of bezoek onze <a href=\"support.html\" style=\"color: var(--accent-light); text-decoration: underline;\">supportpagina</a>.",
      "support.badge": "Hulp & Community",
      "support.title": "Support & Veelgestelde Vragen",
      "support.subtitle": "Hulp nodig bij het instellen? Bekijk hier de meest gestelde vragen.",
      "support.q1Title": "1. Hoe verbind ik mijn streamer of Naim Mu-so?",
      "support.q1Text": "Zorg dat je Mac, iPhone, iPad, Windows-pc of Android op <strong>hetzelfde Wi-Fi- of Ethernet-netwerk</strong> zit als je streamer. MuStreamer vindt automatisch elk apparaat via multi-NIC SSDP/UPnP en toont of je streamer op Ethernet of Wi-Fi zit.",
      "support.q2Title": "2. Hoe werken de 3 modi: Pure FLAC, Cloud Direct en Lokale WAV?",
      "support.q2Text": "In <em>Diagnose &amp; Audio Engine</em> (Apple, Windows en Android) kies je uit <strong>3 audiofiele modi</strong>:<br>&bull; <strong>Lokale WAV (LPCM + 64-Bit DSP)</strong>: Decodeert in RAM, past 64-bit EQ, Crossfeed en Fase toe, en streamt ongecomprimeerde WAV met HTTP Range Seek.<br>&bull; <strong>Pure FLAC (Pass-Through)</strong>: Bit-voor-bit lokale HTTP-brug tot 24-bit/192 kHz.<br>&bull; <strong>Cloud Direct (Zero-Proxy)</strong>: Stuurt de CDN-URL rechtstreeks naar de streamer.",
      "support.q3Title": "3. Is Bit-Perfect altijd gegarandeerd?",
      "support.q3Text": "Ja, zonder ongewenste resampling tot 24-bit / 192 kHz.",
      "support.q4Title": "4. Welke abonnementen heb ik nodig?",
      "support.q4Text": "Je kunt inloggen met je normale Qobuz- (Studio/Sublime) of TIDAL-abonnement (HiFi/Max). De <strong>50.000+ Live Radiozenders</strong>, <strong>Podcasts</strong>, het afspelen van <strong>Lokale Audiobestanden</strong> en de <em>Offline Demo-catalogus</em> werken daarentegen <strong>gratis en zonder abonnement</strong>.",
      "support.q5NewTitle": "5. Wat is nieuw in Apple v1.1 en Windows / Android v1.2?",
      "support.q5NewText": "Met <strong>MuStreamer v1.1 (macOS / iOS / iPadOS)</strong> en <strong>v1.2 (Windows 10/11 &amp; Android)</strong>:<br>&bull; <strong>Volledige Windows 10/11 &amp; Android ondersteuning</strong>: donkere Liquid Glass UI, multi-NIC UPnP/DLNA, 3 streamingmodi, VU-meters, FFT, 64-bit DSP en <code>&plusmn;5%</code> volumestappen.<br>&bull; <strong>Live Radio &amp; Podcasts</strong>: 50.000+ zenders (incl. FLAC), 6 presets P1–P6, <code>.M3U</code> backup en RSS Podcasts.<br>&bull; <strong>Lokale Bestanden &amp; Direct Seek</strong>: directe weergave van <code>FLAC, WAV, AIFF, ALAC, MP3</code> met HTTP Range Seek &amp; Ethernet/Wi-Fi diagnose.",
      "support.q5Title": "6. Hoe kan ik een suggestie sturen of een probleem melden?",
      "support.q5Text": "Via <strong>Feedback sturen</strong> in Instellingen of per e-mail naar <a href=\"mailto:mustreamer@outlook.it\" style=\"color: var(--accent-light); font-weight: 600;\">mustreamer@outlook.it</a>.",
      "support.bannerTitle": "Nog vragen?",
      "support.bannerText": "Wij reageren snel op iedere muziekliefhebber.",
      "support.bannerBtn": "Neem contact op via E-mail",
      "community.badge": "Audiofiele Community • Forum & Reviews",
      "community.title": "Beoordelingen, Suggesties & Forum",
      "community.subtitle": "Een eigen plek voor dagelijkse MuStreamer-luisteraars: deel je ervaring op je Hi-Fi-set, stel nieuwe functies voor of start een onderwerp. Elk bericht stuurt direct een e-mailmelding naar de ontwikkelaar, die hieronder antwoordt.",
      "community.ratingMeta": "Hi-Fi Community-score &bull; Direct antwoord van de ontwikkelaar",
      "community.appStoreBtn": "★ Ook beoordelen in App Store",
      "community.formTitle": "Schrijf een Review of Suggestie",
      "community.formSubtitle": "Je bericht wordt direct per e-mail naar Gianluca (ontwikkelaar van MuStreamer) gestuurd om met officieel antwoord te publiceren.",
      "community.emailAlertTag": "🔔 E-mailmelding Actief",
      "community.lblName": "Je Naam of Bijnaam *",
      "community.lblEmail": "Je E-mail (voor melding bij antwoord) *",
      "community.lblSetup": "Je Hi-Fi-set / Streamer (optioneel)",
      "community.lblCategory": "Type Bijdrage",
      "community.catReview": "⭐ Luisterervaring / Review",
      "community.catSuggestion": "💡 Functiesuggestie",
      "community.catQuestion": "🎧 Technische Vraag / UPnP-setup",
      "community.catBug": "🐛 Probleem Melden",
      "community.lblRating": "Algemene Beoordeling",
      "community.lblTitle": "Titel van Review of Onderwerp *",
      "community.lblMessage": "Je Bericht *",
      "community.submitBtn": "Plaatsen & Ontwikkelaar Melden",
      "community.formPrivacyNote": "Je e-mailadres wordt nooit openbaar getoond; het dient enkel om je te verwittigen zodra Gianluca reageert.",
      "community.threadsTitle": "Community-discussies & Reviews",
      "community.threadsBadge": "Officiële Antwoorden Actief",
      "community.devBadge": "👨‍💻 Gianluca • Maker & Ontwikkelaar van MuStreamer",
      "community.badgeReview": "⭐ Review",
      "community.badgeSuggestion": "💡 Suggestie",
      "community.t1Date": "Versie 1.0.1 &bull; Geverifieerde Review",
      "community.t1Title": "Heeft mijn 1e generatie Naim Mu-so letterlijk gered!",
      "community.t1Body": "Bij 24-bit/192 kHz Qobuz-streams via wifi bleef mijn 1e gen Mu-so steeds bufferen met oudere UPnP-apps. Met Lokale WAV Bit-Perfect-decodering in MuStreamer start alles direct zonder één hapering in 3 uur luisteren. De FLAC Live Radio in 1.0.1 is ook top!",
      "community.t1Reply": "Heel erg bedankt Marco! Precies daarom heb ik MuStreamer gebouwd: FLAC-decodering verplaatsen naar iPhone/Mac ontlast de CPU van de 1e gen Mu-so volledig terwijl het signaal 100% Bit-Perfect blijft. Veel luisterplezier!",
      "community.t2Date": "Versie 1.0.1 &bull; Suggestie &amp; Feedback",
      "community.t2Title": "De analoge VU-meters en 50.000+ Live Radio met .M3U-back-up zijn geweldig",
      "community.t2Body": "Complimenten voor update 1.0.1: 6 snelle P1–P6 presets voor FLAC-zenders opslaan en de .M3U-back-up uitwisselen tussen Mac en iPhone is superhandig. Als suggestie zou het top zijn als elk scherm volledig vertaald is.",
      "community.t2Reply": "Hartelijk dank Alessandro! Goede tip: we hebben zojuist de 100% volledige vertaling van alle schermen, Hi-Fi-tools en technische panelen in alle 8 talen (IT, EN, FR, DE, ES, PT, NL, JA) afgerond met directe taalwissel.",
      "community.t3Date": "Versie 1.0.1 &bull; Geverifieerde Review",
      "community.t3Title": "Ingebouwde SPL-meter en Toongenerator: een echt Hi-Fi Zwitsers zakmes",
      "community.t3Body": "Naast TIDAL Max en lokale FLAC-bestanden vanaf USB hielp de akoestische suite (RTA, SPL-meter en 20Hz–20kHz sweep) mij om een 63 Hz kamerresonantie te vinden en met Auto-EQ te corrigeren. Uniek.",
      "community.t3Reply": "Wat geweldig om te lezen Davide! Ruimte-akoestiek bepaalt meer dan 50% van de klank: een SPL-meter, sweep-generator en parametrische EQ direct in de speler helpen precies om kamerresonanties te temmen.",
      "nav.platforms": "Windows &amp; Android",
      "hero.winCaption": "Gratis voor PC",
      "hero.winStore": "Windows (.zip)",
      "hero.andCaption": "Gratis APK-download",
      "hero.andStore": "Android (.apk)",
      "mockup.newWinAnd": "🪟 Windows 10/11 &amp; 🤖 Android",
      "plat.badge": "Grote Release • Compleet Ecosysteem",
      "plat.title": "Nu ook beschikbaar voor <span class=\"text-gradient\">Windows &amp; Android</span>",
      "plat.subtitle": "De volledige 24-bit/192 kHz Bit-Perfect engine, 3 audiofiele modi en studiomeettools komen naast Mac, iPhone en iPad nu ook naar Windows-pc's en Android-apparaten.",
      "plat.chipWin": "🪟 Windows 10/11 (Nieuw v1.2)",
      "plat.chipAnd": "🤖 Android 8.0+ (Nieuw v1.2)",
      "plat.winTag": "WINDOWS DESKTOP • 64-BIT",
      "plat.winTitle": "MuStreamer voor Windows Desktop",
      "plat.winDesc": "Bedien je Hi-Fi systeem rechtstreeks vanaf je Windows-pc met dezelfde donkere Liquid Glass-interface, multi-NIC SSDP-ontdekking (Ethernet + Wi-Fi) en ingebouwde lossless HTTP-proxy.",
      "plat.winB1": "3 Modi: <strong>Pure FLAC</strong> (Pass-Through), <strong>Cloud Direct</strong> en <strong>Lokale WAV + 64-bit DSP</strong>",
      "plat.winB2": "Automatische multi-adapter LAN/VPN-scan met Ethernet-diagnose &amp; live ping",
      "plat.winB3": "Vintage VU-meters, FFT-spectrum, Dynamic Range (DR), 10-bands EQ &amp; Mini-Speler",
      "plat.winBtn": "Download Windows v1.2 (.zip)",
      "plat.winReq": "x64 Native • UPnP / DLNA",
      "plat.andTag": "HI-RES ANDROID APP",
      "plat.andTitle": "MuStreamer voor Android Smartphones &amp; Tablets",
      "plat.andDesc": "Neem Qobuz Studio Master, TIDAL Max, 50.000+ FLAC-radiozenders, Podcasts en lokale bestanden overal mee naartoe met 24-bit/192 kHz Bit-Perfect streaming naar Naim Mu-so en elk UPnP-systeem.",
      "plat.andB1": "Nauwkeurige volumeregeling in stappen van <strong>&plusmn;5%</strong> &amp; Directe HTTP Range Seek",
      "plat.andB2": "Naadloze gapless wachtrij, Hi-Res hoezen en 6 Radio Presets P1–P6",
      "plat.andB3": "Realtime Wi-Fi jittermonitor en Ethernet/Wi-Fi streamerstatus",
      "plat.andBtn": "Download Android-APK v1.2 (.apk)",
      "plat.andReq": "Smartphones &amp; Tablets",
      "signal.modeCloud": "☁️ Cloud Direct CDN",
      "signal.s2TitleCloud": "Directe CDN → Streamer Overdracht",
      "signal.s2MetaCloud": "Geen lokale proxy &bull; Geverifieerde CDN-URL",
      "signal.s3TitleCloud": "Directe HTTPS Stream → DAC",
      "signal.s3MetaCloud": "Minimale app-belasting &bull; Maximale batterijduur",
      "signal.noteBadgeCloud": "IDEAAL VOOR MODERNE STREAMERS &amp; LANG LUISTEREN",
      "signal.noteTextCloud": "Verbindt geschikte streamers rechtstreeks met lossless CDN-servers en bespaart CPU en batterij.",
      "modal.contactBtn": "Link / Support aanvragen",
      "modal.guideBtn": "Gids &amp; FAQ",
      "modal.winTitle": "MuStreamer v1.2 voor Windows Desktop",
      "modal.winBody": "De Windows 10/11 (64-bit) v1.2 build is direct te downloaden als .zip-archief: pak de hele map uit en start mustreamer.exe (SmartScreen: Meer informatie -> Toch uitvoeren). Bevat multi-NIC UPnP, 3 Bit-Perfect modi en studiotools.",
      "modal.winReqs": "<strong>Vereisten:</strong> Windows 10 / 11 (x64) &bull; Lokaal Wi-Fi- of Ethernet-netwerk naar je UPnP/DLNA-streamer",
      "modal.andTitle": "MuStreamer v1.2 voor Android",
      "modal.andBody": "De Android v1.2 app is direct als ondertekend .apk-bestand via deze website te downloaden: 24-bit/192 kHz Bit-Perfect streaming naar Naim Mu-so &amp; UPnP/DLNA, ±5% volumestappen, HTTP Range Seek, 50.000+ FLAC-radio's en Wi-Fi diagnose.",
      "modal.andReqs": "<strong>Vereisten:</strong> Android 8.0+ (ARM64) &bull; Smartphone of Tablet op lokaal Wi-Fi-netwerk"
    },
    "ja": {
      "meta.index.title": "MuStreamer 1.2 - Mac、iPhone、Windows、Android向け Bit-Perfect ハイレゾオーディオ",
      "meta.index.desc": "MuStreamerがついにWindows 10/11とAndroidにも対応！Mac・iPhone・iPadを含め、24-bit/192 kHz Bit-Perfect、3つのストリーミングモード（Pure FLAC・Cloud Direct・Local WAV）、Qobuz・TIDAL・5万局以上のFLACラジオに対応。",
      "meta.privacy.title": "プライバシーポリシー — MuStreamer",
      "meta.privacy.desc": "MuStreamer プライバシーポリシー：個人データの収集や追跡は一切なく、認証情報はMacやiPhoneのローカルに安全に保存されます。",
      "meta.support.title": "サポート & FAQ — MuStreamer",
      "meta.support.desc": "MuStreamer サポートセンター：よくある質問、UPnP接続ガイド、お問い合わせ。",
      "meta.community.title": "レビュー＆ご要望フォーラム — MuStreamer",
      "meta.community.desc": "MuStreamer公式レビュー＆ご要望フォーラム：星評価レビューの投稿、新機能の提案、開発者からの直接返信をご覧いただけます。",
      "nav.features": "特徴",
      "nav.tools": "Hi-Fi ツール",
      "nav.story": "開発ストーリー",
      "nav.specs": "仕様",
      "nav.support": "サポート",
      "nav.community": "レビュー＆フォーラム",
      "nav.privacy": "プライバシー",
      "nav.cta": "アプリを入手",
      "nav.backToApp": "アプリに戻る",
      "hero.badge": "新登場 v1.2 • Windows &amp; Android にも対応！",
      "hero.title": "Hi-Fiシステムに、新たな息吹を。<br><span class=\"text-gradient\">音質への妥協はゼロ。</span>",
      "hero.lead": "<strong>Mac、iPhone、iPad、Windows 10/11、Android</strong>で使える究極のオーディオファイル・プレーヤー。<strong>Qobuz</strong>、<strong>TIDAL</strong>、<strong>ローカル音源</strong>の<strong>Bit-Perfect 24-bit/192 kHz</strong>再生に加え、<strong>50,000+ FLACラジオ</strong>・<strong>Podcast</strong>、さらにUPnP向け3モード（<em>Pure FLAC</em>・<em>Cloud Direct</em>・<em>Local WAV</em>）を搭載。",
      "hero.macCaption": "Mac版 無料",
      "hero.macStore": "ダウンロード (.dmg)",
      "hero.iosCaption": "ダウンロード：",
      "hero.discoverBtn": "機能を見る",
      "hero.subtitle": "<strong>macOS 14+</strong>、<strong>iOS &amp; iPadOS 17+</strong>、<strong>Windows 10/11 (64-bit)</strong>、<strong>Android 8.0+</strong>対応 &bull; UPnP / DLNA Bit-Perfect。",
      "hero.macTip": "<strong>直接インストール:</strong> <strong>Mac</strong>は<code>.dmg</code>を開いてアプリケーションへ（必要時: <em>システム設定 &rarr; プライバシーとセキュリティ &rarr; このまま開く</em>） &bull; <strong>Windows</strong>は<code>.zip</code>を展開して<code>mustreamer.exe</code>を起動（SmartScreen: <em>詳細情報 &rarr; 実行</em>） &bull; <strong>Android</strong>は<code>.apk</code>を開いてインストールを許可。",
      "hero.comingSoon": "<strong>Mac・iPhone・iPad・Windows・Android</strong> で提供開始！",
      "mockup.title": "MuStreamer — Hi-Res Bit-Perfect 再生中 (FLAC 24-bit / 192 kHz)",
      "mockup.nowPlaying": "再生中 • Qobuz Studio Master",
      "mockup.decodeLine": "⚡ デコード: ローカル (Mac/iOS オフロード) &bull; 出力: Bit-Perfect WAV ロスレス",
      "mockup.vumeterTitle": "ステレオ アナログ VUメーター",
      "mockup.newLabel": "v1.2 新機能",
      "mockup.newRadio": "50,000+ ライブラジオ &amp; FLAC",
      "mockup.newPodcast": "ポッドキャスト &amp; 最新エピソード",
      "mockup.newLocal": "📁 ローカル Hi-Res ファイル",
      "mockup.newEngine": "⚙️ 3モード: Pure FLAC • Cloud • WAV",
      "features.badge": "音響エンジニアリング • Apple v1.1 &amp; Win/Android v1.2",
      "features.title": "オーディオファイルによる、オーディオファイルのための設計",
      "features.subtitle": "旧世代プロトコルの限界を超え、音楽の微細なニュアンスまで余すことなく楽しむためのすべての音源と技術を搭載。",
      "features.newTag": "1.0.1 新機能",
      "features.c7Title": "世界中のライブラジオ (50,000+)",
      "features.c7Desc": "224カ国の放送局とオーディオファイル向けロスレスFLACストリームをライブ曲名表示付きで再生。お気に入り保存、P1–P6プリセット、カスタムURL登録、.M3Uバックアップの書き出し/読み込みに対応。",
      "features.c8Title": "ポッドキャスト &amp; 今日のエピソード",
      "features.c8Desc": "イタリア＆グローバルランキング、高速検索、iPhone・Mac・AirPlay・UPnPストリーマーでのフルエピソード再生に対応。-15秒 / +30秒スキップやお気に入り番組管理も完備。",
      "features.c9Title": "ローカルHi-Res再生 &amp; スタジオエンジン",
      "features.c9Desc": "端末やUSBドライブ/DAC内のFLAC・WAV・AIFF・ALAC・MP3を直接再生。新しいスタジオパネルからWAV Bit-Perfect、ネイティブFLAC、最大サンプルレート（44.1–192 kHz）、RAMプリバッファリングをワンタップで切り替え可能。",
      "features.c1Title": "100% Bit-Perfect & ハイレゾ対応",
      "features.c1Desc": "不要なリサンプリングやビット落ち、ダイナミックレンジ圧縮を行わず、最大192 kHz / 24-bitの原音を忠実に伝送します。",
      "features.c2Title": "インテリジェント・ローカルデコード",
      "features.c2Desc": "初代Naim Mu-soのようにCPU負荷に弱いストリーマーでも、MacやiPhone側でデコード処理を引き受けることで、途切れのない安定した再生を実現します。",
      "features.c3Title": "Qobuz & TIDAL 統合",
      "features.c3Desc": "アプリから離れることなく、膨大なハイレゾカタログやStudio Master、お気に入りアルバムへダイレクトにアクセス。",
      "features.c4Title": "拡張 UPnP / DLNA プロトコル",
      "features.c4Desc": "ネットワークストリーマーやWi-Fi DACを瞬時に検出。ジッター対策の予測バッファにより無線環境でも安定動作します。",
      "features.c5Title": "イコライザー & 音響補正",
      "features.c5Desc": "10バンド・パラメトリックイコライザーにより、お部屋の音響特性に合わせた精密なチューニングが可能です。",
      "features.c6Title": "Hi-Fi ダークインターフェース",
      "features.c6Desc": "チタニウムブラックとHi-Fiオレンジを基調とした洗練されたUI。高精細なアートワークと直感的な操作性を実現。",
      "signal.badge": "BIT-PERFECT シグナルパス",
      "signal.title": "MuStreamerがHi-Fiストリーマーの音切れをなくす仕組み",
      "signal.subtitle": "2つのオーディオエンジンモードをリアルタイム比較：Mac/iPhoneでのローカルデコードと、ストリーマーDACへのネイティブFLACパススルーを切り替えられます。",
      "signal.modeWav": "⚡ Local WAV (64-Bit DSP)",
      "signal.modeFlac": "📡 Pure FLAC (Pass-Through)",
      "signal.s1Kicker": "ロスレス音源",
      "signal.s1Title": "Qobuz • TIDAL • ラジオ • ファイル",
      "signal.s1Meta": "最大 24-bit / 192 kHz Master FLAC",
      "signal.s2Kicker": "MuStreamer エンジン",
      "signal.s2TitleWav": "ローカルデコード + 64-Bit DSP",
      "signal.s2TitleFlac": "HTTP FLAC パススルーブリッジ",
      "signal.s2MetaWav": "FLAC → PCM/WAV + EQ・位相・Rangeシーク",
      "signal.s2MetaFlac": "RAM再圧縮なしのビット完全リレー",
      "signal.s3Kicker": "LAN / Wi-Fi 伝送",
      "signal.s3TitleWav": "非圧縮リニア Bit-Perfect WAV",
      "signal.s3TitleFlac": "ロスレス圧縮 FLAC",
      "signal.s3MetaWav": "約0.2秒で再生開始 • 機器CPU負荷 0%",
      "signal.s3MetaFlac": "Wi-Fi帯域を節約 • 機器側DACでデコード",
      "signal.s4Kicker": "お使いのHi-Fi機器",
      "signal.s4Title": "Naim • UPnP • AirPlay • USB DAC",
      "signal.s4Meta": "100% Bit-Perfect • リサンプリングなし",
      "signal.noteBadgeWav": "NAIM MU-SO 第1世代 &amp; 64-BIT DSP に最適",
      "signal.noteBadgeFlac": "ハイレゾ・ストリーマー &amp; 有線/WI-FI に最適",
      "signal.noteTextWav": "Mac・iPhone・Windows・Android側でFLACをLPCM/WAVへデコードし、64-bitパラメトリックEQや高速HTTP RangeシークとともにDACへ送信します。",
      "signal.noteTextFlac": "元のFLACストリームをローカルHTTPブリッジ経由でバイト単位そのまま転送（Mu-so第1世代のaudio/x-flacにも対応）。",
      "tools.badge": "音響測定ラボ",
      "tools.title": "精密測定ツールスイート",
      "tools.subtitle": "単なるプレーヤーにとどまらず、本格的な音響解析・キャリブレーションツールを内蔵。",
      "tools.c1Title": "アナログ VUメーター",
      "tools.c1Desc": "国際規格に準拠した針の追従特性により、左右チャンネルのRMSレベルとダイナミックピークをリアルタイムに監視。",
      "tools.c2Title": "リアルタイム・スペクトラムアナライザー (RTA)",
      "tools.c2Desc": "20 Hz〜20,000 Hz超の音響エネルギーを可視化し、部屋の定在波や低域の膨らみを把握できます。",
      "tools.c3Title": "リスニングポイント SPL音圧計",
      "tools.c3Desc": "MacやiPhoneのマイクを使い、試聴位置での音圧（dB(A) / dB(C)）を正確に測定します。",
      "tools.c4Title": "ピンクノイズ & テストトーン発生器",
      "tools.c4Desc": "ピンクノイズ、ホワイトノイズ、連続可変サイン波（20 Hz〜20 kHz）を出力し、スピーカー調整に活用できます。",
      "story.badge": "開発の舞台裏",
      "story.title": "MuStreamer 誕生の理由",
      "story.p1": "長年にわたり初代 <strong>Naim Mu-so</strong> オールインワンシステムを愛用してきましたが、音質は素晴らしい一方で、時とともに3つの大きな壁に直面しました：",
      "story.li1": "<strong>Qobuzへのネイティブ非対応</strong>",
      "story.li2": "有線LANが使えない環境での<strong>初代Wi-Fiの不安定さ</strong>",
      "story.li3": "重いハイレゾ音源を途切れなく処理するには<strong>力不足になった内蔵CPU</strong>",
      "story.p2": "高音質ストリーミングにはUPnPを使うしかありませんでしたが、既存のアプリは動作が重く不安定で、デザインや機能面でも物足りないものばかりでした。",
      "story.p3": "こうして生まれたのが<strong>MuStreamer</strong>です。音楽を愛するリスナーの視点から、高速かつモダンな操作性に加え、<em>アナログVUメーター</em>、<em>RTA</em>、<em>音圧計</em>、<em>テスト信号発生器</em>を搭載し、QobuzとTIDALの両方に対応しました。",
      "story.p4": "さらに、デコード処理をMac/iPhone側に任せて機器の負荷を完全に解放するか、内蔵DACに任せるかを自由に選択可能。どちらの場合も厳格な<strong>Bit-Perfect</strong>伝送を維持します。",
      "story.p5": "MuStreamerが皆さんのオーディオ機器に新たな命を吹き込むことを願っています。設定画面のフィードバック欄からいつでもご意見をお寄せください！😊",
      "story.role": "MuStreamer 考案者・開発者",
      "specs.badge": "技術仕様",
      "specs.title": "互換性 & スペック",
      "specs.subtitle": "MuStreamer エコシステムの詳細仕様。",
      "specs.thParam": "項目",
      "specs.thSpec": "対応仕様",
      "specs.r1Label": "最大解像度",
      "specs.r1Val": "<strong>24-bit / 192 kHz</strong> (Hi-Res Studio Master Bit-Perfect)",
      "specs.r2Label": "対応フォーマット",
      "specs.r3Label": "対応サービス &amp; 音源",
      "specs.r3Val": "<strong>Qobuz</strong> (Hi-Res FLAC) &bull; <strong>TIDAL</strong> (Max Hi-Res FLAC) &bull; <strong>50,000+ ライブラジオ</strong> (FLAC対応) &bull; <strong>RSSポッドキャスト</strong> &bull; <strong>ローカルファイル</strong>",
      "specs.r4Label": "出力プロトコル",
      "specs.r4Val": "UPnP AV / DLNA MediaRenderer 1.0/2.0、AirPlay、USB/ローカルDAC（WAV Bit-Perfect / ネイティブFLAC）",
      "specs.r5Label": "対応プラットフォーム",
      "specs.r5Soon": "🪟 <strong>Windows 10/11 (64-bit)</strong> &bull; 🤖 <strong>Android 8.0+</strong> — リリース開始 (v1.2)！",
      "specs.r6Label": "対応言語 &amp; バージョン",
      "specs.r6Val": "<strong>8言語対応</strong> (IT, EN, FR, DE, ES, PT, NL, JA) &bull; <strong>Apple v1.1.0</strong> &bull; <strong>Windows &amp; Android v1.2.0</strong>",
      "footer.home": "ホーム",
      "footer.privacy": "プライバシーポリシー",
      "footer.support": "サポート & お問い合わせ",
      "footer.copy": "&copy; 2026 MuStreamer. All rights reserved.",
      "footer.disclaimer": "<em>法的通知・商標について：</em> Naim、Mu-so、Qobuz、およびTIDALは各社の登録商標であり、互換性および説明の目的でのみ記載されています。MuStreamerはHi-Fiコミュニティのために開発された独立系アプリケーションです。",
      "privacy.badge": "公式ドキュメント",
      "privacy.title": "プライバシーポリシー",
      "privacy.updated": "最終更新日：2026年11月25日",
      "privacy.s1Title": "1. プライバシーに関する基本方針",
      "privacy.s1Text": "お客様の聴取履歴や個人情報はお客様だけのものです。<strong>MuStreamerは個人データや再生統計を外部サーバーに収集・保存したり、第三者に販売したりすることは一切ありません</strong>。",
      "privacy.s2Title": "2. ストリーミングサービスの認証情報 (Qobuz & TIDAL)",
      "privacy.s2Intro": "アプリ内でログインを行う際：",
      "privacy.s2Li1": "認証トークンは端末とQobuz/TIDAL公式サーバー間で<strong>直接かつ暗号化（HTTPS / TLS 1.3）</strong>して通信されます。",
      "privacy.s2Li2": "認証情報は<strong>お使いの端末内にのみ</strong>各OSの暗号化キーストア（macOS/iOS Keychain、Windows Credential Manager、Android Keystore AES-GCM）で安全に保管されます。",
      "privacy.s2Li3": "ログイン情報が開発者サーバー等を経由することはありません。",
      "privacy.s3Title": "3. ローカルネットワーク再生 (UPnP / DLNA)",
      "privacy.s3Text": "機器の検出は<strong>ご自宅のローカルネットワーク（LAN）内のみで完結</strong>し、外部へ送信されません。",
      "privacy.s4Title": "4. マイクとSPL音圧計の権限",
      "privacy.s4Text": "<strong>音声データの録音・保存・送信は一切行われません</strong>。デシベル計測後に揮発メモリから即座に破棄されます。",
      "privacy.s4bTitle": "5. ライブラジオ・ポッドキャスト・ローカル音声ファイル",
      "privacy.s4bText": "お気に入りのラジオ局、P1–P6プリセット、カスタムURL、保存したポッドキャストはすべてお使いのデバイス内にのみ保存されます。音声ストリームは中継サーバーを介さず、デバイスから選択した放送局またはRSSフィードへ直接接続されます。<strong>ローカル音声ファイル</strong>（FLAC、WAV、AIFF、ALAC、MP3）を開く際はAppleのサンドボックス／ファイルアプリの安全な権限のみを使用し、ローカルファイルが外部へアップロード・共有されることは一切ありません。",
      "privacy.s5Title": "6. トラッキング・サードパーティCookie一切なし",
      "privacy.s5Text": "広告トラッカー、Google Analytics、行動分析ライブラリは一切含まれていません。",
      "privacy.s6Title": "7. プライバシーに関するお問い合わせ",
      "privacy.s6Text": "ご質問は <a href=\"mailto:mustreamer@outlook.it\" style=\"color: var(--accent-light); font-weight: 600;\">mustreamer@outlook.it</a> までご連絡いただくか、<a href=\"support.html\" style=\"color: var(--accent-light); text-decoration: underline;\">サポートページ</a>をご覧ください。",
      "support.badge": "サポート & コミュニティ",
      "support.title": "サポート & よくある質問",
      "support.subtitle": "設定方法やご提案がありましたら、以下のFAQおよびお問い合わせ窓口をご利用ください。",
      "support.q1Title": "1. Naim Mu-so やネットワークストリーマーへの接続方法は？",
      "support.q1Text": "Mac・iPhone・iPad・Windows PC・Androidがオーディオ機器と<strong>同じWi-FiまたはEthernetネットワーク</strong>に接続されていることを確認してください。マルチNIC SSDP/UPnPで自動検出し、有線/Wi-Fiの接続状態も診断画面で確認できます。",
      "support.q2Title": "2. 3つのモード（Pure FLAC・Cloud Direct・Local WAV）の違いは？",
      "support.q2Text": "Apple・Windows・Android各版の<em>診断＆オーディオエンジン</em>パネルから<strong>3つの高音質モード</strong>を選べます：<br>&bull; <strong>Local WAV（LPCMデコード + 64-Bit DSP）</strong>：端末RAMでデコードし、64-bit EQやクロスフィードを適用して非圧縮WAV + HTTP Rangeシークで送信。<br>&bull; <strong>Pure FLAC（パススルー）</strong>：24-bit/192 kHz FLACをローカルHTTPブリッジ経由で無劣化転送。<br>&bull; <strong>Cloud Direct</strong>：対応機器へCDN URLを直接引き渡し端末負荷を最小化。",
      "support.q3Title": "3. Bit-Perfect 再生は常に保証されますか？",
      "support.q3Text": "はい。不要なソフトウェア・リサンプリングは行わず、24-bit / 96〜192 kHzのデータをビット単位で維持します。",
      "support.q4Title": "4. QobuzやTIDALのどのプランが必要ですか？",
      "support.q4Text": "通常のQobuz（Studio/Sublime）またはTIDAL（HiFi/Max）アカウントでログインできます。なお、<strong>50,000+ライブラジオ</strong>、<strong>ポッドキャスト</strong>、<strong>ローカル音声ファイル再生</strong>、および<em>オフライン高音質デモカタログ</em>は<strong>サブスクリプション不要・無料</strong>でお楽しみいただけます。",
      "support.q5NewTitle": "5. Apple v1.1 と Windows / Android v1.2 の新機能は？",
      "support.q5NewText": "<strong>MuStreamer v1.1 (macOS / iOS / iPadOS)</strong> および <strong>v1.2 (Windows 10/11・Android)</strong> の主な進化：<br>&bull; <strong>Windows 10/11 &amp; Android フル対応</strong>：ダークLiquid Glass UI、マルチNIC UPnP/DLNA、3モード送信、VUメーター、FFT、64-bit DSP、<code>&plusmn;5%</code>精度ボリューム。<br>&bull; <strong>ライブラジオ＆Podcast</strong>：224カ国50,000+局（FLAC対応）、プリセットP1–P6、<code>.M3U</code>保存・読込。<br>&bull; <strong>ローカル音源＆即時シーク</strong>：<code>FLAC/WAV/AIFF/ALAC/MP3</code>のダイレクト再生とHTTP Rangeシーク、Ethernet/Wi-Fi診断。",
      "support.q5Title": "6. 要望や不具合の報告はどこから送れますか？",
      "support.q5Text": "アプリ内の設定にある<strong>フィードバックを送信</strong>、またはメール <a href=\"mailto:mustreamer@outlook.it\" style=\"color: var(--accent-light); font-weight: 600;\">mustreamer@outlook.it</a> にて随時受け付けております。",
      "support.bannerTitle": "その他ご質問がありますか？",
      "support.bannerText": "すべてのオーディオ愛好家の皆様へ迅速にお返事いたします。",
      "support.bannerBtn": "メールでお問い合わせ",
      "community.badge": "オーディオファイル・コミュニティ • フォーラム＆レビュー",
      "community.title": "レビュー・ご要望＆フォーラム",
      "community.subtitle": "MuStreamerをご愛用いただく皆様のための専用ページです。お使いのHi-Fi環境でのレビュー投稿や機能リクエストを自由に書き込めます。投稿すると即座に開発者へメール通知が届き、このページ上で直接返信します。",
      "community.ratingMeta": "Hi-Fiコミュニティ評価 &bull; 開発者が直接返信",
      "community.appStoreBtn": "★ App Storeでもレビューを書く",
      "community.formTitle": "レビューまたはご要望を投稿",
      "community.formSubtitle": "メッセージはリアルタイムで開発者Gianlucaへメール送信され、公式返信とともに掲載されます。",
      "community.emailAlertTag": "🔔 メール通知オン",
      "community.lblName": "お名前・ニックネーム *",
      "community.lblEmail": "メールアドレス（返信通知用）*",
      "community.lblSetup": "お使いのHi-Fi機器・ストリーマー（任意）",
      "community.lblCategory": "投稿カテゴリー",
      "community.catReview": "⭐ リスニングレビュー",
      "community.catSuggestion": "💡 新機能のご要望",
      "community.catQuestion": "🎧 技術的なご質問 / UPnP設定",
      "community.catBug": "🐛 不具合のご報告",
      "community.lblRating": "総合評価",
      "community.lblTitle": "レビュー・スレッドのタイトル *",
      "community.lblMessage": "メッセージ本文 *",
      "community.submitBtn": "投稿して開発者へ通知する",
      "community.formPrivacyNote": "メールアドレスが公開されることは一切ありません。Gianlucaからの返信通知のみに使用されます。",
      "community.threadsTitle": "コミュニティのレビュー＆スレッド",
      "community.threadsBadge": "開発者公式返信あり",
      "community.devBadge": "👨‍💻 Gianluca • MuStreamer 開発者",
      "community.badgeReview": "⭐ レビュー",
      "community.badgeSuggestion": "💡 ご要望",
      "community.t1Date": "バージョン 1.0.1 &bull; 認証済みレビュー",
      "community.t1Title": "初代Naim Mu-soが文字通り蘇りました！",
      "community.t1Body": "Wi-Fi経由のQobuz 24-bit/192 kHz再生では、従来のUPnPアプリだと初代Mu-soで途切れが頻発していました。MuStreamerのローカルWAV Bit-Perfectデコードを有効にしたら再生が一瞬で始まり、3時間連続でも音切れゼロ。1.0.1のFLACライブラジオも最高です！",
      "community.t1Reply": "Marcoさん、本当にありがとうございます！まさにそのためにMuStreamerを作りました。iPhone/Mac側でFLACデコードを行い純粋なリニアPCM/WAVを送ることで、初代Mu-soのCPU負荷をなくしつつ100% Bit-Perfectを維持できます。ぜひ音楽をお楽しみください！",
      "community.t2Date": "バージョン 1.0.1 &bull; ご要望＆フィードバック",
      "community.t2Title": "アナログVUメーターと.M3Uバックアップ対応の50,000+ライブラジオが素晴らしい",
      "community.t2Body": "1.0.1アップデート最高です。FLACラジオ局をP1–P6プリセットに保存し、MacとiPhone間で.M3Uバックアップをやり取りできるのがとても便利です。要望として、言語を切り替えたときにすべての画面が完全に翻訳されるとさらに嬉しいです。",
      "community.t2Reply": "Alessandroさん、貴重なフィードバックをありがとうございます！ちょうど全画面・Hi-Fiツール・技術パネルを含む100%の完全ローカライズを8言語（IT, EN, FR, DE, ES, PT, NL, JA）で完了し、リアルタイム切替に対応しました。",
      "community.t3Date": "バージョン 1.0.1 &bull; 認証済みレビュー",
      "community.t3Title": "SPLメーターとトーンジェネレーター内蔵：まさにHi-Fiの万能ツール",
      "community.t3Body": "TIDAL MaxやUSBローカルFLAC再生に加えて、音響計測スイート（RTA、SPLメーター、20Hz–20kHzスイープ）のおかげで部屋の63 Hz共振を特定し、Auto-EQで補正できました。唯一無二のアプリです。",
      "community.t3Reply": "Davideさん、嬉しいお言葉をありがとうございます！部屋の音響はHi-Fiサウンドの50%以上を左右するため、SPLメーター・スイープ・パラメトリック補正をプレーヤーに統合しました。",
      "nav.platforms": "Windows &amp; Android",
      "hero.winCaption": "PC版 無料ダウンロード",
      "hero.winStore": "Windows (.zip)",
      "hero.andCaption": "APK 無料ダウンロード",
      "hero.andStore": "Android (.apk)",
      "mockup.newWinAnd": "🪟 Windows 10/11 &amp; 🤖 Android",
      "plat.badge": "メジャーリリース • クロスプラットフォーム",
      "plat.title": "<span class=\"text-gradient\">Windows &amp; Android</span> 版がついに登場",
      "plat.subtitle": "24-bit/192 kHz Bit-Perfectエンジン、3つのハイレゾ送信モード、スタジオ計測ツール一式が、Mac・iPhone・iPadに加えてWindows PCおよびAndroid端末でも利用可能に。",
      "plat.chipWin": "🪟 Windows 10/11（新 v1.2）",
      "plat.chipAnd": "🤖 Android 8.0+（新 v1.2）",
      "plat.winTag": "WINDOWS デスクトップ • 64-BIT",
      "plat.winTitle": "MuStreamer for Windows Desktop",
      "plat.winDesc": "同じLiquid GlassダークUI、マルチNIC SSDP自動検出（Ethernet + Wi-Fi）、内蔵ロスレスHTTPプロキシにより、Windows PCからHi-Fi機器を自在にコントロール。",
      "plat.winB1": "3モード搭載：<strong>Pure FLAC</strong>（パススルー）、<strong>Cloud Direct</strong>、<strong>Local WAV + 64-bit DSP</strong>",
      "plat.winB2": "マルチアダプタLAN/VPN対応の自動検出＆Ethernet回線・リアルタイムPing診断",
      "plat.winB3": "アナログVUメーター、FFTスペクトラム、Dynamic Range (DR)、10バンドEQ、ミニプレーヤー",
      "plat.winBtn": "Windows v1.2 をダウンロード (.zip)",
      "plat.winReq": "x64 ネイティブ • UPnP / DLNA",
      "plat.andTag": "ハイレゾ ANDROID アプリ",
      "plat.andTitle": "MuStreamer for Android スマートフォン &amp; タブレット",
      "plat.andDesc": "Qobuz Studio Master、TIDAL Max、50,000+ FLACラジオ、Podcast、ローカル音源をポケットに。Naim Mu-soやUPnPストリーマーへ24-bit/192 kHz Bit-Perfect伝送。",
      "plat.andB1": "<strong>&plusmn;5%</strong>単位の高精度ボリューム操作＆即時HTTP Rangeシーク対応",
      "plat.andB2": "途切れないギャップレス再生キュー、高解像度ジャケット、ラジオP1–P6プリセット",
      "plat.andB3": "リアルタイムWi-Fiジッター計測＆ストリーマーのEthernet/Wi-Fi接続診断",
      "plat.andBtn": "Android APK v1.2 をダウンロード (.apk)",
      "plat.andReq": "スマホ &amp; タブレット対応",
      "signal.modeCloud": "☁️ Cloud Direct CDN",
      "signal.s2TitleCloud": "CDN → ストリーマー直接引き渡し",
      "signal.s2MetaCloud": "ローカルプロキシ不要 &bull; 正規CDN URL",
      "signal.s3TitleCloud": "直接HTTPSストリーム → DAC",
      "signal.s3MetaCloud": "端末負荷最小 &bull; バッテリー持ち最適化",
      "signal.noteBadgeCloud": "最新ストリーマー &amp; 長時間再生に最適",
      "signal.noteTextCloud": "対応ストリーマーをCDNへ直接接続し、端末のCPU・バッテリー消費を最小限に抑えます。",
      "modal.contactBtn": "リンク / サポートを依頼",
      "modal.guideBtn": "ガイド &amp; FAQ",
      "modal.winTitle": "MuStreamer v1.2 Windows デスクトップ版",
      "modal.winBody": "Windows 10/11 (64-bit) 版 v1.2 は .zip 形式で直接ダウンロード可能です。フォルダを展開して mustreamer.exe を実行してください（SmartScreen警告時は「詳細情報」→「実行」）。",
      "modal.winReqs": "<strong>動作環境：</strong> Windows 10 / 11 (x64) &bull; UPnP/DLNA機器との同一ローカルネットワーク",
      "modal.andTitle": "MuStreamer v1.2 Android版",
      "modal.andBody": "Android版 v1.2 は公式サイトから署名済み .apk ファイルとして直接ダウンロード可能です：24-bit/192 kHz Bit-Perfect伝送、±5%音量、即時シーク、5万局以上のFLACラジオ、Wi-Fi診断を搭載。",
      "modal.andReqs": "<strong>動作環境：</strong> Android 8.0以上 (ARM64) &bull; ローカルWi-Fi接続"
    }
  };

  // Snapshot dell'originale italiano dal DOM per non alterare mai le modifiche dell'utente
  const originalIT = {
    metaTitle: document.title,
    metaDesc: (document.getElementById("metaDesc") || {}).content || "",
    nodes: {}
  };

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && !(key in originalIT.nodes)) {
      originalIT.nodes[key] = el.innerHTML;
    }
  });

  function isValidLang(lang) {
    return lang && Object.prototype.hasOwnProperty.call(LANG_META, lang);
  }

  function getInitialLanguage() {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get("lang");
      if (isValidLang(urlLang)) {
        return urlLang;
      }
    } catch (_) {}

    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (isValidLang(saved)) {
        return saved;
      }
    } catch (_) {}

    return "it";
  }

  function syncInternalLinks(lang) {
    const internalPages = ["index.html", "privacy.html", "support.html", "community.html"];
    document.querySelectorAll("a[href]").forEach((a) => {
      const rawHref = a.getAttribute("href");
      if (!rawHref || rawHref.startsWith("http") || rawHref.startsWith("mailto:") || rawHref.startsWith("#")) {
        return;
      }

      const [baseAndQuery, hash] = rawHref.split("#");
      const basePath = baseAndQuery.split("?")[0];
      if (!internalPages.includes(basePath)) {
        return;
      }

      const nextHref = lang === "it"
        ? basePath + (hash ? "#" + hash : "")
        : basePath + "?lang=" + encodeURIComponent(lang) + (hash ? "#" + hash : "");

      a.setAttribute("href", nextHref);
    });
  }

  function applyLanguage(lang, persist = true) {
    const safeLang = isValidLang(lang) ? lang : "it";
    const meta = LANG_META[safeLang];
    const page = document.documentElement.getAttribute("data-page") || "index";

    document.documentElement.lang = safeLang;

    if (safeLang === "it") {
      document.title = originalIT.metaTitle;
      const descEl = document.getElementById("metaDesc");
      if (descEl && originalIT.metaDesc) descEl.content = originalIT.metaDesc;

      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (key && key in originalIT.nodes) {
          el.innerHTML = originalIT.nodes[key];
        }
      });
    } else {
      const dict = TRANSLATIONS[safeLang] || TRANSLATIONS.en;
      const titleKey = `meta.${page}.title`;
      const descKey = `meta.${page}.desc`;
      if (dict[titleKey]) document.title = dict[titleKey];
      const descEl = document.getElementById("metaDesc");
      if (descEl && dict[descKey]) descEl.content = dict[descKey];

      document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (key && dict[key] !== undefined) {
          el.innerHTML = dict[key];
        } else if (key && originalIT.nodes[key] !== undefined) {
          el.innerHTML = originalIT.nodes[key];
        }
      });
    }

    // Aggiorna UI del selettore lingua e menu mobile
    const flagEl = document.getElementById("currentLangFlag");
    const codeEl = document.getElementById("currentLangCode");
    const btnEl = document.getElementById("langBtn");
    const menuEl = document.getElementById("langMenu");
    const mobileBtnEl = document.getElementById("mobileNavBtn");
    const mobileMenuEl = document.getElementById("mobileNavMenu");
    const mobilePagerEl = document.getElementById("mobileSectionPager");
    if (flagEl) flagEl.textContent = meta.flag;
    if (codeEl) codeEl.textContent = meta.code;
    if (btnEl) btnEl.setAttribute("aria-label", meta.aria);
    if (menuEl) menuEl.setAttribute("aria-label", meta.menuAria);
    if (mobileBtnEl) mobileBtnEl.setAttribute("aria-label", meta.pagesAria);
    if (mobileMenuEl) mobileMenuEl.setAttribute("aria-label", meta.pagesAria);
    if (mobilePagerEl) mobilePagerEl.setAttribute("aria-label", meta.pagerAria);

    document.querySelectorAll(".lang-option").forEach((opt) => {
      const isSelected = opt.getAttribute("data-lang") === safeLang;
      opt.classList.toggle("active", isSelected);
      opt.setAttribute("aria-selected", isSelected ? "true" : "false");
    });

    syncInternalLinks(safeLang);
    if (typeof syncMobileDock === "function") {
      syncMobileDock(safeLang);
    }
    if (typeof syncMobileNavLabels === "function") {
      syncMobileNavLabels();
    }

    if (persist) {
      try {
        localStorage.setItem(STORAGE_KEY, safeLang);
      } catch (_) {}

      try {
        const url = new URL(window.location.href);
        if (safeLang === "it") {
          url.searchParams.delete("lang");
        } else {
          url.searchParams.set("lang", safeLang);
        }
        window.history.replaceState({}, "", url.toString());
      } catch (_) {}
    }
  }

  // Inizializzazione Dropdown (Lingua + Navigazione Mobile) & Selettore Pagine Mobile
  window.MUSTREAMER_I18N = TRANSLATIONS;

  window.MUSTREAMER_I18N = TRANSLATIONS;

  const MOBILE_SECTIONS = ["home", "features", "tools", "story", "specs"];
  const HASH_TO_SECTION = {
    "": "home",
    "#": "home",
    "#home": "home",
    "#platforms": "home",
    "#platforms": "home",
    "#download": "home",
    "#features": "features",
    "#audiophile-tools": "tools",
    "#tools": "tools",
    "#story": "story",
    "#specs": "specs"
  };
  const SECTION_TO_HASH = {
    home: "#home",
    features: "#features",
    tools: "#audiophile-tools",
    story: "#story",
    specs: "#specs"
  };

  const switcher = document.getElementById("langSwitcher");
  const langBtn = document.getElementById("langBtn");
  const mobileSwitcher = document.getElementById("mobileNavSwitcher");
  const mobileNavBtn = document.getElementById("mobileNavBtn");
  const mobileNavMenu = document.getElementById("mobileNavMenu");
  const currentMobilePageEl = document.getElementById("currentMobilePage");
  const mobilePrevBtn = document.getElementById("mobilePrevBtn");
  const mobileNextBtn = document.getElementById("mobileNextBtn");
  const mobilePrevLabel = document.getElementById("mobilePrevLabel");
  const mobileNextLabel = document.getElementById("mobileNextLabel");
  const mobilePagerIndicator = document.getElementById("mobilePagerIndicator");

  let activeMobileSection = "home";

  function isMobileViewport() {
    return window.matchMedia && window.matchMedia("(max-width: 768px)").matches;
  }

  function getMobileTargetLabel(target) {
    if (!mobileNavMenu) return "";
    const opt = mobileNavMenu.querySelector(`.mobile-nav-option[data-mobile-target="${target}"] .mobile-nav-opt-label`);
    return opt ? opt.textContent.trim() : "";
  }

  function syncMobileNavLabels() {
    const page = document.documentElement.getAttribute("data-page") || "index";
    if (page !== "index") {
      if (currentMobilePageEl) {
        const subLabel = getMobileTargetLabel(page);
        if (subLabel) currentMobilePageEl.textContent = subLabel;
      }
      return;
    }

    if (currentMobilePageEl) {
      const lbl = getMobileTargetLabel(activeMobileSection);
      if (lbl) currentMobilePageEl.textContent = lbl;
    }

    const idx = MOBILE_SECTIONS.indexOf(activeMobileSection);
    if (mobilePagerIndicator) {
      mobilePagerIndicator.textContent = `${idx + 1} / ${MOBILE_SECTIONS.length}`;
    }
    if (mobilePrevBtn) {
      mobilePrevBtn.disabled = idx <= 0;
      if (mobilePrevLabel) {
        mobilePrevLabel.textContent = idx > 0 ? getMobileTargetLabel(MOBILE_SECTIONS[idx - 1]) : "";
      }
    }
    if (mobileNextBtn) {
      mobileNextBtn.disabled = idx >= MOBILE_SECTIONS.length - 1;
      if (mobileNextLabel) {
        mobileNextLabel.textContent = idx < MOBILE_SECTIONS.length - 1 ? getMobileTargetLabel(MOBILE_SECTIONS[idx + 1]) : "";
      }
    }
  }

  function activateMobileSection(section, options) {
    if (document.documentElement.getAttribute("data-page") !== "index") return;
    const opts = Object.assign({ scroll: true, updateHash: true }, options);
    const safeSection = MOBILE_SECTIONS.includes(section) ? section : "home";
    activeMobileSection = safeSection;

    document.querySelectorAll("main > section[data-mobile-section]").forEach((sec) => {
      sec.classList.toggle("mobile-active", sec.getAttribute("data-mobile-section") === safeSection);
    });

    if (mobileNavMenu) {
      mobileNavMenu.querySelectorAll(".mobile-nav-option[data-mobile-target]").forEach((item) => {
        item.classList.toggle("active", item.getAttribute("data-mobile-target") === safeSection);
      });
    }

    if (typeof syncMobileDockActive === "function") {
      syncMobileDockActive();
    }

    syncMobileNavLabels();

    if (opts.updateHash) {
      try {
        const nextHash = safeSection === "home" ? "" : (SECTION_TO_HASH[safeSection] || "");
        const url = new URL(window.location.href);
        url.hash = nextHash;
        window.history.replaceState({}, "", url.toString());
      } catch (_) {}
    }

    if (opts.scroll) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function closeLangMenu() {
    if (!switcher || !langBtn) return;
    switcher.classList.remove("open");
    langBtn.setAttribute("aria-expanded", "false");
  }

  function closeMobileMenu() {
    if (!mobileSwitcher || !mobileNavBtn) return;
    mobileSwitcher.classList.remove("open");
    mobileNavBtn.setAttribute("aria-expanded", "false");
  }

  if (switcher && langBtn) {
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeMobileMenu();
      const willOpen = !switcher.classList.contains("open");
      switcher.classList.toggle("open", willOpen);
      langBtn.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });

    document.querySelectorAll(".lang-option").forEach((opt) => {
      opt.addEventListener("click", () => {
        const chosen = opt.getAttribute("data-lang");
        applyLanguage(chosen, true);
        closeLangMenu();
      });
    });
  }

  if (mobileSwitcher && mobileNavBtn && mobileNavMenu) {
    mobileNavBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      closeLangMenu();
      const willOpen = !mobileSwitcher.classList.contains("open");
      mobileSwitcher.classList.toggle("open", willOpen);
      mobileNavBtn.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });

    mobileNavMenu.querySelectorAll(".mobile-nav-option").forEach((item) => {
      item.addEventListener("click", (e) => {
        const target = item.getAttribute("data-mobile-target");
        const page = document.documentElement.getAttribute("data-page") || "index";
        if (page === "index" && MOBILE_SECTIONS.includes(target)) {
          e.preventDefault();
          if (isMobileViewport()) {
            activateMobileSection(target, { scroll: true, updateHash: true });
          } else {
            activateMobileSection(target, { scroll: false, updateHash: true });
            const hash = SECTION_TO_HASH[target];
            const el = hash ? document.querySelector(hash) : null;
            if (el) {
              el.scrollIntoView({ behavior: "smooth", block: "start" });
            } else {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }
          }
        }
        closeMobileMenu();
      });
    });
  }

  // iOS-style Floating Bottom Tab Bar (visibile solo su schermi mobile <= 768px)
  const DOCK_ITEMS = [
    {
      target: "home",
      hrefIndex: "#home",
      hrefSub: "index.html#home",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 10.5L12 3l9 7.5"></path><path d="M5 9.5V20a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1V9.5"></path></svg>'
    },
    {
      target: "features",
      hrefIndex: "#features",
      hrefSub: "index.html#features",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>'
    },
    {
      target: "tools",
      hrefIndex: "#audiophile-tools",
      hrefSub: "index.html#audiophile-tools",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>'
    },
    {
      target: "community",
      hrefIndex: "community.html",
      hrefSub: "community.html",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>'
    },
    {
      target: "support",
      hrefIndex: "support.html",
      hrefSub: "support.html",
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>'
    }
  ];

  let iosBottomDock = null;

  function ensureMobileDock() {
    if (iosBottomDock) return iosBottomDock;
    const page = document.documentElement.getAttribute("data-page") || "index";
    const nav = document.createElement("nav");
    nav.className = "ios-bottom-dock";
    nav.id = "iosBottomDock";
    nav.setAttribute("aria-label", "Navigazione rapida");

    const inner = document.createElement("div");
    inner.className = "ios-dock-inner";

    DOCK_ITEMS.forEach((item) => {
      const a = document.createElement("a");
      a.className = "ios-dock-item";
      a.setAttribute("data-dock-target", item.target);
      a.setAttribute("href", page === "index" ? item.hrefIndex : item.hrefSub);
      a.innerHTML = `<span class="ios-dock-icon">${item.icon}</span><span class="ios-dock-label"></span>`;

      if (page === "index" && MOBILE_SECTIONS.includes(item.target)) {
        a.addEventListener("click", (e) => {
          e.preventDefault();
          activateMobileSection(item.target, { scroll: true, updateHash: true });
          closeMobileMenu();
          closeLangMenu();
        });
      }

      inner.appendChild(a);
    });

    nav.appendChild(inner);
    document.body.appendChild(nav);
    iosBottomDock = nav;
    return nav;
  }

  function syncMobileDockActive() {
    if (!iosBottomDock) return;
    const page = document.documentElement.getAttribute("data-page") || "index";
    const activeKey = page === "index" ? activeMobileSection : page;
    iosBottomDock.querySelectorAll(".ios-dock-item").forEach((el) => {
      const isMatch = el.getAttribute("data-dock-target") === activeKey;
      el.classList.toggle("active", isMatch);
      if (isMatch) {
        el.setAttribute("aria-current", "page");
      } else {
        el.removeAttribute("aria-current");
      }
    });
  }

  function syncMobileDock(lang) {
    const dock = ensureMobileDock();
    const safeLang = isValidLang(lang) ? lang : "it";
    const meta = LANG_META[safeLang];
    const labels = (meta && meta.dock) || LANG_META.it.dock;
    dock.setAttribute("aria-label", meta.pagesAria || "Navigazione");
    dock.querySelectorAll(".ios-dock-item").forEach((el) => {
      const target = el.getAttribute("data-dock-target");
      const labelEl = el.querySelector(".ios-dock-label");
      if (labelEl && labels[target]) {
        labelEl.textContent = labels[target];
      }
    });
    syncMobileDockActive();
  }

  ensureMobileDock();

  if (document.documentElement.getAttribute("data-page") === "index") {
    const initialSection = HASH_TO_SECTION[window.location.hash] || "home";
    activateMobileSection(initialSection, { scroll: false, updateHash: false });
    if (isMobileViewport() && initialSection !== "home") {
      window.scrollTo(0, 0);
      window.addEventListener("load", () => {
        if (isMobileViewport()) window.scrollTo(0, 0);
      }, { once: true });
    }

    if (mobilePrevBtn) {
      mobilePrevBtn.addEventListener("click", () => {
        const idx = MOBILE_SECTIONS.indexOf(activeMobileSection);
        if (idx > 0) {
          activateMobileSection(MOBILE_SECTIONS[idx - 1], { scroll: true, updateHash: true });
        }
      });
    }

    if (mobileNextBtn) {
      mobileNextBtn.addEventListener("click", () => {
        const idx = MOBILE_SECTIONS.indexOf(activeMobileSection);
        if (idx < MOBILE_SECTIONS.length - 1) {
          activateMobileSection(MOBILE_SECTIONS[idx + 1], { scroll: true, updateHash: true });
        }
      });
    }

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      if (anchor.closest("#mobileNavMenu")) return;
      anchor.addEventListener("click", (e) => {
        if (!isMobileViewport()) return;
        const target = HASH_TO_SECTION[anchor.getAttribute("href")];
        if (!target) return;
        e.preventDefault();
        activateMobileSection(target, { scroll: true, updateHash: true });
        closeMobileMenu();
      });
    });

    window.addEventListener("hashchange", () => {
      const target = HASH_TO_SECTION[window.location.hash] || "home";
      activateMobileSection(target, { scroll: isMobileViewport(), updateHash: false });
    });
  }

  document.addEventListener("click", (e) => {
    if (switcher && !switcher.contains(e.target)) {
      closeLangMenu();
    }
    if (mobileSwitcher && !mobileSwitcher.contains(e.target)) {
      closeMobileMenu();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLangMenu();
      closeMobileMenu();
    }
  });

  // Applica lingua iniziale (senza alterare cronologia o HTML se è 'it')
  const initialLang = getInitialLanguage();
  if (initialLang !== "it") {
    applyLanguage(initialLang, false);
  } else {
    syncInternalLinks("it");
    syncMobileDock("it");
    syncMobileNavLabels();
  }
})();
