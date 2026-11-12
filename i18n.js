/* ==============================================================================
   MuStreamer - Multilingua i18n (IT / EN / FR / DE / ES / PT / NL / JA)
   Preserva automaticamente i testi originali italiani presenti nell'HTML.
   ============================================================================== */

(function () {
  "use strict";

  const STORAGE_KEY = "mustreamer_lang";

  const LANG_META = {
    it: { flag: "🇮🇹", code: "IT", name: "Italiano", aria: "Cambia lingua", menuAria: "Seleziona lingua" },
    en: { flag: "🇬🇧", code: "EN", name: "English", aria: "Change language", menuAria: "Select language" },
    fr: { flag: "🇫🇷", code: "FR", name: "Français", aria: "Changer de langue", menuAria: "Choisir la langue" },
    de: { flag: "🇩🇪", code: "DE", name: "Deutsch", aria: "Sprache ändern", menuAria: "Sprache auswählen" },
    es: { flag: "🇪🇸", code: "ES", name: "Español", aria: "Cambiar idioma", menuAria: "Seleccionar idioma" },
    pt: { flag: "🇵🇹", code: "PT", name: "Português", aria: "Mudar idioma", menuAria: "Selecionar idioma" },
    nl: { flag: "🇳🇱", code: "NL", name: "Nederlands", aria: "Taal wijzigen", menuAria: "Taal selecteren" },
    ja: { flag: "🇯🇵", code: "JA", name: "日本語", aria: "言語を変更", menuAria: "言語を選択" }
  };

  const TRANSLATIONS = {
    en: {
      "meta.index.title": "MuStreamer - Bit-Perfect Audiophile Streaming for Mac and iPhone",
      "meta.index.desc": "MuStreamer breathes new life into your Hi-Fi system: Bit-Perfect streaming up to 24-bit/192 kHz, Qobuz and TIDAL integration, local offload decoding, and precision tools (VU Meter, RTA, SPL Meter).",
      "meta.privacy.title": "Privacy Policy — MuStreamer",
      "meta.privacy.desc": "MuStreamer Privacy Policy: total respect for your data, zero profiling, credentials safely stored locally on Mac and iPhone.",
      "meta.support.title": "Support & FAQ — MuStreamer",
      "meta.support.desc": "MuStreamer Support Center: frequently asked questions, UPnP connection guide, feedback and contact details.",

      "nav.features": "Features",
      "nav.tools": "Hi-Fi Tools",
      "nav.story": "Our Story",
      "nav.specs": "Specs",
      "nav.support": "Support",
      "nav.privacy": "Privacy Policy",
      "nav.cta": "Download App",
      "nav.backToApp": "Back to App",

      "hero.badge": "Bit-Perfect Hi-Res Streaming • 24-bit / 192 kHz",
      "hero.title": "New life for your Hi-Fi system.<br><span class=\"text-gradient\">Zero sonic compromises.</span>",
      "hero.lead": "MuStreamer is the ultimate audiophile player for Mac and iPhone. It combines pure <strong>Bit-Perfect</strong> playback with native <strong>Qobuz</strong> and <strong>TIDAL</strong> integration, offloading heavy decoding from your UPnP streamer with smart local processing.",
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

      "features.badge": "Acoustic Engineering",
      "features.title": "Built by Audiophiles, for Audiophiles",
      "features.subtitle": "Every technology you need to overcome legacy protocol limits and enjoy every musical nuance.",
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
      "specs.r3Label": "Streaming Services",
      "specs.r4Label": "Output Protocol",
      "specs.r4Val": "UPnP AV / DLNA MediaRenderer 1.0/2.0 with linear Bit-Perfect transcoding",
      "specs.r5Label": "Platforms",
      "specs.r5Soon": "⏳ Coming soon for <strong>Windows</strong> and <strong>Android</strong> too",

      "footer.home": "Home",
      "footer.privacy": "Privacy Policy",
      "footer.support": "Support & Contact",
      "footer.copy": "&copy; 2026 MuStreamer. All rights reserved.",
      "footer.disclaimer": "<em>Legal & Trademarks Notice:</em> Naim, Mu-so, Qobuz, and TIDAL are registered trademarks of their respective owners and are mentioned here solely for descriptive and hardware/software compatibility purposes. MuStreamer is an independent application crafted by enthusiasts for the Hi-Fi community.",

      "privacy.badge": "Official Document",
      "privacy.title": "Privacy Policy",
      "privacy.updated": "Last updated: November 12, 2026",
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
      "privacy.s5Title": "5. Zero Tracking & No Third-Party Cookies",
      "privacy.s5Text": "The application contains no advertising trackers, profiling libraries, Google Analytics, or third-party frameworks that collect behavioral metrics.",
      "privacy.s6Title": "6. Privacy Contact",
      "privacy.s6Text": "For any questions, clarifications, or requests regarding this policy, you can contact the development team directly at: <a href=\"mailto:support@mustreamer.com\" style=\"color: var(--accent-light); font-weight: 600;\">support@mustreamer.com</a> or visit our <a href=\"support.html\" style=\"color: var(--accent-light); text-decoration: underline;\">support page</a>.",

      "support.badge": "Help & Community",
      "support.title": "Support & Frequently Asked Questions",
      "support.subtitle": "Need help with setup or want to share a suggestion? Find answers to common questions and our contact channels below.",
      "support.q1Title": "1. How do I connect my network streamer or Naim Mu-so to MuStreamer?",
      "support.q1Text": "Simply make sure your Mac or iPhone is connected to the <strong>same Wi-Fi or Ethernet network</strong> as your streamer. Upon opening the app, MuStreamer automatically scans your network via SSDP/UPnP and displays your device in the top selector bar (e.g., <em>Naim Mu-so</em> or any DLNA MediaRenderer). Just tap it to connect.",
      "support.q2Title": "2. How does choosing between device decoding and internal DAC decoding work?",
      "support.q2Text": "In Settings or right from the playback bar, you can toggle <em>Local Decoding (Offload)</em>:<br>&bull; <strong>Local Decoding</strong>: Your Mac or iPhone handles FLAC/Hi-Res decoding and streams uncompressed linear Bit-Perfect WAV to your stereo—ideal for streamers with slower CPUs that would otherwise stutter.<br>&bull; <strong>Internal DAC</strong>: Sends the untouched source stream so the streamer itself decodes it internally.",
      "support.q3Title": "3. Is Bit-Perfect mode always guaranteed?",
      "support.q3Text": "Yes. MuStreamer never applies unrequested software resampling. If a track is mastered at 24-bit / 96 kHz or 24-bit / 192 kHz, the digital audio data is preserved bit for bit all the way to your audio system.",
      "support.q4Title": "4. Which subscriptions are required for Qobuz or TIDAL?",
      "support.q4Text": "You can sign in with your regular Qobuz (Studio/Sublime) or TIDAL (HiFi/Max) subscription. MuStreamer also includes an <em>Offline High-Resolution Demo Catalog</em> so you can test your Hi-Fi system before signing in.",
      "support.q5Title": "5. How can I send a suggestion or report an issue?",
      "support.q5Text": "Every piece of feedback from the audiophile community matters! You can send suggestions or bug reports anytime:<br>&bull; Through the <strong>Send Feedback</strong> section in the app's Settings panel.<br>&bull; By emailing us at: <a href=\"mailto:support@mustreamer.com\" style=\"color: var(--accent-light); font-weight: 600;\">support@mustreamer.com</a>.",
      "support.bannerTitle": "Have more questions or want to talk to us?",
      "support.bannerText": "We promptly reply to every high-fidelity enthusiast.",
      "support.bannerBtn": "Contact Us via Email"
    },

    fr: {
      "meta.index.title": "MuStreamer - Le Streaming Audiophile Bit-Perfect pour Mac et iPhone",
      "meta.index.desc": "MuStreamer redonne vie à votre système Hi-Fi : streaming Bit-Perfect jusqu'à 24-bit/192 kHz, intégration Qobuz et TIDAL, décodage local déporté et outils de précision.",
      "meta.privacy.title": "Politique de Confidentialité — MuStreamer",
      "meta.privacy.desc": "Politique de confidentialité de MuStreamer : respect total des données, aucun pistage, identifiants stockés localement sur Mac et iPhone.",
      "meta.support.title": "Support & FAQ — MuStreamer",
      "meta.support.desc": "Centre d'aide MuStreamer : questions fréquentes, guide de connexion UPnP, commentaires et contacts.",

      "nav.features": "Fonctionnalités",
      "nav.tools": "Outils Hi-Fi",
      "nav.story": "Notre Histoire",
      "nav.specs": "Spécifications",
      "nav.support": "Support",
      "nav.privacy": "Confidentialité",
      "nav.cta": "Télécharger l'App",
      "nav.backToApp": "Retour à l'App",

      "hero.badge": "Streaming Hi-Res Bit-Perfect • 24-bit / 192 kHz",
      "hero.title": "Une nouvelle vie pour votre Hi-Fi.<br><span class=\"text-gradient\">Zéro compromis sonore.</span>",
      "hero.lead": "MuStreamer est le lecteur audiophile ultime pour Mac et iPhone. Il allie la pureté absolue du flux <strong>Bit-Perfect</strong> à l'intégration native de <strong>Qobuz</strong> et <strong>TIDAL</strong>, tout en soulageant votre lecteur UPnP grâce au décodage local intelligent.",
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

      "features.badge": "Ingénierie Acoustique",
      "features.title": "Conçu par et pour des Audiophiles",
      "features.subtitle": "Toutes les technologies pour dépasser les limites des anciens protocoles et savourer chaque nuance sonore.",
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
      "specs.r3Label": "Services de Streaming",
      "specs.r4Label": "Protocole de Sortie",
      "specs.r4Val": "UPnP AV / DLNA MediaRenderer 1.0/2.0 avec transcodage Bit-Perfect linéaire",
      "specs.r5Label": "Plateformes",
      "specs.r5Soon": "⏳ Bientôt disponible également sur <strong>Windows</strong> et <strong>Android</strong>",

      "footer.home": "Accueil",
      "footer.privacy": "Confidentialité",
      "footer.support": "Support & Contacts",
      "footer.copy": "&copy; 2026 MuStreamer. Tous droits réservés.",
      "footer.disclaimer": "<em>Mentions Légales & Marques :</em> Naim, Mu-so, Qobuz et TIDAL sont des marques déposées de leurs propriétaires respectifs, citées uniquement à titre descriptif et de compatibilité. MuStreamer est une application indépendante créée par des passionnés pour la communauté Hi-Fi.",

      "privacy.badge": "Document Officiel",
      "privacy.title": "Politique de Confidentialité",
      "privacy.updated": "Dernière mise à jour : 12 Novembre 2026",
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
      "privacy.s5Title": "5. Aucun Traceur ni Cookie Tiers",
      "privacy.s5Text": "L'application ne contient aucun traceur publicitaire, outil de profilage ni bibliothèque tierce d'analyse comportementale.",
      "privacy.s6Title": "6. Contact Confidentialité",
      "privacy.s6Text": "Pour toute question concernant cette politique, écrivez-nous à : <a href=\"mailto:support@mustreamer.com\" style=\"color: var(--accent-light); font-weight: 600;\">support@mustreamer.com</a> ou consultez notre <a href=\"support.html\" style=\"color: var(--accent-light); text-decoration: underline;\">page d'assistance</a>.",

      "support.badge": "Assistance & Communauté",
      "support.title": "Support & Foire Aux Questions",
      "support.subtitle": "Besoin d'aide pour configurer l'application ou une suggestion à partager ? Retrouvez ici les réponses aux questions courantes.",
      "support.q1Title": "1. Comment connecter mon lecteur réseau ou Naim Mu-so à MuStreamer ?",
      "support.q1Text": "Assurez-vous que votre Mac ou iPhone est connecté au <strong>même réseau Wi-Fi ou Ethernet</strong> que votre lecteur. MuStreamer analyse automatiquement le réseau via SSDP/UPnP et affiche l'appareil dans la barre supérieure (ex. <em>Naim Mu-so</em> ou tout MediaRenderer DLNA).",
      "support.q2Title": "2. Comment fonctionne le choix entre décodage local et DAC interne ?",
      "support.q2Text": "Dans les Réglages ou le lecteur, activez <em>Décodage Local (Offload)</em> :<br>&bull; <strong>Décodage Local</strong> : Le Mac ou l'iPhone décode le FLAC/Hi-Res et envoie un flux WAV linéaire Bit-Perfect pur. Idéal pour les lecteurs au CPU ancien.<br>&bull; <strong>DAC Interne</strong> : Envoie le flux brut afin que le lecteur le décode lui-même.",
      "support.q3Title": "3. Le mode Bit-Perfect est-il toujours garanti ?",
      "support.q3Text": "Oui. MuStreamer n'applique aucun rééchantillonnage logiciel non sollicité. Les morceaux 24-bit / 96 kHz ou 192 kHz restent intacts bit pour bit.",
      "support.q4Title": "4. Quels abonnements faut-il pour Qobuz ou TIDAL ?",
      "support.q4Text": "Votre abonnement Qobuz (Studio/Sublime) ou TIDAL (HiFi/Max) habituel suffit. MuStreamer inclut aussi un <em>Catalogue Démo Hors-Ligne Hi-Res</em> pour tester votre chaîne immédiatement.",
      "support.q5Title": "5. Comment envoyer une suggestion ou signaler un problème ?",
      "support.q5Text": "Vos retours sont précieux !<br>&bull; Via la section <strong>Envoyer un avis</strong> dans les Réglages de l'application.<br>&bull; Par email à : <a href=\"mailto:support@mustreamer.com\" style=\"color: var(--accent-light); font-weight: 600;\">support@mustreamer.com</a>.",
      "support.bannerTitle": "D'autres questions ou envie d'échanger ?",
      "support.bannerText": "Nous répondons rapidement à chaque passionné de haute fidélité.",
      "support.bannerBtn": "Nous contacter par Email"
    },

    de: {
      "meta.index.title": "MuStreamer - Bit-Perfect Audiophile-Streaming für Mac und iPhone",
      "meta.index.desc": "MuStreamer erweckt Ihre Hi-Fi-Anlage zu neuem Leben: Bit-Perfect-Streaming bis 24-Bit/192 kHz, Qobuz- & TIDAL-Integration, lokale Dekodierung und Präzisionswerkzeuge.",
      "meta.privacy.title": "Datenschutzerklärung — MuStreamer",
      "meta.privacy.desc": "Datenschutz bei MuStreamer: Voller Schutz Ihrer Daten, kein Tracking, Anmeldedaten lokal auf Mac & iPhone gespeichert.",
      "meta.support.title": "Support & FAQ — MuStreamer",
      "meta.support.desc": "MuStreamer Hilfe-Center: Häufige Fragen, UPnP-Einrichtung, Feedback und Kontakt.",

      "nav.features": "Funktionen",
      "nav.tools": "Hi-Fi-Tools",
      "nav.story": "Unsere Story",
      "nav.specs": "Spezifikationen",
      "nav.support": "Support",
      "nav.privacy": "Datenschutz",
      "nav.cta": "App laden",
      "nav.backToApp": "Zurück zur App",

      "hero.badge": "Hi-Res Bit-Perfect Streaming • 24-Bit / 192 kHz",
      "hero.title": "Neues Leben für Ihre Hi-Fi-Anlage.<br><span class=\"text-gradient\">Null klangliche Kompromisse.</span>",
      "hero.lead": "MuStreamer ist der ultimative Audiophile-Player für Mac und iPhone. Er verbindet reinstes <strong>Bit-Perfect</strong>-Streaming mit nativer <strong>Qobuz</strong>- und <strong>TIDAL</strong>-Integration und entlastet Ihren UPnP-Streamer durch intelligente lokale Dekodierung.",
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

      "features.badge": "Akustik-Engineering",
      "features.title": "Von Audiophilen für Audiophile entwickelt",
      "features.subtitle": "Alle Technologien, um Grenzen älterer Protokolle zu überwinden und jede musikalische Nuance zu genießen.",
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
      "specs.r3Label": "Streaming-Dienste",
      "specs.r4Label": "Ausgabeprotokoll",
      "specs.r4Val": "UPnP AV / DLNA MediaRenderer 1.0/2.0 mit linearer Bit-Perfect-Transcodierung",
      "specs.r5Label": "Plattformen",
      "specs.r5Soon": "⏳ Bald auch für <strong>Windows</strong> und <strong>Android</strong> verfügbar",

      "footer.home": "Startseite",
      "footer.privacy": "Datenschutz",
      "footer.support": "Support & Kontakt",
      "footer.copy": "&copy; 2026 MuStreamer. Alle Rechte vorbehalten.",
      "footer.disclaimer": "<em>Rechtlicher Hinweis & Marken:</em> Naim, Mu-so, Qobuz und TIDAL sind eingetragene Marken ihrer jeweiligen Eigentümer und dienen ausschließlich der Beschreibung der Kompatibilität. MuStreamer ist eine unabhängige App von Enthusiasten für die Hi-Fi-Community.",

      "privacy.badge": "Offizielles Dokument",
      "privacy.title": "Datenschutzerklärung",
      "privacy.updated": "Letzte Aktualisierung: 12. November 2026",
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
      "privacy.s5Title": "5. Kein Tracking oder Drittanbieter-Cookies",
      "privacy.s5Text": "Die App enthält weder Werbe-Tracker noch Google Analytics oder Analyse-Bibliotheken Dritter.",
      "privacy.s6Title": "6. Datenschutz-Kontakt",
      "privacy.s6Text": "Bei Fragen erreichen Sie uns unter: <a href=\"mailto:support@mustreamer.com\" style=\"color: var(--accent-light); font-weight: 600;\">support@mustreamer.com</a> oder über unsere <a href=\"support.html\" style=\"color: var(--accent-light); text-decoration: underline;\">Support-Seite</a>.",

      "support.badge": "Hilfe & Community",
      "support.title": "Support & Häufige Fragen",
      "support.subtitle": "Benötigen Sie Hilfe bei der Einrichtung? Hier finden Sie Antworten und Kontaktmöglichkeiten.",
      "support.q1Title": "1. Wie verbinde ich meinen Streamer oder Naim Mu-so mit MuStreamer?",
      "support.q1Text": "Verbinden Sie Mac oder iPhone mit demselben <strong>WLAN oder Ethernet-Netzwerk</strong>. MuStreamer erkennt Geräte über SSDP/UPnP automatisch.",
      "support.q2Title": "2. Wie funktioniert die Wahl zwischen lokaler Dekodierung und internem DAC?",
      "support.q2Text": "Aktivieren Sie <em>Lokale Dekodierung (Offload)</em> in den Einstellungen:<br>&bull; <strong>Lokal</strong>: Mac oder iPhone dekodiert FLAC/Hi-Res zu unkomprimiertem Bit-Perfect WAV.<br>&bull; <strong>Interner DAC</strong>: Sendet den Rohdatenstrom direkt an den Streamer.",
      "support.q3Title": "3. Ist Bit-Perfect immer garantiert?",
      "support.q3Text": "Ja. MuStreamer führt kein unerwünschtes Resampling durch; 24-Bit / 96–192 kHz bleiben bitgenau erhalten.",
      "support.q4Title": "4. Welche Abos werden für Qobuz oder TIDAL benötigt?",
      "support.q4Text": "Ein reguläres Qobuz- (Studio/Sublime) oder TIDAL-Abo (HiFi/Max). Zudem steht ein Offline-Hi-Res-Demo-Katalog bereit.",
      "support.q5Title": "5. Wie kann ich Feedback senden?",
      "support.q5Text": "Über <strong>Feedback senden</strong> in den App-Einstellungen oder per E-Mail an <a href=\"mailto:support@mustreamer.com\" style=\"color: var(--accent-light); font-weight: 600;\">support@mustreamer.com</a>.",
      "support.bannerTitle": "Noch Fragen?",
      "support.bannerText": "Wir antworten jedem Hi-Fi-Enthusiasten schnell und persönlich.",
      "support.bannerBtn": "Per E-Mail kontaktieren"
    },

    es: {
      "meta.index.title": "MuStreamer - Streaming Audiófilo Bit-Perfect para Mac y iPhone",
      "meta.index.desc": "MuStreamer devuelve la vida a tu equipo Hi-Fi: streaming Bit-Perfect hasta 24-bit/192 kHz, Qobuz y TIDAL nativos, decodificación local inteligente y herramientas de precisión.",
      "meta.privacy.title": "Política de Privacidad — MuStreamer",
      "meta.privacy.desc": "Política de privacidad de MuStreamer: respeto total por tus datos, sin rastreo, credenciales guardadas localmente.",
      "meta.support.title": "Soporte & FAQ — MuStreamer",
      "meta.support.desc": "Centro de ayuda de MuStreamer: preguntas frecuentes, conexión UPnP y contacto.",

      "nav.features": "Características",
      "nav.tools": "Herramientas Hi-Fi",
      "nav.story": "Nuestra Historia",
      "nav.specs": "Especificaciones",
      "nav.support": "Soporte",
      "nav.privacy": "Privacidad",
      "nav.cta": "Descargar App",
      "nav.backToApp": "Volver a la App",

      "hero.badge": "Streaming Hi-Res Bit-Perfect • 24-bit / 192 kHz",
      "hero.title": "Nueva vida para tu equipo Hi-Fi.<br><span class=\"text-gradient\">Cero compromisos sonoros.</span>",
      "hero.lead": "MuStreamer es el reproductor audiófilo definitivo para Mac y iPhone. Combina la pureza del flujo <strong>Bit-Perfect</strong> con <strong>Qobuz</strong> y <strong>TIDAL</strong> integrados, aligerando la carga de tu streamer UPnP con decodificación local inteligente.",
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

      "features.badge": "Ingeniería Acústica",
      "features.title": "Diseñado por y para Audiófilos",
      "features.subtitle": "Todas las tecnologías para superar los límites de los viejos protocolos y disfrutar cada matiz musical.",
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
      "specs.r3Label": "Servicios de Streaming",
      "specs.r4Label": "Protocolo de Salida",
      "specs.r4Val": "UPnP AV / DLNA MediaRenderer 1.0/2.0 con transcodificación Bit-Perfect lineal",
      "specs.r5Label": "Plataformas",
      "specs.r5Soon": "⏳ Pronto disponible también para <strong>Windows</strong> y <strong>Android</strong>",

      "footer.home": "Inicio",
      "footer.privacy": "Política de Privacidad",
      "footer.support": "Soporte y Contacto",
      "footer.copy": "&copy; 2026 MuStreamer. Todos los derechos reservados.",
      "footer.disclaimer": "<em>Nota Legal y Marcas:</em> Naim, Mu-so, Qobuz y TIDAL son marcas registradas de sus respectivos propietarios, citadas únicamente con fines descriptivos y de compatibilidad.",

      "privacy.badge": "Documento Oficial",
      "privacy.title": "Política de Privacidad",
      "privacy.updated": "Última actualización: 12 de noviembre de 2026",
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
      "privacy.s5Title": "5. Sin Rastreo ni Cookies",
      "privacy.s5Text": "La app no incluye rastreadores publicitarios ni bibliotecas de análisis de terceros.",
      "privacy.s6Title": "6. Contacto",
      "privacy.s6Text": "Escríbenos a <a href=\"mailto:support@mustreamer.com\" style=\"color: var(--accent-light); font-weight: 600;\">support@mustreamer.com</a> o visita nuestra <a href=\"support.html\" style=\"color: var(--accent-light); text-decoration: underline;\">página de soporte</a>.",

      "support.badge": "Asistencia y Comunidad",
      "support.title": "Soporte y Preguntas Frecuentes",
      "support.subtitle": "¿Necesitas ayuda o tienes alguna sugerencia? Aquí tienes respuestas rápidas y contacto directo.",
      "support.q1Title": "1. ¿Cómo conecto mi streamer o Naim Mu-so?",
      "support.q1Text": "Asegúrate de estar en la <strong>misma red Wi-Fi o Ethernet</strong>. MuStreamer detecta tu equipo automáticamente vía SSDP/UPnP.",
      "support.q2Title": "2. ¿Cómo funciona la decodificación local frente al DAC interno?",
      "support.q2Text": "Activa <em>Decodificación Local</em> en Ajustes:<br>&bull; <strong>Local</strong>: Mac o iPhone decodifica FLAC/Hi-Res a WAV Bit-Perfect.<br>&bull; <strong>DAC Interno</strong>: Envía el flujo original al streamer.",
      "support.q3Title": "3. ¿El modo Bit-Perfect está garantizado?",
      "support.q3Text": "Sí, sin remuestreos innecesarios hasta 24-bit / 192 kHz.",
      "support.q4Title": "4. ¿Qué suscripciones necesito?",
      "support.q4Text": "Qobuz (Studio/Sublime) o TIDAL (HiFi/Max), además del catálogo demo Hi-Res offline integrado.",
      "support.q5Title": "5. ¿Cómo envío feedback?",
      "support.q5Text": "Desde Ajustes (<strong>Enviar Feedback</strong>) o por email a <a href=\"mailto:support@mustreamer.com\" style=\"color: var(--accent-light); font-weight: 600;\">support@mustreamer.com</a>.",
      "support.bannerTitle": "¿Más preguntas?",
      "support.bannerText": "Respondemos rápidamente a cada amante de la alta fidelidad.",
      "support.bannerBtn": "Contáctanos por Email"
    },

    pt: {
      "meta.index.title": "MuStreamer - Streaming Audiófilo Bit-Perfect para Mac e iPhone",
      "meta.index.desc": "MuStreamer dá nova vida ao seu sistema Hi-Fi: streaming Bit-Perfect até 24-bit/192 kHz, Qobuz e TIDAL integrados, descodificação local e ferramentas de precisão.",
      "meta.privacy.title": "Política de Privacidade — MuStreamer",
      "meta.privacy.desc": "Política de privacidade do MuStreamer: respeito total pelos seus dados e credenciais protegidas localmente.",
      "meta.support.title": "Suporte & FAQ — MuStreamer",
      "meta.support.desc": "Centro de ajuda do MuStreamer: perguntas frequentes, ligação UPnP e contactos.",

      "nav.features": "Funcionalidades",
      "nav.tools": "Ferramentas Hi-Fi",
      "nav.story": "A Nossa História",
      "nav.specs": "Especificações",
      "nav.support": "Suporte",
      "nav.privacy": "Privacidade",
      "nav.cta": "Descarregar App",
      "nav.backToApp": "Voltar à App",

      "hero.badge": "Streaming Hi-Res Bit-Perfect • 24-bit / 192 kHz",
      "hero.title": "Nova vida para o seu sistema Hi-Fi.<br><span class=\"text-gradient\">Zero compromissos sonoros.</span>",
      "hero.lead": "O MuStreamer é o leitor audiófilo definitivo para Mac e iPhone. Une a pureza do fluxo <strong>Bit-Perfect</strong> à integração nativa do <strong>Qobuz</strong> e <strong>TIDAL</strong>, aliviando o seu streamer UPnP com descodificação local inteligente.",
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

      "features.badge": "Engenharia Acústica",
      "features.title": "Criado por e para Audiófilos",
      "features.subtitle": "Todas as tecnologias para superar os limites de protocolos antigos e ouvir cada detalhe.",
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
      "specs.r3Label": "Serviços de Streaming",
      "specs.r4Label": "Protocolo de Saída",
      "specs.r4Val": "UPnP AV / DLNA MediaRenderer 1.0/2.0 com transcodificação Bit-Perfect linear",
      "specs.r5Label": "Plataformas",
      "specs.r5Soon": "⏳ Em breve disponível também para <strong>Windows</strong> e <strong>Android</strong>",

      "footer.home": "Início",
      "footer.privacy": "Política de Privacidade",
      "footer.support": "Suporte & Contactos",
      "footer.copy": "&copy; 2026 MuStreamer. Todos os direitos reservados.",
      "footer.disclaimer": "<em>Nota Legal & Marcas:</em> Naim, Mu-so, Qobuz e TIDAL são marcas registadas dos respetivos proprietários, citadas apenas para fins descritivos e de compatibilidade.",

      "privacy.badge": "Documento Oficial",
      "privacy.title": "Política de Privacidade",
      "privacy.updated": "Última atualização: 12 de novembro de 2026",
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
      "privacy.s5Title": "5. Sem Rastreio nem Cookies",
      "privacy.s5Text": "Sem rastreadores publicitários ou analytics de terceiros.",
      "privacy.s6Title": "6. Contacto",
      "privacy.s6Text": "Escreva para <a href=\"mailto:support@mustreamer.com\" style=\"color: var(--accent-light); font-weight: 600;\">support@mustreamer.com</a> ou veja a <a href=\"support.html\" style=\"color: var(--accent-light); text-decoration: underline;\">página de suporte</a>.",

      "support.badge": "Assistência & Comunidade",
      "support.title": "Suporte & Perguntas Frequentes",
      "support.subtitle": "Precisa de ajuda na configuração? Encontre aqui as respostas principais.",
      "support.q1Title": "1. Como ligo o meu streamer ou Naim Mu-so?",
      "support.q1Text": "Ligue o Mac/iPhone à <strong>mesma rede Wi-Fi ou Ethernet</strong>. O MuStreamer descobre o equipamento automaticamente por UPnP.",
      "support.q2Title": "2. Como funciona a descodificação local vs. DAC interno?",
      "support.q2Text": "Em Definições ative <em>Descodificação Local</em>:<br>&bull; <strong>Local</strong>: O Mac/iPhone descodifica para WAV Bit-Perfect.<br>&bull; <strong>DAC Interno</strong>: Envia o fluxo original para o equipamento.",
      "support.q3Title": "3. O modo Bit-Perfect é sempre garantido?",
      "support.q3Text": "Sim, sem reamostragens indesejadas até 24-bit / 192 kHz.",
      "support.q4Title": "4. Que subscrições são necessárias?",
      "support.q4Text": "Qobuz (Studio/Sublime) ou TIDAL (HiFi/Max), além do catálogo demo offline incluído.",
      "support.q5Title": "5. Como enviar sugestões?",
      "support.q5Text": "Através da opção <strong>Enviar Feedback</strong> nas Definições ou por email: <a href=\"mailto:support@mustreamer.com\" style=\"color: var(--accent-light); font-weight: 600;\">support@mustreamer.com</a>.",
      "support.bannerTitle": "Ainda tem dúvidas?",
      "support.bannerText": "Respondemos rapidamente a todos os entusiastas de alta-fidelidade.",
      "support.bannerBtn": "Contactar por Email"
    },

    nl: {
      "meta.index.title": "MuStreamer - Bit-Perfect Audiofiele Streaming voor Mac en iPhone",
      "meta.index.desc": "MuStreamer blaast uw Hi-Fi-systeem nieuw leven in: Bit-Perfect streaming tot 24-bit/192 kHz, Qobuz & TIDAL, lokale decodering en meetinstrumenten.",
      "meta.privacy.title": "Privacybeleid — MuStreamer",
      "meta.privacy.desc": "Privacybeleid van MuStreamer: volledige gegevensbescherming, geen tracking, inloggegevens lokaal bewaard.",
      "meta.support.title": "Support & FAQ — MuStreamer",
      "meta.support.desc": "MuStreamer Ondersteuning: veelgestelde vragen, UPnP-gids en contact.",

      "nav.features": "Kenmerken",
      "nav.tools": "Hi-Fi Tools",
      "nav.story": "Ons Verhaal",
      "nav.specs": "Specificaties",
      "nav.support": "Support",
      "nav.privacy": "Privacybeleid",
      "nav.cta": "Download App",
      "nav.backToApp": "Terug naar App",

      "hero.badge": "Hi-Res Bit-Perfect Streaming • 24-bit / 192 kHz",
      "hero.title": "Nieuw leven voor uw Hi-Fi-systeem.<br><span class=\"text-gradient\">Geen enkel geluidscompromis.</span>",
      "hero.lead": "MuStreamer is de ultieme audiofiele speler voor Mac en iPhone. Combineert zuivere <strong>Bit-Perfect</strong> weergave met ingebouwde <strong>Qobuz</strong> en <strong>TIDAL</strong>, en ontlast uw UPnP-streamer dankzij slimme lokale decodering.",
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

      "features.badge": "Akoestische Engineering",
      "features.title": "Ontworpen door en voor Audiofielen",
      "features.subtitle": "Alle technologie om beperkingen van oudere protocollen te overwinnen.",
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
      "specs.r3Label": "Streamingdiensten",
      "specs.r4Label": "Uitvoerprotocol",
      "specs.r4Val": "UPnP AV / DLNA MediaRenderer 1.0/2.0 met lineaire Bit-Perfect transcodering",
      "specs.r5Label": "Platformen",
      "specs.r5Soon": "⏳ Binnenkort ook beschikbaar voor <strong>Windows</strong> en <strong>Android</strong>",

      "footer.home": "Home",
      "footer.privacy": "Privacybeleid",
      "footer.support": "Support & Contact",
      "footer.copy": "&copy; 2026 MuStreamer. Alle rechten voorbehouden.",
      "footer.disclaimer": "<em>Juridische kennisgeving & Handelsmerken:</em> Naim, Mu-so, Qobuz en TIDAL zijn gedeponeerde handelsmerken van hun respectievelijke eigenaars en worden uitsluitend genoemd ter beschrijving en compatibiliteit.",

      "privacy.badge": "Officieel Document",
      "privacy.title": "Privacybeleid",
      "privacy.updated": "Laatst bijgewerkt: 12 november 2026",
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
      "privacy.s5Title": "5. Geen Tracking of Cookies",
      "privacy.s5Text": "Geen advertentietrackers of analytics van derden.",
      "privacy.s6Title": "6. Contact",
      "privacy.s6Text": "Mail naar <a href=\"mailto:support@mustreamer.com\" style=\"color: var(--accent-light); font-weight: 600;\">support@mustreamer.com</a> of bezoek onze <a href=\"support.html\" style=\"color: var(--accent-light); text-decoration: underline;\">supportpagina</a>.",

      "support.badge": "Hulp & Community",
      "support.title": "Support & Veelgestelde Vragen",
      "support.subtitle": "Hulp nodig bij het instellen? Bekijk hier de meest gestelde vragen.",
      "support.q1Title": "1. Hoe verbind ik mijn streamer of Naim Mu-so?",
      "support.q1Text": "Zorg dat uw Mac of iPhone op <strong>hetzelfde wifi- of ethernetnetwerk</strong> zit. MuStreamer vindt uw apparaat automatisch via SSDP/UPnP.",
      "support.q2Title": "2. Hoe werkt lokale decodering vs. interne DAC?",
      "support.q2Text": "Kies in Instellingen voor <em>Lokale Decodering</em>:<br>&bull; <strong>Lokaal</strong>: Mac/iPhone decodeert FLAC naar ongecomprimeerd Bit-Perfect WAV.<br>&bull; <strong>Interne DAC</strong>: Verstuurt de onbewerkte stream.",
      "support.q3Title": "3. Is Bit-Perfect altijd gegarandeerd?",
      "support.q3Text": "Ja, zonder ongewenste resampling tot 24-bit / 192 kHz.",
      "support.q4Title": "4. Welke abonnementen heb ik nodig?",
      "support.q4Text": "Qobuz (Studio/Sublime) of TIDAL (HiFi/Max), en een offline Hi-Res democatalogus is inbegrepen.",
      "support.q5Title": "5. Hoe stuur ik feedback?",
      "support.q5Text": "Via <strong>Feedback sturen</strong> in Instellingen of per e-mail naar <a href=\"mailto:support@mustreamer.com\" style=\"color: var(--accent-light); font-weight: 600;\">support@mustreamer.com</a>.",
      "support.bannerTitle": "Nog vragen?",
      "support.bannerText": "Wij reageren snel op iedere muziekliefhebber.",
      "support.bannerBtn": "Neem contact op via E-mail"
    },

    ja: {
      "meta.index.title": "MuStreamer - Mac & iPhone向け Bit-Perfect オーディオファイル・ストリーミング",
      "meta.index.desc": "お使いのHi-Fiシステムに新たな命を：最大24-bit/192 kHzのBit-Perfect再生、Qobuz・TIDAL統合、ローカルデコード・オフロード、精密音響ツール（VUメーター、RTA、騒音計）。",
      "meta.privacy.title": "プライバシーポリシー — MuStreamer",
      "meta.privacy.desc": "MuStreamer プライバシーポリシー：個人データの収集や追跡は一切なく、認証情報はMacやiPhoneのローカルに安全に保存されます。",
      "meta.support.title": "サポート & FAQ — MuStreamer",
      "meta.support.desc": "MuStreamer サポートセンター：よくある質問、UPnP接続ガイド、お問い合わせ。",

      "nav.features": "特徴",
      "nav.tools": "Hi-Fi ツール",
      "nav.story": "開発ストーリー",
      "nav.specs": "仕様",
      "nav.support": "サポート",
      "nav.privacy": "プライバシー",
      "nav.cta": "アプリを入手",
      "nav.backToApp": "アプリに戻る",

      "hero.badge": "Hi-Res Bit-Perfect ストリーミング • 24-bit / 192 kHz",
      "hero.title": "Hi-Fiシステムに、新たな息吹を。<br><span class=\"text-gradient\">音質への妥協はゼロ。</span>",
      "hero.lead": "MuStreamerはMacとiPhoneのための究極のオーディオファイル向けプレーヤーです。<strong>Bit-Perfect</strong>の純粋な音質と<strong>Qobuz</strong>・<strong>TIDAL</strong>のネイティブ統合を実現し、インテリジェントなローカルデコードによってUPnPストリーマーの負荷を軽減します。",
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

      "features.badge": "音響エンジニアリング",
      "features.title": "オーディオファイルによる、オーディオファイルのための設計",
      "features.subtitle": "旧世代プロトコルの限界を超え、音のあらゆるニュアンスを味わうための最新技術を搭載。",
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
      "specs.r3Label": "音楽ストリーミングサービス",
      "specs.r4Label": "出力プロトコル",
      "specs.r4Val": "UPnP AV / DLNA MediaRenderer 1.0/2.0 (リニア Bit-Perfect トランスコード対応)",
      "specs.r5Label": "対応プラットフォーム",
      "specs.r5Soon": "⏳ <strong>Windows</strong>・<strong>Android</strong>版も近日公開予定",

      "footer.home": "ホーム",
      "footer.privacy": "プライバシーポリシー",
      "footer.support": "サポート & お問い合わせ",
      "footer.copy": "&copy; 2026 MuStreamer. All rights reserved.",
      "footer.disclaimer": "<em>法的通知・商標について：</em> Naim、Mu-so、Qobuz、およびTIDALは各社の登録商標であり、互換性および説明の目的でのみ記載されています。MuStreamerはHi-Fiコミュニティのために開発された独立系アプリケーションです。",

      "privacy.badge": "公式ドキュメント",
      "privacy.title": "プライバシーポリシー",
      "privacy.updated": "最終更新日：2026年11月12日",
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
      "privacy.s5Title": "5. トラッキングおよびサードパーティCookieなし",
      "privacy.s5Text": "広告トラッカー、Google Analytics、行動分析ライブラリは一切含まれていません。",
      "privacy.s6Title": "6. プライバシーに関するお問い合わせ",
      "privacy.s6Text": "ご質問は <a href=\"mailto:support@mustreamer.com\" style=\"color: var(--accent-light); font-weight: 600;\">support@mustreamer.com</a> までご連絡いただくか、<a href=\"support.html\" style=\"color: var(--accent-light); text-decoration: underline;\">サポートページ</a>をご覧ください。",

      "support.badge": "サポート & コミュニティ",
      "support.title": "サポート & よくある質問",
      "support.subtitle": "設定方法やご提案がありましたら、以下のFAQおよびお問い合わせ窓口をご利用ください。",
      "support.q1Title": "1. Naim Mu-so やネットワークストリーマーへの接続方法は？",
      "support.q1Text": "MacまたはiPhoneをストリーマーと<strong>同じWi-Fiまたは有線LANネットワーク</strong>に接続するだけです。SSDP/UPnPにより上部のデバイスバーに自動表示されます。",
      "support.q2Title": "2. ローカルデコードと内蔵DACの切り替えはどう機能しますか？",
      "support.q2Text": "設定または再生バーから<em>ローカルデコード（オフロード）</em>を選択できます：<br>&bull; <strong>ローカルデコード</strong>：Mac/iPhone側でFLACを無圧縮Bit-Perfect WAVにデコードして送信します。<br>&bull; <strong>内蔵DAC</strong>：元のストリームをそのままストリーマーへ送信します。",
      "support.q3Title": "3. Bit-Perfect 再生は常に保証されますか？",
      "support.q3Text": "はい。不要なソフトウェア・リサンプリングは行わず、24-bit / 96〜192 kHzのデータをビット単位で維持します。",
      "support.q4Title": "4. QobuzやTIDALのどのプランが必要ですか？",
      "support.q4Text": "通常のQobuz（Studio/Sublime）またはTIDAL（HiFi/Max）プランでご利用いただけます。ログイン不要で試せるオフラインデモ音源も内蔵しています。",
      "support.q5Title": "5. 要望や不具合を報告するには？",
      "support.q5Text": "アプリ内の設定にある<strong>フィードバックを送信</strong>、またはメール <a href=\"mailto:support@mustreamer.com\" style=\"color: var(--accent-light); font-weight: 600;\">support@mustreamer.com</a> にて随時受け付けております。",
      "support.bannerTitle": "その他ご質問がありますか？",
      "support.bannerText": "すべてのオーディオ愛好家の皆様へ迅速にお返事いたします。",
      "support.bannerBtn": "メールでお問い合わせ"
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
    const internalPages = ["index.html", "privacy.html", "support.html"];
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

    // Aggiorna UI del selettore lingua
    const flagEl = document.getElementById("currentLangFlag");
    const codeEl = document.getElementById("currentLangCode");
    const btnEl = document.getElementById("langBtn");
    const menuEl = document.getElementById("langMenu");
    if (flagEl) flagEl.textContent = meta.flag;
    if (codeEl) codeEl.textContent = meta.code;
    if (btnEl) btnEl.setAttribute("aria-label", meta.aria);
    if (menuEl) menuEl.setAttribute("aria-label", meta.menuAria);

    document.querySelectorAll(".lang-option").forEach((opt) => {
      const isSelected = opt.getAttribute("data-lang") === safeLang;
      opt.classList.toggle("active", isSelected);
      opt.setAttribute("aria-selected", isSelected ? "true" : "false");
    });

    syncInternalLinks(safeLang);

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

  // Inizializzazione Dropdown & Event Listeners
  const switcher = document.getElementById("langSwitcher");
  const langBtn = document.getElementById("langBtn");

  function closeMenu() {
    if (!switcher || !langBtn) return;
    switcher.classList.remove("open");
    langBtn.setAttribute("aria-expanded", "false");
  }

  if (switcher && langBtn) {
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const willOpen = !switcher.classList.contains("open");
      switcher.classList.toggle("open", willOpen);
      langBtn.setAttribute("aria-expanded", willOpen ? "true" : "false");
    });

    document.querySelectorAll(".lang-option").forEach((opt) => {
      opt.addEventListener("click", () => {
        const chosen = opt.getAttribute("data-lang");
        applyLanguage(chosen, true);
        closeMenu();
      });
    });

    document.addEventListener("click", (e) => {
      if (!switcher.contains(e.target)) {
        closeMenu();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        closeMenu();
      }
    });
  }

  // Applica lingua iniziale (senza alterare cronologia o HTML se è 'it')
  const initialLang = getInitialLanguage();
  if (initialLang !== "it") {
    applyLanguage(initialLang, false);
  } else {
    syncInternalLinks("it");
  }
})();
