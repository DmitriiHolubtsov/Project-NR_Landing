import { styled, Box } from "@mui/material";
import palette from "../../../../theme/palette";

export const SectionContainer = styled(Box)`
  margin: 0 auto;
  max-width: 1240px;
  padding-top: 38px;
  padding-bottom: 81px;
  ${({ theme }) => theme.breakpoints.down(1240)} {
    padding: 0 16px;
    padding-top: 38px;
    padding-bottom: 81px;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding-top: 0;
    padding-bottom: 60px;
  }
`;

export const ContentWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: start;
  column-gap: 20px;
  & .MuiTypography-root {
    max-width: 610px;
    padding-top: 20px;
    border-top: 1px solid ${palette.white};
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
    align-items: start;
    row-gap: 20px;
    column-gap: 0;
    & .MuiTypography-root:last-child {
      padding-top: 0;
      border-top: 0;
    }
  }
`;
