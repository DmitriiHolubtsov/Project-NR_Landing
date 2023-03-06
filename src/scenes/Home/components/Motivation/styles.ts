import { styled, Box } from "@mui/material";
import palette from "../../../../theme/palette";

export const SectionMotivationWrapper = styled(Box)`
  background: ${palette.white};
`;

export const SectionContainer = styled(Box)`
  margin: 0 auto;
  max-width: 1240px;
  padding: 100px 0;
  ${({ theme }) => theme.breakpoints.down(1240)} {
    padding: 100px 16px;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 60px 16px;
  }
`;

export const MotivationContentWrapper = styled(Box)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: start;
  padding-top: 32px;
  column-gap: 20px;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
    row-gap: 40px;
    column-gap: 0;
    padding-top: 28px;
  }
`;

export const ListWrapper = styled(Box)`
  max-width: 560px;
`;

export const List = styled("ul")`
  margin-top: 16px;
  margin-bottom: 0;
  list-style-type: none;
  padding-left: 0;
`;

export const ListItem = styled("li")`
  color: ${palette.black};
  display: flex;
  justify-content: flex-start;
  align-items: start;
  column-gap: 8px;
  padding-bottom: 16px;
  &:last-child {
    padding-bottom: 0;
  }
  & svg {
    top: 2px;
    position: relative;
  }
`;
