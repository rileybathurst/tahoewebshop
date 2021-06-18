import * as React from "react"

// markup
const IndexPage = () => {
  return (
    <>
    <div class="container y mandatory-scroll-snapping" dir="ltr">
    <header id="top" class="light three">
      <nav class="vert" style="grid-row: 1; grid-column: 1/4;">
        <ul style="width: 100%; display: flex; flex-direction: column-reverse; justify-content: space-between;">
          <li><a href="../#about">About//</a></li> {/* check on these links */}
          <li><a href="../#portfolio">Portfolio//</a></li>
          <li><a href="../#contact">Contact//</a></li>
        </ul>
      </nav>
      <div class="grid-place-center" style="grid-row: 2; grid-column: 1/4">
        <h1>Sorry</h1>
        <p>Your message is caught up in our spam filters.</p>
      </div>

      <div class="as-e js-c icon" style="grid-row: 3; grid-column: 1;">
        <a href="/features.html#local" aria-label="local"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="#bb6a1b"/><path d="M0 0h24v24H0z" fill="none"/></svg>
          Local</a>
      </div>

      <div class="as-e js-c icon" style="grid-row: 3; grid-column: 2;">
        <a href="/features.html#performance" aria-label="performance"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z" fill="#bb6a1b"/></svg>
          Performance</a>
      </div>

      <div class="as-e js-c icon" style="grid-row: 3; grid-column: 3;">
        <a href="/features.html#security" aria-label="security"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" fill="#bb6a1b"/></svg>
          Security</a>
      </div>
    </header>
  </div>
  </>
  )
}

export default IndexPage
