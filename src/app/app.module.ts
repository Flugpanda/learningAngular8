import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FirstComponentComponent } from './first-component/first-component.component';
import { SecondComponentComponent } from './second-component/second-component.component';
import { ThirdComponentComponent } from './third-component/third-component.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { ClassbindingsComponent } from './classbindings/classbindings.component';
import { StylebindingComponent } from './stylebinding/stylebinding.component';
import { EventbindingComponent } from './eventbinding/eventbinding.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgforComponent } from './ngfor/ngfor.component';
import { ComponentinteractionParentComponent } from './componentinteraction-parent/componentinteraction-parent.component';
import { ComponentinteractionChildComponent } from './componentinteraction-child/componentinteraction-child.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent,
    ThirdComponentComponent,
    InterpolationComponent,
    PropertybindingComponent,
    ClassbindingsComponent,
    StylebindingComponent,
    EventbindingComponent,
    DatabindingComponent,
    TwowaybindingComponent,
    NgifComponent,
    NgswitchComponent,
    NgforComponent,
    ComponentinteractionParentComponent,
    ComponentinteractionChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
