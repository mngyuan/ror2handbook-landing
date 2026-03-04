import React from 'react';
import Layout from '../components/layout';

const PrivacyPolicy = () => (
  <Layout>
    <div className="container">
      <h1>Privacy Policy</h1>
      <p>
        This policy applies to all information collected by the RoR2 Handbook
        app for iPhone and any other devices and platforms.
      </p>
      <h2>Information We Collect</h2>
      <p>
        The app does not collect names, email addresses, contact information,
        location data, or store user-generated content. However, we do collect
        some non-personal information through Google AdMob for analytics
        purposes:
      </p>
      <ul>
        <li>
          Usage data: We collect anonymous data about how the app is used, such
          as which features are accessed and how often.
        </li>
        <li>
          Device ID: We collect a unique identifier for your device for
          analytics purposes.
        </li>
      </ul>
      <p>
        Neither of these types of data are linked to you personally nor contain
        any personal information.
      </p>
      <h2>Advertising</h2>
      <p>
        RoR2 Handbook uses Google AdMob, a third-party advertising service
        provided by Google, to serve personalized ads within the app. AdMob
        accesses your device&apos;s advertising identifier (IDFA on iOS, GAID
        on Android) to serve personalized ads. AdMob may collect information
        including:
      </p>
      <ul>
        <li>Device information (device type, operating system version)</li>
        <li>Advertising identifier (IDFA on iOS, GAID on Android)</li>
        <li>IP address (used for approximate geolocation)</li>
        <li>Ad interaction data (impressions and clicks)</li>
      </ul>
      <p>
        For more information about how Google uses your data, please visit{' '}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google&apos;s Privacy Policy
        </a>{' '}
        and{' '}
        <a
          href="https://policies.google.com/technologies/partner-sites"
          target="_blank"
          rel="noopener noreferrer"
        >
          how Google uses data from partner apps
        </a>
        .
      </p>
      <h2>Information Usage</h2>
      <p>We use the collected information for the following purposes:</p>
      <ul>
        <li>To analyze app usage patterns and improve user experience</li>
        <li>To identify and fix potential issues or bugs</li>
        <li>
          To make data-driven decisions about future app development and feature
          prioritization
        </li>
        <li>To serve advertisements through Google AdMob</li>
      </ul>
      <h2>Information Sharing</h2>
      <p>
        We do not sell or transfer any user information to third parties, except
        in the following circumstances:
      </p>
      <ul>
        <li>
          With Google AdMob for the purpose of serving advertisements, as
          described in the Advertising section above
        </li>
        <li>
          As required by law or in response to subpoenas, court orders, or other
          legal requirements
        </li>
        <li>To exercise our legal rights or defend against legal claims</li>
        <li>
          To investigate, prevent, or take action regarding illegal activities,
          suspected fraud or abuse, or violations of our policies
        </li>
        <li>To protect our rights and property</li>
        <li>
          In connection with a sale, merger, or acquisition of all or part of
          our business, in which case user information may be among the
          transferred assets
        </li>
      </ul>
      <h2>Your Choices</h2>
      <p>
        You can opt out of personalized ads through your device settings. On
        both iOS and Android, go to{' '}
        <strong>Settings &gt; Manage Ad Preferences</strong> to control ad
        personalization.
      </p>
      <p>
        Please note that opting out of personalized ads does not remove ads from
        the app — you will still see ads, but they may be less relevant to you.
      </p>
      <h2>Data Security</h2>
      <p>
        We are committed to safeguarding any information collected through the
        app and employ appropriate technical and organisational measures to do
        so. That said, no data transmission or storage method can be guaranteed
        to be completely secure.
      </p>
      <h2>Your Consent</h2>
      <p>By using our app, you consent to our privacy policy.</p>
      <h2>Contacting Us</h2>
      <p>
        If you have questions regarding this privacy policy, you may email{' '}
        <a
          href="mailto:support@mngyuan.com?subject=Privacy Policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          support@mngyuan.com
        </a>
        .
      </p>
      <h2>Changes to this policy</h2>
      <p>
        If we decide to change our privacy policy, we will post those changes on
        this page. Summary of changes so far:
      </p>
      <ul>
        <li>
          4 Mar 2026: Update to include information about Google AdMob
          personalized ads and IDFA usage
        </li>
        <li>
          15 Sept 2020: Update to reflect aggregate, anonymous usage analytics
          collection.
        </li>
        <li>3 Sept 2020: First published.</li>
      </ul>
    </div>
    <style jsx>{`
      .container {
        padding: 48px;
        width: 50%;
        font-size: 0.6rem;
      }
    `}</style>
  </Layout>
);

export default PrivacyPolicy;
