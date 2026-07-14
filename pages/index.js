import Head from "next/head"
import Image from "next/image"
import { useMemo, useState, useSyncExternalStore } from "react"
import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  ExternalLink,
  Layers3,
  Menu,
  Moon,
  PackageCheck,
  Sparkles,
  Store,
  Sun,
  Wrench,
  X
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const featuredStory = {
  date: "July 14, 2026",
  tag: "Launch",
  title: "Bundle sales orders are now easier to review",
  summary:
    "Analytics now includes an order-level view of bundle sales, giving merchants a clearer path from revenue trends to the exact orders behind them.",
  bullets: [
    "Review bundle sales orders across flexible date ranges, including the last 12 months",
    "See the bundles sold, units sold, bundle sales, and total order value in one table",
    "Open the matching Shopify order directly from analytics when you need to investigate a sale"
  ]
}

const releaseImages = {
  tieredTemplate: {
    src: "https://raw.githubusercontent.com/knox-the-fox/foxsell-helpdoc-assets/master/supercut-bundle-builders-2026-07-08-refresh/tiered-template-31s.jpg",
    alt: "FoxSell help docs showing the Tiered Bundle Builder setup template selection screen",
    caption: "Tiered Bundle Builder setup from the FoxSell help docs",
    sourceUrl: "https://help.foxsell.app/en/article/how-to-set-up-tiered-bundle-builder-on-your-store-4zvwze/"
  },
  tieredStorefront: {
    src: "https://raw.githubusercontent.com/knox-the-fox/foxsell-helpdoc-assets/master/supercut-bundle-builders-2026-07-08-refresh/tiered-storefront-328s.jpg",
    alt: "FoxSell help docs showing a Tiered Bundle Builder storefront preview with tiered product selections",
    caption: "Tiered Bundle Builder storefront preview from the FoxSell help docs",
    sourceUrl: "https://help.foxsell.app/en/article/how-to-set-up-tiered-bundle-builder-on-your-store-4zvwze/"
  },
  guidedStorefront: {
    src: "https://raw.githubusercontent.com/knox-the-fox/foxsell-helpdoc-assets/master/supercut-bundle-builders-2026-07-08-refresh/guided-storefront-342s.jpg",
    alt: "FoxSell help docs showing a Guided Steps Bundle Builder storefront preview",
    caption: "Guided Steps storefront preview from the FoxSell help docs",
    sourceUrl: "https://help.foxsell.app/en/article/how-to-set-up-guided-steps-bundle-builder-on-your-store-1mppgmx/"
  },
  fixedInfiniteVariantSetup: {
    src: "https://raw.githubusercontent.com/knox-the-fox/foxsell-helpdoc-assets/master/03-products-addons-pricing.jpg",
    alt: "FoxSell help docs showing products, add-ons, and pricing setup for a fixed bundle with infinite variants",
    caption: "Fixed Bundle with Infinite Variants setup from the FoxSell help docs",
    sourceUrl: "https://help.foxsell.app/en/article/how-to-set-up-fixed-bundle-with-infinite-variants-on-your-store-9eaxy8/"
  },
  fixedInfiniteVariantStorefront: {
    src: "https://raw.githubusercontent.com/knox-the-fox/foxsell-helpdoc-assets/master/08-storefront-builder.jpg",
    alt: "FoxSell help docs showing a storefront builder preview for Fixed Bundle with Infinite Variants",
    caption: "Storefront builder preview from the FoxSell help docs",
    sourceUrl: "https://help.foxsell.app/en/article/how-to-set-up-fixed-bundle-with-infinite-variants-on-your-store-9eaxy8/"
  },
  themeSwatches: {
    src: "https://raw.githubusercontent.com/knox-the-fox/foxsell-helpdoc-assets/master/10-theme-settings-swatches.jpg",
    alt: "FoxSell help docs showing theme settings for color swatches",
    caption: "Theme swatch settings from the FoxSell help docs",
    sourceUrl: "https://help.foxsell.app/en/article/how-to-set-up-fixed-bundle-with-infinite-variants-on-your-store-9eaxy8/"
  },
  sectionSetup: {
    src: "https://raw.githubusercontent.com/knox-the-fox/foxsell-helpdoc-assets/master/supercut-bundle-builders-2026-07-08-refresh/tiered-section_settings-430s.jpg",
    alt: "FoxSell help docs showing section settings for a Tiered Bundle Builder setup",
    caption: "Theme section settings from the FoxSell help docs",
    sourceUrl: "https://help.foxsell.app/en/article/how-to-set-up-tiered-bundle-builder-on-your-store-4zvwze/"
  },
  bundleSalesOrders: {
    src: "/assets/bundle-sales-orders-analytics.png",
    alt: "FoxSell Bundles Plus analytics page showing bundle sales orders with date, bundles, units sold, bundle sales, order total, and view order columns",
    caption: "Bundle sales orders in FoxSell analytics",
    sourceUrl: "/assets/bundle-sales-orders-analytics.png",
    width: 2978,
    height: 964,
    fit: "contain"
  },
  configurationBuilder: {
    src: "/assets/configuration-builder-preview.png",
    alt: "FoxSell Configuration Builder preview showing a visual bundle editor with products, controls, and storefront preview",
    caption: "Configuration Builder preview from the FoxSell dashboard",
    sourceUrl: "/assets/configuration-builder-preview.png",
    width: 1774,
    height: 887
  },
  posBundleEditing: {
    src: "/assets/pos-bundle-editing.png",
    alt: "Illustration of the FoxSell POS bundle editor with guided steps, tier progress, selected products, and bundle validation",
    caption: "POS bundle editing for guided steps and tiered offers",
    sourceUrl: "/assets/pos-bundle-editing.png",
    width: 1774,
    height: 887
  },
  dashboardHome: {
    src: "/assets/dashboard-home-refresh.png",
    alt: "Illustration of the refreshed FoxSell dashboard home with setup progress, recommended next steps, and bundle templates",
    caption: "Refreshed dashboard home for faster setup",
    sourceUrl: "/assets/dashboard-home-refresh.png",
    width: 1774,
    height: 887
  }
}

const changelogEntries = [
  {
    date: "July 14, 2026",
    tag: "Launch",
    title: "Order-level bundle sales analytics",
    summary:
      "Merchants can now inspect the orders behind bundle revenue from a dedicated Bundle sales orders report in analytics.",
    bullets: [
      "Filter bundle sales orders by date range, including a last 12 months view for longer performance reviews",
      "Compare each order's bundles, units sold, bundle sales, and total order value without leaving the analytics table",
      "Jump from the report to the matching Shopify order when you need to follow up on a specific sale"
    ],
    image: releaseImages.bundleSalesOrders
  },
  {
    date: "July 14, 2026",
    tag: "Launch",
    title: "A new Configuration Builder path for eligible stores",
    summary:
      "Eligible merchants now have a direct entry point for a configuration-based bundle creation flow from the dashboard home and Mix and Match template selection.",
    bullets: [
      "Configuration Builder appears alongside other Mix and Match templates for stores with access",
      "The dashboard now routes eligible merchants into the new creation path from template discovery",
      "Localized template copy and preview imagery help merchants understand the new option before starting"
    ],
    image: releaseImages.configurationBuilder
  },
  {
    date: "July 7, 2026",
    tag: "Improvement",
    title: "Video tutorials and steadier template setup",
    summary:
      "We added tutorial entry points across the dashboard and tightened template setup flows so merchants can configure offers with clearer guidance and fewer interruptions.",
    bullets: [
      "Tiered Bundle Builder, Guided Steps Bundle Builder, and Fixed Bundle with Infinite Variants setup pages now include direct video tutorial links near the bundle details",
      "Dashboard help resources now route Dashboard V2 merchants to the current FoxSell tutorial collection",
      "Template setup is more stable when saving edits, detecting theme support, and configuring Guided Steps automatic add-ons"
    ],
    image: releaseImages.tieredTemplate
  },
  {
    date: "July 6, 2026",
    tag: "Launch",
    title: "Fixed bundles with infinite variant choices",
    summary:
      "A new product-page template helps merchants sell curated fixed bundles while still giving shoppers flexible variant choices for each included product.",
    bullets: [
      "Fixed Bundle with Infinite Variants is now available in the mix-and-match template gallery",
      "Merchants can choose fixed bundle pricing or a percentage discount off the selected products",
      "Add-ons and free gifts can be configured as always included or optional choices on the product page"
    ],
    image: releaseImages.fixedInfiniteVariantStorefront
  },
  {
    date: "July 6, 2026",
    tag: "Fixes",
    title: "Smoother bundle setup, saving, and cleanup",
    summary:
      "We tightened several dashboard flows so merchants get clearer setup guidance and land in the right place after creating, saving, or deleting bundles.",
    bullets: [
      "Template installation guidance now separates section-based setup from product-block setup for compatible Shopify themes",
      "Bundle creation redirects now wait for the save state to clear before opening the new bundle",
      "Delete dialogs now close more reliably before returning merchants to the bundle list"
    ],
    image: releaseImages.sectionSetup
  },
  {
    date: "June 12, 2026",
    tag: "Launch",
    title: "Smarter POS bundle editing for guided steps and tiered offers",
    summary:
      "The FoxSell POS bundle editor now gives staff a clearer way to configure guided steps and tiered bundle offers, while automatically keeping tier pricing and validation aligned with what was selected.",
    bullets: [
      "Guided Steps Bundle Builder and Tiered Bundle Builder offers are now supported directly in POS bundle configuration and edit flows",
      "Tier ladders, quantity rules, and add-on pricing are surfaced more clearly so staff can build bundles with fewer mistakes",
      "Editing a bundle now keeps the correct tier discount and updates the underlying bundle variant when quantity thresholds change"
    ],
    image: releaseImages.posBundleEditing
  },
  {
    date: "June 12, 2026",
    tag: "Improvement",
    title: "Clearer quantity limits across bundle setup screens",
    summary:
      "We refined how bundle quantity limits are shown so merchants and staff can understand flexible quantity ranges more easily, including Guided Steps Bundle Builder offers with effectively unlimited upper bounds.",
    bullets: [
      "Very high guided-step quantity caps now display as infinity instead of confusing raw values",
      "Category and tier guidance is easier to read while configuring or editing bundles",
      "POS product selection screens now make it clearer when more items can still be added or when a limit has been reached"
    ],
    image: releaseImages.guidedStorefront
  },
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
    ],
    image: releaseImages.fixedInfiniteVariantSetup
  },
  {
    date: "June 2, 2026",
    tag: "Launch",
    title: "A cleaner, faster dashboard home for getting started",
    summary:
      "We refreshed the first-touch FoxSell dashboard experience so merchants can get oriented faster, understand what to do next, and launch value with less wandering.",
    bullets: [
      "A more focused home experience that brings setup momentum closer to the surface",
      "Clearer guidance for the first actions that matter after install",
      "A cleaner visual hierarchy that makes the dashboard feel faster and more polished"
    ],
    image: releaseImages.dashboardHome
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
    ],
    image: releaseImages.tieredTemplate
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
    ],
    image: releaseImages.guidedStorefront
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
    ],
    image: releaseImages.themeSwatches
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
    ],
    image: releaseImages.fixedInfiniteVariantSetup
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
    ],
    image: releaseImages.fixedInfiniteVariantSetup
  }
]

const changelogUrl = "https://changelog.foxsell.com"
const socialPreviewImageUrl = `${changelogUrl}/assets/foxsell-changelog-feature.png`
const websiteUrl = "https://www.foxsell.com/?utm_source=foxsell_changelog&utm_medium=navbar&utm_campaign=public_changelog"
const appStoreUrl = "https://apps.shopify.com/foxsell-bundles-plus?utm_source=foxsell_changelog&utm_medium=cta&utm_campaign=public_changelog"
const helpDocsUrl = "https://help.foxsell.app/en/"
const lightLogoUrl = "/assets/foxsell-logo.svg"
const darkLogoUrl = "/assets/foxsell-logo-white.svg"
const themeStorageKey = "foxsell-changelog-theme"
const themeChangeEvent = "foxsell-changelog-theme-change"
const mobileViewportQuery = "(max-width: 700px)"

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

const categoryTabs = ["All", "Launch", "Improvement", "Fixes", "Storefront"]

function getSystemTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function getThemeSnapshot() {
  const appliedTheme = document.documentElement.dataset.theme
  const storedTheme = window.localStorage.getItem(themeStorageKey)

  return appliedTheme || storedTheme || getSystemTheme()
}

function getServerThemeSnapshot() {
  return "light"
}

function subscribeToThemeStore(onStoreChange) {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")

  window.addEventListener(themeChangeEvent, onStoreChange)
  mediaQuery.addEventListener("change", onStoreChange)

  return () => {
    window.removeEventListener(themeChangeEvent, onStoreChange)
    mediaQuery.removeEventListener("change", onStoreChange)
  }
}

function getMobileViewportSnapshot() {
  return window.matchMedia(mobileViewportQuery).matches
}

function getServerMobileViewportSnapshot() {
  return false
}

function subscribeToMobileViewport(onStoreChange) {
  const mediaQuery = window.matchMedia(mobileViewportQuery)

  mediaQuery.addEventListener("change", onStoreChange)

  return () => {
    mediaQuery.removeEventListener("change", onStoreChange)
  }
}

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme
  window.localStorage.setItem(themeStorageKey, theme)
  window.dispatchEvent(new Event(themeChangeEvent))
}

const categoryMeta = {
  Launch: { icon: PackageCheck, variant: "success" },
  Improvement: { icon: Sparkles, variant: "default" },
  Fixes: { icon: Wrench, variant: "secondary" },
  Storefront: { icon: Store, variant: "outline" }
}

const updateStats = [
  { label: "Recent releases", value: changelogEntries.length },
  { label: "Launches", value: changelogEntries.filter((entry) => entry.tag === "Launch").length },
  { label: "Quality updates", value: changelogEntries.filter((entry) => entry.tag === "Fixes" || entry.tag === "Improvement").length }
]

const spotlightCards = [
  {
    icon: Layers3,
    label: "Bundle templates",
    copy: "New ways to launch offers faster, with clearer setup from preview to publish."
  },
  {
    icon: Store,
    label: "Storefront polish",
    copy: "Updates that make bundle choices easier for shoppers to understand."
  },
  {
    icon: CheckCircle2,
    label: "Reliability fixes",
    copy: "Cleaner saving, editing, and admin flows for day-to-day bundle management."
  }
]

function ReleaseBadge({ tag }) {
  const meta = categoryMeta[tag] ?? categoryMeta.Improvement
  const Icon = meta.icon

  return (
    <Badge variant={meta.variant}>
      <Icon size={14} strokeWidth={2.25} />
      {tag}
    </Badge>
  )
}

function FoxSellLogo({ width = 144, height = 38, priority = false }) {
  return (
    <span className="foxsell-logo" role="img" aria-label="FoxSell">
      <Image
        className="foxsell-logo-light"
        src={lightLogoUrl}
        alt=""
        width={width}
        height={height}
        priority={priority}
        aria-hidden="true"
      />
      <Image
        className="foxsell-logo-dark"
        src={darkLogoUrl}
        alt=""
        width={width}
        height={height}
        priority={priority}
        aria-hidden="true"
      />
    </span>
  )
}

function ThemeToggle({ isDarkMode, onToggle }) {
  const nextTheme = isDarkMode ? "light" : "dark"

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={isDarkMode}
      onClick={onToggle}
    >
      <span className="theme-toggle-thumb" aria-hidden="true" />
      <span className="theme-toggle-icon theme-toggle-sun">
        <Sun size={16} strokeWidth={2.2} />
      </span>
      <span className="theme-toggle-icon theme-toggle-moon">
        <Moon size={16} strokeWidth={2.2} />
      </span>
    </button>
  )
}

function ReleaseImage({ image, compact = false }) {
  if (!image) {
    return null
  }

  const releaseImageClassName = [
    "release-image",
    compact ? "release-image-compact" : null,
    image.fit === "contain" ? "release-image-contained" : null
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <figure className={releaseImageClassName}>
      <a href={image.sourceUrl} target="_blank" rel="noreferrer" aria-label={`Open image source for ${image.caption}`}>
        <Image src={image.src} alt={image.alt} width={image.width ?? 640} height={image.height ?? 360} sizes="(max-width: 700px) 100vw, 420px" />
      </a>
      <figcaption>{image.caption}</figcaption>
    </figure>
  )
}

function NavMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" aria-label="Open navigation menu">
          <Menu size={18} strokeWidth={2.2} />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <div className="sheet-title-row">
            <FoxSellLogo width={130} height={35} />
            <SheetClose asChild>
              <Button variant="ghost" size="icon" aria-label="Close navigation menu">
                <X size={18} strokeWidth={2.2} />
              </Button>
            </SheetClose>
          </div>
          <SheetTitle>FoxSell changelog</SheetTitle>
          <SheetDescription>Product updates, launch notes, and improvements for merchants.</SheetDescription>
        </SheetHeader>

        <div className="sheet-link-list">
          {navigationLinks.map((navigationLink) => (
            <SheetClose asChild key={navigationLink.label}>
              <a className="sheet-link" href={navigationLink.href} target="_blank" rel="noreferrer">
                <span>
                  <span className="sheet-link-label">{navigationLink.label}</span>
                  <small>{navigationLink.description}</small>
                </span>
                <ExternalLink size={16} strokeWidth={2.1} />
              </a>
            </SheetClose>
          ))}
        </div>

        <div className="sheet-actions">
          <SheetClose asChild>
            <Button asChild>
              <a href="#latest-updates">Browse updates</a>
            </Button>
          </SheetClose>
          <SheetClose asChild>
            <Button asChild variant="secondary">
              <a href={appStoreUrl} target="_blank" rel="noreferrer">
                Install app
              </a>
            </Button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  )
}

function ReleaseCard({ entry }) {
  return (
    <Card className="release-card">
      <CardHeader>
        <div className="release-card-meta">
          <span className="release-date">
            <CalendarDays size={15} strokeWidth={2.1} />
            {entry.date}
          </span>
          <ReleaseBadge tag={entry.tag} />
        </div>
        <CardTitle>{entry.title}</CardTitle>
        <CardDescription>{entry.summary}</CardDescription>
      </CardHeader>
      <ReleaseImage image={entry.image} />
      <CardContent>
        <ul className="release-bullets">
          {entry.bullets.map((bullet) => (
            <li key={bullet}>
              <CheckCircle2 size={16} strokeWidth={2.35} />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

function ReleaseGrid({ entries }) {
  return (
    <div className="release-grid">
      {entries.map((entry) => (
        <ReleaseCard key={`${entry.date}-${entry.title}`} entry={entry} />
      ))}
    </div>
  )
}

function TimelineView({ entries }) {
  return (
    <div className="release-timeline">
      {entries.map((entry) => (
        <article className="timeline-entry" key={`${entry.date}-${entry.title}`}>
          <div className="timeline-rail" aria-hidden="true">
            <span />
          </div>
          <Card className="timeline-card">
            <CardHeader>
              <div className="release-card-meta">
                <span className="release-date">
                  <CalendarDays size={15} strokeWidth={2.1} />
                  {entry.date}
                </span>
                <ReleaseBadge tag={entry.tag} />
              </div>
              <CardTitle>{entry.title}</CardTitle>
              <CardDescription>{entry.summary}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className={entry.image ? "timeline-card-body" : "timeline-card-body timeline-card-body-text-only"}>
                <ReleaseImage image={entry.image} compact />
                <ul className="release-bullets">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>
                      <CheckCircle2 size={16} strokeWidth={2.35} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </article>
      ))}
    </div>
  )
}

export default function Home() {
  const theme = useSyncExternalStore(subscribeToThemeStore, getThemeSnapshot, getServerThemeSnapshot)
  const isMobileViewport = useSyncExternalStore(
    subscribeToMobileViewport,
    getMobileViewportSnapshot,
    getServerMobileViewportSnapshot
  )
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [releaseView, setReleaseView] = useState("Timeline")

  const isDarkMode = theme === "dark"
  const filteredEntries = useMemo(() => {
    if (selectedCategory === "All") {
      return changelogEntries
    }

    return changelogEntries.filter((entry) => entry.tag === selectedCategory)
  }, [selectedCategory])
  const visibleReleaseView = isMobileViewport ? "Timeline" : releaseView

  const toggleTheme = () => {
    const updatedTheme = theme === "dark" ? "light" : "dark"
    applyTheme(updatedTheme)
  }

  return (
    <>
      <Head>
        <title>FoxSell Changelog</title>
        <meta
          name="description"
          content="Merchant-friendly product updates from FoxSell, including launches, storefront improvements, and reliability fixes."
        />
        <meta name="color-scheme" content="light dark" />
        <meta property="og:title" content="FoxSell Changelog" />
        <meta
          property="og:description"
          content="Browse the latest FoxSell launches, storefront improvements, and reliability fixes for merchants."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={changelogUrl} />
        <meta property="og:site_name" content="FoxSell Changelog" />
        <meta property="og:image" content={socialPreviewImageUrl} />
        <meta property="og:image:secure_url" content={socialPreviewImageUrl} />
        <meta property="og:image:width" content="1774" />
        <meta property="og:image:height" content="887" />
        <meta property="og:image:alt" content="FoxSell changelog social preview showing product update cards and release highlights" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="FoxSell Changelog" />
        <meta
          name="twitter:description"
          content="Browse the latest FoxSell launches, storefront improvements, and reliability fixes for merchants."
        />
        <meta name="twitter:image" content={socialPreviewImageUrl} />
        <meta name="twitter:image:alt" content="FoxSell changelog social preview showing product update cards and release highlights" />
        <link rel="canonical" href={changelogUrl} />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      </Head>

      <main className="app-shell">
        <header className="site-header">
          <nav className="site-nav" aria-label="Primary navigation">
            <a className="nav-brand" href="#top" aria-label="Go to top of FoxSell changelog">
              <FoxSellLogo width={144} height={38} priority />
            </a>

            <div className="nav-links">
              {navigationLinks.map((navigationLink) => (
                <Button asChild key={navigationLink.label} variant="ghost" size="sm">
                  <a href={navigationLink.href} target="_blank" rel="noreferrer">
                    {navigationLink.label}
                  </a>
                </Button>
              ))}
            </div>

            <div className="nav-actions">
              <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
              <Button asChild variant="secondary" size="sm">
                <a href="#latest-updates">Latest updates</a>
              </Button>
              <Button asChild size="sm">
                <a href={appStoreUrl} target="_blank" rel="noreferrer">
                  Install app
                  <ExternalLink size={14} strokeWidth={2.2} />
                </a>
              </Button>
            </div>

            <div className="mobile-menu">
              <ThemeToggle isDarkMode={isDarkMode} onToggle={toggleTheme} />
              <NavMenu />
            </div>
          </nav>
        </header>

        <section className="hero-section" id="top">
          <div className="hero-copy">
            <Badge variant="outline">
              <Sparkles size={14} strokeWidth={2.25} />
              Product changelog
            </Badge>
            <h1>FoxSell product updates, organized for busy merchants.</h1>
            <p>
              Follow new launches, storefront improvements, and reliability fixes in one simple place, with the details that help you decide what to try next.
            </p>
            <div className="hero-actions">
              <Button asChild size="lg">
                <a href="#featured-release">
                  Read featured release
                  <ArrowRight size={18} strokeWidth={2.25} />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a href="#latest-updates">Open archive</a>
              </Button>
            </div>
          </div>

          <Card className="release-console">
            <CardHeader>
              <div className="release-console-topline">
                <span>Latest update</span>
                <Badge variant="success">Live</Badge>
              </div>
              <CardTitle>{featuredStory.title}</CardTitle>
              <CardDescription>{featuredStory.summary}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="console-metrics">
                {updateStats.map((stat) => (
                  <div className="console-metric" key={stat.label}>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <a href="#latest-updates" className="console-link">
                Browse all updates
                <ChevronRight size={16} strokeWidth={2.25} />
              </a>
            </CardFooter>
          </Card>
        </section>

        <section className="spotlight-section" aria-label="Release focus areas">
          {spotlightCards.map((card) => {
            const Icon = card.icon

            return (
              <Card className="spotlight-card" key={card.label}>
                <CardHeader>
                  <span className="spotlight-icon">
                    <Icon size={20} strokeWidth={2.25} />
                  </span>
                  <CardTitle>{card.label}</CardTitle>
                  <CardDescription>{card.copy}</CardDescription>
                </CardHeader>
              </Card>
            )
          })}
        </section>

        <section className="featured-section" id="featured-release">
          <div className="section-heading">
            <Badge variant="outline">Featured release</Badge>
            <h2>Latest improvements, pulled forward for quick review.</h2>
          </div>

          <Card className="featured-card">
            <div className="featured-media">
              <ReleaseImage image={releaseImages.bundleSalesOrders} compact />
            </div>
            <div className="featured-content">
              <CardHeader>
                <div className="release-card-meta">
                  <span className="release-date">
                    <CalendarDays size={15} strokeWidth={2.1} />
                    {featuredStory.date}
                  </span>
                  <ReleaseBadge tag={featuredStory.tag} />
                </div>
                <CardTitle>{featuredStory.title}</CardTitle>
                <CardDescription>{featuredStory.summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="featured-bullets">
                  {featuredStory.bullets.map((bullet) => (
                    <li key={bullet}>
                      <CheckCircle2 size={17} strokeWidth={2.35} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
          </Card>
        </section>

        <section className="archive-section" id="latest-updates">
          <div className="section-heading archive-heading">
            <Badge variant="outline">Release archive</Badge>
            <h2>Filter updates by the work your team cares about.</h2>
          </div>

          <div className="archive-controls">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="category-tabs">
              <TabsList aria-label="Filter changelog entries">
                {categoryTabs.map((category) => (
                  <TabsTrigger value={category} key={category}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>

            <label className="mobile-category-filter">
              <span>Category</span>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger aria-label="Filter changelog entries by category">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categoryTabs.map((category) => (
                    <SelectItem value={category} key={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </label>

            {!isMobileViewport ? (
              <Tabs value={releaseView} onValueChange={setReleaseView} className="view-tabs">
                <TabsList aria-label="Choose changelog presentation">
                  <TabsTrigger value="Cards">Cards</TabsTrigger>
                  <TabsTrigger value="Timeline">Timeline</TabsTrigger>
                </TabsList>
              </Tabs>
            ) : null}
          </div>

          {visibleReleaseView === "Timeline" ? <TimelineView entries={filteredEntries} /> : <ReleaseGrid entries={filteredEntries} />}
        </section>
      </main>
    </>
  )
}
