import { ReactNode } from "react";
import { ListIcon } from "../../../../icons";

interface ListContent {
  mark: ReactNode;
  text: string;
}

export const content = {
  header: "Features",
  subheaderFirst: "The main property will be to explore all registries:",
  subheaderSecond: "When opening details of the specific registry:",
};

export const listFirst: ListContent[] = [
  { mark: <ListIcon />, text: "Allow to login with NEAR and create a new registry" },
  { mark: <ListIcon />, text: "Unique id and specific Astro DAO that will manage it" },
];

export const listSecond = [
  {
    mark: <ListIcon />,
    text: "Each row and value (row & column) has a unique identifier across all registries",
  },
  { mark: <ListIcon />, text: "Multiple data types: Normal JSON types, Dates, etc." },
  { mark: <ListIcon />, text: "IPFS Data (and other content-addressable URLs: like machina://content-hash)" },
  // This is for sublist with line icon:
  // Don't forget to import LineIcon!!!
  // {
  //   mark: <LineIcon />,
  //   text: "Support filtering and sorting in a custom views, inspired by Airtable functionality",
  // },
];
