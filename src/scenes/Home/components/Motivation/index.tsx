import React, { ReactElement } from "react";
import { Typography } from "@mui/material";
import { ListIconBlack } from "../../../../icons";
import { content } from "./content";
import {
  SectionMotivationWrapper,
  SectionContainer,
  MotivationContentWrapper,
  ListWrapper,
  List,
  ListItem,
} from "./styles";

export default function Motivation(): ReactElement {
  return (
    <SectionMotivationWrapper>
      <SectionContainer>
        <Typography variant="h2" color="secondary">
          {content.header}
        </Typography>
        <MotivationContentWrapper>
          <ListWrapper>
            <Typography variant="h4" color="secondary">
              {content.subheaderLeft}
            </Typography>
            <List>
              {content.listLeft.map((text) => (
                <ListItem>
                  <ListIconBlack />
                  <Typography variant="body1" color="secondary">
                    {text}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </ListWrapper>
          <ListWrapper>
            <Typography variant="h4" color="secondary">
              {content.subheaderRight}
            </Typography>
            <List>
              {content.listRight.map((text) => (
                <ListItem>
                  <ListIconBlack />
                  <Typography variant="body1" color="secondary">
                    {text}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </ListWrapper>
        </MotivationContentWrapper>
      </SectionContainer>
    </SectionMotivationWrapper>
  );
}
