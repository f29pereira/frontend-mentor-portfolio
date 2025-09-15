import Image from "next/image";
import Card from "./components/Card/Card";

export default function Home() {
  return (
    <main className="mt-10 p-4 lg:mt-20">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          <Card
            imageSrc="images/fylo_landing_page.png"
            imageAlt="Fylo Landing Page Challenge"
            title="Fylo landing page"
            desctiption="Built with: Next.js, React, TypeScript, HTML and CSS"
            demoLink="https://f29pereira.github.io/fylo/"
            codeLink="https://github.com/f29pereira/fylo"
          />
          <Card
            imageSrc="images/bento_grid.png"
            imageAlt="Bento Grid Challenge"
            title="Bento Grid"
            desctiption="Built with: Next.js, React, TypeScript, HTML and CSS"
            demoLink="https://f29pereira.github.io/bento-grid/"
            codeLink="https://github.com/f29pereira/bento-grid"
          />
          <Card
            imageSrc="images/order_summary.png"
            imageAlt="Order Summary Challenge"
            title="Order Summary"
            desctiption="Built with: Next.js, React, TypeScript, HTML and CSS"
            demoLink="https://f29pereira.github.io/order-summary/"
            codeLink="https://github.com/f29pereira/order-summary"
          />
        </div>
      </div>
    </main>
  );
}
