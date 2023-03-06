import React, { ReactElement } from "react";
import { Typography } from "@mui/material";
import { content, listFirst, listSecond } from "./content";
import {
  SectionContainer,
  ListWrapper,
  List,
  ListItem,
  IconBox,
} from "./styles";

export default function Features(): ReactElement {
  return (
    <SectionContainer>
      <Typography variant="h2" color="primary">
        {content.header}
      </Typography>
      <ListWrapper>
        <Typography variant="h3" color="primary">
          {content.subheaderFirst}
        </Typography>
        <List>
          {listFirst.map(({ mark, text }) => (
            <ListItem>
              <IconBox>{mark}</IconBox>
              <Typography variant="body1" color="primary">
                {text}
              </Typography>
            </ListItem>
          ))}
        </List>
      </ListWrapper>
      <ListWrapper>
        <Typography variant="h3" color="primary">
          {content.subheaderSecond}
        </Typography>
        <List>
          {listSecond.map(({ mark, text }) => (
            <ListItem>
              <IconBox>{mark}</IconBox>
              <Typography variant="body1" color="primary">
                {text}
              </Typography>
            </ListItem>
          ))}
        </List>
      </ListWrapper>
    </SectionContainer>
  );
}
