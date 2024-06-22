import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SensorModuleBase } from "./base/sensor.module.base";
import { SensorService } from "./sensor.service";
import { SensorController } from "./sensor.controller";
import { SensorResolver } from "./sensor.resolver";

@Module({
  imports: [SensorModuleBase, forwardRef(() => AuthModule)],
  controllers: [SensorController],
  providers: [SensorService, SensorResolver],
  exports: [SensorService],
})
export class SensorModule {}
