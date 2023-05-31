import { Controller, Post, Body, Inject } from '@nestjs/common';
import { MailService } from '../services/mail.service';
import {
  ApiBadRequestResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('mail')
@Controller('mail')
export class MailController {
  constructor(@Inject(MailService) private mailService: MailService) {}

  @ApiOperation({ summary: 'Crear mail' })
  @ApiResponse({
    status: 201,
    description: 'El mail fue creado exitosamente.',
  })
  @ApiBadRequestResponse({ description: 'La data provista es inválida.' })
  @Post('sendMail')
  sendMail(@Body() mail: any) {
    this.mailService.sendMailToUnder(mail);
    return { message: 'Email sent' };
  }
}
