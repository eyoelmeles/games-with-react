import { FC, ReactNode } from "react";

type VariantType = "primary" | "secondary" | "warning" | "error";
interface ButtonProps {
  name: string;
  icon?: ReactNode;
  onClick: () => void;
  variant: VariantType;
}

const Button: FC<ButtonProps> = ({ name, icon, onClick, variant }) => {
  variant;
  const Icon = icon != null ? icon : null;
  let color: string;
  switch (variant) {
    case "primary":
      color = "bg-green-400";
      break;
    case "secondary":
      color = "bg-blue-400";
      break;
    case "warning": {
      color = "bg-yellow-400";
      break;
    }
    case "error": {
      color = "bg-red-500 text-white";
      break;
    }
    default:
      color = "bg-green-400";
  }

  return (
    <div className={`flex flex-col min-w-32 space-x-2 p-2 ${color}`}>
      {Icon}
      <button onClick={onClick}>{name.toUpperCase()}</button>
    </div>
  );
};

export default Button;
