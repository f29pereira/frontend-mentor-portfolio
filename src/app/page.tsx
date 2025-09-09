import Image from "next/image";
import Card from "./components/Card/Card";

export default function Home() {
  return (
    <main className="mt-20 p-4">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Card
            imageSrc="/images/order_summary.png"
            imageAlt="Image of Order Summary Challenge"
            title="Order Summary"
            desctiption="Built with: Next.js, React, TypeScript, HTML and CSS"
            demoLink="https://f29pereira.github.io/order-summary/"
            codeLink="https://github.com/f29pereira/order-summary"
          />
          <Card
            imageSrc="/images/bento_grid.png"
            imageAlt="Image of Bento Grid Challenge"
            title="Bento Grid"
            desctiption="Built with: Next.js, React, TypeScript, HTML and CSS"
            demoLink="https://f29pereira.github.io/bento-grid/"
            codeLink="https://github.com/f29pereira/bento-grid"
          />
        </div>
      </div>
    </main>
  );
}
