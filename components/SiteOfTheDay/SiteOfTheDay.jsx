/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'next/link';
import useStyledTheme from '../../hooks/useStyledTheme';
import useCursorStyle from '../../hooks/useCursorStyle';
import { Container } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const SiteOfTheDay = () => {
  const theme = useStyledTheme();
  const { addCursorBorder, removeCursorBorder } = useCursorStyle();

  return (
    <Container
      onMouseEnter={addCursorBorder}
      onMouseLeave={removeCursorBorder}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column', // Arrange items vertically
        height: '10vh', // Full viewport height to center vertically
      }}
    >
      <Link href="https://wa.me/+593992631362" passHref>
        <a
          target="_blank"
          style={{
            color: theme.text,
            textDecoration: 'none',
            fontWeight: 'bold',
            transform: 'rotate(-90deg)', // Rotate text to vertical
            transformOrigin: 'left bottom',
            marginBottom: '20px', // Space between items
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <FontAwesomeIcon
            icon={faWhatsapp}
            style={{ fontSize: '4px', marginRight: '0px' }} // Adjust size as needed
          />
        </a>
      </Link>

      <Link href="https://wa.me/+593992631362" passHref>
        <a
          target="_blank"
          style={{
            color: theme.text,
            textDecoration: 'none',
            fontWeight: 'bold',
            transform: 'rotate(-90deg)', // Rotate text to vertical
            transformOrigin: 'left bottom',
            fontFamily: 'Inter, sans-serif', // Set font to Inter
          }}
        >
          Agenda una cita
        </a>
      </Link>
    </Container>
  );
};

export default SiteOfTheDay;