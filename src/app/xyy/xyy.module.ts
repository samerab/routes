import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AaaModule } from '../aaa/aaa.module';
import { ZzzModule } from '../zzz/zzz.module';
import { SssModule } from '../sss/sss.module';

@NgModule({
  imports: [
    CommonModule,
    AaaModule,
    ZzzModule,
    SssModule
  ],
  declarations: []
})
export class XyyModule { }
