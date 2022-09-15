import { createContext } from "react";
export const DataContext = createContext();

export function DataContextProvider(props) {
  const title = {
    0: "A modern publishing platform",
    1: "Designed for the future",
  };
  const subTitle = {
    0: "Introducing an extensible editor",
    1: "Robust content management",
    2: "State of the Art Infrastructure",
    3: "Free, open, simple",
    4: "Powerful tooling",
  };
  const paragraph = {
    0: "Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog.",
    1: "Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control.",
    2: "With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.",
    3: "Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.",
    4: "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites.",
    5: "Grow your audience and build your online brand",
  };
  const productSubmenu = [
    "Overview",
    "Pricing",
    "Marketplace",
    "Features",
    "Integrations",
  ];
  const companySubmenu = ["About", "Team", "Blog", "Careers"];

  const connectSubmenu = ["Contact", "Newsletter", "Linkedin"];
  return (
    <DataContext.Provider
      value={{
        title,
        subTitle,
        paragraph,
        productSubmenu,
        companySubmenu,
        connectSubmenu,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}
