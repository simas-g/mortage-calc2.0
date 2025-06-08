import styles from "./Tooltip.module.css";
import { Info } from "lucide-react";
export default function Tooltip({ text }) {
  return (
    <div className={styles.card}>
      <Info size={20} className="info" />
      <div className={styles.content}>{text}</div>
    </div>
  );
}
