"use client";
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";

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
  "Off. No. 10, Panchwati Complex, Near Vaibhav Theatre, Hadapsar, Pune 411028";
const mapQuery = encodeURIComponent(officeAddress);
const whatsAppMessage = encodeURIComponent(
  "Hello Hemant Tambe, I would like to discuss civil work / construction requirements in Pune."
);

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "HMT Hemant Maruti Tambe",
  alternateName: "Hemant Maruti Tambe",
  slogan: "Constructing Concepts",
  description:
    "Civil engineer and civil works contractor serving Pune city and Pune district.",
  image: "/hmt-logo.jpeg",
  telephone: ["+91 9595341818", "+91 9175251338"],
  email: "hemantmarutitambe@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Off. No. 10, Panchwati Complex, Near Vaibhav Theatre, Hadapsar",
    addressLocality: "Pune",
    postalCode: "411028",
    addressCountry: "IN",
  },
  areaServed: ["Pune city", "Pune district"],
  founder: {
    "@type": "Person",
    name: "Hemant Maruti Tambe",
    jobTitle: "Managing Director",
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
        "Off. No. 10, Panchwati Complex",
        "Near Vaibhav Theatre, Hadapsar",
        "Pune 411028",
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
      whatsapp: "व्हॉट्सअॅप",
      email: "ईमेल पाठवा",
      map: "ऑफिस लोकेशन उघडा",
    },
    hero: {
      eyebrow: "सिव्हिल इंजिनिअर आणि सिव्हिल वर्क्स कॉन्ट्रॅक्टर",
      title: "घराचे स्वप्न तुमचे... प्रयत्न आमचे !",
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
      eyebrow: "स्वतः बद्दल माहिती",
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
        "जॉइंट व्हेंचर आणि स्वतःची डेव्हलपमेंट प्रकल्प",
      ],
    },
    workModes: {
      eyebrow: "आम्ही साधारण चार प्रकारे कामे करतो",
      title: "प्रकल्प पुढे नेण्याच्या चार स्पष्ट पद्धती.",
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
          text: "जागा तुमची आणि परवाने व बांधकाम आमचे - या तत्वावर डेव्हलपमेंट करार करून जागा विकसित करतो.",
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
      eyebrow: "बांधकाम खर्च",
      title: "बांधकामाचा खर्च साधारण अशा पद्धतीने विभागला जातो.",
      body:
        "सादरीकरणात बांधकामाचा खर्च समजण्यासाठी कामाचे विभागीकरण सोप्या कार्यपद्धतीत दाखवले आहे.",
      bullets: [
        "साहित्य, मजुरी आणि इतर खर्च",
        "साहित्यानुसार विभागणी",
        "विभागशः नियोजन",
      ],
    },
    whyEngineer: {
      eyebrow: "टेक्निकल व्यक्तीकडून काम का करावे",
      title: "अभियंत्याकडून बांधकाम केल्याचे स्पष्ट फायदे.",
      bullets: [
        "काम तुमच्या बजेटमध्ये बसवता येते.",
        "काम वेळेवर पूर्ण होते.",
        "योग्य नियोजनामुळे खर्च वाचतो.",
        "नको तिथला खर्च टळतो.",
        "चांगल्या प्रतीच्या कामाची हमी मिळते.",
        "योग्य प्रमाणात योग्य साहित्य वापरल्यामुळे मजबुती मिळते.",
        "FE500 स्टील आणि M25 काँक्रीट यासारख्या योग्य दर्जाच्या साहित्याचा वापर.",
        "नकाशा व्यवस्थित साकारल्यामुळे तोडफोडीचा खर्च वाचतो.",
        "घरात हवा आणि सूर्यकिरणांचा संचार वाढतो, दिवसा लाईट्सची गरज कमी होते.",
      ],
    },
    team: {
      eyebrow: "आमच्या कडून कामे का करून घ्यावीत",
      title: "एकट्या व्यक्तीऐवजी तांत्रिक टीमचा आधार.",
      body:
        "मी व माझे सहकारी मिळून विविध ठिकाणी मदत आणि मार्गदर्शन देऊ शकतो, असे या सादरीकरणात नमूद केले आहे.",
      bullets: [
        "हेमंत मा. तांबे - बी. ई. स्थापत्य",
        "विशाल गोटे - बी. ई. स्थापत्य",
        "वृषाली जोगदंड - बी. वास्तू विशारद",
      ],
    },
    permits: {
      eyebrow: "परवाना काढूनच बांधकाम का करावे",
      title: "मंजूर बांधकामाचे प्रत्यक्ष फायदे.",
      bullets: [
        "वास्तूची किंमत वाढते.",
        "बँकिंग क्षेत्रात मालमत्तेचा दर्जा चांगला राहतो.",
        "शासनाच्या अडचणी येत नाहीत.",
        "शासकीय इतर खर्च वाचतात.",
        "खरेदी-विक्रीस सुलभता येते.",
        "योग्य नियोजनामुळे इतर त्रास कमी होतात.",
      ],
    },
    network: {
      eyebrow: "जोडणी आणि रेफरल",
      title: "कोणाशी जोडू शकतो आणि कोणाकडून रेफरल हवे आहेत.",
      canConnectTitle: "कोणाशी जोडून देऊ शकतो",
      canConnect: [
        "वास्तुविशारद",
        "स्थापत्य अभियंते",
        "रायटर इंडिया",
        "अमनोरा पार्क टाऊन",
        "प्राज ग्रुप",
        "सरकारी ठेका घेण्यास मदत",
      ],
      lookingForTitle: "कोणाशी जोडून द्याल",
      lookingFor: [
        "ज्यांना स्वतःचे घर, बंगला किंवा इमारत बांधायची आहे",
        "ज्यांना जमीन जे व्ही तत्वावर द्यायची आहे",
        "जिथे सिव्हिल संदर्भातील कामे होणार आहेत अशा कंपनीज",
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

export default function Home() {
  const [locale, setLocale] = useState<Locale>("en");
  const copy = content[locale];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />

      <header className="siteHeader" aria-label="HMT site header">
        <a className="brand" href="#top" aria-label="HMT home">
          <img src="/hmt-logo.jpeg" alt="HMT Hemant Maruti Tambe logo" />
        </a>

        <nav aria-label="Primary navigation">
          <a href="#top">{copy.nav.home}</a>
          <a href="#profile">{copy.nav.about}</a>
          <a href="#services">{copy.nav.services}</a>
          <a href="#work">{copy.nav.work}</a>
          <a href="#projects">{copy.nav.projects}</a>
          <a href="#contact">{copy.nav.contact}</a>
        </nav>

        <div className="headerTools">
          <div className="langToggle" aria-label="Language switcher">
            <button
              className={locale === "en" ? "isActive" : ""}
              onClick={() => setLocale("en")}
              type="button"
            >
              EN
            </button>
            <button
              className={locale === "mr" ? "isActive" : ""}
              onClick={() => setLocale("mr")}
              type="button"
            >
              मराठी
            </button>
          </div>
          <a
            className="headerCta"
            href={`https://wa.me/919595341818?text=${whatsAppMessage}`}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppMark />
            {copy.actions.whatsapp}
          </a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="heroImage" aria-hidden="true" />
        <div className="heroContent">
          <p className="eyebrow">{copy.hero.eyebrow}</p>
          <h1>{copy.hero.title}</h1>
          <p className="lead">{copy.hero.lead}</p>
          <div className="heroActions" aria-label="Contact actions">
            <a href="tel:+919595341818">{copy.actions.call}</a>
            <a
              className="whatsappLink"
              href={`https://wa.me/919595341818?text=${whatsAppMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppMark />
              {copy.actions.whatsapp}
            </a>
            <a href="mailto:hemantmarutitambe@gmail.com">{copy.actions.email}</a>
          </div>
        </div>

        <aside className="heroPanel" aria-label="HMT company summary">
          <span>HMT</span>
          <strong>{copy.hero.panelTitle}</strong>
          {copy.hero.panelLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </aside>
      </section>

      <section className="band intro" id="profile">
        <div>
          <p className="eyebrow">{copy.intro.eyebrow}</p>
          <h2>{copy.intro.title}</h2>
        </div>
        <p>{copy.intro.body}</p>
      </section>

      <section className="band" id="services">
        <div className="sectionHead">
          <p className="eyebrow">{copy.services.eyebrow}</p>
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

      <section className="band storyBand" id="work">
        <div className="sectionHead">
          <p className="eyebrow">{copy.workModes.eyebrow}</p>
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

      <section className="band">
        <div className="sectionHead">
          <p className="eyebrow">{copy.experience.eyebrow}</p>
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

      <section className="band splitMedia">
        <div className="costCard">
          <p className="eyebrow">{copy.costing.eyebrow}</p>
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

      <section className="band">
        <div className="sectionHead">
          <p className="eyebrow">{copy.whyEngineer.eyebrow}</p>
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

      <section className="band splitPanels">
        <article className="infoPanel">
          <p className="eyebrow">{copy.team.eyebrow}</p>
          <h2>{copy.team.title}</h2>
          <p>{copy.team.body}</p>
          <ul className="bulletList">
            {copy.team.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="infoPanel">
          <p className="eyebrow">{copy.permits.eyebrow}</p>
          <h2>{copy.permits.title}</h2>
          <ul className="bulletList">
            {copy.permits.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="band networkBand">
        <div className="sectionHead">
          <p className="eyebrow">{copy.network.eyebrow}</p>
          <h2>{copy.network.title}</h2>
        </div>
        <div className="splitPanels">
          <article className="infoPanel">
            <h3>{copy.network.canConnectTitle}</h3>
            <ul className="bulletList">
              {copy.network.canConnect.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="infoPanel">
            <h3>{copy.network.lookingForTitle}</h3>
            <ul className="bulletList">
              {copy.network.lookingFor.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="band galleryBand" id="projects">
        <div className="sectionHead">
          <p className="eyebrow">{copy.projects.eyebrow}</p>
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

      <section className="band coverage" id="coverage">
        <div className="sectionHead">
          <p className="eyebrow">{copy.coverage.eyebrow}</p>
          <h2>{copy.coverage.title}</h2>
        </div>
        <div className="coveragePanel">
          <p>{copy.coverage.body}</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            target="_blank"
            rel="noreferrer"
          >
            {copy.actions.map}
          </a>
        </div>
      </section>

      <section className="contactBand" id="contact">
        <div className="contactText">
          <p className="eyebrow">{copy.contact.eyebrow}</p>
          <h2>{copy.contact.title}</h2>
          <address>
            <strong>Hemant Maruti Tambe</strong>
            <span>{copy.contact.role}</span>
            {copy.contact.addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <div className="contactActions">
            <a href="tel:+919595341818">+91 9595341818</a>
            <a
              className="whatsappLink"
              href={`https://wa.me/919595341818?text=${whatsAppMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              <WhatsAppMark />
              {copy.actions.whatsapp}
            </a>
            <a href="tel:+919175251338">+91 9175251338</a>
            <a href="mailto:hemantmarutitambe@gmail.com">
              hemantmarutitambe@gmail.com
            </a>
          </div>
        </div>

        <div className="contactMedia">
          <iframe
            title="HMT office location on Google Maps"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <footer>
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
        <p className="footerNote">{copy.footer.note}</p>
      </footer>
    </main>
  );
}
