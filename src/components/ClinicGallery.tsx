import logoWall from "@/assets/clinic/logo-wall.jpeg";
import entrance from "@/assets/clinic/entrance.jpeg";
import receptionView from "@/assets/clinic/reception-view.jpeg";
import ceilingBlossoms from "@/assets/clinic/ceiling-blossoms.jpeg";
import corridor from "@/assets/clinic/corridor.jpeg";
import waitingArea from "@/assets/clinic/waiting-area.jpeg";
import receptionDesk from "@/assets/clinic/reception-desk.jpeg";
import consultationRoom from "@/assets/clinic/consultation-room.jpeg";
import doctorCabin from "@/assets/clinic/doctor-cabin.jpeg";
import receptionTeam from "@/assets/clinic/reception-team.jpeg";
import skinAnalysis from "@/assets/clinic/skin-analysis.jpeg";

const images: { src: string; alt: string; caption: string }[] = [
  { src: logoWall, alt: "D'Tanique signature logo wall", caption: "Signature Wall" },
  { src: entrance, alt: "Clinic entrance with rose gold detailing", caption: "Entrance" },
  { src: receptionView, alt: "View of the reception from the entrance", caption: "Welcome" },
  { src: receptionDesk, alt: "D'Tanique reception desk", caption: "Reception" },
  { src: ceilingBlossoms, alt: "Cherry blossom ceiling artwork", caption: "Blossom Ceiling" },
  { src: corridor, alt: "Corridor with mandala feature wall", caption: "Corridor" },
  { src: waitingArea, alt: "Plush waiting lounge", caption: "Lounge" },
  { src: consultationRoom, alt: "Consultation and diagnostics room", caption: "Diagnostics" },
  { src: doctorCabin, alt: "Doctor's consultation cabin", caption: "Doctor's Cabin" },
  { src: receptionTeam, alt: "D'Tanique reception team welcoming clients", caption: "Front Desk" },
  { src: skinAnalysis, alt: "Advanced skin analysis consultation", caption: "Skin Analysis" },
];

export default function ClinicGallery() {
  return (
    <section className="py-20 px-4" style={{ background: "linear-gradient(180deg, #fff 0%, #faf3ec 100%)" }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm tracking-[0.3em] uppercase mb-3" style={{ color: "#b76e79" }}>
            Inside Our Clinic
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-4" style={{ color: "#1a1a1a", fontFamily: "Georgia, serif" }}>
            A Sanctuary for Skin
          </h2>
          <p className="text-base text-neutral-600 max-w-2xl mx-auto">
            Step inside D'Tanique — The Derma Clinic in J.P. Nagar. Designed for comfort, calm and confidence
            from the moment you arrive.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((img, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 ${
                i === 0 || i === 4 ? "md:row-span-2 aspect-[3/4] md:aspect-[3/5]" : "aspect-[4/5]"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-black/60 to-transparent text-white text-xs md:text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
