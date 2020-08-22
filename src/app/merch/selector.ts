export class Selector {

  constructor(id: number, text: string, isChosen: boolean) {
    this.defaultId = id;
    this.newId = id;
    this.text = text;
    this.isChosen = isChosen;
  }


  public defaultId: number;
  public newId: number;
  public text: string;
  public isChosen: boolean;
}
