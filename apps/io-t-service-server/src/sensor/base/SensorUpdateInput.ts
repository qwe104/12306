/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DataStreamUpdateManyWithoutSensorsInput } from "./DataStreamUpdateManyWithoutSensorsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { DeviceWhereUniqueInput } from "../../device/base/DeviceWhereUniqueInput";

@InputType()
class SensorUpdateInput {
  @ApiProperty({
    required: false,
    type: () => DataStreamUpdateManyWithoutSensorsInput,
  })
  @ValidateNested()
  @Type(() => DataStreamUpdateManyWithoutSensorsInput)
  @IsOptional()
  @Field(() => DataStreamUpdateManyWithoutSensorsInput, {
    nullable: true,
  })
  dataStreams?: DataStreamUpdateManyWithoutSensorsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => DeviceWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DeviceWhereUniqueInput)
  @IsOptional()
  @Field(() => DeviceWhereUniqueInput, {
    nullable: true,
  })
  device?: DeviceWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  model?: string | null;
}

export { SensorUpdateInput as SensorUpdateInput };