import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { LContentComponent } from './l-content/l-content.component';

@NgModule({
  declarations: [BaseComponent, LContentComponent],
  imports: [CommonModule, RouterModule]
})
export class ThemeModule {}
