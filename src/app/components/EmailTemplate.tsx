import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae,
      voluptatum quidem quia non dolorem reprehenderit doloremque accusamus esse
      dolorum libero, explicabo cumque rerum nostrum debitis quam et incidunt
      ea? Voluptates.
    </p>
    <button className="bg-sky-500 px-3 py-2">
      <a href="https://porfolio-three-mocha.vercel.app/">Porfolio</a>
    </button>
  </div>
);
