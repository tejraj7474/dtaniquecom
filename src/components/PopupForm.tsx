import "../popup.css";
import { useState } from "react";

type PopupFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

const services = [
  "Laser Hair Removal",
  "Acne Treatments",
  "Korean Glass Skin",
  "BB Glow Treatment",
  "Eyebrow Microblading",
  "Face PRP",
  "CO2 Treatment",
  "Lip Blushing",
  "Micro Needling",
  "HydraFacial",
  "Yellow Peel",
];

export default function PopupForm({ isOpen, onClose }: PopupFormProps) {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      // 1. Prepare WhatsApp message with form details
      const lines = [
        `Hi D-Tanique! New consultation request:`,
        ``,
        `*Name:* ${form.name}`,
        `*Phone:* ${form.phone}`,
        form.email ? `*Email:* ${form.email}` : null,
        form.service ? `*Treatment:* ${form.service}` : null,
        form.message ? `*Message:* ${form.message}` : null,
      ].filter(Boolean);

      const whatsappMessage = encodeURIComponent(lines.join("\n"));
      const waUrl = `https://wa.me/918884448906?text=${whatsappMessage}`;

      // 2. Open WhatsApp (fallback to direct navigation if popup blocked)
      const opened = window.open(waUrl, "_blank");
      if (!opened) {
        window.location.href = waUrl;
      }

      // 3. Show success message
      setSubmitted(true);

      // 4. Reset form fields
      setForm({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
      });
    } catch (error: any) {
      console.error("Popup Error:", error);
      alert("Unable to redirect to WhatsApp. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };
  return (

    <div className="popup-overlay">

      <div className="popup-box">


        <button
          className="popup-close"
          onClick={onClose}
        >
          ×
        </button>



        {submitted ? (

          <div className="popup-success">


            <div className="success-icon">
              ✓
            </div>


            <h2>
              Thank You!
            </h2>


            <p>
              Our dermatologist will contact you shortly.
            </p>



            <button

              className="popup-submit"

              onClick={() => {

                setSubmitted(false);

                onClose();

              }}

            >

              Close

            </button>


          </div>


        ) : (


          <>


            <h2>
              Book Your Free Consultation
            </h2>


            <p>
              Fill in your details and our expert will contact you shortly.
            </p>



            <form onSubmit={handleSubmit}>


              <input

                type="text"

                placeholder="Full Name"

                name="name"

                value={form.name}

                onChange={handleChange}

                required

              />



              <input

                type="tel"

                placeholder="Phone Number"

                name="phone"

                value={form.phone}

                onChange={handleChange}

                required

              />



              <input

                type="email"

                placeholder="Email Address"

                name="email"

                value={form.email}

                onChange={handleChange}

              />



              <select

                name="service"

                value={form.service}

                onChange={handleChange}

                required

              >

                <option value="">
                  Select Treatment
                </option>


                {services.map((service) => (

                  <option

                    key={service}

                    value={service}

                  >

                    {service}

                  </option>

                ))}


              </select>




              <textarea

                rows={4}

                placeholder="Message"

                name="message"

                value={form.message}

                onChange={handleChange}

              />




              <button

                type="submit"

                className="popup-submit"

                disabled={loading}

              >

                {loading
                  ? "Submitting..."
                  : "Book Consultation"
                }


              </button>



            </form>


          </>

        )}


      </div>


    </div>

  );

}
