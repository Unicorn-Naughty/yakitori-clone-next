
import { CircleUser, LogIn } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { FC } from "react";

interface profileButtonProps {
  className?: string;
  onClickSignIn: VoidFunction;
}

const ProfileButton: FC<profileButtonProps> = ({
  className,
  onClickSignIn,
}) => {
  const { data: session } = useSession();
  return (
    <div className={className}>
      {session ? (
        <Link href="/profile">
          <CircleUser className="ml-1 cursor-pointer text-red-500" />
        </Link>
      ) : (
        <button onClick={onClickSignIn}>
          <LogIn className="ml-1 cursor-pointer text-red-500" />
        </button>
      )}
    </div>
  );
};

export default ProfileButton;
