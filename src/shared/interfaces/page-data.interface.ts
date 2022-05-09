/**
 * Defines the properties that will be returned on every page load from the server.
 */
export interface IPageData {
  /**
   * Any response that we are sending to the page depending on which page it is.
   */
  data: any;

  /**
   * All pages should receive a version number.
   */
  version: string;
}
