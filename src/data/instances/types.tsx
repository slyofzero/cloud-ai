export type InstanceType = "cloud_compute" | "dedicated" | "gaming";

export interface InstanceTypeDetail {
  icon: any;
  title: string;
  description: string;
}

export const instanceTypes: { [K in InstanceType]: InstanceTypeDetail } = {
  cloud_compute: {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 16 16"
        className="text-2xl mb-2"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1.333 2.667C1.333 1.194 4.318 0 8 0s6.667 1.194 6.667 2.667V4c0 1.473-2.985 2.667-6.667 2.667S1.333 5.473 1.333 4V2.667z"></path>
        <path d="M1.333 6.334v3C1.333 10.805 4.318 12 8 12s6.667-1.194 6.667-2.667V6.334a6.51 6.51 0 0 1-1.458.79C11.81 7.684 9.967 8 8 8c-1.966 0-3.809-.317-5.208-.876a6.508 6.508 0 0 1-1.458-.79z"></path>
        <path d="M14.667 11.668a6.51 6.51 0 0 1-1.458.789c-1.4.56-3.242.876-5.21.876-1.966 0-3.809-.316-5.208-.876a6.51 6.51 0 0 1-1.458-.79v1.666C1.333 14.806 4.318 16 8 16s6.667-1.194 6.667-2.667v-1.665z"></path>
      </svg>
    ),
    title: "Cloud Compute",
    description:
      "Virtual machines for more demanding business apps, e.g. production websites, CI/CD, video transcoding, or larger databases.",
  },
  dedicated: {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 512 512"
        className="text-2xl mb-2"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z"></path>
      </svg>
    ),
    title: "Dedicated Server",
    description:
      "Single tenant bare metal for apps with the most demanding performance or security requirements.",
  },
  gaming: {
    icon: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        role="img"
        viewBox="0 0 24 24"
        className="text-2xl mb-2"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title></title>
        <path d="M24 13.2v-6l-6-3.6-6 3.6-6-3.6-6 3.6v6l12 7.2zM8.4 10.8H6v2.4H4.8v-2.4H2.4V9.6h2.4V7.2H6v2.4h2.4zm7.2 2.4a1.2 1.2 0 01-1.2-1.2c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2zm3.6-2.4A1.2 1.2 0 0118 9.6c0-.66.54-1.2 1.2-1.2.66 0 1.2.54 1.2 1.2 0 .66-.54 1.2-1.2 1.2Z"></path>
      </svg>
    ),
    title: "Hobby",
    description:
      "Light weight instances to test out scripts, bots, and websites for new enthusiasts",
  },
};
