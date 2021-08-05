interface IMeta {
  message: string;
  status_code: number;
  last_id?: number;
}

export default new class BaseResponse {
  meta!: IMeta;
  data?: any;
  errors?: any;
  debug?: any;

  constructor() {
    this.meta = {
      message: "",
      status_code: 200
    };

    this.data = null;
    this.debug = null;
    this.errors = null;
  }
}
