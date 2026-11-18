import CopyButton from "./copy-button";
export default function CopyLink({ path }: { path: string }) {
  return (
    <CopyButton
      path={path}
      label="Copy project link"
      copiedLabel="Link copied ✓"
      successMessage="Project link copied to clipboard"
      fallbackLabel="Copy this link"
      inputLabel="Project link to copy"
    />
  );
}
