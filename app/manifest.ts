import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return { name: "Sinan Anwar Alekar · Research Portfolio", short_name: "Sinan Alekar", start_url: "/", display: "standalone", background_color: "#f7f5ee", theme_color: "#f7f5ee", icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }] };
}
