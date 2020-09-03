import React, {useState} from 'react';
import Layout from '../components/layout';

const SUPPORT_ADDRESS = 'support@mngyuan.com';

const Support = () => {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const mailtoLink = `mailto:${SUPPORT_ADDRESS}?subject=${subject}&body=${body}`;

  return (
    <Layout>
      <div className="container">
        <label>
          Subject
          <input
            type="text"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
            placeholder="Descriptive and concise statement of issue"
          />
        </label>
        <label>
          Body
          <textarea
            onChange={(e) => setBody(e.target.value)}
            value={body}
            placeholder="Whatever you like, but if you're describing an issue please mention which screen it occurs on, and how to reproduce"
            rows={4}
          />
        </label>
        <div className="row">
          <input
            type="submit"
            value="Send"
            onClick={() => {
              const newWnd = window.open(mailtoLink);
              newWnd.opener = null;
            }}
          />
        </div>
      </div>
      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
            width: 100%;
            padding-top: 20%;
            padding-bottom: 20%;
            padding-left: 48px;
            padding-right: 48px;
            box-sizing: border-box;
            min-height: calc(100vh - 90px - 128px);
            width: 50%;
          }

          label {
            display: flex;
            flex-direction: column;
            margin-bottom: 8px;
          }

          row {
            display: flex;
            flex-direction: row;
          }

          input[type='text'],
          textarea {
            font-family: 'Space Grotesk';
            border: none;
            border-radius: 5px;
            padding: 8px;
            margin-top: 8px;
          }

          input[type='text']:focus,
          textarea:focus {
            outline: none;
          }

          input[type='submit'] {
            border-radius: 5px;
            border: none;
            outline: none;
          }
          input[type='submit']:active {
            background: #333;
            color: #d9d9d9;
          }

          input,
          textarea {
            font-size: 0.6rem;
          }
        `}
      </style>
    </Layout>
  );
};

export default Support;
