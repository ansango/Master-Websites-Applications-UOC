import * as SimpleIcons from "@icons-pack/react-simple-icons";
type CardCallActionProps = {
  title: string;
  description: string;
  actions: {
    primary: {
      icon: keyof typeof SimpleIcons;
      label: string;
      description: string;
      action: () => void;
    };
    secondary: {
      icon: keyof typeof SimpleIcons;
      label: string;
      description: string;
      action: () => void;
    };
  };
};

export default CardCallActionProps;
