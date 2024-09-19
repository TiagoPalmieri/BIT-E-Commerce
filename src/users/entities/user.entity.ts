import { Transform } from "class-transformer";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

export enum UserRole {
    Admin = 'Admin',
    User = 'User',
    Moderator = 'Mod',
}

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column({select: false})
    password: string;

    @Column()
    fullname: string;

    @Column({ default: 0 })
    telephone: number;

    @Column({ nullable: true })
    dni: string;

    @Column({ nullable: true })
    @Transform(({ value }) => value.replace(/<[^>]*>?/gm, ''))
    address: string;

    @Column({
        type: 'enum',
        enum: UserRole,
        default: UserRole.User
    })
    rol: UserRole;
}
