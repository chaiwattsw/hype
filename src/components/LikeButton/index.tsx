import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

type LikeButtonProps = {
  isLiked: boolean;
} & ButtonProps;

const LikeButton = ({ isLiked }: LikeButtonProps) => {
  return <div>index</div>;
};

export default LikeButton;
