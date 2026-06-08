import Head from "next/head"
import Image from "next/image"
import * as Dialog from "@radix-ui/react-dialog"
import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"
import { ArrowRight, ExternalLink, Menu, Sparkles, X } from "lucide-react"

const featuredStory = {
  date: "June 8, 2026",
  tag: "Improvement",
  title: "Bundle Configuration and Validation Improvements",
  summary:
    "We’ve improved the Mix and Match Bundle details in the Bundle Configuration Block on the Shopify Admin Product Page to make bundle setup clearer and easier to manage while editing products in Shopify Admin.",
  bullets: [
    "More complete and intuitive bundle information now appears directly within the configuration block",
    "Merchants can review how Mix and Match bundles are structured without jumping between screens",
    "Stronger validation now blocks invalid bundle configurations from being purchased or added to cart"
  ]
}

const changelogEntries = [
  {
    date: "June 8, 2026",
    tag: "Improvement",
    title: "Bundle Configuration and Validation Improvements",
    summary:
      "We improved Mix and Match bundle visibility in Shopify Admin and strengthened purchase validation so merchants can manage bundle setups more confidently and shoppers can only buy valid configurations.",
    bullets: [
      "Bundle details are clearer and easier to review inside the Shopify Admin product configuration block",
      "Merchants get better bundle context during editing without needing to switch between screens",
      "Invalid bundle configurations can no longer be purchased, reducing broken bundle checkouts"
    ]
  },
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

const changelogUrl = "https://changelog.foxsell.com"
const socialPreviewImageUrl = `${changelogUrl}/social-preview.png`
const websiteUrl = "https://www.foxsell.com/?utm_source=foxsell_changelog&utm_medium=navbar&utm_campaign=public_changelog"
const appStoreUrl = "https://apps.shopify.com/foxsell-bundles-plus?utm_source=foxsell_changelog&utm_medium=cta&utm_campaign=public_changelog"
const helpDocsUrl = "https://help.foxsell.app/en/"

const navigationLinks = [
  {
    href: websiteUrl,
    label: "Website",
    description: "Explore FoxSell and product highlights",
    external: true
  },
  {
    href: helpDocsUrl,
    label: "Help docs",
    description: "Browse setup guides and troubleshooting",
    external: true
  }
]

function LinkButton({ href, children, variant = "secondary", className, external = false }) {
  const Component = href ? "a" : "button"

  return (
    <Component
      className={clsx("button", `button-${variant}`, className)}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      type={href ? undefined : "button"}
    >
      {children}
    </Component>
  )
}

function Surface({ asChild = false, className, children }) {
  const Component = asChild ? Slot : "div"

  return <Component className={clsx("surface-card", className)}>{children}</Component>
}

function TimelineEntry({ entry, index }) {
  return (
    <li className="timeline-item">
      <div className="timeline-track" aria-hidden="true">
        <span className="timeline-node" />
        {index !== changelogEntries.length - 1 ? <span className="timeline-stem" /> : null}
      </div>

      <Surface asChild>
        <article className="entry-card">
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
      </Surface>
    </li>
  )
}

function MobileNavigation() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="nav-menu-trigger" type="button" aria-label="Open navigation menu">
          <Menu size={18} strokeWidth={2.2} />
          <span>Menu</span>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="nav-drawer-overlay" />
        <Dialog.Content className="nav-drawer-content">
          <div className="nav-drawer-shell">
            <div className="nav-drawer-header">
              <div className="nav-drawer-brand-lockup">
                <span className="nav-drawer-caption">FoxSell changelog</span>
                <Image src="/assets/foxsell-logo.svg" alt="FoxSell" width={126} height={34} />
              </div>
              <Dialog.Close asChild>
                <button className="nav-drawer-close" type="button" aria-label="Close navigation menu">
                  <X size={18} strokeWidth={2.2} />
                </button>
              </Dialog.Close>
            </div>

            <div className="nav-drawer-body">
              <p className="nav-drawer-copy">Product updates, release notes, and launch highlights in one compact stream.</p>

              <div className="nav-drawer-links" role="list">
                {navigationLinks.map((navigationLink) => (
                  <Dialog.Close asChild key={navigationLink.label}>
                    <a className="nav-drawer-link-card" href={navigationLink.href} target="_blank" rel="noreferrer">
                      <div>
                        <span className="nav-drawer-link-label">{navigationLink.label}</span>
                        <span className="nav-drawer-link-description">{navigationLink.description}</span>
                      </div>
                      <ExternalLink size={16} strokeWidth={2.1} />
                    </a>
                  </Dialog.Close>
                ))}
              </div>

              <div className="nav-drawer-actions">
                <Dialog.Close asChild>
                  <a className="button button-primary" href="#featured-release">
                    Read featured release
                  </a>
                </Dialog.Close>
                <Dialog.Close asChild>
                  <a className="button button-secondary" href="#latest-updates">
                    Latest updates
                  </a>
                </Dialog.Close>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

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
        <meta property="og:type" content="website" />
        <meta property="og:url" content={changelogUrl} />
        <meta property="og:site_name" content="FoxSell Changelog" />
        <meta property="og:image" content={socialPreviewImageUrl} />
        <meta property="og:image:secure_url" content={socialPreviewImageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="FoxSell changelog social preview with branded product update artwork" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FoxSell Changelog" />
        <meta
          name="twitter:description"
          content="Browse the latest FoxSell launches, improvements, and fixes in a premium merchant-friendly changelog."
        />
        <meta name="twitter:image" content={socialPreviewImageUrl} />
        <meta name="twitter:image:alt" content="FoxSell changelog social preview with branded product update artwork" />
        <link rel="canonical" href={changelogUrl} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head>

      <main className="page-shell">
        <header className="site-header">
          <nav className="site-nav" aria-label="Primary navigation">
            <a className="nav-brand" href="#top" aria-label="Go to top of FoxSell changelog">
              <Image src="/assets/foxsell-logo.svg" alt="FoxSell" width={144} height={38} priority />
            </a>

            <div className="nav-desktop-links">
              {navigationLinks.map((navigationLink) => (
                <a key={navigationLink.label} className="nav-link" href={navigationLink.href} target="_blank" rel="noreferrer">
                  {navigationLink.label}
                </a>
              ))}
            </div>

            <div className="nav-desktop-actions">
              <LinkButton href="#latest-updates" variant="ghost" className="nav-inline-action">
                Latest updates
              </LinkButton>
              <LinkButton href={appStoreUrl} variant="primary" className="nav-inline-action" external>
                Install app
              </LinkButton>
            </div>

            <div className="nav-mobile-actions">
              <LinkButton href={appStoreUrl} variant="primary" className="nav-mobile-cta" external>
                Install
              </LinkButton>
              <MobileNavigation />
            </div>
          </nav>
        </header>

        <section className="hero-section" id="top">
          <div className="hero-background-orb hero-background-orb-left" />
          <div className="hero-background-orb hero-background-orb-right" />

          <div className="hero-topbar">
            <span className="brand-caption">Product changelog</span>
            <Surface className="hero-announcement">
              <Sparkles size={16} strokeWidth={2.1} />
              <span>Shipping clearer bundle experiences for merchants every week</span>
            </Surface>
          </div>

          <div className="hero-grid hero-grid-single">
            <div className="hero-copy-column">
              <span className="eyebrow">What&apos;s new</span>
              <h1>Product updates that help merchants launch better bundles, faster</h1>
              <p className="hero-copy">
                Follow the latest FoxSell launches, refinements, and fixes in one polished stream built for merchants who want clarity, not clutter.
              </p>

              <div className="hero-actions">
                <LinkButton href="#featured-release" variant="primary">
                  Read featured release
                  <ArrowRight size={18} strokeWidth={2.2} />
                </LinkButton>
                <LinkButton href="#latest-updates" variant="secondary">
                  Latest updates
                </LinkButton>
              </div>
            </div>
          </div>
        </section>

        <section className="featured-section" id="featured-release">
          <div className="section-heading-row section-heading-row-full">
            <div>
              <span className="section-kicker">Featured release</span>
              <h2>{featuredStory.title}</h2>
            </div>
          </div>

          <Surface asChild>
            <article className="featured-card">
              <div className="entry-header">
                <div>
                  <div className="entry-date">{featuredStory.date}</div>
                </div>
                <span className="entry-tag">{featuredStory.tag}</span>
              </div>
              <p>{featuredStory.summary}</p>
              <ul>
                {featuredStory.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          </Surface>
        </section>

        <section className="timeline-section" id="latest-updates">
          <div className="section-heading-row section-heading-row-full section-heading-row-archive">
            <div>
              <span className="section-kicker">Release archive</span>
              <h2>A changelog designed for browsing, not skimming past</h2>
            </div>
          </div>

          <Surface className="timeline-shell">
            <div className="timeline-shell-header">
              <span className="timeline-shell-kicker">Latest updates</span>
              <p>Browse recent launches, storefront polish, and reliability improvements in one continuous release stream.</p>
            </div>

            <ol className="timeline-list">
              {changelogEntries.map((entry, index) => (
                <TimelineEntry key={`${entry.date}-${entry.title}`} entry={entry} index={index} />
              ))}
            </ol>
          </Surface>
        </section>
      </main>
    </>
  )
}
