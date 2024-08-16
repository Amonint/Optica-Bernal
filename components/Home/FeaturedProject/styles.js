import styled from 'styled-components';
import { motion } from 'framer-motion';
import containerStyles from '../../../styles/shared/container';
import { secondaryFontStyle } from '../../../styles/shared/text';
import DefaultMenuButton from '../../MenuButton';

export const ContentSection = styled(motion.section)`
  ${containerStyles};
  position: relative;
  margin-bottom: 200px;

  ${({ theme }) => theme.breakpoints.tablet`
    margin-bottom: 100px;
  `};
`;

export const ProjectAnchor = styled(motion.a)`
  display: block;
  width: 100%;
  height: 480px;
  margin: 0 0 215px;

  ${({ theme }) => theme.breakpoints.tablet`
    height: 190px;
    margin-bottom: 208px;
  `};
`;

export const ProjectInfo = styled(motion.div)`
  margin-left: 8.333%;
  width: 83.333%;
  position: relative;

  & h3,
  & .project-info {
    position: absolute;
    top: 75px;
    z-index: 1;
  }

  & h3 {
    ${secondaryFontStyle};
  }

  & .project-info {
    right: 0;

    & h4 {
      ${secondaryFontStyle};
      display: inline-block;
      font-size: 0.875rem;
      line-height: 23px;
      margin-left: 32px;

      &:first-child {
        margin-left: 0;
      }
    }
  }

  ${({ theme }) => theme.breakpoints.small`
    margin-left: 0;
    width: 83.333%;

    & .project-info {
      display: none;
    }
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    & h3 {
      font-size: 1.125rem;
      line-height: 1.2777777778;
      top: 17px;
    }
  `};
`;

export const ProjectTitle = styled(motion.h1)`
  position: absolute;
  top: 347px;
  left: -3px;
  z-index: 1;

  & .arrow {
    display: block;
    overflow: hidden;
    margin: 25px 0 0 3px;
    height: 57px;
    width: 101px;

    & svg path {
      fill: ${({ theme }) => theme.text};
    }
  }

  ${({ theme }) => theme.breakpoints.tablet`
    top: 166px;
    left: 0;
    font-size: 3.75rem;
    line-height: 0.7166666667;

    & .arrow {
      margin: 10px 0 0 2px;
      width: 76.19px;
      height: 43px;
    }
  `};
`;

export const VideoPreview = styled.div`
  position: relative;
  display: block;
  overflow: hidden;
  width: 100%;
  height: 480px;
  margin: 0;

  & video {
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.small`
    width: calc(100% + 64px);
    margin-left: -32px;
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    height: 190px;
  `};
`;

export const MenuContainer = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  ${({ theme }) => theme.breakpoints.tablet`
    justify-content: flex-start;
  `};
`;

export const MenuButton = styled(DefaultMenuButton)`
  width: calc(25% - 30px);
  background-color: ${({ theme }) => theme.colors.red};

  &::before,
  &::after {
    background: ${({ theme }) => theme.background};
  }

  & span {
    position: relative;
    opacity: 1;
    right: 0;
    color: ${({ theme }) => theme.background};
  }

  ${({ theme }) => theme.breakpoints.medium`
    width: calc(33.333% - 30px);
  `};

  ${({ theme }) => theme.breakpoints.small`
    width: 100%;
    max-width: 235px;

    & span {
      display: inline;
    }
  `};

  ${({ theme }) => theme.breakpoints.tablet`
    height: 47px;
    max-width: 215px;
    padding: 12px 20px;

    & span {
      font-size: 1.125rem;
      line-height: 1.2777777778;
    }
  `};
  
`;
export const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color:   color: #30C2B6;

`;

export const SectionSubtitle = styled.h3`
  font-size: 24px;
  margin-bottom: 1.5rem;
  color: #000;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr; /* La primera fila tiene columnas de 2fr 1fr */
  grid-template-rows: auto 60vh; /* Altura automática para cada fila */
  gap: 1rem; /* Espacio entre los elementos */
  margin-bottom: 2rem;

  /* Segunda fila tiene columnas de 1fr 2fr */
  & > :nth-child(3) {
    grid-column: 1 / 2;
  }

  & > :nth-child(4) {
    grid-column: 2 / 3;
  }
`;

export const ImageGrid = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* Asegura que las imágenes se adapten bien sin deformarse */
  border-radius: 8px;
`;


export const TextImageSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  padding: 0 10px;

  ${({ theme }) => theme.breakpoints.tablet`
    flex-direction: column;
    align-items: flex-start;
  `};
`;

export const TextSection = styled.div`
  flex: 1;
  margin-right: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
  }

  ${({ theme }) => theme.breakpoints.tablet`
    margin-right: 0;
    margin-bottom: 20px;
  `};
`;

export const ImageSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 15px; /* Bordes redondeados */
  }

  ${({ theme }) => theme.breakpoints.tablet`
    justify-content: flex-start;
    width: 100%;
  `};
`;



export const TextContainer = styled.div`
  flex: 1;
  padding-right: 20px;
  padding-bottom:40px;
  @media (max-width: 768px) {
    padding-right: 0;
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  img {
    max-width: 100%;
    border-radius: 20px;
  }
`;


