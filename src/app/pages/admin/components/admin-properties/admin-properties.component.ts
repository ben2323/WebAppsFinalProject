import {
  Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation, SimpleChanges,
  OnChanges
} from '@angular/core';
import {AdminService} from "../../admin.service";
import {AdModel} from "../../../../models/ad.model";
import {Observable} from "rxjs";
import {CityModel} from "../../../../models/city.model";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'admin-properties',
  templateUrl: './admin-properties.component.html',
  styleUrls: ['admin-properties.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AdminPropertiesComponent implements OnInit, OnChanges {
  @Input() properties: AdModel;
  @Input() title: string;

  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @Output() onSave: EventEmitter<any> = new EventEmitter();

  weatherInfo: Observable<string>;
  cities: CityModel[];
  filteredCities: Observable<CityModel[]>;
  cityControl: FormControl = new FormControl();
  selectedCity: CityModel;

  constructor(private _adminService: AdminService) {
    this.cities = this.getCities();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['properties']) {
      this.weatherInfo = this.getWeatherByCity(this.properties.city.name);
      this.selectedCity = this.properties.city;
    }
  }

  ngOnInit() {
    this.filteredCities = this.cityControl.valueChanges
      .startWith(null)
      .map(val => val ? this.filter(val) : this.cities.slice());
  }

  filter(val: string): CityModel[] {
    return this.cities.filter(city =>
    city.name.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  close() {
    this.onClose.emit();
  }

  save() {
    this.onSave.emit(Object.assign({}, this.properties, {city: this.selectedCity}));
  }

  getWeatherByCity(city: string) {
    return this._adminService.getWeatherByCity(city);
  }

  setCity(city:CityModel){
    this.selectedCity = city;
  }

  getCities(): CityModel[] {
    return [{"name": "Tel Aviv, IL", "lat": 32.109333, "lng": 34.855499}
      , {"name": "New York, US", "lat": 40.712784, "lng": -74.005941}
      , {"name": "Dydney, AU", "lat": -33.86882, "lng": 151.209296}
      , {"name": "Tokyo, JP", "lat": 35.689487, "lng": 139.691706}
      , {"name": "Moscow, Russia", "lat": 55.75, "lng": 37.6166667}
      , {"name": "London, UK", "lat": 51.5081289, "lng": -0.128005}
      , {"name": "St Petersburg, Russia", "lat": 60.07623830000001, "lng": 30.1213829}
      , {"name": "Berlin, Germany", "lat": 52.524268, "lng": 13.40629}
      , {"name": "Madrid, Spain", "lat": 40.4166909, "lng": -3.700345399999999}
      , {"name": "Rome, Italy", "lat": 41.8905198, "lng": 12.4942486}
      , {"name": "Kiev, Kyiv city, Ukraine, 02000", "lat": 50.4501, "lng": 30.5234}
      , {"name": "Paris, France", "lat": 48.856614, "lng": 2.3522219}
      , {"name": "Bucharest, Romania", "lat": 44.43771100000001, "lng": 26.0973669}
      , {"name": "Budapest, Hungary", "lat": 47.4984056, "lng": 19.0407578}
      , {"name": "Hamburg, Germany", "lat": 53.556866, "lng": 9.994622}
      , {"name": "Minsk, Belarus", "lat": 53.9, "lng": 27.5666667}
      , {"name": "Warsaw, Poland", "lat": 52.2296756, "lng": 21.0122287}
      , {"name": "Belgrade, Serbia", "lat": 44.802416, "lng": 20.465601}
      , {"name": "Vienna, Austria", "lat": 48.2081743, "lng": 16.3738189}
      , {"name": "Kharkiv, Kharkivs'ka oblast, Ukraine, 61000", "lat": 49.9935, "lng": 36.230383}
      , {"name": "Barcelona, Spain", "lat": 41.387917, "lng": 2.1699187}
      , {"name": "Novosibirsk, Novosibirskaya oblast, Russia", "lat": 55.0333333, "lng": 82.9166667}
      , {"name": "Nizhny Novgorod, Nizhegorodskaya oblast, Russia", "lat": 56.3166667, "lng": 44}
      , {"name": "Milan, Italy", "lat": 45.463681, "lng": 9.1881714}
      , {"name": "Yekaterinburg, Sverdlovskaya oblast, Russia", "lat": 56.84999999999999, "lng": 60.59999999999999}
      , {"name": "Munich, Germany", "lat": 48.1448353, "lng": 11.5580067}
      , {"name": "Prague, Czech Republic", "lat": 50.0878114, "lng": 14.4204598}
      , {"name": "Samara, Samarskaya oblast, Russia", "lat": 53.2415041, "lng": 50.2212463}
      , {"name": "Omsk, Omsk Oblast, Russia", "lat": 54.9833333, "lng": 73.3666667}
      , {"name": "Sofia, Bulgaria", "lat": 42.6964917, "lng": 23.3260106}
      , {"name": "Dnipropetrovs'k, Dnipropetrovs'ka oblast, Ukraine, 49000", "lat": 48.464717, "lng": 35.046183}
      , {"name": "Kazan, Republic of Tatarstan, Russia", "lat": 55.8005556, "lng": 49.1055556}
      , {"name": "Ufa, Republic of Bashkortostan, Russia", "lat": 54.7833333, "lng": 56.0333333}
      , {"name": "Chelyabinsk, Chelyabinskaya oblast, Russia", "lat": 55.201612, "lng": 61.43839000000001}
      , {"name": "Donets'k, Donets'ka oblast, Ukraine, 83000", "lat": 48.015883, "lng": 37.80285}
      , {"name": "Naples, Italy", "lat": 40.8399833, "lng": 14.2525421}
      , {"name": "Birmingham, West Midlands, UK", "lat": 52.48624299999999, "lng": -1.890401}
      , {"name": "Perm, Perm Krai, Russia", "lat": 58.00000000000001, "lng": 56.25}
      , {"name": "Rostov-on-Don, Rostovskaya oblast, Russia", "lat": 47.2166667, "lng": 39.7}
      , {"name": "Odesa, Odes'ka oblast, Ukraine, 65000", "lat": 46.484583, "lng": 30.7326}
      , {"name": "Volgograd, Volgogradskaya oblast, Russia", "lat": 48.7, "lng": 44.51666669999999}
      , {"name": "Cologne, Germany", "lat": 50.9580867, "lng": 6.9204493}
      , {"name": "Turin, Italy", "lat": 45.0708515, "lng": 7.6843404}
      , {"name": "Voronezh, Voronezh Oblast, Russia", "lat": 51.65, "lng": 39.2}
      , {"name": "Krasnoyarsk, Krasnoyarsk Krai, Russia", "lat": 56, "lng": 93}
      , {"name": "Saratov, Saratov Oblast, Russia", "lat": 51.5330556, "lng": 46.0344444}
      , {"name": "Zagreb, Croatia", "lat": 45.814912, "lng": 15.9785145}
      , {"name": "Zaporozhye, Zaporiz'ka oblast, Ukraine, 69061", "lat": 47.8388, "lng": 35.139567}
      , {"name": "Łódź, Poland", "lat": 51.7592485, "lng": 19.4559833}
      , {"name": "Marseille, France", "lat": 43.296482, "lng": 5.36978}
      , {"name": "Riga, Latvia", "lat": 56.9462031, "lng": 24.1042872}
      , {"name": "L'viv, L'vivs'ka oblast, Ukraine, 79000", "lat": 49.839683, "lng": 24.029717}
      , {"name": "Athens, Greece", "lat": 37.9753357, "lng": 23.7361497}
      , {"name": "Salonika, Greece", "lat": 40.63935, "lng": 22.944607}
      , {"name": "Stockholm, Sweden", "lat": 59.32893000000001, "lng": 18.06491}
      , {"name": "Kraków, Poland", "lat": 50.06465009999999, "lng": 19.9449799}
      , {"name": "Valencia, Spain", "lat": 39.4702393, "lng": -0.3768049}
      , {"name": "Amsterdam, The Netherlands", "lat": 52.3702157, "lng": 4.895167900000001}
      , {"name": "Leeds, West Yorkshire, UK", "lat": 53.801279, "lng": -1.548567}
      , {"name": "Tolyatti, Samarskaya oblast, Russia", "lat": 53.4833333, "lng": 49.51666669999999}
      , {"name": "Kryvyi Rih, Dnipropetrovs'ka oblast, Ukraine, 50000", "lat": 47.910483, "lng": 33.391783}
      , {"name": "Seville, Spain", "lat": 37.38263999999999, "lng": -5.996295099999999}
      , {"name": "Palermo, Italy", "lat": 38.11564, "lng": 13.3614059}
      , {"name": "Ulyanovsk, Ulyanovskaya oblast, Russia", "lat": 54.3166667, "lng": 48.3666667}
      , {"name": "Chisinau, Moldova", "lat": 47.02685899999999, "lng": 28.841551}
      , {"name": "Genoa, Italy", "lat": 44.4070624, "lng": 8.9339889}
      , {"name": "Izhevsk, Udmurt Republic, Russia", "lat": 56.84999999999999, "lng": 53.2166667}
      , {"name": "Frankfurt, Germany", "lat": 50.1109221, "lng": 8.6821267}
      , {"name": "Krasnodar, Krasnodarskiy Kray, Russia", "lat": 45.0333333, "lng": 38.9833333}
      , {"name": "Wrocław, Poland", "lat": 51.1078852, "lng": 17.0385376}
      , {"name": "Glasgow, UK", "lat": 55.864237, "lng": -4.251806}
      , {"name": "Yaroslavl, Yaroslavskaya oblast, Russia", "lat": 57.6527778, "lng": 39.8761111}
      , {"name": "Khabarovsk, Khabarovsk Krai, Russia", "lat": 48.4666667, "lng": 135.1}
      , {"name": "Vladivostok, Primorsky Krai, Russia", "lat": 43.1666667, "lng": 131.9333333}
      , {"name": "Saragossa, Spain", "lat": 41.6562873, "lng": -0.8765379000000001}
      , {"name": "Essen, Germany", "lat": 51.46227, "lng": 7.008653300000001}
      , {"name": "Rotterdam, The Netherlands", "lat": 51.92421599999999, "lng": 4.481776}
      , {"name": "Irkutsk, Irkutsk Oblast, Russia", "lat": 52.2833333, "lng": 104.2666667}
      , {"name": "Dortmund, Germany", "lat": 51.50409879999999, "lng": 7.4835995}
      , {"name": "Stuttgart, Germany", "lat": 48.7754181, "lng": 9.181758799999999}
      , {"name": "Barnaul, Altai Krai, Russia", "lat": 53.3333333, "lng": 83.7666667}
      , {"name": "Vilnius, Lithuania", "lat": 54.6893865, "lng": 25.2800243}
      , {"name": "Poznań, Poland", "lat": 52.406374, "lng": 16.9251681}
      , {"name": "Düsseldorf, Germany", "lat": 51.220532, "lng": 6.810061699999999}
      , {"name": "Novokuznetsk, Kemerovo Oblast, Russia", "lat": 53.75, "lng": 87.1166667}
      , {"name": "Lisbon, Portugal", "lat": 38.70693199999999, "lng": -9.135632099999999}
      , {"name": "Helsinki, Finland", "lat": 60.169845, "lng": 24.9385508}
      , {"name": "Malaga, Spain", "lat": 36.7196484, "lng": -4.420016299999999}
      , {"name": "Bremen, Germany", "lat": 53.0847558, "lng": 8.8208279}
      , {"name": "Sheffield, South Yorkshire, UK", "lat": 53.38112899999999, "lng": -1.470085}
      , {"name": "Sarajevo, Bosnia and Herzegovina", "lat": 43.8476, "lng": 18.3564}
      , {"name": "Penza, Penza Oblast, Russia", "lat": 53.2, "lng": 45.01666669999999}
      , {"name": "Ryazan, Ryazanskaya oblast, Russia", "lat": 54.6166667, "lng": 39.7333333}
      , {"name": "Orenburg, Orenburgskaya oblast, Russia", "lat": 51.7833333, "lng": 55.09999999999999}
      , {"name": "Naberezhnye Chelny, Republic of Tatarstan, Russia", "lat": 55.7, "lng": 52.3166667}
      , {"name": "Duisburg, Germany", "lat": 51.4344079, "lng": 6.762329299999999}
      , {"name": "Lipetsk, Lipetskaya oblast, Russia", "lat": 52.59999999999999, "lng": 39.5666667}
      , {"name": "Hanover, Germany", "lat": 52.3843792, "lng": 9.7271906}
      , {"name": "Mykolaiv, Mykolaivs'ka oblast, Ukraine, 54000", "lat": 46.975033, "lng": 31.994583}
      , {"name": "Tula, Tul'skaya oblast, Russia", "lat": 54.2, "lng": 37.6166667}
      , {"name": "Oslo, Norway", "lat": 59.9138688, "lng": 10.7522454}
      , {"name": "Tyumen, Tyumenskaya oblast, Russia", "lat": 57.1666667, "lng": 65.55}
      , {"name": "Copenhagen, Denmark", "lat": 55.6760968, "lng": 12.5683371}
      , {"name": "Kemerovo, Kemerovo Oblast, Russia", "lat": 55.34999999999999, "lng": 86.05}
      , {"name": "Mariupol', Donets'ka oblast, Ukraine, 87500", "lat": 47.097133, "lng": 37.543367}
      , {"name": "Leipzig, Germany", "lat": 51.3490384, "lng": 12.3938226}
      , {"name": "Nuremberg, Germany", "lat": 49.4451843, "lng": 11.087422}
      , {"name": "Bradford, West Yorkshire, UK", "lat": 53.795984, "lng": -1.759398}
      , {"name": "Astrakhan, Astrakhanskaya oblast, Russia", "lat": 46.35, "lng": 48.05}
      , {"name": "Dublin, Co. Dublin, Ireland", "lat": 53.34410399999999, "lng": -6.267493699999999}
      , {"name": "Tomsk, Tomskaya oblast, Russia", "lat": 56.5, "lng": 84.96666669999999}
      , {"name": "Dresden, Germany", "lat": 51.0305106, "lng": 13.7572182}
      , {"name": "Homieĺ, Belarus", "lat": 52.4452778, "lng": 30.9841667}
      , {"name": "Liverpool, Merseyside, UK", "lat": 53.41154, "lng": -2.990116}
      , {"name": "Antwerp, Belgium", "lat": 51.21921589999999, "lng": 4.402881799999999}
      , {"name": "Luhans'k, Luhans'ka oblast, Ukraine, 91000", "lat": 48.574041, "lng": 39.307815}
      , {"name": "Kirov, Kirov Oblast, Russia", "lat": 58.59999999999999, "lng": 49.65}
      , {"name": "Gothenburg, Sweden", "lat": 57.70887, "lng": 11.97456}
      , {"name": "Cheboksary, Chuvash Republic, Russia", "lat": 56.1333333, "lng": 47.2333333}
      , {"name": "Ivanovo, Ivanovo Oblast, Russia", "lat": 57.01666669999999, "lng": 40.9833333}
      , {"name": "Gdańsk, Poland", "lat": 54.35202520000001, "lng": 18.6466384}
      , {"name": "Bryansk, Bryansk Oblast, Russia", "lat": 53.25, "lng": 34.4}
      , {"name": "Tver, Tverskaya oblast, Russia", "lat": 56.8666667, "lng": 35.9166667}
      , {"name": "Edinburgh, Midlothian, UK", "lat": 55.953252, "lng": -3.188267}
      , {"name": "Bratislava, Slovakia", "lat": 48.1462386, "lng": 17.1072618}
      , {"name": "The Hague, The Netherlands", "lat": 52.0704978, "lng": 4.3006999}
      , {"name": "Kursk, Kurskaya oblast, Russia", "lat": 51.7166667, "lng": 36.1833333}
      , {"name": "Manchester, UK", "lat": 53.479251, "lng": -2.247926}
      , {"name": "Skopje, Macedonia", "lat": 42.003812, "lng": 21.452246}
      , {"name": "Magnitogorsk, Chelyabinskaya oblast, Russia", "lat": 53.4166667, "lng": 58.9666667}
      , {"name": "Kaliningrad, Kaliningrad Oblast, Russia", "lat": 54.7, "lng": 20.5}
      , {"name": "Tallinn, Estonia", "lat": 59.4426896, "lng": 24.7531972}
      , {"name": "Szczecin, Poland", "lat": 53.4285438, "lng": 14.5528116}
      , {"name": "Lyon, France", "lat": 45.764043, "lng": 4.835659}
      , {"name": "Kaunas, Lithuania", "lat": 54.8968721, "lng": 23.8924264}
      , {"name": "Bristol, UK", "lat": 51.454513, "lng": -2.58791}
      , {"name": "Nizhny Tagil, Sverdlovskaya oblast, Russia", "lat": 57.91666670000001, "lng": 59.96666669999999}
      , {"name": "Bochum, Germany", "lat": 51.4696168, "lng": 7.198734699999998}
      , {"name": "Kirklees, UK", "lat": 53.5933432, "lng": -1.8009509}
      , {"name": "Makiivka, Donets'ka oblast, Ukraine, 86100", "lat": 48.04645, "lng": 37.964167}
      , {"name": "Bydgoszcz, Poland", "lat": 53.12348040000001, "lng": 18.0084378}
      , {"name": "Bologna, Italy", "lat": 44.4941903, "lng": 11.3465185}
      , {"name": "Brno, Czech Republic", "lat": 49.19205059999999, "lng": 16.6131909}
      , {"name": "Vinnytsya, Vinnyts'ka oblast, Ukraine, 21000", "lat": 49.233083, "lng": 28.468217}
      , {"name": "Florence, Italy", "lat": 43.7687324, "lng": 11.2569013}
      , {"name": "Murmansk, Murmansk Oblast, Russia", "lat": 68.9930681, "lng": 33.1184479}
      , {"name": "Ulan-Ude, Republic of Buryatia, Russia", "lat": 51.8333333, "lng": 107.6}
      , {"name": "Wuppertal, Germany", "lat": 51.2611814, "lng": 7.162903399999999}
      , {"name": "Arkhangelsk, Arkhangelsk Oblast, Russia", "lat": 64.55, "lng": 40.5333333}
      , {"name": "Kurganskaya oblast, Russia", "lat": 55.4481548, "lng": 65.11809749999999}
      , {"name": "Toulouse, France", "lat": 43.604652, "lng": 1.444209}
      , {"name": "Lublin, Poland", "lat": 51.2464536, "lng": 22.5684463}
      , {"name": "Mogilev, Belarus", "lat": 53.9, "lng": 30.3333333}
      , {"name": "Kherson, Khersons'ka oblast, Ukraine, 73009", "lat": 46.635417, "lng": 32.616867}
      , {"name": "Palmas de Gran Canaria, Spain", "lat": 28.1248227, "lng": -15.4300065}
      , {"name": "Smolensk, Smolensk Oblast, Russia", "lat": 54.7833333, "lng": 32.05}
      , {"name": "Bilbao, Spain", "lat": 43.2569629, "lng": -2.9234409}
      , {"name": "Sevastopol', Sevastopol' city, Ukraine, 99000", "lat": 44.61665, "lng": 33.525367}
      , {"name": "Murcia, Spain", "lat": 37.98344489999999, "lng": -1.1298897}
      , {"name": "Fife, UK", "lat": 56.2082078, "lng": -3.1495175}
      , {"name": "Iaşi, Romania", "lat": 47.1569444, "lng": 27.5902778}
      , {"name": "Katowice, Poland", "lat": 50.26489189999999, "lng": 19.0237815}
      , {"name": "Nice, France", "lat": 43.696036, "lng": 7.265592}
      , {"name": "Stavropol, Stavropol Krai, Russia", "lat": 45.05, "lng": 41.9833333}
      , {"name": "Constanta, Romania", "lat": 44.1733333, "lng": 28.6383333}
      , {"name": "Oryol, Orlovskaya oblast, Russia", "lat": 52.9666667, "lng": 36.0666667}
      , {"name": "Catania, Italy", "lat": 37.5024825, "lng": 15.0878345}
      , {"name": "Vitebsk, Belarus", "lat": 55.19443589999999, "lng": 30.1953792}
      , {"name": "Kaluga, Kaluga Oblast, Russia", "lat": 54.5333333, "lng": 36.2666667}
      , {"name": "Belgorod, Belgorodskaya oblast, Russia", "lat": 50.6166667, "lng": 36.5833333}
      , {"name": "Zurich, Switzerland", "lat": 47.3686498, "lng": 8.539182499999999}
      , {"name": "Simferopol', Crimea, Ukraine, 95000", "lat": 44.952117, "lng": 34.102417}
      , {"name": "Bari", "lat": 41.1259135, "lng": 16.8721133}
      , {"name": "Vladimir, Vladimirskaya oblast, Russia", "lat": 56.1333333, "lng": 40.4166667}
      , {"name": "Sochi, Krasnodarskiy Kray, Russia", "lat": 43.4395848, "lng": 39.9277252}
      , {"name": "Cluj-Napoca, Romania", "lat": 46.777248, "lng": 23.5998899}
      , {"name": "Makhachkala, Republic of Dagestan, Russia", "lat": 42.9783677, "lng": 47.4910661}
      , {"name": "Galati, Romania", "lat": 45.42572000000001, "lng": 28.031044}
      , {"name": "Wirral, Merseyside, UK", "lat": 53.37797399999999, "lng": -3.108818}
      , {"name": "North Lanarkshire, UK", "lat": 55.8289139, "lng": -3.9221958}
      , {"name": "Timisoara, Romania", "lat": 45.755539, "lng": 21.237499}
      , {"name": "Cherepovets, Vologda Oblast, Russia", "lat": 59.1333333, "lng": 37.9166667}
      , {"name": "Ostrava, Czech Republic", "lat": 49.8412715, "lng": 18.2902483}
      , {"name": "Bielefeld, Germany", "lat": 52.02159630000001, "lng": 8.545686}
      , {"name": "Wakefield, West Yorkshire, UK", "lat": 53.683298, "lng": -1.505924}
      , {"name": "Valladolid, Spain", "lat": 41.6529434, "lng": -4.7283811}
      , {"name": "Saransk, Republic of Mordovia, Russia", "lat": 54.1833333, "lng": 45.1666667}
      , {"name": "Cardiff, UK", "lat": 51.48158100000001, "lng": -3.17909}
      , {"name": "Braşov, Romania", "lat": 45.655651, "lng": 25.6108}
      , {"name": "Craiova, Romania", "lat": 44.32476, "lng": 23.813471}
      , {"name": "Poltava, Poltavs'ka oblast, Ukraine, 36000", "lat": 49.58826699999999, "lng": 34.551417}
      , {"name": "Tambov, Tambov Oblast, Russia", "lat": 52.7166667, "lng": 41.4333333}
      , {"name": "Dudley, West Midlands, UK", "lat": 52.512255, "lng": -2.081112}
      , {"name": "Wigan, UK", "lat": 53.54544, "lng": -2.637474}
      , {"name": "Chita, Zabaykal'skiy Kray, Russia", "lat": 52.0515032, "lng": 113.4711906}
      , {"name": "Vladikavkaz, North Ossetia-Alania, Russia", "lat": 43.0474558, "lng": 44.6658064}
      , {"name": "East Riding of Yorkshire, UK", "lat": 53.8215889, "lng": -0.7189977}
      , {"name": "Cherkasy, Cherkas'ka oblast, Ukraine, 18000", "lat": 49.444433, "lng": 32.059767}
      , {"name": "Mannheim, Germany", "lat": 49.4609731, "lng": 8.4904166}
      , {"name": "Cordova, Spain", "lat": 37.88472670000001, "lng": -4.7791517}
      , {"name": "South Lanarkshire, UK", "lat": 55.5243038, "lng": -3.7035077}
      , {"name": "Chernihiv, Chernihivs'ka oblast, Ukraine, 14039", "lat": 51.4982, "lng": 31.28935}
      , {"name": "Coventry, West Midlands, UK", "lat": 52.406822, "lng": -1.519693}
      , {"name": "Horlivka, Donets'ka oblast, Ukraine, 84601", "lat": 48.3071, "lng": 38.029633}
      , {"name": "Palma, Spain", "lat": 39.5695059, "lng": 2.649966}
      , {"name": "Hrodna, Belarus", "lat": 53.6666667, "lng": 23.8333333}
      , {"name": "Bonn, Germany", "lat": 50.7116826, "lng": 7.1047327}
      , {"name": "Vologda, Vologda Oblast, Russia", "lat": 59.2166667, "lng": 39.9}
      , {"name": "Varna Municipality, Bulgaria", "lat": 43.21664519999999, "lng": 27.9118058}
      , {"name": "Venice, Italy", "lat": 45.4343363, "lng": 12.3387844}
      , {"name": "Zhytomyr, Zhytomyrs'ka oblast, Ukraine, 10000", "lat": 50.25465, "lng": 28.658667}
      , {"name": "Belfast, UK", "lat": 54.59744329999999, "lng": -5.9340683}
      , {"name": "Sumy, Sums'ka oblast, Ukraine, 40000", "lat": 50.9077, "lng": 34.7981}
      , {"name": "Leicester, UK", "lat": 52.6368778, "lng": -1.1397592}
      , {"name": "Komsomolsk-on-Amur, Khabarovsk Krai, Russia", "lat": 50.5666667, "lng": 137}
      , {"name": "Sunderland, Tyne and Wear, UK", "lat": 54.906869, "lng": -1.383801}
      , {"name": "Sandwell, Smethwick, West Midlands B66, UK", "lat": 52.504335, "lng": -1.972875}
      , {"name": "Doncaster, South Yorkshire, UK", "lat": 53.52282, "lng": -1.128462}
      , {"name": "Stockport, UK", "lat": 53.406754, "lng": -2.158843}
      , {"name": "Sefton, Merseyside L29, UK", "lat": 53.503445, "lng": -2.970359}
      , {"name": "Kostroma, Kostromskaya oblast, Russia", "lat": 57.76666669999999, "lng": 40.9333333}
      , {"name": "Vigo, Spain", "lat": 42.2313564, "lng": -8.7124471}
      , {"name": "Aarhus, Denmark", "lat": 56.162939, "lng": 10.203921}
      , {"name": "Brest, Belarus", "lat": 52.1333333, "lng": 23.6666667}
      , {"name": "Volzhsky, Volgogradskaya oblast, Russia", "lat": 48.7833333, "lng": 44.76666669999999}
      , {"name": "Taganrog, Rostovskaya oblast, Russia", "lat": 47.2333333, "lng": 38.9}
      , {"name": "Białystok, Poland", "lat": 53.13248859999999, "lng": 23.1688403}
      , {"name": "Nottingham, UK", "lat": 52.95477, "lng": -1.158086}
      , {"name": "Petrozavodsk, Republic of Karelia, Russia", "lat": 61.78333329999999, "lng": 34.35}
      , {"name": "Newcastle Upon Tyne, Tyne and Wear, UK", "lat": 54.978252, "lng": -1.61778}
      , {"name": "Gelsenkirchen, Germany", "lat": 51.517744, "lng": 7.085717199999999}
      , {"name": "Bratsk, Irkutsk Oblast, Russia", "lat": 56.1166667, "lng": 101.6}
      , {"name": "Dzerzhinsk, Nizhegorodskaya oblast, Russia", "lat": 56.2333333, "lng": 43.45}
      , {"name": "Karlsruhe, Germany", "lat": 49.009148, "lng": 8.3799444}
      , {"name": "Orsk, Orenburgskaya oblast, Russia", "lat": 51.2, "lng": 58.56666670000001}
      , {"name": "Oporto, Portugal", "lat": 41.149968, "lng": -8.6102426}
      , {"name": "Alicante, Spain", "lat": 38.34521, "lng": -0.4809944999999999}
      , {"name": "Dneprodzerzhinsk, Dnipropetrovs'ka oblast, Ukraine, 51900", "lat": 48.523117, "lng": 34.613683}
      , {"name": "Wiesbaden, Germany", "lat": 50.0630804, "lng": 8.2433437}
      , {"name": "Kirovohrad, Kirovohrads'ka oblast, Ukraine, 25000", "lat": 48.50793300000001, "lng": 32.262317}
      , {"name": "Hull, Kingston Upon Hull, UK", "lat": 53.7456709, "lng": -0.3367413}
      , {"name": "Novi Sad, Serbia", "lat": 45.25, "lng": 19.85}
      , {"name": "Bolton, UK", "lat": 53.584441, "lng": -2.428619}
      , {"name": "Angarsk, Irkutsk Oblast, Russia", "lat": 52.5802778, "lng": 103.9102778}
      , {"name": "Sterlitamak, Republic of Bashkortostan, Russia", "lat": 53.6333333, "lng": 55.95}
      , {"name": "Münster, Germany", "lat": 51.9514808, "lng": 7.625538799999999}
      , {"name": "Gijón, Spain", "lat": 43.5452608, "lng": -5.6619264}
      , {"name": "Ljubljana, Slovenia", "lat": 46.0514263, "lng": 14.5059655}
      , {"name": "Mönchengladbach, Germany", "lat": 51.1804572, "lng": 6.4428041}
      , {"name": "Chemnitz, Germany", "lat": 50.827845, "lng": 12.9213697}
      , {"name": "Messina, Italy", "lat": 38.1923323, "lng": 15.5555232}
      , {"name": "Walsall, West Midlands, UK", "lat": 52.586214, "lng": -1.982919}
      , {"name": "Chernovtsy, Chernivets'ka oblast, Ukraine, 58000", "lat": 48.291683, "lng": 25.935217}
      , {"name": "Khmelnitsky, Khmel'nyts'ka oblast, Ukraine, 29000", "lat": 49.422983, "lng": 26.987133}
      , {"name": "Malmö, Sweden", "lat": 55.604981, "lng": 13.003822}
      , {"name": "Częstochowa, Poland", "lat": 50.8173871, "lng": 19.1185308}
      , {"name": "Plymouth, UK", "lat": 50.3719165, "lng": -4.1360198}
      , {"name": "Hospitalet de Llobregat, Spain", "lat": 41.3595829, "lng": 2.0997037}
      , {"name": "Rotherham, South Yorkshire, UK", "lat": 53.4326035, "lng": -1.3635009}
      , {"name": "Augsburg, Germany", "lat": 48.37144070000001, "lng": 10.8982552}
      , {"name": "Stoke-on-Trent, UK", "lat": 53.002668, "lng": -2.179404}
      , {"name": "Halle, Germany", "lat": 51.47971, "lng": 11.96864}
      , {"name": "Verona Province of Verona, Italy", "lat": 45.4383395, "lng": 10.9917277}
      , {"name": "Gdynia, Poland", "lat": 54.5188898, "lng": 18.5305409}
      , {"name": "Strasbourg, France", "lat": 48.583148, "lng": 7.747882}
      , {"name": "Ploiesti, Romania", "lat": 44.94, "lng": 26.03}
      , {"name": "Niš, Serbia", "lat": 43.31938, "lng": 21.896328}
      , {"name": "Yoshkar-Ola, Mari El Republic, Russia", "lat": 56.6333333, "lng": 47.8666667}
      , {"name": "Braunschweig, Germany", "lat": 52.2688736, "lng": 10.5267696}
      , {"name": "Nantes, France", "lat": 47.218371, "lng": -1.553621}
      , {"name": "Wolverhampton, West Midlands, UK", "lat": 52.586973, "lng": -2.12882}
      , {"name": "Rivne, Rivnens'ka oblast, Ukraine, 33004", "lat": 50.6199, "lng": 26.251617}
      , {"name": "Tirana, Albania", "lat": 41.326, "lng": 19.816}
      , {"name": "Aachen, Germany", "lat": 50.7733179, "lng": 6.1021106}
      , {"name": "Sosnowiec, Poland", "lat": 50.28626380000001, "lng": 19.1040791}
      , {"name": "Granada, Spain", "lat": 37.17648740000001, "lng": -3.5979291}
      , {"name": "Kosice, Slovakia", "lat": 48.72099559999999, "lng": 21.2577477}
      , {"name": "Krefeld, Germany", "lat": 51.3387609, "lng": 6.5853417}
      , {"name": "Rybinsk, Yaroslavskaya oblast, Russia", "lat": 58.05, "lng": 38.8333333}
      , {"name": "Corunna, Spain", "lat": 43.3708731, "lng": -8.395835}
      , {"name": "Kremenchuk, Poltavs'ka oblast, Ukraine, 39600", "lat": 49.065783, "lng": 33.410033}
      , {"name": "Graz, Austria", "lat": 47.070714, "lng": 15.439504}
      , {"name": "Prokopyevsk, Kemerovo Oblast, Russia", "lat": 53.8833333, "lng": 86.71666669999999}
      , {"name": "Severodvinsk, Arkhangelsk Oblast, Russia", "lat": 64.5666667, "lng": 39.85}
      , {"name": "South Gloucestershire, UK", "lat": 51.531456, "lng": -2.4547158}
      , {"name": "Magdeburg, Germany", "lat": 52.130807, "lng": 11.628878}
      , {"name": "Ivano-Frankivs'k, Ivano-Frankivs'ka oblast, Ukraine, 76000", "lat": 48.922633, "lng": 24.711117}
      , {"name": "Kiel, Germany", "lat": 54.3232927, "lng": 10.1227652}
      , {"name": "Braila, Romania", "lat": 45.2691944, "lng": 27.9574722}
      , {"name": "Derby, UK", "lat": 52.9225301, "lng": -1.4746186}
      , {"name": "Utrecht, The Netherlands", "lat": 52.0901422, "lng": 5.109664899999999}
      , {"name": "Ternopil', Ternopil's'ka oblast, Ukraine, 46002", "lat": 49.553517, "lng": 25.594767}
      , {"name": "Radom, Poland", "lat": 51.40272359999999, "lng": 21.1471333}
      , {"name": "Ghent, Belgium", "lat": 51.053468, "lng": 3.73038}
      , {"name": "Swansea, UK", "lat": 51.62144, "lng": -3.943645999999999}
      , {"name": "Nalchik, Kabardino-Balkaria, Russia", "lat": 43.48412219999999, "lng": 43.6273607}
      , {"name": "Syktyvkar, Komi Republic, Russia", "lat": 61.67019670000001, "lng": 50.8379021}
      , {"name": "Salford, UK", "lat": 53.488465, "lng": -2.2982969}
      , {"name": "Bergen, Norway", "lat": 60.39126279999999, "lng": 5.3220544}
      , {"name": "Aberdeenshire, UK", "lat": 57.16214290000001, "lng": -2.7194167}
      , {"name": "Barnsley, South Yorkshire, UK", "lat": 53.55263, "lng": -1.479726}
      , {"name": "Biysk, Altai Krai, Russia", "lat": 52.5333333, "lng": 85.1666667}
      , {"name": "Nizhnekamsk, Republic of Tatarstan, Russia", "lat": 55.6333333, "lng": 51.8166667}
      , {"name": "Trieste, Italy", "lat": 45.6535567, "lng": 13.7784665}
      , {"name": "Oberhausen, Germany", "lat": 51.4964886, "lng": 6.8515156}
      , {"name": "Oradea, Romania", "lat": 47.0722222, "lng": 21.9211111}
      , {"name": "Shakhty, Rostovskaya oblast, Russia", "lat": 47.7, "lng": 40.2333333}
      , {"name": "Tameside, UK", "lat": 53.4805828, "lng": -2.0809891}
      , {"name": "Babrujsk, Belarus", "lat": 53.15, "lng": 29.2333333}
      , {"name": "Oldham, UK", "lat": 53.5445459, "lng": -2.118732}
      , {"name": "Blagoveshchensk, Amur Oblast, Russia", "lat": 50.2747222, "lng": 127.5338889}
      , {"name": "Trafford, UK", "lat": 53.4325608, "lng": -2.3395318}
      , {"name": "Aberdeen, UK", "lat": 57.149717, "lng": -2.094278}
      , {"name": "Luts'k, Volyns'ka oblast, Ukraine, 43000", "lat": 50.74723299999999, "lng": 25.325383}
      , {"name": "Vitoria-Gasteiz, Spain", "lat": 42.8467181, "lng": -2.6716351}
      , {"name": "Southampton, UK", "lat": 50.90970040000001, "lng": -1.4043509}
      , {"name": "Lübeck, Germany", "lat": 53.86588560000001, "lng": 10.6870959}
      , {"name": "Padua, Italy", "lat": 45.4095382, "lng": 11.8765537}
      , {"name": "Bila Tserkva, Kyivs'ka oblast, Ukraine, 09100", "lat": 49.801945, "lng": 30.115196}
      , {"name": "Taranto, Italy", "lat": 40.4692383, "lng": 17.2400088}
      , {"name": "Stary Oskol, Belgorodskaya oblast, Russia", "lat": 51.3, "lng": 37.85}
      , {"name": "Kielce, Poland", "lat": 50.8660773, "lng": 20.6285677}
      , {"name": "Gliwice, Poland", "lat": 50.29449229999999, "lng": 18.6713802}
      , {"name": "Badalona, Spain", "lat": 41.450137, "lng": 2.2474195}
      , {"name": "Bordeaux, France", "lat": 44.837789, "lng": -0.57918}
      , {"name": "Bacau, Romania", "lat": 46.571289, "lng": 26.925171}
      , {"name": "Highland, UK", "lat": 57.3596139, "lng": -5.0992763}
      , {"name": "Montpellier, France", "lat": 43.610769, "lng": 3.876716}
      , {"name": "Balakovo, Saratov Oblast, Russia", "lat": 52.01666669999999, "lng": 47.8}
      , {"name": "Rochdale, UK", "lat": 53.614086, "lng": -2.161814}
      , {"name": "Zelenograd, Moscow Oblast, Russia", "lat": 55.98333330000001, "lng": 37.1833333}
      , {"name": "Espoo, Finland", "lat": 60.20547910000001, "lng": 24.6558839}
      , {"name": "Charleroi, Belgium", "lat": 50.4108095, "lng": 4.444643}
      , {"name": "Toruń, Poland", "lat": 53.0137902, "lng": 18.5984437}
      , {"name": "Hagen, Germany", "lat": 51.3670777, "lng": 7.4632841}
      , {"name": "Bytom, Poland", "lat": 50.3483816, "lng": 18.9157175}
      , {"name": "Novorossiysk, Krasnodarskiy Kray, Russia", "lat": 44.7166667, "lng": 37.7666667}
      , {"name": "Debrecen, Hungary", "lat": 47.52997389999999, "lng": 21.6393571}
      , {"name": "Solihull, West Midlands, UK", "lat": 52.411811, "lng": -1.77761}
      , {"name": "Rostock, Germany", "lat": 54.0834186, "lng": 12.1004289}
      , {"name": "Linz, Austria", "lat": 48.30694, "lng": 14.28583}
      , {"name": "Santa Cruz de Tenerife, Spain", "lat": 28.46981, "lng": -16.2548558}
      , {"name": "Klaipėda, Lithuania", "lat": 55.71080260000001, "lng": 21.1318065}
      , {"name": "Freiburg im Breisgau, Germany", "lat": 47.9990077, "lng": 7.842104299999999}
      , {"name": "Pskov, Pskovskaya oblast, Russia", "lat": 57.8166667, "lng": 28.3333333}
      , {"name": "Erfurt, Germany", "lat": 50.98476789999999, "lng": 11.0298799}
      , {"name": "Gateshead, Tyne and Wear, UK", "lat": 54.95268, "lng": -1.603411}
      , {"name": "Eindhoven, The Netherlands", "lat": 51.44164199999999, "lng": 5.4697225}
      , {"name": "Split, Croatia", "lat": 43.5069502, "lng": 16.4423974}
      , {"name": "Zabrze, Poland", "lat": 50.3249278, "lng": 18.7857186}
      , {"name": "Saint-Étienne, France", "lat": 45.439695, "lng": 4.3871779}
      , {"name": "Oviedo, Spain", "lat": 43.3602994, "lng": -5.844781}
      , {"name": "Petropavlovsk-Kamchatsky, Kamchatka Krai, Russia", "lat": 53.038483, "lng": 158.6348045}
      , {"name": "Zlatoust, Chelyabinskaya oblast, Russia", "lat": 55.1858333, "lng": 59.67472219999999}
      , {"name": "Rennes, France", "lat": 48.113475, "lng": -1.675708}
      , {"name": "Milton Keynes, UK", "lat": 52.038601, "lng": -0.757072}
      , {"name": "Yakutsk, Sakha Republic, Russia", "lat": 62.0380757, "lng": 129.7293766}
      , {"name": "Kassel, Germany", "lat": 51.3127114, "lng": 9.4797461}
      , {"name": "Móstoles, Spain", "lat": 40.3227707, "lng": -3.8657409}
      , {"name": "Banja Luka, Bosnia and Herzegovina", "lat": 44.76666669999999, "lng": 17.1833333}
      , {"name": "Le Havre, France", "lat": 49.49437, "lng": 0.107929}
      , {"name": "Liège, Belgium", "lat": 50.6325574, "lng": 5.5796662}
      , {"name": "Burgas, Bulgaria", "lat": 42.4976779, "lng": 27.4700254}
      , {"name": "Podolsk, Moscow Oblast, Russia", "lat": 55.4166667, "lng": 37.55}
      , {"name": "North Tyneside, UK", "lat": 55.0182399, "lng": -1.4858436}
      , {"name": "Calderdale, UK", "lat": 53.7420418, "lng": -1.995269}
      , {"name": "Northampton, UK", "lat": 52.240477, "lng": -0.9026560000000001}
      , {"name": "Tampere, Finland", "lat": 61.49816000000001, "lng": 23.7610554}
      , {"name": "Tilburg, The Netherlands", "lat": 51.5862949, "lng": 5.079127199999999}
      , {"name": "Elche, Spain", "lat": 38.2671765, "lng": -0.6952195999999999}
      , {"name": "Portsmouth, UK", "lat": 50.8166667, "lng": -1.0833333}
      , {"name": "Kamensk-Uralsky, Sverdlovskaya oblast, Russia", "lat": 56.4279593, "lng": 61.9081798}
      , {"name": "Brescia, Italy", "lat": 45.53983820000001, "lng": 10.2229562}
      , {"name": "Engel's, Saratov Oblast, Russia", "lat": 51.4753297, "lng": 46.1136773}
      , {"name": "Warrington WA1, UK", "lat": 53.395794, "lng": -2.571767}
      , {"name": "Uppsala, Sweden", "lat": 59.85856380000001, "lng": 17.6389267}
      , {"name": "Kramators'k, Donets'ka oblast, Ukraine, 84314", "lat": 48.738967, "lng": 37.58435}
      , {"name": "Piteşti, Romania", "lat": 44.8605556, "lng": 24.8677778}
      , {"name": "Syzran, Samarskaya oblast, Russia", "lat": 53.1666667, "lng": 48.4666667}
      , {"name": "Sabadell, Spain", "lat": 41.5486198, "lng": 2.1074206}
      , {"name": "North Somerset, UK", "lat": 51.4409659, "lng": -2.7426528}
      , {"name": "Arad, Romania", "lat": 46.1666667, "lng": 21.3166667}
      , {"name": "Novocherkassk, Rostovskaya oblast, Russia", "lat": 47.4358333, "lng": 40.0986111}
      , {"name": "Saarbrücken, Germany", "lat": 49.24015720000001, "lng": 6.996932699999999}
      , {"name": "Odense, Denmark", "lat": 55.40375599999999, "lng": 10.40237}
      , {"name": "Mainz, Germany", "lat": 49.9928617, "lng": 8.2472526}
      , {"name": "Berezniki, Perm Krai, Russia", "lat": 59.3949571, "lng": 56.81215539999999}
      , {"name": "Santander, Spain", "lat": 43.4609602, "lng": -3.8079336}
      , {"name": "Piraeus, Greece", "lat": 37.950902, "lng": 23.641103}
      , {"name": "Jerez de la Frontera, Spain", "lat": 36.6865618, "lng": -6.1371725}
      , {"name": "Bury, UK", "lat": 53.595024, "lng": -2.297151}
      , {"name": "Hamm, Germany", "lat": 51.6738583, "lng": 7.815981600000001}
      , {"name": "Luton, UK", "lat": 51.8786707, "lng": -0.4200255}
      , {"name": "Kragujevac, Serbia", "lat": 44.012711, "lng": 20.926741}
      , {"name": "Rheims, France", "lat": 49.258329, "lng": 4.031696}
      , {"name": "Bielsko-Biała, Poland", "lat": 49.8223768, "lng": 19.0583845}
      , {"name": "Reggio Calabria RC, Italy", "lat": 38.11462900000001, "lng": 15.6502035}
      , {"name": "Volgodonsk, Rostovskaya oblast, Russia", "lat": 47.51666669999999, "lng": 42.15}
      , {"name": "St Helens, Merseyside, UK", "lat": 53.456307, "lng": -2.737095}
      , {"name": "Stockton on Tees, Stockton-on-Tees, UK", "lat": 54.574987, "lng": -1.328791}
      , {"name": "Renfrewshire, UK", "lat": 55.8298581, "lng": -4.5428385}
      , {"name": "San Sebastián, Spain", "lat": 43.3208116, "lng": -1.9844474}
      , {"name": "Yuzhno-Sakhalinsk, Sakhalinskaya oblast, Russia", "lat": 46.9666667, "lng": 142.7333333}
      , {"name": "Herne, Germany", "lat": 51.5368948, "lng": 7.200914699999999}
      , {"name": "Vantaa, Finland", "lat": 60.28548900000001, "lng": 24.82192}
      , {"name": "York, UK", "lat": 53.9622908, "lng": -1.0818995}
      , {"name": "Modena, Italy", "lat": 44.647115, "lng": 10.9251857}
      , {"name": "Thamesdown Dr, Swindon, UK", "lat": 51.59950389999999, "lng": -1.8049843}
      , {"name": "Leganés, Spain", "lat": 40.326422, "lng": -3.7589882}
      , {"name": "Mülheim, Germany", "lat": 51.4309558, "lng": 6.8807461}
      , {"name": "Cagliari, Italy", "lat": 39.2154086, "lng": 9.1093239}
      , {"name": "Miskolc, Hungary", "lat": 48.1043854, "lng": 20.7913563}
      , {"name": "Geneva, Switzerland", "lat": 46.1983922, "lng": 6.142296099999999}
      , {"name": "Southend-on-Sea, UK", "lat": 51.5459269, "lng": 0.7077123}
      , {"name": "Groningen, The Netherlands", "lat": 53.2193835, "lng": 6.566501799999999}
      , {"name": "Lille, France", "lat": 50.62925, "lng": 3.057256}
      , {"name": "Turku, Finland", "lat": 60.449249, "lng": 22.259239}
      , {"name": "Olsztyn, Poland", "lat": 53.778422, "lng": 20.4801193}
      , {"name": "Almería, Spain", "lat": 36.8401638, "lng": -2.4679217}
      , {"name": "Cartagena, Spain", "lat": 37.6056505, "lng": -0.9912943999999999}
      , {"name": "Melitopol', Zaporiz'ka oblast, Ukraine, 72300", "lat": 46.8333333, "lng": 35.3666667}
      , {"name": "Basle, Switzerland", "lat": 47.557421, "lng": 7.592572699999999}
      , {"name": "Sibiu, Romania", "lat": 45.787441, "lng": 24.143259}
      , {"name": "Caerphilly, UK", "lat": 51.578829, "lng": -3.218134}
      , {"name": "Carmarthenshire, UK", "lat": 51.8598535, "lng": -4.260853099999999}
      , {"name": "Prato, Italy", "lat": 43.8796784, "lng": 11.0962839}
      , {"name": "Plzeň, Czech Republic", "lat": 49.7474848, "lng": 13.3776036}
      , {"name": "Abakan, Republic of Khakassia, Russia", "lat": 53.7166667, "lng": 91.4166667}
      , {"name": "Rijeka, Croatia", "lat": 45.3284797, "lng": 14.4364051}
      , {"name": "Toulon, France", "lat": 43.124228, "lng": 5.928}
      , {"name": "Parma, Italy", "lat": 44.8078657, "lng": 10.3295478}
      , {"name": "Baranavičy, Belarus", "lat": 53.1333333, "lng": 26.0166667}
      , {"name": "Kerch, Crimea, Ukraine, 98300", "lat": 45.357314, "lng": 36.468293}
      , {"name": "Ruse, Bulgaria", "lat": 43.8495786, "lng": 25.9552292}
      , {"name": "Maykop, Republic of Adygea, Russia", "lat": 44.6, "lng": 40.0833333}
      , {"name": "Miass, Chelyabinskaya oblast, Russia", "lat": 55, "lng": 60.09999999999999}
      , {"name": "Solingen, Germany", "lat": 51.1704145, "lng": 7.0542575}
      , {"name": "Târgu Mureş, Romania", "lat": 46.5455556, "lng": 24.5625}
      , {"name": "Bath and North East Somerset, UK", "lat": 51.36362930000001, "lng": -2.4399987}
      , {"name": "Osnabrück, Germany", "lat": 52.2799112, "lng": 8.0471788}
      , {"name": "Leghorn, Italy", "lat": 43.551876, "lng": 10.3080108}
      , {"name": "Lyubertsy, Moscow Oblast, Russia", "lat": 55.6666667, "lng": 37.9166667}
      , {"name": "Wycombe, Swanley, Greater London BR8, UK", "lat": 51.40132149999999, "lng": 0.1477863}
      , {"name": "Terrassa, Spain", "lat": 41.560953, "lng": 2.0104398}
      , {"name": "Armavir, Krasnodarskiy Kray, Russia", "lat": 45, "lng": 41.1166667}
      , {"name": "Ludwigshafen, Germany", "lat": 49.4908113, "lng": 8.4147976}
      , {"name": "Fuenlabrada, Spain", "lat": 40.28387300000001, "lng": -3.8003288}
      , {"name": "Alcala de Henares, Spain", "lat": 40.481663, "lng": -3.3641362}
      , {"name": "Basildon, Essex, UK", "lat": 51.57608399999999, "lng": 0.488736}
      , {"name": "Rubtsovsk, Altai Krai, Russia", "lat": 51.51666669999999, "lng": 81.2}
      , {"name": "Pamplona, Spain", "lat": 42.8179879, "lng": -1.6441835}
      , {"name": "Burgos, Spain", "lat": 42.3408923, "lng": -3.6997623}
      , {"name": "Leskovac, Serbia", "lat": 43, "lng": 21.95}
      , {"name": "Rzeszów, Poland", "lat": 50.04094689999999, "lng": 21.9992806}
      , {"name": "Aalborg, Denmark", "lat": 57.028811, "lng": 9.917771}
      , {"name": "Kovrov, Vladimirskaya oblast, Russia", "lat": 56.34999999999999, "lng": 41.3166667}
      , {"name": "Leverkusen, Germany", "lat": 51.04592479999999, "lng": 7.0192196}
      , {"name": "Bournemouth, UK", "lat": 50.719164, "lng": -1.880769}
      , {"name": "Breda, The Netherlands", "lat": 51.58307, "lng": 4.7769505}
      , {"name": "Peterborough, UK", "lat": 52.56949849999999, "lng": -0.2405299}
      , {"name": "Szeged, Hungary", "lat": 46.2536169, "lng": 20.1461345}
      , {"name": "Nakhodka, Primorsky Krai, Russia", "lat": 42.8166667, "lng": 132.8666667}
      , {"name": "North East Lincolnshire, UK", "lat": 53.5418558, "lng": -0.1263736}
      , {"name": "Ruda Śląska, Poland", "lat": 50.2558286, "lng": 18.8555704}
      , {"name": "Salamanca, Spain", "lat": 40.9649681, "lng": -5.6630253}
      , {"name": "Pécs, Hungary", "lat": 46.0713242, "lng": 18.2331772}
      , {"name": "Salavat, Republic of Bashkortostan, Russia", "lat": 53.3666667, "lng": 55.93333329999999}
      , {"name": "Ussuriysk, Primorsky Krai, Russia", "lat": 43.8, "lng": 131.95}
      , {"name": "Mytishchi, Moscow Oblast, Russia", "lat": 55.9166667, "lng": 37.7333333}
      , {"name": "Chelmsford, Essex, UK", "lat": 51.734964, "lng": 0.4761969999999999}
      , {"name": "Foggia, Italy", "lat": 41.4622919, "lng": 15.5447458}
      , {"name": "Brighton, Brighton and Hove, UK", "lat": 50.842941, "lng": -0.131312}
      , {"name": "South Tyneside, UK", "lat": 54.9636693, "lng": -1.4418634}
      , {"name": "Aylesbury, Buckinghamshire, UK", "lat": 51.815606, "lng": -0.8084}
      , {"name": "Colchester, Essex, UK", "lat": 51.895927, "lng": 0.8918740000000001}
      , {"name": "Oldenburg, Germany", "lat": 53.14773899999999, "lng": 8.2106028}
      , {"name": "Knowsley, Merseyside, UK", "lat": 53.454594, "lng": -2.852907}
      , {"name": "Patras, Greece", "lat": 38.254465, "lng": 21.7370665}
      , {"name": "Apeldoorn, The Netherlands", "lat": 52.21115700000001, "lng": 5.9699231}
      , {"name": "North Lincolnshire, UK", "lat": 53.60555919999999, "lng": -0.5596582}
      , {"name": "Macclesfield, Cheshire East, UK", "lat": 53.258663, "lng": -2.119287}
      , {"name": "Blackpool, UK", "lat": 53.8212725, "lng": -3.0554531}
      , {"name": "Perugia, Italy", "lat": 43.1107009, "lng": 12.389172}
      , {"name": "Nijmegen, The Netherlands", "lat": 51.842867, "lng": 5.854622}
      , {"name": "Balti, Moldova", "lat": 47.75494, "lng": 27.913}
      , {"name": "Kolomna, Moscow Oblast, Russia", "lat": 55.0833333, "lng": 38.7833333}
      , {"name": "Grenoble, France", "lat": 45.188529, "lng": 5.724524}
      , {"name": "West Lothian, UK", "lat": 55.9070198, "lng": -3.5517167}
      , {"name": "Barysaŭ, Belarus", "lat": 54.2333333, "lng": 28.5}
      , {"name": "Somerset, UK", "lat": 51.0587013, "lng": -2.9499066}
      , {"name": "Dundee, UK", "lat": 56.462018, "lng": -2.970721}
      , {"name": "Nikopol', Dnipropetrovs'ka oblast, Ukraine, 53200", "lat": 47.56746, "lng": 34.394815}
      , {"name": "Neuss, Germany", "lat": 51.2041968, "lng": 6.6879511}
      , {"name": "Baia Mare, Romania", "lat": 47.6666667, "lng": 23.5833333}
      , {"name": "Enschede, The Netherlands", "lat": 52.2215372, "lng": 6.8936619}
      , {"name": "Norilsk, Krasnoyarsk Krai, Russia", "lat": 69.33333329999999, "lng": 88.21666669999999}]
  }

}
