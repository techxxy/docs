// https://nextra.site/docs/docs-theme/theme-configuration

import React from 'react'
import { useRouter } from 'next/router'
import { useConfig} from 'nextra-theme-docs'

export default {
  logo: (
    <>
      <svg width="30" height="30" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M14.683 14.828a4.055 4.055 0 0 1-1.272.858a4.002 4.002 0 0 1-4.875-1.45l-1.658 1.119a6.063 6.063 0 0 0 1.621 1.62a5.963 5.963 0 0 0 2.148.903a6.035 6.035 0 0 0 3.542-.35a6.048 6.048 0 0 0 1.907-1.284c.272-.271.52-.571.734-.889l-1.658-1.119a4.147 4.147 0 0 1-.489.592z M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 2c2.953 0 5.531 1.613 6.918 4H5.082C6.469 5.613 9.047 4 12 4zm0 16c-4.411 0-8-3.589-8-8c0-.691.098-1.359.264-2H5v1a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2h2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-1h.736c.166.641.264 1.309.264 2c0 4.411-3.589 8-8 8z"
        />
      </svg>
      <span style={{ marginLeft: '.4em', fontWeight: 800 }}>
        Techxxy's Documentation
      </span>
    </>
  ),
  docsRepositoryBase: 'https://github.com/techxxy/documentation/tree/main',
  project: {
    link: 'https://github.com/techxxy'
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Techxxy'
    }
  },
  head: () => {
    const { asPath, defaultLocale, locale } = useRouter()
    const { frontMatter } = useConfig()
    const url =
      'https://my-app.com' +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`)
     return (
      <>
        <meta property="og:url" content={"https://techxxy.github.io/documentation"} />
        <meta property="og:title" content={frontMatter.title || 'Techxxy\'s Wiki Site'} />
        <meta
          property="og:description"
          content={frontMatter.description || 'Techxxy\'s personal documentation site, focusing mainly on software projects.'}
        />
      </>
    )
  }
}