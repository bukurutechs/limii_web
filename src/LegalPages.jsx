import React from 'react'
import {
  ArrowLeft,
  CheckCircle2,
  Clock3,
  Database,
  FileText,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Trash2,
} from 'lucide-react'

const supportEmail = 'support@limii.co.tz'

function LegalLogo() {
  return <img className="legal-logo" src="/limii-logo.png" alt="Limii" width="112" height="42" />
}

function LegalShell({ children }) {
  return (
    <div className="legal-page">
      <header className="legal-nav">
        <div className="legal-container legal-nav-inner">
          <a href="/" aria-label="Limii home"><LegalLogo /></a>
          <a className="legal-back" href="/"><ArrowLeft size={16} /> Back to home</a>
        </div>
      </header>
      <main className="legal-container">{children}</main>
      <footer className="legal-footer">
        <div className="legal-container legal-footer-inner">
          <span>© 2026 Limii. All rights reserved.</span>
          <div><a href="/privacy-policy">Privacy Policy</a><a href="/delete-account">Delete Account</a></div>
        </div>
      </footer>
    </div>
  )
}

export function DeleteAccountPage() {
  const subject = encodeURIComponent('Limii account deletion request')
  const body = encodeURIComponent(
    'Hello Limii Support,\n\nI would like to delete my Limii account.\n\nRegistered facility name:\nRegistered phone number:\nReason (optional):\n\nI understand that this request permanently deletes my account data, except records Limii must retain for legal or regulatory purposes.'
  )

  return (
    <LegalShell>
      <section className="legal-hero">
        <span className="legal-icon danger"><Trash2 /></span>
        <p className="legal-kicker">ACCOUNT MANAGEMENT</p>
        <h1>Delete your Limii account</h1>
        <p>You can request permanent deletion of your Limii account and associated facility information at any time.</p>
      </section>

      <div className="legal-layout">
        <article className="legal-card legal-content">
          <h2>How to request deletion</h2>
          <ol className="delete-steps">
            <li><span>1</span><div><b>Send your request</b><p>Use the button below to email Limii Support from an address you can access.</p></div></li>
            <li><span>2</span><div><b>Confirm your identity</b><p>Provide your facility name and registered phone number. We may contact you to prevent unauthorized deletion.</p></div></li>
            <li><span>3</span><div><b>We process the request</b><p>After verification, your account will be scheduled for permanent deletion.</p></div></li>
          </ol>

          <a className="delete-button" href={`mailto:${supportEmail}?subject=${subject}&body=${body}`}>
            <Mail size={18} /> Request account deletion
          </a>
          <p className="email-fallback">If the button does not open your email app, write to <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.</p>
        </article>

        <aside className="legal-side">
          <div className="info-card">
            <Clock3 />
            <div><b>Processing time</b><p>Requests are normally completed within 30 days after identity confirmation.</p></div>
          </div>
          <div className="info-card">
            <LockKeyhole />
            <div><b>Security check</b><p>We verify account ownership before deleting any information.</p></div>
          </div>
        </aside>
      </div>

      <section className="data-section">
        <div>
          <span className="data-icon"><Database /></span>
          <h2>Data that will be deleted</h2>
          <ul>
            <li><CheckCircle2 /> Account profile and login information</li>
            <li><CheckCircle2 /> Facility details and uploaded verification documents</li>
            <li><CheckCircle2 /> Saved addresses, preferences and app activity</li>
            <li><CheckCircle2 /> Information not required for legal record keeping</li>
          </ul>
        </div>
        <div>
          <span className="data-icon amber"><FileText /></span>
          <h2>Data we may retain</h2>
          <p>Some completed transaction and order records may be retained where required by tax, accounting, pharmaceutical, fraud-prevention or other applicable laws. Retained information is restricted and deleted when the required retention period ends.</p>
        </div>
      </section>

      <div className="warning-box">
        <b>This action is permanent.</b>
        <p>Once deletion is completed, your account, access and eligible data cannot be restored. Pending orders should be resolved before requesting deletion.</p>
      </div>
    </LegalShell>
  )
}

export function PrivacyPolicyPage() {
  return (
    <LegalShell>
      <section className="legal-hero">
        <span className="legal-icon"><ShieldCheck /></span>
        <p className="legal-kicker">LEGAL</p>
        <h1>Privacy Policy</h1>
        <p>This policy explains how Limii collects, uses, protects and shares information when you use our medicine and medical-supply ordering services.</p>
        <small>Effective date: 23 August 2026</small>
      </section>

      <article className="policy-card">
        <PolicySection title="1. Information we collect">
          <p>We may collect the following information:</p>
          <ul>
            <li><b>Account details:</b> name, phone number, email address and password credentials.</li>
            <li><b>Facility details:</b> facility name, type, owner or manager name, location and verification status.</li>
            <li><b>Verification information:</b> licences, certificates, identification and other documents collected by our team to verify a healthcare facility.</li>
            <li><b>Order information:</b> selected products, quantities, prices, delivery details, notes, order status and purchase history.</li>
            <li><b>Technical information:</b> device type, operating system, IP address, app diagnostics and usage information.</li>
            <li><b>Support communications:</b> messages and information you provide when requesting assistance.</li>
          </ul>
        </PolicySection>

        <PolicySection title="2. How we use information">
          <ul>
            <li>Create and secure your Limii account.</li>
            <li>Allow you to browse products, place orders and follow order progress.</li>
            <li>Verify facilities before processing their orders.</li>
            <li>Arrange fulfilment, delivery and customer support.</li>
            <li>Send OTP codes, service messages and important order updates.</li>
            <li>Improve reliability, prevent fraud and protect Limii users.</li>
            <li>Meet legal, regulatory, tax and accounting obligations.</li>
          </ul>
        </PolicySection>

        <PolicySection title="3. Facility verification and order processing">
          <p>You may browse and place orders before your facility is approved. Orders from an unapproved facility remain pending and are not processed further until verification is completed. Our team may contact you separately to request the documents needed for approval.</p>
        </PolicySection>

        <PolicySection title="4. How information is shared">
          <p>We do not sell your personal information. We may share only the information necessary with:</p>
          <ul>
            <li>Suppliers, fulfilment teams and delivery partners handling your order.</li>
            <li>Messaging, hosting, security and technical service providers supporting Limii.</li>
            <li>Professional advisers, regulators or public authorities when legally required.</li>
            <li>A successor organization in connection with a lawful merger, acquisition or transfer, subject to appropriate safeguards.</li>
          </ul>
        </PolicySection>

        <PolicySection title="5. Data security">
          <p>We use appropriate administrative and technical safeguards to protect information against unauthorized access, loss, misuse or alteration. No electronic system is completely secure, but we continuously work to protect Limii and its users.</p>
        </PolicySection>

        <PolicySection title="6. Data retention">
          <p>We retain information only for as long as needed to provide Limii, resolve disputes, prevent fraud and meet legal or regulatory requirements. Retention periods may differ for account, verification and transaction records.</p>
        </PolicySection>

        <PolicySection title="7. Your choices and rights">
          <p>Subject to applicable law, you may request access, correction or deletion of your personal information and may object to certain uses. Account deletion requests can be submitted through our <a href="/delete-account">Delete Account page</a>.</p>
        </PolicySection>

        <PolicySection title="8. Children">
          <p>Limii is a business service for authorized healthcare facilities and is not intended for children.</p>
        </PolicySection>

        <PolicySection title="9. Policy updates">
          <p>We may update this policy when our services or legal obligations change. The latest version and its effective date will always be published on this page.</p>
        </PolicySection>

        <PolicySection title="10. Contact us">
          <p>For privacy questions or requests, contact <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.</p>
        </PolicySection>
      </article>
    </LegalShell>
  )
}

function PolicySection({ title, children }) {
  return <section className="policy-section"><h2>{title}</h2>{children}</section>
}
