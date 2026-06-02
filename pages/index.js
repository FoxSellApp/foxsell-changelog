import Head from "next/head"
import Image from "next/image"

const featuredStory = {
  date: "June 2, 2026",
  tag: "New",
  title: "A cleaner, faster dashboard home for getting started"
}

const changelogEntries = [
  {
    date: "May 16, 2026",
    tag: "Launch",
    title: "Guided bundle templates to help you launch faster",
    summary:
      "We introduced a more guided template setup flow for mix-and-match bundles so merchants can turn proven ideas into live offers with less manual work.",
    bullets: [
      "Structured setup flows for ready-to-use bundle templates",
      "A clearer path to preview, configure, and install template-based experiences",
      "Less friction when launching bundle layouts that already work well in real stores"
    ]
  },
  {
    date: "May 16, 2026",
    tag: "Improvement",
    title: "Template previews are easier to explore before you publish",
    summary:
      "Template discovery and previewing now feels steadier, so you can review layouts with more confidence before committing to a setup path.",
    bullets: [
      "Preview actions now feel more dependable and easier to follow",
      "Demo store links make templates easier to evaluate in a realistic storefront context",
      "Helpful guidance appears more naturally during template setup"
    ]
  },
  {
    date: "May 12, 2026",
    tag: "Storefront",
    title: "Better product option experiences for shoppers",
    summary:
      "We shipped a set of storefront experience improvements that make bundle selection clearer and more intuitive during the buying journey.",
    bullets: [
      "Color swatches are now supported for qualifying option selections",
      "Bundle quantity and pricing details are presented more clearly in the summary experience",
      "Fixed-price bundle summaries stay cleaner by hiding item-level prices when they are not useful"
    ]
  },
  {
    date: "May 12, 2026",
    tag: "Fixes",
    title: "More reliable add-ons behavior in mix-and-match bundles",
    summary:
      "Several edge cases around add-ons have been tightened so bundle behavior stays more dependable when shoppers change selections.",
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
      "We fixed several high-friction issues in bundle configuration so merchants can edit and launch advanced offers with fewer blockers.",
    bullets: [
      "Multi-variant bundles now handle empty variant states more gracefully",
      "Dynamic add-on bundle pricing edits are more dependable in supported configurations",
      "Per-option add-on setups now duplicate products more reliably in advanced bundle workflows"
    ]
  }
]

const releaseNotes = [
  "New setup guidance that reduces time-to-launch",
  "More polished preview and discovery moments for templates",
  "Stronger storefront clarity around options, summaries, and pricing",
  "Reliability fixes that reduce friction in advanced bundle editing"
]

export default function Home() {
  return (
    <>
      <Head>
        <title>FoxSell Changelog</title>
        <meta
          name="description"
          content="Merchant-facing product updates from FoxSell, redesigned into a polished public changelog experience."
        />
        <meta property="og:title" content="FoxSell Changelog" />
        <meta
          property="og:description"
          content="Browse the latest FoxSell launches, improvements, and fixes in a premium merchant-friendly changelog."
        />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className="page-shell">
        <section className="hero-section">
          <div className="hero-background-orb hero-background-orb-left" />
          <div className="hero-background-orb hero-background-orb-right" />

          <div className="hero-topbar">
            <div className="brand-lockup">
              <div className="brand-mark">
                <Image src="/assets/foxsell-logo.svg" alt="FoxSell" width={150} height={40} priority />
              </div>
              <span className="brand-caption">Product changelog</span>
            </div>
            <a className="ghost-link" href="#latest-updates">
              Latest updates
            </a>
          </div>

          <div className="hero-grid hero-grid-simple">
            <div className="hero-copy-column hero-copy-column-simple">
              <h1>FoxSell product changelog</h1>

              <div className="hero-actions">
                <a className="primary-action" href="#featured-release">
                  Read featured release
                </a>
                <a className="secondary-action" href="#latest-updates">
                  Browse the archive
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="featured-section" id="featured-release">
          <div className="section-heading-row">
            <div>
              <span className="section-kicker">Featured release</span>
              <h2>{featuredStory.title}</h2>
            </div>
          </div>

          <article className="featured-card featured-card-simple">
            <div className="entry-meta-row">
              <span className="entry-date">{featuredStory.date}</span>
              <span className="entry-tag">{featuredStory.tag}</span>
            </div>
          </article>
        </section>

        <section className="timeline-section" id="latest-updates">
          <div className="section-heading-row section-heading-row-archive">
            <div>
              <span className="section-kicker">Release archive</span>
              <h2>A changelog designed for browsing, not skimming past</h2>
            </div>
          </div>

          <div className="timeline-layout">
            <div className="timeline-rail">
              <div className="timeline-rail-line" />
              <div className="timeline-rail-label">Recent updates</div>
            </div>

            <div className="timeline-list">
              {changelogEntries.map((entry) => (
                <article className="entry-card" key={entry.title}>
                  <div className="entry-card-marker" />
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
          </div>
        </section>
      </main>
    </>
  )
}
