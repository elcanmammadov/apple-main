const menuItems = [
  "store",
  "mac",
  "ipad",
  "iphone",
  "watch",
  "vision",
  "airpods",
  "tv & home",
  "entertainment",
  "accessories",
  "support",
];

const sliderItems = [
  { img: "slider1.svg", alt: "slider1", label: "Iphone 15 Pro", isNew: true },
  { img: "slider2.svg", alt: "slider2", label: "Iphone 15", isNew: true },
  { img: "slider3.svg", alt: "slider3", label: "Iphone 14" },
  { img: "slider4.svg", alt: "silder4", label: "Iphone 13" },
  { img: "slider5.svg", alt: "slider5", label: "Iphone SE" },
  { img: "slider6.svg", alt: "slider6", label: "Compare" },
  { img: "slider7.svg", alt: "slider7", label: "Airpods" },
  { img: "slider8.svg", alt: "slider8", label: "AirTag" },
  { img: "slider9.svg", alt: "slider9", label: "Accerssories" },
  { img: "slider10.svg", alt: "slider10", label: "Apple Card" },
  { img: "slider11.svg", alt: "slider11", label: "Ios 17" },
  { img: "slider12.svg", alt: "slider12", label: "Shop Iphone" },
];

export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="nav">
          <nav>
            <a href="#">
              <svg viewBox="0 0 14 44" width="15px" xmlns="http://www.w3.org/2000/svg">
                <path d="m13.0729 17.6825a3.61 3.61 0 0 0 -1.7248 3.0365 3.5132 3.5132 0 0 0 2.1379 3.2223 8.394 8.394 0 0 1 -1.0948 2.2618c-.6816.9812-1.3943 1.9623-2.4787 1.9623s-1.3633-.63-2.613-.63c-1.2187 0-1.6525.6507-2.644.6507s-1.6834-.9089-2.4787-2.0243a9.7842 9.7842 0 0 1 -1.6628-5.2776c0-3.0984 2.014-4.7405 3.9969-4.7405 1.0535 0 1.9314.6919 2.5924.6919.63 0 1.6112-.7333 2.8092-.7333a3.7579 3.7579 0 0 1 3.1604 1.5802zm-3.7284-2.8918a3.5615 3.5615 0 0 0 .8469-2.22 1.5353 1.5353 0 0 0 -.031-.32 3.5686 3.5686 0 0 0 -2.3445 1.2084 3.4629 3.4629 0 0 0 -.8779 2.1585 1.419 1.419 0 0 0 .031.2892 1.19 1.19 0 0 0 .2169.0207 3.0935 3.0935 0 0 0 2.1586-1.1368z" />
              </svg>
            </a>
            <menu className="menu">
              {menuItems.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </menu>
            <div className="icon">
              <a href="#">
                <img src="/img/magnifying-glass.svg" alt="search" />
              </a>
              <a href="#">
                <img src="/img/bag-shopping.svg" alt="bag" />
              </a>
              <label htmlFor="inp" id="menuicon">
                <img src="/img/bars.svg" alt="bar" />
              </label>
            </div>
          </nav>
          <input type="checkbox" id="inp" />
          <div className="sidebar">
            <div className="close">
              <label htmlFor="inp">🗙</label>
            </div>
            <menu className="sidebarmenu">
              {menuItems.map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </menu>
          </div>
        </div>
      </div>
      <div id="headerslider">
        <div className="container">
          <div className="headerslider">
            {sliderItems.map((item) => (
              <div key={item.img}>
                <img src={`/img/${item.img}`} alt={item.alt} />
                <p>{item.label}</p>
                {item.isNew && <span className="new">new</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="headershop">
        <div className="container">
          <p>Get $180 - $620 in credit toward iPhone 15 or iPhone 15 Pro when you trade in iPhone 11or higher.</p>
          <a className="link" href="#">
            Shop Iphone <i className="fa-solid fa-chevron-right"></i>
          </a>
        </div>
      </div>
    </header>
  );
}
