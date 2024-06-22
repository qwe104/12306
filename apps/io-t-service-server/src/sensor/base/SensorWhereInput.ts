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
import { DataStreamListRelationFilter } from "../../dataStream/base/DataStreamListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DeviceWhereUniqueInput } from "../../device/base/DeviceWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

@InputType()
class SensorWhereInput {
  @ApiProperty({
    required: false,
    type: () => DataStreamListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DataStreamListRelationFilter)
  @IsOptional()
  @Field(() => DataStreamListRelationFilter, {
    nullable: true,
  })
  dataStreams?: DataStreamListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  description?: StringNullableFilter;

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
  device?: DeviceWhereUniqueInput;

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
  model?: StringNullableFilter;
}

export { SensorWhereInput as SensorWhereInput };
