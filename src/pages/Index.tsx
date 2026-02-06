import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Redirect to the game
    window.location.href = "/lia-adventure/index.html";
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-primary">Lia Adventure</h1>
        <p className="text-xl text-muted-foreground">Carregando o jogo...</p>
      </div>
    </div>
  );
};

export default Index;
