const phones = [
  { phoneImg: "phone.jpg", colorImg: "applecolor.jpeg" },
  { phoneImg: "phone4.jpg", colorImg: "applecolor3.jpeg" },
  { phoneImg: "phone3.jpg", colorImg: "applecolor.jpeg" },
  { phoneImg: "phone2.jpg", colorImg: "applecolor3.jpeg" },
];

function PhoneCard({ phoneImg, colorImg }) {
  return (
    <div className="phone-card">
      <div className="phone">
        <div className="phones-img">
          <img className="phone-img" src={`/img/${phoneImg}`} alt="phone" />
          <img src={`/img/${colorImg}`} alt="color" />
        </div>
        <div className="phonename">
          <span className="new">New</span>
          <p>
            <b>Iphone 15 Pro</b>
          </p>
          <p>The Ultimate Iphone</p>
          <p className="from">From $999</p>
          <div>
            <a href="#" className="btn">
              Buy
            </a>
          </div>
          <a href="#" className="link">
            Learn more <i className="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </div>
      <hr />
      <div className="features">
        <div>
          <p>6.7″ or 6.1″</p>
          <p>Super Retina XDR display</p>
          <p>ProMotion technology</p>
          <p>Always-On display</p>
        </div>
        <div>
          <img src="/img/icon4.jpeg" alt="icon" />
          <p>Titanium with textured matte</p>
          <p>glass back</p>
          <p>Action button</p>
        </div>
        <div>
          <img src="/img/icon11.jpeg" alt="icon" />
          <p>Dynamic Island</p>
          <p>A magical way to interact</p>
          <p>with iPhone</p>
        </div>
        <div>
          <img src="/img/icon6.jpeg" alt="icon" />
          <p>Pro camera system</p>
          <p>48MP Main</p>
          <p>Ultra Wide</p>
          <p>Telephoto</p>
          <p>Super-high-resolution photos</p>
          <p>(24MP and 48MP)</p>
          <p>Next-generation portraits</p>
          <p>with Focus and Depth</p>
          <p>Control</p>
        </div>
        <div>
          <p>Up to</p>
          <p className="zoom">10x</p>
          <p>optical zoom range</p>
        </div>
        <div>
          <img src="/img/icon7.jpeg" alt="icon" />
          <p>Emergency SOS</p>
          <p>Emergency SOS via satellite</p>
          <p>Crash Detection</p>
          <p>Roadside Assistance via</p>
          <p>satellite</p>
        </div>
        <div>
          <img src="/img/icon9.jpeg" alt="icon" />
          <p>Up to 29 hours video</p>
          <p>playback</p>
        </div>
        <div>
          <img src="/img/icon3.jpeg" alt="icon" />
          <p>Up to 29 hours video</p>
          <p>playback</p>
        </div>
        <div>
          <img src="/img/icon.jpeg" alt="icon" />
        </div>
      </div>
    </div>
  );
}

export default function WhichIphone() {
  return (
    <section id="which" className="txtcenter">
      <h1>Which iPhone is right for you?</h1>
      <div className="container">
        <div className="phones">
          {phones.map((phone, i) => (
            <PhoneCard key={i} {...phone} />
          ))}
        </div>
        <div className="txtcenter">
          <div>
            <a href="#" className="link">
              Compare all iPhone models
              <i className="fa-solid fa-chevron-right"></i>
            </a>
          </div>
          <div>
            <a href="#" className="link">
              Shop iPhone <i className="fa-solid fa-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
