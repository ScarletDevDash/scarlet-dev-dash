import { Controller, Get, Render } from "@nestjs/common";
import { AppService } from "./app.service";
import { PageDataDefault } from "./shared/lib/page-data.default";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @Render("index")
  root() {
    return this.appService.getPageData();
  }

  @Get("login")
  @Render("pages/auth/login")
  register() {
    return this.appService.getPageData();
  }

  @Get("setup/first-time")
  @Render("pages/auth/first-time")
  firstTime() {
    return this.appService.getPageData();
  }
}
