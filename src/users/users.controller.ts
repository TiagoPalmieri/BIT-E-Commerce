import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guards';

@ApiTags('users') 
@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' }) 
  @ApiBody({ type: CreateUserDto })  
  @ApiResponse({ status: 201, description: 'User successfully created.' })  // Respuesta esperada
  @ApiResponse({ status: 400, description: 'Bad request.' })  // Respuesta en caso de error
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve a list of all users' })
  @ApiResponse({
    status: 200,
    description: 'List of users retrieved successfully.',
    schema: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          email: { type: 'string', example: 'kevin@gmail.com' },
          password: { type: 'string', example: 'Pepe123*' },
          fullname: { type: 'string', example: 'pepito' },
          dni: { type: 'string', nullable: true, example: null },
          address: { type: 'string', nullable: true, example: null },
          id: { type: 'number', example: 31 },
          telephone: { type: 'number', example: 0 },
          rol: { type: 'string', example: 'User' },
        },
      },
    },
  })
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a single user by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID of the user' })  // Parametro de la URL
  @ApiResponse({
    status: 200,
    description: 'List of users retrieved successfully.',
    schema: {
        type: 'object',
        properties: {
          email: { type: 'string', example: 'kevin@gmail.com' },
          password: { type: 'string', example: 'Pepe123*' },
          fullname: { type: 'string', example: 'pepito' },
          dni: { type: 'string', nullable: true, example: null },
          address: { type: 'string', nullable: true, example: null },
          id: { type: 'number', example: 31 },
          telephone: { type: 'number', example: 0 },
          rol: { type: 'string', example: 'User' },
      },
    },
  })
  @ApiResponse({ status: 404, description: 'User not found.' })
  findOne(@Param('id') id: number) {
    return this.usersService.findOneById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a user by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID of the user' })
  @ApiBody({ type: UpdateUserDto })
  @ApiResponse({ status: 200, description: 'User updated successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a user by ID' })
  @ApiParam({ name: 'id', type: Number, description: 'ID of the user' })
  @ApiResponse({ status: 200, description: 'User deleted successfully.' })
  @ApiResponse({ status: 404, description: 'User not found.' })
  remove(@Param('id') id: number) {
    return this.usersService.remove(id);
  }
}
