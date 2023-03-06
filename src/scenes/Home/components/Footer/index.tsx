import React, { ReactElement } from "react";
import { GitIcon } from "../../../../icons";
import { SectionWrapper, NavLinkStyledExternal } from "./styles";

export default function Footer(): ReactElement {
  return (
    <SectionWrapper>
      <NavLinkStyledExternal href="https://github.com" target="_blank">
        <GitIcon />
      </NavLinkStyledExternal>
    </SectionWrapper>
  );
}
