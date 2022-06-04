import { selectProfile } from "@/store/features/profile";
import { getProfile } from "@/store/features/profile/thunk";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import CardRecipe from "components/common/Cards/RecipeProfile/CardRecipe";
import MainLayout from "components/layout/MainLayout";
import CardAvatar from "components/pages/profile/CardAvatar";
import CardContainer from "components/pages/profile/CardContainer";
import CardFirstCol from "components/pages/profile/CardFirstCol";
import CardFirstColContent from "components/pages/profile/CardFirstColContent";
import CardSecondCol from "components/pages/profile/CardSecondCol";
import CardSecondColContent from "components/pages/profile/CardSecondColContent";
import Container from "components/pages/profile/Container";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Profile: NextPage = () => {
  const { query } = useRouter();
  const { username } = query;
  const dispatch = useAppDispatch();
  const profile = useAppSelector(selectProfile);
  useEffect(() => {
    if (!Array.isArray(username) && username) {
      dispatch(getProfile(username));
    }
  }, [username, dispatch]);

  return (
    <MainLayout>
      <Container>
        {profile && (
          <CardContainer>
            <CardFirstCol>
              <CardAvatar avatar={profile.avatar} username={profile.username} />
              <CardFirstColContent username={profile.username} />
            </CardFirstCol>
            <CardSecondCol>
              <CardSecondColContent profile={profile} />
            </CardSecondCol>
          </CardContainer>
        )}
      </Container>
      <div className="bg-gray-50 dark:bg-gray-800">
        <Container>
          <article className="container mx-auto space-y-5">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
              {profile &&
                profile.recipes.map((recipe) => (
                  <CardRecipe key={recipe._id} {...recipe} id={recipe._id} />
                ))}
            </div>
          </article>
        </Container>
      </div>
    </MainLayout>
  );
};

export default Profile;
