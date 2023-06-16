export interface IBaseDTO {

  id: number | undefined;

  isDeleted: boolean | undefined;

  creationDate: Date | undefined;

  creationUserId: number | undefined;

  changedDate: Date | undefined;

  changedUserId: number | undefined;

}



export class BaseDTO implements IBaseDTO {



  id: number | undefined;

  isDeleted: boolean | undefined;

  creationDate: Date | undefined;

  creationUserId: number | undefined;

  changedDate: Date | undefined;

  changedUserId: number | undefined;



  constructor(_data?: IBaseDTO) {
    this.isDeleted = false;
    if (_data != null) {

      for (let property in _data) {

        if (_data.hasOwnProperty(property)) {

          (<any>this)[property] = (<any>_data)[property];
        }
      }
    }
  }
  init(_data?: any): void {

    if (_data != null) {
      this.id = _data["id"];
      this.isDeleted = _data["isDeleted"];
      this.creationDate = _data["creationDate"];
      this.creationUserId = _data["creationUserId"];
      this.changedDate = _data["changedDate"];
      this.changedUserId = _data["changedUserId"];
    }

  }



  static fromJS(_data: any): BaseDTO {
    _data = typeof _data === 'object' ? _data : {};
    let result = new BaseDTO();
    result.init(_data);
    return result;
  }



  toJSON(_data?: any): any {
    _data = typeof _data === 'object' ? _data : {};
    _data["id"] = this.id;
    _data["isDeleted"] = this.isDeleted;
    _data["creationDate"] = this.creationDate;
    _data["creationUserId"] = this.creationUserId;
    _data["changedDate"] = this.changedDate;
    _data["changedUserId"] = this.changedUserId;

    return _data;
  }



  clone(): BaseDTO {
    let json = this.toJSON();
    let result = new BaseDTO();
    result.init(json);
    return result;
  }

}
