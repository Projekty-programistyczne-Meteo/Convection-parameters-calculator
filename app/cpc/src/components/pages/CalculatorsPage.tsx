import Hero from '../layout/Hero';
import StabilityOfTheAtmosphere from '../layout/Calculators/StabilityOfTheAtmosphere';
import UpdraftStrenght from '../layout/Calculators/UpdraftStrenght';
import VerticalVelocity from '../layout/Calculators/VerticalVelocity';
import EnergyHelicityIndex from '../layout/Calculators/EnergyHelicityIndex';
import DerechoCompositeParameter from '../layout/Calculators/DerechoCompositeParameter';
import LiftingCondensationLevel from '../layout/Calculators/LiftingCondensationLevel';
import DewPointTemperature from '../layout/Calculators/DewPointTemperature';
import UpwardVerticalVelocity from '../layout/Calculators/UpwardVerticalVelocity';

/**
 * Composes the calculators page by stacking every meteorological calculator section after the hero.
 * It works as the route-level aggregator for all calculator components.
 */
function CalculatorsPage() {
  return (
    <>
      <Hero />
      <StabilityOfTheAtmosphere />
      <UpdraftStrenght />
      <VerticalVelocity />
      <EnergyHelicityIndex />
      <DerechoCompositeParameter />
      <LiftingCondensationLevel />
      <DewPointTemperature />
      <UpwardVerticalVelocity />
    </>
  );
}

export default CalculatorsPage;
