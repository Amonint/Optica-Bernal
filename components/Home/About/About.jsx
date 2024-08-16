import React from 'react';
import items from '../../../utils/constants/services-items';
import useCursorStyle from '../../../hooks/useCursorStyle';
import AnimateOnScreen from '../../AnimateOnScreen';
import {
  ContentSection,
  TextWrapper,
  ServicesWrapper,
  AccordionToggle,
  AccordionContent,
} from './styles';

const About = () => {
  const [selectedItem, setSelectedItem] = React.useState(0);
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  const handleMouseEnter = React.useCallback(
    curr => {
      if (curr === selectedItem) return;

      addCursorBorder();
    },
    [selectedItem, addCursorBorder],
  );

  const handleMouseLeave = React.useCallback(
    curr => {
      if (curr === selectedItem) return;

      removeCursorBorder();
    },
    [selectedItem, removeCursorBorder],
  );

  return (
    <AnimateOnScreen>
      <ContentSection>
        {/* Texto con los horarios de atención y contactos */}
        <div style={{ marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.5' }}>
          <h2>Horarios de atención</h2>
          <p>Sucre y Azuay</p>
          <h4>Horario</h4>
          <p>
            Lunes-Viernes<br />
            9am - 5pm<br />
            <br />
            Sábado<br />
            9am - 1pm
          </p>
          <h4>Contacto</h4>
          <p>
            +593 992631362<br />
            consulta@procuber.com.ec
          </p>
        </div>

        {/* Mapa de Google con la ubicación de Optica Bernal */}
        <div style={{ width: '100%', height: '400px', marginBottom: '2rem' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1590.1891675546423!2d-79.2028402!3d-3.9999427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5b2ac2f71c6e5202!2sOptica%20Bernal!5e0!3m2!1sen!2sec!4v1692117476754!5m2!1sen!2sec"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Mapa del negocio - Optica Bernal"
          ></iframe>
        </div>
      </ContentSection>
    </AnimateOnScreen>
  );
};

export default React.memo(About);
