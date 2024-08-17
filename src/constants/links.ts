const data = [
    {
        title: "বিবিধ",
        image: "https://i.ibb.co/PQRLBgf/Miscellaneous.png",
        children: [
            {
                label: "বিশ্ব পানি দিবস",
                path: "",
            },
            {
                label: "চলমান প্রকল্পসমূহ",
                path: "",
            },
            {
                label: "বার্ষিক প্রতিবেদন",
                path: "",
            },
        ],
    },
    {
        title: "তথ্য ও সেবা",
        image: "https://i.ibb.co/TRStScK/HelpDesk.png",
        children: [
            {
                label: "এডিপি/আএডিপি ম্যানেজ. সিস্টেম",
                path: "",
            },
            {
                label: "সরকারি সেবা হেল্পলাইন ৩৩৩",
                path: "",
            },
            {
                label: "বন্যা পূর্বাভাস জানতে কল ১০৯০",
                path: "",
            },
            {
                label: "জরুরি সেবা পেতে কল ৯৯৯",
                path: "",
            },
        ],
    },
    {
        title: "ব-দ্বীপ পরিকল্পনা, ব্লু ইকোনমি ও ইস্তাম্বুল কর্মপরিকল্পনা",
        image: "https://i.ibb.co/f88ZWfq/Delta-Plan.jpg",
        children: [
            {
                label: "কর্মপরিকল্পনা",
                path: "",
            },
            {
                label: "বাস্তবায়ন অগ্রগতি",
                path: "",
            },
            {
                label: "ইস্তাম্বুল কর্মপরিকল্পনা",
                path: "",
            },
            {
                label: "ব-দ্বীপ পরিকল্পনা",
                path: "",
            },
        ],
    },
    {
        title: "মানব সম্পদ উন্নয়ন",
        image: "https://i.ibb.co/99BQftr/Human-resource-development.png",
        children: [
            {
                label: "নিয়োগ সংক্রান্ত সকল তথ্য",
                path: "",
            },
            {
                label: "অনলাইনে আবেদন",
                path: "",
            },
            {
                label: "প্রবেশপত্র ডাউনলোড",
                path: "",
            },
            {
                label: "নিয়োগ বিজ্ঞপ্তি",
                path: "",
            },
        ],
    },
    {
        title: "ভ্রমণসূচী",
        image: "https://i.ibb.co/dtW3TPX/Tour-Programs.png",
        children: [
            {
                label: "সচিবের ভ্রমণ/সফরসূচি",
                path: "",
            },
            {
                label: "অন্যান্য কর্মকর্তাগণ",
                path: "",
            },
        ],
    },
    {
        title: "ফরমসমূহ",
        image: "https://i.ibb.co/nfNQ4k4/Forms.png",
        children: [
            {
                label: "বাংলাদেশ সরকারের ফরম",
                path: "",
            },
            {
                label: "গাড়ী রিকুইজিশন ফরম",
                path: "",
            },
            {
                label: "উন্নয়ন প্রকল্প ও অফিস পরিদর্শন/সভা, সেমিনারে অংশগ্রহণের প্রেক্ষিত প্রতিবেদন ছক",
                path: "",
            },
            {
                label: "অন্যান্য ফরম",
                path: "",
            },
        ],
    },
    {
        title: "এসডিজি ও উন্নয়ন কর্মপরিকল্পনা",
        image: "https://i.ibb.co/Sw8rrNM/SDG-and-Dev-Plan.png",
        children: [
            {
                label: "মন্ত্রণালয়ের এসডিজি",
                path: "",
            },
            {
                label: "এসডিজি ফোকাল / বিকল্প ফোকাল পয়েন্ট",
                path: "",
            },
            {
                label: "এসডিজি জাতীয় ডকুমেন্ট",
                path: "",
            },
            {
                label: "পঞ্চবার্ষিকী পরিকল্পনা ও প্রতিবেদন",
                path: "",
            },
        ],
    },
    {
        title: "বাজেট ও প্রকল্প",
        image: "https://i.ibb.co/M6SJhfr/Budget-Projects.png",
        children: [
            {
                label: "বার্ষিক ক্রয় পরিকল্পনা",
                path: "",
            },
            {
                label: "বাজেট ও এমটিবিএফ বাজেট",
                path: "",
            },
            {
                label: "বাজেট প্রতিবেদন/অফিস আদেশ",
                path: "",
            },
            {
                label: "গুরুত্বপূর্ণ সমাপ্ত প্রকল্পসমূহ",
                path: "",
            },
        ],
    },
    {
        title: "সেবা সহজিকরণ",
        image: "https://i.ibb.co/tKNwSbC/Service-Simplification.png",
        children: [
            {
                label: "সেবা সহজিকরণ ম্যানুয়াল",
                path: "",
            },
            {
                label: "প্রজ্ঞাপন/পরিপত্র/নীতিমালা/অফিস আদেশ/সংকলন",
                path: "",
            },
            {
                label: "সেবা সহজিকরণ তালিকা",
                path: "",
            },
            {
                label: "সেবা সহজিকরণের দৃষ্টান্ত",
                path: "",
            },
        ],
    },
    {
        title: "উদ্ভাবনী কার্যক্রম",
        image: "https://i.ibb.co/P9JRTXD/Innovation-Corner.png",
        children: [
            {
                label: "উদ্ভাবনী কার্যক্রম",
                path: "",
            },
            {
                label: "কর্মপরিকল্পনা /নির্দেশিকা/প্রকল্পসমূহ",
                path: "",
            },
            {
                label: "ইনোভেশন টিম",
                path: "",
            },
            {
                label: "প্রজ্ঞাপন/পরিপত্র/নীতিমালা/সংকলন",
                path: "",
            },
            {
                label: "মুল্যায়ন প্রতিবেদন সফটওয়্যার লিংক",
                path: "",
            },
        ],
    },
    {
        title: "তথ্য অধিকার",
        image: "https://i.ibb.co/hBprWq0/Right-To-Information.png",
        children: [
            {
                label: "দায়িত্বপ্রাপ্ত কর্মকর্তা ও আপিল কর্তৃপক্ষ",
                path: "",
            },
            {
                label: "আবেদন ও আপীল ফরম",
                path: "",
            },
            {
                label: "স্বপ্রণোদিত তথ্য প্রকাশ/ত্রৈমাসিক প্রতিবেদন",
                path: "",
            },
            {
                label: "আইন/বিধি/নীতিমালা/পরিপত্র/নির্দেশিকা/প্রজ্ঞাপন",
                path: "",
            },
        ],
    },
    {
        title: "অভিযোগ প্রতিকার ব্যবস্থাপনা",
        image: "https://i.ibb.co/2MhmgY8/Grievance-Redress-System.png",
        children: [
            {
                label: "অনিক ও আপিল কর্মকর্তাগণ",
                path: "",
            },
            {
                label: "কর্মপরিকল্পনা/পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন",
                path: "",
            },
            {
                label: "অভিযোগ দাখিল (অনলাইন)",
                path: "",
            },
            {
                label: "আইন/বিধি/নীতিমালা/পরিপত্র/নির্দেশিকা/ প্রজ্ঞাপন",
                path: "",
            },
        ],
    },
    {
        title: "জাতীয় শুদ্ধাচার কৌশল",
        image: "https://i.ibb.co/jG5y8j7/National-Integrity-Strategy.jpg",
        children: [
            {
                label: "উত্তম চর্চা কর্মপরিকল্পনা সফটওয়্যার লিংক",
                path: "",
            },
            {
                label: "নৈতিকতা কমিটি ও ফোকাল পয়েন্ট কর্মকর্তা",
                path: "",
            },
            {
                label: "পরিবীক্ষণ ও মূল্যায়ন প্রতিবেদন",
                path: "",
            },
            {
                label: "আইন/বিধি/নীতিমালা/পরিপত্র/প্রজ্ঞাপন",
                path: "",
            },
        ],
    },
    {
        title: "বার্ষিক কর্মসম্পাদন চুক্তি",
        image: "https://i.ibb.co/KVQjFkY/annual-Performance.png",
        children: [
            {
                label: "নির্দেশিকা/পরিপত্র/এপিএ টিম/ফোকাল পয়েন্ট",
                path: "",
            },
            {
                label: "বার্ষিক কর্মসম্পাদন চুক্তি ও ফলাফল",
                path: "",
            },
            {
                label: "পরিবীক্ষণ ও মূল্যায়ন/ প্রতিবেদন",
                path: "",
            },
            {
                label: "এপিএএমএস সফটওয়্যার লিংক",
                path: "",
            },
        ],
    },
    {
        title: "নাগরিক ই-সেবাসমূহ",
        image: "https://mowr.gov.bd/sites/default/files/files/mowr.portal.gov.bd/front_service_box/91425597_7b48_4f43_a851_1cbce2218ad6/Eservice.png",
        children: [
            {
                label: "বন্যা পূর্বাভাস ও সতর্কীকরণ কেন্দ্র",
                path: "",
            },
            {
                label: "নদী দূষণ তথ্য ব্যবস্থাপনা",
                path: "",
            },
            {
                label: "নলেজ রিপোজিটরি সিস্টেম",
                path: "",
            },
            {
                label: "অন্যান্য",
                path: "",
            },
        ],
    },
    {
        title: "নীতিমালা ও প্রকাশনা",
        image: "https://i.ibb.co/8jP2TfH/policy.png",
        children: [
            {
                label: "আইন ও বিধিমালা",
                path: "",
            },
            {
                label: "নীতিমালা",
                path: "",
            },
            {
                label: "গাইডলাইন/নির্দেশিকা",
                path: "",
            },
            {
                label: "অন্যান্য",
                path: "",
            },
        ],
    },
    {
        title: "বিজ্ঞপ্তি/আদেশ/পরিপত্র",
        image: "https://i.ibb.co/J3Q7W38/notice-Order.png",
        children: [
            {
                label: "বিদেশ ভ্রমণের জি.ও",
                path: "",
            },
            {
                label: "পাসপোর্ট অনাপত্তি পত্র",
                path: "",
            },
            {
                label: "টেন্ডার / কোটেশন",
                path: "",
            },
            {
                label: "অফিস আদেশ / প্রজ্ঞাপন/ পরিপত্র",
                path: "",
            },
        ],
    },
    {
        title: "আমাদের বিষয়ে",
        image: "https://i.ibb.co/JKvB9t8/aboutUs.png",
        children: [
            {
                label: "ভিশন ও মিশন",
                path: "",
            },
            {
                label: "সাংগঠনিক কাঠামো",
                path: "",
            },
            {
                label: "কর্মকর্তাবৃন্দ",
                path: "",
            },
            {
                label: "কর্মবন্টন",
                path: "",
            },
        ],
    },
];

export const linksData = data.reverse();
