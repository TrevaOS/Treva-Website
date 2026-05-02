import { TermsOfService } from '../components/TermsOfService';
import SEOHead from '../components/SEOHead';

export default function TermsOfServicePage() {
  return (
    <>
      <SEOHead
        title="Terms of Service — Treva"
        description="The operating agreement for using Treva across all platform modules."
        url="https://treva.in/terms-of-service"
      />
      <TermsOfService />
    </>
  );
}
