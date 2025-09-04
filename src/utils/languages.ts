export interface Language {
  name: string;
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {
  // Graphic Design Tools
  photoshop: {
    name: "Adobe Photoshop",
    iconName: "photoshop",
  },
  illustrator: {
    name: "Adobe Illustrator", 
    iconName: "illustrator",
  },
  canva: {
    name: "Canva",
    iconName: "canva",
  },
  figma: {
    name: "Figma",
    iconName: "figma",
  },
  
  // Audio Tools
  studioone: {
    name: "PreSonus Studio One",
    iconName: "studioone",
  },
  flstudio: {
    name: "FL Studio",
    iconName: "flstudio", 
  },
  ableton: {
    name: "Ableton Live",
    iconName: "ableton",
  },
  audacity: {
    name: "Audacity",
    iconName: "audacity",
  },
  
  // Administrative Tools
  "google-workspace": {
    name: "Google Workspace",
    iconName: "google-workspace",
  },
  "microsoft-office": {
    name: "Microsoft Office 365",
    iconName: "microsoft-office",
  },
  trello: {
    name: "Trello",
    iconName: "trello",
  },
  notion: {
    name: "Notion",
    iconName: "notion",
  },
  
  // Web Technologies  
  html: {
    name: "HTML",
    iconName: "html",
  },
  css: {
    name: "CSS",
    iconName: "css",
  },
  javascript: {
    name: "JavaScript",
    iconName: "javascript",
  },
  typescript: {
    name: "TypeScript",
    iconName: "typescript",
  },
  tailwind: {
    name: "Tailwind CSS",
    iconName: "tailwind",
  },
  markdown: {
    name: "Markdown",
    iconName: "markdown",
  },
  ts: {
    name: "TypeScript",
    iconName: "typescript",
  },
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.html;
}; 