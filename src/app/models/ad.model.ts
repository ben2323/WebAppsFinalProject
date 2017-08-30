import {CityModel} from "./city.model";
/**
 * Created by ben on 29/08/17.
 */
export class AdModel{
  name: string;
  _id: string;
  city: CityModel;
  htmlContent: string;

  constructor(){
    this.name = 'New Ad';
    this.city = new CityModel();
    this.htmlContent = '';
  }
}
