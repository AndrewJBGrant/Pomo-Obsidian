export default function ToolTip({
  tooltipText = "Here we have text",
  position = "top",
}) {
  return (
    <div className="tooltip-trigger">
      <div className={`tooltip-test tooltip-${position}`}>{tooltipText}</div>
    </div>
  );
}
