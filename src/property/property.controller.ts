import {
  Body,
  Controller,
  Get,
  Head,
  Header,
  Headers,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ZodValidationPipe } from './pipes/ZodvalidationPipe';
import {
  IdParamSchema,
  PropertySchema,
  SortQuerySchema,
} from './dto/createpropetyzod';
import type { propertyzodDto } from './dto/createpropetyzod';

@Controller('property')
export class PropertyController {
  @Get()
  findall() {
    return 'Welcome';
  }
  @Get(':id')
  Read(
    @Param(new ZodValidationPipe(IdParamSchema)) Param: { id: number },
    @Query(new ZodValidationPipe(SortQuerySchema)) Query: { sort: boolean },
  ) {
    const { id } = Param;
    const { sort } = Query;
    return { id, sort };
  }
  @Post()
  create(
    @Body(new ZodValidationPipe(PropertySchema)) data: propertyzodDto,
    @Headers() head,
  ) {
    return { head };
  }

  @Patch(':id')
  update(
    // @Param(new ZodValidationPipe(IdParamSchema)) Param: { id: number },
    // @Body(new ZodValidationPipe(PropertySchema)) data: propertyzodDto,
    @Headers() head: { host; accept; connection },
  ) {
    // const { id } = Param;
    const { host } = head;
    const { accept } = head;
    const { connection } = head;
    return { host, accept, connection };
  }
}
