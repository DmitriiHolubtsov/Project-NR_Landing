import { styled, Box } from "@mui/material";

export const SectionWrapper = styled(Box)`
  padding-bottom: 32px;
  ${({ theme }) => theme.breakpoints.down(1240)} {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const NavLinkStyledExternal = styled("a")`
  text-decoration: none;
  display: block;
  width: 40px;
  height: 39px;
  margin: 0 auto;
  & svg {
    width: 40px;
    height: 39px;
  }
`;
