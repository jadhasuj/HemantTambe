"use client";
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

type Locale = "en" | "mr";

type Feature = {
  title: string;
  text: string;
};

type Project = {
  title: string;
  text: string;
  image: string;
};

type Content = {
  nav: {
    home: string;
    about: string;
    services: string;
    work: string;
    projects: string;
    contact: string;
  };
  actions: {
    call: string;
    whatsapp: string;
    email: string;
    map: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    lead: string;
    panelTitle: string;
    panelLines: string[];
  };
  intro: {
    eyebrow: string;
    title: string;
    body: string;
  };
  services: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  workModes: {
    eyebrow: string;
    title: string;
    items: Feature[];
  };
  experience: {
    eyebrow: string;
    title: string;
    items: Feature[];
  };
  costing: {
    eyebrow: string;
    title: string;
    body: string;
    bullets: string[];
  };
  whyEngineer: {
    eyebrow: string;
    title: string;
    bullets: string[];
  };
  team: {
    eyebrow: string;
    title: string;
    body: string;
    bullets: string[];
  };
  permits: {
    eyebrow: string;
    title: string;
    bullets: string[];
  };
  network: {
    eyebrow: string;
    title: string;
    canConnectTitle: string;
    canConnect: string[];
    lookingForTitle: string;
    lookingFor: string[];
  };
  projects: {
    eyebrow: string;
    title: string;
    items: Project[];
  };
  coverage: {
    eyebrow: string;
    title: string;
    body: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    role: string;
    addressLines: string[];
  };
  footer: {
    brand: string;
    tagline: string;
    note: string;
  };
};

const officeAddress =
  "Panchawati Complex, Hadapsar Gaon, Hadapsar, Pune, Maharashtra 411028, India";
const mapUrl = "https://maps.app.goo.gl/hi1WhpziM7oUxftN9";
const mapQuery = encodeURIComponent(officeAddress);
const whatsAppMessages: Record<Locale, string> = {
  en: "Hello Hemant Tambe, I would like to discuss civil work / construction requirements in Pune.",
  mr: "नमस्कार हेमंत तांबे सर, मला पुण्यात सिव्हिल वर्क / बांधकाम कामाबद्दल चर्चा करायची आहे.",
};

const localBusinessSchemas: Record<Locale, object> = {
  en: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://hmtambe.com/#localbusiness",
    name: "HMT Hemant Maruti Tambe",
    alternateName: "Hemant Maruti Tambe",
    slogan: "Constructing Concepts",
    description:
      "Civil engineer and civil works contractor serving Pune city and Pune district.",
    inLanguage: "en-IN",
    image: "/hmt-logo.jpeg",
    url: "https://hmtambe.com",
    telephone: ["+91 9595341818", "+91 9175251338"],
    email: "hemantmarutitambe@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Panchawati Complex, Hadapsar Gaon, Hadapsar",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411028",
      addressCountry: "IN",
    },
    areaServed: ["Pune city", "Pune district"],
    founder: {
      "@type": "Person",
      name: "Hemant Maruti Tambe",
      jobTitle: "Managing Director",
    },
  },
  mr: {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://hmtambe.com/mr#localbusiness",
    name: "HMT हेमंत मारुती तांबे",
    alternateName: "हेमंत मारुती तांबे",
    slogan: "Constructing Concepts",
    description:
      "पुणे शहर आणि पुणे जिल्ह्यात सिव्हिल वर्क्स, बांधकाम कॉन्ट्रॅक्ट, परवाने आणि विकास सहाय्य सेवा.",
    inLanguage: "mr-IN",
    image: "/hmt-logo.jpeg",
    url: "https://hmtambe.com/mr",
    telephone: ["+91 9595341818", "+91 9175251338"],
    email: "hemantmarutitambe@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Panchawati Complex, Hadapsar Gaon, Hadapsar",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411028",
      addressCountry: "IN",
    },
    areaServed: ["Pune city", "Pune district"],
    founder: {
      "@type": "Person",
      name: "Hemant Maruti Tambe",
      jobTitle: "Managing Director",
    },
  },
};

const websiteSchemas: Record<Locale, object> = {
  en: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://hmtambe.com/#website",
    url: "https://hmtambe.com",
    name: "HMT Hemant Maruti Tambe",
    inLanguage: "en-IN",
    description:
      "Civil works contractor and construction services in Pune city and Pune district.",
    publisher: {
      "@type": "Organization",
      name: "HMT Hemant Maruti Tambe",
      logo: {
        "@type": "ImageObject",
        url: "https://hmtambe.com/hmt-logo.jpeg",
      },
    },
  },
  mr: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://hmtambe.com/mr#website",
    url: "https://hmtambe.com/mr",
    name: "HMT हेमंत मारुती तांबे",
    inLanguage: "mr-IN",
    description:
      "पुणे शहर आणि पुणे जिल्ह्यात सिव्हिल वर्क्स आणि बांधकाम सेवा.",
    publisher: {
      "@type": "Organization",
      name: "HMT Hemant Maruti Tambe",
      logo: {
        "@type": "ImageObject",
        url: "https://hmtambe.com/hmt-logo.jpeg",
      },
    },
  },
};

const content: Record<Locale, Content> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      work: "How We Work",
      projects: "Projects",
      contact: "Contact",
    },
    actions: {
      call: "Call Hemant Tambe",
      whatsapp: "WhatsApp",
      email: "Send Email",
      map: "Open Office Location",
    },
    hero: {
      eyebrow: "Civil Engineer and Civil Works Contractor",
      title: "Your dream home, our effort.",
      lead:
        "Hemant Maruti Tambe leads HMT and Vastushrish Associates, delivering civil works, development support, approvals, contracting, and end-to-end building execution across Pune city and Pune district.",
      panelTitle: "Constructing Concepts",
      panelLines: [
        "PMC, PWD, ZP and private contracts",
        "Approvals from measurement to municipal sanction",
        "Execution from excavation to handover",
      ],
    },
    intro: {
      eyebrow: "Company Profile",
      title: "Technical leadership backed by execution on the ground.",
      body:
        "Hemant Maruti Tambe, Managing Director, completed B.E. Civil from AISSMS Pune University in May 2006, worked in employment during 2008-2009, and has been running his own business since 2009. The presentation positions the firm as a practical partner for approvals, development, contracting, and complete construction delivery.",
    },
    services: {
      eyebrow: "Service Lines",
      title: "Approvals, contracting, development, and turnkey construction.",
      items: [
        "Vastushrish Associates for land measurement, PMC, PMRDA, PCMC, and municipal approvals",
        "Turnkey delivery from excavation to final lock-and-key handover",
        "PMC, PWD, ZP, and private civil contracts",
        "Tender participation for institutions, companies, and private works",
        "Complete bungalow and building construction with legal approvals where required",
        "Joint venture and self-development project execution",
      ],
    },
    workModes: {
      eyebrow: "How We Work",
      title: "Four practical ways HMT takes projects forward.",
      items: [
        {
          title: "Tender and contract execution",
          text: "We fill and execute tenders for PMC, PWD, private clients, institutions, and companies.",
        },
        {
          title: "Full building construction",
          text: "We deliver complete bungalow and building projects, including legal permissions when the client wants support.",
        },
        {
          title: "Buy, complete, build, and sell",
          text: "We acquire sites, complete the required legal process, construct on them, and bring them to market.",
        },
        {
          title: "Joint venture development",
          text: "Landowner brings the site, we handle permissions and construction, and the project is developed under a typical landowner/developer sharing model.",
        },
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Employment work, personal projects, and active pipeline.",
      items: [
        {
          title: "Employment experience",
          text: "Aryan Parking at Tulshibaug upper floor, fourth-floor school building at Yerwada, and center line with first floor at Naidu Hospital.",
        },
        {
          title: "Independent project experience",
          text: "Cement concrete road works, 32 completed bungalows, 9 completed buildings, 1 joint venture project, 1 self-owned building, and industrial work for Meenakshi Metal Firm in Ambethan MIDC.",
        },
        {
          title: "Completed this year",
          text: "Around 7,000 sq. ft. of completed construction including Madhavbaug Ashram at Maharshi Nagar and a private bungalow in Bhekarai Nagar, Hadapsar, plus renovation of a five-storey building at Madhavbaug Ashram.",
        },
        {
          title: "Incoming work",
          text: "Joint venture projects in Narayan Peth covering 5,500 sq. ft. and in Sadashiv Peth covering 12,500 sq. ft.",
        },
        {
          title: "Success story",
          text: "After seeing the Madhav Ashram work, the client entrusted HMT with a 1.7 crore assignment for Trivedi Hostel.",
        },
      ],
    },
    costing: {
      eyebrow: "Cost Planning",
      title: "Construction cost is explained in practical decision buckets.",
      body:
        "The presentation breaks construction cost into simple working views so clients can understand where money goes before execution begins.",
      bullets: [
        "Material, labour, and other expenses",
        "Cost analysis by material category",
        "Cost planning by stage or division of work",
      ],
    },
    whyEngineer: {
      eyebrow: "Why Technical Execution",
      title: "Why construction should be handled by technical professionals.",
      bullets: [
        "Projects can be aligned with the available budget.",
        "Timelines are controlled more reliably.",
        "Good planning reduces waste and unnecessary expense.",
        "Quality assurance improves when the right material is used in the right quantity.",
        "The deck specifically mentions FE500 steel and M25 concrete as disciplined material choices.",
        "Clean planning reduces demolition and rework costs.",
        "Better layout improves airflow and natural sunlight in the home.",
        "Good daylight design reduces daytime electricity use.",
      ],
    },
    team: {
      eyebrow: "Team Strength",
      title: "A technical network instead of a single-point contractor model.",
      body:
        "The presentation emphasizes that Hemant Tambe works with other technical collaborators so clients get support from multiple qualified professionals.",
      bullets: [
        "Hemant M. Tambe - B.E. Civil",
        "Vishal Gote - B.E. Civil",
        "Vrushali Jogdand - B. Arch / design support",
      ],
    },
    permits: {
      eyebrow: "Approvals Matter",
      title: "Why legal approvals and sanctioned construction matter.",
      bullets: [
        "Approved structures command stronger asset value.",
        "Banks treat approved properties more favorably.",
        "Government-side complications are reduced.",
        "Unexpected compliance costs are avoided.",
        "Buying and selling becomes easier.",
        "Proper planning reduces future trouble for owners.",
      ],
    },
    network: {
      eyebrow: "Referral Network",
      title: "Who HMT can connect with and who HMT is looking for.",
      canConnectTitle: "Can connect you with",
      canConnect: [
        "Architects and design professionals",
        "Structural engineers",
        "Rieter India",
        "Amanora Park Town",
        "Praj Group",
        "Support for government contracting opportunities",
      ],
      lookingForTitle: "Ideal introductions",
      lookingFor: [
        "People who want to build their own house, bungalow, or building",
        "Landowners who want to enter a joint venture arrangement",
        "Companies expecting civil or construction-related work",
      ],
    },
    projects: {
      eyebrow: "Project Gallery",
      title: "Rendered concepts, active sites, and completed work from the presentation.",
      items: [
        {
          title: "Completed campus-scale residential building",
          text: "A built project shown in the deck as a finished multi-unit structure.",
          image: "/presentation/completed-campus-building.jpeg",
        },
        {
          title: "Concept render for a campus block",
          text: "Presentation visual showing planning and façade intent before execution.",
          image: "/presentation/concept-render-campus.jpeg",
        },
        {
          title: "Excavation and site start",
          text: "Early-stage foundation and earthwork activity from the deck.",
          image: "/presentation/excavation-work.jpeg",
        },
        {
          title: "Mid-rise structural progress",
          text: "Ongoing reinforced concrete and masonry structure captured during execution.",
          image: "/presentation/midrise-structure-1.jpeg",
        },
        {
          title: "Facade progress on apartment work",
          text: "A project moving toward the finishing stage, showing external development.",
          image: "/presentation/apartment-facade-progress.jpeg",
        },
        {
          title: "Finished apartment elevation",
          text: "Completed external finish and color treatment from the portfolio slides.",
          image: "/presentation/apartment-facade-finish.jpeg",
        },
        {
          title: "Large housing block",
          text: "A larger built massing example from the deck's project photographs.",
          image: "/presentation/large-housing-block.jpeg",
        },
        {
          title: "Residential render option",
          text: "Architectural visualization used to communicate the final built intent to clients.",
          image: "/presentation/residential-render.jpeg",
        },
        {
          title: "Completed bungalow landscape view",
          text: "Presentation image showing completed detached residential work.",
          image: "/presentation/bungalow-completion.jpeg",
        },
      ],
    },
    coverage: {
      eyebrow: "Service Area",
      title: "Focused on Pune city and Pune district.",
      body:
        "The presentation and existing business profile both point to work across Pune city, Hadapsar, Maharshi Nagar, Narayan Peth, Sadashiv Peth, Chakan, Ambethan MIDC, and wider Pune district opportunities.",
    },
    contact: {
      eyebrow: "Contact",
      title: "Discuss approvals, contracting, development, or full construction work.",
      role: "Managing Director, HMT",
      addressLines: [
        "Panchawati Complex",
        "Hadapsar Gaon, Hadapsar",
        "Pune, Maharashtra 411028",
      ],
    },
    footer: {
      brand: "HMT Hemant Maruti Tambe",
      tagline: "Constructing Concepts",
      note: "English is the default view. Marathi content from the SCGT presentation is available with one switch.",
    },
  },
  mr: {
    nav: {
      home: "मुख्यपृष्ठ",
      about: "माहिती",
      services: "सेवा",
      work: "कामाची पद्धत",
      projects: "प्रकल्प",
      contact: "संपर्क",
    },
    actions: {
      call: "हेमंत तांबे यांना कॉल करा",
      whatsapp: "व्हॉट्सॲप",
      email: "ईमेल पाठवा",
      map: "ऑफिस लोकेशन उघडा",
    },
    hero: {
      eyebrow: "सिव्हिल इंजिनिअर आणि सिव्हिल वर्क्स कॉन्ट्रॅक्टर",
      title: "घराचे स्वप्न तुमचे... प्रयत्न आमचे!",
      lead:
        "हेमंत मारुती तांबे यांच्या नेतृत्वाखाली HMT आणि वास्तुश्रीश असोसिएट्स पुणे शहर व पुणे जिल्ह्यात परवाने, कॉन्ट्रॅक्ट, डेव्हलपमेंट आणि संपूर्ण बांधकामाची कामे करतात.",
      panelTitle: "Constructing Concepts",
      panelLines: [
        "PMC, PWD, ZP आणि वैयक्तिक कॉन्ट्रॅक्ट",
        "सरकारी मोजणीपासून महानगरपालिका मंजुरीपर्यंत",
        "खोदाईपासून कुलूप लावून देण्यापर्यंत",
      ],
    },
    intro: {
      eyebrow: "स्वतःबद्दल माहिती",
      title: "तांत्रिक शिक्षणासह प्रत्यक्ष कामाचा अनुभव.",
      body:
        "हेमंत मारुती तांबे (व्यवस्थापकीय संचालक) यांनी बी. ई. सिव्हिल शिक्षण मे २००६ साली पूर्ण केले. २००८ ते २००९ नोकरीचा अनुभव घेतल्यानंतर २००९ पासून स्वतःचा व्यवसाय सुरू आहे. सादरीकरणात ही भूमिका मंजुरी, डेव्हलपमेंट, कॉन्ट्रॅक्ट आणि संपूर्ण बांधकाम भागीदार म्हणून मांडली आहे.",
    },
    services: {
      eyebrow: "आमच्या सेवा",
      title: "मंजुरी, कॉन्ट्रॅक्ट, डेव्हलपमेंट आणि टर्नकी बांधकाम.",
      items: [
        "वास्तुश्रीश असोसिएट्स - सरकारी मोजणी, PMC, PMRDA, PCMC आणि नगरपालिकेच्या मंजुऱ्या",
        "खोदाईपासून कुलूप लावून देण्यापर्यंत संपूर्ण बांधकाम",
        "PMC, PWD, ZP आणि वैयक्तिक कॉन्ट्रॅक्ट",
        "संस्था, कंपनी आणि इतर टेंडर भरून कामे करणे",
        "वैयक्तिक बंगला किंवा इमारतीचे संपूर्ण बांधकाम आणि गरज असल्यास कायदेशीर परवाने",
        "जॉइंट व्हेंचर आणि स्वतःचे विकास प्रकल्प",
      ],
    },
    workModes: {
      eyebrow: "आम्ही मुख्यतः चार प्रकारे कामे करतो",
      title: "प्रकल्प पुढे नेण्याच्या चार व्यावहारिक पद्धती.",
      items: [
        {
          title: "टेंडर आणि कॉन्ट्रॅक्ट कामे",
          text: "PMC, PWD, वैयक्तिक, संस्था आणि कंपनी यांचे टेंडर भरून कामे पूर्ण करतो.",
        },
        {
          title: "संपूर्ण बांधकाम",
          text: "वैयक्तिक बंगला आणि इमारतीचे पूर्ण बांधकाम करतो, तसेच हवे असल्यास कायदेशीर परवानेही काढतो.",
        },
        {
          title: "जागा विकत घेऊन बांधकाम आणि विक्री",
          text: "जागा विकत घेऊन, कायदेशीर प्रक्रिया पूर्ण करून, बांधकाम करून ती विकतो.",
        },
        {
          title: "जे व्ही डेव्हलपमेंट",
          text: "जागा तुमची आणि परवाने व बांधकाम आमचे - या तत्त्वावर डेव्हलपमेंट करार करून जागा विकसित करतो.",
        },
      ],
    },
    experience: {
      eyebrow: "अनुभव",
      title: "नोकरीचा अनुभव, वैयक्तिक कामे आणि सुरू असलेली कामे.",
      items: [
        {
          title: "नोकरीतील अनुभव",
          text: "आर्यन पार्किंग - तुळशीबाग वरचा मजला, येरवडा येथील शाळेच्या इमारतीचा चौथा मजला, आणि नायडू हॉस्पिटल येथील सेंटर लाईन व पहिला मजला.",
        },
        {
          title: "वैयक्तिक कामाचा अनुभव",
          text: "सिमेंट काँक्रीट रस्ते, ३२ पूर्ण बंगले, ९ पूर्ण इमारती, १ जे व्ही प्रोजेक्ट, १ स्वतःची इमारत, आणि मीनाक्षी मेटल फर्म - आंबेठाण MIDC चे कंपनी काम.",
        },
        {
          title: "या वर्षात पूर्णत्वास आलेली कामे",
          text: "सुमारे ७००० चौ. फु. बांधकाम - माधवबाग आश्रम, महर्षी नगर, भेकराई नगर हडपसर येथील वैयक्तिक बंगला, तसेच पाच मजली इमारतीचे रिनोवेशन.",
        },
        {
          title: "या वर्षात येणारी कामे",
          text: "नारायण पेठ ५५०० चौ. फु. जे व्ही आणि सदाशिव पेठ १२५०० चौ. फु. जे व्ही.",
        },
        {
          title: "यश कथा",
          text: "माधव आश्रमचे काम पाहून त्यांनी आम्हाला त्रिवेदी हॉस्टेलचे १.७ कोटींचे काम दिले आहे.",
        },
      ],
    },
    costing: {
      eyebrow: "बांधकाम खर्चाचे विभागीकरण",
      title: "बांधकामाचा खर्च व्यावहारिक अशा पद्धतीने विभागला जातो.",
      body:
        "बांधकामाचा खर्च सहजबोधक अशा पद्धतीने समजण्यासाठी विविध श्रेणींमध्ये विभागला जातो.",
      bullets: [
        "साहित्य, मजुरी आणि इतर खर्च",
        "साहित्यानुसार विभागणी",
        "विभागशः नियोजन",
      ],
    },
    whyEngineer: {
      eyebrow: "अभियंत्याकडून बांधकाम का करावे",
      title: "अभियंत्याकडून बांधकाम केल्याचे मुख्य फायदे.",
      bullets: [
        "बांधकाम तुमच्या बजेटमध्ये बसवता येते.",
        "काम वेळेवर पूर्ण होते.",
        "योग्य नियोजनामुळे अनावश्यक खर्च वाचतो.",
        "दुर्घटनांमुळे होणारे अतिरिक्त खर्च टळतात.",
        "चांगल्या दर्जाच्या कामाची हमी मिळते.",
        "योग्य प्रमाणात योग्य साहित्य वापरल्यामुळे संरचनेची मजबुती वाढते.",
        "FE500 स्टील आणि M25 काँक्रीट यासारख्या उच्च दर्जाच्या साहित्याचा वापर.",
        "सुव्यवस्थित नकाशा साकारल्यामुळे पुनर्बांधकाम आणि तोडफोडीचा खर्च वाचतो.",
        "घरातील हवा आणि सूर्यकिरणांचा सुयोग्य संचार वाढतो, दिवसा विजेची गरज कमी होते.",
      ],
    },
    team: {
      eyebrow: "आमच्याकडून काम का करून घ्यावे",
      title: "एकट्या व्यक्तीऐवजी तांत्रिक टीमचा आधार.",
      body:
        "हेमंत तांबे आणि माझे सहकारी मिळून विविध क्षेत्रात तांत्रिक मदत आणि मार्गदर्शन देऊ शकतात.",
      bullets: [
        "हेमंत मा. तांबे - बी. ई. (सिव्हिल)",
        "विशाल गोटे - बी. ई. (सिव्हिल)",
        "वृषाली जोगदंड - बी. आर्क. (डिझाइन सहाय्य)",
      ],
    },
    permits: {
      eyebrow: "परवाना काढूनच बांधकाम का करावे",
      title: "मंजूर बांधकामाचे व्यावहारिक लाभ.",
      bullets: [
        "मंजूर बांधकामाची वास्तूची मार्केट व्हॅल्यू वाढते.",
        "बँकांमध्ये कर्ज आणि गहाण सुलभ होते.",
        "सरकारी कागदपत्रांशी संबंधित अडचणी येत नाहीत.",
        "भविष्यात सरकारी कर किंवा पेनल्टी टळतात.",
        "खरेदी-विक्रीची प्रक्रिया सोपी होते.",
        "योग्य नियोजन आणि मंजुरीने भविष्यातील कायदेशीर त्रास कमी होतो.",
      ],
    },
    network: {
      eyebrow: "नेटवर्क आणि संपर्क",
      title: "HMT कोणाशी जोडून देऊ शकते आणि कोणाचे रेफरल शोधत आहे.",
      canConnectTitle: "आम्ही जोडून देऊ शकतो",
      canConnect: [
        "वास्तुविशारद आणि डिझाइन व्यावसायिक",
        "संरचना अभियंते",
        "कृषि उद्योग संबंधी कंपन्या",
        "वाणिज्य आणि आवास विकास कंपन्या",
        "उद्योग गट (Rieter, Amanora, Praj इत्यादी)",
        "सरकारी ठेका भरण्यासाठी सहाय्य",
      ],
      lookingForTitle: "आमचे आदर्श संपर्क",
      lookingFor: [
        "ज्यांना स्वतःचे घर, बंगला किंवा इमारत बांधायचे आहे",
        "ज्यांना जमीन जे व्ही तत्वावर विकसित करायची आहे",
        "ज्यांना सिव्हिल वर्क्स किंवा बांधकामाशी संबंधित कामे आहेत",
      ],
    },
    projects: {
      eyebrow: "प्रकल्प आणि छायाचित्रे",
      title: "सादरीकरणातील संकल्पचित्रे, सुरू असलेली कामे आणि पूर्ण कामे.",
      items: [
        {
          title: "पूर्ण झालेले कॅम्पस प्रकारचे बांधकाम",
          text: "सादरीकरणात दाखवलेले पूर्ण झालेले बहुउद्देशीय निवासी बांधकाम.",
          image: "/presentation/completed-campus-building.jpeg",
        },
        {
          title: "कॅम्पस ब्लॉकचे संकल्पचित्र",
          text: "काम सुरू होण्यापूर्वीच्या डिझाइन आणि फसाड कल्पना दाखवणारे दृश्य.",
          image: "/presentation/concept-render-campus.jpeg",
        },
        {
          title: "खोदाई आणि सुरुवातीचे काम",
          text: "फाउंडेशन आणि सुरुवातीच्या साइटवर्कचे छायाचित्र.",
          image: "/presentation/excavation-work.jpeg",
        },
        {
          title: "स्ट्रक्चर प्रगती - मध्यम उंचीची इमारत",
          text: "आरसीसी आणि बांधकाम स्ट्रक्चर प्रगतीतील प्रत्यक्ष साइट फोटो.",
          image: "/presentation/midrise-structure-1.jpeg",
        },
        {
          title: "अपार्टमेंट फसाड प्रगती",
          text: "फिनिशिंगच्या टप्प्यातील बाह्य कामांची स्थिती.",
          image: "/presentation/apartment-facade-progress.jpeg",
        },
        {
          title: "पूर्ण झालेली बाह्य फिनिश",
          text: "पोर्टफोलिओ स्लाइडमधील पूर्ण रंगसंगती आणि फसाड दाखवणारे छायाचित्र.",
          image: "/presentation/apartment-facade-finish.jpeg",
        },
        {
          title: "मोठ्या हाउसिंग ब्लॉकचे उदाहरण",
          text: "मोठ्या प्रमाणातील बांधकाम क्षमतेचे सादरीकरणातील उदाहरण.",
          image: "/presentation/large-housing-block.jpeg",
        },
        {
          title: "निवासी संकल्पचित्र",
          text: "ग्राहकांशी अंतिम डिझाइन कल्पना संवादासाठी वापरलेले व्हिज्युअल.",
          image: "/presentation/residential-render.jpeg",
        },
        {
          title: "पूर्ण झालेला बंगला",
          text: "पूर्ण झालेल्या स्वतंत्र निवासी प्रकल्पाचे छायाचित्र.",
          image: "/presentation/bungalow-completion.jpeg",
        },
      ],
    },
    coverage: {
      eyebrow: "कामाचा परिसर",
      title: "पुणे शहर आणि पुणे जिल्ह्यावर लक्ष केंद्रित.",
      body:
        "सादरीकरणात आणि विद्यमान प्रोफाइलमध्ये हडपसर, महर्षी नगर, नारायण पेठ, सदाशिव पेठ, चाकण, आंबेठाण MIDC आणि पुणे जिल्ह्यातील प्रकल्प संधींचा स्पष्ट उल्लेख आहे.",
    },
    contact: {
      eyebrow: "संपर्क",
      title: "मंजुरी, कॉन्ट्रॅक्ट, डेव्हलपमेंट किंवा संपूर्ण बांधकामासाठी संपर्क करा.",
      role: "व्यवस्थापकीय संचालक, HMT",
      addressLines: [
        "ऑफिस नं. १०, पंचवटी कॉम्प्लेक्स",
        "वैभव थिएटर जवळ, हडपसर",
        "पुणे ४११०२८",
      ],
    },
    footer: {
      brand: "HMT हेमंत मारुती तांबे",
      tagline: "Constructing Concepts",
      note: "इंग्रजी आणि मराठी अशा दोन्ही भाषांमध्ये माहिती उपलब्ध आहे.",
    },
  },
};

function WhatsAppMark() {
  return (
    <span className="whatsappMark" aria-hidden="true">
      <svg viewBox="0 0 24 24" role="img">
        <path d="M12 3.25a8.42 8.42 0 0 0-7.18 12.84l-.9 3.54 3.61-.84A8.42 8.42 0 1 0 12 3.25Zm0 1.55a6.88 6.88 0 0 1 5.86 10.49 6.88 6.88 0 0 1-8.08 2.45l-.26-.12-2.2.51.55-2.12-.16-.27A6.88 6.88 0 0 1 12 4.8Zm-2.4 3.63c-.15 0-.38.04-.58.26-.2.22-.76.74-.76 1.8 0 1.06.78 2.09.88 2.23.11.14 1.53 2.38 3.76 3.24 1.86.72 2.24.58 2.65.54.4-.04 1.31-.54 1.5-1.05.18-.52.18-.96.12-1.05-.05-.09-.2-.14-.43-.26-.23-.11-1.34-.66-1.55-.74-.21-.07-.36-.11-.51.12-.15.22-.59.73-.72.88-.13.15-.27.17-.5.06-.23-.12-.96-.35-1.83-1.12-.68-.6-1.13-1.35-1.27-1.58-.13-.22-.01-.34.1-.46.1-.1.23-.27.34-.4.12-.13.15-.22.23-.37.08-.15.04-.28-.02-.4-.06-.11-.5-1.2-.69-1.65-.18-.43-.36-.44-.5-.45l-.42-.01Z" />
      </svg>
    </span>
  );
}

function PhoneMark() {
  return (
    <span className="actionMark" aria-hidden="true">
      <svg viewBox="0 0 24 24" role="img">
        <path d="M7.1 3.25A2.6 2.6 0 0 0 4.6 6.5c.13 1.7.64 3.34 1.5 4.8A19.7 19.7 0 0 0 12.7 18a19.7 19.7 0 0 0 4.79 1.49 2.6 2.6 0 0 0 2.98-2.34l.2-1.84a1.8 1.8 0 0 0-1.15-1.86l-2.46-.93a1.8 1.8 0 0 0-1.86.41l-.92.93a14.6 14.6 0 0 1-4.1-4.1l.93-.92a1.8 1.8 0 0 0 .4-1.86l-.92-2.46A1.8 1.8 0 0 0 8.74 3.3L7.1 3.25Z" />
      </svg>
    </span>
  );
}

function MailMark() {
  return (
    <span className="actionMark" aria-hidden="true">
      <svg viewBox="0 0 24 24" role="img">
        <path d="M4 5.25h16A2.75 2.75 0 0 1 22.75 8v8A2.75 2.75 0 0 1 20 18.75H4A2.75 2.75 0 0 1 1.25 16V8A2.75 2.75 0 0 1 4 5.25Zm0 1.5c-.45 0-.85.21-1.12.53L12 13.8l9.12-6.52A1.24 1.24 0 0 0 20 6.75H4Zm17.25 2.37-8.6 6.15a1.15 1.15 0 0 1-1.3 0l-8.6-6.15V16c0 .69.56 1.25 1.25 1.25h16c.69 0 1.25-.56 1.25-1.25V9.12Z" />
      </svg>
    </span>
  );
}

function MapPinMark() {
  return (
    <span className="actionMark" aria-hidden="true">
      <svg viewBox="0 0 24 24" role="img">
        <path d="M12 2.5a7 7 0 0 0-7 7c0 4.95 5.44 10.89 6.05 11.55a1.3 1.3 0 0 0 1.9 0C13.56 20.39 19 14.45 19 9.5a7 7 0 0 0-7-7Zm0 9.6a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2Z" />
      </svg>
    </span>
  );
}

export default function Home() {
  const pathname = usePathname();
  const router = useRouter();
  const isMarathiPath = pathname?.startsWith("/mr") ?? false;
  const locale: Locale = isMarathiPath ? "mr" : "en";
  const [activeRoute, setActiveRoute] = useState("top");

  const switchLocale = (nextLocale: Locale) => {
    if (nextLocale === "mr" && !isMarathiPath) {
      router.push("/mr");
      return;
    }
    if (nextLocale === "en" && isMarathiPath) {
      router.push("/");
    }
  };

  const copy = content[locale];
  const structuredData = [localBusinessSchemas[locale], websiteSchemas[locale]];
  const whatsAppMessage = encodeURIComponent(whatsAppMessages[locale]);

  useEffect(() => {
    const sectionIds = ["top", "profile", "services", "work", "projects", "contact"];

    const updateActiveRoute = () => {
      const marker = window.scrollY + 140;
      let current = "top";

      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= marker) {
          current = id;
        }
      });

      setActiveRoute((prev) => (prev === current ? prev : current));
    };

    updateActiveRoute();
    window.addEventListener("scroll", updateActiveRoute, { passive: true });
    window.addEventListener("resize", updateActiveRoute);

    return () => {
      window.removeEventListener("scroll", updateActiveRoute);
      window.removeEventListener("resize", updateActiveRoute);
    };
  }, [pathname]);

  return (
    <main>
      <a href="#mainContent" className="skipLink">
        Skip to main content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <header className="siteHeader" aria-label="Site header">
        <a className="brand" href="#top" aria-label="HMT Hemant Maruti Tambe - Home">
          <img src="/hmt-logo.jpeg" alt="HMT Hemant Maruti Tambe logo" title="Go to homepage" />
        </a>

        <nav aria-label="Main navigation">
          <a href="#top" aria-current={activeRoute === "top" ? "page" : undefined}>{copy.nav.home}</a>
          <a href="#profile" aria-current={activeRoute === "profile" ? "page" : undefined}>{copy.nav.about}</a>
          <a href="#services" aria-current={activeRoute === "services" ? "page" : undefined}>{copy.nav.services}</a>
          <a href="#work" aria-current={activeRoute === "work" ? "page" : undefined}>{copy.nav.work}</a>
          <a href="#projects" aria-current={activeRoute === "projects" ? "page" : undefined}>{copy.nav.projects}</a>
          <a href="#contact" aria-current={activeRoute === "contact" ? "page" : undefined}>{copy.nav.contact}</a>
        </nav>

        <div className="headerTools" role="region" aria-label="Site tools">
          <div className="langToggle" aria-label="Language options">
            <button
              aria-label="Switch to English"
              aria-pressed={locale === "en"}
              className={locale === "en" ? "isActive" : ""}
              onClick={() => switchLocale("en")}
              type="button"
            >
              EN
            </button>
            <button
              aria-label="Switch to Marathi"
              aria-pressed={locale === "mr"}
              className={locale === "mr" ? "isActive" : ""}
              onClick={() => switchLocale("mr")}
              type="button"
            >
              मराठी
            </button>
          </div>
          <a
            className="headerCta"
            href={`https://wa.me/919595341818?text=${whatsAppMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact via WhatsApp"
            title="Opens WhatsApp in a new window"
          >
            <WhatsAppMark />
            <span className="whatsappText">{copy.actions.whatsapp}</span>
          </a>
        </div>
      </header>

      <section className="hero" id="top" aria-label="Hero section">
        <div className="heroImage" aria-hidden="true" />
        <div className="heroContent">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1>{copy.hero.title}</h1>
          <p className="lead">{copy.hero.lead}</p>
          <div className="heroActions" aria-label="Quick contact actions">
            <a href="tel:+919595341818" title="Call Hemant Tambe at +91 9595341818">
              <PhoneMark />
              {copy.actions.call}
            </a>
            <a
              className="whatsappLink"
              href={`https://wa.me/919595341818?text=${whatsAppMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Opens WhatsApp in a new window"
            >
              <WhatsAppMark />
              <span className="whatsappText">{copy.actions.whatsapp}</span>
            </a>
            <a href="mailto:hemantmarutitambe@gmail.com" title="Send email to hemantmarutitambe@gmail.com">
              <MailMark />
              {copy.actions.email}
            </a>
          </div>
        </div>

        <aside className="heroPanel" aria-label="Company overview">
          <span aria-label="HMT">HMT</span>
          <strong>{copy.hero.panelTitle}</strong>
          {copy.hero.panelLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </aside>
      </section>

      <section className="band intro" id="profile" aria-labelledby="profileHeading">
        <div>
          <p className="eyebrow" id="profileHeading">{copy.intro.eyebrow}</p>
          <h2>{copy.intro.title}</h2>
        </div>
        <p>{copy.intro.body}</p>
      </section>

      <section className="band" id="services" aria-labelledby="servicesHeading">
        <div className="sectionHead">
          <p className="eyebrow" id="servicesHeading">{copy.services.eyebrow}</p>
          <h2>{copy.services.title}</h2>
        </div>
        <div className="serviceGrid">
          {copy.services.items.map((item) => (
            <article key={item}>
              <span aria-hidden="true" />
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="band whyChooseUsSection" aria-labelledby="whyChooseHeading">
        <div className="sectionHead">
          <p className="eyebrow" id="whyChooseHeading">Why Partner With Us</p>
          <h2>Why Choose HMT as Your Construction Partner?</h2>
        </div>
        <div>
          <p className="lead" style={{ marginBottom: "32px" }}>
            We don&apos;t just build structures; we build value. With over a decade of expertise, we bridge
            the gap between high-end architectural design and rigorous civil engineering.
          </p>
          <div className="whyChooseGrid">
            <article className="whyChooseCard">
              <h3>Integrated Construction Expertise</h3>
              <p>
                From initial land assessment and foundation (RCC) work to interior finishing and
                utility installation—we handle every aspect of your project with precision and care.
              </p>
            </article>
            <article className="whyChooseCard">
              <h3>Transparent Project Management</h3>
              <p>
                Real-time updates and clear milestones ensure your project&mdash;be it residential or civic
                infrastructure&mdash;stays on budget and on schedule. You&apos;re always in the loop.
              </p>
            </article>
            <article className="whyChooseCard">
              <h3>Local Compliance Expertise</h3>
              <p>
                Deep understanding of building bylaws specific to PMC and PCMC. We navigate local
                regulations efficiently, accelerating approvals without compromising quality.
              </p>
            </article>
            <article className="whyChooseCard">
              <h3>Quality-First Methodology</h3>
              <p>
                Premium-grade materials and modern construction standards ensure your investment stands
                the test of time against Pune&apos;s regional climate and environmental conditions.
              </p>
            </article>
            <article className="whyChooseCard">
              <h3>Specialized Skill Sets</h3>
              <p>
                Whether general contractor services for full home builds or dedicated civil work for
                structural reinforcement, our teams have the expertise and modern machinery to deliver.
              </p>
            </article>
            <article className="whyChooseCard">
              <h3>Trusted Across Pune & PCMC</h3>
              <p>
                Active in 28+ locations from Kothrud to Hinjewadi, from Hadapsar to Chakan. Our
                network ensures local excellence wherever you build.
              </p>
            </article>
          </div>
          <div style={{ marginTop: "40px", textAlign: "center" }}>
            <Link
              href="/areas"
              className="heroActions"
              style={{ justifyContent: "center", display: "inline-flex" }}
            >
              Explore Our Service Areas
            </Link>
          </div>
        </div>
      </section>

      <section className="band storyBand" id="work" aria-labelledby="workHeading">
        <div className="sectionHead">
          <p className="eyebrow" id="workHeading">{copy.workModes.eyebrow}</p>
          <h2>{copy.workModes.title}</h2>
        </div>
        <div className="featureGrid">
          {copy.workModes.items.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band" aria-labelledby="experienceHeading">
        <div className="sectionHead">
          <p className="eyebrow" id="experienceHeading">{copy.experience.eyebrow}</p>
          <h2>{copy.experience.title}</h2>
        </div>
        <div className="featureGrid">
          {copy.experience.items.map((item) => (
            <article key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="band splitMedia" aria-labelledby="costingHeading">
        <div className="costCard">
          <p className="eyebrow" id="costingHeading">{copy.costing.eyebrow}</p>
          <h2>{copy.costing.title}</h2>
          <p>{copy.costing.body}</p>
          <ul className="bulletList">
            {copy.costing.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <figure className="mediaFrame">
          <img
            src="/presentation/construction-cost-graphic.png"
            alt="Construction cost and planning graphic from the presentation"
          />
        </figure>
      </section>

      <section className="band" aria-labelledby="whyEngineerHeading">
        <div className="sectionHead">
          <p className="eyebrow" id="whyEngineerHeading">{copy.whyEngineer.eyebrow}</p>
          <h2>{copy.whyEngineer.title}</h2>
        </div>
        <div className="twoColumnText">
          <ul className="bulletList">
            {copy.whyEngineer.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band splitPanels" aria-labelledby="teamHeading">
        <article className="infoPanel">
          <p className="eyebrow" id="teamHeading">{copy.team.eyebrow}</p>
          <h2>{copy.team.title}</h2>
          <p>{copy.team.body}</p>
          <ul className="bulletList panelBulletList">
            {copy.team.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="infoPanel">
          <p className="eyebrow">{copy.permits.eyebrow}</p>
          <h2>{copy.permits.title}</h2>
          <ul className="bulletList panelBulletList">
            {copy.permits.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="band networkBand" aria-labelledby="networkHeading">
        <div className="sectionHead">
          <p className="eyebrow" id="networkHeading">{copy.network.eyebrow}</p>
          <h2>{copy.network.title}</h2>
        </div>
        <div className="splitPanels">
          <article className="infoPanel">
            <h3>{copy.network.canConnectTitle}</h3>
            <ul className="bulletList panelBulletList">
              {copy.network.canConnect.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="infoPanel">
            <h3>{copy.network.lookingForTitle}</h3>
            <ul className="bulletList panelBulletList">
              {copy.network.lookingFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="band galleryBand" id="projects" aria-labelledby="projectsHeading">
        <div className="sectionHead">
          <p className="eyebrow" id="projectsHeading">{copy.projects.eyebrow}</p>
          <h2>{copy.projects.title}</h2>
        </div>
        <div className="galleryGrid">
          {copy.projects.items.map((item) => (
            <article className="galleryCard" key={item.title}>
              <img src={item.image} alt={item.title} />
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="band coverage" id="coverage" aria-labelledby="coverageHeading">
        <div className="sectionHead">
          <p className="eyebrow" id="coverageHeading">{copy.coverage.eyebrow}</p>
          <h2>{copy.coverage.title}</h2>
        </div>
        <div className="coveragePanel">
          <p>{copy.coverage.body}</p>
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="View coverage area on Google Maps (opens in new window)"
          >
            <MapPinMark />
            {copy.actions.map}
          </a>
        </div>
      </section>

      <section className="contactBand" id="contact" aria-labelledby="contactHeading">
        <div className="contactText">
          <p className="eyebrow" id="contactHeading">{copy.contact.eyebrow}</p>
          <h2>{copy.contact.title}</h2>
          <address>
            <strong>Hemant Maruti Tambe</strong>
            <span>{copy.contact.role}</span>
            {copy.contact.addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <div className="contactActions">
            <a href="tel:+919595341818" title="Call +91 9595341818">
              <PhoneMark />
              +91 9595341818
            </a>
            <a
              className="whatsappLink"
              href={`https://wa.me/919595341818?text=${whatsAppMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              title="Opens WhatsApp in a new window"
            >
              <WhatsAppMark />
              <span className="whatsappText">{copy.actions.whatsapp}</span>
            </a>
            <a href="tel:+919175251338" title="Call +91 9175251338">
              <PhoneMark />
              +91 9175251338
            </a>
            <a href="mailto:hemantmarutitambe@gmail.com" title="Send email to hemantmarutitambe@gmail.com">
              <MailMark />
              hemantmarutitambe@gmail.com
            </a>
          </div>
        </div>

        <div className="contactMedia">
          <iframe
            title="HMT office location on Google Maps - Pune, Maharashtra"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            tabIndex={-1}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <footer role="contentinfo" aria-label="Site footer">
        <div>
          <span>{copy.footer.brand}</span>
          <span>{copy.footer.tagline}</span>
        </div>
        <nav aria-label="Footer navigation">
          <a href="#top">{copy.nav.home}</a>
          <a href="#profile">{copy.nav.about}</a>
          <a href="#services">{copy.nav.services}</a>
          <a href="#work">{copy.nav.work}</a>
          <a href="#projects">{copy.nav.projects}</a>
          <a href="#contact">{copy.nav.contact}</a>
          <a href="/sitemap.xml">Sitemap</a>
        </nav>
      </footer>
    </main>
  );
}
