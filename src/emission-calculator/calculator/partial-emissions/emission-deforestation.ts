import { EmissionInput } from "../../types/input";
import { EmissionUnits } from "../../types/result";

export function getDeforestationEmission(input: Partial<EmissionInput>): EmissionUnits {
    return {
        co2Emission: 0
    };
};