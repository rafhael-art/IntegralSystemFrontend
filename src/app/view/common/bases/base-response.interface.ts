export interface BaseResponse<T> {
  isSucces: boolean;
  data: T | null;
  message: string | null;
  errors: BaseError[] | null;
}

interface BaseError {
  propertyName: string | null;
  errorMessage: string | null;
}
