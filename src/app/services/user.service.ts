
export class UserService{
  activeUsers: string[] = ['Vikas', 'Nansi'];
  inActiveUsers: string[] = ['meera', 'manorama'];

  makeActive(id: number){
    this.activeUsers.push(this.inActiveUsers[id]);
    this.inActiveUsers.splice(id, 1);
  }

  makeInactive(id: number){
    console.log('make inactive within service ' + id);
    this.inActiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }
}
