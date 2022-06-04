import { selectUser } from "@/store/features/user";
import { useAppSelector } from "@/store/hooks";
import { Icon } from "components/common/Icons";
import { FC } from "react";

type Props = {};

const Printer: FC<Props> = () => {
  const user = useAppSelector(selectUser);
  return (
    <>
      {user && (
        <button className="btn btn-ghost btn-sm btn-circle">
          <Icon icon="PrinterIcon" kind="outline" className="w-5 h-5" />
        </button>
      )}
    </>
  );
};

export default Printer;
