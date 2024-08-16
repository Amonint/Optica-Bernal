import React from 'react';
import AnimateOnScreen from '../../AnimateOnScreen';
import { ContentSection, TextWrapper, Text, GridWrapper, GridItem, GridImage, GridText } from './styles';

const Content = () => {
  return (
    <AnimateOnScreen>
      <ContentSection>
        <TextWrapper>
          <Text>
            <span className="title">Trayectoria Profesional 3 Décadas de Ocularistas</span>
            <br />
            <span className="subtitle">Descubre nuestros servicios de optometría avanzada y cuidado ocular integral para mantener tu visión en óptimas condiciones.</span>
          </Text>
        </TextWrapper>

        <GridWrapper>
          <GridItem>
            <GridImage src="videos/1.jpg" alt="Imagen 1" />
            <GridText>
              <h1 className="grid-title">
                Fabricación y Adaptación de Prótesis Oculares
              </h1>
              En PROCUBER, ofrecemos productos y servicios avanzados de prótesis oculares que mejoran la apariencia y el bienestar de los pacientes. Utilizamos tecnologías y materiales innovadores, como acrílicos hipoalergénicos, para fabricar prótesis que elevan psicológicamente a los pacientes en momentos críticos. Nuestras técnicas especializadas y lentes de contacto protésicos proporcionan resultados estéticos excelentes, ayudando a los pacientes a reintegrarse en la sociedad con renovada confianza.
            </GridText>
          </GridItem>
          <GridItem>
            <GridImage src="videos/imagen2.jpg" alt="Imagen 2" />
            <GridText><h1 className="grid-title">Tratamiento de Plasma en Prótesis Oculares</h1>
              El plasma es un procedimiento físico-químico que modifica la superficie de los polímeros, mejorando la calidad de prótesis y lentes oculares. Aplicar este tratamiento proporciona una superficie más homogénea, suave y mejor humectada, aumentando el confort y durabilidad de los dispositivos. Con tres décadas de experiencia en la fabricación de prótesis oculares personalizadas y avances en contactología especializada, hemos desarrollado tratamientos de plasma que optimizan las propiedades de los polímeros, mejorando su humectabilidad, permeabilidad y resistencia mecánica</GridText>
          </GridItem>
          <GridItem>
            <GridImage src="videos/imagen3.jpeg" alt="Imagen 3" />
            <GridText><h1 className="grid-title">Venta de monturas</h1>
              Ofrecemos una amplia selección de monturas, anteojos y gafas que combinan estilo, calidad y comodidad. Nuestros productos están diseñados para adaptarse a tus necesidades visuales, asegurando una visión clara y una apariencia elegante. Con opciones para todos los gustos, te ayudamos a encontrar el par perfecto que refleje tu personalidad y te haga sentir bien.</GridText>
          </GridItem>
          <GridItem>
            <GridImage src="videos/poo.jpg" alt="Imagen 4" />
            <GridText><h1 className="grid-title">Adaptación y venta de lentes de contacto</h1>
            Proveemos una gama completa de lentes de contacto que se ajustan a tus necesidades visuales y de confort. Nuestro servicio de adaptación garantiza un ajuste perfecto y una experiencia de uso cómoda y saludable. Ya sea para corrección visual o uso estético, encontrarás lentes de alta calidad que mejoran tu visión y se adaptan a tu estilo de vida.
            </GridText>
          </GridItem>
          <GridItem>
            <GridImage src="videos/imagen3.jpg" alt="Imagen 5" />
            <GridText><h1 className="grid-title">Examen Visual Optométrico</h1>
            Un examen visual optométrico evalúa la capacidad de enfocar correctamente los rayos de luz en la retina, esencial para una visión clara. Problemas como hipermetropía (visión borrosa de cerca), miopía (dificultad para ver a distancia) y astigmatismo (visión distorsionada) se diagnostican y corrigen con gafas o lentes de contacto modernos, mejorando la calidad visual y logrando una agudeza de 20/20 bajo la supervisión de un profesional.</GridText>
          </GridItem>
          <GridItem>
            <GridImage src="videos/lentes-de-contacto.jpg" alt="Imagen 6" />
            <GridText><h1 className="grid-title">Asepsia y conservación de lentes de contacto</h1>
            Ofrecemos soluciones avanzadas para la conservación y asepsia de tus lentes de contacto, asegurando su limpieza y desinfección diaria. Nuestros productos mantienen tus lentes libres de bacterias y depósitos, proporcionando una visión clara y saludable. Con nuestras soluciones, puedes confiar en la seguridad y comodidad de tus lentes de contacto en cada uso.</GridText>
          </GridItem>

        </GridWrapper>
      </ContentSection>
    </AnimateOnScreen>
  );
};

export default Content;