import CopyButton from "./copy-button";
import { person } from "./profile-content";
export default function CopyEmail() {
  return (
    <CopyButton
      text={person.email}
      className="copy-email"
      label="Copy email"
      copiedLabel="Email copied ✓"
      successMessage="Email address copied to clipboard"
      fallbackLabel="Select and copy this email address"
      inputLabel="Email address to copy"
    />
  );
}
