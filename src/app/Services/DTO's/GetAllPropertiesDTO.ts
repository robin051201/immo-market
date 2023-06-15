export interface IProperty {
  bathrooms: number | undefined;
  bedrooms: number | undefined;
  city: string | undefined;
  country: string | undefined;
  description: string | undefined;
  discountPrice: number | undefined;
  garageRooms: number | undefined;
  hasCellar: boolean | undefined;
  hasDiscount: boolean | undefined;
  id: number | undefined;
  immoId: number | undefined;
  immoName: string | undefined;
  isActive: boolean | undefined;
  livingSpaceSize: number | undefined;
  locationId:number | undefined;
  mainTitle: string | undefined;
  objectDetailsId: number | undefined;
  objectTypeId: number | undefined;
  objectTypeName: string | undefined;
  plotSize: number | undefined;
  priceId: number | undefined;
  priceOnContact: boolean | undefined;
  rooms: number | undefined;
  sellPrice: number | undefined;
  state: string | undefined;
  street: string | undefined;
  subTitle: string | undefined;
}

export class Property implements IProperty{
  bathrooms: number | undefined;
  bedrooms: number | undefined;
  city: string | undefined;
  country: string | undefined;
  description: string | undefined;
  discountPrice: number | undefined;
  garageRooms: number | undefined;
  hasCellar: boolean | undefined;
  hasDiscount: boolean | undefined;
  id: number | undefined;
  immoId: number | undefined;
  immoName: string | undefined;
  isActive: boolean | undefined;
  livingSpaceSize: number | undefined;
  locationId:number | undefined;
  mainTitle: string | undefined;
  objectDetailsId: number | undefined;
  objectTypeId: number | undefined;
  objectTypeName: string | undefined;
  plotSize: number | undefined;
  priceId: number | undefined;
  priceOnContact: boolean | undefined;
  rooms: number | undefined;
  sellPrice: number | undefined;
  state: string | undefined;
  street: string | undefined;
  subTitle: string | undefined;

  constructor(_data? : IProperty ) {
    if(_data != null) {
      for (let prop in _data){
        if(_data.hasOwnProperty(prop)){
          // (<any>this)[prop] = (<any>_data[prop]);
        }
      }
    }
  }
}
