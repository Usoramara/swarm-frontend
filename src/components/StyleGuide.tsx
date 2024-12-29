import React from "react";
import { Button } from "./ui/button";
import { Hexagon, Brain, Bot, Shield } from "lucide-react";

export const StyleGuide = () => {
  return (
    <div className="container mx-auto px-4 py-12 space-y-16 bg-dark text-white">
      {/* Colors */}
      <section>
        <h2 className="text-h2 font-display mb-8">Colors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <div className="h-20 bg-primary rounded-lg"></div>
            <p className="text-small">Primary: #ACFF00</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-secondary rounded-lg"></div>
            <p className="text-small">Secondary: #00F0FF</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-dark rounded-lg border border-gray-800"></div>
            <p className="text-small">Dark: #0A0A0B</p>
          </div>
          <div className="space-y-2">
            <div className="h-20 bg-dark-lighter rounded-lg"></div>
            <p className="text-small">Dark Lighter: #141415</p>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="text-h2 font-display mb-8">Typography</h2>
        <div className="space-y-6">
          <div>
            <h1 className="text-display-large font-display">Display Large</h1>
            <p className="text-gray-400">Space Grotesk - 4.5rem</p>
          </div>
          <div>
            <h1 className="text-h1 font-display">Heading 1</h1>
            <p className="text-gray-400">Space Grotesk - 3.5rem</p>
          </div>
          <div>
            <h2 className="text-h2 font-display">Heading 2</h2>
            <p className="text-gray-400">Space Grotesk - 2.5rem</p>
          </div>
          <div>
            <h3 className="text-h3 font-display">Heading 3</h3>
            <p className="text-gray-400">Space Grotesk - 2rem</p>
          </div>
          <div>
            <p className="text-body-large">Body Large - Inter Regular</p>
            <p className="text-gray-400">Inter - 1.125rem</p>
          </div>
          <div>
            <p className="text-body">Body Text - Inter Regular</p>
            <p className="text-gray-400">Inter - 1rem</p>
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="text-h2 font-display mb-8">Buttons</h2>
        <div className="space-y-4">
          <div className="space-x-4">
            <Button>Primary Button</Button>
            <Button variant="secondary">Secondary Button</Button>
          </div>
          <div className="space-x-4">
            <Button variant="outline">Outline Button</Button>
            <Button variant="ghost">Ghost Button</Button>
          </div>
        </div>
      </section>

      {/* Icons */}
      <section>
        <h2 className="text-h2 font-display mb-8">Icons</h2>
        <div className="flex gap-8">
          <Hexagon className="w-12 h-12 text-primary" />
          <Brain className="w-12 h-12 text-secondary" />
          <Bot className="w-12 h-12 text-accent-purple" />
          <Shield className="w-12 h-12 text-accent-blue" />
        </div>
      </section>

      {/* Spacing */}
      <section>
        <h2 className="text-h2 font-display mb-8">Spacing</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-xs h-xs bg-primary"></div>
            <span>xs - 0.5rem</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-sm h-sm bg-primary"></div>
            <span>sm - 1rem</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-md h-md bg-primary"></div>
            <span>md - 1.5rem</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-lg h-lg bg-primary"></div>
            <span>lg - 2rem</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StyleGuide;