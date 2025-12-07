import { WorkerProfile } from "./components/WorkerProfile";
import { CampaignExplanation } from "./components/CampaignExplanation";

export default function App() {
  const rifkyBiography = [
    "Rifky has spent the last 18 years in the garment industry, his hands tracing patterns across fabric with the precision of a cartographer mapping new worlds. He learned his craft from his mother, who taught him that every stitch carries intention, every seam tells a story.",
    "Working in a small atelier on the outskirts of the city, Rifky specializes in the finishing work that makes a garment whole—the invisible labour of hemming, pressing, and hand-finishing details that most will never notice. He takes pride in these marks of care, the evidence of patient hands.",
    "Despite his skill and dedication, Rifky struggles to earn a living wage. The Afterhrs campaign exists to bridge this gap, ensuring that makers like Rifky receive fair compensation for their expertise and the hours they pour into their craft. Your support helps provide stability, dignity, and recognition for the quiet labour that clothes the world."
  ];

  const handleDonate = () => {
    // Implement donation logic here
    alert("Donation functionality would be integrated here");
  };

  return (
    <div className="min-h-screen">
      {/* Worker Profile Section */}
      <WorkerProfile
        name="Rifky"
        image="https://images.unsplash.com/photo-1621370688441-8ce43a9903dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJtZW50JTIwd29ya2VyJTIwaGFuZHMlMjBzZXdpbmd8ZW58MXx8fHwxNzY1MDkwNjA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        biography={rifkyBiography}
        onDonate={handleDonate}
      />

      {/* Campaign Explanation Section */}
      <CampaignExplanation
        backgroundImage="https://images.unsplash.com/photo-1715866568589-ac5a406eda54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYWJyaWMlMjB0ZXh0dXJlJTIwbmF0dXJhbCUyMGNvdHRvbnxlbnwxfHx8fDE3NjUwOTA2MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />
    </div>
  );
}
