/**
 * Created by ben on 29/08/17.
 */
export class AdModel{
  name: string;
  city:{
    name:string
  };

  constructor(){
    this.name = 'New Ad';
    this.city = {
      name: ''
    };
  }
}
