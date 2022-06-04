import { selectRobousers } from "@/store/features/robousers";
import { getUsersTrending } from "@/store/features/robousers/thunks";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Avatar } from "components/common/Avatar";
import GenericHero from "components/common/Hero/GenericHero";
import MainLayout from "components/layout/MainLayout";
import { ContainerHeader, SubParagraph, Subtitle } from "components/pages/home";
import Container from "components/pages/trending/Container";
import ContainerContent from "components/pages/trending/ContainerContent";
import { NextPage } from "next";
import Link from "next/link";
import { useEffect } from "react";

const placeEmojis = [
  {
    name: "first",
    emoji: "🥇",
  },
  {
    name: "second",
    emoji: "🥈",
  },
  {
    name: "third",
    emoji: "🥉",
  },
];

const Robousers: NextPage = () => {
  const dispatch = useAppDispatch();
  const robousers = useAppSelector(selectRobousers);
  useEffect(() => {
    dispatch(getUsersTrending());
  }, [dispatch]);
  return (
    <MainLayout>
      <GenericHero
        title="Robousers"
        description="Robousers es una comunidad de usuarios que aman la cocina y la comida. ¡Sé parte de esta comunidad!"
      />
      <div className="">
        <Container>
          <ContainerHeader>
            <Subtitle title="Los que mas se manchan" />
            <SubParagraph content="Hay mucha gente creando nuevas recetas, pero los que están a fuego merecen un lugar en nuestros fogones." />
          </ContainerHeader>
          <ContainerContent>
            <div className="bg-gradient-to-r from-[#a7ecd0] to-[#b565ff] dark:from-[#341e49] dark:to-[#374d44] rounded-2xl p-10 flex justify-center">
              <div className="space-y-10">
                {robousers &&
                  robousers.slice(0, 3).map((robouser, index) => (
                    <div key={index} className="card shadow-xl glass">
                      <div className="flex flex-col items-center space-y-5 card-body">
                        <div className="flex items-center">
                          {placeEmojis[index] && (
                            <span className="text-5xl">
                              {placeEmojis[index].emoji}
                            </span>
                          )}
                          <Avatar
                            size="lg"
                            username={robouser.username}
                            imgUrl={robouser.avatar}
                          />
                          {placeEmojis[index] && (
                            <span className="text-5xl">
                              {placeEmojis[index].emoji}
                            </span>
                          )}
                        </div>
                        <h4 className="font-semibold text-xl">
                          @{robouser.username}
                        </h4>
                        <Link passHref href={`/profile/${robouser.username}`}>
                          <button className="btn btn-primary normal-case btn-sm">
                            Perfil
                          </button>
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </ContainerContent>
        </Container>
      </div>
      <div className="bg-gray-50 dark:bg-gray-800 py-5">
        <Container>
          <ContainerHeader>
            <Subtitle title="Subiendo posiciones" />
            <SubParagraph content="Y escalando posiciones en la comunidad de Robousers todos estos aspirantes a top chefs" />
          </ContainerHeader>
          <ContainerContent>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {robousers &&
                robousers.slice(3, 11).map((robouser, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center space-y-5 mb-5"
                  >
                    <Avatar
                      size="md"
                      username={robouser.username}
                      imgUrl={robouser.avatar}
                    />
                    <h4 className="font-semibold text-xl">
                      @{robouser.username}
                    </h4>
                    <Link passHref href={`/profile/${robouser.username}`}>
                      <button className="btn btn-primary normal-case btn-sm">
                        Perfil
                      </button>
                    </Link>
                  </div>
                ))}
            </div>
          </ContainerContent>
        </Container>
      </div>
    </MainLayout>
  );
};

export default Robousers;
