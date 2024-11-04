import * as React from "react";

interface VerificationUserTemplateProps {
  code: string;
}

export const VerificationUserTemplate: React.FC<
  VerificationUserTemplateProps
> = ({ code }) => (
  <div>
    <p>
      Код подтверждения:<h1>{code}</h1>
    </p>
    <p>
      <a href={`http://localhost:3000/api/auth/verify?code=${code}`}>
        Подтвердить регистрацию
      </a>
    </p>
  </div>
);
