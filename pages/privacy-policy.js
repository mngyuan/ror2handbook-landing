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
      <h2>Information we collect</h2>
      <p>
        The app does not collect any personally identifiable information. In
        order to gain insight to improve the development of the app, aggregate,
        anonymous statistics, such as the percentage of users who use particular
        features, are collected.
      </p>
      <h2>Ads and Analytics</h2>
      <p>
        The RoR2 Handbook app does not collect any personal information. It
        collects aggregate, anonymous usage statistics, such as the number of
        times a particular feature is used, to improve the app. The RoR2
        Handbook app does not have ads. In the future, this may change to help
        support the solo indie development team, but only if deemed necessary by
        the developer.
      </p>
      <h2>Information usage</h2>
      <p>
        We do not have and thus do not share personal information with outside
        parties, and will not except to the extent necessary to accomplish RoR2
        Handbook’s functionality. We may share anonymous, aggregate statistics
        with outside parties, such as how many use the app.
      </p>

      <p>
        In the future, if we choose to collect your information, we may disclose
        your information in response to subpoenas, court orders, or other legal
        requirements; to exercise our legal rights or defend against legal
        claims; to investigate, prevent, or take action regarding illegal
        activities, suspected fraud or abuse, violations of our policies; or to
        protect our rights and property.
      </p>

      <p>
        In the future, we may sell to, buy, merge with, or partner with other
        businesses. In such transactions, user information may be among the
        transferred assets.
      </p>
      <h2>Security</h2>
      <p>
        The RoR2 Handbook app does not make any kind of network requests nor
        store any data of its own. If this changes, this privacy policy will be
        updated accordingly.
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
