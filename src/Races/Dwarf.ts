import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  public static dwarfInstances = 0;
  
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 80;
    Dwarf.dwarfInstances += 1;
  }
  
  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  public static createdRacesInstances(): number {
    return this.dwarfInstances;
  }
}