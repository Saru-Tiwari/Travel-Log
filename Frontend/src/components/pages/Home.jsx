import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../Theme";
import Hero from "../pages/Hero";
import FieldsSection from "../pages/FieldsCection";
import StoriesSection from "../pages/StoriesSection";
import CTASection from "../pages/CTASection";

const SAMPLE_LOGS = [
  {
    title: "Chasing fog through the rice terraces",
    destination: "Ubud, Bali",
    date: "Mar 14, 2026",
    rating: 5,
    excerpt:
      "Woke up at 5am for the sunrise hike and it was worth every missed hour of sleep. The terraces looked like green staircases into the clouds.",
    tags: ["adventure", "solo"],
    photoCount: 5,
    hue: "#7FA98A",
    photos: [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1703817843977-11fe5a469e1e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hhc2luZyUyMGZvZyUyMHRocm91Z2glMjB0aGUlMjByaWNlJTIwdGVycmFjZXMlMjBpbiUyMGJhbGl8ZW58MHx8MHx8fDA%3D",
      "https://plus.unsplash.com/premium_photo-1734629912292-c95d5537f680?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fENoYXNpbmclMjBmb2clMjB0aHJvdWdoJTIwdGhlJTIwcmljZSUyMHRlcnJhY2VzJTIwaW4lMjBiYWxpfGVufDB8fDB8fHww",
      "https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFsaXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1604999333679-b86d54738315?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmFsaXxlbnwwfHwwfHx8MA%3D%3D",
    ],
  },
  {
    title: "A week of temples, tofu, and slow mornings",
    destination: "Kyoto, Japan",
    date: "Nov 2, 2025",
    rating: 4,
    excerpt:
      "Kyoto rewards a slow pace. We skipped the big-name temples on day one and just wandered Higashiyama until we got pleasantly lost.",
    tags: ["culture", "family"],
    photoCount: 4,
    hue: "#C97B63",
    photos: [
      "https://images.unsplash.com/photo-1700825469384-33f4a4edbf81?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QSUyMHdlZWslMjBvZiUyMHRlbXBsZXMlMkMlMjB0b2Z1JTJDJTIwYW5kJTIwc2xvdyUyMG1vcm5pbmdzfGVufDB8fDB8fHww",

      "https://plus.unsplash.com/premium_photo-1694475213236-d0a4e95d5280?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QSUyMHdlZWslMjBvZiUyMHRlbXBsZXMlMkMlMjB0b2Z1JTJDJTIwYW5kJTIwc2xvdyUyMG1vcm5pbmdzfGVufDB8fDB8fHww",

      "https://images.unsplash.com/photo-1665003815164-8f5bc853ef44?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QSUyMHdlZWslMjBvZiUyMHRlbXBsZXMlMkMlMjB0b2Z1JTJDJTIwYW5kJTIwc2xvdyUyMG1vcm5pbmdzfGVufDB8fDB8fHww",

      "https://images.unsplash.com/photo-1577046469528-4f464431eed0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fHw%3D",
    ],
  },
  {
    title: "Budget backpacking the Ring Road",
    destination: "Iceland",
    date: "Jun 21, 2025",
    rating: 5,
    excerpt:
      "Did the whole loop on $40 a day by sleeping in the car and cooking at gas station kitchens. Still saw every waterfall on the list.",
    tags: ["budget", "road trip"],
    photoCount: 5,
    hue: "#5B85A6",
    photos: [
      "https://images.unsplash.com/photo-1697650086866-76a08760d1df?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

      "https://images.unsplash.com/photo-1697816590928-3f5c14ca1a49?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",

      "https://media.istockphoto.com/id/869718322/photo/backpacker-tourist.webp?a=1&b=1&s=612x612&w=0&k=20&c=G7IfuhJ-fYAdUBVJ94_c2G8hgpfbYeT0TP72ciRUCUA=",

      "https://images.unsplash.com/photo-1766236215947-5b656c60d60e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEJ1ZGdldCUyMGJhY2twYWNraW5nJTIwdGhlJTIwUmluZyUyMFJvYWR8ZW58MHx8MHx8fDA%3D",
    ],
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const fetchLogs = async () => {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 900));
      if (!cancelled) {
        setLogs(SAMPLE_LOGS);
        setLoading(false);
      }
    };

    fetchLogs();

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    document.title = "TravelLog — log the trip, keep the story";
  }, []);

  const handleShare = () => {
    navigate("/share");
    console.log("Share your story clicked");
  };

  return (
    <div style={{ background: COLORS.bg, minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        @media (max-width: 820px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-art { height: 300px !important; margin-top: 24px; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          nav a, nav button { display: none !important; }
          .md\\:hidden { display: inline-flex !important; }
        }
      `}</style>

      <Hero onShare={handleShare} />
      <FieldsSection />
      <StoriesSection logs={logs} loading={loading} />
      <CTASection onShare={handleShare} />
    </div>
  );
};

export default Home;
