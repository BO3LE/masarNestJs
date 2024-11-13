import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';



@Entity('user')
export class Rejest {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({nullable : true})
    firstName: string;
  
    @Column({nullable : true})
    lastName: string;
  
    @Column({ default: true })
    isActive: boolean;

    @Column({nullable : true })
    phoneNumber: number;

    @Column({nullable:true})
    email: string;

}
