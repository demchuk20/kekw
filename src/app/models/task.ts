export class Task {
  constructor(
    public id?: number,
    public imageUrl?: string,
    public startTime?: string,
    public executionTime?: string,
    public isCanceled?: boolean,
    public owner?: number,
    public image?: string,
  ) {
  }
}
