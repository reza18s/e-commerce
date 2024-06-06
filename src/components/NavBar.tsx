"use client";
import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";
import { useQuery } from "@tanstack/react-query";
import { usePathname } from "next/navigation";
import {
  Heart,
  PercentSquareIcon,
  PersonStanding,
  Search,
  ShoppingBag,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import { navList } from "@/lib/content";

export default function NavBar() {
  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: currentUser,
  });
  const pathname = usePathname();

  return (
    <header>
      <div className="header-main">
        <div className="container">
          <Link className="header-logo" href="#">
            <Image
              alt="Anon's logo"
              height="36"
              src="/logo/logo.svg"
              width="120"
            />
          </Link>

          <div className="header-search-container">
            <input
              className="search-field"
              name="search"
              placeholder="Enter your product name..."
              type="search"
            />

            <button className="search-btn">
              <Search className="bg-transparent"></Search>
            </button>
          </div>

          <div className="header-user-actions">
            <button className="action-btn">
              <Terminal></Terminal>
            </button>

            <button className="action-btn">
              <Heart></Heart>
              <span className="count">0</span>
            </button>

            <button className="action-btn">
              <ShoppingBag></ShoppingBag>
              <span className="count">0</span>
            </button>
          </div>
        </div>
      </div>
      <nav className="desktop-navigation-menu">
        <div className="container">
          <ul className="desktop-menu-category-list">
            {navList.map((el) => (
              <li className="menu-category" key={el.id}>
                <Link className="menu-title" href="#">
                  {el.title}
                </Link>
              </li>
            ))}

            <li className="menu-category">
              <Link className="menu-title" href="#">
                Categories
              </Link>

              <div className="dropdown-panel">
                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <Link href="#">Electronics</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Desktop</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Laptop</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Camera</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Tablet</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Headphone</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">
                      <Image
                        alt="headphone collection"
                        height="119"
                        src="/electronics-banner-1.jpg"
                        width="250"
                      />
                    </Link>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <Link href="#">Mens</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Formal</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Casual</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Sports</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Jacket</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Sunglasses</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">
                      <Image
                        alt="men's fashion"
                        height="119"
                        src="/mens-banner.jpg"
                        width="250"
                      />
                    </Link>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <Link href="#">Womens</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Formal</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Casual</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Perfume</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Cosmetics</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Bags</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">
                      <Image
                        alt="women's fashion"
                        height="119"
                        src="/womens-banner.jpg"
                        width="250"
                      />
                    </Link>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <Link href="#">Electronics</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Smart Watch</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Smart TV</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Keyboard</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Mouse</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">Microphone</Link>
                  </li>

                  <li className="panel-list-item">
                    <Link href="#">
                      <Image
                        alt="mouse collection"
                        height="119"
                        src="/electronics-banner-2.jpg"
                        width="250"
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </li>

            <li className="menu-category">
              <Link className="menu-title" href="#">
                Mens
              </Link>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <Link href="#">Shirt</Link>
                </li>

                <li className="dropdown-item">
                  <Link href="#">Shorts & Jeans</Link>
                </li>

                <li className="dropdown-item">
                  <Link href="#">Safety Shoes</Link>
                </li>

                <li className="dropdown-item">
                  <Link href="#">Wallet</Link>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <Link className="menu-title" href="#">
                Womens
              </Link>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <Link href="#">Dress & Frock</Link>
                </li>

                <li className="dropdown-item">
                  <Link href="#">Earrings</Link>
                </li>

                <li className="dropdown-item">
                  <Link href="#">Necklace</Link>
                </li>

                <li className="dropdown-item">
                  <Link href="#">Makeup Kit</Link>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <Link className="menu-title" href="#">
                Jewelry
              </Link>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <Link href="#">Earrings</Link>
                </li>

                <li className="dropdown-item">
                  <Link href="#">Couple Rings</Link>
                </li>

                <li className="dropdown-item">
                  <Link href="#">Necklace</Link>
                </li>

                <li className="dropdown-item">
                  <Link href="#">Bracelets</Link>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <Link className="menu-title" href="#">
                Perfume
              </Link>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <Link href="#">Clothes Perfume</Link>
                </li>

                <li className="dropdown-item">
                  <Link href="#">Deodorant</Link>
                </li>

                <li className="dropdown-item">
                  <Link href="#">Flower Fragrance</Link>
                </li>

                <li className="dropdown-item">
                  <Link href="#">Air Freshener</Link>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <Link className="menu-title" href="#">
                Blog
              </Link>
            </li>

            <li className="menu-category">
              <Link className="menu-title" href="#">
                Hot Offers
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="mobile-bottom-navigation">
        <button className="action-btn" data-mobile-menu-open-btn></button>

        <button className="action-btn">
          <span className="count">0</span>
        </button>

        <button className="action-btn"></button>

        <button className="action-btn">
          <span className="count">0</span>
        </button>

        <button className="action-btn" data-mobile-menu-open-btn></button>
      </div>

      <nav className="mobile-navigation-menu has-scrollbar" data-mobile-menu>
        <div className="menu-top">
          <h2 className="menu-title">Menu</h2>

          <button
            className="menu-close-btn"
            data-mobile-menu-close-btn
          ></button>
        </div>

        <ul className="mobile-menu-category-list">
          <li className="menu-category">
            <Link className="menu-title" href="#">
              Home
            </Link>
          </li>

          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Mens</p>

              <div></div>
            </button>

            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <Link className="submenu-title" href="#">
                  Shirt
                </Link>
              </li>

              <li className="submenu-category">
                <Link className="submenu-title" href="#">
                  Shorts & Jeans
                </Link>
              </li>

              <li className="submenu-category">
                <Link className="submenu-title" href="#">
                  Safety Shoes
                </Link>
              </li>

              <li className="submenu-category">
                <Link className="submenu-title" href="#">
                  Wallet
                </Link>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Womens</p>

              <div></div>
            </button>

            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <Link className="submenu-title" href="#">
                  Dress & Frock
                </Link>
              </li>

              <li className="submenu-category">
                <Link className="submenu-title" href="#">
                  Earrings
                </Link>
              </li>

              <li className="submenu-category">
                <Link className="submenu-title" href="#">
                  Necklace
                </Link>
              </li>

              <li className="submenu-category">
                <Link className="submenu-title" href="#">
                  Makeup Kit
                </Link>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Jewelry</p>

              <div></div>
            </button>

            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <Link className="submenu-title" href="#">
                  Earrings
                </Link>
              </li>

              <li className="submenu-category">
                <Link className="submenu-title" href="#">
                  Couple Rings
                </Link>
              </li>

              <li className="submenu-category">
                <Link className="submenu-title" href="#">
                  Necklace
                </Link>
              </li>

              <li className="submenu-category">
                <Link className="submenu-title" href="#">
                  Bracelets
                </Link>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Perfume</p>

              <div></div>
            </button>

            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <Link className="submenu-title" href="#">
                  Clothes Perfume
                </Link>
              </li>

              <li className="submenu-category">
                <Link className="submenu-title" href="#">
                  Deodorant
                </Link>
              </li>

              <li className="submenu-category">
                <Link className="submenu-title" href="#">
                  Flower Fragrance
                </Link>
              </li>

              <li className="submenu-category">
                <Link className="submenu-title" href="#">
                  Air Freshener
                </Link>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <Link className="menu-title" href="#">
              Blog
            </Link>
          </li>

          <li className="menu-category">
            <Link className="menu-title" href="#">
              Hot Offers
            </Link>
          </li>
        </ul>

        <div className="menu-bottom">
          <ul className="menu-category-list">
            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Language</p>
              </button>

              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <Link className="submenu-title" href="#">
                    English
                  </Link>
                </li>

                <li className="submenu-category">
                  <Link className="submenu-title" href="#">
                    Espa&ntilde;ol
                  </Link>
                </li>

                <li className="submenu-category">
                  <Link className="submenu-title" href="#">
                    Fren&ccedil;h
                  </Link>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <button className="accordion-menu" data-accordion-btn>
                <p className="menu-title">Currency</p>
              </button>

              <ul className="submenu-category-list" data-accordion>
                <li className="submenu-category">
                  <Link className="submenu-title" href="#">
                    USD &dollar;
                  </Link>
                </li>

                <li className="submenu-category">
                  <Link className="submenu-title" href="#">
                    EUR &euro;
                  </Link>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="menu-social-container">
            <li>
              <Link className="social-link" href="#"></Link>
            </li>

            <li>
              <Link className="social-link" href="#"></Link>
            </li>

            <li>
              <Link className="social-link" href="#"></Link>
            </li>

            <li>
              <Link className="social-link" href="#"></Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
