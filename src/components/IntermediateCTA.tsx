import { Button } from "./ui/button";

interface IntermediateCTAProps {
  headline: string;
  buttonText: string;
  className?: string;
}

export const IntermediateCTA = ({ headline, buttonText, className = "" }: IntermediateCTAProps) => {
  return (
    <section className={`hidden lg:block py-12 px-4 lg:px-16 ${className}`}>
      <div className="bg-muted rounded-2xl py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-satoshi text-lg text-foreground mb-6">
            {headline}
          </p>
          <Button variant="medical" size="lg">
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
};