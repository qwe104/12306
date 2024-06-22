import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DataStreamModuleBase } from "./base/dataStream.module.base";
import { DataStreamService } from "./dataStream.service";
import { DataStreamController } from "./dataStream.controller";
import { DataStreamResolver } from "./dataStream.resolver";

@Module({
  imports: [DataStreamModuleBase, forwardRef(() => AuthModule)],
  controllers: [DataStreamController],
  providers: [DataStreamService, DataStreamResolver],
  exports: [DataStreamService],
})
export class DataStreamModule {}
