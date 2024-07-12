import { Button } from "@/components/ui/button";
import { useState } from "react";

const Index = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
    console.log("Button clicked!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Bare-Bones Web Application</h1>
      </header>

      <main className="text-center">
        <p className="mb-4">This is a simple web application that you can modify and build upon.</p>
        <Button onClick={handleClick}>
          Click me! Count: {count}
        </Button>
      </main>

      <footer className="text-center mt-8 text-sm text-gray-500">
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;