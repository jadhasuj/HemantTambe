import type { Metadata } from "next";
import Home from "../page";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.hmtambe.com";

export const metadata: Metadata = {
  title: "हेमंत मारुती तांबे | HMT सिव्हिल वर्क्स कॉन्ट्रॅक्टर पुणे",
  description:
    "हेमंत मारुती तांबे हे HMT चे व्यवस्थापकीय संचालक असून पुणे शहर व पुणे जिल्ह्यात सिव्हिल वर्क्स, बांधकाम कॉन्ट्रॅक्ट, परवाने आणि विकास सहाय्य सेवा देतात.",
  keywords: [
    "हेमंत मारुती तांबे",
    "HMT",
    "सिव्हिल इंजिनिअर पुणे",
    "सिव्हिल वर्क्स कॉन्ट्रॅक्टर पुणे",
    "बांधकाम कॉन्ट्रॅक्टर हडपसर",
    "वास्तु परवाने पुणे",
    "जॉइंट व्हेंचर डेव्हलपमेंट पुणे",
  ],
  alternates: {
    canonical: "/mr",
    languages: {
      "en-IN": "/",
      "mr-IN": "/mr",
    },
  },
  openGraph: {
    title: "हेमंत मारुती तांबे | HMT सिव्हिल वर्क्स कॉन्ट्रॅक्टर पुणे",
    description:
      "पुणे शहर आणि पुणे जिल्ह्यात सिव्हिल वर्क्स, पूर्ण बांधकाम, विकास सहाय्य, वास्तु नियोजन आणि परवाना सेवा.",
    type: "website",
    siteName: "HMT Hemant Maruti Tambe",
    locale: "mr_IN",
    url: `${siteUrl}/mr`,
    images: [
      {
        url: "/hmt-logo.jpeg",
        width: 1160,
        height: 676,
        alt: "HMT Hemant Maruti Tambe लोगो",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "हेमंत मारुती तांबे | HMT",
    description:
      "पुणे शहर आणि पुणे जिल्ह्यासाठी सिव्हिल इंजिनिअर आणि सिव्हिल वर्क्स कॉन्ट्रॅक्टर.",
    images: ["/hmt-logo.jpeg"],
  },
};

export default Home;
