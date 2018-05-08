export class ServerService{
  serverList: {id: number, name: string, allowEdit: boolean}[] = [
    {id: 1, name: 'PROD server', allowEdit: false},
    {id: 2, name: 'QA server', allowEdit: true},
    {id: 3, name: 'DEV server', allowEdit: true}
  ];
lastId = 3;
  updateServer(id: number, name: string){
    this.serverList[id-1].name = name;
  }

  addServer(name: string){
    this.lastId++;
    this.serverList.push({id: this.lastId, name: name, allowEdit: true});
  }

  getServerName(id: number){
    return this.serverList[id-1].name;
  }

  getServer(id: number){
    return this.serverList[id-1];
  }
}
