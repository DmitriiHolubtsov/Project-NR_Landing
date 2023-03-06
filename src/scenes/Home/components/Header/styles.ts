import { styled, Box } from "@mui/material";
import palette from "../../../../theme/palette";

export const SectionMotivationWrapper = styled(Box)`
  background: ${palette.white};
`;

export const SectionContainer = styled(Box)`
  margin: 0 auto;
  max-width: 1240px;
  padding-top: 100px;
  padding-bottom: 100px;
  position: relative;
  ${({ theme }) => theme.breakpoints.down(1240)} {
    padding: 100px 16px;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    padding: 60px 16px;
  }
`;

export const SubTitleWrapper = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    flex-direction: column;
    align-items: start;
    row-gap: 42px;
  }
`;

export const SubTitleContainer = styled(Box)`
  max-width: 505px;
  ${({ theme }) => theme.breakpoints.down(500)} {
    max-width: 310px;
  }
`;

export const NavLinkStyledExternal = styled("a")`
  text-decoration: none;
`;

export const Line = styled("div")`
  position: absolute;
  top: 201px;
  left: 10px;
  ${({ theme }) => theme.breakpoints.down("sm")} {
    top: 116px;
    left: 18px;
    & img {
      width: 305px;
    }
  }
`;
