import "@repo/ui/global";
import { useEffect } from "react";
import type { Preview } from "@storybook/react";

const applyThemeAndBackground = (theme: string) => {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);

  const backgroundColor =
    getComputedStyle(root).getPropertyValue("--background-color");
  root.style.backgroundColor = backgroundColor;
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "var(--background-color)" },
        { name: "dark", value: "var(--background-color)" },
      ],
    },
  },
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        icon: "sun",
        items: [
          { value: "light", icon: "sun", title: "Light Mode" },
          { value: "dark", icon: "moon", title: "Dark Mode" },
        ],
        showName: true,
      },
    },
  },
};

export const withTheme = (StoryFn: any, context: any) => {
  const theme = context.globals.theme || "light";

  useEffect(() => {
    applyThemeAndBackground(theme);
  }, [theme]);

  return StoryFn();
};

preview.decorators = [withTheme];

export default preview;
