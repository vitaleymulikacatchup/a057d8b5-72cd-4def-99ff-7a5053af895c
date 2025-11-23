"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import TagAbout from '@/components/sections/about/TagAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardNine from '@/components/sections/feature/FeatureCardNine';
import PricingCardTwo from '@/components/sections/pricing/PricingCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Sparkles, Home, Trophy, Bed, Crown, Mail } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
      contentWidth="large"
      sizing="large"
      background="animatedGrid"
      cardStyle="layered-gradient"
      primaryButtonStyle="layered-depth"
      secondaryButtonStyle="glass"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="LuxeStay"
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763921344373-yp1abrg1.jpg"
          logoAlt="LuxeStay Hotel Logo"
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Pricing", id: "pricing" },
            { name: "Contact", id: "contact" }
          ]}
          button={{
            text: "Book Now",
            href: "contact"
          }}
          className="bg-background/80 backdrop-blur-md border border-accent/20"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboardGallery
          title="Welcome to Your Next Perfect Escape"
          description="Experience luxury hospitality with breathtaking views, world-class amenities, and unforgettable moments. Book your dream getaway today."
          tag="Luxury Hospitality"
          tagIcon={Sparkles}
          buttons={[
            {
              text: "Explore Rooms",
              href: "rooms"
            },
            {
              text: "Book Direct",
              href: "contact"
            }
          ]}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763921345216-6au8aice.jpg",
              imageAlt: "Luxury hotel lobby"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763921346024-ck3ltk40.jpg",
              imageAlt: "Elegant hotel bedroom"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763921346899-jxrql9we.jpg",
              imageAlt: "Resort pool with ocean view"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763921347636-hg3c4mx2.jpg",
              imageAlt: "Premium hotel suite"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763921348355-aovnf7fq.jpg",
              imageAlt: "Hotel terrace at sunset"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TagAbout
          tag="About LuxeStay"
          description="For over 25 years, LuxeStay has been crafting extraordinary hotel experiences. We combine timeless elegance with modern comfort, ensuring every guest feels like family. From our stunning architecture to our attentive service, we're committed to making your stay unforgettable."
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Our Room Collection"
          description="Choose from our carefully curated selection of rooms and suites designed for ultimate comfort"
          tag="Accommodations"
          tagIcon={Home}
          textboxLayout="default"
          animationType="slide-up"
          gridVariant="two-columns-alternating-heights"
          carouselMode="buttons"
          products={[
            {
              id: "1",
              brand: "LuxeStay",
              name: "Deluxe Room",
              price: "$189/night",
              rating: 5,
              reviewCount: "2.3k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763921349022-6nhht3l7.jpg",
              imageAlt: "Deluxe room with king bed"
            },
            {
              id: "2",
              brand: "LuxeStay",
              name: "Premium Suite",
              price: "$349/night",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763921349548-5elstpn0.jpg",
              imageAlt: "Premium suite with living area"
            },
            {
              id: "3",
              brand: "LuxeStay",
              name: "Standard Room",
              price: "$129/night",
              rating: 4,
              reviewCount: "3.1k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763921350382-7h168pg5.jpg",
              imageAlt: "Standard room comfortable"
            },
            {
              id: "4",
              brand: "LuxeStay",
              name: "Family Room",
              price: "$259/night",
              rating: 5,
              reviewCount: "1.5k",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763921351132-89ygowxq.jpg",
              imageAlt: "Spacious family room"
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardNine
          title="World-Class Amenities"
          description="Every detail crafted for your comfort and relaxation"
          tag="Premium Services"
          tagIcon={Trophy}
          textboxLayout="default"
          showStepNumbers={false}
          features={[
            {
              id: 1,
              title: "Full Spa & Wellness",
              description: "Rejuvenate your body and mind with our state-of-the-art spa facilities, expert therapists, and holistic wellness programs.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763921351961-dovmjh4i.jpg"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763921353920-xygm00ek.jpg"
              }
            },
            {
              id: 2,
              title: "Fine Dining Excellence",
              description: "Savor world-renowned cuisine crafted by our award-winning chefs in elegant dining spaces with panoramic views.",
              phoneOne: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763921352787-c48eclg7.jpg"
              },
              phoneTwo: {
                imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763921353343-10ckriem.jpg"
              }
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardTwo
          title="Transparent Pricing"
          description="Choose the perfect package for your stay with flexible options and exclusive benefits"
          tag="Room Rates"
          textboxLayout="default"
          animationType="slide-up"
          carouselMode="buttons"
          plans={[
            {
              id: "standard",
              badge: "Standard Room",
              badgeIcon: Bed,
              price: "$129/night",
              subtitle: "Perfect for budget-conscious travelers",
              features: [
                "Queen bed",
                "Private bathroom",
                "Free WiFi",
                "City view"
              ],
              buttons: [
                {
                  text: "Book Now",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "#"
                }
              ]
            },
            {
              id: "deluxe",
              badge: "Deluxe Room",
              badgeIcon: Sparkles,
              price: "$189/night",
              subtitle: "Our most popular choice",
              features: [
                "King bed",
                "Luxury amenities",
                "Premium WiFi",
                "Ocean/city view",
                "Mini bar"
              ],
              buttons: [
                {
                  text: "Book Now",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "#"
                }
              ]
            },
            {
              id: "suite",
              badge: "Premium Suite",
              badgeIcon: Crown,
              price: "$349/night",
              subtitle: "Ultimate luxury experience",
              features: [
                "Separate living area",
                "King bedroom",
                "Spa bath",
                "Panoramic views",
                "Concierge service",
                "Free premium drinks"
              ],
              buttons: [
                {
                  text: "Book Now",
                  href: "contact"
                },
                {
                  text: "Learn More",
                  href: "#"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Guest Stories"
          description="Hear from our delighted guests about their unforgettable experiences at LuxeStay"
          tag="Reviews"
          textboxLayout="default"
          animationType="slide-up"
          carouselMode="buttons"
          testimonials={[
            {
              id: "1",
              name: "Sarah Thompson",
              role: "Travel Blogger",
              testimonial: "LuxeStay exceeded all my expectations. The attention to detail, exceptional service, and breathtaking views made my honeymoon absolutely perfect. I've already recommended it to all my friends.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763921354744-hidh1dfg.jpg",
              imageAlt: "Sarah Thompson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Business Executive",
              testimonial: "The perfect balance of luxury and functionality. Their business center is top-notch, rooms are pristine, and the staff truly cares about your comfort. My go-to hotel for business trips.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763921355599-5kmd0p1w.jpg",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Interior Designer",
              testimonial: "From the moment I arrived, I was captivated by the elegant design and sophisticated ambiance. Every room is a masterpiece. The spa is heavenly. An absolute gem!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763921356644-pk0eeu0g.jpg",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Family Vacationer",
              testimonial: "We brought our kids and everyone had an amazing time. The family room was spacious, the staff was incredibly accommodating, and there's so much to do. We're already planning our return visit.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763921357209-ugj1d5wc.jpg",
              imageAlt: "David Kim"
            },
            {
              id: "5",
              name: "Jessica Martinez",
              role: "Wellness Coach",
              testimonial: "Their spa and wellness program is outstanding. I felt completely rejuvenated after my stay. The attention to health and wellness details is remarkable. Highly recommended!",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763921357960-arbc7at4.jpg",
              imageAlt: "Jessica Martinez"
            },
            {
              id: "6",
              name: "Robert Walsh",
              role: "Food Critic",
              testimonial: "The dining experience is world-class. Chef's table was phenomenal, service was impeccable, and the wine selection is extraordinary. A destination worth visiting for the food alone.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763921358876-hinlztg1.jpg",
              imageAlt: "Robert Walsh"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Find answers to common questions about your stay at LuxeStay. Can't find what you're looking for? Contact our concierge team."
          textPosition="left"
          animationType="smooth"
          showCard={true}
          faqs={[
            {
              id: "1",
              title: "What is your cancellation policy?",
              content: "We offer flexible cancellation up to 7 days before your arrival for a full refund. Bookings within 7 days are non-refundable but can be rebooked for a future date."
            },
            {
              id: "2",
              title: "Do you offer airport transfers?",
              content: "Yes! We provide complimentary airport transfers for all guests. Simply provide your flight details at booking, and we'll arrange everything for you."
            },
            {
              id: "3",
              title: "Are pets allowed?",
              content: "Small pets are welcome in select rooms for a nightly fee of $50. Please notify us at booking. Guide animals stay free."
            },
            {
              id: "4",
              title: "What's included in the room rate?",
              content: "All rates include breakfast, WiFi, and access to gym and pool facilities. Premium suites also include welcome drinks and evening turndown service."
            },
            {
              id: "5",
              title: "Can I extend my stay?",
              content: "Absolutely! Subject to availability, extensions can be arranged directly with our front desk or through your reservation email."
            },
            {
              id: "6",
              title: "Do you offer group rates?",
              content: "Yes, we offer special group rates for 10 or more rooms. Please contact our group sales team for a customized quote."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Stay Connected"
          title="Subscribe to Our Newsletter"
          description="Get exclusive offers, travel tips, and insider news delivered to your inbox. Join thousands of happy travelers."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763921359838-bfm7g7wr.jpg"
          imageAlt="Hotel concierge desk"
          mediaPosition="right"
          tagIcon={Mail}
          inputPlaceholder="your@email.com"
          buttonText="Get Exclusive Offers"
          termsText="We respect your privacy. Unsubscribe anytime. By subscribing, you agree to receive promotional emails from LuxeStay."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32SAuZG11YN2jMHmu0FsR9Di3IL/uploaded-1763921344373-yp1abrg1.jpg"
          logoText="LuxeStay"
          logoWidth={120}
          logoHeight={40}
          copyrightText="© 2025 LuxeStay Hotels. All rights reserved."
          columns={[
            {
              title: "Rooms & Rates",
              items: [
                {
                  label: "Deluxe Rooms",
                  href: "rooms"
                },
                {
                  label: "Premium Suites",
                  href: "rooms"
                },
                {
                  label: "Group Bookings",
                  href: "#"
                },
                {
                  label: "Special Packages",
                  href: "#"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Spa & Wellness",
                  href: "amenities"
                },
                {
                  label: "Fine Dining",
                  href: "amenities"
                },
                {
                  label: "Concierge",
                  href: "#"
                },
                {
                  label: "Event Venues",
                  href: "#"
                }
              ]
            },
            {
              title: "Company",
              items: [
                {
                  label: "About Us",
                  href: "about"
                },
                {
                  label: "Careers",
                  href: "#"
                },
                {
                  label: "Contact",
                  href: "contact"
                },
                {
                  label: "Blog",
                  href: "#"
                }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}