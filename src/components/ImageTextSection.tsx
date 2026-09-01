import "./ImageTextSection.css";

const ImageTextSection = () => {
  return (
    <section className="image-text-section">
      <div className="image-text-container">

        <div className="image-text-image">
          <img
            src="/images/about-section.jpg"
            alt="About D-Tanique"
          />
        </div>

       

<div className="image-text-content">
  <span className="image-text-subtitle">
    PREMIUM MEMBERSHIP
  </span>

  <h2>
    More Value for You.<br />
    <em>More Care for Yourself.</em>
  </h2>

  <p>
    Experience premium skin, hair and laser care with the D-Tanique
    Membership. Enjoy personalized treatments, exclusive member
    benefits and greater value while staying consistent with your
    beauty and wellness journey.
  </p>

  <p>
    Our membership is designed for those who believe in regular,
    professional care and want to make their skin and hair wellness
    a long-term priority.
  </p>

  <div className="membership-points">
    <div className="membership-point">
      <span>✓</span>
      <p>Personalized skin, hair & laser care</p>
    </div>

    <div className="membership-point">
      <span>✓</span>
      <p>Exclusive benefits and member privileges</p>
    </div>

    <div className="membership-point">
      <span>✓</span>
      <p>Greater value on your favourite treatments</p>
    </div>

    <div className="membership-point">
      <span>✓</span>
      <p>Priority access to selected appointments</p>
    </div>

    <div className="membership-point">
      <span>✓</span>
      <p>Consistent care for long-term results</p>
    </div>
  </div>

  <p className="membership-closing">
    Because your skin and hair deserve more than occasional care —
    they deserve a commitment.
  </p>
</div>



      </div>
    </section>
  );
};

export default ImageTextSection;