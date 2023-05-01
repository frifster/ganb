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
  transformOrigin: "right",
  transform: "scaleX(0)",
  transition: "transform 0.3s ease-in-out",
});

export const underlineStylesActive = css({
  transform: "scaleX(1)",
  transformOrigin: "left",
});

export const productNameStyles = css({
  textAlign: "center",
  fontSize: "18px",
  fontWeight: "bold",
});

export const orderLinkStyles = css({
  display: "block",
  width: "100%",
  height: "auto",
  maxWidth: "300px",
  justifySelf: "center",
  maxHeight: "40px",
  margin: "53px auto 23px auto",
});

export const NAV_FONT_SIZE = "clamp(12px, 1.5dvmin, 18px)";
