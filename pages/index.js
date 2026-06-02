const changelogEntries = [
  {
    date: "June 2026",
    title: "A clearer view of what ships in FoxSell",
    summary:
      "This changelog is where merchants can quickly catch up on the product improvements that matter most, without digging through release notes or support threads.",
    highlights: [
      "Merchant-friendly updates focused on real outcomes",
      "A single place to track new launches, fixes, and polish",
      "Only meaningful product changes get posted"
    ]
  },
  {
    date: "Coming soon",
    title: "Your first public update goes here",
    summary:
      "Knox can add future entries as noteworthy improvements ship, so the page stays useful without turning into noise.",
    highlights: [
      "Feature launches for bundles and upsells",
      "Shopping experience improvements",
      "Important reliability and quality updates"
    ]
  }
]

const stats = [
  { label: "Built for", value: "FoxSell merchants" },
  { label: "Update style", value: "Short and meaningful" },
  { label: "Audience", value: "Public and merchant-facing" }
]

import Head from "next/head"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Head>
        <title>FoxSell Changelog</title>
        <meta
          name="description"
          content="Merchant-facing product updates, launches, and improvements from FoxSell."
        />
        <meta property="og:title" content="FoxSell Changelog" />
        <meta
          property="og:description"
          content="See what&apos;s new in FoxSell with concise, merchant-friendly product updates."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="page-shell">
      <section className="hero-card">
        <div className="hero-topline">Product updates</div>
        <div className="hero-brand-row">
          <Image
            src="/assets/foxsell-logo.svg"
            alt="FoxSell"
            className="hero-logo"
            width={220}
            height={58}
            priority
          />
          <span className="hero-brand-name">Changelog</span>
        </div>
        <h1>See what&apos;s new in FoxSell</h1>
        <p className="hero-copy">
          Follow product improvements, launches, and quality upgrades that help merchants sell more with less guesswork.
        </p>
        <div className="stats-grid">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="content-grid">
        <div className="section-heading">
          <span>Latest updates</span>
          <p>Focused notes for merchants. No internal engineering detail, just what changed and why it matters.</p>
        </div>

        <div className="timeline">
          {changelogEntries.map((entry) => (
            <article className="entry-card" key={entry.title}>
              <div className="entry-date">{entry.date}</div>
              <h2>{entry.title}</h2>
              <p>{entry.summary}</p>
              <ul>
                {entry.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
      </main>
    </>
  )
}
