export class Recetas {
  constructor(
    public id: number,
    public nombre: string,
    public ingredientes: string,
    public instrucciones: string,
    public tiempo: string
  ) {}
}
