import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints: number;
  public static elfInstances = 0;
  
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 99;
    Elf.elfInstances += 1;
  }
  
  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  public static createdRacesInstances(): number {
    return this.elfInstances;
  }
}