import { IPageData } from "../interfaces/page-data.interface";
import { AppVersion } from "./version";

export class PageDataDefault {
  public static buildPageData(data?: any): IPageData {
    return {
      data,
      version: AppVersion.getVersion(),
    };
  }
}
