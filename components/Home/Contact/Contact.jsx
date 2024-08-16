import React from 'react';
import useCursorStyle from '../../../hooks/useCursorStyle';
import AnimateOnScreen from '../../AnimateOnScreen';
import SocialMedia from '../../SocialMedia';
import { ContactSection } from './styles';

const Contact = () => {
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <AnimateOnScreen>
      <ContactSection>
        <div className="column">
          <a
            className="contact-text"
            href="tel:+593 07 257-33304"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            +593 07 257-33304
          </a>
          <br />
          <a
            className="contact-text"
            href="mailto:consulta@procuber.com.ec"
            onMouseEnter={addCursorBorder}
            onMouseLeave={removeCursorBorder}
          >
            consulta@procuber.com.ec
          </a>
        </div>
        <address className="column contact-text">
          Loja - Ecuador<br /> Sucre y Azuay 2Q2W+2VF, Loja
        </address>
        <SocialMedia className="column" />
      </ContactSection>
    </AnimateOnScreen>
  );
};

export default React.memo(Contact);
