import Tooltip from "./Tooltip";

export default function Label({ children, textForTooltip, ...props }) {
  return (
    <label
      style={{
        display: "flex",
        gap: "3px",
      }}
      {...props}
    >
      {children}
      <Tooltip text={textForTooltip} />

    </label>
  );
}
