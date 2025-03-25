export class MusicEntity {
  constructor(
    public id: string,
    public title: string,
    public status:
      | 'CONTESTADA'
      | 'EM_ANALISE'
      | 'LIBERADA'
      | 'PENDENTE'
      | 'SEM_CONTRATO',
  ) {}
}
