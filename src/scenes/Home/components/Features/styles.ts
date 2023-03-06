import { styled, Box } from "@mui/material";
import palette from "../../../../theme/palette";

export const SectionContainer = styled(Box)`
  margin: 0 auto;
  max-width: 1240px;
  padding-top: 100px;
  padding-bottom: 100px;
  ${({ theme }) => theme.breakpoints.down(1240)} {
    padding: 100px 16px;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 60px 16px;
  }
`;

export const ListWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  padding-top: 32px;
  column-gap: 20px;
  & .MuiTypography-h3 {
    max-width: 505px;
  }
  ${({ theme }) => theme.breakpoints.down(970)} {
    flex-direction: column;
    row-gap: 40px;
    column-gap: 0;
    padding-top: 28px;
  }
`;

export const List = styled("ul")`
  margin-top: 0;
  margin-bottom: 0;
  list-style-type: none;
  padding-left: 0;
  width: 560px;
  ${({ theme }) => theme.breakpoints.down(970)} {
    width: 100%;
  }
`;

export const ListItem = styled("li")`
  color: ${palette.black};
  display: flex;
  justify-content: flex-start;
  align-items: start;
  column-gap: 8px;
  padding-bottom: 16px;
  position: relative;
  &:last-child {
    padding-bottom: 0;
  }
  & svg#listIcon {
    position: relative;
    left: 0px;
    top: 4px;
  }
  & svg#lineIcon {
    position: relative;
    left: 0;
    top: 0;
    margin-left: 20px;
  }
`;

export const IconBox = styled("div")`
  height: 20px;
  position: relative;
  top: -4px;
`;
