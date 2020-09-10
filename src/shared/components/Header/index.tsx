import React, { useState, useEffect, FC } from 'react';
import HeaderContainer, { Brand, BookCallButton, ToggleButton } from './styles';
import Navbar from '../Navbar';
import MobileNavbar from '../MobileNavbar';
import { useTranslation } from 'shared/utils/internationalization';

const Header: FC = () => {
  const { t } = useTranslation('header');
  const [isTransparent, setIsTransparent] = useState(true);
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  useEffect(() => {
    document.addEventListener('scroll', setTransparency);
    return () => {
      document.removeEventListener('scroll', setTransparency);
    };
  }, []);
  function setTransparency() {
    const isScrolled = window.scrollY < 100;
    setIsTransparent(isScrolled);
  }
  function handleMobileToggled() {
    setIsMobileNavVisible((prev) => !prev);
  }
  return (
    <HeaderContainer transparent={isTransparent} data-transparent={isTransparent}>
      <Brand transparent={isTransparent} />
      <MobileNavbar visible={isMobileNavVisible} onToggle={handleMobileToggled} />
      <Navbar transparent={isTransparent} />
      <BookCallButton transparent={isTransparent}>{t('actions.bookACall')}</BookCallButton>
      <ToggleButton transparent={isTransparent} onClick={handleMobileToggled}>
        <span />
        <span />
        <span />
      </ToggleButton>
    </HeaderContainer>
  );
};

export default Header;
