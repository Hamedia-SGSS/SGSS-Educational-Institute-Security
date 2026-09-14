import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PreFooterCTA } from "@/components/PreFooterCTA";

// Reusable icons for situations and fits
const situations = [
  { icon: "📋", title: "Visitor Check-in", desc: "Greeting and verifying credentials of parents, contractors, and guests at school entrances." },
  { icon: "🤝", title: "Student Disputes", desc: "De-escalating conflicts and monitoring high-activity areas like cafeterias or hallways." },
  { icon: "🚗", title: "Parking Lot Monitoring", desc: "Preventing vandalism, monitoring student drivers, and enforcing campus speed limits." },
  { icon: "🚶", title: "After-Hours Trespassing", desc: "Securing campus boundaries and vacant athletic fields against loiterers and vandals." },
  { icon: "🎨", title: "Vandalism", desc: "Preventing property damage, graffiti, and broken glass on administrative and classroom buildings." },
  { icon: "🎫", title: "Event Security", desc: "Managing crowds, monitoring admission gates, and directing traffic during athletic events or graduations." },
  { icon: "🏫", title: "Campus Patrol", desc: "Conducting foot or mobile checks of administrative buildings, dorms, and athletic complexes." },
  { icon: "🚨", title: "Emergency Response Support", desc: "Assisting staff during drills and providing real-time local coordination for emergency services." },
  { icon: "🔑", title: "Unauthorized Access", desc: "Politely intercepting individuals who bypass access control points and escorting them off-site." },
  { icon: "👥", title: "Staff Escort Requests", desc: "Accompanying teachers and administrative staff to their vehicles safely during evening or late hours." },
];

const properties = [
  { icon: "🏫", label: "Private Schools" },
  { icon: "🎒", label: "Charter Schools" },
  { icon: "🎓", label: "Colleges & Universities" },
  { icon: "📚", label: "Training Centers" },
  { icon: "🏢", label: "Administrative Offices" },
  { icon: "🏠", label: "Campus Housing" },
  { icon: "🏟️", label: "School Events" },
  { icon: "🏛️", label: "Educational Facilities" },
];

const coverageOptions = [
  { service: "School Hours & Daily Operations", schedule: "Mon - Fri Day", desc: "Monitoring front gate check-ins, hallway safety, and assisting staff during the active school day." },
  { service: "After-Hours & Event Security", schedule: "Evenings / Custom", desc: "Crowd control and parking coordination for athletic events, parent nights, and school board meetings." },
  { service: "Nights & Weekends Patrols", schedule: "24/7 Focus", desc: "Dedicated foot patrols and security checks when classrooms, labs, and dorms are empty." },
  { service: "Emergency Response Support", schedule: "On-Call / Flexible", desc: "Assisting school administrators with drills, lockouts, and emergency contact coordination." },
];

export default function EducationalInstituteSecurityPage() {
  return (
    <main className={styles.main}>
      {/* ===== NAVBAR ===== */}
      <Navbar />

      {/* ===== SECTION 1: HERO ===== */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroBg}>
          <Image
            src="https://cms.secureguardservices.com/wp-content/uploads/2026/09/ed1.png"
            alt="Secure Guard officer standing in front of a modern school campus during twilight"
            fill
            className={styles.heroBgImg}
            priority
            quality={90}
          />
          <div className={styles.heroOverlay} />
        </div>
        <div className={`container ${styles.heroWrapper}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge} id="hero-badge">
              <span className={styles.heroBadgeDot} />
              Educational Institute Security Services
            </div>
            <h1 className={styles.heroTitle} id="hero-title">
              Support Safer Campuses, Students, Staff, Visitors, <span className={styles.heroTitleAccent}>and Daily School Operations</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Secure Guard Security Services delivers responsive, de-escalation-focused protection for schools, universities, and training centers. Ensure a welcoming and secure learning environment.
            </p>
            <div className={styles.heroCtas}>
              <a 
                href="https://www.secureguardservices.com/contact" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.btnPrimary} 
                id="hero-cta-primary"
              >
                Request a Free Quote
              </a>
              <a 
                href="#solution" 
                className={styles.btnOutline} 
                id="hero-cta-secondary"
              >
                Explore Solutions
              </a>
            </div>
          </div>
        </div>
        <div className={styles.heroScroll} aria-hidden="true">
          <span className={styles.heroScrollDot} />
        </div>
      </section>

      {/* ===== SECTION 2: REAL-LIFE PROBLEM ===== */}
      <section className={styles.whySection} id="problem">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Real-Life Problem</span>
            <h2 className={styles.sectionTitle}>
              Maintaining Safety in an <span className={styles.titleAccent}>Academic Environment</span>
            </h2>
          </div>
          <div className={styles.whyGrid}>
            <div className={styles.whyText}>
              <p className={styles.bodyText}>
                Educational institutions must protect students, staff, visitors, buildings, parking areas, events, and campus property while maintaining a welcoming environment.
              </p>
              <p className={styles.bodyText}>
                Security concerns may include unauthorized visitors, student conflicts, parking issues, vandalism, after-hours activity, emergency response, and access control. Clients need trained personnel who can be visible, professional, and calm around students and families.
              </p>
            </div>
            <div className={styles.whyCards}>
              {[
                { icon: "🔑", title: "Unauthorized Access", desc: "Preventing unverified individuals from bypassing entrance protocols and entering classrooms." },
                { icon: "🤝", title: "Student Disputes", desc: "De-escalating conflicts between students or visitors calmly without disrupting the academic day." },
                { icon: "🎨", title: "Vandalism & Damage", desc: "Deterring graffiti, property damage, and destruction of facilities during low-traffic periods." },
                { icon: "🚗", title: "Parking Lot Issues", desc: "Monitoring school parking areas, supervising student drivers, and ensuring safe pick-up/drop-off." },
              ].map((c) => (
                <div key={c.title} className={styles.whyCard}>
                  <div className={styles.whyCardIconWrapper}>
                    <span className={styles.whyCardIcon}>{c.icon}</span>
                  </div>
                  <div className={styles.whyCardContent}>
                    <h3 className={styles.whyCardTitle}>{c.title}</h3>
                    <p className={styles.whyCardDesc}>{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: SECURE GUARD SOLUTION ===== */}
      <section className={styles.addonSection} id="solution">
        <div className="container">
          <div className={styles.addonGrid}>
            <div className={styles.addonImageCol}>
              <Image 
                src="https://cms.secureguardservices.com/wp-content/uploads/2026/09/ed2.png" 
                alt="Secure Guard officer conducting foot patrol on a modern school campus" 
                width={600} 
                height={500} 
                className={styles.addonImage} 
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className={styles.addonContent}>
              <span className={styles.sectionTag}>Secure Guard Solution</span>
              <h2 className={styles.sectionTitle}>
                Trained Personnel for <span className={styles.titleAccent}>Welcoming & Safe Campuses</span>
              </h2>
              <p className={styles.bodyText}>
                Secure Guard provides educational security officers for campus patrol, visitor check-in support, parking lot monitoring, event security, access control, incident reporting, and after-hours building checks.
              </p>
              <p className={styles.bodyText}>
                Our team is specifically trained to support daily operations, special events, school entrances, administrative buildings, and high-traffic areas. We focus on customer service and de-escalation to ensure a secure yet friendly atmosphere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: CUSTOMIZABLE COVERAGE ===== */}
      <section className={styles.towerSection} id="coverage">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTagLight}>Customizable Coverage</span>
            <h2 className={styles.sectionTitleLight}>
              Flexible Security Scheduling <span className={styles.titleAccentGold}>for Academic Campuses</span>
            </h2>
          </div>
          <p className={styles.bodyTextCenteredLight}>
            Coverage can be scheduled during school hours, nights, weekends, and holidays. We align our security presence with school calendars and campus events.
          </p>

          {/* Coverage Options Table */}
          <div className={styles.tableWrapper} id="coverage-table">
            <table className={styles.pricingTable}>
              <thead>
                <tr>
                  <th>Coverage Type</th>
                  <th>Schedule Focus</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {coverageOptions.map((row) => (
                  <tr key={row.service}>
                    <td className={styles.tdComponent}>{row.service}</td>
                    <td>
                      <span className={styles.badgeOptional}>{row.schedule}</span>
                    </td>
                    <td className={styles.tdDesc}>{row.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: WHAT THIS MEANS FOR THE CLIENT ===== */}
      <section className={styles.opsSection} id="benefits">
        <div className="container">
          <div className={styles.opsGrid}>
            <div className={styles.opsText}>
              <span className={styles.sectionTagLight}>Client Value</span>
              <h2 className={styles.sectionTitleLight}>
                What This Means <span className={styles.titleAccentGold}>for the Client</span>
              </h2>
              <p className={styles.bodyTextLight}>
                By deploying Secure Guard, you establish a reliable security presence that supports student and parent concerns, reduces property damage, and ensures a safer environment.
              </p>
            </div>
            <div className={styles.opsFeatures}>
              {[
                "Safer environment for students, staff, and visitors",
                "Better control of visitor access",
                "Visible presence across campus",
                "Support for student and parent concerns",
                "Documented incidents and patrol activity",
                "Improved parking and event coverage",
                "Flexible coverage for school hours, nights, and weekends",
              ].map((benefit, idx) => (
                <div key={idx} className={styles.opsFeatureItem}>
                  <span className={styles.opsFeatureIcon}>🛡️</span>
                  <span className={styles.opsFeatureLabel}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: COMMON SITUATIONS ===== */}
      <section className={styles.addonSectionAlt} id="situations">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Field Expertise</span>
            <h2 className={styles.sectionTitle}>
              Common Educational Security <span className={styles.titleAccent}>Situations We Handle</span>
            </h2>
          </div>
          <div className={styles.situationsGrid}>
            {situations.map((sit, index) => (
              <div key={index} className={styles.situationCard}>
                <div className={styles.situationHeader}>
                  <span className={styles.situationIcon}>{sit.icon}</span>
                  <h3 className={styles.situationTitle}>{sit.title}</h3>
                </div>
                <p className={styles.situationDesc}>{sit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: BEST FIT FOR ===== */}
      <section className={`${styles.gallerySection} ${styles.bestFitSection}`} id="best-fit">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTagLight}>Best Fit For</span>
            <h2 className={styles.sectionTitleLight}>
              Academic Environments We <span className={styles.titleAccentGold}>Secure & Support</span>
            </h2>
            <p className={styles.sectionSubtextLight}>
              Our specialized security officers are trained for all levels of education, from private academies to university complexes.
            </p>
          </div>
          <div className={styles.propertiesGrid}>
            {properties.map((prop, idx) => (
              <div key={idx} className={styles.propertyCard}>
                <div className={styles.propertyIcon}>{prop.icon}</div>
                <span className={styles.propertyLabel}>{prop.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRE-FOOTER CTA ===== */}
      <PreFooterCTA />

      {/* ===== FOOTER ===== */}
      <Footer />
    </main>
  );
}
