import React, { ReactElement } from "react";
import { Typography } from "@mui/material";
import { GitIcon } from "../../../../icons";
import ColorLine from "../../../../assets/images/color-line.svg";
import { content } from "./content";
import {
  SectionContainer,
  NavLinkStyledExternal,
  SubTitleContainer,
  SubTitleWrapper,
  Line,
} from "./styles";

export default function Header(): ReactElement {
  return (
    <SectionContainer>
      <Typography variant="h1">{content.header}</Typography>
      <Line>
        <img src={ColorLine} alt="Color Line" />
      </Line>
      <SubTitleWrapper>
        <SubTitleContainer>
          <Typography variant="subtitle1">{content.subtitle}</Typography>
        </SubTitleContainer>
        <NavLinkStyledExternal href="https://github.com" target="_blank">
          <GitIcon />
        </NavLinkStyledExternal>
      </SubTitleWrapper>
    </SectionContainer>
  );
}
