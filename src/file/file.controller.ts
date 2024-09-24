import { Controller, Get, Post, Param, UseInterceptors, UploadedFile, BadRequestException } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { FileService } from './file.service';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) { }

  @Post('image')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads', // Carpeta donde se guardan las imágenes
        filename: (req, file, cb) => {
          const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
          const fileExt = extname(file.originalname);
          const fileName = `${file.fieldname}-${uniqueSuffix}${fileExt}`;
          cb(null, fileName);
        },
      }),
      fileFilter: (req, file, cb) => {
        const allowedMimeTypes = ['image/jpeg', 'image/png'];
        if (!allowedMimeTypes.includes(file.mimetype)) {
          return cb(
            new BadRequestException('Only JPG and PNG files are allowed'),
            false,
          );
        }
        cb(null, true);
      },
      limits: {
        fileSize: 5 * 1024 * 1024,
      }
    }),
  )
  
  @Post()
  async create(@UploadedFile() file: Express.Multer.File) {
    const savedFile = await this.fileService.create(file.filename);
    return {
      message: 'Archivo subido exitosamente',
      filename: file.filename,
      savedFile
    };
  }

  @Get('files')
  async findAll() {
    return this.fileService.findAll();
  }

  @Get(':fileName')
  async findOne(@Param('fileName') fileName: string) {
    return this.fileService.findOne(fileName);
  }

}
