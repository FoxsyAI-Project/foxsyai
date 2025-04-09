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
  interface TypographyVariants {
    b1: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    b1?: React.CSSProperties;
  }
  interface TypographyVariants {
    subHeading1: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    subHeading1?: React.CSSProperties;
  }
  interface TypographyVariants {
    subHeading3: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    subHeading3?: React.CSSProperties;
  }
  interface TypographyVariants {
    para12: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    para12?: React.CSSProperties;
  }
  interface TypographyVariants {
    link14: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    link14?: React.CSSProperties;
  }
  interface TypographyVariants {
    para16: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    para16?: React.CSSProperties;
  }
  interface TypographyVariants {
    extra1: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    extra1?: React.CSSProperties;
  }
  interface TypographyVariants {
    extra2: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    extra2?: React.CSSProperties;
  }
  interface TypographyVariants {
    t5: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    t5?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    captionH1: true;
    para12: true;   
    para14: true;
    para16: true;
    para20: true;
    subHeading2: true;
    subHeading4: true;
    b1: true;
    subHeading1: true;
    subHeading3: true;
    link14: true;
    extra1: true;
    extra2: true;
    t5: true;
  }
}