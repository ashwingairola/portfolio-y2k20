import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardFooterComponent } from './components/card-footer/card-footer.component';
import { CardImageComponent } from './components/card-image/card-image.component';



@NgModule({
  declarations: [CardComponent, CardHeaderComponent, CardFooterComponent, CardImageComponent],
  imports: [
    CommonModule
  ],
  exports: [CardComponent, CardHeaderComponent, CardFooterComponent, CardImageComponent]
})
export class CardModule { }
