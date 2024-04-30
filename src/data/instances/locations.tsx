export type Locations = "us" | "uk" | "fr" | "sp";

export interface LocationDetails {
  icon: any;
  title: string;
}

export const instanceLocations: { [K in Locations]: LocationDetails } = {
  us: {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 513 342"
        className="max-w-[25px] rounded mr-4"
      >
        <path fill="#FFF" d="M0 0h513v342H0z"></path>
        <path
          d="M0 0h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513v26.3H0zm0 52.7h513v26.3H0zm0 52.6h513v26.3H0zm0 52.6h513V342H0z"
          fill="#D80027"
        ></path>
        <path fill="#2E52B2" d="M0 0h256.5v184.1H0z"></path>
        <path
          d="m47.8 138.9-4-12.8-4.4 12.8H26.2l10.7 7.7-4 12.8 10.9-7.9 10.6 7.9-4.1-12.8 10.9-7.7zm56.3 0-4.1-12.8-4.2 12.8H82.6l10.7 7.7-4 12.8 10.7-7.9 10.8 7.9-4-12.8 10.7-7.7zm56.5 0-4.3-12.8-4 12.8h-13.5l11 7.7-4.2 12.8 10.7-7.9 11 7.9-4.2-12.8 10.7-7.7zm56.2 0-4-12.8-4.2 12.8h-13.3l10.8 7.7-4 12.8 10.7-7.9 10.8 7.9-4.3-12.8 11-7.7zM100 75.3l-4.2 12.8H82.6L93.3 96l-4 12.6 10.7-7.8 10.8 7.8-4-12.6 10.7-7.9h-13.4zm-56.2 0-4.4 12.8H26.2L36.9 96l-4 12.6 10.9-7.8 10.6 7.8L50.3 96l10.9-7.9H47.8zm112.5 0-4 12.8h-13.5l11 7.9-4.2 12.6 10.7-7.8 11 7.8-4.2-12.6 10.7-7.9h-13.2zm56.5 0-4.2 12.8h-13.3l10.8 7.9-4 12.6 10.7-7.8 10.8 7.8-4.3-12.6 11-7.9h-13.5zm-169-50.6-4.4 12.6H26.2l10.7 7.9-4 12.7L43.8 50l10.6 7.9-4.1-12.7 10.9-7.9H47.8zm56.2 0-4.2 12.6H82.6l10.7 7.9-4 12.7L100 50l10.8 7.9-4-12.7 10.7-7.9h-13.4zm56.3 0-4 12.6h-13.5l11 7.9-4.2 12.7 10.7-7.9 11 7.9-4.2-12.7 10.7-7.9h-13.2zm56.5 0-4.2 12.6h-13.3l10.8 7.9-4 12.7 10.7-7.9 10.8 7.9-4.3-12.7 11-7.9h-13.5z"
          fill="#FFF"
        ></path>
      </svg>
    ),
    title: "United States",
  },
  uk: {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 513 342"
        className="max-w-[25px] rounded mr-4"
      >
        <g fill="#FFF">
          <path d="M0 0h513v341.3H0V0z"></path>
          <path d="M311.7 230 513 341.3v-31.5L369.3 230h-57.6zM200.3 111.3 0 0v31.5l143.7 79.8h56.6z"></path>
        </g>
        <path
          d="M393.8 230 513 295.7V230H393.8zm-82.1 0L513 341.3v-31.5L369.3 230h-57.6zm146.9 111.3-147-81.7v81.7h147zM90.3 230 0 280.2V230h90.3zm110 14.2v97.2H25.5l174.8-97.2zm-82.1-132.9L0 45.6v65.7h118.2zm82.1 0L0 0v31.5l143.7 79.8h56.6zM53.4 0l147 81.7V0h-147zm368.3 111.3L513 61.1v50.2h-91.3zm-110-14.2V0h174.9L311.7 97.1z"
          fill="#0052B4"
        ></path>
        <g fill="#D80027">
          <path d="M288 0h-64v138.7H0v64h224v138.7h64V202.7h224v-64H288V0z"></path>
          <path d="M311.7 230 513 341.3v-31.5L369.3 230h-57.6zm-168 0L0 309.9v31.5L200.3 230h-56.6zm56.6-118.7L0 0v31.5l143.7 79.8h56.6zm168 0L513 31.5V0L311.7 111.3h56.6z"></path>
        </g>
      </svg>
    ),
    title: "United Kingdom",
  },
  fr: {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 513 342"
        className="max-w-[25px] rounded mr-4"
      >
        <path fill="#FFF" d="M0 0h513v342H0z"></path>
        <path fill="#0052B4" d="M0 0h171v342H0z"></path>
        <path fill="#D80027" d="M342 0h171v342H342z"></path>
      </svg>
    ),
    title: "France",
  },
  sp: {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 85.333 512 341.333"
        className="max-w-[25px] rounded mr-4"
      >
        <path fill="#FFF" d="M0 85.337h512v341.326H0z"></path>
        <path fill="#D80027" d="M0 85.337h512V256H0z"></path>
        <g fill="#FFF">
          <path d="M83.478 170.666c0-24.865 17.476-45.637 40.812-50.734a52.059 52.059 0 0 0-11.13-1.208c-28.688 0-51.942 23.254-51.942 51.941s23.255 51.942 51.942 51.942c3.822 0 7.543-.425 11.13-1.208-23.336-5.095-40.812-25.867-40.812-50.733zm66.783-48.231 3.684 11.337h11.921l-9.645 7.007 3.684 11.337-9.644-7.006-9.645 7.006 3.685-11.337-9.645-7.007h11.921z"></path>
          <path d="m121.344 144.696 3.683 11.337h11.921l-9.645 7.007 3.684 11.337-9.643-7.006-9.645 7.006 3.685-11.337-9.645-7.007h11.921zm57.834 0 3.684 11.337h11.921l-9.645 7.007 3.684 11.337-9.644-7.006-9.644 7.006 3.685-11.337-9.645-7.007h11.921zm-11.131 33.391 3.684 11.337h11.921l-9.644 7.007 3.684 11.337-9.645-7.006-9.643 7.006 3.684-11.337-9.644-7.007h11.92zm-35.573 0 3.683 11.337h11.921l-9.644 7.007 3.684 11.337-9.644-7.006-9.644 7.006 3.684-11.337-9.644-7.007h11.92z"></path>
        </g>
      </svg>
    ),
    title: "Singapore",
  },
};
