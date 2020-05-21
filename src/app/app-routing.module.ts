import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VendoreProfileCreateComponent} from '../app/components/vendor/vendore-profile-create/vendore-profile-create.component';
import {ConsumerProfileCreateComponent} from "../app/components/consumer/consumer-profile-create/consumer-profile-create.component";
import { SignUpComponent } from "../app/components/sign-up/sign-up.component";
import { ConsumerProfileComponent } from "../app/components/consumer/consumer-profile/consumer-profile.component";
import { VendoreProfileComponent } from "../app/components/vendor/vendore-profile/vendore-profile.component";
import { VerifierComponent } from "../app/components/verifier/verifier.component";

const routes: Routes = [
  { path: "", component: SignUpComponent },
  { path: "createvendor", component: VendoreProfileCreateComponent },
  { path: "createconsumer", component: ConsumerProfileCreateComponent },
  { path: "vendor", component: VendoreProfileComponent },
  { path: "consumer", component: ConsumerProfileComponent },
  { path: "alotted", component: VerifierComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
