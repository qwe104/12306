import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DataStreamService } from "./dataStream.service";
import { DataStreamControllerBase } from "./base/dataStream.controller.base";

@swagger.ApiTags("dataStreams")
@common.Controller("dataStreams")
export class DataStreamController extends DataStreamControllerBase {
  constructor(
    protected readonly service: DataStreamService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
