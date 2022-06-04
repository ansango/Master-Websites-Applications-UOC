import { FC } from "react";
import Author from "./Author";
import Options from "./Options";

type Props = {
  id: RecipeId;
};

const AuthorOptionsBlock: FC<Props> = ({ id }) => {
  return (
    <div className="flex justify-between items-center">
      <Author />
      <Options id={id} />
    </div>
  );
};

export default AuthorOptionsBlock;
