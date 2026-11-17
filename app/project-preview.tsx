export default function ProjectPreview({
  compact = false,
}: {
  compact?: boolean;
}) {
  return (
    <div
      className={`project-preview ${compact ? "compact" : ""}`}
      role="img"
      aria-label="CYR@ architecture overview: desktop shell connects to local FastAPI backend, permission controls, tool runtimes and task checkpoints."
    >
      <div className="preview-top">
        <span>
          CYR@ <span>/ SYSTEM MAP</span>
        </span>
        <span className="preview-indicator">LOCAL FIRST</span>
      </div>
      <div className="system-map">
        <div className="map-node shell-node">
          <span className="node-icon">⌘</span>
          <div>
            <small>01 / INTERFACE</small>
            <strong>Desktop shell</strong>
            <span>Tauri + React</span>
          </div>
          <span className="node-port" />
        </div>
        <div className="map-connector">
          <span>127.0.0.1</span>
        </div>
        <div className="map-node backend-node">
          <span className="node-icon">⌁</span>
          <div>
            <small>02 / COORDINATOR</small>
            <strong>Local backend</strong>
            <span>Python + FastAPI</span>
          </div>
        </div>
        <div className="map-branches">
          <span>↓</span>
          <span>↓</span>
          <span>↓</span>
        </div>
        <div className="map-leaves">
          <div>
            <small>AUTHORIZE</small>
            <strong>Permissions</strong>
            <span>Deny by default</span>
          </div>
          <div>
            <small>EXECUTE</small>
            <strong>Tool runtimes</strong>
            <span>Scoped actions</span>
          </div>
          <div>
            <small>RECORD</small>
            <strong>Checkpoints</strong>
            <span>Task recovery</span>
          </div>
        </div>
      </div>
      <div className="preview-bottom">
        <span>Architecture overview</span>
        <span>PUBLIC SOURCE ↗</span>
      </div>
    </div>
  );
}
