import { createTheme } from "@mui/material/styles";
declare module "@mui/material/styles" {
  interface PaletteColor {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
  }

  interface SimplePaletteColorOptions {
    50?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
  }
}

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#EFBED2", // Base Pink
      contrastText: "#000000",
      50: "#FEF6F9",
      100: "#FFEFF5",
      200: "#FDE6EF",
      300: "#FADEE9",
      400: "#F5D0DF",
      500: "#EFBED2",
      600: "#E8ACC5",
      700: "#E498B7",
      800: "#D688A8",
      900: "#CA7195",
    },

    secondary: {
      main: "#008095", // Base Secondary
      contrastText: "#ffffff",
      50: "#D5EEF4",
      100: "#B7DFE8",
      200: "#91CEDD",
      300: "#63B5C8",
      400: "#459BAF",
      500: "#008095",
      600: "#007287",
      700: "#006477",
      800: "#005B6D",
      900: "#024F5E",
    },
    background: {
      default: "#1A1A1A",
      paper: "#ffffff",
    },
    text: {
      primary: "#1A1A1A",
      secondary: "#ffffff",
    },
    grey: {
      50: "#EDEDED",
      100: "#DFDFDF",
      200: "#CDCDCD",
      300: "#BCBCBC",
      400: "#A5A5A5",
      500: "#8B8B8B",
      600: "#737373",
      700: "#5C5C5C",
      800: "#434343",
      900: "#2C2C2C",
    },
  },
  typography: {
    fontFamily:
      'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontSize: "4rem",
      fontWeight: 700,
      lineHeight: 1.2,
      "@media (max-width:768px)": {
        fontSize: "2.5rem",
      },
    },
    h2: {
      fontSize: "3rem",
      fontWeight: 600,
      lineHeight: 1.3,
      "@media (max-width:768px)": {
        fontSize: "2rem",
      },
    },
    h3: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#666666",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
      color: "#666666",
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "12px 24px",
          fontSize: "1rem",
          fontWeight: 500,
          textTransform: "none",
        },
        contained: {
          backgroundColor: "#00000",
          color: "#ffffff",
          "&:hover": {
            backgroundColor: "##434343",
          },
        },
        outlined: {
          borderColor: "#1A1A1A",
          color: "#1A1A1A",
          "&:hover": {
            backgroundColor: "#EDEDED",
            borderColor: "#000000",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          color: "#000000",
          boxShadow: "none",
          borderBottom: "1px solid #e0e0e0",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: "24px",
          paddingRight: "24px",
          "@media (max-width:768px)": {
            paddingLeft: "16px",
            paddingRight: "16px",
          },
        },
      },
    },
  },
});
