/* ==============================================================================
   MuStreamer - Multilingua i18n (IT / EN / FR / DE / ES / PT / NL / JA)
   Preserva automaticamente i testi originali italiani presenti nell'HTML.
   ============================================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "mustreamer_lang";

  const LANG_META = {
    it: { flag: "🇮🇹", code: "IT", name: "Italiano", aria: "Cambia lingua", menuAria: "Seleziona lingua", pagesAria: "Pagine del sito", pagerAria: "Navigazione pagine" },
    en: { flag: "🇬🇧", code: "EN", name: "English", aria: "Change language", menuAria: "Select language", pagesAria: "Site pages", pagerAria: "Page navigation" },
    fr: { flag: "🇫🇷", code: "FR", name: "Français", aria: "Changer de langue", menuAria: "Choisir la langue", pagesAria: "Pages du site", pagerAria: "Navigation des pages" },
    de: { flag: "🇩🇪", code: "DE", name: "Deutsch", aria: "Sprache ändern", menuAria: "Sprache auswählen", pagesAria: "Seitenmenü", pagerAria: "Seitennavigation" },
    es: { flag: "🇪🇸", code: "ES", name: "Español", aria: "Cambiar idioma", menuAria: "Seleccionar idioma", pagesAria: "Páginas del sitio", pagerAria: "Navegación de páginas" },
    pt: { flag: "🇵🇹", code: "PT", name: "Português", aria: "Mudar idioma", menuAria: "Selecionar idioma", pagesAria: "Páginas do site", pagerAria: "Navegação de páginas" },
    nl: { flag: "🇳🇱", code: "NL", name: "Nederlands", aria: "Taal wijzigen", menuAria: "Taal selecteren", pagesAria: "Sitepagina's", pagerAria: "Paginanavigatie" },
    ja: { flag: "🇯🇵", code: "JA", name: "日本語", aria: "言語を変更", menuAria: "言語を選択", pagesAria: "サイトページ", pagerAria: "ページ移動" }
  };

  const TRANSLATIONS = {
    en: {
      "meta.index.title": "MuStreamer 1.0.1 - Bit-Perfect Audiophile Streaming, Live Radio & Podcasts for Mac and iPhone",
      "meta.index.desc": "MuStreamer 1.0.1 breathes new life into your Hi-Fi system: 24-bit/192 kHz Bit-Perfect streaming, Qobuz, TIDAL, 50,000+ Live Radio stations (including FLAC), Podcasts, Local Hi-Res Files, and precision tools (VU Meter, RTA, SPL Meter).",
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

      "hero.badge": "New v1.0.1 • Bit-Perfect Hi-Res, Live Radio &amp; Podcasts",
      "hero.title": "New life for your Hi-Fi system.<br><span class=\"text-gradient\">Zero sonic compromises.</span>",
      "hero.lead": "MuStreamer is the ultimate audiophile player for Mac and iPhone. It combines <strong>24-bit/192 kHz Bit-Perfect</strong> playback for <strong>Qobuz</strong>, <strong>TIDAL</strong>, and <strong>Local Audio Files</strong> with <strong>50,000+ Live Radio stations (including FLAC)</strong> and <strong>universal Podcasts</strong>, plus smart local decoding for your UPnP streamer.",
      "hero.macCaption": "Download free for Mac",
      "hero.macStore": "Download (.dmg)",
      "hero.iosCaption": "Download on the",
      "hero.discoverBtn": "Explore Features",
      "hero.subtitle": "Available on macOS 14+ (Sonoma/Sequoia) and iOS 17+. Compatible with standard UPnP / DLNA protocols.",
      "hero.macTip": "Mac: open the <code>.dmg</code> file and drag <strong>MuStreamer</strong> to Applications. On first launch, if prompted by macOS, open <em>System Settings &rarr; Privacy &amp; Security &rarr; Open Anyway</em>.",
      "hero.comingSoon": "Coming soon to <strong>Windows</strong> and <strong>Android</strong>...",

      "mockup.title": "MuStreamer — Bit-Perfect Hi-Res Playback (FLAC 24-bit / 192 kHz)",
      "mockup.nowPlaying": "Now Playing • Qobuz Studio Master",
      "mockup.decodeLine": "⚡ Decoding: Local (Mac/iOS Offload) &bull; Output: Bit-Perfect WAV Lossless",
      "mockup.vumeterTitle": "Stereo Analog VU Meter",
      "mockup.newLabel": "New in v1.0.1",
      "mockup.newRadio": "50,000+ Live Radio &amp; FLAC",
      "mockup.newPodcast": "Podcasts &amp; Daily Episodes",
      "mockup.newLocal": "📁 Local Hi-Res Files",
      "mockup.newEngine": "⚙️ WAV / FLAC 192 kHz Engine",

      "features.badge": "Acoustic Engineering • v1.0.1",
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
      "specs.r5Soon": "⏳ Coming soon for <strong>Windows</strong> and <strong>Android</strong> too",
      "specs.r6Label": "Languages &amp; Version",
      "specs.r6Val": "<strong>8 languages</strong> (IT, EN, FR, DE, ES, PT, NL, JA) &bull; Current version <strong>1.0.1</strong>",

      "footer.home": "Home",
      "footer.privacy": "Privacy Policy",
      "footer.support": "Support & Contact",
      "footer.copy": "&copy; 2026 MuStreamer. All rights reserved.",
      "footer.disclaimer": "<em>Legal & Trademarks Notice:</em> Naim, Mu-so, Qobuz, and TIDAL are registered trademarks of their respective owners and are mentioned here solely for descriptive and hardware/software compatibility purposes. MuStreamer is an independent application crafted by enthusiasts for the Hi-Fi community.",

      "privacy.badge": "Official Document",
      "privacy.title": "Privacy Policy",
      "privacy.updated": "Last updated: November 19, 2026",
      "privacy.s1Title": "1. Our Privacy Philosophy",
      "privacy.s1Text": "MuStreamer was built for lovers of music and high-fidelity sound. We firmly believe your listening habits and personal data belong exclusively to you. For this reason, <strong>MuStreamer DOES NOT collect, store on remote servers, or sell any of your personal data or listening statistics to third parties</strong>.",
      "privacy.s2Title": "2. Streaming Service Credentials (Qobuz & TIDAL)",
      "privacy.s2Intro": "When you sign in to your Qobuz or TIDAL account inside the app:",
      "privacy.s2Li1": "Authentication tokens are exchanged <strong>directly and encrypted (HTTPS / TLS 1.3)</strong> between your device and the official Qobuz or TIDAL servers.",
      "privacy.s2Li2": "Credentials and session tokens are stored securely <strong>exclusively on your device</strong> using Apple Keychain / Secure Storage with AES-GCM encryption.",
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
      "support.q1Text": "Simply make sure your Mac or iPhone is connected to the <strong>same Wi-Fi or Ethernet network</strong> as your streamer. Upon opening the app, MuStreamer automatically scans your network via SSDP/UPnP and displays your device in the top selector bar (e.g., <em>Naim Mu-so</em> or any DLNA MediaRenderer). Just tap it to connect.",
      "support.q2Title": "2. How does choosing between device decoding and internal DAC decoding work?",
      "support.q2Text": "From the new studio <em>Hi-Res Audio Engine</em> panel (also accessible directly from the player) or Settings, you can configure output mode and streaming parameters:<br>&bull; <strong>WAV Bit-Perfect (Local Decoding)</strong>: Your Mac or iPhone decodes FLAC/Hi-Res streams locally (including local files) and sends an uncompressed linear PCM/WAV stream to your stereo—ideal for streamers with slower CPUs.<br>&bull; <strong>Native FLAC (Streamer)</strong>: Sends the untouched stream so the streamer decodes it internally, with max sample-rate cap (44.1–192 kHz), Zero-Jitter RAM Pre-buffering, and 24-bit padding.",
      "support.q3Title": "3. Is Bit-Perfect mode always guaranteed?",
      "support.q3Text": "Yes. MuStreamer never applies unrequested software resampling. If a track is mastered at 24-bit / 96 kHz or 24-bit / 192 kHz, the digital audio data is preserved bit for bit all the way to your audio system.",
      "support.q4Title": "4. Which subscriptions are required for Qobuz or TIDAL?",
      "support.q4Text": "You can sign in with your regular Qobuz (Studio/Sublime) or TIDAL (HiFi/Max) subscription. Meanwhile, <strong>50,000+ Live Radio</strong>, <strong>Podcasts</strong>, <strong>Local Audio Files</strong> playback, and the <em>Offline Demo Catalog</em> all work <strong>free with no subscription required</strong>.",
      "support.q5NewTitle": "5. How do Live Radio, Podcasts, and Local Audio Files work (new in 1.0.1)?",
      "support.q5NewText": "Starting with version 1.0.1, MuStreamer includes three native sources usable across iPhone, Mac, AirPlay, and UPnP/DLNA streamers:<br>&bull; <strong>Live Radio</strong>: over 50,000 stations from 224 countries (including lossless FLAC streams), 6 quick P1–P6 Presets, custom URLs, and <code>.M3U</code> backup/import.<br>&bull; <strong>Podcasts</strong>: Italy and Global charts, instant search, direct full-episode RSS streaming with <code>-15s / +30s</code> skips and Favorites.<br>&bull; <strong>Local Audio Files</strong>: instant playback of <code>FLAC, WAV, AIFF, ALAC, and MP3</code> files from your device, iCloud/Files, or USB/Finder drives.",
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
      "community.t3Reply": "So rewarding to read this Davide! Room acoustics account for over 50% of a Hi-Fi system's sound: having an SPL meter, sweep generator, and parametric correction right inside the player is made specifically to tame room modes."
    },

    fr: {
      "meta.index.title": "MuStreamer 1.0.1 - Streaming Audiophile Bit-Perfect, Radio Live & Podcasts pour Mac et iPhone",
      "meta.index.desc": "MuStreamer 1.0.1 redonne vie à votre système Hi-Fi : streaming Bit-Perfect 24-bit/192 kHz, Qobuz, TIDAL, 50 000+ Radios Live (dont FLAC), Podcasts, Fichiers Locaux Hi-Res et outils de précision.",
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

      "hero.badge": "Nouvelle v1.0.1 • Hi-Res Bit-Perfect, Radio Live &amp; Podcasts",
      "hero.title": "Une nouvelle vie pour votre Hi-Fi.<br><span class=\"text-gradient\">Zéro compromis sonore.</span>",
      "hero.lead": "MuStreamer est le lecteur audiophile ultime pour Mac et iPhone. Il réunit la pureté <strong>Bit-Perfect 24-bit/192 kHz</strong> de <strong>Qobuz</strong>, <strong>TIDAL</strong> et des <strong>Fichiers Audio Locaux</strong> avec <strong>50 000+ Radios Live (dont FLAC)</strong> et les <strong>Podcasts universels</strong>, avec décodage local intelligent pour votre streamer UPnP.",
      "hero.macCaption": "Gratuit pour Mac",
      "hero.macStore": "Télécharger (.dmg)",
      "hero.iosCaption": "Télécharger dans",
      "hero.discoverBtn": "Découvrir les Fonctions",
      "hero.subtitle": "Disponible sur macOS 14+ (Sonoma/Sequoia) et iOS 17+. Compatible avec les protocoles standard UPnP / DLNA.",
      "hero.macTip": "Mac : ouvrez le <code>.dmg</code> et glissez <strong>MuStreamer</strong> dans Applications. Au premier lancement, si macOS l'exige, allez dans <em>Réglages Système &rarr; Confidentialité et sécurité &rarr; Ouvrir quand même</em>.",
      "hero.comingSoon": "Bientôt sur <strong>Windows</strong> et <strong>Android</strong>...",

      "mockup.title": "MuStreamer — Lecture Hi-Res Bit-Perfect (FLAC 24-bit / 192 kHz)",
      "mockup.nowPlaying": "En cours • Qobuz Studio Master",
      "mockup.decodeLine": "⚡ Décodage : Local (Mac/iOS Offload) &bull; Sortie : Bit-Perfect WAV Lossless",
      "mockup.vumeterTitle": "VU-Mètre Analogique Stéréo",
      "mockup.newLabel": "Nouveautés v1.0.1",
      "mockup.newRadio": "50 000+ Radios Live &amp; FLAC",
      "mockup.newPodcast": "Podcasts &amp; Épisodes du Jour",
      "mockup.newLocal": "📁 Fichiers Locaux Hi-Res",
      "mockup.newEngine": "⚙️ Moteur WAV / FLAC 192 kHz",

      "features.badge": "Ingénierie Acoustique • v1.0.1",
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
      "specs.r5Soon": "⏳ Bientôt disponible également sur <strong>Windows</strong> et <strong>Android</strong>",
      "specs.r6Label": "Langues &amp; Version",
      "specs.r6Val": "<strong>8 langues</strong> (IT, EN, FR, DE, ES, PT, NL, JA) &bull; Version actuelle <strong>1.0.1</strong>",

      "footer.home": "Accueil",
      "footer.privacy": "Confidentialité",
      "footer.support": "Support & Contacts",
      "footer.copy": "&copy; 2026 MuStreamer. Tous droits réservés.",
      "footer.disclaimer": "<em>Mentions Légales & Marques :</em> Naim, Mu-so, Qobuz et TIDAL sont des marques déposées de leurs propriétaires respectifs, citées uniquement à titre descriptif et de compatibilité. MuStreamer est une application indépendante créée par des passionnés pour la communauté Hi-Fi.",

      "privacy.badge": "Document Officiel",
      "privacy.title": "Politique de Confidentialité",
      "privacy.updated": "Dernière mise à jour : 19 Novembre 2026",
      "privacy.s1Title": "1. Notre philosophie sur la vie privée",
      "privacy.s1Text": "MuStreamer est conçue pour les amoureux de musique et de haute fidélité. Vos habitudes d'écoute et données personnelles vous appartiennent exclusivement. Ainsi, <strong>MuStreamer NE collecte, NE stocke sur aucun serveur distant et NE vend aucune donnée personnelle ou statistique d'écoute à des tiers</strong>.",
      "privacy.s2Title": "2. Identifiants des Services de Streaming (Qobuz & TIDAL)",
      "privacy.s2Intro": "Lorsque vous vous connectez à votre compte Qobuz ou TIDAL :",
      "privacy.s2Li1": "Les jetons d'authentification sont échangés <strong>directement et de façon chiffrée (HTTPS / TLS 1.3)</strong> avec les serveurs officiels de Qobuz ou TIDAL.",
      "privacy.s2Li2": "Vos identifiants sont conservés de manière sécurisée <strong>exclusivement sur votre appareil</strong> via le Trousseau Apple (chiffrement AES-GCM).",
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
      "support.q1Text": "Assurez-vous que votre Mac ou iPhone est connecté au <strong>même réseau Wi-Fi ou Ethernet</strong> que votre lecteur. MuStreamer analyse automatiquement le réseau via SSDP/UPnP et affiche l'appareil dans la barre supérieure (ex. <em>Naim Mu-so</em> ou tout MediaRenderer DLNA).",
      "support.q2Title": "2. Comment fonctionne le choix entre décodage local et DAC interne ?",
      "support.q2Text": "Depuis le nouveau panneau studio <em>Moteur Audio Hi-Res</em> (également accessible depuis le lecteur) ou les Réglages, choisissez le mode de sortie et les paramètres de streaming :<br>&bull; <strong>WAV Bit-Perfect (Décodage Local)</strong> : Votre Mac ou iPhone décode localement les flux FLAC/Hi-Res (y compris les fichiers locaux) et envoie un flux PCM/WAV linéaire non compressé à votre chaîne. Idéal pour les streamers à processeur modeste.<br>&bull; <strong>FLAC Natif (Streamer)</strong> : Transmet le flux brut pour un décodage interne par le streamer, avec limite d'échantillonnage (44,1–192 kHz), Pré-buffering RAM Zero-Jitter et padding 24-bit.",
      "support.q3Title": "3. Le mode Bit-Perfect est-il toujours garanti ?",
      "support.q3Text": "Oui. MuStreamer n'applique aucun rééchantillonnage logiciel non sollicité. Les morceaux 24-bit / 96 kHz ou 192 kHz restent intacts bit pour bit.",
      "support.q4Title": "4. Quels abonnements faut-il pour Qobuz ou TIDAL ?",
      "support.q4Text": "Vous pouvez vous connecter avec votre abonnement Qobuz (Studio/Sublime) ou TIDAL (HiFi/Max). Les <strong>50 000+ Radios Live</strong>, les <strong>Podcasts</strong>, la lecture de <strong>Fichiers Audio Locaux</strong> et le <em>Catalogue Démo Hors-Ligne</em> fonctionnent quant à eux <strong>gratuitement et sans abonnement</strong>.",
      "support.q5NewTitle": "5. Comment fonctionnent Radios Live, Podcasts et Fichiers Audio Locaux (nouveauté 1.0.1) ?",
      "support.q5NewText": "Depuis la version 1.0.1, MuStreamer intègre trois sources natives utilisables sur iPhone, Mac, AirPlay et streamers UPnP/DLNA :<br>&bull; <strong>Radios Live</strong> : plus de 50 000 stations de 224 pays (dont flux FLAC lossless), 6 préréglages rapides P1–P6, URL personnalisées et sauvegarde/import <code>.M3U</code>.<br>&bull; <strong>Podcasts</strong> : classements Italie et Monde, recherche instantanée, écoute intégrale des épisodes via RSS avec sauts <code>-15s / +30s</code> et Favoris.<br>&bull; <strong>Fichiers Audio Locaux</strong> : lecture immédiate de fichiers <code>FLAC, WAV, AIFF, ALAC et MP3</code> depuis votre appareil, iCloud/Fichiers ou support USB/Finder.",
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
      "community.t3Reply": "Quel plaisir de lire cela Davide ! L'acoustique de la pièce représente plus de 50 % du rendu Hi-Fi : intégrer sonomètre SPL, générateur de sweep et correction paramétrique sert justement à maîtriser les résonances de la pièce."
    },

    de: {
      "meta.index.title": "MuStreamer 1.0.1 - Bit-Perfect Audiophiles Streaming, Live-Radio & Podcasts für Mac und iPhone",
      "meta.index.desc": "MuStreamer 1.0.1 belebt Ihr Hi-Fi-System neu: 24-Bit/192 kHz Bit-Perfect-Streaming, Qobuz, TIDAL, 50.000+ Live-Radios (auch FLAC), Podcasts, lokale Hi-Res-Dateien und Präzisionswerkzeuge.",
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

      "hero.badge": "Neu v1.0.1 • Hi-Res Bit-Perfect, Live-Radio &amp; Podcasts",
      "hero.title": "Neues Leben für Ihre Hi-Fi-Anlage.<br><span class=\"text-gradient\">Null klangliche Kompromisse.</span>",
      "hero.lead": "MuStreamer ist der ultimative audiophile Player für Mac und iPhone. Er vereint <strong>24-Bit/192 kHz Bit-Perfect</strong>-Wiedergabe für <strong>Qobuz</strong>, <strong>TIDAL</strong> und <strong>lokale Audiodateien</strong> mit <strong>50.000+ Live-Radiosendern (inkl. FLAC)</strong> und <strong>universellen Podcasts</strong> – inklusive intelligentem lokalem Decoding für Ihren UPnP-Streamer.",
      "hero.macCaption": "Kostenlos für Mac",
      "hero.macStore": "Download (.dmg)",
      "hero.iosCaption": "Laden im",
      "hero.discoverBtn": "Funktionen entdecken",
      "hero.subtitle": "Verfügbar für macOS 14+ (Sonoma/Sequoia) und iOS 17+. Kompatibel mit Standard-UPnP / DLNA.",
      "hero.macTip": "Mac: Öffnen Sie die <code>.dmg</code>-Datei und ziehen Sie <strong>MuStreamer</strong> in Programme. Beim ersten Start ggf. unter <em>Systemeinstellungen &rarr; Datenschutz &amp; Sicherheit &rarr; Dennoch öffnen</em> freigeben.",
      "hero.comingSoon": "Bald auch für <strong>Windows</strong> und <strong>Android</strong>...",

      "mockup.title": "MuStreamer — Hi-Res Bit-Perfect Wiedergabe (FLAC 24-Bit / 192 kHz)",
      "mockup.nowPlaying": "Aktuelle Wiedergabe • Qobuz Studio Master",
      "mockup.decodeLine": "⚡ Dekodierung: Lokal (Mac/iOS Offload) &bull; Ausgang: Bit-Perfect WAV Lossless",
      "mockup.vumeterTitle": "Analoges Stereo-VU-Meter",
      "mockup.newLabel": "Neu in v1.0.1",
      "mockup.newRadio": "50.000+ Live-Radios &amp; FLAC",
      "mockup.newPodcast": "Podcasts &amp; Tagesepisoden",
      "mockup.newLocal": "📁 Lokale Hi-Res-Dateien",
      "mockup.newEngine": "⚙️ WAV / FLAC 192 kHz Engine",

      "features.badge": "Akustik-Engineering • v1.0.1",
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
      "specs.r5Soon": "⏳ Bald auch für <strong>Windows</strong> und <strong>Android</strong> verfügbar",
      "specs.r6Label": "Sprachen &amp; Version",
      "specs.r6Val": "<strong>8 Sprachen</strong> (IT, EN, FR, DE, ES, PT, NL, JA) &bull; Aktuelle Version <strong>1.0.1</strong>",

      "footer.home": "Startseite",
      "footer.privacy": "Datenschutz",
      "footer.support": "Support & Kontakt",
      "footer.copy": "&copy; 2026 MuStreamer. Alle Rechte vorbehalten.",
      "footer.disclaimer": "<em>Rechtlicher Hinweis & Marken:</em> Naim, Mu-so, Qobuz und TIDAL sind eingetragene Marken ihrer jeweiligen Eigentümer und dienen ausschließlich der Beschreibung der Kompatibilität. MuStreamer ist eine unabhängige App von Enthusiasten für die Hi-Fi-Community.",

      "privacy.badge": "Offizielles Dokument",
      "privacy.title": "Datenschutzerklärung",
      "privacy.updated": "Zuletzt aktualisiert: 19. November 2026",
      "privacy.s1Title": "1. Unsere Datenschutz-Philosophie",
      "privacy.s1Text": "Ihre Hörgewohnheiten und Daten gehören nur Ihnen. <strong>MuStreamer sammelt, speichert auf externen Servern und verkauft KEINERLEI persönliche Daten oder Hörstatistiken an Dritte</strong>.",
      "privacy.s2Title": "2. Zugangsdaten (Qobuz & TIDAL)",
      "privacy.s2Intro": "Bei der Anmeldung in der App:",
      "privacy.s2Li1": "Authentifizierungs-Tokens werden <strong>direkt und verschlüsselt (HTTPS / TLS 1.3)</strong> mit den offiziellen Servern ausgetauscht.",
      "privacy.s2Li2": "Anmeldedaten verbleiben sicher <strong>ausschließlich auf Ihrem Gerät</strong> in der Apple Keychain (AES-GCM).",
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
      "support.q1Text": "Verbinden Sie Mac oder iPhone mit demselben <strong>WLAN oder Ethernet-Netzwerk</strong>. MuStreamer erkennt Geräte über SSDP/UPnP automatisch.",
      "support.q2Title": "2. Wie funktioniert die Wahl zwischen lokaler Dekodierung und internem DAC?",
      "support.q2Text": "Über das neue Studio-Panel <em>Hi-Res Audio-Engine</em> (auch direkt im Player erreichbar) oder in den Einstellungen wählen Sie Ausgabemodus und Streaming-Parameter:<br>&bull; <strong>WAV Bit-Perfect (Lokales Decoding)</strong>: Mac oder iPhone decodiert FLAC/Hi-Res lokal (auch lokale Dateien) und sendet unkomprimiertes lineares PCM/WAV an Ihre Anlage – ideal für Streamer mit schwächerer CPU.<br>&bull; <strong>Natives FLAC (Streamer)</strong>: Sendet den unveränderten Stream zur internen Decodierung mit max. Abtastrate (44,1–192 kHz), Zero-Jitter RAM-Vorabpufferung und 24-Bit-Padding.",
      "support.q3Title": "3. Ist Bit-Perfect immer garantiert?",
      "support.q3Text": "Ja. MuStreamer führt kein unerwünschtes Resampling durch; 24-Bit / 96–192 kHz bleiben bitgenau erhalten.",
      "support.q4Title": "4. Welche Abos werden für Qobuz oder TIDAL benötigt?",
      "support.q4Text": "Sie können sich mit Ihrem normalen Qobuz- (Studio/Sublime) oder TIDAL-Abo (HiFi/Max) anmelden. <strong>50.000+ Live-Radios</strong>, <strong>Podcasts</strong>, die Wiedergabe <strong>lokaler Audiodateien</strong> sowie der <em>Offline-Demo-Katalog</em> funktionieren dagegen <strong>kostenlos und ganz ohne Abo</strong>.",
      "support.q5NewTitle": "5. Wie funktionieren Live-Radio, Podcasts und lokale Audiodateien (neu in 1.0.1)?",
      "support.q5NewText": "Ab Version 1.0.1 bietet MuStreamer drei neue native Quellen für iPhone, Mac, AirPlay und UPnP/DLNA-Streamer:<br>&bull; <strong>Live-Radio</strong>: über 50.000 Sender aus 224 Ländern (inkl. Lossless-FLAC-Streams), 6 Schnell-Presets P1–P6, eigene URLs sowie <code>.M3U</code>-Backup/-Import.<br>&bull; <strong>Podcasts</strong>: Italien- und Welt-Charts, Sofortsuche, direktes Streaming kompletter Folgen per RSS mit <code>-15s / +30s</code> Sprüngen und Favoriten.<br>&bull; <strong>Lokale Audiodateien</strong>: sofortige Wiedergabe von <code>FLAC, WAV, AIFF, ALAC und MP3</code> vom Gerät, aus iCloud/Dateien oder von USB/Finder-Laufwerken.",
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
      "community.t3Reply": "Das freut mich riesig, Davide! Die Raumakustik macht über 50 % des Klangs aus – SPL-Messer, Sweep-Generator und parametrischer EQ direkt im Player helfen genau dabei, Raummoden in den Griff zu bekommen."
    },

    es: {
      "meta.index.title": "MuStreamer 1.0.1 - Streaming Audiófilo Bit-Perfect, Radio en Vivo y Podcasts para Mac y iPhone",
      "meta.index.desc": "MuStreamer 1.0.1 da nueva vida a tu equipo Hi-Fi: streaming Bit-Perfect 24-bit/192 kHz, Qobuz, TIDAL, 50.000+ Radios en Vivo (también FLAC), Podcasts, Archivos Locales Hi-Res y herramientas de precisión.",
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

      "hero.badge": "Nueva v1.0.1 • Hi-Res Bit-Perfect, Radio en Vivo y Podcasts",
      "hero.title": "Nueva vida para tu equipo Hi-Fi.<br><span class=\"text-gradient\">Cero compromisos sonoros.</span>",
      "hero.lead": "MuStreamer es el reproductor audiófilo definitivo para Mac y iPhone. Combina la pureza <strong>Bit-Perfect 24-bit/192 kHz</strong> de <strong>Qobuz</strong>, <strong>TIDAL</strong> y <strong>Archivos de Audio Locales</strong> con <strong>50.000+ Radios en Vivo (incl. FLAC)</strong> y <strong>Podcasts universales</strong>, con decodificación local inteligente para tu streamer UPnP.",
      "hero.macCaption": "Gratis para Mac",
      "hero.macStore": "Descargar (.dmg)",
      "hero.iosCaption": "Descárgalo en",
      "hero.discoverBtn": "Descubrir Funciones",
      "hero.subtitle": "Disponible en macOS 14+ (Sonoma/Sequoia) y iOS 17+. Compatible con estándares UPnP / DLNA.",
      "hero.macTip": "Mac: abre el archivo <code>.dmg</code> y arrastra <strong>MuStreamer</strong> a Aplicaciones. La primera vez, si macOS lo solicita, ve a <em>Ajustes del Sistema &rarr; Privacidad y seguridad &rarr; Abrir igualmente</em>.",
      "hero.comingSoon": "Pronto en <strong>Windows</strong> y <strong>Android</strong>...",

      "mockup.title": "MuStreamer — Reproducción Hi-Res Bit-Perfect (FLAC 24-bit / 192 kHz)",
      "mockup.nowPlaying": "Reproduciendo • Qobuz Studio Master",
      "mockup.decodeLine": "⚡ Decodificación: Local (Mac/iOS Offload) &bull; Salida: Bit-Perfect WAV Lossless",
      "mockup.vumeterTitle": "Vúmetro Analógico Estéreo",
      "mockup.newLabel": "Novedades v1.0.1",
      "mockup.newRadio": "50.000+ Radios en Vivo y FLAC",
      "mockup.newPodcast": "Podcasts y Episodios del Día",
      "mockup.newLocal": "📁 Archivos Locales Hi-Res",
      "mockup.newEngine": "⚙️ Motor WAV / FLAC 192 kHz",

      "features.badge": "Ingeniería Acústica • v1.0.1",
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
      "specs.r5Soon": "⏳ Pronto disponible también para <strong>Windows</strong> y <strong>Android</strong>",
      "specs.r6Label": "Idiomas y Versión",
      "specs.r6Val": "<strong>8 idiomas</strong> (IT, EN, FR, DE, ES, PT, NL, JA) &bull; Versión actual <strong>1.0.1</strong>",

      "footer.home": "Inicio",
      "footer.privacy": "Política de Privacidad",
      "footer.support": "Soporte y Contacto",
      "footer.copy": "&copy; 2026 MuStreamer. Todos los derechos reservados.",
      "footer.disclaimer": "<em>Nota Legal y Marcas:</em> Naim, Mu-so, Qobuz y TIDAL son marcas registradas de sus respectivos propietarios, citadas únicamente con fines descriptivos y de compatibilidad.",

      "privacy.badge": "Documento Oficial",
      "privacy.title": "Política de Privacidad",
      "privacy.updated": "Última actualización: 19 de Noviembre de 2026",
      "privacy.s1Title": "1. Nuestra filosofía de Privacidad",
      "privacy.s1Text": "<strong>MuStreamer NO recopila, NO almacena en servidores remotos y NO vende ningún dato personal o estadística de escucha a terceros</strong>.",
      "privacy.s2Title": "2. Credenciales (Qobuz y TIDAL)",
      "privacy.s2Intro": "Al iniciar sesión en Qobuz o TIDAL:",
      "privacy.s2Li1": "Los tokens se intercambian <strong>directamente y cifrados (HTTPS / TLS 1.3)</strong> con los servidores oficiales.",
      "privacy.s2Li2": "Tus credenciales se guardan <strong>exclusivamente en tu dispositivo</strong> mediante el Llavero de Apple (AES-GCM).",
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
      "support.q1Text": "Asegúrate de estar en la <strong>misma red Wi-Fi o Ethernet</strong>. MuStreamer detecta tu equipo automáticamente vía SSDP/UPnP.",
      "support.q2Title": "2. ¿Cómo funciona la decodificación local frente al DAC interno?",
      "support.q2Text": "Desde el nuevo panel de estudio <em>Motor de Audio Hi-Res</em> (accesible también desde el reproductor) o en Ajustes puedes elegir el modo de salida y los parámetros de streaming:<br>&bull; <strong>WAV Bit-Perfect (Decodificación Local)</strong>: Tu Mac o iPhone decodifica localmente los flujos FLAC/Hi-Res (incluidos archivos locales) y envía un flujo PCM/WAV lineal sin comprimir a tu equipo. Ideal para streamers con CPU menos potentes.<br>&bull; <strong>FLAC Nativo (Streamer)</strong>: Envía el flujo intacto para que el propio streamer lo decodifique, con límite de frecuencia (44.1–192 kHz), Pre-buffering RAM Zero-Jitter y relleno de 24-bit.",
      "support.q3Title": "3. ¿El modo Bit-Perfect está garantizado?",
      "support.q3Text": "Sí, sin remuestreos innecesarios hasta 24-bit / 192 kHz.",
      "support.q4Title": "4. ¿Qué suscripciones necesito?",
      "support.q4Text": "Puedes iniciar sesión con tu suscripción habitual de Qobuz (Studio/Sublime) o TIDAL (HiFi/Max). En cambio, las <strong>50.000+ Radios en Vivo</strong>, los <strong>Podcasts</strong>, la reproducción de <strong>Archivos de Audio Locales</strong> y el <em>Catálogo Demo sin Conexión</em> funcionan <strong>gratis y sin necesidad de suscripción</strong>.",
      "support.q5NewTitle": "5. ¿Cómo funcionan Radio en Vivo, Podcasts y Archivos Locales (novedad 1.0.1)?",
      "support.q5NewText": "A partir de la versión 1.0.1, MuStreamer integra tres nuevas fuentes nativas compatibles con iPhone, Mac, AirPlay y streamers UPnP/DLNA:<br>&bull; <strong>Radio en Vivo</strong>: más de 50.000 emisoras de 224 países (incluidos flujos FLAC lossless), 6 Presets rápidos P1–P6, URL personalizadas y copia/importación <code>.M3U</code>.<br>&bull; <strong>Podcasts</strong>: listas de Italia y del Mundo, búsqueda instantánea, reproducción íntegra por RSS con saltos <code>-15s / +30s</code> y Favoritos.<br>&bull; <strong>Archivos de Audio Locales</strong>: reproducción inmediata de <code>FLAC, WAV, AIFF, ALAC y MP3</code> desde tu dispositivo, iCloud/Archivos o unidades USB/Finder.",
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
      "community.t3Reply": "¡Qué alegría leer esto, Davide! La acústica de la sala supone más del 50% del sonido Hi-Fi: tener sonómetro SPL, generador de barrido y corrección paramétrica dentro del reproductor sirve justo para domar las resonancias."
    },

    pt: {
      "meta.index.title": "MuStreamer 1.0.1 - Streaming Audiófilo Bit-Perfect, Rádio ao Vivo e Podcasts para Mac e iPhone",
      "meta.index.desc": "O MuStreamer 1.0.1 dá nova vida ao seu sistema Hi-Fi: streaming Bit-Perfect 24-bit/192 kHz, Qobuz, TIDAL, 50.000+ Rádios ao Vivo (incluindo FLAC), Podcasts, Ficheiros Locais Hi-Res e ferramentas de precisão.",
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

      "hero.badge": "Nova v1.0.1 • Hi-Res Bit-Perfect, Rádio ao Vivo &amp; Podcasts",
      "hero.title": "Nova vida para o seu sistema Hi-Fi.<br><span class=\"text-gradient\">Zero compromissos sonoros.</span>",
      "hero.lead": "O MuStreamer é o leitor audiófilo definitivo para Mac e iPhone. Combina a pureza <strong>Bit-Perfect 24-bit/192 kHz</strong> do <strong>Qobuz</strong>, <strong>TIDAL</strong> e <strong>Ficheiros de Áudio Locais</strong> com <strong>50.000+ Rádios ao Vivo (incl. FLAC)</strong> e <strong>Podcasts universais</strong>, com descodificação local inteligente para o seu streamer UPnP.",
      "hero.macCaption": "Grátis para Mac",
      "hero.macStore": "Descarregar (.dmg)",
      "hero.iosCaption": "Descarregar na",
      "hero.discoverBtn": "Explorar Funções",
      "hero.subtitle": "Disponível para macOS 14+ e iOS 17+. Compatível com normas UPnP / DLNA.",
      "hero.macTip": "Mac: abra o ficheiro <code>.dmg</code> e arraste o <strong>MuStreamer</strong> para Aplicações. Na primeira execução, se necessário, abra <em>Definições do Sistema &rarr; Privacidade e Segurança &rarr; Abrir mesmo assim</em>.",
      "hero.comingSoon": "Em breve para <strong>Windows</strong> e <strong>Android</strong>...",

      "mockup.title": "MuStreamer — Reprodução Hi-Res Bit-Perfect (FLAC 24-bit / 192 kHz)",
      "mockup.nowPlaying": "A reproduzir • Qobuz Studio Master",
      "mockup.decodeLine": "⚡ Descodificação: Local (Mac/iOS Offload) &bull; Saída: Bit-Perfect WAV Lossless",
      "mockup.vumeterTitle": "VU Meter Analógico Estéreo",
      "mockup.newLabel": "Novidades v1.0.1",
      "mockup.newRadio": "50.000+ Rádios ao Vivo &amp; FLAC",
      "mockup.newPodcast": "Podcasts &amp; Episódios do Dia",
      "mockup.newLocal": "📁 Ficheiros Locais Hi-Res",
      "mockup.newEngine": "⚙️ Motor WAV / FLAC 192 kHz",

      "features.badge": "Engenharia Acústica • v1.0.1",
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
      "specs.r5Soon": "⏳ Em breve disponível também para <strong>Windows</strong> e <strong>Android</strong>",
      "specs.r6Label": "Idiomas &amp; Versão",
      "specs.r6Val": "<strong>8 idiomas</strong> (IT, EN, FR, DE, ES, PT, NL, JA) &bull; Versão atual <strong>1.0.1</strong>",

      "footer.home": "Início",
      "footer.privacy": "Política de Privacidade",
      "footer.support": "Suporte & Contactos",
      "footer.copy": "&copy; 2026 MuStreamer. Todos os direitos reservados.",
      "footer.disclaimer": "<em>Nota Legal & Marcas:</em> Naim, Mu-so, Qobuz e TIDAL são marcas registadas dos respetivos proprietários, citadas apenas para fins descritivos e de compatibilidade.",

      "privacy.badge": "Documento Oficial",
      "privacy.title": "Política de Privacidade",
      "privacy.updated": "Última atualização: 19 de Novembro de 2026",
      "privacy.s1Title": "1. A nossa filosofia de Privacidade",
      "privacy.s1Text": "<strong>O MuStreamer NÃO recolhe, NÃO guarda em servidores remotos e NÃO vende quaisquer dados pessoais ou estatísticas de audição a terceiros</strong>.",
      "privacy.s2Title": "2. Credenciais (Qobuz & TIDAL)",
      "privacy.s2Intro": "Ao iniciar sessão na app:",
      "privacy.s2Li1": "Tokens trocados <strong>diretamente por ligação cifrada (HTTPS / TLS 1.3)</strong> com os servidores oficiais.",
      "privacy.s2Li2": "Credenciais armazenadas <strong>apenas no seu dispositivo</strong> no Porta-chaves Apple (AES-GCM).",
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
      "support.q1Text": "Ligue o Mac/iPhone à <strong>mesma rede Wi-Fi ou Ethernet</strong>. O MuStreamer descobre o equipamento automaticamente por UPnP.",
      "support.q2Title": "2. Como funciona a descodificação local vs. DAC interno?",
      "support.q2Text": "A partir do novo painel estúdio <em>Motor de Áudio Hi-Res</em> (acessível também no leitor) ou das Definições, pode configurar o modo de saída e os parâmetros de streaming:<br>&bull; <strong>WAV Bit-Perfect (Descodificação Local)</strong>: O Mac ou iPhone descodifica localmente os fluxos FLAC/Hi-Res (incluindo ficheiros locais) e envia um fluxo PCM/WAV linear sem compressão para o seu sistema. Ideal para streamers com CPU menos potente.<br>&bull; <strong>FLAC Nativo (Streamer)</strong>: Envia o fluxo intacto para descodificação interna pelo streamer, com limite de frequência (44.1–192 kHz), Pré-buffering RAM Zero-Jitter e padding 24-bit.",
      "support.q3Title": "3. O modo Bit-Perfect é sempre garantido?",
      "support.q3Text": "Sim, sem reamostragens indesejadas até 24-bit / 192 kHz.",
      "support.q4Title": "4. Que subscrições são necessárias?",
      "support.q4Text": "Pode iniciar sessão com a sua subscrição habitual do Qobuz (Studio/Sublime) ou TIDAL (HiFi/Max). Já as <strong>50.000+ Rádios ao Vivo</strong>, os <strong>Podcasts</strong>, a reprodução de <strong>Ficheiros de Áudio Locais</strong> e o <em>Catálogo Demo Offline</em> funcionam <strong>gratuitamente e sem qualquer subscrição</strong>.",
      "support.q5NewTitle": "5. Como funcionam Rádio ao Vivo, Podcasts e Ficheiros Locais (novidade 1.0.1)?",
      "support.q5NewText": "A partir da versão 1.0.1, o MuStreamer inclui três novas fontes nativas para iPhone, Mac, AirPlay e streamers UPnP/DLNA:<br>&bull; <strong>Rádio ao Vivo</strong>: mais de 50.000 estações de 224 países (incluindo streams FLAC lossless), 6 Presets rápidos P1–P6, URLs personalizados e cópia/importação <code>.M3U</code>.<br>&bull; <strong>Podcasts</strong>: tops de Itália e do Mundo, pesquisa instantânea, streaming integral via RSS com saltos <code>-15s / +30s</code> e Favoritos.<br>&bull; <strong>Ficheiros de Áudio Locais</strong>: reprodução imediata de <code>FLAC, WAV, AIFF, ALAC e MP3</code> do dispositivo, iCloud/Ficheiros ou unidades USB/Finder.",
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
      "community.t3Reply": "Que alegria ler isto, Davide! A acústica da sala faz mais de 50% do som de um sistema Hi-Fi: ter medidor SPL, gerador de sweep e correção paramétrica no leitor serve exatamente para domar as ressonâncias."
    },

    nl: {
      "meta.index.title": "MuStreamer 1.0.1 - Bit-Perfect Audiofiele Streaming, Live Radio & Podcasts voor Mac en iPhone",
      "meta.index.desc": "MuStreamer 1.0.1 geeft je Hi-Fi-systeem een nieuw leven: 24-bit/192 kHz Bit-Perfect streaming, Qobuz, TIDAL, 50.000+ Live Radiozenders (ook FLAC), Podcasts, Lokale Hi-Res Bestanden en precisie-instrumenten.",
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

      "hero.badge": "Nieuw v1.0.1 • Hi-Res Bit-Perfect, Live Radio &amp; Podcasts",
      "hero.title": "Nieuw leven voor uw Hi-Fi-systeem.<br><span class=\"text-gradient\">Geen enkel geluidscompromis.</span>",
      "hero.lead": "MuStreamer is de ultieme audiofiele speler voor Mac en iPhone. Hij combineert <strong>24-bit/192 kHz Bit-Perfect</strong> weergave voor <strong>Qobuz</strong>, <strong>TIDAL</strong> en <strong>Lokale Audiobestanden</strong> met <strong>50.000+ Live Radiozenders (incl. FLAC)</strong> en <strong>universele Podcasts</strong>, met slimme lokale decodering voor je UPnP-streamer.",
      "hero.macCaption": "Gratis voor Mac",
      "hero.macStore": "Download (.dmg)",
      "hero.iosCaption": "Download in de",
      "hero.discoverBtn": "Ontdek Functies",
      "hero.subtitle": "Beschikbaar voor macOS 14+ en iOS 17+. Compatibel met UPnP / DLNA-standaarden.",
      "hero.macTip": "Mac: open het <code>.dmg</code>-bestand en sleep <strong>MuStreamer</strong> naar Programma's. Bij eerste start indien nodig: <em>Systeeminstellingen &rarr; Privacy en beveiliging &rarr; Open toch</em>.",
      "hero.comingSoon": "Binnenkort ook voor <strong>Windows</strong> en <strong>Android</strong>...",

      "mockup.title": "MuStreamer — Hi-Res Bit-Perfect Weergave (FLAC 24-bit / 192 kHz)",
      "mockup.nowPlaying": "Speelt nu • Qobuz Studio Master",
      "mockup.decodeLine": "⚡ Decodering: Lokaal (Mac/iOS Offload) &bull; Uitgang: Bit-Perfect WAV Lossless",
      "mockup.vumeterTitle": "Analoge Stereo VU-Meter",
      "mockup.newLabel": "Nieuw in v1.0.1",
      "mockup.newRadio": "50.000+ Live Radio &amp; FLAC",
      "mockup.newPodcast": "Podcasts &amp; Afleveringen",
      "mockup.newLocal": "📁 Lokale Hi-Res Bestanden",
      "mockup.newEngine": "⚙️ WAV / FLAC 192 kHz Engine",

      "features.badge": "Akoestische Engineering • v1.0.1",
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
      "specs.r5Soon": "⏳ Binnenkort ook beschikbaar voor <strong>Windows</strong> en <strong>Android</strong>",
      "specs.r6Label": "Talen &amp; Versie",
      "specs.r6Val": "<strong>8 talen</strong> (IT, EN, FR, DE, ES, PT, NL, JA) &bull; Huidige versie <strong>1.0.1</strong>",

      "footer.home": "Home",
      "footer.privacy": "Privacybeleid",
      "footer.support": "Support & Contact",
      "footer.copy": "&copy; 2026 MuStreamer. Alle rechten voorbehouden.",
      "footer.disclaimer": "<em>Juridische kennisgeving & Handelsmerken:</em> Naim, Mu-so, Qobuz en TIDAL zijn gedeponeerde handelsmerken van hun respectievelijke eigenaars en worden uitsluitend genoemd ter beschrijving en compatibiliteit.",

      "privacy.badge": "Officieel Document",
      "privacy.title": "Privacybeleid",
      "privacy.updated": "Laatst bijgewerkt: 19 November 2026",
      "privacy.s1Title": "1. Onze Privacyfilosofie",
      "privacy.s1Text": "<strong>MuStreamer verzamelt GEEN persoonlijke gegevens, slaat NIETS op externe servers op en verkoopt NIETS aan derden</strong>.",
      "privacy.s2Title": "2. Inloggegevens (Qobuz & TIDAL)",
      "privacy.s2Intro": "Wanneer u inlogt:",
      "privacy.s2Li1": "Tokens worden <strong>rechtstreeks en versleuteld (HTTPS / TLS 1.3)</strong> uitgewisseld met officiële servers.",
      "privacy.s2Li2": "Gegevens worden <strong>uitsluitend lokaal</strong> bewaard in Apple Keychain (AES-GCM).",
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
      "support.q1Text": "Zorg dat uw Mac of iPhone op <strong>hetzelfde wifi- of ethernetnetwerk</strong> zit. MuStreamer vindt uw apparaat automatisch via SSDP/UPnP.",
      "support.q2Title": "2. Hoe werkt lokale decodering vs. interne DAC?",
      "support.q2Text": "In het nieuwe studiopaneel <em>Hi-Res Audio Engine</em> (ook direct vanuit de speler bereikbaar) of via Instellingen kies je de uitvoermodus en streamingparameters:<br>&bull; <strong>WAV Bit-Perfect (Lokale Decodering)</strong>: Je Mac of iPhone decodeert FLAC/Hi-Res lokaal (ook lokale bestanden) en stuurt een ongecomprimeerde lineaire PCM/WAV-stream naar je stereo — ideaal voor streamers met een tragere CPU.<br>&bull; <strong>Native FLAC (Streamer)</strong>: Stuurt de ruwe stream door voor interne decodering, met maximale sample rate (44.1–192 kHz), Zero-Jitter RAM Pre-buffering en 24-bit padding.",
      "support.q3Title": "3. Is Bit-Perfect altijd gegarandeerd?",
      "support.q3Text": "Ja, zonder ongewenste resampling tot 24-bit / 192 kHz.",
      "support.q4Title": "4. Welke abonnementen heb ik nodig?",
      "support.q4Text": "Je kunt inloggen met je normale Qobuz- (Studio/Sublime) of TIDAL-abonnement (HiFi/Max). De <strong>50.000+ Live Radiozenders</strong>, <strong>Podcasts</strong>, het afspelen van <strong>Lokale Audiobestanden</strong> en de <em>Offline Demo-catalogus</em> werken daarentegen <strong>gratis en zonder abonnement</strong>.",
      "support.q5NewTitle": "5. Hoe werken Live Radio, Podcasts en Lokale Audiobestanden (nieuw in 1.0.1)?",
      "support.q5NewText": "Vanaf versie 1.0.1 biedt MuStreamer drie nieuwe ingebouwde bronnen voor iPhone, Mac, AirPlay en UPnP/DLNA-streamers:<br>&bull; <strong>Live Radio</strong>: meer dan 50.000 zenders uit 224 landen (inclusief lossless FLAC-streams), 6 snelle P1–P6 Presets, eigen URL's en <code>.M3U</code>-back-up/import.<br>&bull; <strong>Podcasts</strong>: hitlijsten voor Italië en Wereldwijd, direct zoeken, volledige RSS-afleveringen met <code>-15s / +30s</code> sprongen en Favorieten.<br>&bull; <strong>Lokale Audiobestanden</strong>: direct afspelen van <code>FLAC, WAV, AIFF, ALAC en MP3</code> vanaf je apparaat, iCloud/Bestanden of USB/Finder-schijven.",
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
      "community.t3Reply": "Wat geweldig om te lezen Davide! Ruimte-akoestiek bepaalt meer dan 50% van de klank: een SPL-meter, sweep-generator en parametrische EQ direct in de speler helpen precies om kamerresonanties te temmen."
    },

    ja: {
      "meta.index.title": "MuStreamer 1.0.1 - Mac・iPhone向け Bit-Perfect ハイレゾ配信・ライブラジオ＆ポッドキャスト",
      "meta.index.desc": "MuStreamer 1.0.1がHi-Fiシステムに新たな命を吹き込みます。24-bit/192 kHz Bit-Perfect再生、Qobuz・TIDAL、世界50,000+ライブラジオ（FLAC対応）、ポッドキャスト、ローカルHi-Resファイル再生、精密計測ツールを搭載。",
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

      "hero.badge": "新バージョン v1.0.1 • Bit-Perfectハイレゾ、ライブラジオ＆ポッドキャスト",
      "hero.title": "Hi-Fiシステムに、新たな息吹を。<br><span class=\"text-gradient\">音質への妥協はゼロ。</span>",
      "hero.lead": "MuStreamerはMac・iPhone向けの究極のオーディオファイル・プレーヤーです。<strong>Qobuz</strong>、<strong>TIDAL</strong>、<strong>ローカル音声ファイル</strong>の<strong>24-bit/192 kHz Bit-Perfect</strong>再生に、<strong>世界50,000+ライブラジオ（FLAC対応）</strong>と<strong>ポッドキャスト</strong>を統合し、UPnPストリーマー向けにスマートなローカルデコードを提供します。",
      "hero.macCaption": "Mac版 無料",
      "hero.macStore": "ダウンロード (.dmg)",
      "hero.iosCaption": "ダウンロード：",
      "hero.discoverBtn": "機能を見る",
      "hero.subtitle": "macOS 14以降（Sonoma/Sequoia）および iOS 17以降に対応。標準UPnP / DLNAプロトコル準拠。",
      "hero.macTip": "Mac: <code>.dmg</code>を開いて<strong>MuStreamer</strong>をアプリケーションにドラッグしてください。初回起動時に警告が出た場合は<em>システム設定 &rarr; プライバシーとセキュリティ &rarr; このまま開く</em>を選択してください。",
      "hero.comingSoon": "<strong>Windows</strong>版・<strong>Android</strong>版も近日公開予定...",

      "mockup.title": "MuStreamer — Hi-Res Bit-Perfect 再生中 (FLAC 24-bit / 192 kHz)",
      "mockup.nowPlaying": "再生中 • Qobuz Studio Master",
      "mockup.decodeLine": "⚡ デコード: ローカル (Mac/iOS オフロード) &bull; 出力: Bit-Perfect WAV ロスレス",
      "mockup.vumeterTitle": "ステレオ アナログ VUメーター",
      "mockup.newLabel": "v1.0.1 新機能",
      "mockup.newRadio": "50,000+ ライブラジオ &amp; FLAC",
      "mockup.newPodcast": "ポッドキャスト &amp; 最新エピソード",
      "mockup.newLocal": "📁 ローカル Hi-Res ファイル",
      "mockup.newEngine": "⚙️ WAV / FLAC 192 kHz エンジン",

      "features.badge": "音響エンジニアリング • v1.0.1",
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
      "specs.r5Soon": "⏳ <strong>Windows</strong>・<strong>Android</strong>版も近日公開予定",
      "specs.r6Label": "対応言語 &amp; バージョン",
      "specs.r6Val": "<strong>8言語対応</strong> (IT, EN, FR, DE, ES, PT, NL, JA) &bull; 最新バージョン <strong>1.0.1</strong>",

      "footer.home": "ホーム",
      "footer.privacy": "プライバシーポリシー",
      "footer.support": "サポート & お問い合わせ",
      "footer.copy": "&copy; 2026 MuStreamer. All rights reserved.",
      "footer.disclaimer": "<em>法的通知・商標について：</em> Naim、Mu-so、Qobuz、およびTIDALは各社の登録商標であり、互換性および説明の目的でのみ記載されています。MuStreamerはHi-Fiコミュニティのために開発された独立系アプリケーションです。",

      "privacy.badge": "公式ドキュメント",
      "privacy.title": "プライバシーポリシー",
      "privacy.updated": "最終更新日：2026年11月19日",
      "privacy.s1Title": "1. プライバシーに関する基本方針",
      "privacy.s1Text": "お客様の聴取履歴や個人情報はお客様だけのものです。<strong>MuStreamerは個人データや再生統計を外部サーバーに収集・保存したり、第三者に販売したりすることは一切ありません</strong>。",
      "privacy.s2Title": "2. ストリーミングサービスの認証情報 (Qobuz & TIDAL)",
      "privacy.s2Intro": "アプリ内でログインを行う際：",
      "privacy.s2Li1": "認証トークンは端末とQobuz/TIDAL公式サーバー間で<strong>直接かつ暗号化（HTTPS / TLS 1.3）</strong>して通信されます。",
      "privacy.s2Li2": "認証情報およびトークンはAppleキーチェーン（AES-GCM暗号化）により<strong>端末内にのみ</strong>安全に保管されます。",
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
      "support.q1Text": "MacまたはiPhoneをストリーマーと<strong>同じWi-Fiまたは有線LANネットワーク</strong>に接続するだけです。SSDP/UPnPにより上部のデバイスバーに自動表示されます。",
      "support.q2Title": "2. ローカルデコードと内蔵DACの切り替えはどう機能しますか？",
      "support.q2Text": "新しいスタジオパネル<em>Hi-Resオーディオエンジン</em>（プレーヤー画面からも直接アクセス可能）または設定から、出力方式とストリーミングパラメータを調整できます：<br>&bull; <strong>WAV Bit-Perfect（ローカルデコード）</strong>：MacやiPhone側でFLAC/ハイレゾ（ローカルファイル含む）をデコードし、非圧縮リニアPCM/WAVをオーディオ機器へ送信。CPU性能が控えめなストリーマーに最適です。<br>&bull; <strong>ネイティブFLAC（ストリーマー側）</strong>：無加工ストリームを機器へ送り、最大サンプルレート制限（44.1–192 kHz）、ゼロジッターRAMプリバッファリング、24-bitパディングも設定できます。",
      "support.q3Title": "3. Bit-Perfect 再生は常に保証されますか？",
      "support.q3Text": "はい。不要なソフトウェア・リサンプリングは行わず、24-bit / 96〜192 kHzのデータをビット単位で維持します。",
      "support.q4Title": "4. QobuzやTIDALのどのプランが必要ですか？",
      "support.q4Text": "通常のQobuz（Studio/Sublime）またはTIDAL（HiFi/Max）アカウントでログインできます。なお、<strong>50,000+ライブラジオ</strong>、<strong>ポッドキャスト</strong>、<strong>ローカル音声ファイル再生</strong>、および<em>オフライン高音質デモカタログ</em>は<strong>サブスクリプション不要・無料</strong>でお楽しみいただけます。",
      "support.q5NewTitle": "5. ライブラジオ、ポッドキャスト、ローカル音声ファイルの使い方は？（1.0.1新機能）",
      "support.q5NewText": "バージョン1.0.1より、iPhone・Mac・AirPlay・UPnP/DLNAストリーマーで利用できる3つのネイティブ音源が追加されました：<br>&bull; <strong>ライブラジオ</strong>：224カ国・50,000局以上（ロスレスFLAC局含む）、6つのクイックプリセットP1–P6、カスタムURL、<code>.M3U</code>バックアップ/インポート対応。<br>&bull; <strong>ポッドキャスト</strong>：イタリア＆グローバルチャート、即時検索、RSS経由のフルエピソード再生、<code>-15秒 / +30秒</code>スキップ、お気に入り登録。<br>&bull; <strong>ローカル音声ファイル</strong>：デバイス内、iCloud/ファイル、USB/Finderドライブの<code>FLAC・WAV・AIFF・ALAC・MP3</code>を即座に再生。",
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
      "community.t3Reply": "Davideさん、嬉しいお言葉をありがとうございます！部屋の音響はHi-Fiサウンドの50%以上を左右するため、SPLメーター・スイープ・パラメトリック補正をプレーヤーに統合しました。"
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
  const MOBILE_SECTIONS = ["home", "features", "tools", "story", "specs"];
  const HASH_TO_SECTION = {
    "": "home",
    "#": "home",
    "#home": "home",
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
          activateMobileSection(target, { scroll: true, updateHash: true });
        }
        closeMobileMenu();
      });
    });
  }

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
    syncMobileNavLabels();
  }
})();
