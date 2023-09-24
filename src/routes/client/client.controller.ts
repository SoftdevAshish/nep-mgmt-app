import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClient } from './dtos/CreateClient';
import { UpdateClient } from './dtos/UpdateClient';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('client')
@ApiTags('Client')
export class ClientController {
  constructor(private clientService: ClientService) {}

  @Get()
  @ApiOperation({ description: 'Get all client list.' })
  getAll() {
    return this.clientService.getAllClient();
  }

  @Post()
  @ApiOperation({ description: 'Create client' })
  @UsePipes(ValidationPipe)
  create(@Body() createClientDto: CreateClient) {
    return this.clientService.saveClient(createClientDto);
  }

  @Get(':id')
  @ApiOperation({ description: 'Get the client details.' })
  getClientById(@Param('id') id: number) {
    return this.clientService.getClientById(id);
  }

  @Put(':id')
  @ApiOperation({ description: 'Update client details' })
  @UsePipes(ValidationPipe)
  async UpdateClient(
    @Param('id') id: number,
    @Body() updateClient: UpdateClient,
  ) {
    const client = await this.clientService.updateClient(id, updateClient);
    console.log(client);

    return client;
  }

  @Delete(':id')
  @ApiOperation({ description: 'Delete client' })
  destroyClient(@Param('id') id: number) {
    return this.clientService.destroyClient(id);
  }
}
