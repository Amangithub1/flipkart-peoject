import { Routes } from "@angular/router";
import { MobileComponent } from "../mobile/mobile.component";
import { MobileaccComponent } from '../mobileacc/mobileacc.component';
import { SpeakerComponent } from '../speaker/speaker.component';
import { ComputeraccComponent } from '../computeracc/computeracc.component';
import { WashingmachineComponent } from '../washingmachine/washingmachine.component';
import { RefrigeratorComponent } from '../refrigerator/refrigerator.component';
import { AirconditionerComponent } from '../airconditioner/airconditioner.component';
import { FootwearComponent } from '../footwear/footwear.component';
import { BottomwearComponent } from '../bottomwear/bottomwear.component';
import { WinterwearComponent } from '../winterwear/winterwear.component';
import { BoyswatchComponent } from '../boyswatch/boyswatch.component';
import { EthnicwearComponent } from '../ethnicwear/ethnicwear.component';
import { SandalComponent } from '../sandal/sandal.component';
import { JwellerryComponent } from '../jwellerry/jwellerry.component';
import { WatchComponent } from '../watch/watch.component';
import { ClothComponent } from '../cloth/cloth.component';
import { BabywootwearComponent } from '../babywootwear/babywootwear.component';
import { ToyComponent } from '../toy/toy.component';
import { SofaComponent } from '../sofa/sofa.component';
import { BedComponent } from '../bed/bed.component';
import { ClockComponent } from '../clock/clock.component';
import { SportsComponent } from '../sports/sports.component';
import { BookComponent } from '../book/book.component';



export const routes: Routes = [
  {
    path: '',
    component: MobileComponent
  },
  {
    path: 'mobile-accessories',
    component: MobileaccComponent
  },
  {
    path: 'speaker',
    component: SpeakerComponent
  },
  {
    path: 'airconditioner',
    component: AirconditionerComponent
  },
  {
    path: 'computer-accessories',
    component: ComputeraccComponent
  },
  {
    path: 'washing-machine',
    component: WashingmachineComponent
  },
  {
    path: 'refrigerator',
    component: RefrigeratorComponent
  },
  {
    path: 'footwear',
    component: FootwearComponent
  },
  {
    path: 'bottomwear',
    component: BottomwearComponent 
  },
  {
    path: 'winterwear',
    component:  WinterwearComponent
  },
  {
    path: 'boyswatch',
    component: BoyswatchComponent
  },
  {
    path: 'ethnic-wear',
    component: EthnicwearComponent
  },
  {
    path: 'sandal',
    component: SandalComponent
  },
  {
    path: 'jwellery',
    component: JwellerryComponent
  },
  {
    path: 'watch',
    component: WatchComponent 
  },
  {
    path: 'cloth',
    component: ClothComponent
  },
  {
    path: 'babywootwear',
    component:  BabywootwearComponent
  },
  {
    path: 'toy',
    component: ToyComponent
  },
  {
    path: 'sofa',
    component: SofaComponent
  },
   {
    path: 'bed',
    component: BedComponent
  },
   {
    path: 'clock',
    component: ClockComponent
  },
   {
    path: 'sports',
    component: SportsComponent
  },
   {
    path: 'book',
    component: BookComponent
  },
   
];
