/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Sensor as PrismaSensor,
  DataStream as PrismaDataStream,
  Device as PrismaDevice,
} from "@prisma/client";

import { Sensor } from "./Sensor";

export class SensorServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.SensorCountArgs, "select">): Promise<number> {
    return this.prisma.sensor.count(args);
  }

  async sensors(args: Prisma.SensorFindManyArgs): Promise<PrismaSensor[]> {
    return this.prisma.sensor.findMany(args);
  }
  async sensor(
    args: Prisma.SensorFindUniqueArgs
  ): Promise<PrismaSensor | null> {
    return this.prisma.sensor.findUnique(args);
  }
  async createSensor(args: Prisma.SensorCreateArgs): Promise<PrismaSensor> {
    return this.prisma.sensor.create(args);
  }
  async updateSensor(args: Prisma.SensorUpdateArgs): Promise<PrismaSensor> {
    return this.prisma.sensor.update(args);
  }
  async deleteSensor(args: Prisma.SensorDeleteArgs): Promise<PrismaSensor> {
    return this.prisma.sensor.delete(args);
  }

  async findDataStreams(
    parentId: string,
    args: Prisma.DataStreamFindManyArgs
  ): Promise<PrismaDataStream[]> {
    return this.prisma.sensor
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .dataStreams(args);
  }

  async getDevice(parentId: string): Promise<PrismaDevice | null> {
    return this.prisma.sensor
      .findUnique({
        where: { id: parentId },
      })
      .device();
  }
  async GetSensorData(args: string): Promise<Sensor[]> {
    throw new Error("Not implemented");
  }
}