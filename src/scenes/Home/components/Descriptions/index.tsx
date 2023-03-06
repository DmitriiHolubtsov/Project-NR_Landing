import React, { ReactElement } from "react";
import { Typography } from "@mui/material";
import { content } from "./content";
import { SectionContainer, ContentWrapper } from "./styles";

export default function Description(): ReactElement {
  return (
    <SectionContainer>
      <ContentWrapper>
        <Typography variant="body1">{content.firstParagraph}</Typography>
        <Typography variant="body1">{content.secondParagraph}</Typography>
      </ContentWrapper>
    </SectionContainer>
  );
}
