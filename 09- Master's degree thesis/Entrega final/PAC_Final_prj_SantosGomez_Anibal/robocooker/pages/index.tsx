import ButtonLink from "components/common/Button/ButtonLink";
import MainLayout from "components/layout/MainLayout";
import {
  Hero,
  Container,
  ContainerContent,
  ContainerHeader,
  ContainerLink,
  ContentCategories,
  ContentBlenders,
  ContentTrending,
  SubParagraph,
  Subtitle,
} from "components/pages/home";
import ContentLastRecipes from "components/pages/home/content/ContentLastRecipes";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Hero />
      <Container>
        <ContainerHeader>
          <Subtitle title="Últimas tendencias" />
          <SubParagraph content="Conoce las recetas favoritas de la comunidad y a los Robousers que mas se crean, cocinan y nos deleitan." />
        </ContainerHeader>
        <ContainerContent>
          <ContentTrending />
        </ContainerContent>
      </Container>
      <Container>
        <ContainerHeader>
          <Subtitle title="¿Que procesador tienes?" />
          <SubParagraph content="Si buscas recetas orientadas a un procesador de alimentos, este es tu sitio. Actualmente existen los siguientes, pero iremos engordando la lista." />
        </ContainerHeader>
        <ContainerContent>
          <ContentBlenders />
        </ContainerContent>
      </Container>
      <Container>
        <ContainerHeader>
          <Subtitle title="Elige categoría" />
          <SubParagraph content="En búsqueda de la receta perfecta, elige de entre las 21 categorias y que te cojan con las manos en la masa" />
        </ContainerHeader>
        <ContainerContent>
          <ContentCategories />
          <ContainerLink>
            <ButtonLink href="/categories" label="Ver todas las categorías" />
          </ContainerLink>
        </ContainerContent>
      </Container>
      <div className="bg-gray-50 dark:bg-gray-800 py-5">
        <Container>
          <ContainerHeader>
            <Subtitle title="Últimas recetas" />
            <SubParagraph content="Estas son las recetas mas recientes que hemos creado, y que estan siendo vistas por miles de usuarios." />
          </ContainerHeader>
          <ContainerContent>
            <ContentLastRecipes />
            <ContainerLink>
              <ButtonLink href="/recipes" label="Ver todas las recetas" />
            </ContainerLink>
          </ContainerContent>
        </Container>
      </div>
    </MainLayout>
  );
};

export default Home;
