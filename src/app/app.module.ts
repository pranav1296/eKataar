import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VendorComponent } from './components/vendor/vendor.component';
import { ConsumerComponent } from './components/consumer/consumer.component';
import { VendoreProfileCreateComponent } from './components/vendor/vendore-profile-create/vendore-profile-create.component';
import { VendoreProfileComponent } from './components/vendor/vendore-profile/vendore-profile.component';
import { ConsumerProfileCreateComponent } from './components/consumer/consumer-profile-create/consumer-profile-create.component';
import { ConsumerProfileComponent } from './components/consumer/consumer-profile/consumer-profile.component';
import { VerifierComponent } from './components/verifier/verifier.component';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    VendorComponent,
    ConsumerComponent,
    VendoreProfileCreateComponent,
    VendoreProfileComponent,
    ConsumerProfileCreateComponent,
    ConsumerProfileComponent,
    VerifierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
