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
import { RuleEngineWhereInput } from "./RuleEngineWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class RuleEngineCountArgs {
  @ApiProperty({
    required: false,
    type: () => RuleEngineWhereInput,
  })
  @Field(() => RuleEngineWhereInput, { nullable: true })
  @Type(() => RuleEngineWhereInput)
  where?: RuleEngineWhereInput;
}

export { RuleEngineCountArgs as RuleEngineCountArgs };
