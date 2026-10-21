import Image from "next/image";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PreFooterCTA } from "@/components/PreFooterCTA";

// Reusable icons for situations and fits
const situations = [
  { icon: "📋", title: "Visitor Check-in", desc: "Greeting and verifying credentials of parents, contractors, and guests at school entrances per campus visitor procedures." },
  { icon: "🤝", title: "Student Disputes", desc: "Using verbal de-escalation and notifying school administrators in authorized common areas." },
  { icon: "🚗", title: "Parking Lot Monitoring", desc: "Observe arrival and departure areas, deter vandalism, and report unsafe driving to authorized school staff (traffic enforcement remains with school administration or law enforcement)." },
  { icon: "🚶", title: "After-Hours Trespassing", desc: "Patrolling campus boundaries and vacant athletic fields to deter loitering and report trespassing." },
  { icon: "🎨", title: "Vandalism", desc: "Deterring property damage, graffiti, and vandalism on administrative and classroom buildings through visible patrols." },
  { icon: "🎫", title: "Event Security", desc: "Managing queues, monitoring admission gates, and supporting parking flow during athletic events or graduations." },
  { icon: "🏫", title: "Campus Patrol", desc: "Conducting foot or mobile checks of administrative buildings, dorms, and athletic complexes as defined in campus post orders." },
  { icon: "🚨", title: "Emergency Response Support", desc: "Follow the school emergency operations plan under administrator direction, supporting lockdown and lockout procedures as assigned." },
  { icon: "🔑", title: "Unauthorized Access", desc: "Report access violations and coordinate with authorized school administrators and law enforcement when appropriate." },
  { icon: "👥", title: "Staff Escort Requests", desc: "Accompanying teachers and administrative staff to their vehicles during evening or late hours when included in post orders." },
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
  { service: "School Hours & Daily Operations", schedule: "Sample: Mon - Fri Day", desc: "Monitoring front gate check-ins and patrolling authorized campus common areas and entrances under school policies and administrative supervision." },
  { service: "After-Hours & Event Security", schedule: "Evenings / Custom", desc: "Crowd management and parking support for athletic events, parent nights, and school board meetings." },
  { service: "Nights & Weekends Patrols", schedule: "Sample / Custom Schedule", desc: "Scheduled foot or mobile patrols when classrooms, labs, and dorms are closed (coverage hours and patrol frequency are tailored to the school agreement)." },
  { service: "Emergency Response Support", schedule: "By Agreement / Assigned", desc: "Follow the school emergency operations plan under administrator direction, supporting lockdown and lockout procedures as assigned." },
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
              Secure Guard Security Services delivers responsive, de-escalation-focused security for schools, universities, and training centers. Support a welcoming learning environment through visible patrols, visitor procedures, and incident reporting.
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
                Educational institutions must support the safety of students, staff, visitors, buildings, parking areas, events, and campus property while maintaining a welcoming environment.
              </p>
              <p className={styles.bodyText}>
                Security concerns may include unauthorized visitors, student conflicts, parking issues, vandalism, after-hours activity, emergency procedures, and access control. Clients need trained personnel who can be visible, professional, and calm around students and families.
              </p>
            </div>
            <div className={styles.whyCards}>
              {[
                { icon: "🔑", title: "Unauthorized Access", desc: "Report access violations and coordinate with authorized school administrators and law enforcement when appropriate." },
                { icon: "🤝", title: "Student Disputes", desc: "De-escalating conflicts calmly and notifying school staff without disrupting the academic day." },
                { icon: "🎨", title: "Vandalism & Damage", desc: "Deterring graffiti, property damage, and vandalism of facilities during low-traffic periods." },
                { icon: "🚗", title: "Parking Lot Issues", desc: "Observe arrival and departure areas and report unsafe driving to authorized school staff (traffic enforcement remains with school administration or law enforcement)." },
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
                Officers patrol authorized campus common areas and entrances under school policies and administrative supervision. Assigned officers complete required vetting, age-appropriate conduct orientation, and campus-specific post orders per the school&apos;s agreement.
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
            Sample schedules are shown below. Coverage hours, patrol frequency, and staffing levels are tailored to your school&apos;s service agreement and academic calendar.
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
                By deploying Secure Guard, you establish a reliable security presence that supports administrators with student and parent concerns, helps deter property damage, and supports a welcoming campus environment.
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
              Assigned officers complete required vetting, age-appropriate conduct orientation, and campus-specific post orders per the school&apos;s agreement.
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
