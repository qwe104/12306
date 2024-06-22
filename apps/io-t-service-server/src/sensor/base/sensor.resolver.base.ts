/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Sensor } from "./Sensor";
import { SensorCountArgs } from "./SensorCountArgs";
import { SensorFindManyArgs } from "./SensorFindManyArgs";
import { SensorFindUniqueArgs } from "./SensorFindUniqueArgs";
import { CreateSensorArgs } from "./CreateSensorArgs";
import { UpdateSensorArgs } from "./UpdateSensorArgs";
import { DeleteSensorArgs } from "./DeleteSensorArgs";
import { DataStreamFindManyArgs } from "../../dataStream/base/DataStreamFindManyArgs";
import { DataStream } from "../../dataStream/base/DataStream";
import { Device } from "../../device/base/Device";
import { SensorService } from "../sensor.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Sensor)
export class SensorResolverBase {
  constructor(
    protected readonly service: SensorService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Sensor",
    action: "read",
    possession: "any",
  })
  async _sensorsMeta(
    @graphql.Args() args: SensorCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Sensor])
  @nestAccessControl.UseRoles({
    resource: "Sensor",
    action: "read",
    possession: "any",
  })
  async sensors(@graphql.Args() args: SensorFindManyArgs): Promise<Sensor[]> {
    return this.service.sensors(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Sensor, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Sensor",
    action: "read",
    possession: "own",
  })
  async sensor(
    @graphql.Args() args: SensorFindUniqueArgs
  ): Promise<Sensor | null> {
    const result = await this.service.sensor(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Sensor)
  @nestAccessControl.UseRoles({
    resource: "Sensor",
    action: "create",
    possession: "any",
  })
  async createSensor(@graphql.Args() args: CreateSensorArgs): Promise<Sensor> {
    return await this.service.createSensor({
      ...args,
      data: {
        ...args.data,

        device: args.data.device
          ? {
              connect: args.data.device,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Sensor)
  @nestAccessControl.UseRoles({
    resource: "Sensor",
    action: "update",
    possession: "any",
  })
  async updateSensor(
    @graphql.Args() args: UpdateSensorArgs
  ): Promise<Sensor | null> {
    try {
      return await this.service.updateSensor({
        ...args,
        data: {
          ...args.data,

          device: args.data.device
            ? {
                connect: args.data.device,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Sensor)
  @nestAccessControl.UseRoles({
    resource: "Sensor",
    action: "delete",
    possession: "any",
  })
  async deleteSensor(
    @graphql.Args() args: DeleteSensorArgs
  ): Promise<Sensor | null> {
    try {
      return await this.service.deleteSensor(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [DataStream], { name: "dataStreams" })
  @nestAccessControl.UseRoles({
    resource: "DataStream",
    action: "read",
    possession: "any",
  })
  async findDataStreams(
    @graphql.Parent() parent: Sensor,
    @graphql.Args() args: DataStreamFindManyArgs
  ): Promise<DataStream[]> {
    const results = await this.service.findDataStreams(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Device, {
    nullable: true,
    name: "device",
  })
  @nestAccessControl.UseRoles({
    resource: "Device",
    action: "read",
    possession: "any",
  })
  async getDevice(@graphql.Parent() parent: Sensor): Promise<Device | null> {
    const result = await this.service.getDevice(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Query(() => [Sensor])
  async GetSensorData(
    @graphql.Args()
    args: string
  ): Promise<Sensor[]> {
    return this.service.GetSensorData(args);
  }
}