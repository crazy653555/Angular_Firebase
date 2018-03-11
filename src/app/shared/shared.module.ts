import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule, JsonPipe } from '@angular/common';
import { PrettyJsonModule } from 'angular2-prettyjson';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: [
    PrettyJsonModule// 把prettyJsonModule export出來，這樣一來在外不就都能使用這個module了
  ]
})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: SharedModule,
      providers: [

      ]
    };
  }
}
