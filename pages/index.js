import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';
import FadeIn from '../components/fadein';

const Landing = () => (
  <>
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
    <Layout>
      <div className="above-fold">
        <div className="phone-mock">
          <FadeIn>
            <img src="mock1.png" alt="RoR2 Handbook open on an iPhone" />
          </FadeIn>
        </div>
        <span>
          Info and stats on all items and equipment for Risk of Rain 2.
        </span>
      </div>
      <div className="row">
        <a
          href="https://apps.apple.com/app/id1528143765"
          className="download-badge"
        >
          <img src="Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" />
        </a>
      </div>
      <div className="row">
        <div className="w-50 m-hide">
          <div className="w-50-inner">
            And survivors (and how to unlock them), too.
          </div>
        </div>
        <div className="w-50 m-w-100">
          <div className="w-50-inner">
            <span className="m-only">
              And survivors (and how to unlock them), too.
            </span>
            <div className="phone-mock-larger m-hide">
              <FadeIn>
                <img
                  src="mock2.png"
                  alt="Screenshot of RoR2 Handbook opened to a survivor detail screen"
                />
              </FadeIn>
            </div>
          </div>
        </div>
        <div className="m-only m-w-100">
          <div className="phone-mock-larger">
            <FadeIn>
              <img
                src="mock2.png"
                alt="Screenshot of RoR2 Handbook opened to a survivor detail screen"
              />
            </FadeIn>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="w-50 m-hide">
          <div className="w-50-inner">Your handheld RoR2 guide.</div>
        </div>
        <div className="w-50 m-w-100">
          <div className="w-50-inner">
            <span className="m-only">Your handheld RoR2 guide.</span>
            <div className="phone-mock-larger m-hide">
              <FadeIn>
                <img
                  src="mock4.png"
                  alt="RoR2 Handbook with Dark Mode enabled"
                />
              </FadeIn>
            </div>
          </div>
        </div>
        <div className="m-only m-w-100">
          <div className="phone-mock-larger">
            <FadeIn>
              <img src="mock4.png" alt="RoR2 Handbook with Dark Mode enabled" />
            </FadeIn>
          </div>
        </div>
      </div>
      <div className="row">
        <a
          href="https://apps.apple.com/app/id1528143765"
          className="download-badge"
        >
          <img src="Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg" />
        </a>
      </div>
      <style jsx>
        {`
          .above-fold {
            width: 50vw;
            display: flex;
            flex-direction: column;
            position: relative;
            align-items: center;
            text-align: center;
            padding-top: 40px;
          }

          .phone-mock {
            width: 50%;
            z-index: 2;
          }
          .phone-mock img {
            width: 100%;
          }

          .phone-mock-larger {
            width: 70%;
          }
          .phone-mock-larger img {
            width: 100%;
          }

          .row {
            width: 100%;
          }

          .w-50 {
            display: inline-block;
            width: 50%;
            position: relative;
          }
          .w-50:before {
            content: '';
            display: block;
            margin-top: 100%;
            height: 0;
          }
          .w-50-inner {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 16%;
            text-align: center;
          }

          .bottom {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            padding: 8%;
            padding-bottom: 8vh;
          }

          .download-badge {
            justify-content: center;
            align-items: center;
            display: flex;
            padding: 40px;
          }

          .download-badge img {
            width: 200px;
          }

          .m-only {
            display: none;
          }

          @media screen and (max-width: 640px) {
            .m-only {
              display: inherit;
            }
            .m-w-100 {
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .m-hide {
              display: none;
            }
            .above-the-fold {
              width: 85vw;
              padding-top: 20px;
            }
            .phone-mock {
              width: 100%;
            }
            .phone-mock-larger {
              width: 100%;
              background: 'blue';
            }
            .floating-logo {
              bottom: -5%;
              width: 90vw;
            }
            .w-50 {
              margin-bottom: 0;
            }
            .w-50.m-only {
              display: inline-block;
            }

            .download-badge img {
              width: 50%;
            }
          }
        `}
      </style>
    </Layout>
  </>
);

export default Landing;
