export interface ColorInfo {
  hex: string;
  usage: string;
}

export interface ColorPalette {
  primary: ColorInfo;
  secondary: ColorInfo;
  accent: ColorInfo;
  background: ColorInfo;
  text: ColorInfo;
}

export interface FontSuggestion {
  fontFamily: string;
}

export interface Typography {
  heading: FontSuggestion;
  body: FontSuggestion;
}

export interface UIDesign {
  colors: ColorPalette;
  typography: Typography;
}