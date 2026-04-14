/**
 * ArabicText - Renders Arabic text with proper number direction
 * Automatically detects numbers and wraps them in LTR spans
 * Use this for ALL Arabic text that contains numbers
 */
export function ArabicText({ text, className, dir = "rtl" }: { text: string; className?: string; dir?: "ltr" | "rtl" }) {
  // Split text by number patterns (digits, dashes between digits, percentages)
  const parts = text.split(/(\d[\d,]*\d%?|\d%?)/g);
  
  return (
    <span className={className} dir={dir}>
      {parts.map((part, i) => {
        // Check if this part is a number
        if (/^\d[\d,]*\d%?$|^\d%?$/.test(part)) {
          return (
            <span key={i} dir="ltr" style={{ display: "inline-block", unicodeBidi: "isolate" }}>
              {part}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}

/**
 * ArabicStepNumber - Renders step numbers properly for Arabic
 * Usage: <ArabicStepNumber number="01" />
 */
export function ArabicStepNumber({ number }: { number: string }) {
  return (
    <span dir="ltr" style={{ display: "inline-block", unicodeBidi: "isolate" }}>
      {number}
    </span>
  );
}
