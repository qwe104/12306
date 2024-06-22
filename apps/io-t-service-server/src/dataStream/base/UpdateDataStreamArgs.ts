/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { DataStreamWhereUniqueInput } from "./DataStreamWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { DataStreamUpdateInput } from "./DataStreamUpdateInput";

@ArgsType()
class UpdateDataStreamArgs {
  @ApiProperty({
    required: true,
    type: () => DataStreamWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => DataStreamWhereUniqueInput)
  @Field(() => DataStreamWhereUniqueInput, { nullable: false })
  where!: DataStreamWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => DataStreamUpdateInput,
  })
  @ValidateNested()
  @Type(() => DataStreamUpdateInput)
  @Field(() => DataStreamUpdateInput, { nullable: false })
  data!: DataStreamUpdateInput;
}

export { UpdateDataStreamArgs as UpdateDataStreamArgs };
