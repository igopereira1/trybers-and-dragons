import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Mage extends Archetype {
  private _energyType: EnergyType;
  public static mageInstances = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage.mageInstances += 1;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }

  public static createdArchetypeInstances(): number {
    return Mage.mageInstances;
  }
}
