import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    captionH1: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    captionH1?: React.CSSProperties;
  }
  interface TypographyVariants {
    para14: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    para14?: React.CSSProperties;
  }
  interface TypographyVariants {
    para20: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    para20?: React.CSSProperties;
  }
  interface TypographyVariants {
    subHeading2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    subHeading2?: React.CSSProperties;
  }
  interface TypographyVariants {
    subHeading4: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    subHeading4?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    captionH1: true;
    para14: true;
    para20: true;
    subHeading2: true;
    subHeading4: true;
  }
}