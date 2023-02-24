import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints: number;
  static halflingInstances = 0;
  
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 60;
    Halfling.halflingInstances += 1;
  }
  
  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  public static createdRacesInstances(): number {
    return this.halflingInstances;
  }
}