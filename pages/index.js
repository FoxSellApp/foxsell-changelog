import Head from "next/head"
import Image from "next/image"

const heroStats = [
  { value: "6", label: "Merchant-facing updates this month" },
  { value: "Templates", label: "Faster paths to launch bundles" },
  { value: "Public", label: "Written for merchants, not engineers" }
]

const highlights = [
  "New ways to launch bundles faster",
  "Sharper storefront buying experiences",
  "Important fixes that remove setup friction"
]

const changelogEntries = [
  {
    date: "June 2, 2026",
    tag: "New",
    title: "A cleaner, faster dashboard home for getting started",
    summary:
      "We introduced a refreshed FoxSell home experience that makes it easier to understand your bundle options, find the right next step, and get to value faster.",
    bullets: [
      "A clearer homepage with stronger guidance for first-time setup",
      "Better onboarding cues so merchants can move from install to launch with less guesswork",
      "Helpful resource and support touchpoints surfaced earlier in the journey"
    ]
  },
  {
    date: "May 16, 2026",
    tag: "Launch",
    title: "Guided bundle templates to help you launch faster",
    summary:
      "We rolled out a more guided template setup flow for mix-and-match bundles so merchants can move from idea to live offer with less manual work.",
    bullets: [
      "Structured setup flows for ready-to-use bundle templates",
      "A clearer way to preview, configure, and install template-based experiences",
      "Less friction when turning proven bundle layouts into live campaigns"
    ]
  },
  {
    date: "May 16, 2026",
    tag: "Improvement",
    title: "Template previews are easier to explore before you publish",
    summary:
      "We improved template discovery so you can review layouts with more confidence before committing to a setup path.",
    bullets: [
      "Preview actions now feel more dependable and easier to follow",
      "Demo store links make it easier to see templates in a realistic storefront context",
      "Template setup now includes more contextual guidance when you need help"
    ]
  },
  {
    date: "May 12, 2026",
    tag: "Storefront",
    title: "Better product option experiences for shoppers",
    summary:
      "We shipped a set of storefront experience improvements that make bundle selection clearer and more intuitive for shoppers.",
    bullets: [
      "Color swatches are now supported for qualifying option selections",
      "Bundle quantity and pricing details are presented more clearly in the summary experience",
      "Fixed-price bundle summaries now stay cleaner by hiding item-level prices when they are not useful"
    ]
  },
  {
    date: "May 12, 2026",
    tag: "Fixes",
    title: "More reliable add-ons behavior in mix-and-match bundles",
    summary:
      "We tightened several edge cases around add-ons so merchants can trust bundle behavior more when shoppers change selections.",
    bullets: [
      "Add-ons now stay better aligned with the option choices shoppers actually make",
      "Invalid or unavailable add-on states are cleared more reliably",
      "Bundle interactions behave more predictably when quantities or options change"
    ]
  },
  {
    date: "May 5, 2026",
    tag: "Fixes",
    title: "Smoother bundle editing for complex catalog setups",
    summary:
      "We fixed a handful of high-friction issues in bundle configuration so merchants can edit and launch offers with fewer blockers.",
    bullets: [
      "Multi-variant bundles now handle empty variant states more gracefully",
      "Dynamic add-on bundle pricing edits are more dependable in supported configurations",
      "Per-option add-on setups now duplicate products more reliably when building advanced bundle experiences"
    ]
  }
]

export default function Home() {
  return (
    <>
      <Head>
        <title>FoxSell Changelog</title>
        <meta
          name="description"
          content="Public product updates from FoxSell, including launches, improvements, and fixes that matter to merchants."
        />
        <meta property="og:title" content="FoxSell Changelog" />
        <meta
          property="og:description"
          content="See the latest FoxSell launches, improvements, and fixes in one polished, merchant-friendly changelog."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className="page-shell">
        <section className="hero-card">
          <div className="hero-copy-column">
            <span className="eyebrow">Public changelog</span>
            <div className="hero-brand-row">
              <Image
                src="/assets/foxsell-logo.svg"
                alt="FoxSell"
                className="hero-logo"
                width={220}
                height={58}
                priority
              />
            </div>
            <h1>Everything meaningful we’ve shipped for merchants.</h1>
            <p className="hero-copy">
              Follow the launches, improvements, and fixes that make FoxSell easier to set up,
              easier to manage, and better for your shoppers.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#latest-updates">
                Browse latest updates
              </a>
              <p className="hero-note">We keep this focused on real product value, not internal engineering noise.</p>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel-label">This month at a glance</div>
            <div className="stats-grid">
              {heroStats.map((stat) => (
                <div className="stat-card" key={stat.label}>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="highlights-card">
              <div className="highlights-title">What changed most</div>
              <ul>
                {highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="intro-band">
          <div>
            <span className="section-kicker">Why this exists</span>
            <h2>A changelog merchants can actually use</h2>
          </div>
          <p>
            We publish the updates that improve setup, selling, and shopper experience, then leave out
            the internal details you should not have to sift through.
          </p>
        </section>

        <section className="timeline-section" id="latest-updates">
          <div className="section-heading">
            <div>
              <span className="section-kicker">Latest updates</span>
              <h2>Recent launches, improvements, and fixes</h2>
            </div>
            <p>
              Curated from recent product work across FoxSell. Only meaningful merchant-facing changes make the cut.
            </p>
          </div>

          <div className="timeline">
            {changelogEntries.map((entry) => (
              <article className="entry-card" key={entry.title}>
                <div className="entry-header">
                  <div>
                    <div className="entry-date">{entry.date}</div>
                    <h3>{entry.title}</h3>
                  </div>
                  <span className="entry-tag">{entry.tag}</span>
                </div>
                <p>{entry.summary}</p>
                <ul>
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
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
