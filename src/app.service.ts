import { Injectable } from "@nestjs/common";
import { IPageData } from "./shared/interfaces/page-data.interface";
import { PageDataDefault } from "./shared/lib/page-data.default";

@Injectable()
export class AppService {
  /**
   * This should be used to return data to the UI.
   * @param data Any data we want to return to the front end.
   */
  getPageData(data?: any): { pageData: IPageData } {
    return {
      pageData: PageDataDefault.buildPageData(data),
    };
  }
}
