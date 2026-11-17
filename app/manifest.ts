import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sinan Anwar Alekar · Research Portfolio",
    short_name: "Sinan Alekar",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f4f7",
    theme_color: "#f6f4f7",
    icons: [{ src: "/brand-logo.jpg", sizes: "1254x1254", type: "image/jpeg" }],
  };
}
