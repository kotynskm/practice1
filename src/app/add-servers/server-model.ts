export class Server {
  public name: string;
  public content: string;
  public isBlueprint: boolean;

  constructor(name: string, content: string, isBlueprint: boolean) {
    (this.name = name),
      (this.content = content),
      (this.isBlueprint = isBlueprint);
  }
}
