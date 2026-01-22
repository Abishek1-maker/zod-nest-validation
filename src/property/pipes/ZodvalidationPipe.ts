import { BadRequestException, PipeTransform } from '@nestjs/common';
import { treeifyError, z } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private readonly schema: z.ZodType) {}
  transform(value: unknown) {
    const result = this.schema.safeParse(value);
    if (result.success) return result.data;
    throw new BadRequestException(treeifyError(result.error));
  }
}
