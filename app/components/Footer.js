const footerColumns = [
  [
    {
      id: "shop",
      label: "Shop and Learn",
      links: [
        "Store",
        "Mac",
        "Ipad",
        "Iphone",
        "Watch",
        "Vision",
        "AirPods",
        "Tv & Home",
        "Airtag",
        "Accessories",
        "Gift Cards",
      ],
    },
    { id: "wallet", label: "Apple Wallet", links: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"] },
  ],
  [
    { id: "account", label: "Account", links: ["Manage Your Apple iD", "Apple Store Account", "ICloud.com"] },
    {
      id: "entertainment",
      label: "Entertainment",
      links: [
        "Apple One",
        "Apple TV+",
        "Apple Music",
        "Apple Arcade",
        "Apple Fitness +",
        "Apple Podcasts",
        "Apple Books",
        "Apple Store",
      ],
    },
  ],
  [
    {
      id: "appstore",
      label: "Apple Store",
      links: [
        "Apple One",
        "Apple TV+",
        "Apple Music",
        "Apple Arcade",
        "Apple Fitness +",
        "Apple Podcasts",
        "Apple Books",
        "Apple Store",
      ],
    },
  ],
  [
    { id: "business", label: "For Business", links: ["Apple and Businness", "Shop for Business"] },
    { id: "education", label: "For Education", links: ["Apple and education", "Shop for K-12", "Shop for Collage"] },
    {
      id: "care",
      label: "For Healthcare",
      links: ["Apple in Healthcare", "Health on Apple Watch", "Health Records on Iphone"],
    },
    { id: "gover", label: "For Government", links: ["Shop For Government", "Shop for Veterans and Military"] },
  ],
  [
    {
      id: "valu1",
      label: "App Values",
      links: [
        "Apple One",
        "Apple TV+",
        "Apple Music",
        "Apple Arcade",
        "Apple Fitness +",
        "Apple Podcasts",
        "Apple Books",
        "Apple Store",
      ],
    },
    {
      id: "valu2",
      label: "App Values",
      links: [
        "Apple One",
        "Apple TV+",
        "Apple Music",
        "Apple Arcade",
        "Apple Fitness +",
        "Apple Podcasts",
        "Apple Books",
        "Apple Store",
      ],
    },
  ],
];

function FooterGroup({ id, label, links }) {
  return (
    <div>
      <input type="checkbox" id={id} />
      <label htmlFor={id}>
        <a href="#">{label}</a> <i className="fa-solid fa-chevron-down"></i>
      </label>
      <ul className="flist">
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="ffirst">
          <a href="#">
            <i className="fa-brands fa-apple"></i>
          </a>
          <a href="#">
            <span>
              <i className="fa-solid fa-chevron-right"></i> Iphone
            </span>
          </a>
        </div>
        <div className="fmenu">
          {footerColumns.map((column, i) => (
            <div className="w20" key={i}>
              {column.map((group) => (
                <FooterGroup key={group.id} {...group} />
              ))}
            </div>
          ))}
        </div>
        <p>
          More ways to shop:
          <a className="flink" href="#">
            Find an Apple Store
          </a>{" "}
          or{" "}
          <a className="flink" href="#">
            other retailer
          </a>{" "}
          near you. Or call 1-800-MY-APPLE.
        </p>
        <hr />
        <div className="flast">
          <p>United States</p>
          <p>Copyright © 2024 Apple Inc. All rights reserved.</p>
          <p>Privacy Policy | Terms of Use | Sales and Refunds | Legal | Site Map</p>
        </div>
      </div>
    </footer>
  );
}
