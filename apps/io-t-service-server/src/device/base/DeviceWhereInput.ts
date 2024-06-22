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
import { StringFilter } from "../../util/StringFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested, IsEnum } from "class-validator";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RuleEngineListRelationFilter } from "../../ruleEngine/base/RuleEngineListRelationFilter";
import { SensorListRelationFilter } from "../../sensor/base/SensorListRelationFilter";
import { EnumDeviceStatus } from "./EnumDeviceStatus";

@InputType()
class DeviceWhereInput {
  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  name?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => RuleEngineListRelationFilter,
  })
  @ValidateNested()
  @Type(() => RuleEngineListRelationFilter)
  @IsOptional()
  @Field(() => RuleEngineListRelationFilter, {
    nullable: true,
  })
  ruleEngines?: RuleEngineListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SensorListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SensorListRelationFilter)
  @IsOptional()
  @Field(() => SensorListRelationFilter, {
    nullable: true,
  })
  sensors?: SensorListRelationFilter;

  @ApiProperty({
    required: false,
    enum: EnumDeviceStatus,
  })
  @IsEnum(EnumDeviceStatus)
  @IsOptional()
  @Field(() => EnumDeviceStatus, {
    nullable: true,
  })
  status?: "Option1";

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  typeField?: StringNullableFilter;
}

export { DeviceWhereInput as DeviceWhereInput };
