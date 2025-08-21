
import { Battery, Utensils, RotateCcw } from "lucide-react";

export const FamiliarProblemsSection = () => {
  return (
    <div className="text-center mb-8">
      <h3 className="font-unna text-xl text-foreground mb-6">
        Does this sound familiar?
      </h3>
      
      <div className="flex justify-center items-start gap-8">
        {/* Point 1: Weight bounces back */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center mb-3">
            <RotateCcw className="w-8 h-8 text-primary" strokeWidth={1.5} />
          </div>
          <p className="font-satoshi text-sm text-secondary leading-tight">
            Weight bounces<br />back?
          </p>
        </div>

        {/* Point 2: Diets feel stuck */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center mb-3">
            <div className="relative">
              <Utensils className="w-8 h-8 text-primary" strokeWidth={1.5} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-6 bg-primary rounded-full flex flex-col justify-center gap-0.5">
                  <div className="w-1 h-2 bg-background rounded-full mx-auto"></div>
                  <div className="w-1 h-2 bg-background rounded-full mx-auto"></div>
                </div>
              </div>
            </div>
          </div>
          <p className="font-satoshi text-sm text-secondary leading-tight">
            Diets feel<br />stuck?
          </p>
        </div>

        {/* Point 3: Constant fatigue */}
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 flex items-center justify-center mb-3">
            <Battery className="w-8 h-8 text-primary" strokeWidth={1.5} />
          </div>
          <p className="font-satoshi text-sm text-secondary leading-tight">
            Constant<br />fatigue?
          </p>
        </div>
      </div>
    </div>
  );
};
