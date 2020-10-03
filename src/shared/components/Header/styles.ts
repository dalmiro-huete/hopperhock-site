import styled from 'styled-components';
import { HopperhockLogo } from 'styles/illustrations/HopperhockLogo';
import { TextBody, FontWeight } from 'styles/utilities/font-sizes';
import { Margin, Padding, Spacing } from 'styles/utilities/gutters';
import { Breakpoints } from 'styles/utilities/breakpoints';
import { backgroundFadeIn } from 'styles/utilities/animations';
import { hexToRGB } from 'styles/utilities/funtions';

export default styled.nav<{ transparent: boolean }>`
  position: fixed;
  background-color: ${({ theme }) => hexToRGB(theme.WHITE, '0')};
  color: ${({ theme }) => theme.NAVIGATION_TEXT_COLOR};
  height: 6rem;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 ${Spacing.SIZE_13};
  z-index: 2;
  &[data-transparent='false'] {
    animation: ${({ theme }) => backgroundFadeIn(theme.WHITE)} 0.35s ease-in-out 0s 1;
    background-color: ${({ theme }) => theme.WHITE};
  }
  @media (max-width: ${Breakpoints.desktop}) {
    padding: 0 ${Padding.SIZE_10};
    height: 5rem;
  }
  @media (max-width: ${Breakpoints.tablet}) {
    padding: 0 ${Padding.SIZE_3};
    height: 4.5rem;
  }
`;

export const Brand = styled(HopperhockLogo)`
  height: 7.5rem;
  padding: ${Padding.SIZE_1};
  margin-top: ${Margin.SIZE_2};
  path {
    fill: ${({ theme, transparent }) => (transparent ? theme.NAVIGATION_TEXT_COLOR : theme.TEXT_COLOR)};
  }
`;

export const BookCallButton = styled.button<{ transparent: boolean }>`
  background-color: ${({ theme, transparent }) => (transparent ? 'inherit' : theme.PRIMARY_COLOR_DARK_1)};
  border: ${({ theme, transparent }) => (transparent ? `1px solid ${theme.SUCCESS}` : 'none')};
  outline: inherit;
  color: ${({ theme }) => theme.NAVIGATION_TEXT_COLOR};
  font-size: ${TextBody.SIZE_4};
  font-weight: ${FontWeight.medium};
  margin-left: auto;
  padding: ${Padding.SIZE_3} ${Padding.SIZE_8};
  cursor: pointer;
  :hover {
    background-color: ${({ theme, transparent }) =>
      hexToRGB(transparent ? theme.SUCCESS : theme.PRIMARY_COLOR_DARK_1, '0.8')};
  }
  @media (max-width: ${Breakpoints.desktop}) {
    font-size: ${TextBody.SIZE_5};
    padding: ${Padding.SIZE_3} ${Padding.SIZE_5};
  }
  @media (max-width: ${Breakpoints.laptop}) {
    font-size: ${TextBody.SIZE_3};
  }
  @media (max-width: ${Breakpoints.tablet}) {
    font-size: ${TextBody.SIZE_5};
    letter-spacing: 0.0625rem;
  }
  @media (max-width: ${Breakpoints.mobile}) {
    display: none;
  }
`;

export const ToggleButton = styled.button<{ transparent: boolean }>`
  display: none;
  width: 3rem;
  background: transparent;
  border: none;
  cursor: pointer;
  margin-left: auto;
  padding-top: ${Padding.SIZE_0};
  padding-bottom: ${Padding.SIZE_0};
  vertical-align: middle;
  :focus {
    outline: none;
  }
  span {
    display: block;
    width: 100%;
    height: 1px;
    background: ${({ theme, transparent }) => (transparent ? theme.WHITE : theme.BLACK)};
    margin: ${Margin.SIZE_1} ${Margin.SIZE_0};
  }
  @media (max-width: ${Breakpoints.mobile}) {
    display: block;
  }
`;

export const LanguageText = styled.span<{ transparent: boolean }>`
  margin-left: 20px;
  cursor: pointer;
  text-decoration: underline;
  color: ${({ theme, transparent }) => (transparent ? theme.NAVIGATION_TEXT_COLOR : theme.TEXT_COLOR)};

  @media (max-width: ${Breakpoints.mobile}) {
    display: none;
  }
`;
