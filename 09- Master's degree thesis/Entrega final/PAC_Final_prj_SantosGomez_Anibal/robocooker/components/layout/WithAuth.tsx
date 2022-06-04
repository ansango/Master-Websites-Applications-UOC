import { selectUser } from "@/store/features/user";
import { useAppSelector } from "@/store/hooks";
import { useRouter } from "next/router";
import { FC, ReactNode, useEffect } from "react";

type Props = {
  children?: ReactNode;
};

const WithAuth: FC<Props> = ({ children }) => {
  const user = !!useAppSelector(selectUser);
  const { push } = useRouter();
  useEffect(() => {
    if (!user) push("/signin");
  }, [user, push]);
  if (!user) return null;
  return <>{children}</>;
};

export default WithAuth;
