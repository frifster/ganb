import { css } from "@emotion/react";
export const underlineStyles = css({
  content: '""',
  position: "absolute",
  display: "block",
  width: "80%",
  left: "10%",
  height: "4px",
  margin: "0 auto",
  backgroundColor: "var(--color)",
  borderRadius: "99px",
});

export const productNameStyles = css({
  textAlign: "center",
  fontSize: "18px",
  fontWeight: "bold",
});

export const NAV_FONT_SIZE = "clamp(12px, 1.5dvmin, 18px)";
