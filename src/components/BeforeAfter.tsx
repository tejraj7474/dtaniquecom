import "../popup.css";

import result1 from "../assets/before.png";
import result2 from "../assets/before1.png";
import result3 from "../assets/before2.png";
import result4 from "../assets/before3.png";
import result5 from "../assets/before4.png";

const results = [
  {
   
    image: result1,
  },
  {
   
    image: result2,
  },
  {
   
    image: result3,
  },
  {
   
    image: result4,
  },
  {
   
    image: result5,
  },
];

export default function BeforeAfter() {
  return (
    <section className="before-after-section">
      <div className="before-after-grid">
        {results.map((item, index) => (
          <div className="before-after-card" key={index}>
            <div className="image-wrapper">
              <img
                src={item.image}
                
                className="before-after-image"
              />

             
            </div>

          
          </div>
        ))}
      </div>
    </section>
  );
}