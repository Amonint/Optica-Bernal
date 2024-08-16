import styled from 'styled-components';
import { motion } from 'framer-motion';
import containerStyles from '../../../styles/shared/container';


export const ContentSection = styled(motion.section)`
  ${containerStyles};
  margin-bottom: 210px;

  ${({ theme }) => theme.breakpoints.tablet`
    margin-bottom: 107px;
  `};
`;

export const TextWrapper = styled.div`
  margin-left: 8.333%;
  width: calc(58.333% - 32px);

  ${({ theme }) => theme.breakpoints.small`
    width: 100%;
    margin-left: 0;
  `};
`;

export const Text = styled.h2`
  margin: 0;
  max-width: 640px;

  // Title styling
  & span.title {
    font-size: 3.5rem;
    font-weight: bold;
    line-height: 1.2;
  }

  // Subtitle styling
  & span.subtitle {
    font-size: 2.625rem;
    font-weight: 500;
    line-height: 1;
  }

  ${({ theme }) => theme.breakpoints.tablet`
    & span.title {
      font-size: 2rem;
      line-height: 1.2;
    }

    & span.subtitle {
      font-size: 1.5rem;
      line-height: 1;
    }

    & br {
      display: none;
    }
  `};
  
`;
export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin-top: 64px;
  ${({ theme }) => theme.breakpoints.tablet`
    grid-template-columns: repeat(2, 1fr);
  `};

  ${({ theme }) => theme.breakpoints.small`
    grid-template-columns: 1fr;
  `};
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const GridImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const GridText = styled.p`
  margin: 0;
  font-size: 24px;
  font-weight: 500;
  background-color: #8e44ad;
  border-radius: 8px;
  padding: 3vh;
  

  & .grid-title {
    font-size: 40px; /* Tamaño del h1 */
    font-weight: bold; /* O el peso que desees */
    margin: 0 0 8px; /* Espaciado inferior para separar del texto */
  }
`;
export const TextImageSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

export const TextSection = styled.div`
  flex: 1;
  margin-right: 20px; // Espacio entre el texto y la imagen
  

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
  }
`;

export const ImageSection = styled.div`
  flex: 1;
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;


