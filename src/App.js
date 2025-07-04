import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [showROICalculator, setShowROICalculator] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showPartnershipForm, setShowPartnershipForm] = useState(false);
  const [showLegalModal, setShowLegalModal] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);
  const [calculatorMode, setCalculatorMode] = useState('partnership');
  const [roiInputs, setROIInputs] = useState({
    location: 'gym',
    footTraffic: 200,
    pricePerSpray: 2,
    operatingDays: 30
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const languages = {
    en: { name: 'English', flag: '🇬🇧', code: 'EN' },
    es: { name: 'Español', flag: '🇪🇸', code: 'ES' },
    it: { name: 'Italiano', flag: '🇮🇹', code: 'IT' },
    fr: { name: 'Français', flag: '🇫🇷', code: 'FR' },
    de: { name: 'Deutsch', flag: '🇩🇪', code: 'DE' },
    ro: { name: 'Română', flag: '🇷🇴', code: 'RO' }
  };

  const translations = {
    en: {
      nav: {
        businessModels: 'Business Models',
        opportunity: 'Opportunity',
        product: 'Product',
        success: 'Success Stories',
        getStarted: 'Get Started',
        startPartnership: 'Start Partnership'
      },
      hero: {
        title: 'Generate £300-£500+ Monthly',
        titleHighlight: 'With ZERO Investment',
        subtitle: 'We install our luxury fragrance vending machine at your location completely FREE. You earn 20% of all sales as pure passive income. No costs, no risks, just profit from day one.',
        ctaPrimary: '🤝 START EARNING 20% - FREE INSTALLATION',
        ctaSecondary: '💰 BUY YOUR OWN MACHINE - £4,999'
      },
      stats: {
        investment: 'Investment Required',
        revenue: 'Your Revenue Share',
        monthly: 'Monthly Income'
      },
      businessModels: {
        title: 'Two Ways To Profit From The Fragrance Boom',
        subtitle: 'Choose the model that best fits your business goals and investment capacity',
        partnership: {
          title: 'Partnership Model',
          investment: '£0 Investment',
          income: 'Earn £300-500+/month',
          recommended: '🏆 RECOMMENDED',
          cta: 'Start Partnership - FREE',
          example: 'Machine generates £2,000/month',
          yourIncome: 'Your Income: £400/month (20%)'
        },
        ownership: {
          title: 'Ownership Model',
          investment: '£4,999 Investment',
          income: 'Keep 100% of Profits',
          badge: '💼 FULL CONTROL',
          cta: 'Buy Machine - £4,999',
          example: 'Machine generates £2,000/month',
          yourProfit: 'Your Profit: £1,500/month (75%)'
        }
      }
    },
    es: {
      nav: {
        businessModels: 'Modelos de Negocio',
        opportunity: 'Oportunidad',
        product: 'Producto',
        success: 'Historias de Éxito',
        getStarted: 'Comenzar',
        startPartnership: 'Iniciar Asociación'
      },
      hero: {
        title: 'Genera £300-£500+ Mensuales',
        titleHighlight: 'Con CERO Inversión',
        subtitle: 'Instalamos nuestra máquina expendedora de fragancias de lujo en tu ubicación completamente GRATIS. Ganas el 20% de todas las ventas como ingresos pasivos puros. Sin costos, sin riesgos, solo ganancias desde el día uno.',
        ctaPrimary: '🤝 COMENZAR A GANAR 20% - INSTALACIÓN GRATIS',
        ctaSecondary: '💰 COMPRA TU PROPIA MÁQUINA - £4,999'
      },
      stats: {
        investment: 'Inversión Requerida',
        revenue: 'Tu Participación en Ingresos',
        monthly: 'Ingresos Mensuales'
      },
      businessModels: {
        title: 'Dos Formas de Beneficiarse del Boom de Fragancias',
        subtitle: 'Elige el modelo que mejor se adapte a tus objetivos de negocio y capacidad de inversión',
        partnership: {
          title: 'Modelo de Asociación',
          investment: '£0 Inversión',
          income: 'Gana £300-500+/mes',
          recommended: '🏆 RECOMENDADO',
          cta: 'Iniciar Asociación - GRATIS',
          example: 'La máquina genera £2,000/mes',
          yourIncome: 'Tus Ingresos: £400/mes (20%)'
        },
        ownership: {
          title: 'Modelo de Propiedad',
          investment: '£4,999 Inversión',
          income: 'Mantén 100% de las Ganancias',
          badge: '💼 CONTROL TOTAL',
          cta: 'Comprar Máquina - £4,999',
          example: 'La máquina genera £2,000/mes',
          yourProfit: 'Tu Ganancia: £1,500/mes (75%)'
        }
      }
    },
    it: {
      nav: {
        businessModels: 'Modelli di Business',
        opportunity: 'Opportunità',
        product: 'Prodotto',
        success: 'Storie di Successo',
        getStarted: 'Inizia',
        startPartnership: 'Inizia Partnership'
      },
      hero: {
        title: 'Genera £300-£500+ Mensili',
        titleHighlight: 'Con ZERO Investimenti',
        subtitle: 'Installiamo la nostra macchina distributrice di profumi di lusso nella tua location completamente GRATIS. Guadagni il 20% di tutte le vendite come reddito passivo puro. Nessun costo, nessun rischio, solo profitti dal primo giorno.',
        ctaPrimary: '🤝 INIZIA A GUADAGNARE 20% - INSTALLAZIONE GRATUITA',
        ctaSecondary: '💰 COMPRA LA TUA MACCHINA - £4,999'
      },
      stats: {
        investment: 'Investimento Richiesto',
        revenue: 'La Tua Quota di Ricavi',
        monthly: 'Reddito Mensile'
      },
      businessModels: {
        title: 'Due Modi per Trarre Profitto dal Boom delle Fragranze',
        subtitle: 'Scegli il modello che meglio si adatta ai tuoi obiettivi di business e capacità di investimento',
        partnership: {
          title: 'Modello Partnership',
          investment: '£0 Investimento',
          income: 'Guadagna £300-500+/mese',
          recommended: '🏆 RACCOMANDATO',
          cta: 'Inizia Partnership - GRATIS',
          example: 'La macchina genera £2,000/mese',
          yourIncome: 'Il Tuo Reddito: £400/mese (20%)'
        },
        ownership: {
          title: 'Modello di Proprietà',
          investment: '£4,999 Investimento',
          income: 'Mantieni 100% dei Profitti',
          badge: '💼 CONTROLLO TOTALE',
          cta: 'Compra Macchina - £4,999',
          example: 'La macchina genera £2,000/mese',
          yourProfit: 'Il Tuo Profitto: £1,500/mese (75%)'
        }
      }
    },
    fr: {
      nav: {
        businessModels: 'Modèles d\'Affaires',
        opportunity: 'Opportunité',
        product: 'Produit',
        success: 'Histoires de Succès',
        getStarted: 'Commencer',
        startPartnership: 'Démarrer Partenariat'
      },
      hero: {
        title: 'Générez £300-£500+ Mensuels',
        titleHighlight: 'Avec ZÉRO Investissement',
        subtitle: 'Nous installons notre distributeur de parfums de luxe dans votre emplacement complètement GRATUIT. Vous gagnez 20% de toutes les ventes en tant que revenu passif pur. Aucun coût, aucun risque, que du profit dès le premier jour.',
        ctaPrimary: '🤝 COMMENCER À GAGNER 20% - INSTALLATION GRATUITE',
        ctaSecondary: '💰 ACHETEZ VOTRE PROPRE MACHINE - £4,999'
      },
      stats: {
        investment: 'Investissement Requis',
        revenue: 'Votre Part de Revenus',
        monthly: 'Revenus Mensuels'
      },
      businessModels: {
        title: 'Deux Façons de Profiter du Boom des Parfums',
        subtitle: 'Choisissez le modèle qui correspond le mieux à vos objectifs commerciaux et à votre capacité d\'investissement',
        partnership: {
          title: 'Modèle de Partenariat',
          investment: '£0 Investissement',
          income: 'Gagnez £300-500+/mois',
          recommended: '🏆 RECOMMANDÉ',
          cta: 'Démarrer Partenariat - GRATUIT',
          example: 'La machine génère £2,000/mois',
          yourIncome: 'Vos Revenus: £400/mois (20%)'
        },
        ownership: {
          title: 'Modèle de Propriété',
          investment: '£4,999 Investissement',
          income: 'Gardez 100% des Profits',
          badge: '💼 CONTRÔLE TOTAL',
          cta: 'Acheter Machine - £4,999',
          example: 'La machine génère £2,000/mois',
          yourProfit: 'Votre Profit: £1,500/mois (75%)'
        }
      }
    },
    de: {
      nav: {
        businessModels: 'Geschäftsmodelle',
        opportunity: 'Gelegenheit',
        product: 'Produkt',
        success: 'Erfolgsgeschichten',
        getStarted: 'Loslegen',
        startPartnership: 'Partnerschaft Starten'
      },
      hero: {
        title: 'Generieren Sie £300-£500+ Monatlich',
        titleHighlight: 'Mit NULL Investment',
        subtitle: 'Wir installieren unseren Luxus-Parfüm-Automaten an Ihrem Standort völlig KOSTENLOS. Sie verdienen 20% aller Verkäufe als reines passives Einkommen. Keine Kosten, keine Risiken, nur Gewinn vom ersten Tag an.',
        ctaPrimary: '🤝 BEGINNEN SIE 20% ZU VERDIENEN - KOSTENLOSE INSTALLATION',
        ctaSecondary: '💰 KAUFEN SIE IHRE EIGENE MASCHINE - £4,999'
      },
      stats: {
        investment: 'Erforderliche Investition',
        revenue: 'Ihr Umsatzanteil',
        monthly: 'Monatliches Einkommen'
      },
      businessModels: {
        title: 'Zwei Wege, Vom Parfüm-Boom zu Profitieren',
        subtitle: 'Wählen Sie das Modell, das am besten zu Ihren Geschäftszielen und Investitionskapazität passt',
        partnership: {
          title: 'Partnerschaftsmodell',
          investment: '£0 Investition',
          income: 'Verdienen Sie £300-500+/Monat',
          recommended: '🏆 EMPFOHLEN',
          cta: 'Partnerschaft Starten - KOSTENLOS',
          example: 'Maschine generiert £2,000/Monat',
          yourIncome: 'Ihr Einkommen: £400/Monat (20%)'
        },
        ownership: {
          title: 'Eigentumsmodell',
          investment: '£4,999 Investition',
          income: 'Behalten Sie 100% der Gewinne',
          badge: '💼 VOLLE KONTROLLE',
          cta: 'Maschine Kaufen - £4,999',
          example: 'Maschine generiert £2,000/Monat',
          yourProfit: 'Ihr Gewinn: £1,500/Monat (75%)'
        }
      }
    },
    ro: {
      nav: {
        businessModels: 'Modele de Afaceri',
        opportunity: 'Oportunitate',
        product: 'Produs',
        success: 'Povești de Succes',
        getStarted: 'Începe',
        startPartnership: 'Începe Parteneriatul'
      },
      hero: {
        title: 'Generează £300-£500+ Lunar',
        titleHighlight: 'Cu ZERO Investiție',
        subtitle: 'Instalăm automat parfumurilor de lux la locația ta complet GRATUIT. Câștigi 20% din toate vânzările ca venit pasiv pur. Fără costuri, fără riscuri, doar profit din prima zi.',
        ctaPrimary: '🤝 ÎNCEPE SĂ CÂȘTIGI 20% - INSTALARE GRATUITĂ',
        ctaSecondary: '💰 CUMPĂRĂ-ȚI PROPRIA MAȘINĂ - £4,999'
      },
      stats: {
        investment: 'Investiție Necesară',
        revenue: 'Cota Ta de Venituri',
        monthly: 'Venit Lunar'
      },
      businessModels: {
        title: 'Două Moduri de a Profita de Boom-ul Parfumurilor',
        subtitle: 'Alege modelul care se potrivește cel mai bine obiectivelor tale de afaceri și capacității de investiție',
        partnership: {
          title: 'Model de Parteneriat',
          investment: '£0 Investiție',
          income: 'Câștigă £300-500+/lună',
          recommended: '🏆 RECOMANDAT',
          cta: 'Începe Parteneriatul - GRATUIT',
          example: 'Mașina generează £2,000/lună',
          yourIncome: 'Venitul Tău: £400/lună (20%)'
        },
        ownership: {
          title: 'Model de Proprietate',
          investment: '£4,999 Investiție',
          income: 'Păstrează 100% din Profituri',
          badge: '💼 CONTROL TOTAL',
          cta: 'Cumpără Mașina - £4,999',
          example: 'Mașina generează £2,000/lună',
          yourProfit: 'Profitul Tău: £1,500/lună (75%)'
        }
      }
    }
  };

  const t = translations[currentLanguage];

  const handleLanguageChange = (langCode) => {
    setCurrentLanguage(langCode);
    setShowLanguageDropdown(false);
    localStorage.setItem('scentngoo_language', langCode);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('scentngoo_language');
    if (savedLanguage && languages[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.language-selector')) {
        setShowLanguageDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const testimonials = [
    {
      name: "James Wright",
      business: "Premium Gym Owner", 
      rating: 5,
      text: "We earn £420/month from our ScentNGoo partnership with zero effort. They handle everything - installation, maintenance, restocking. We just collect the cheques! No investment, pure passive income.",
      revenue: "£420/month",
      type: "partnership"
    },
    {
      name: "Marcus Johnson",
      business: "Elite Fitness Club Owner",
      rating: 5,
      text: "Best investment I've made! My ScentNGoo machine generates £2,800+ monthly and I own it outright. The app monitoring is brilliant - I know exactly when to refill without even visiting. Outstanding ROI!",
      revenue: "£2,800/month",
      type: "ownership"
    },
    {
      name: "Sarah Mitchell",
      business: "Upscale Pub Chain",
      rating: 5,
      text: "We partnered with ScentNGoo across 3 venues earning £1,200+ monthly combined with zero investment from us. They handle everything professionally while we focus on our core business.",
      revenue: "£1,200/month (3 locations)",
      type: "partnership"
    },
    {
      name: "David Rodriguez", 
      business: "Premium Nightclub",
      rating: 5,
      text: "Incredible passive income stream! Our partnership with ScentNGoo generates £640/month with absolutely no work from us. Customers love having 10 premium fragrances to choose from.",
      revenue: "£640/month",
      type: "partnership"
    }
  ];

  const locationMultipliers = {
    gym: { name: 'Fitness Center', multiplier: 1.2, avgUses: 4 },
    pub: { name: 'Pub/Bar', multiplier: 1.5, avgUses: 6 },
    club: { name: 'Nightclub', multiplier: 2.0, avgUses: 8 },
    restaurant: { name: 'Restaurant', multiplier: 1.3, avgUses: 5 },
    hotel: { name: 'Hotel', multiplier: 1.4, avgUses: 5 }
  };

  const calculateROI = () => {
    const location = locationMultipliers[roiInputs.location];
    const dailyUsers = Math.floor(roiInputs.footTraffic * 0.15);
    const dailyUses = dailyUsers * location.avgUses;
    const dailyRevenue = dailyUses * roiInputs.pricePerSpray * location.multiplier;
    const monthlyRevenue = dailyRevenue * roiInputs.operatingDays;
    
    if (calculatorMode === 'partnership') {
      const partnershipIncome = monthlyRevenue * 0.2;
      const yearlyIncome = partnershipIncome * 12;
      return {
        dailyUsers,
        dailyUses,
        dailyRevenue: Math.round(dailyRevenue),
        monthlyRevenue: Math.round(monthlyRevenue),
        partnershipIncome: Math.round(partnershipIncome),
        yearlyIncome: Math.round(yearlyIncome),
        investment: 0,
        roi: 'Infinite (£0 investment)'
      };
    } else {
      const monthlyProfit = monthlyRevenue * 0.75;
      const yearlyProfit = monthlyProfit * 12;
      const breakEvenMonths = 4999 / monthlyProfit;
      const roi = ((yearlyProfit - 4999) / 4999) * 100;
      return {
        dailyUsers,
        dailyUses,
        dailyRevenue: Math.round(dailyRevenue),
        monthlyRevenue: Math.round(monthlyRevenue),
        monthlyProfit: Math.round(monthlyProfit),
        yearlyProfit: Math.round(yearlyProfit),
        breakEvenMonths: Math.round(breakEvenMonths * 10) / 10,
        roi: Math.round(roi),
        investment: 4999
      };
    }
  };

  const handleROIInputChange = (field, value) => {
    setROIInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const roiResults = calculateROI();

  const legalContent = {
    terms: {
      title: "Terms of Service",
      content: `
        <h3>TERMS OF SERVICE - ScentNGoo Ltd</h3>
        
        <h4>1. COMPANY INFORMATION</h4>
        <p>ScentNGoo Ltd, UK Registered Company<br/>
        Email: scentngoo@gmail.com<br/>
        Phone: +44 (0) 20 7946 0958</p>

        <h4>2. CONSUMER RIGHTS (UK)</h4>
        <p>Under the Consumer Rights Act 2015, you have the right to:</p>
        <ul>
          <li>Receive goods that match their description</li>
          <li>14-day cooling-off period for distance sales</li>
          <li>Repair, replacement, or refund for faulty goods</li>
          <li>Protection against unfair terms</li>
        </ul>

        <h4>3. BUSINESS MODELS</h4>
        <h5>Partnership Model:</h5>
        <ul>
          <li>£0 investment required from venue owner</li>
          <li>ScentNGoo retains ownership of equipment</li>
          <li>Venue receives 20% of gross sales revenue</li>
          <li>Monthly payments processed automatically</li>
          <li>Either party may terminate with 30 days notice</li>
        </ul>
        
        <h5>Ownership Model:</h5>
        <ul>
          <li>£4,999 investment includes machine, installation, and training</li>
          <li>Customer owns equipment outright</li>
          <li>1-year manufacturer warranty on hardware</li>
          <li>30-day money-back guarantee</li>
          <li>ROI projections are estimates based on average performance</li>
        </ul>

        <h4>4. INSTALLATION & LOCATION</h4>
        <ul>
          <li>Professional installation within 2-4 weeks of agreement</li>
          <li>Customer must secure venue permissions</li>
          <li>Installation location must meet technical requirements</li>
          <li>Additional charges may apply for remote locations</li>
        </ul>

        <h4>5. LIABILITY</h4>
        <p>Our liability is limited in accordance with UK Consumer Rights Act 2015. We provide comprehensive business insurance guidance and require customers to maintain appropriate commercial insurance.</p>

        <h4>6. GOVERNING LAW</h4>
        <p>These terms are governed by English law and subject to the exclusive jurisdiction of English courts.</p>
      `
    },
    privacy: {
      title: "Privacy Policy",
      content: `
        <h3>PRIVACY POLICY - ScentNGoo Ltd</h3>
        
        <h4>1. DATA CONTROLLER</h4>
        <p>ScentNGoo Ltd processes your personal data in accordance with UK GDPR and the Data Protection Act 2018.</p>

        <h4>2. DATA WE COLLECT</h4>
        <ul>
          <li>Contact information (name, email, phone number)</li>
          <li>Business details for partnership or investment processing</li>
          <li>Location preferences and requirements</li>
          <li>Website analytics data (anonymized)</li>
          <li>Communication records for support purposes</li>
          <li>Sales and revenue data for partnership payments</li>
        </ul>

        <h4>3. LEGAL BASIS FOR PROCESSING</h4>
        <ul>
          <li><strong>Contract performance:</strong> Processing partnerships and service delivery</li>
          <li><strong>Legitimate interests:</strong> Customer support, business development</li>
          <li><strong>Consent:</strong> Marketing communications and newsletters</li>
          <li><strong>Legal obligation:</strong> Tax records and compliance</li>
        </ul>

        <h4>4. YOUR RIGHTS UNDER UK GDPR</h4>
        <ul>
          <li>Right to access your personal data</li>
          <li>Right to rectification of incorrect data</li>
          <li>Right to erasure ('right to be forgotten')</li>
          <li>Right to data portability</li>
          <li>Right to object to processing</li>
          <li>Right to withdraw consent</li>
        </ul>

        <h4>5. DATA RETENTION</h4>
        <ul>
          <li>Customer and transaction data: 7 years (HMRC requirements)</li>
          <li>Partnership agreements and payment records: 7 years</li>
          <li>Marketing data: Until consent is withdrawn</li>
          <li>Support records: 3 years after case closure</li>
        </ul>

        <h4>6. COOKIES AND TRACKING</h4>
        <ul>
          <li>Essential cookies for website functionality</li>
          <li>Analytics cookies for website improvement (Google Analytics)</li>
          <li>Marketing cookies with explicit consent</li>
        </ul>

        <h4>7. CONTACT FOR DATA MATTERS</h4>
        <p>For any data protection queries, contact: scentngoo@gmail.com</p>
      `
    },
    refund: {
      title: "Refund Policy",
      content: `
        <h3>REFUND POLICY - ScentNGoo Ltd</h3>
        
        <h4>1. PARTNERSHIP MODEL</h4>
        <ul>
          <li>No refunds applicable (no customer investment)</li>
          <li>Either party may terminate partnership with 30 days notice</li>
          <li>Equipment removal within 14 days of termination</li>
          <li>Final payment settlement within 30 days</li>
        </ul>

        <h4>2. OWNERSHIP MODEL - 30-DAY MONEY-BACK GUARANTEE</h4>
        <ul>
          <li>Full refund available within 30 days of delivery</li>
          <li>Machine must be returned in original condition</li>
          <li>Customer responsible for return shipping costs</li>
          <li>Refund processed within 14 days of return receipt</li>
        </ul>

        <h4>3. CONSUMER RIGHTS ACT 2015</h4>
        <ul>
          <li>14-day cooling-off period for distance sales</li>
          <li>Right to cancel without giving any reason</li>
          <li>Full refund including original delivery costs</li>
          <li>Cancellation must be in writing</li>
        </ul>

        <h4>4. WARRANTY CLAIMS</h4>
        <ul>
          <li>1-year comprehensive hardware warranty</li>
          <li>Free repair or replacement for manufacturing defects</li>
          <li>On-site technical support included</li>
          <li>Excludes damage from misuse or negligence</li>
        </ul>

        <h4>5. REFUND PROCESS</h4>
        <ol>
          <li>Contact scentngoo@gmail.com with your order details</li>
          <li>Receive return authorization and instructions</li>
          <li>Package machine securely for return shipment</li>
          <li>Refund processed upon inspection</li>
        </ol>

        <h4>6. EXCLUSIONS</h4>
        <ul>
          <li>Installation costs (if service completed)</li>
          <li>Consumable items (fragrances, supplies)</li>
          <li>Revenue losses or business interruption</li>
          <li>Damage from normal wear and tear</li>
        </ul>

        <h4>7. DISPUTE RESOLUTION</h4>
        <p>Any disputes will be handled through UK consumer protection services and Alternative Dispute Resolution (ADR) schemes where applicable.</p>
      `
    }
  };

  const faqData = [
    {
      category: "Partnership Model",
      questions: [
        {
          q: "How much do we earn with the partnership model?",
          a: "You receive 20% of all sales revenue. Most locations earn £300-500+ monthly, with high-traffic venues earning £600-800+. Your income grows with machine usage - no caps or limits."
        },
        {
          q: "What are our responsibilities as a partner?",
          a: "Simply provide the space (approximately 2m x 1m) and a standard electrical outlet. We handle everything else: installation, maintenance, restocking, customer service, and payment processing."
        },
        {
          q: "What's the difference between partnership and buying outright?",
          a: "Partnership: £0 investment, earn 20% of sales, we own/maintain equipment. Ownership: £4,999 investment, keep 100% of profits, you own/maintain equipment. Both models are profitable."
        },
        {
          q: "Can we switch from partnership to ownership later?",
          a: "Absolutely! We offer flexible upgrade options. You can purchase your machine at any time with credit for revenue already generated. Many partners choose to buy after seeing the income potential."
        },
        {
          q: "How often do we receive payments?",
          a: "Partnership payments are processed monthly via bank transfer. You'll receive detailed sales reports and can monitor real-time performance through our partner dashboard."
        },
        {
          q: "What if the machine doesn't generate expected income?",
          a: "We're so confident in our product that we guarantee minimum performance standards. If your location doesn't meet expectations within 90 days, we'll relocate the machine at no cost to you."
        }
      ]
    },
    {
      category: "Investment & Returns",
      questions: [
        {
          q: "Is buying the machine outright guaranteed to make money?",
          a: "ROI projections are estimates based on average performance across similar locations. Actual results vary depending on location foot traffic, pricing strategy, and management. We provide comprehensive training and support to maximize your success."
        },
        {
          q: "What exactly is included in the £4,999 investment?",
          a: "Your investment includes: Premium 10-scent vending machine, professional installation, comprehensive training program, starter fragrance pack, mobile app setup, 1-year warranty, ongoing technical support, and marketing materials."
        },
        {
          q: "How quickly can I expect to see returns on ownership?",
          a: "Most customers break even within 3-6 months. High-traffic locations often see positive returns within 6-8 weeks. We provide detailed location analysis to optimize your ROI potential."
        },
        {
          q: "Can I purchase multiple machines?",
          a: "Absolutely! We offer volume discounts for multiple machine purchases. Many successful partners start with partnerships, then purchase additional machines for expansion."
        }
      ]
    },
    {
      category: "Installation & Operation",
      questions: [
        {
          q: "How long does installation take?",
          a: "Professional installation typically takes 2-4 hours. Our certified technicians handle all setup, calibration, and testing. Partners receive a brief orientation, while owners get comprehensive hands-on training."
        },
        {
          q: "Do I need planning permission or special licenses?",
          a: "Generally, no planning permission is required for indoor vending machines. However, you should check with your local council and ensure you have venue owner permission. We provide guidance on all regulatory requirements."
        },
        {
          q: "What are the power and space requirements?",
          a: "The machine requires: Standard UK 3-pin electrical outlet (13A), minimum 2m x 1m floor space, and reasonable ambient temperature (10-30°C). Full technical specifications provided upon agreement."
        },
        {
          q: "How do you restock the fragrances?",
          a: "For partnerships, we handle all restocking automatically. Our smart app alerts us when levels are low, and we schedule refills proactively. For owners, fragrances are delivered directly to your location with easy 10-minute refill process."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          q: "What if the machine breaks down?",
          a: "All machines include comprehensive warranty coverage. We offer 24/7 phone support and can arrange on-site visits within 48 hours for major issues. Most problems can be resolved remotely via our smart diagnostic system."
        },
        {
          q: "How do I monitor sales and performance?",
          a: "Our proprietary mobile app provides real-time data including: daily sales figures, inventory levels, popular fragrances, customer usage patterns, and maintenance alerts. Partners get access to their revenue dashboard."
        },
        {
          q: "What ongoing maintenance is required?",
          a: "Minimal maintenance required! The machine features self-cleaning nozzles and automated diagnostics. For partnerships, we handle everything. For owners: monthly exterior cleaning and supply level monitoring."
        },
        {
          q: "Is training provided?",
          a: "Yes! Partners receive orientation on machine features and revenue tracking. Owners receive comprehensive training: on-site installation tutorial, mobile app guidance, maintenance procedures, and business optimization tips."
        }
      ]
    },
    {
      category: "Business Questions",
      questions: [
        {
          q: "What are the ongoing operational costs?",
          a: "For partnerships: £0 ongoing costs - we handle everything. For ownership: Primary costs are fragrance refills (£50-80/month depending on usage) and minimal electricity (£5-10/month)."
        },
        {
          q: "How do I choose the best location?",
          a: "We provide location analysis consulting! Ideal locations include: fitness centers, upscale pubs, nightclubs, hotels, and premium restaurants. We help evaluate foot traffic, demographics, and revenue potential for both models."
        },
        {
          q: "What payment methods does the machine accept?",
          a: "The machine accepts: contactless cards, chip & PIN, mobile payments (Apple Pay, Google Pay), and can be configured for cash payments. All transactions are processed securely with full compliance."
        },
        {
          q: "Can I customize the fragrance selection?",
          a: "Yes! While we provide a premium starter selection, fragrances can be customized based on location preferences. We offer over 50 premium fragrances and provide sales data to optimize selection."
        }
      ]
    }
  ];

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="logo-container">
            <div className="logo">
              <div className="logo-icon">
                <div className="scent-drop"></div>
                <div className="scent-sparkle"></div>
              </div>
              <span className="logo-text">ScentNGoo</span>
            </div>
          </div>
          <div className="header-right">
            <nav className="nav-menu">
              <a href="#business-models" className="nav-link">{t.nav.businessModels}</a>
              <a href="#opportunity" className="nav-link">{t.nav.opportunity}</a>
              <a href="#product" className="nav-link">{t.nav.product}</a>
              <a href="#testimonials" className="nav-link">{t.nav.success}</a>
              <a href="#invest" className="nav-link">{t.nav.getStarted}</a>
            </nav>
            <div className="header-actions">
              <div className="language-selector">
                <button 
                  className="language-btn"
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                >
                  <span className="flag">{languages[currentLanguage].flag}</span>
                  <span className="lang-code">{languages[currentLanguage].code}</span>
                  <span className="dropdown-arrow">▼</span>
                </button>
                {showLanguageDropdown && (
                  <div className="language-dropdown">
                    {Object.entries(languages).map(([code, lang]) => (
                      <button
                        key={code}
                        className={`language-option ${code === currentLanguage ? 'active' : ''}`}
                        onClick={() => handleLanguageChange(code)}
                      >
                        <span className="flag">{lang.flag}</span>
                        <span className="lang-name">{lang.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <button className="cta-button-header" onClick={() => setShowPartnershipForm(true)}>{t.nav.startPartnership}</button>
            </div>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img src="https://images.unsplash.com/photo-1661422586023-681ea60507e2" alt="Luxury Hotel" className="hero-bg-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="container mx-auto px-6 hero-content">
          <div className={`hero-text ${isVisible ? 'animate-in' : ''}`}>
            <h1 className="hero-title">
              {t.hero.title}
              <span className="gradient-text"> {t.hero.titleHighlight}</span>
            </h1>
            <div style={{textAlign: 'center', margin: '30px 0'}}>
              <img 
                src="https://i.imgur.com/TpNRLbp.jpg" 
                alt="ScentNGoo Vending Machine" 
                style={{
                  maxWidth: '400px', 
                  width: '100%', 
                  height: 'auto', 
                  borderRadius: '15px', 
                  border: '3px solid gold',
                  boxShadow: '0 20px 60px rgba(255, 215, 0, 0.3)'
                }} 
              />
            </div>
            <p className="hero-subtitle">
              {t.hero.subtitle}
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">£0</span>
                <span className="stat-label">{t.stats.investment}</span>
              </div>
              <div className="stat">
                <span className="stat-number">20%</span>
                <span className="stat-label">{t.stats.revenue}</span>
              </div>
              <div className="stat">
                <span className="stat-number">£300-500+</span>
                <span className="stat-label">{t.stats.monthly}</span>
              </div>
            </div>
            <div className="hero-buttons">
              <button className="cta-button-primary" onClick={() => setShowPartnershipForm(true)}>
                {t.hero.ctaPrimary}
              </button>
              <button className="cta-button-secondary" onClick={() => setShowCart(true)}>
                {t.hero.ctaSecondary}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Business Models Section */}
      <section id="business-models" className="business-models-section">
        <div className="container mx-auto px-6 py-20">
          <div className="section-header">
            <h2 className="section-title">{t.businessModels.title}</h2>
            <p className="section-subtitle">{t.businessModels.subtitle}</p>
          </div>
          
          <div className="business-models-grid">
            <div className="business-model-card partnership-card">
              <div className="model-badge recommended">{t.businessModels.partnership.recommended}</div>
              <div className="model-icon">🤝</div>
              <h3>{t.businessModels.partnership.title}</h3>
              <div className="model-price">{t.businessModels.partnership.investment}</div>
              <div className="model-income">{t.businessModels.partnership.income}</div>
              
              <div className="model-features">
                <div className="feature">✅ Zero Investment Required</div>
                <div className="feature">✅ We Install & Maintain Everything</div>
                <div className="feature">✅ You Keep 20% of All Sales</div>
                <div className="feature">✅ Average £300-500+/month Income</div>
                <div className="feature">✅ Zero Risk, Pure Passive Profit</div>
                <div className="feature">✅ No Equipment Responsibility</div>
                <div className="feature">✅ Monthly Automatic Payments</div>
                <div className="feature">✅ Upgrade to Ownership Anytime</div>
              </div>
              
              <button className="model-cta-button" onClick={() => setShowPartnershipForm(true)}>
                {t.businessModels.partnership.cta}
              </button>
              
              <div className="model-example">
                <div className="example-title">Real Income Example:</div>
                <div className="example-revenue">{t.businessModels.partnership.example}</div>
                <div className="example-income">{t.businessModels.partnership.yourIncome}</div>
              </div>
            </div>

            <div className="business-model-card ownership-card">
              <div className="model-badge">{t.businessModels.ownership.badge}</div>
              <div className="model-icon">💰</div>
              <h3>{t.businessModels.ownership.title}</h3>
              <div className="model-price">{t.businessModels.ownership.investment}</div>
              <div className="model-income">{t.businessModels.ownership.income}</div>
              
              <div className="model-features">
                <div className="feature">✅ Own Your Machine Outright</div>
                <div className="feature">✅ Keep 100% of All Profits</div>
                <div className="feature">✅ Full Control & Flexibility</div>
                <div className="feature">✅ Professional Installation Included</div>
                <div className="feature">✅ 1-Year Warranty & Support</div>
                <div className="feature">✅ 30-Day Money Back Guarantee</div>
                <div className="feature">✅ Comprehensive Training Program</div>
                <div className="feature">✅ Average ROI: 3-6 Months</div>
              </div>
              
              <button className="model-cta-button" onClick={() => setShowCart(true)}>
                {t.businessModels.ownership.cta}
              </button>
              
              <div className="model-example">
                <div className="example-title">Real Profit Example:</div>
                <div className="example-revenue">{t.businessModels.ownership.example}</div>
                <div className="example-income">{t.businessModels.ownership.yourProfit}</div>
              </div>
            </div>
          </div>
          
          <div className="models-comparison">
            <h3>Quick Comparison</h3>
            <div className="comparison-table">
              <div className="comparison-header">
                <div className="comparison-cell header-cell"></div>
                <div className="comparison-cell header-cell partnership-header">Partnership</div>
                <div className="comparison-cell header-cell ownership-header">Ownership</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell row-label">Initial Investment</div>
                <div className="comparison-cell partnership-value highlight">£0</div>
                <div className="comparison-cell ownership-value">£4,999</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell row-label">Revenue Share</div>
                <div className="comparison-cell partnership-value">20%</div>
                <div className="comparison-cell ownership-value highlight">100%</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell row-label">Maintenance</div>
                <div className="comparison-cell partnership-value highlight">We Handle</div>
                <div className="comparison-cell ownership-value">You Handle</div>
              </div>
              <div className="comparison-row">
                <div className="comparison-cell row-label">Risk Level</div>
                <div className="comparison-cell partnership-value highlight">Zero Risk</div>
                <div className="comparison-cell ownership-value">Low Risk</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of sections remain the same but I'll include key ones with updates */}
      
      {/* Opportunity Section */}
      <section id="opportunity" className="opportunity-section">
        <div className="container mx-auto px-6 py-20">
          <div className="section-header">
            <h2 className="section-title">The £Multi-Million Fragrance Opportunity</h2>
            <p className="section-subtitle">Tap into the booming £47 billion global fragrance market with zero competition in your area</p>
          </div>
          
          <div className="opportunity-grid">
            <div className="opportunity-card">
              <div className="opportunity-image">
                <img src="https://images.unsplash.com/photo-1661422586023-681ea60507e2" alt="Premium Restaurant" />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3>Premium Restaurants & Pubs</h3>
                <p>Perfect for upscale venues where customers want to smell great before socializing. Partnership income: £300-500/month | Ownership profit: £1,500-2,800/month</p>
                <div className="revenue-badge">High Traffic = High Returns</div>
              </div>
            </div>

            <div className="opportunity-card">
              <div className="opportunity-image">
                <img src="https://images.unsplash.com/photo-1637666067348-7303e7007363" alt="Luxury Fitness Center" />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3>Elite Fitness Centers</h3>
                <p>Gym-goers love fresh scents post-workout. Recurring customers guarantee steady income. Partnership income: £250-420/month | Ownership profit: £1,200-2,100/month</p>
                <div className="revenue-badge">Daily Recurring Users</div>
              </div>
            </div>

            <div className="opportunity-card">
              <div className="opportunity-image">
                <img src="https://images.unsplash.com/photo-1571205019420-41cad6369e94" alt="Upscale Nightclub" />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3>Upscale Nightclubs</h3>
                <p>Premium venues, premium prices. Party-goers pay top dollar for luxury fragrances. Partnership income: £500-800+/month | Ownership profit: £2,500-4,000+/month</p>
                <div className="revenue-badge">Maximum Revenue Potential</div>
              </div>
            </div>
          </div>

          <div className="placement-examples">
            <h3>Perfect Placement Examples</h3>
            <div className="examples-grid">
              <div className="example-item">
                <img src="https://images.unsplash.com/photo-1663659505016-d358722c06c3" alt="Luxury Hotel Bathroom" />
                <div className="example-overlay">
                  <h4>Luxury Hotel Bathrooms</h4>
                  <p>High-end guests expect premium amenities</p>
                </div>
              </div>
              <div className="example-item">
                <img src="https://images.unsplash.com/photo-1651410634315-56a535912396" alt="Premium Bar" />
                <div className="example-overlay">
                  <h4>Premium Bar Areas</h4>
                  <p>Perfect for pre-night out touch-ups</p>
                </div>
              </div>
              <div className="example-item">
                <img src="https://images.pexels.com/photos/1254111/pexels-photo-1254111.jpeg" alt="Fitness Locker Room" />
                <div className="example-overlay">
                  <h4>Fitness Locker Rooms</h4>
                  <p>Post-workout freshness essential</p>
                </div>
              </div>
            </div>
          </div>

          <div className="competitive-advantage">
            <h3>Why ScentNGoo Dominates The Competition</h3>
            <div className="advantage-grid">
              <div className="advantage-item">
                <div className="advantage-icon">10</div>
                <h4>10 Premium Scents</h4>
                <p>Double the variety of competitors (5 scents). More choices = More sales = Higher retention</p>
              </div>
              <div className="advantage-item">
                <div className="advantage-icon">📱</div>
                <h4>Smart App Monitoring</h4>
                <p>Real-time inventory tracking. Know exactly when to refill without visiting. True passive income.</p>
              </div>
              <div className="advantage-item">
                <div className="advantage-icon">625</div>
                <h4>625 Sprays Per Bottle</h4>
                <p>Maximum efficiency means maximum profit. Each 100ml bottle generates £125-£250 revenue.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="product" className="product-section">
        <div className="container mx-auto px-6 py-20">
          <div className="product-showcase">
            <div className="product-hero">
              <div className="product-image-container">
                <img 
                  src="https://i.imgur.com/TpNRLbp.jpg" 
                  alt="ScentNGoo Vending Machine" 
                  style={{
                    width: '100%',
                    maxWidth: '400px',
                    height: 'auto',
                    borderRadius: '20px',
                    boxShadow: '0 20px 60px rgba(255, 215, 0, 0.3)',
                    border: '3px solid rgba(255, 215, 0, 0.4)',
                    display: 'block',
                    margin: '0 auto'
                  }}
                />
              </div>
              <div className="product-image-overlay">
                <div className="feature-callout">
                  <span className="callout-number">10</span>
                  <span className="callout-text">Premium Scents</span>
                </div>
                <div className="feature-callout">
                  <span className="callout-icon">📱</span>
                  <span className="callout-text">App Monitoring</span>
                </div>
              </div>
            </div>
            <div className="product-content">
              <h2 className="product-title">The ScentNGoo Luxury Vending System</h2>
              <p className="product-description">
                State-of-the-art technology meets premium design. Our machines don't just dispense fragrance - 
                they create an experience that customers crave and pay premium prices for.
              </p>
              
              <div className="product-features">
                <div className="feature">
                  <div className="feature-icon">✨</div>
                  <div>
                    <h4>Premium LED Display</h4>
                    <p>Stunning visual interface that attracts customers and showcases all 10 fragrances</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">🔒</div>
                  <div>
                    <h4>Secure Payment System</h4>
                    <p>Accepts cards, contactless, and mobile payments for maximum conversion</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">📊</div>
                  <div>
                    <h4>Real-Time Analytics</h4>
                    <p>Monitor sales, inventory, and performance from anywhere with our mobile app</p>
                  </div>
                </div>
                <div className="feature">
                  <div className="feature-icon">🛠️</div>
                  <div>
                    <h4>Minimal Maintenance</h4>
                    <p>Self-cleaning nozzles and automated diagnostics ensure 99.9% uptime</p>
                  </div>
                </div>
              </div>

              <div className="roi-calculator">
                <h3>Your Income Calculator</h3>
                <div className="calculator-toggle">
                  <button 
                    className={`toggle-btn ${calculatorMode === 'partnership' ? 'active' : ''}`}
                    onClick={() => setCalculatorMode('partnership')}
                  >
                    Partnership (20%)
                  </button>
                  <button 
                    className={`toggle-btn ${calculatorMode === 'ownership' ? 'active' : ''}`}
                    onClick={() => setCalculatorMode('ownership')}
                  >
                    Ownership (100%)
                  </button>
                </div>
                
                <div className="roi-grid">
                  <div className="roi-item">
                    <span className="roi-label">Initial Investment</span>
                    <span className="roi-value">£{calculatorMode === 'partnership' ? '0' : '4,999'}</span>
                  </div>
                  <div className="roi-item">
                    <span className="roi-label">Total Monthly Revenue</span>
                    <span className="roi-value">£{roiResults.monthlyRevenue}</span>
                  </div>
                  <div className="roi-item highlight">
                    <span className="roi-label">Your Monthly Income</span>
                    <span className="roi-value">
                      £{calculatorMode === 'partnership' ? roiResults.partnershipIncome : roiResults.monthlyProfit}
                    </span>
                  </div>
                  <div className="roi-item highlight">
                    <span className="roi-label">Annual Income</span>
                    <span className="roi-value">
                      £{calculatorMode === 'partnership' ? roiResults.yearlyIncome : roiResults.yearlyProfit}+
                    </span>
                  </div>
                </div>
                <button className="roi-calc-button" onClick={() => setShowROICalculator(true)}>
                  Calculate Your Custom Income
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className="testimonials-section">
        <div className="container mx-auto px-6 py-20">
          <div className="section-header">
            <h2 className="section-title">Success Stories From Our Partners & Owners</h2>
            <p className="section-subtitle">Real businesses, real results, real profits from both business models</p>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className={`testimonial-card ${testimonial.type}`}>
                <div className="testimonial-type-badge">
                  {testimonial.type === 'partnership' ? '🤝 Partnership' : '💼 Ownership'}
                </div>
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    <div className="avatar-placeholder">
                      <span className="avatar-initial">{testimonial.name.charAt(0)}</span>
                    </div>
                  </div>
                  <div className="testimonial-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.business}</p>
                    <div className="stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="star">⭐</span>
                      ))}
                    </div>
                  </div>
                  <div className="revenue-highlight">
                    <span className="revenue-amount">{testimonial.revenue}</span>
                    <span className="revenue-label">
                      {testimonial.type === 'partnership' ? 'Partnership Income' : 'Monthly Revenue'}
                    </span>
                  </div>
                </div>
                <div className="testimonial-content">
                  <p>"{testimonial.text}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced FAQ Section */}
      <section id="faq" className="faq-section">
        <div className="container mx-auto px-6 py-20">
          <div className="section-header">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Get answers to common questions about both business models</p>
          </div>
          
          <div className="faq-content">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex} className="faq-category">
                <div className="faq-category-header">
                  <h3 className="faq-category-title">{category.category}</h3>
                </div>
                <div className="faq-questions">
                  {category.questions.map((item, questionIndex) => (
                    <div key={questionIndex} className="faq-item">
                      <div className="faq-question">{item.q}</div>
                      <div className="faq-answer">{item.a}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Investment Section */}
      <section id="invest" className="invest-section">
        <div className="container mx-auto px-6 py-20">
          <div className="invest-content">
            <div className="invest-header">
              <h2 className="invest-title">Choose Your Path to Success</h2>
              <p className="invest-subtitle">Start earning passive income today with either business model</p>
            </div>
            
            <div className="invest-options">
              <div className="invest-option partnership-option">
                <div className="option-badge popular">🏆 MOST POPULAR</div>
                <div className="option-icon">🤝</div>
                <h3>Partnership Model</h3>
                <div className="option-price">£0 Investment</div>
                <div className="option-income">Earn 20% Revenue Share</div>
                
                <div className="option-features">
                  <div className="feature">✅ Zero upfront costs</div>
                  <div className="feature">✅ Free installation & maintenance</div>
                  <div className="feature">✅ Monthly passive income</div>
                  <div className="feature">✅ No equipment responsibility</div>
                  <div className="feature">✅ Guaranteed performance standards</div>
                </div>
                
                <button className="option-cta-button partnership-btn" onClick={() => setShowPartnershipForm(true)}>
                  Start Partnership Today
                </button>
              </div>

              <div className="invest-option ownership-option">
                <div className="option-badge control">💼 FULL CONTROL</div>
                <div className="option-icon">💰</div>
                <h3>Ownership Model</h3>
                <div className="option-price">£4,999 Investment</div>
                <div className="option-income">Keep 100% of Profits</div>
                
                <div className="option-features">
                  <div className="feature">✅ Own equipment outright</div>
                  <div className="feature">✅ Maximum profit potential</div>
                  <div className="feature">✅ 1-year warranty included</div>
                  <div className="feature">✅ 30-day money back guarantee</div>
                  <div className="feature">✅ Comprehensive training program</div>
                </div>
                
                <button className="option-cta-button ownership-btn" onClick={() => setShowCart(true)}>
                  Purchase Machine Now
                </button>
              </div>
            </div>
            
            <div className="guarantee">
              <div className="guarantee-item">🛡️ Both options include full support & maintenance guidance</div>
              <div className="guarantee-item">📞 24/7 customer service for all partners and owners</div>
              <div className="guarantee-item">📈 Average income targets achieved within 90 days</div>
            </div>
          </div>
        </div>
      </section>

      {/* All modals remain the same as in your original code */}
      {/* Enhanced ROI Calculator Modal */}
      {showROICalculator && (
        <div className="modal-overlay" onClick={() => setShowROICalculator(false)}>
          <div className="modal-content roi-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowROICalculator(false)}>×</button>
            <h3>Calculate Your Custom Income</h3>
            
            <div className="calculator-mode-selector">
              <button 
                className={`mode-btn ${calculatorMode === 'partnership' ? 'active' : ''}`}
                onClick={() => setCalculatorMode('partnership')}
              >
                Partnership Model (20% Share)
              </button>
              <button 
                className={`mode-btn ${calculatorMode === 'ownership' ? 'active' : ''}`}
                onClick={() => setCalculatorMode('ownership')}
              >
                Ownership Model (100% Profit)
              </button>
            </div>
            
            <div className="roi-inputs">
              <div className="input-group">
                <label>Location Type</label>
                <select
                  value={roiInputs.location}
                  onChange={(e) => handleROIInputChange('location', e.target.value)}
                >
                  <option value="gym">Fitness Center</option>
                  <option value="pub">Pub/Bar</option>
                  <option value="club">Nightclub</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="hotel">Hotel</option>
                </select>
              </div>
              
              <div className="input-group">
                <label>Daily Foot Traffic</label>
                <input
                  type="number"
                  value={roiInputs.footTraffic}
                  onChange={(e) => handleROIInputChange('footTraffic', parseInt(e.target.value))}
                  min="50"
                  max="2000"
                />
              </div>
              
              <div className="input-group">
                <label>Price per Spray (£)</label>
                <input
                  type="number"
                  value={roiInputs.pricePerSpray}
                  onChange={(e) => handleROIInputChange('pricePerSpray', parseFloat(e.target.value))}
                  min="1"
                  max="5"
                  step="0.5"
                />
              </div>
              
              <div className="input-group">
                <label>Operating Days per Month</label>
                <input
                  type="number"
                  value={roiInputs.operatingDays}
                  onChange={(e) => handleROIInputChange('operatingDays', parseInt(e.target.value))}
                  min="20"
                  max="31"
                />
              </div>
            </div>
            
            <div className="roi-results">
              <h4>Your Projected {calculatorMode === 'partnership' ? 'Partnership Income' : 'Ownership Returns'}</h4>
              <div className="results-grid">
                <div className="result-item">
                  <span className="result-label">Daily Users</span>
                  <span className="result-value">{roiResults.dailyUsers}</span>
                </div>
                <div className="result-item">
                  <span className="result-label">Total Monthly Revenue</span>
                  <span className="result-value">£{roiResults.monthlyRevenue}</span>
                </div>
                <div className="result-item highlight">
                  <span className="result-label">Your Monthly Income</span>
                  <span className="result-value">
                    £{calculatorMode === 'partnership' ? roiResults.partnershipIncome : roiResults.monthlyProfit}
                  </span>
                </div>
                <div className="result-item highlight">
                  <span className="result-label">Annual Income</span>
                  <span className="result-value">
                    £{calculatorMode === 'partnership' ? roiResults.yearlyIncome : roiResults.yearlyProfit}
                  </span>
                </div>
                {calculatorMode === 'ownership' && (
                  <div className="result-item">
                    <span className="result-label">Break-even Period</span>
                    <span className="result-value">{roiResults.breakEvenMonths} months</span>
                  </div>
                )}
                <div className="result-item">
                  <span className="result-label">Initial Investment</span>
                  <span className="result-value">£{roiResults.investment}</span>
                </div>
              </div>
            </div>
            
            <div className="modal-buttons">
              <button className="roi-invest-button partnership" onClick={() => {
                setShowROICalculator(false);
                setShowPartnershipForm(true);
              }}>
                Start Partnership - FREE
              </button>
              <button className="roi-invest-button ownership" onClick={() => {
                setShowROICalculator(false);
                setShowCart(true);
              }}>
                Buy Machine - £4,999
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Partnership Form Modal */}
      {showPartnershipForm && (
        <div className="modal-overlay" onClick={() => setShowPartnershipForm(false)}>
          <div className="modal-content partnership-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowPartnershipForm(false)}>×</button>
            <h3>🤝 Start Your Partnership Journey</h3>
            
            <div className="partnership-content">
              <div className="partnership-info">
                <div className="partnership-highlight">
                  <h4>Partnership Benefits</h4>
                  <div className="benefit-item">💰 Earn 20% of all sales revenue</div>
                  <div className="benefit-item">🆓 Zero investment required</div>
                  <div className="benefit-item">🔧 We handle all maintenance</div>
                  <div className="benefit-item">📊 Monthly income reports</div>
                  <div className="benefit-item">📱 Real-time performance tracking</div>
                  <div className="benefit-item">🎯 Average income: £300-500+/month</div>
                </div>
              </div>
              
              <div className="contact-form">
                <h4>Partnership Application</h4>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for your partnership interest! Our team will contact you within 24 hours to discuss location requirements and finalize your agreement.');
                  setShowPartnershipForm(false);
                }}>
                  <div className="form-group">
                    <input type="text" placeholder="Business Name" required />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Email Address" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" placeholder="Phone Number" required />
                  </div>
                  <div className="form-group">
                    <select required>
                      <option value="">Select Business Type</option>
                      <option value="gym">Fitness Center/Gym</option>
                      <option value="pub">Pub/Bar</option>
                      <option value="club">Nightclub</option>
                      <option value="restaurant">Restaurant</option>
                      <option value="hotel">Hotel</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Business Location (City)" required />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Estimated daily foot traffic and any additional information" rows="3"></textarea>
                  </div>
                  <button type="submit" className="submit-button partnership">
                    🤝 Start Partnership - FREE
                  </button>
                </form>
              </div>
            </div>
            
            <div className="partnership-footer">
              <p>🔒 No commitment until final agreement</p>
              <p>📞 Our team will contact you within 24 hours</p>
              <p>⚡ Installation typically scheduled within 2 weeks</p>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Cart Modal */}
      {showCart && (
        <div className="modal-overlay" onClick={() => setShowCart(false)}>
          <div className="modal-content cart-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowCart(false)}>×</button>
            <h3>💼 Complete Your Machine Purchase</h3>
            
            <div className="cart-content">
              <div className="cart-item">
                <img src="https://i.imgur.com/TpNRLbp.jpg" alt="ScentNGoo System" className="cart-item-image" />
                <div className="cart-item-details">
                  <h4>ScentNGoo Complete Ownership System</h4>
                  <ul>
                    <li>Premium 10-scent vending machine</li>
                    <li>Professional installation & setup</li>
                    <li>Smart app monitoring system</li>
                    <li>Initial fragrance starter pack</li>
                    <li>Comprehensive training program</li>
                    <li>1-year warranty & support</li>
                    <li>Marketing materials & signage</li>
                  </ul>
                  <div className="cart-price">£4,999</div>
                  <div className="cart-roi">Expected ROI: 3-6 months</div>
                </div>
              </div>
              
              <div className="contact-form">
                <h4>Purchase Information</h4>
                <form onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for your purchase interest! We will contact you within 24 hours to process your order and arrange installation.');
                  setShowCart(false);
                }}>
                  <div className="form-group">
                    <input type="text" placeholder="Full Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Email Address" required />
                  </div>
                  <div className="form-group">
                    <input type="tel" placeholder="Phone Number" required />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Business Name" required />
                  </div>
                  <div className="form-group">
                    <textarea placeholder="Installation Location & Any Special Requirements" rows="3"></textarea>
                  </div>
                  <button type="submit" className="submit-button ownership">
                    💰 Secure Your Machine - £4,999
                  </button>
                </form>
                
                <div className="payment-options">
                  <p>💳 Payment options available:</p>
                  <ul>
                    <li>Full payment: £4,999</li>
                    <li>Finance option: £208/month (24 months)</li>
                    <li>Lease-to-own: £275/month (18 months)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="cart-footer">
              <p>🔒 Secure payment processing</p>
              <p>📞 Our team will contact you within 24 hours</p>
              <p>⚡ Installation typically scheduled within 2 weeks</p>
              <p>🛡️ 30-day money-back guarantee</p>
            </div>
          </div>
        </div>
      )}

      {/* Legal Modal */}
      {showLegalModal && (
        <div className="modal-overlay" onClick={() => setShowLegalModal(null)}>
          <div className="modal-content legal-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowLegalModal(null)}>×</button>
            <div className="legal-content">
              <h2>{legalContent[showLegalModal].title}</h2>
              <div dangerouslySetInnerHTML={{ __html: legalContent[showLegalModal].content }} />
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container mx-auto px-6 py-12">
          <div className="footer-content">
            <div className="footer-section">
              <div className="logo">
                <div className="logo-icon">
                  <div className="scent-drop"></div>
                  <div className="scent-sparkle"></div>
                </div>
                <span className="logo-text">ScentNGoo</span>
              </div>
              <p>Transforming businesses into luxury fragrance success stories with two profitable business models.</p>
            </div>
            
            <div className="footer-section">
              <h4>Business Models</h4>
              <ul>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setShowPartnershipForm(true); }}>Partnership Model</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setShowCart(true); }}>Ownership Model</a></li>
                <li><a href="#business-models" onClick={() => scrollToSection('business-models')}>Compare Models</a></li>
                <li><a href="#testimonials" onClick={() => scrollToSection('testimonials')}>Success Stories</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setShowPartnershipForm(true); }}>Customer Service</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>Technical Support</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); setShowROICalculator(true); }}>Income Calculator</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); scrollToSection('faq'); }}>FAQ</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Contact</h4>
              <p>📧 scentngoo@gmail.com</p>
              <p>📞 +44 (0) 20 7946 0958</p>
              <p>🌐 www.scentngoo.com</p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2025 ScentNGoo. All rights reserved. | 
              <a href="#" onClick={(e) => { e.preventDefault(); setShowLegalModal('privacy'); }}> Privacy Policy</a> | 
              <a href="#" onClick={(e) => { e.preventDefault(); setShowLegalModal('terms'); }}> Terms of Service</a> | 
              <a href="#" onClick={(e) => { e.preventDefault(); setShowLegalModal('refund'); }}> Refund Policy</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
