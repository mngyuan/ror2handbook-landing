import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const Layout = ({children}) => (
  <div className="container">
    <Head>
      <title>RoR2 Handbook</title>
      <link rel="icon" href="/favicon.png" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      />
    </Head>
    <header>
      <div className="logo-wrapper">
        <img src="ror2handbook.svg" alt="RoR2 Handbook logo" className="logo" />
        <Link href="/">
          <a>
            <span className="nameplate">RoR2 Handbook</span>
          </a>
        </Link>
      </div>
    </header>
    <main>{children}</main>
    <footer>
      <div className="footer-links">
        <Link href="/privacy-policy">
          <a>Privacy Policy</a>
        </Link>
        <Link href="/support">
          <a>Support</a>
        </Link>
      </div>
      <div className="footer-copyright">
        <a href="https://mngyuan.com">More by Kevin Lee</a>
      </div>
    </footer>
    <style jsx>{`
      .container {
        max-width: 1280px;
        margin: 0 auto;
      }

      header {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 32px 48px;
        box-sizing: border-box;
        align-items: center;
      }

      .logo {
        max-height: 64px;
      }

      .logo-wrapper {
        display: flex;
        flex-direction: row;
        flex: 1;
        align-items: center;
        color: rgb(120, 195, 234);
      }

      .nameplate {
        margin-left: 16px;
        user-select: none;
      }

      main {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 32px 48px;
        box-sizing: border-box;
        font-size: 0.6rem;
      }

      .footer-links a {
        margin-right: 24px;
      }

      .footer-copyright {
      }

      @media screen and (max-width: 640px) {
        .footer-copyright {
          text-align: right;
        }
      }
    `}</style>
    <style jsx global>
      {`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: 'Space Grotesk';
          font-weight: 500;
          font-size: 32px;
          background: rgb(55, 60, 70);
          color: #d9d9d9;
        }

        @font-face {
          font-family: 'Space Grotesk';
          src: url('SpaceGrotesk-Regular.eot'); /* IE9 Compat Modes */
          /* IE6-IE8 */
          src: url('SpaceGrotesk-Regular.eot?#iefix')
              format('embedded-opentype'),
            url('SpaceGrotesk-Regular.otf') format('opentype'),
            /* Modern Browsers */ url('SpaceGrotesk-Regular.woff')
              format('woff');
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: 'SpaceGrotesk';
          src: url('SpaceGrotesk-Medium.eot'); /* IE9 Compat Modes */
          /* IE6-IE8 */
          src: url('SpaceGrotesk-Medium.eot?#iefix') format('embedded-opentype'),
            url('SpaceGrotesk-Medium.otf') format('opentype'),
            /* Modern Browsers */ url('SpaceGrotesk-Medium.woff') format('woff');
          font-weight: 500;
          font-style: normal;
        }

        a {
          text-decoration: none;
          color: inherit;
        }
        a:hover {
          text-decoration: underline;
        }

        @media screen and (max-width: 640px) {
          html,
          body {
            font-size: 24px;
          }
        }
      `}
    </style>
  </div>
);

export default Layout;
