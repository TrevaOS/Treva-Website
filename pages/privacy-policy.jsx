import { PrivacyPolicy } from '../components/PrivacyPolicy';
import SEOHead from '../components/SEOHead';

export default function PrivacyPolicyPage() {
  return (
    <>
      <SEOHead
        title="Privacy Policy — Treva"
        description="How Treva collects, uses, and protects data across all platform modules."
        url="https://treva.in/privacy-policy"
      />
      <PrivacyPolicy />
    </>
  );
}
