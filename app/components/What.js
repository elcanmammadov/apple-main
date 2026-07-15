export default function What() {
  return (
    <section id="what" className="txtcenter">
      <div className="container">
        <h2>What makes an iPhone an iPhone?</h2>
        <div className="magic">
          <div className="iostop">
            <h2>IOS 17</h2>
            <p>Every day. More extraordinary. Learn more</p>
            <a href="#" className="link">
              Learn more <i className="fa-solid fa-chevron-right"></i>
            </a>
          </div>
          <div className="ios-img"></div>
        </div>
        <div className="switch">
          <div className="magic w50">
            <div className="iostop">
              <h2>Switching to iPhone is super simple.</h2>
              <a href="#" className="link">
                Learn more <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>
            <div className="switch-img"></div>
          </div>
          <div className="magic w50">
            <div className="iostop">
              <h2>Privacy.</h2>
              <h2>That’s iPhone.</h2>
              <a href="#" className="link">
                Learn more <i className="fa-solid fa-chevron-right"></i>
              </a>
            </div>
            <div className="privacy-img"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
