/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Button, Dialog, DialogContent, DialogTitle } from "@/components/ui";
import { signIn } from "next-auth/react";
import React, { FC, useState } from "react";
import { Github } from "lucide-react";
import LoginForm from "./forms/LoginForm";
import { RegisterForm } from "./forms/RegisterForm";
interface AuthModalProps {
  className?: string;
  open: boolean;
  onClose: () => void;
}

const AuthModal: FC<AuthModalProps> = ({ open, onClose }) => {
  const [type, setType] = useState<"login" | "register">("login");

  const onSwitchType = () => {
    setType(type === "login" ? "register" : "login");
  };
  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogTitle></DialogTitle>
      <DialogContent aria-describedby={undefined} className="w-[450] bg-white p-10">
        {type === 'login'? <LoginForm onClose={handleClose}/> : <RegisterForm onClose={handleClose}/>}
        <hr />
        <div className="flex justify-between">
          <Button
            onClick={() =>
              signIn("github", {
                callbackUrl: "/",
                redirect: true,
              })
            }
          >
            <Github />
            GitHub
          </Button>
          <Button
            onClick={() =>
              signIn("google", {
                callbackUrl: "/",
                redirect: true,
              })
            }
          >
            <img
              className="w-6 h-6"
              src="https://fonts.gstatic.com/s/i/productlogos/googleg/v6/24px.svg"
            />
            Google
          </Button>
        </div>
        <Button variant='outline' onClick={onSwitchType} type="button">
          {type !== "login" ? "Войти" : "Регистрация"}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AuthModal;
