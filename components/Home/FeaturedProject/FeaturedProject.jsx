import React from 'react';
import Link from 'next/link';
import { motion, useAnimation } from 'framer-motion';
import { useMenuContext } from '../../../context/menu';
import useCursorStyle from '../../../hooks/useCursorStyle';
import useMediaQuery from '../../../hooks/useMediaQuery';
import useStyledTheme from '../../../hooks/useStyledTheme';
import AnimateOnScreen from '../../AnimateOnScreen';
import Arrow from '../../Icons/Arrow';
import {
  ContentSection,
  ProjectAnchor,
  ProjectInfo,
  ProjectTitle,
  VideoPreview,
  MenuContainer,
  MenuButton,
  GridContainer,
  ImageGrid,
  SectionTitle,
  SectionSubtitle,
  TextImageSection,   // Add this styled component
  TextContainer,      // Add this styled component
  ImageContainer      // Add this styled component
} from './styles';

const transition = {
  duration: 0.45,
  ease: [0.4, 0, 0.2, 1],
};

const FeaturedProject = () => {
  const controlsInfo = useAnimation();
  const controlsArrow = useAnimation();
  const theme = useStyledTheme();
  const [{ isMenuOpen }] = useMenuContext();
  const {
    addCursorColor,
    resetCursorColor,
    addCursorBorder,
    removeCursorBorder,
  } = useCursorStyle();
  const isTabletView = useMediaQuery(
    ({ breakpoints }) => `(max-width:${breakpoints.sizes.tablet}px)`,
  );

  const handleMouseEnter = React.useCallback(() => {
    addCursorBorder();
    addCursorColor(theme.text);
  }, [addCursorColor, addCursorBorder, theme.text]);

  const handleMouseLeave = React.useCallback(async () => {
    if (isMenuOpen) return;

    removeCursorBorder();
    resetCursorColor();
  }, [removeCursorBorder, resetCursorColor, isMenuOpen]);

  const handleAnchorHoverStart = React.useCallback(() => {
    addCursorBorder();

    controlsInfo.start({ opacity: 1 });
    controlsArrow.start({ x: 0 });
  }, [addCursorBorder, controlsInfo, controlsArrow]);

  const handleAnchorHoverEnd = React.useCallback(() => {
    removeCursorBorder();

    controlsInfo.start({ opacity: 0 });
    controlsArrow.start({ x: isTabletView ? -25.19 : -33 });
  }, [removeCursorBorder, controlsInfo, controlsArrow, isTabletView]);

  React.useEffect(() => {
    controlsArrow.start({ x: isTabletView ? -25.19 : -33 });
  }, [controlsArrow, isTabletView]);

  return (
    <ContentSection>
      <AnimateOnScreen>
        <motion.div>
          <div>
            <SectionTitle><h1>Profesionales</h1> </SectionTitle>
            <SectionSubtitle>En PROCUBER, contamos con un equipo de profesionales líderes en el cuidado primario de la visión...</SectionSubtitle>
            <GridContainer>
              <ImageGrid src="/videos/prof1.jpg" alt="Professional 1" />
              <ImageGrid src="/videos/prof2.jpg" alt="Professional 2" />
              <ImageGrid src="/videos/prof4.jpg" alt="Professional 3" />
              <ImageGrid src="/videos/prof3.jpg" alt="Professional 4" />
            </GridContainer>
          </div>

          {/* New Text and Image Section */}
          <TextImageSection>
            <TextContainer>
              <h1>DR.H.C. OPT. FNAO. FAPOCP. FAUSTO R. BERNAL T.</h1>
              <h2>OPTOMETRISTA - CONTACTÓLOGO - OCULARISTA</h2>
              <h3>Fausto Bernal, un destacado profesional en optometría, contactología y ocularista, inició su carrera en la creación de prótesis oculares a temprana edad. Con múltiples reconocimientos y menciones de honor, su trayectoria incluye colaboraciones académicas con la Universidad Autónoma de México y la Universidad de Houston. Inventor del tratamiento de plasma en prótesis oculares y miembro honorífico de diversas academias internacionales, ha dedicado su vida a mejorar la calidad de vida de sus pacientes a través de innovaciones en salud visual.</h3>
            </TextContainer>
            <ImageContainer>
              <img src="/videos/DRFaustoBernal.jpg" alt="Conócenos" />
            </ImageContainer>
          </TextImageSection>

          <Link href="https://wa.me/+593992631362" passHref>
            <ProjectAnchor
              onHoverStart={handleAnchorHoverStart}
              onHoverEnd={handleAnchorHoverEnd}
            >
              <ProjectInfo>
                <h3>Protesis Oculares con tratamiento de plasma</h3>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={controlsInfo}
                  transition={transition}
                  className="project-info"
                >
                  <h4>Fausto Bernal</h4>
                  <h4>2024</h4>
                </motion.div>
                <ProjectTitle>
                  Agenda <br /> Cita 
                  <span className="arrow">
                    <Arrow animate={controlsArrow} transition={transition} />
                  </span>
                </ProjectTitle>
              </ProjectInfo>
              <VideoPreview>
                <video loop autoPlay muted src="videos/plasma-treatment.mp4" />
              </VideoPreview>
            </ProjectAnchor>
          </Link>
        </motion.div>
      </AnimateOnScreen>
      
    </ContentSection>
  );
};

export default FeaturedProject;
