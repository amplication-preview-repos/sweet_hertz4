import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
class CarparkFilterDto {
    @Field(() => Boolean, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => Boolean
    })
    @Type(() => Boolean)
    freeParking?: boolean;

    @Field(() => Boolean, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => Boolean
    })
    @Type(() => Boolean)
    nightParking?: boolean;

    @Field(() => Number, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => Number
    })
    @Type(() => Number)
    maxHeight?: number;
}

export { CarparkFilterDto as CarparkFilterDto };