/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
 /* tslint:disable */


import * as import0 from '@angular/core';
import * as import1 from './test.module';
class TestModuleInjector extends import0.ɵNgModuleInjector<import1.TestModule> {
  _TestModule_0:import1.TestModule;
  constructor(parent:import0.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  createInternal():import1.TestModule {
    this._TestModule_0 = new import1.TestModule();
    return this._TestModule_0;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import1.TestModule)) { return this._TestModule_0; }
    return notFoundResult;
  }
  destroyInternal():void {
  }
}
export const TestModuleNgFactory:import0.NgModuleFactory<import1.TestModule> = new import0.NgModuleFactory<any>(TestModuleInjector,import1.TestModule);
//# sourceMappingURL=data:application/json;base64,eyJmaWxlIjoiQzovd3d3L3dlYnNpdGV3b3Jrcy9jcmFmdHV0aWxpdHkvc3JjL2NhdC90ZXN0Y29tcC90ZXN0Lm1vZHVsZS5uZ2ZhY3RvcnkudHMiLCJ2ZXJzaW9uIjozLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJuZzovLy9DOi93d3cvd2Vic2l0ZXdvcmtzL2NyYWZ0dXRpbGl0eS9zcmMvY2F0L3Rlc3Rjb21wL3Rlc3QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIiAiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
